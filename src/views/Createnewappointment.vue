<template >
<!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="bg-regal-white h-full ">
            <p class="caheadername ml-52">Create New Appointment </p>
        <section class="max-w-4xl md:p-6 p-3 mx-auto   ">

    <div class="flex items-center justify-center p-6 mx-24 my-4 bg-white  ">
        <form class="w-full max-w-lg" @submit.prevent="submitForm">
        
             <p class=" caheadername -my-1 ">Patient Information </p>

          <div class="w-full lg:w-full ">
            <label class="calabel mt-4" >
               Name 
            </label>
            <input
              class="cainput py-2 px-4 mb-4"
              id="name" type="text" v-model="state.name" >
          </div>
           <small class="text-regal-red mb-2 flex justify-start" v-if="v$.name.$error">{{v$.name.$errors[0].$message}}</small>
        
          

          <div class="flex lg:w-full">
            
          
          <div class=" lg:w-3/5  ">
            <label class="calabel" for="dob">
              Date Of Birth 
            </label>
            <input 
              class="cainput py-2 px-4 mb-4"
              id="dob" type="date" v-model="state.dob">
               <small class="text-regal-red mb-2 flex justify-start">{{this.strDob}}</small>
          </div>
         
             
          <div class=" lg:w-2/5 ml-4 ">
            <label class="calabel" for="gender">
              Gender 
            </label>
           <div class="relative">
                      <select v-model="state.gender"
                        class=" cainput py-2 px-2 mb-4"
                        id="gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                     <small class="text-regal-red mb-2 flex justify-start">{{this.strGender}}</small>
          </div>
          
             
          </div>
         
          <div class="w-full lg:w-full ">
            <label class="calabel" for="contact">
              Contact Number 
            </label>
            <input
              class="cainput py-2 px-4 mb-4 " v-model="state.phone"
              id="contact" type="text"  >
                <small class="text-regal-red mb-2 flex justify-start ml-3">{{this.strPhone}}</small>
          </div>
        
              
          <!-- </div> -->

          <div class="flex flex-wrap -mx-3">


            <div class="w-full lg:w-full px-3">
              <label class="calabel" for="">
                Reason 
              </label>
              <textarea
                class="cainput h-36  py-3 px-4 mb-4"
                id="nationality" type="text" placeholder="" v-model="state.reason" ></textarea>
            </div>
             <small class="text-regal-red mb-2 flex justify-start ml-3">{{this.strReason}}</small>
          </div>
           <div class="w-full lg:w-full ">
            <label class="calabel" for="contact">
              Specialist Name
            </label>
            <input
              class="cainput py-2 px-4 mb-4 " v-model="state.specialist"
              id="contact" type="text"  >
                <small class="text-regal-red mb-2 flex justify-start ml-3">{{this.strSpecialist}}</small>
          </div>
           <div class="w-full lg:w-4/6 ">
            <label class="calabel" for="contact">
              Appointment Date
            </label>
            <input
              class="cainput py-2 px-4 mb-4 " v-model="state.date"
              id="contact" type="date"  >
                <small class="text-regal-red mb-2 flex justify-start ml-3">{{this.strDate}}</small>
          </div>

          <div class="flex ">
                <!-- label -->
                <div class="mr-10">
                  <div class=" py-2">
                    <label class="calabel" for="contact">Start Time:</label>
                </div>
                <!-- label -->
                <div class=" py-2">
                    <select name="" class="text-regal-teal border  border-regal-teal border-opacity-50 rounded  leading-tight  focus:border-regal-blue px-4 py-2 mr-2 focus:outline-none" v-model="startTime">
                        <option v-for="(item,index) in time" :key="index" >{{item}}</option>

                    </select>
                    <button type="button" class="btnampm" :class="this.startam===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="startTimesetAm()">AM</button>
                    <button type="button" class="btnampm" :class="this.startpm===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="startTimesetPm()">PM</button>
                </div>
                </div>
                 <div class="mr-10">
                  <div class=" py-2">
                      <label class="calabel" for="contact">End Time:</label>
                </div>
                <!-- label -->
                <div class=" py-2">
                    <select name="" class="px-4 py-2 mr-2 text-regal-teal border  border-regal-teal border-opacity-50 rounded  leading-tight focus:outline-none focus:border-regal-blue" v-model="endTime">
                        <option v-for="(item,index) in time" :key="index" >{{item}}</option>

                    </select>
                    <button type='button' class="btnampm"  :class="this.endam===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="endTimesetAm()">AM</button>
                    <button type='button' class="btnampm" :class="this.endpm===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="endTimesetPm()">PM</button>
                </div>
                </div>
                
            </div>
            
          
          
          
        </form>
      </div>
      <div class="mt-4 py-3 px-3 flex justify-center mb-4 ">
            <button class="newbutton" @click="submitForm">
              Create Appointment
            </button>
          </div>
    

    </section>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import useValidate from '@vuelidate/core';
