<template>
    <div>
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md ">

            <!-- <h2 class="tracking-widest text-lg title-font font-bold text-gray-600  ">
                Prescription
            </h2> -->


            <form @submit.prevent>
                <div>
                    <input hidden type="text" v-model="formData.patient">

                </div>
                <div class="flex justify-between ">

                    <div class="w-full lg:w-1/2 p-2">
                        <label
                            class="block mb-2text-md font-medium text-regal-teal capitalize dark:text-white text-left">C/C</label>

                        <textarea v-model="formData.cc"
                            class="block w-full h-40 px-4 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 focus:border-regal-blue rounded-md focus:outline-none "></textarea>
                     <small class="text-regal-red mb-2">{{this.strCC}}</small>
                    </div>

                    <div class="w-full lg:w-1/2 p-2">
                        <label
                            class="block mb-2text-md font-medium text-regal-teal capitalize dark:text-white  text-left">O/E</label>

                        <textarea v-model="formData.oe"
                            class="block w-full h-40 px-4 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md focus:border-regal-blue  focus:outline-none"></textarea>
                    <small class="text-regal-red mb-2">{{this.strOE}}</small>
                    </div>

                </div>
                <div class="flex justify-between">
                    
                    <div class="w-full lg:w-1/2 mt-4 p-2">
                        <label
                            class="block mb-2 text-md font-medium text-regal-teal capitalize dark:text-white  text-left">Investigation</label>



                        <textarea v-model="formData.investigation"
                            class="block w-full h-40 px-4 py-2 text-regal-tealbg-white border border-regal-teal border-opacity-50 focus:border-regal-blue rounded-md focus:outline-none"></textarea>
                          <small class="text-regal-red mb-2">{{this.strIN}}</small>
                    </div>
                    <div class="w-full mt-4 lg:w-1/2 p-2">
                        <label
                            class="block mb-2 text-md font-medium text-regal-teal capitalize dark:text-white  text-left ">Treatment
                            Plan</label>

                        <textarea v-model="formData.treatmentPlan"
                            class="block w-full h-40 px-4 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md focus:border-regal-blue  focus:outline-none"></textarea>
                    <small class="text-regal-red mb-2">{{this.strTP}}</small>
                    </div>

                </div>
                <!-- <div class="mt-4">
                    <h2 class="text-lg font-semibold text-gray-500 capitalize dark:text-white mt-4"> Medication</h2>
                </div> -->

                <div>
                    <!--medication-->
                    <div class=" p-4">

                        <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
                            <div>
                                <label class="flex justify-start text-regal-teal " for="category">Category</label>
                                <input v-model="medicine.catagory" id="category" type="text"
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white  border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue focus:outline-none ">
                                  <small class="text-regal-red mb-2">{{this.strCT}}</small>
                            </div>

                            <div>
                                <label class="flex justify-start text-regal-teal" for="name">Medication</label>
                                <input v-model="medicine.name" id="name" type="text" placeholder=""
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue  focus:outline-none ">
                               <small class="text-regal-red mb-2">{{this.strMN}}</small>
                            </div>
                             <div>
                                <label class="flex justify-start text-regal-teal" for="Meals">Relation with
                                    Meal</label>
                                <div class="relative">
                                    <select
                                    class="block appearance-none w-full px-4 py-2 mt-1 text-regal-teal bg-regal-white border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue  focus:outline-none "
                                        id="gender" v-model="medicine.relationWithMeals">
                                         <option value="" selected="selected" disabled="disabled">Select</option>
                                        <option>Before Meal</option>
                                        <option>After Meal</option>
                                        <option>At BedTime</option>
                                        <option>Between Meals</option>

                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center py-2 pr-4 mt-1 text-gray-700 ">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                      <small class="text-regal-red mb-2">{{this.strRWM}}</small>
                            </div>



                        </div>
                        <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">



                            <div>
                                <label class="flex justify-start text-gray-700 dark:text-gray-200" for="Frequency">Frequency</label>
                                <div class="relative">
                                    <select
                                    class="block appearance-none w-full px-4 py-2 mt-1 text-gray-700 bg-regal-white border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue  focus:outline-none "
                                        id="gender" v-model="medicine.frequency">
                                        <option value="" selected="selected" disabled="disabled">Select</option>
                                        <option v-for="f in frequency" :key="f._id">{{f}}</option>

                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center py-2 pr-4 mt-1 text-gray-700 ">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                  <small class="text-regal-red mb-2">{{this.strMF}}</small>
                            </div>
                            <div>
                                <label class="flex justify-start text-gray-700 dark:text-gray-200" for="Duration">Duration</label>
                                <input v-model="medicine.duration" id="Duration" type="text" placeholder="1 month"
                                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue  focus:outline-none ">
                             <small class="text-regal-red mb-2">{{this.strMD}}</small>
                            </div>

                            <div class=" mt-7 flex justify-end">

                            <button class=" px-7 py-2 bg-regal-teal text-center border text-white font-semibold  rounded-md text-sm flex" @click="addItem()">
                            <span class=" ml-2 mr-2">Add Medication</span>   
                               <span class=" "><svg class="w-3 h-5 fill-current text-white  " height="426.66667pt"
                                viewBox="0 0 426.66667 426.66667" width="426.66667pt"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                                </svg></span>
                            </button>
                        </div>
                          <p v-if="!formVal" class="text-red-500 mb-4 text-center">Please enter valid information </p>
                           
                        </div>
                      
                        <!-- <div class="flex justify-center">

                            <button class="text-indigo-500 mt-6 hover:text-gray-600 font-semibold" @click="addItem()">
                                +Add Medicine
                            </button>
                        </div> -->
                    </div>
                </div>
                <!--medication-->

                <!--list-->
                <div class="mt-5 " v-if="this.items.length>=1">
                    <div>

                        <table class="w-full bg-regal-light-blue text-regal-teal mx-auto rounded-t-lg r ">
                            <thead class="text-center text-regal-teal  text-sm">
                                <th class="px-4 py-3">Category</th>
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Duration</th>
                                <th class="px-4 py-3">Frequency</th>
                                <th class="px-4 py-3">Relation with Meals</th>
                                <th class="px-4 py-3"></th>
                            </thead>

                            <tbody class="">
                                <tr class="bg-white  border border-regal-blue rounded-b-lg border-opacity-25 hover:bg-regal-white hover:opacity-80 text-regal-teal "
                                    v-for="(item,index) in items " :key="index">
                                    <td class="py-3 ">{{item.catagory}}</td>
                                    <td class="px-4 py-3">{{item.name}}</td>
                                    <td class="px-4 py-3">{{item.duration}}</td>
                                    <td class="px-4 py-3">{{item.frequency}}</td>
                                    <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                                    <td class="flex justify-center items-center p-2">
                                        <button @click=" deleteItem(index)"
                                            class="p-0 w-5 h-5 mt-1 flex justify-center items-center  ">
                                            <img src="@/assets/svgs/cross.svg" class="" alt="">
                                            <!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 496.158 496.158"
                                                style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve">
                                                <path style="fill:#E04F5F;" d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082
                            c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z" />
                                                <path style="fill:#FFFFFF;"
                                                    d="M383.546,206.286H112.612c-3.976,0-7.199,3.225-7.199,7.2v69.187c0,3.976,3.224,7.199,7.199,7.199
                            h270.934c3.976,0,7.199-3.224,7.199-7.199v-69.187C390.745,209.511,387.521,206.286,383.546,206.286z" />

                                            </svg> -->

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
                        <label
                            class="block mb-2 text-md font-medium text-regal-teal capitalize dark:text-white  text-left">Advice</label>
                        <textarea v-model="formData.advice"
                            class="block w-full h-20 px-4 py-2 text-gray-700 bg-white border border-regal-teal border-opacity-50 rounded-md  focus:border-regal-blue  focus:outline-none"></textarea>
                    <small class="text-regal-red mb-2">{{this.strAD}}</small>
                    </div>

                </div>
                <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">Please enter valid prescription information
                </p>

                <div class="flex justify-center mt-4">
                    <button @click="addPrint" class=" px-4 py-2 bg-regal-blue text-center border text-white font-semibold  rounded-md text-sm flex">Preview</button>
                </div>
            </form>
            <div class="mt-5 " v-if="openModal">
                <PrescriptionModal :formData="formData" :date="date" :openModal="openModal" :form1="form1" :age="age"
                    @myEvent="removeModal" :userData="userData" />
            </div>
        </section>
    </div>
