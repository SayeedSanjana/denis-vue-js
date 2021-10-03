<template>
    <div>
          <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
           <!-- <div >  {{parseJwt(this.token)}}
               {{this.uid}}</div>  -->
        <h2 class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 "> Prescription
        </h2>
     

        <form @submit.prevent>
            <div>
                <input hidden type="text" v-model="formData.patient">

            </div>
            <div class="flex justify-between ">

                <div class="w-full lg:w-1/2 p-2">
                    <label class="block mb-2text-md font-semibold text-gray-500 capitalize dark:text-white">C/C</label>

                    <textarea v-model="formData.cc"
                        class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>

                <div class="w-full lg:w-1/2 p-2">
                    <label class="block mb-2text-md font-semibold text-gray-500 capitalize dark:text-white">O/E</label>

                    <textarea v-model="formData.oe"
                        class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>

            </div>
            <div class="flex justify-between">
                  <div class="w-full mt-4 lg:w-1/2 p-2">
                    <label class="block mb-2 text-md font-semibold text-gray-500 capitalize dark:text-white ">Treatment Plan</label>

                    <textarea v-model="formData.treatmentPlan"
                        class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>





                </div>
                <div class="w-full lg:w-1/2 mt-4 p-2">
                    <label class="block mb-2 text-md font-semibold text-gray-500 capitalize dark:text-white">Investigation</label>



                    <textarea v-model="formData.investigation"
                        class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>

                </div>
              
            </div>

<!-- 
            <div class="inline-flex justify-start mt-3">
                <label for="" class="m-3 text-gray-800 items-start">Is Pregnant?</label>
                <input v-model="formData.isPregnant" value="true" type="radio"
                    class="form-radio h-5 w-5 text-indigo-600 items-start"><span class="ml-2 mr-2 text-gray-700">Yes</span>
                <input v-model="formData.isPregnant" value="false" type="radio" checked="checked"
                    class="form-radio h-5 w-5 text-indigo-600 items-start"><span class="ml-2 text-gray-700">No</span>
            </div> -->

            <div class="mt-4">
                <h2 class="text-lg font-semibold text-gray-500 capitalize dark:text-white mt-4"> Medication</h2>
            </div>

            <div>
                <!--medication-->
                <div class=" p-4">

                    <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="category">Category</label>
                            <input v-model="medicine.catagory" id="category" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="name">Medicine Name</label>
                            <input v-model="medicine.name" id="name" type="text" placeholder="Napa"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>



                    </div>
                    <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
                        
                        

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="Frequency">Frequency</label>
                            <!-- <input v-model="medicine.frequency" id="Frequency" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  > -->
                            <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="gender" v-model="medicine.frequency">

                                    <option v-for="f in frequency" :key="f._id">{{f}}</option>

                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="Duration">Duration</label>
                            <input v-model="medicine.duration" id="Duration" type="text" placeholder="1 month"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                       
                        <div>
                            <label class="text-gray-700 dark:text-gray-200 mt-1" for="Meals">Relation with Meal</label>
                            <!-- <input v-model="medicine.relationWithMeals" id="Meals" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"> -->
                            <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="gender" v-model="medicine.relationWithMeals">
                                    <option>Before Meal</option>
                                    <option>After Meal</option>
                                    <option>At BedTime</option>
                                    <option>Between Meals</option>

                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                                <p v-if="!formVal" class="text-red-500 mb-4 text-center">Please enter valid information </p>


                    <div class="flex justify-center">

                        <button class="text-indigo-500 mt-6 hover:text-gray-600 font-semibold" @click="addItem()" >
                            +Add Medicine
                            <!-- <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M21,14h6v20h-6V14z"/><path fill="#fff" d="M14,21h20v6H14V21z"/></svg> -->
                        </button>

                        <!-- <button class="button" @click="deleteMedicationForm(index)" v-show="index||(!index && this.form.medicine.length>1)">
                  Delete
              </button>
                  -->
                    </div>
                </div>
            </div>
            <!--medication-->


            <!--list-->
            <div class="mt-5 " v-if="this.items.length>=1">
               <div >
        
              <table class="w-full   bg-gray-200 text-gray-800 table-auto  ">
                  <thead class="text-center text-gray-800 border-b-2 border-gray-300 text-sm">
                      <th class="px-4 py-3">Category</th>
                      <th class="px-4 py-3">Name</th>
                      <th class="px-4 py-3">Duration</th>
                      <th class="px-4 py-3">Frequency</th>
                      <th class="px-4 py-3">Relation with Meals</th>
                      <th class="px-4 py-3"></th>
                  </thead>

                   <tbody class="" >
                  <tr class="bg-white  border border-gray-300 hover:bg-gray-100"
                      v-for="(item,index) in items " :key="index">
                      <td class="px-4 py-3">{{item.catagory}}</td>
                      <td class="px-4 py-3">{{item.name}}</td>
                      <td class="px-4 py-3">{{item.duration}}</td>
                      <td class="px-4 py-3">{{item.frequency}}</td>
                      <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                      <td class="flex justify-center items-center p-2">
                      <button @click=" deleteItem(index)"
                        class="p-0 w-5 h-5 mt-1 flex justify-center items-center  ">
                         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 496.158 496.158" style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve">
                        <path style="fill:#E04F5F;" d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082
                            c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z"/>
                        <path style="fill:#FFFFFF;" d="M383.546,206.286H112.612c-3.976,0-7.199,3.225-7.199,7.2v69.187c0,3.976,3.224,7.199,7.199,7.199
                            h270.934c3.976,0,7.199-3.224,7.199-7.199v-69.187C390.745,209.511,387.521,206.286,383.546,206.286z"/>

                        </svg>

                       
                       
                    </button>
                      </td>
                  </tr>
                   </tbody>


              </table>
             </div>
             
            </div>


            <!--list-->


            <div class="flex justify-between">
                <div class="w-full  mt-4 p-2">
                    <label class="block mb-4 mt-4 text-lg font-semibold text-gray-500 capitalize dark:text-white">Advice</label>



                    <textarea v-model="formData.advice"
                        class="block w-full h-20 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>

                </div>
                
            </div>
                            <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">Please enter valid prescription information </p>

            <div class="flex justify-center mt-4" >
                <button @click="addPrint" class="button">Preview</button>
            </div>


        </form>

          


       <div class="mt-5 " v-if="openModal" >
                <PrescriptionModal :formData="formData" :date="date" :openModal="openModal" :form1="form1" :age="age" @myEvent="removeModal" :userData="userData"  />
            </div> 

    


    </section>
    </div>