import {required,minLength} from '@vuelidate/validators';
import {reactive,computed} from "vue";

    export default {
        components:{
            Nav
        },
        setup(){
          const state=reactive({
            name:'',
            dob:'',
            gender:'',
            phone:'',
            reason:'',
            specialist:'',
            date:"",
            startTime:'',
            endTime:'',
          })
          const rules=computed(()=>{
            return{
            name:{required,minLength:minLength(3)},
            dob:{required},
            gender:{required},
            phone:{required},
            reason:{required},
            specialist:{required},
            date:{required},
            startTime:{required},
            endTime:{required}, 
            }    
          })
           const v$ = useValidate(rules, state)

          return { state, v$ }
        },
        data(){
            return{
            //v$:useValidate(),
            time:["01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00",
                    "07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30"],
            strName :'',
            strGender : '',
            strPhone : '',
            strReason:'',
            strDob:'',
            strSpecialist:'',
            strDate:'',
            strStart:'',
            strEnd:'',
            // formdata:{
            //   name:'',
            //   dob:'',
            //   gender:'',
            //   phone:'',
            //   reason:'',
            //   specialist:'',
            //   date:"",
            //   startTime:'',
            //   endTime:'',
            // },
            startTime:'',
            endTime:'',
            endam:true,
            endpm:false,
            startam:false,
            startpm:false
            }
        },
        validations(){
           return{
             formdata:{
              name:{required},
              dob:{required},
              gender:{required},
              phone:{required},
              reason:{required},
              specialist:{required},
              date:{required},
              startTime:{required},
              endTime:{required},
           }
          }
        },
        methods:{
        endTimesetAm(){
          this.endam=true
          this.endpm=false
        },
        endTimesetPm(){
          this.endpm=true
          this.endam=false
        },
        startTimesetAm(){
          this.startam=true
          this.startpm=false
        },
        startTimesetPm(){
          this.startpm=true
          this.startam=false
       },
        submitForm(){
          //const formdata=reactive(state)
          console.log(this.formdata)
          console.log(this.v$)

          // this.v$.$validate(){
          //   if(!this.v$.$error){

          //   }
          // }

        // this.formdata.phone = this.formdata.phone.replace(/\s/g, '')
        // if (this.formdata.name === '') {
        //   this.strName = 'Name cannot be blank';
        // } else if (this.formdata.name.length < 3 || this.formdata.name.length > 255) {
        //   this.strDob = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strName = 'Minimum length 3 & Maximum length 255 ';
        // } else if (this.formdata.dob === '') {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strDob = 'Date of Birth cannot be blank';
        // } else if (this.formdata.gender === '') {
        //   this.strDob = '',
        //   this.strName = '',
        //   this.strPhone = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strGender = 'Gender cannot be blank';
        // } else if (this.formdata.phone === '') {
        //   this.strDob = '',
        //   this.strGender = '',
        //   this.strName = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strPhone = 'Phone cannot be blank';
        // } else if (this.formdata.phone.length < 11 || this.formdata.phone.length > 14) {
        //   this.strDob = '',
        //   this.strGender = '',
        //   this.strName = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strPhone = 'Minimum length 11 & Maximum length 14';
        // }else if (this.formdata.reason === '') {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strDob = '',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strReason='Reason cannot be blank';
        // }else if (this.formdata.specialist === '') {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strDob = '',
        //   this.strDate='',
        //   this.strReason='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strSpecialist='Enter Specialist Name';
        // }else if (this.formdata.date === '') {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strDob = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strStart='',
        //   this.strEnd='',
        //   this.strDate='Select Appointment Date';
        // }else if (this.formdata.startTime === '') {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strDob = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strEnd='',
        //   this.strDate='',
        //   this.strStart='Select Start Time';
        //   }else if (this.formdata.endTime === '') {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strDob = '',
        //   this.strReason='',
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='Select End Time';
        // }else {
        //   this.strName = '',
        //   this.strGender = '',
        //   this.strPhone = '',
        //   this.strDob = '',
        //   this.strReason='';
        //   this.strSpecialist='',
        //   this.strDate='',
        //   this.strStart='',
        //   this.strEnd='',
        //     console.log("csdsd")
        //   await axios.post('patients/create-patient', this.formdata, {
        //       headers: {
        //         "Authorization": `Bearer ${localStorage.getItem('token') }`
        //       }
        //     })
        //     .then((response) => {
        //       console.log(response)
        //       swal({
        //         title: "Success",
        //         text: "Patient created Successfully!",
        //         icon: "success",
        //         timer: 1000,
        //         buttons: false
        //       }).then(function () {
        //         new Promise(resolve => setTimeout(resolve, 2000));
        //         window.location = `/patient`;
        //       })
        //     })
        //     .catch((error) => {
        //       console.log(error)
        //     })
        //}
            }
        }
    }
</script>

<style scoped>
</style>