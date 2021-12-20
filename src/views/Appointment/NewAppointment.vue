<template>
    <div>
        
  <!--Body Starts-->
   
    <section class=" mx-auto px-8">
    <p class=" caheadername mb-12">Create Patient</p>
    {{this.patientId}}
    <div class="flex items-center justify-center border border-regal-blue border-opacity-30 my-4 bg-white"> 
      
      <!-- Form Starts -->
        <form class="w-full max-w-lg mx-8" @submit.prevent="submitForm">
            <p class="text-regal-teal font-semibold text-left py-6">Appointment Form</p>
            <p class="text-regal-teal text-sm text-left py-3 underline font-semibold">General Information</p> 
         <!-- Input Patient Name Starts -->
         <div class="lg:flex">
          <div class="w-full lg:w-1/2 ">
            <label class="calabel mt-4 text-xs">First Name: <span class="text-xs text-gray-400 font-medium mt-1  ml-1"></span></label>
            <input class="cainput py-2 px-4 mb-4 text-xs" id="name" type="text" v-model="form.name" @blur="v$.form.name.$touch()">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.form.name.$error">{{v$.form.name.$errors[0].$message}}</small>
          </div>
           <div class="w-full lg:w-1/2 ml-2">
            <label class="calabel mt-4 text-xs">Last Name: <span class="text-xs text-gray-400 font-medium mt-1 ml-1"></span></label>
            <input class="cainput py-2 px-4 mb-4  text-xs" id="name" type="text" v-model="form.name" @blur="v$.form.name.$touch()">
          </div>
         </div>
          <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.name.$error">{{v$.formdata.name.$errors[0].$message}}</small> -->
      <!-- Input Patient Name Ends --> 

      <!-- Input Date of birth and gender starts -->
        <div class="lg:flex ">
             <div class="w-full lg:w-1/2 ">
            <label class="calabel text-xs">Date of Birth: <span class="text-xs text-gray-400 font-medium mt-1  ml-1"></span></label>
            <input class="cainput py-2 px-4 mb-4 text-xs" id="name" type="date" v-model="form.dob" @blur="v$.form.dob.$touch()">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.form.dob.$error">{{v$.form.dob.$errors[0].$message}}</small>
          </div>
          <div class="lg:w-1/2 w-full ml-2">
              <label class="calabel text-xs" for="gender">Gender:</label>
              <div class="relative">
                <select v-model="form.gender"  @blur="v$.form.gender.$touch()" class=" text-xs cainput py-2 px-2 mb-4" id="gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              <small class="text-regal-red mb-2 flex justify-start" v-if="v$.form.gender.$error">{{v$.form.gender.$errors[0].$message}}</small>
            </div>
        </div>
        <!-- Input date of birth and gender ends -->
         <!-- Input Reason Starts-->
          <div class="flex flex-wrap -mx-3">  
            <div class="w-full lg:w-full px-3">
              <label class="calabel text-xs" for="">Address:</label>
              <textarea class="cainput h-24 py-3 px-4 mb-4 text-xs" id="nationality" type="text" placeholder="" v-model="form.address"  @blur="v$.form.address.$touch()"></textarea>
              <small class="text-regal-red mb-2 flex justify-start" v-if="v$.form.address.$error">{{v$.form.address.$errors[0].$message}}</small>
            <!-- </div>  -->
          </div>
          </div>
        <!-- Input Reason Starts-->
          <p class="text-regal-teal text-sm text-left py-3 underline font-semibold">Contact Information</p> 
        <!-- Input Contact Number Starts-->
        <div class="lg:flex">
          <div class="w-full lg:w-full">
            <label class="calabel text-xs" for="contact">Contact:</label>
            <input class="cainput py-2 px-4 mb-4 text-xs" v-model="form.phone" id="contact" type="text"  @blur="v$.form.phone.$touch()">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.form.phone.$error">{{v$.form.phone.$errors[0].$message}}</small>
          </div>
            <!-- <div class="w-full lg:w-1/2 ml-2 ">
            <label class="calabel text-xs" for="contact">Email:</label>
            <input class="cainput py-2 px-4 mb-4 text-xs" v-model="formdata.phone" id="contact" type="text"  @blur="v$.formdata.phone.$touch()">
            <small class="text-regal-red mb-2 flex justify-start " v-if="v$.formdata.phone.$error">{{v$.formdata.phone.$errors[0].$message}}</small>
          </div> -->
        </div>
        <!-- Input Contact Number Ends-->
       <p class="text-regal-teal text-sm text-left py-3 underline font-semibold">Appointment Information</p> 
        <!-- Input Reason Starts-->
          <div class="flex flex-wrap -mx-3">  
            <div class="w-full lg:w-full px-3">
              <label class="calabel text-xs" for="">Reason</label>
              <textarea class="cainput h-24 py-3 px-4 mb-4 text-xs" id="nationality" type="text" placeholder="" v-model="formdata.reason"  @blur="v$.formdata.reason.$touch()"></textarea>
              <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.reason.$error">{{v$.formdata.reason.$errors[0].$message}}</small>
            </div>
          </div>
        <!-- Input Reason Starts-->

        <!-- Input Specialist Name Starts-->
          <div class="w-full lg:w-full ">
            <label class="calabel text-xs" for="contact">Specialist Name</label>
              <div class="relative">
                    

                      <!-- <select  id="category" name="q" @keydown="this.getUser()" class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-xs"
                        v-model="formdata.specialist" @blur="v$.formdata.specialist.$touch()">
                          <option v-for="item in users" :key="item._id" :value="item._id" >{{item.name}}</option>
                      </select> -->
                       <input name="q" @keydown="this.getUser()" type="text" list="category" v-model="this.formdata.specialist" @blur="v$.formdata.specialist.$touch()" class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                        <datalist id="category">
                        <option v-for="item in users" :key="item._id" :value="item._id" > {{item.name}} </option>
                        </datalist>                             
            
                 <!-- <input v-model="this.formdata.specialist" list="weekday" class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">  
            <datalist id="weekday">
  <option value="Sunday">Sun</option>
  <option value="Monday">mon</option>
  
