
<template>
   <div>
        <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white ">
            <h2 class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 ">Treatment Note</h2>
        

              <!-- <div hidden>   {{parseJwt(this.token)}} {{this.getUser()}}</div> -->
           <form @submit.prevent="createTreatment" class="w-full max-w-lg">

            <div class="mt-6 ">
                <div class="items-center -mx-2 md:flex">
                
                    <div class="w-full mx-2">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Patient
                            Name</label>

                        <input  v-model="formData.patientName"  readonly
                            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            type="text">
                    </div>

                    <div class="w-full mx-2 mt-4 md:mt-0">
                        <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Date</label>

                        <input v-model="formData.date" readonly
                            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    </div>
                </div>

            <div class=" flex justify-start items-start mt-5">
                <label for="" class="m-3 text-gray-800 ">Is All Teeth?</label>
                <input v-model="formData.isAll" value="true" type="radio"
                    class="form-radio h-5 w-5 text-indigo-600 mt-3"><span class="ml-2 mr-2 text-gray-700 mt-3">Yes</span>
                <input v-model="formData.isAll" value="false" type="radio" checked="checked"
                    class="form-radio h-5 w-5 text-indigo-600 mt-3"><span class="ml-2 text-gray-700 mt-3">No</span>
            </div>
            
                {{this.isAll()}}
                  <p v-if="disabled == 1" class="text-red-500 mb-4 text-center">You can't enter tooth number</p>
                <div class="mt-6">
                      <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Tooth
                            </label>
                     <div class="relative">
                    <input v-model="teeth"  @keypress="isNumber($event)" :disabled= "disabled == 1"
                            class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  
                  
                </div>
                </div>

            <div class="flex justify-start items-start mt-5">
                <label for="" class="m-3 text-gray-800">Is BabyTooth?</label>
                <input v-model="formData.isBabyTooth" value="true" type="radio"
                    class="form-radio h-5 w-5 text-indigo-600 mt-3"><span class="ml-2 mr-2 text-gray-700 mt-3">Yes</span>
                <input v-model="formData.isBabyTooth" value="false" type="radio" checked="checked"
                    class="form-radio h-5 w-5 text-indigo-600 mt-3"><span class="ml-2 text-gray-700 mt-3">No</span>
            </div>

                <div class="w-full mt-4">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Treatment
                        Note*</label>
                         
                    <textarea
                    v-model="formData.treatmentDone"
                        class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>
                   <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">Please enter valid input</p>
                <div class="flex justify-center mt-6">
                    <button class="button">Submit</button>
                </div>
                
            </div>
           </form>
            
    <div class=" md:mt-4 ">
          <TreatmentTimeline :treatmentList = "treatmentList"/>
    
            </div>

        </section>
    </div>
</template>

<script>
import TreatmentTimeline from "../../components/TreatmentTimeline.vue";
import axios from "axios"
import swal from "sweetalert"
    export default {
    //      beforeCreate() {
    //     this.$options.components.TreatmentTimeline = TreatmentTimeline;
    // },
    components:{
           TreatmentTimeline
    },
        created(){
         this.getSpecificPatient()
         this.getspecificTreatmentList()
        },
        data() {
        return {
            uid: '',
            teeth: '',
           
            //token: localStorage.getItem('token'),
            disabled: 0,
            formIsValid: true,
            treatmentList:[],
            formData: {
                user: '',
                tooth: [],
                isAll: false,
                isBabyTooth: false,
                patient: '',
                patientName: '',
                treatmentDone: '',
                doctorName: '',
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            },
            form: {},
            items: []
        }
    },
    methods:{
         isAll() {
            if (this.formData.isAll == "true") {
                this.disabled = 1
            } else {
                this.disabled = 0
            }
        },
         isNumber(evt) {
            if (!/\d/.test(evt.key) && evt.key !== ',') {
                return evt.preventDefault();
            } else {
                return true;
            }
        },
         async getSpecificPatient() {
            await axios.get('patients/' + this.$route.params.id
            // ,{
            //         headers: {
            //             "Authorization": `Bearer ${localStorage.getItem('token') }`
            //         }
            //     }
                )
                .then((response) => {
                    this.formData.patientName = response.data.result.name;
                })
                .catch((error) => {
                    console.log(error)
                })
        },
           async createTreatment() {
            this.formIsValid = true;
            // console.log(this.formdata);
            this.formData.patient = this.$route.params.id
            this.formData.user = '614e2d10805ade70e413943c'
            // this.formData.user = this.uid
            this.formData.doctorName = 'Iktisad'
            // this.formData.doctorName = this.user.name
            this.formData.tooth = this.teeth.split(',');
            //this.formData.patientName= 
            if (this.formData.treatmentDone === '') {
                this.formIsValid = false;
               // return;
            } else {
                await axios.post('treatment-notes/create', this.formData
                //  {
                //         headers: {
                //             "Authorization": `Bearer ${localStorage.getItem('token') }`
                //         }
                //     }
                )
                    .then((response) => {
                        console.log(response)
                          swal({title: "Success", text: "Treatment Notecreated Successfully!", icon: 
                    "success" , timer: 1000, buttons: false})
                    this.formData.treatmentDone=""
                    this.teeth=""
                       this.getspecificTreatmentList()
                        //this.doctors=response.data['result']
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                    
            }
        },
         async getspecificTreatmentList() {
            await axios.get('treatment-notes/' + this.$route.params.id + '/patient'
            // {
            //         headers: {
            //             "Authorization": `Bearer ${localStorage.getItem('token') }`
            //         }
            //     }
            )
                .then((response) => {
                   
                    this.treatmentList = response.data['result']
                     console.log(this.treatmentList)
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        }
    
        
    }
</script>

<style lang="scss" scoped>

</style>
