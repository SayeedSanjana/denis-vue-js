<script>
import useValidate from '@vuelidate/core';
import Modal from "../../components/reusable/Modal.vue";
import {required,minLength,maxLength, helpers} from '@vuelidate/validators';

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
             v$:useValidate(),
            ...Object.assign(
                {
                    allergies: [],
                    diseases: [],
                    personalHabits: [],
                },
                this.patient
            ),
            formData: {
                allergies: [],
                diseases: [],
                personalHabits: [],
            },
            picked: "allergies",
            history:"",    
            message:"",
                    
                
        };
    },
     validations() {
            // const duplicate =(value)=>value==(this.allergies.indexOf(value) !== -1 && this.formData.allergies.indexOf(value)!==-1) ===true;
            // const duplicate = '';
            // helpers.withMessage("Duplicate Entry", duplicate)

             return {
                 history:{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(20),
                    duplicate: (value)=>{
                        
                        console.log(this.picked, value);
                        switch(this.picked){
                            case 'allergies':
                                if(this.isDuplicate(value, this.allergies))
                                    helpers.withMessage(`${value} Already Exists In Database`);

                                else if(this.isDuplicate(value, this.formData.allergies)) 
                                    helpers.withMessage(`${value} Already Added To The Allergy List`);

                                break;
                            case 'diseases':
                                if(this.isDuplicate(value, this.diseases))
                                    helpers.withMessage(`${value} Disease Exists In Database`);

                                else if(this.isDuplicate(value, this.formData.diseases)) 
                                    helpers.withMessage(`${value} Already Added To The Disease List`);
                                break;
                            case 'personalHabits':
                                if(this.isDuplicate(value, this.personalHabits))
                                    helpers.withMessage(`${value} Already Exists In Database`);

                                else if(this.isDuplicate(value, this.formData.personalHabits)) 
                                    helpers.withMessage(`${value} Already Added To The Personal Habit List`);
                                break;
                            default:
                                break;
                        }
                    },
                 },
             }
         },
    methods: {
        isDuplicate(item, arr) {
            
            return arr.indexOf(item) !== -1 ? true : false;

        },
        addHistory(){
            switch (this.picked) {
                
                case "allergies":
                    this.v$.$touch();
                    if (!this.v$.history.$error) {
                        // if(!this.isDuplicate(this.history, this.formData.allergies) && !this.isDuplicate(this.history, this.allergies)){
                            this.formData.allergies.push(this.history);
                        // }
                    }
                    // else if(this.isDuplicate(this.history, this.formData.allergies)){
                    //     this.formData.allergies.push(this.history.toLowerCase());
                    // }
                    // this.formData.allergies = [...new Set(this.formData.allergies)];
                
                    break;

                case "diseases":
                    if(this.isDuplicate(this.history, this.diseases)){
                        this.formData.diseases.push(this.history.toLowerCase())
                    }
                    this.formData.diseases = [... new Set(this.formData.diseases)]

                    break;

                case "personalHabits":
                    if(this.isDuplicate(this.history, this.personalHabits)){
                        this.formData.personalHabits.push(this.history.toLowerCase())
                    }
                    this.formData.personalHabits = [... new Set(this.formData.personalHabits)]
   
                    break;

                default: this.message = "";
                    break;
            }
        },

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
                <p v-if="v$.history.$error" class="error-banner">
                    {{v$.history.$errors[0].$message}}
                </p>
                
                <form @submit.prevent="" id="selectors" class="flex justify-between items-center">
                    <div class="relative"> 
                        <input type="text" class="py-2 w-80 pl-5 pr-20 rounded-lg z-0 border border-regal-teal border-opacity-50 focus:border-regal-blue focus:shadow focus:outline-none" placeholder="Add History..." v-model="history" @blur="v$.history.$touch()"  >
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
                                value="diseases"
                                v-model="picked"
                                
                            />
                            <label
                                class="text-gray-800"
                                for="option2"
                                > Diseases </label
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

                    <button class="btn">save</button>
                  
                </form>
                 
                <section class=" mt-10 flex flex-row">
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-red-900 underline"> Allergies</summary>
                           
                            <ul class="mx-auto px-4 py-1">

                                <li v-for="(data,index) in formData.allergies" :key="data" class="flex justify-between py-1"> 

                                    <p>{{data}}</p>
                                    <button :value="index">X</button>
                                </li>

                            </ul>
                        </article>
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-green-800 underline"> Diseases</summary>
                            
                            <ul class="mx-auto px-4">
                                <li v-for="data in formData.diseases" :key="data" class="flex justify-between py-1"> 
                                    <p>{{data}}</p>
                                    <button>X</button>
                                </li>

                            </ul>
                        </article>
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-yellow-600 underline"> Personal Habits</summary>
                            
                            <ul class="mx-auto px-4">
                                <li v-for="data in formData.personalHabits" :key="data" class="flex justify-between py-1"> 
                                    <p>{{data}}</p>
                                    <button >X</button>
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
</style>