</datalist>  
                     

                     
                {{this.formdata.specialist}}         -->



                      <!-- <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div> -->
                    </div>
           <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.specialist.$error">{{v$.formdata.specialist.$errors[0].$message}}</small>
          </div>
        <!-- Input Specialist Name Ends-->
        <div>
          <!-- Input date starts here -->
          <div class="  text-xs text-center my-4">
              <div class=" flex  ml-24">

              
              <div class="mt-4 mr-2">

              <label class="text-xs mt-2 mr-7 ml-2  text-regal-teal  font-semibold" for="contact">Date :</label>
              </div>
              <div class="px-4  py-1.5 mr-2 w-52">

              <Datepicker  v-model="formdata.date"  @blur="v$.formdata.date.$touch()" id="contact" :enableTimePicker="false"></Datepicker>
              </div>
              </div>
              <!-- <input class="px-4  py-1.5 mr-2 ml-8 text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue bg-white" v-model="formdata.date"  @blur="v$.formdata.date.$touch()" id="contact" type="date"> -->
              <p class="text-regal-red mt-2 ml-3 flex justify-center" v-if="v$.formdata.date.$error">{{v$.formdata.date.$errors[0].$message}}</p>
          </div>
          <!-- Input date starts here -->

          <!-- Input start time starts here -->
          <div class=" text-xs text-center my-4">
              <label class="text-xs mt-2 mr-7 text-regal-teal  font-semibold " for="contact">Start Time :</label>
                <select @change="onChange()" class="px-4  py-1.5 mr-2 text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue bg-white" v-model="startTime">
              <option v-for="(item,index) in time" :key="index">{{item}} </option>
            </select>
            <button type="button" class="btnampm" :class="this.startam===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="startTimesetAm()">AM</button>
            <button type="button" class="btnampm" :class="this.startpm===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="startTimesetPm()">PM</button>
            <p class="text-regal-red mt-4 flex justify-center">{{this.strstart}}</p>
          </div>
          <!-- Input start time ends here -->

          <!-- Input end time starts here -->
          <div class=" text-xs text-center my-4 ">
              <label class="text-xs mt-2 mr-7  text-regal-teal  font-semibold " for="contact">End Time :</label>
            <select @change="onChange()" name="" class="px-4  py-1.5 mr-2 ml-1 text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue bg-white" v-model="endTime">
              <option v-for="(item,index) in time" :key="index">{{item}}</option>
            </select>
            <button type='button' class="btnampm" :class="this.endam===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="endTimesetAm()">AM</button>
            <button type='button' class="btnampm" :class="this.endpm===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="endTimesetPm()">PM</button>
            <p class="text-regal-red mt-4 flex justify-center">{{this.strend}}</p>
          </div>
           <!-- Input end time ends here -->
        </div>

        <!-- Create button starts here -->
        <div class="mt-4 py-3 px-3 flex justify-center  ">
        <button class="px-9 py-2 bg-regal-cyan text-center w-40 border text-white font-semibold rounded-full text-xs flex bg-gradient-to-r from-regal-gradientButton1 to-regal-gradientButton2'">
          Create Patient
        </button>
      </div>
        <!-- Create button ends here -->

        <!-- Cancel button starts here -->
      <div class="py-3 px-3 flex justify-center mb-4 ">
        <button class=" px-14 py-2 text-regal-cyan  w-40  border font-semibold rounded-full text-xs flex bg-regal-ash" @click="cancel">
          Cancel
        </button>
      </div>
       <!-- Cancel button ends here -->
      </form>
        <!-- Form Ends -->
      </div>
      
    </section>
<!-- Body Starts -->
    </div>
</template>