</template>

<script>
import axios from "axios"
//import swal from "sweetalert"
import PrescriptionModal from "../../components/PrescriptionModal.vue";

//import printJS from "print-js"

    export default {
        components:{
         PrescriptionModal
        },
        created(){
          this.getPatient(this.$route.params.id)
          this.parseJwt(this.token)
          this.getUser()
        },
   
         data() {
        return {
            userData:{},
            token: localStorage.getItem('token'),
            formIsValid: true,
            openModal:false,
            formVal: true,
            submit:false,
            Prescription:[],
            frequency: [
                "Daily", "Every Other Day", "Twice A Day", "Three Times A Day", "Four Times A Day", "Every Bed Time", "Every 4 Hours",
                "Every 4 to 6 Hours", "Every Week", "0-0-1", "0-1-0", "0-1-1", "1-0-0", "1-0-1", "1-1-0", "1-1-1", "0-0-0-1", "0-0-1-0", "0-0-1-1",
                "0-1-0-0", "0-1-0-1", "0-1-1-0", "0-1-1-1", "1-0-0-0", "1-0-0-1", "1-0-1-0", "1-0-1-1", "1-1-0-0", "1-1-0-1", "1-1-1-0", "1-1-1-1"
                ],
                
                items: [],
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
              
                uid:'',
               
                medicine: {
                    catagory: '',
                    name: '',
                    frequency: '',
                    duration: '',
                    relationWithMeals: ''
                },
                
                formData: {
                    user:'',
                    patient: '',
                    cc: '',
                    oe: '',
                    medicine: [{
                        catagory:'',
                        name: '',
                        frequency: '',
                        duration: '',
                        relationWithMeals: '',
                      
                    }],
                    investigation:'',
                    advice: '',
                    treatmentPlan: '',
                    isPregnant: false
                },
               form1: {},
               age:''
        
            }
        },
         methods:{
            parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            const payload = JSON.parse(jsonPayload);
            this.uid = payload.sub
            console.log(payload.sub);
            
            //return this.uid;
        },
          addItem() {
                if(this.medicine.name===""|| this.medicine.frequency===""|| this.medicine.duration===""|| this.medicine.relationWithMeals==="" ) {
                        this.formVal = false
                }
                else{
               
                this.items.push(this.medicine)
               
                this.medicine = {
                    catagory: '',
                    name: '',
                    frequency: '',
                    duration: '',
                    relationWithMeals: '',
                  
                }
               
                console.log(this.med)
                this.formVal = true
               
                }
            },
            deleteItem(i) {
                this.items.splice(i, 1)
            },
            
            async getPosts(id){
                await axios.get('prescriptions/' + id + '/list?page=1&limit=10' , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}} )
                .then((response) => {
                    //console.log(response.data);
                    this.Prescription = response.data['result'];
                    console.log(this.Prescription)
                   
                })
                
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retrieving data'
                })
            },
             addPrint(){
                this.formData.patient = this.$route.params.id
                this.formData.user=this.uid
                console.log(this.uid)
                console.log(this.formData)
                this.formData.medicine = [...this.items];
                //this.formData.user='6145812934bfa3eea55fc5a1'
                this.formIsValid = true;
                if (this.formData.cc === '' || this.formData.oe === ''  || this.formData.advice === '' || this.formData.treatmentPlan === '' || this.formData.medicine.name === '' ||
                this.formData.medicine.frequency === '' || this.formData.medicine.duration === '' || this.formData.medicine.relationWithMeals === '' ) {
                this.formIsValid = false;
                return;
            }else{
                   this.formIsValid = true;
                   this.openModal=true
            }

             },
        async getPatient(id) {
        await axios.get('patients/' + id,
         {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}} )
          .then((response) => {

            this.form1=response.data.result
           
            const ageDifMs = Date.now() - new Date(this.form1.dob.substring(0, 10)).getTime();
            const ageDate = new Date(ageDifMs);
            this.age = Math.abs(ageDate.getUTCFullYear() - 1970);

          })


          .catch((error) => {
            console.log(error)

          })

      },
             
            removeModal() {
            this.openModal = false
        },
         async getUser() {
            // this.uid=this.form1.user
            await axios.get('users/search/' + this.uid, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    }
                })
                .then((response) => {
                    this.userData = response.data['result'];
                    console.log(response)
                   
                   // console.log(response.data['result']);
                })
                .catch((error) => {
                    console.log(error)
                })
        },   
       
         
        
        }
        
    }
</script>

<style lang="scss" scoped>

</style>