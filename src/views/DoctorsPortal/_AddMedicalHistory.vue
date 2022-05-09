<script>
import axios from 'axios';
 import swal from 'sweetalert';
import useValidate from '@vuelidate/core';
import Modal from "../../components/reusable/Modal.vue";
import {minLength,maxLength,helpers } from '@vuelidate/validators';

export default {
    components: {
        Modal,

    },

    props: {
        patient: {
            type: Object,
        },
    },
    data() {
        return {
            ...Object.assign(
                {
                    allergies: [],
                    disease: [],
                    personalHabits: [],
                },
                this.patient
            ),
            history: {
                    allergies: [],
                    disease: [],
                    personalHabits: [],   
            },
            label:"add",
            picked: "allergies",
            inputHistory:"",    
            message:"",
                    
                
        };
    },
    setup(){ 
        return {
            v$:useValidate()
        }
    },
     validations() {
            return {
                inputHistory:{
                    minLength: minLength(3),
                    maxLength: maxLength(20),
                    duplicate: helpers.withMessage('Duplicate value',(value)=>{
                        switch (this.picked) {
                            case "allergies":

                                return !this.isDuplicate(value, this.history.allergies)
                            case "disease":

                                return !this.isDuplicate(value, this.history.disease);
                            case "personalHabits":

                                return !this.isDuplicate(value, this.history.personalHabits);
                        
                            default:
                                break;
                        }
                    })
                  
                }
            }
        },
    computed:{
        isEnabled(){
           if(this.history.allergies.length>0 || this.history.disease.length>0 || this.history.personalHabits.length>0){
                
                return true;
            }
            return false;
        }
    },
    methods: {
        isDuplicate(item, arr) {
            return arr.includes(item);
        },
        async saveMedicalHistory(){
            try {
                const response = await axios.put('/patients/' + this.$route.params.id, {history:this.history , label : this.label} )
                this.$emit('onUpdate', response.data.data);
                this.$emit('close');
                 swal({
                    title: "Success",
                    text: "Saved!",
                    icon: "success",
                    timer: 1000,
                    buttons: false
                });
            } 
           
            catch (error) {
                console.log(error);
                swal({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    // timer: 1000,
                    buttons: true,
                })
                
            }
            
        },
        addHistory(){
            if (!this.v$.inputHistory.$error && this.inputHistory.length>0) {
                switch (this.picked) {
                    
                    case "allergies":
                        
                        this.history.allergies.push(this.inputHistory.toLowerCase());
                        break;

                    case "disease":
                            this.history.disease.push(this.inputHistory.toLowerCase())

                        break;

                    case "personalHabits":
                            this.history.personalHabits.push(this.inputHistory.toLowerCase())
    
                        break;

                    default:
                        break;
                }
                this.inputHistory="";
            }     
        },
        removeHistory(item){
            switch (this.picked) {
                case "allergies":
                    this.history.allergies.splice(this.history.allergies.indexOf(item), 1);
                    break;
                case "disease":
                    this.history.disease.splice(this.history.disease.indexOf(item), 1);
                    break;
                case "personalHabits":
                    this.history.personalHabits.splice(this.history.personalHabits.indexOf(item), 1);
                    break;
                default:
                    break;}
        }

        

    }
};
</script>

<template>
    <Modal :width="'w-1/2'">
        <template v-slot:header> 
            <h1 class="font-bold text-xl p-2">Add Medical History</h1>
        </template>

        <template v-slot:body>
            <div class="mx-10">
                <!-- {{this.$route.params.id}} -->
                <ul v-show="v$.$error" class="error-banner">

                    <li v-for="error of v$.$errors" :key="error.$uid">
                        {{error.$message}}
                    </li>
                </ul>
                
                <form @submit.prevent="" id="selectors" class="flex justify-between items-center">
                    <div class="relative"> 
                        <input type="text" class="py-2 w-80 pl-5 pr-20 rounded-lg z-0 border border-regal-teal border-opacity-50 focus:border-regal-blue focus:shadow focus:outline-none" placeholder="Add History..." v-model="v$.inputHistory.$model">
                        <div class="absolute top-0 right-0">
                            
                            <button class="btn add" @click="addHistory">+</button>
                            
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="pr-4">
                            <input
                                class="h-5 w-5 appearance-none checked:bg-regal-cyan ring-1 ring-regal-teal border-4 border-white rounded-full mt-1 align-top bg-center mr-2 cursor-pointer"
                                type="radio"
                                name="option"
                                id="option1"
                                value="allergies"
                                checked
                                v-model="picked"

                            />
                            <label
                                class="text-gray-800"
                                for="option1"
                                >Allergies</label
                            >
                        </div>
                        <div class="pr-4">
                            <input
                                class="h-5 w-5 appearance-none checked:bg-regal-cyan ring-1 ring-regal-teal border-4 border-white rounded-full mt-1 align-top bg-center mr-2 cursor-pointer"
                                type="radio"
                                name="option"
                                id="option2"
                                value="disease"
                                v-model="picked"
                                
                            />
                            <label
                                class="text-gray-800"
                                for="option2"
                                > disease </label
                            >
                        </div>
                        <div class="pr-4">
                            <input
                                class="h-5 w-5 appearance-none checked:bg-regal-cyan ring-1 ring-regal-teal border-4 border-white rounded-full mt-1 align-top bg-center mr-2 cursor-pointer"
                                type="radio"
                                name="option"
                                id="option3"
                                value="personalHabits"
                                v-model="picked"
                            />
                            <label
                                class="text-gray-800"
                                for="option3"
                                >Personal Habits</label
                            >
                        </div>
                    </div>
                    <button :class="{'btn': isEnabled, 'btn-disabled': !isEnabled}" :disabled="!(isEnabled)" @click="saveMedicalHistory" >save</button>
                  
                </form>
                 
                <section class=" mt-10 flex flex-row">
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-red-900 underline"> Allergies</summary>
                           
                            <ul class="mx-auto px-4 py-1">

                                <li v-for="(data,index) in history.allergies" :key="data" class="flex justify-between py-1"> 

                                    <p>{{data}}</p>
                                    <button :value="index" @click="removeHistory">X</button>
                                </li>

                            </ul>
                        </article>
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-green-800 underline"> disease</summary>
                            
                            <ul class="mx-auto px-4">
                                <li v-for="(data,index) in history.disease" :key="data" class="flex justify-between py-1"> 
                                    <p>{{data}}</p>
                                    <button :value="index" @click="removeHistory">X</button>
                                </li>

                            </ul>
                        </article>
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-yellow-600 underline"> Personal Habits</summary>
                            
                            <ul class="mx-auto px-4">
                                <li v-for="(data,index) in history.personalHabits" :key="data" class="flex justify-between py-1"> 
                                    <p>{{data}}</p>
                                    <button :value="index" @click="removeHistory">X</button>
                                </li>

                            </ul>
                        </article>
                        
                </section>

            </div>
        </template>
    </Modal>
</template>

<style scoped>
.btn{
    @apply py-2 px-4 bg-regal-teal text-white font-bold rounded border border-regal-teal;
}
.btn:hover {
    @apply  text-regal-teal bg-transparent;
}
.btn.add {
    @apply  rounded-l-none rounded-r-lg border;
}
.error-banner{
    @apply block py-2 px-4 border-l-4 mb-4 bg-red-100 border-red-400 font-semibold text-lg text-red-800 text-left;
}
.btn-disabled{
    @apply py-2 px-4 bg-regal-teal text-white font-bold rounded border cursor-not-allowed bg-opacity-50 ;
}

</style>