<script>
import swal from 'sweetalert';
import axios from "axios";
import useValidate from '@vuelidate/core';
import moment from "moment";
import {required,minLength,maxLength,numeric,helpers} from '@vuelidate/validators';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'

    export default {
    components: {
      Datepicker,
    },
      created(){
        this.getSpecificPatient(),
        this.getUser(),
        this.parseJwt(this.token)
      },
      props:{
        patientId:String
      },
        data() {
      return {
        token: localStorage.getItem('token'),
        uid:'',
        v$:useValidate(),
        time: ["01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00","07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30" ],
        formdata:{
          patient:'',
          user:'',
          doctor:'',
          reason:'',
          specialist:'',
          date:"",
          start_time:'',
          end_time:'',
        },
        form:{
          name:'',
          dob:'',
          gender:'',
          phone:'',
          address:'',
        },
        appointmentList:[],
        strstart:'',
        strend:'',
        startTime: '',
        endTime: '',
        endam: false,
        endpm: false,
        startam: false,
        startpm: false,
        users:[],
        doctorId:''
      }
    },
    validations(){
     const nospecial=helpers.regex(/^[A-Za-z\s]+$/);
     return{
      formdata:{
      reason: {required},
      // specialist: {required,nospecial:helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",nospecial)},
      specialist: {required},
      date: {required}
      },
      form:{
      name:{required,minLength: minLength(3),maxLength:maxLength(255),nospecial:helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",nospecial)},
      dob: {required},
      gender: {required},
      phone: {required,numeric,minLength: minLength(11),maxLength:maxLength(14)},
      address:{required},
      }

     }
    },
    methods: {
      //get the id of the user who is logged in
      parseJwt(token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
          c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const payload = JSON.parse(jsonPayload);
      this.uid = payload.sub
      //console.log(payload.sub);
      },

      cancel(){
          this.$emit("cancelEvent")
      },
      onChange(){
       this.strstart=""
       this.strend=""
      },

    // Toggle AM of endtime
      endTimesetAm() {
        this.strstart=""
        this.strend=""
        this.endam = true
        this.endpm = false
      },

    // Toggle PM of endtime
      endTimesetPm() {
        this.strstart=""
        this.strend=""
        this.endpm = true
        this.endam = false
      },

    // Toggle AM of starttime
      startTimesetAm() {
        this.strstart=""
        this.strend=""
        this.startam = true
        this.startpm = false
      },

    // Toggle PM of starttime
      startTimesetPm() {
        this.strstart=""
        this.strend=""
        this.startpm = true
        this.startam = false
      },
     
     //create new appointment
      async submitForm() {
          //console.log('entered')
          if (this.patientId.length >= 1) {
            this.form.address = 'N/A'
          }
          //validations
          this.v$.$touch()
          if (this.endTime === '' || this.endam === false && this.endpm === false) {
            this.strstart = ""
            this.strend = "Choose End Time and AM or PM"
          }
          if (this.startTime === '' || this.startam === false && this.startpm === false) {
            this.strend = ""
            this.strstart = "Choose Start Time and AM or PM"
          }
          //If it met all the requirements then enter into this condition
          if (!this.v$.$error) {
            this.startam === true ? this.startTime = this.startTime + '' + 'AM' : this.startTime = this.startTime + '' + 'PM'
            this.endam === true ? this.endTime = this.endTime + '' + 'AM' : this.endTime = this.endTime + '' + 'PM'
            this.formdata.patient = this.patientId
            //console.log(this.formdata.patient)
            this.formdata.user = this.uid
            this.formdata.doctor = this.formdata.specialist
            //console.log(this.formdata.doctor)
            this.formdata.status = 'Scheduled'
            this.formdata.start_time = moment(this.startTime, "h:mm:ss A").format("HH:mm:ss")
            this.formdata.end_time = moment(this.endTime, "h:mm:ss A").format("HH:mm:ss")
            this.formdata.date = this.formdata.date.toISOString().substring(0,10);
            console.log(this.formdata) 
            await axios.post('appointments/create', this.formdata, {
                headers: {
                  "Authorization": `Bearer ${localStorage.getItem('token') }`
                }
              })
              .then((response) => {
                console.log(response)
                swal({
                  title: "Success",
                  text: "Appointment created Successfully!",
                  icon: "success",
                  timer: 1000,
                  buttons: false
                }).then(function () {
                  new Promise(resolve => setTimeout(resolve, 2000));
                  window.location = `/AppointmentPortal`;
                })
              })
              .catch((error) => {
                console.log(error)
                console.log("Something went wrong. Please try again")
              })
          }
        },

        //Get  information of the specific patient
        async getSpecificPatient() {
          await axios.get('patients/' + this.patientId, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token') }`
              }
            })
            .then((response) => {
              this.form = response.data.result;
            })
            .catch((error) => {
              console.log(error)
            })
        },
        getId(id){
          console.log(id)
          this.formData.doctor=id
        },

      //Getting the user list for specialist dropdown
      async getUser(){
         await axios.get('users/search' , {
           params: {  
                        q:this.formdata.specialist
                    },
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.users = response.data.result;
                        //console.log(this.users)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
      },

      //Get the id of the doctor that has been selected from the dropdown
      getUserId(id){
        this.doctorId=id
        console.log(this.doctorId)
      }

    }
        
    }
</script>

<style lang="scss" scoped>

</style>