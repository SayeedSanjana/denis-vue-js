<template>
    <div>
        <!-- <div
            class="container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300 bg-regal-white border border-regal-cyan border-opacity-20 p-4">
            <div class="text-regal-teal font-semibold">
                Patient
            </div>
        </div> -->

         
            <!-- Profile infomation START  -->
            <div class="border-b-2 bg-gray-50 hover:overflow-hidden ">
                <div class="border-r-4 border-green-600 bg-green-50 text-regal-teal text-xl font-semibold p-3">
                    Patient
                </div>
                <hr class="border-b mb-1"/>

                <div v-for="(val,k) in patientInfoCardLabels" :key="k" class="grid grid-cols-3 px-8 py-2">
                    <div class=" text-regal-teal text-sm font-semibold text-left">
                        {{val}}
                    </div>
                    <div class="grid col-span-2 place-items-start text-regal-teal text-base font-medium">
                        : {{ k === 'dob' ? calculateAge(patientInfo[k]) : patientInfo[k] || `${val} not recorded`}}
                    </div>
                </div>
                
               
                <div class="flex flex-row-reverse px-6 py-3">
                    <button name="edit" class="btn" @click="openModal($event)"> Edit</button>
                </div>
            </div>
            <!--  Profile infomation END -->

            <div class=" border-b-2 bg-gray-50 hover:overflow-hidden ">

                <div class="border-r-4 border-red-400 bg-red-50 text-regal-teal text-xl font-semibold p-3">
                    Medical History
                </div>
                <hr class="border-b mb-1">

                <button name="addHst" @click="openModal($event)" class="btn-underline">
                    Add History 
                </button>
                <!-- <div class="grid grid-cols-4 gap-1 mt-4 "> -->
                    
                    <!-- <div class="grid col-span-2 place-items-center">
                        <Input />
                    </div> -->
                    <!-- <div class="grid place-items-center">
                        <select name="" id=""
                            class="appearance-none block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded py-1 px-3 leading-tight focus:outline-none focus:bg-white">
                            <option value="">Allergies</option>
                            <option value="">Diseases</option>
                            <option value="">Personal Habits</option>
                        </select>
                    </div> -->
                    <!-- <div> -->
                        <!-- <Button>Add</Button> -->
                        <!-- <button class="btn btn-hover">Add</button> -->
                    <!-- </div> -->
                <!-- </div> -->

                <History :items="patientInfo.allergies" >
                    Allergies
                </History>

                <History :items="patientInfo.disease">
                    Diseases
                </History>

                <History :items="patientInfo.personalHabits">
                    Personal Habits
                </History>
            </div>

        <!-- <div v-if="isEditPatientActive"> -->
        <!-- <div v-if="isAddHistorytive"> -->
            <GeneralInfo v-if="isEditPatientActive" :patient="patientInfo" @close="closeModal"/>
            <AddMedicalHistory v-if="isAddHistoryActive" :patient="patientInfo" @close="closeModal" @onUpdate="(val) => patientInfo = val"/>
           
        <!-- </div> -->
    </div>
</template>

<script>
    import axios from "axios";
   
    // import moment from "moment";
    // import Button from "../../components/reusable/ButtonComponent.vue";
    // import Input from "../../components/reusable/InputFieldComponent.vue";
   
    import History from "../../components/MedicalHistory.vue";
    import GeneralInfo from "../../components/GeneralInfoModal.vue";
    import AddMedicalHistory from "./_AddMedicalHistory.vue"
   
    export default {
        components: {
         
            // Input,
            // Button,
            History,
            GeneralInfo,
            AddMedicalHistory
        },
        props: {
            pat: Object
        },
        created() {
        //    this.removeMedicalHistory(this.$route.params.id);
      
        },
        watch:{
            pat: function(val){
                this.getPat(val)
            },
            patientInfoUpdate(val){
                //  reassign updated info to patientInfo
                Object.assign(this.patientInfo, val);
            }
        },
        data() {
            return {
                // some:'fall back content',
                // datenow: moment().subtract(10, 'days').calendar(),
                token: localStorage.getItem('token'),
               
                // dob: "",
                // date: "",
                style:{
                    btn: 'btn'
                },
                isEditPatientActive: false,
                isAddHistoryActive: false,
                patientInfo: {
                    name: "",
                    gender: "",
                    dob: "",
                    phone:"",
                    nid: "",
                    allergies: [],
                    disease:[],
                    personalHabits: [], 

                },
                patientInfoCardLabels:{
                    name: "Name",
                    gender: "Gender",
                    dob: "Age",
                    phone:"Phone",
                    nid: "NID",
                },
                category:{
                    remove:{
                        allergies:[],
                        disease:[],
                        personalHabits:[]
                    }
                }

            }
        },
        
        methods: {
            getPat(i){
                Object.assign(this.patientInfo, i);
            },
            calculateAge(birthYear){
                let ageDifMs = Date.now() - new Date(birthYear).getTime();
                const ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970) + ' y';
            },
            openModal(e) {
                if(e.target.name === 'edit')
                    this.isEditPatientActive = true;
                else if(e.target.name === 'addHst')
                    this.isAddHistoryActive = true;
            },

            closeModal() {
                this.isEditPatientActive = false;
                this.isAddHistoryActive = false;
            },

            async removeMedicalHistory(){
                try {
                    const response = await axios.put('/patients/' + this.$route.params.id, { category: this.category
                    })
                    console.log(response.data.data);

                } catch (error) {
                    console.log(error);
                    
                }
            }

            // patientInfoUpdate(val){
            //     Object.assign(this.patientInfo, val);
            // }
        }
    }
</script>

<style scoped>
.btn{
    @apply py-1 px-4 bg-regal-teal text-white font-bold rounded border border-regal-teal;
}
.btn:hover{
    @apply underline text-regal-teal bg-transparent;
}

.btn-underline{
    @apply py-2 px-4 text-regal-teal text-lg underline tracking-wider;
}
.btn-underline:hover{
    @apply text-regal-cyan-teal;
}
</style>