</template>

<script>
    import axios from "axios"
    import PrescriptionModal from "../../components/PrescriptionModal.vue";


    export default {
        components: {
            PrescriptionModal
        },
        created() {
            this.getPatient(this.$route.params.id)
            this.parseJwt(this.token)
            this.getUser()
        },

        data() {
            return {
                 strAD:'',
                 strCT:'',
                 strMN:'',
                 strMF:'',
                 strRWM:'',
                 strMD:'',
                strCC:'',
                strOE:'',
                strTP:'',
                strIN:'',
                userData: {},
                token: localStorage.getItem('token'),
                formIsValid: true,
                openModal: false,
                formVal: true,
                submit: false,
                Prescription: [],
                frequency: [
                    "Daily", "Every Other Day", "Twice A Day", "Three Times A Day", "Four Times A Day",
                    "Every Bed Time", "Every 4 Hours",
                    "Every 4 to 6 Hours", "Every Week", "0-0-1", "0-1-0", "0-1-1", "1-0-0", "1-0-1", "1-1-0",
                    "1-1-1", "0-0-0-1", "0-0-1-0", "0-0-1-1",
                    "0-1-0-0", "0-1-0-1", "0-1-1-0", "0-1-1-1", "1-0-0-0", "1-0-0-1", "1-0-1-0", "1-0-1-1",
                    "1-1-0-0", "1-1-0-1", "1-1-1-0", "1-1-1-1"
                ],

                items: [],
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),

                uid: '',

                medicine: {
                    catagory: '',
                    name: '',
                    frequency: '',
                    duration: '',
                    relationWithMeals: ''
                },

                formData: {
                    user: '',
                    patient: '',
                    cc: '',
                    oe: '',
                    medicine: [{
                        catagory: '',
                        name: '',
                        frequency: '',
                        duration: '',
                        relationWithMeals: '',

                    }],
                    investigation: '',
                    advice: '',
                    treatmentPlan: '',
                    isPregnant: false
                },
                form1: {},
                age: ''

            }
        },
        methods: {
            parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
                c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const payload = JSON.parse(jsonPayload);
                this.uid = payload.sub
                console.log(payload.sub);
            },
           addItem() {
                if(this.medicine.catagory === "" ){
                    this.strRWM=''
                     this.strMF=''
                     this.strMD=''
                    this.strMN=""
                     this.strCT="Enter Category"
                // if (this.medicine.name === "" || this.medicine.frequency === "" || this.medicine.duration === "" || this
                //     .medicine.relationWithMeals === "") {
                //     this.formVal = false
                } 
                else if(this.medicine.name === "" ){
                     this.strCT=''
                    this.strRWM=''
                     this.strMF=''
                     this.strMD=''
                    this.strMN="Enter Medicine Name"
                // if (this.medicine.name === "" || this.medicine.frequency === "" || this.medicine.duration === "" || this
                //     .medicine.relationWithMeals === "") {
                //     this.formVal = false
                } 
                else if (this.medicine.relationWithMeals === "" ){
                      this.strCT=''
                    this.strMN=''
                     this.strMF=''
                     this.strMD=''
                     this.strRWM="Choose Relation with Meals"

                }
                else if (this.medicine.frequency === "" ){
                      this.strCT=''
                    this.strMN=''
                     this.strRWM=''
                     this.strMD=''
                     this.strMF="Choose Frequency"

                }
                 else if (this.medicine.duration === "" ){
                    this.strCT=''
                    this.strMN=''
                     this.strMF=''
                     this.strRWM=''
                      this.strMD="Enter a duration"

                }
                else {
                    this.strRWM=''
                     this.strMF=''
                     this.strMD=''
                    this.strMN=""
                     this.strCT=""

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

            async getPosts(id) {
                await axios.get('prescriptions/' + id + '/list?page=1&limit=10', {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
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
           addPrint() {
                this.formData.patient = this.$route.params.id
                this.formData.user ='616721fd20d0dff607ab2cb8'
                //console.log(this.uid)
                console.log(this.formData)
                this.formData.medicine = [...this.items];
                this.formIsValid = true;
                if(this.formData.cc === ''){
                    this.strOE=''
                     this.strTP=''
                     this.strIN=''
                    this.strCC="CC cannot be blank"
                // if (this.formData.cc === '' || this.formData.oe === '' || this.formData.advice === '' || this.formData
                //     .treatmentPlan === '' || this.formData.medicine.name === '' ||
                //     this.formData.medicine.frequency === '' || this.formData.medicine.duration === '' || this.formData
                //     .medicine.relationWithMeals === '') {
                //     this.formIsValid = false;
                //     return;
                } 
                else if(this.formData.oe === ''){
                    this.strCC='';
                     this.strTP='';
                     this.strIN='';
                    this.strOE="OE cannot be blank"
                }
                else if(this.formData.investigation=== ''){
                     this.strCC='';
                     this.strOE='';
                     this.strTP='';
                       this.strIN=" Investigation cannot be blank"
                       
                }
                else if(this.formData.treatmentPlan=== ''){
                     this.strCC='';
                     this.strOE='';
                     this.strIN='';
                       this.strTP="Treatment Plan  cannot be blank"
                }
                 else if(this.formData.advice=== ''){
                     this.strCC='';
                     this.strOE='';
                     this.strIN='';
                     this.strTP='';
                     this.strAD='Advice cannot be blank';

                }
                
                else {
                    this.strCC='';
                     this.strTP='';
                     this.strIN='';
                    this.strOE="";
                    this.strRWM=''
                     this.strMF=''
                     this.strMD=''
                    this.strMN=""
                     this.strCT=""

                    this.formIsValid = true;
                    this.openModal = true
                }

            },
            async getPatient(id) {
                await axios.get('patients/' + id, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {

                        this.form1 = response.data.result

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
                await axios.get('users/search/' + this.uid, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.userData = response.data['result'];
                        console.log(response)
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