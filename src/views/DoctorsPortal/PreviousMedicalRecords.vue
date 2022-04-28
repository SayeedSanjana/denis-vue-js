<template>
    <div>
        <div
            class="container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300 bg-regal-white border border-regal-cyan border-opacity-20 py-3">
            <div class="m-0.5 text-regal-teal font-medium">
                Patient Information
            </div>
        </div>


        <div class="flex flex-col justify-between flex-1 pb-4 ">

            <div class="bg-regal-white border-b ">
                <div class="grid grid-cols-3 px-8 py-2 text-gray-700 ">
                    <label class=" text-regal-teal text-sm font-bold  text-left">
                        Patient Name
                    </label>
                    <p class="grid col-span-2 place-items-start text-regal-teal text-sm font-medium">
                        : {{this.formData.name}}
                    </p>
                </div>

                <div class="grid grid-cols-3 px-8 py-2 text-gray-700 ">
                    <label class="text-regal-teal text-sm font-bold text-left">
                        Gender
                    </label>

                    <p class="grid col-span-2 place-items-start text-regal-teal text-sm font-medium">
                        : {{this.formData.gender}}
                    </p>
                </div>
                <div class="grid grid-cols-3 px-8 py-2 text-gray-700 ">
                    <div class="text-regal-teal text-sm font-bold  text-left">
                        Age
                    </div>

                    <div class="grid col-span-2 place-items-start text-regal-teal text-sm font-medium">
                        : {{this.formData.dob}} years
                    </div>
                </div>
                <div class="grid grid-cols-3 px-8 py-2 text-gray-700 ">
                    <label class="text-regal-teal text-sm font-bold text-left">
                        Phone
                    </label>

                    <p class="grid col-span-2 place-items-start text-regal-teal text-sm font-medium">
                        : {{this.formData.phone}}
                    </p>
                </div>
                <div class="grid grid-cols-3 px-8 py-2 text-gray-700 ">
                    <label class="text-regal-teal text-sm font-bold text-left">
                        Occupation
                    </label>

                    <p class="grid col-span-2 place-items-start text-regal-teal text-sm font-medium">
                        : {{this.formData.occupation}}
                    </p>
                </div>
                <div class="grid grid-cols-3 px-8 py-2 text-gray-700 ">
                    <label class="text-regal-teal text-sm font-bold text-left">
                        Address
                    </label>

                    <p class="grid col-span-2 place-items-start text-regal-teal text-sm font-medium truncate">
                        : {{this.formData.address}}
                    </p>
                </div>
               
                <div class="grid grid-cols-1 place-items-end px-6 py-2">
                    <Button :text="button.edit.text" @click="modal" />
                </div>
            </div>

             <div
            class="container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300  border border-regal-cyan border-opacity-20 py-3">
            <div class="m-0.5 text-regal-teal font-medium">
                Medical History
            </div>
        </div>

            <div class="grid grid-cols-4 gap-1 mt-4 ">
                
                <div class="grid col-span-2 place-items-center">
                    <Input />
                </div>
                <div class="grid place-items-center">
                    <select name="" id=""
                        class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal border-opacity-50 rounded py-1 px-3  leading-tight focus:outline-none focus:bg-white">
                        <option value="">Allergies</option>
                        <option value="">Diseases</option>
                        <option value="">Personal Habits</option>
                    </select>
                </div>
                <div>
                    <Button :text="button.add.text" />
                </div>
            </div>

            <div>
                <History :label="formData.label.allergies" :items="formData.allergies " />

                <History :label="formData.label.diseases" :items="formData.diseases" />

                <History :label="formData.label.personalHabits" :items="formData.personalHabits" />

            </div>

        </div>
        <div v-if="openModal">
            <GeneralInfo @closeModal="closeModal" :pat="pat"/>
        </div>
    </div>
</template>

<script>
    // import axios from "axios";
   
    import moment from "moment";
    import Button from "../../components/reusable/ButtonComponent.vue";
    import Input from "../../components/reusable/InputFieldComponent.vue";
    import History from "../../components/MedicalHistory.vue";
    import GeneralInfo from "../../components/GeneralInfoModal.vue";
   
    export default {
        components: {
         
            Input,
            Button,
            History,
            GeneralInfo
        },
        props: {
            pat: Object
        },
        created() {
           
      
        },
        watch:{
            pat: function(val){
                this.getPat(val)
            }
        },
        data() {
            return {
                datenow: moment().subtract(10, 'days').calendar(),
                token: localStorage.getItem('token'),
                dob: "",
                date: "",
                openModal: false,
                formData: {
                    name: "",
                    gender: "",
                    dob: "",
                    phone:"",
                    label:{
                        allergies:"Allergies",
                        diseases:"Diseases",
                        personalHabits:"Personal Habits"
                    },
                    allergies: [],
                    diseases:[],
                    personalHabits: [], 

                },

                button:{
                    edit: {
                        text: "Edit",  
                    },
                    add:{
                        text: "Add",
                    }

                },
                // history:{
                //     allergies:{
                //         label: "Allergies",   
                //     },
                //     diseases:{
                //         label: "Diseases",
                       
                //     },
                //     personalHabits:{
                //         label: "Personal Habits",
                      
                //     }
                // }
            }
        },
        methods: {
            getPat(i){
                // this.formData.name = i.name,
                // this.formData.gender= i.gender,
                // this.formData.phone = i.phone,
                // this.formData.dob = i.dob,

                // this.formData.allergies = i.allergies,
                // this.formData.diseases = i.diseases,
                // this.formData.personalHabits = i.personalHabits
                Object.assign(this.formData, i);

                //get age in year plus month
                const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
                        const ageDate = new Date(ageDifMs);
                        this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);

                 

            },
            modal() {
                this.openModal = true
            },

            closeModal() {
                this.openModal = false
            },


            // async getPosts(id) {
            //     await axios.get('patients/' + id, {
            //             headers: {
            //                 "Authorization": `Bearer ${localStorage.getItem('token') }`
            //             }
            //         })
            //         .then((response) => {
            //             this.formData = response.data.data;
            //             const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
            //             const ageDate = new Date(ageDifMs);
            //             this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
            //             //console.log(this.formData.dob)
            //         })
            //         .catch((error) => {
            //             console.log(error)
            //         })
            // },
        }
    }
</script>

<style scoped>
</style>