<template>
    <div>
        
  <!--Body Starts-->
   
    <section class=" mx-auto px-8">
    <p class=" caheadername mb-12">Create Patient</p>
    <div class="flex items-center justify-center border border-regal-blue border-opacity-30 my-4 bg-white"> 
      
      <!-- Form Starts -->
        <form class="w-full max-w-lg mx-8" @submit.prevent="submitForm">
            <p class="text-regal-teal font-semibold text-left py-6">Appointment Form</p>
            <p class="text-regal-teal text-sm text-left py-3 underline font-semibold">General Information</p> 
         <!-- Input Patient Name Starts -->
         <div class="lg:flex">
          <div class="w-full lg:w-1/2 ">
            <label class="calabel mt-4 text-xs">First Name: <span class="text-xs text-gray-400 font-medium mt-1  ml-1"></span></label>
            <input class="cainput py-2 px-4 mb-4 text-xs" id="name" type="text" v-model="formdata.name" @blur="v$.formdata.name.$touch()">
          </div>
           <div class="w-full lg:w-1/2 ml-2">
            <label class="calabel mt-4 text-xs">Last Name: <span class="text-xs text-gray-400 font-medium mt-1 ml-1"></span></label>
            <input class="cainput py-2 px-4 mb-4  text-xs" id="name" type="text" v-model="formdata.name" @blur="v$.formdata.name.$touch()">
          </div>
         </div>
          <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.name.$error">{{v$.formdata.name.$errors[0].$message}}</small> -->
      <!-- Input Patient Name Ends --> 

      <!-- Input Date of birth and gender starts -->
        <div class="lg:flex ">
             <div class="w-full lg:w-1/2 ">
            <label class="calabel text-xs">Date of Birth: <span class="text-xs text-gray-400 font-medium mt-1  ml-1"></span></label>
            <input class="cainput py-2 px-4 mb-4 text-xs" id="name" type="text" v-model="formdata.name" @blur="v$.formdata.name.$touch()">
          </div>
          <div class="lg:w-1/2 w-full ml-2">
              <label class="calabel text-xs" for="gender">Gender:</label>
              <div class="relative">
                <select v-model="formdata.gender"  @blur="v$.formdata.gender.$touch()" class=" cainput py-2 px-2 mb-4" id="gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
              <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.gender.$error">{{v$.formdata.gender.$errors[0].$message}}</small>
            </div>
        </div>
        <!-- Input date of birth and gender ends -->
         <!-- Input Reason Starts-->
          <div class="flex flex-wrap -mx-3">  
            <div class="w-full lg:w-full px-3">
              <label class="calabel text-xs" for="">Address:</label>
              <textarea class="cainput h-24 py-3 px-4 mb-4 text-xs" id="nationality" type="text" placeholder="" v-model="formdata.address"  @blur="v$.formdata.address.$touch()"></textarea>
              <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.reason.$error">{{v$.formdata.reason.$errors[0].$message}}</small>
            </div> -->
          </div>
          </div>
        <!-- Input Reason Starts-->
          <p class="text-regal-teal text-sm text-left py-3 underline font-semibold">Contact Information</p> 
        <!-- Input Contact Number Starts-->
        <div class="lg:flex">
          <div class="w-full lg:w-1/2">
            <label class="calabel text-xs" for="contact">Contact:</label>
            <input class="cainput py-2 px-4 mb-4 text-xs" v-model="formdata.phone" id="contact" type="text"  @blur="v$.formdata.phone.$touch()">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.phone.$error">{{v$.formdata.phone.$errors[0].$message}}</small>
          </div>
            <div class="w-full lg:w-1/2 ml-2 ">
            <label class="calabel text-xs" for="contact">Email:</label>
            <input class="cainput py-2 px-4 mb-4 text-xs" v-model="formdata.phone" id="contact" type="text"  @blur="v$.formdata.phone.$touch()">
            <small class="text-regal-red mb-2 flex justify-start " v-if="v$.formdata.phone.$error">{{v$.formdata.phone.$errors[0].$message}}</small>
          </div>
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
            <input class="cainput py-2 px-4 mb-4 text-xs " v-model="formdata.specialist"  @blur="v$.formdata.specialist.$touch()" id="contact" type="text">
           <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.specialist.$error">{{v$.formdata.specialist.$errors[0].$message}}</small>
          </div>
        <!-- Input Specialist Name Ends-->


        <div>
          <!-- Input date starts here -->
          <div class=" text-xs text-center my-4">
              <label class="text-xs mt-2 mr-7 text-regal-teal  font-semibold " for="contact">Date :</label>
              <input class="px-4  py-1.5 mr-2 text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue bg-white" v-model="formdata.date"  @blur="v$.formdata.date.$touch()" id="contact" type="date">
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
            <small class="text-regal-red mb-2 flex justify-start">{{this.strstart}}</small>
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
            <small class="text-regal-red mb-2 flex justify-start">{{this.strend}}</small>
          </div>
           <!-- Input end time ends here -->
        </div>

        <!-- Create button starts here -->
        <div class="mt-4 py-3 px-3 flex justify-center  ">
        <button class="px-9 py-2 bg-regal-cyan text-center w-40 border text-white font-semibold rounded-full text-xs flex bg-gradient-to-r from-regal-gradientButton1 to-regal-gradientButton2'" @click="submitForm">
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
import useValidate from '@vuelidate/core';
import {required,minLength,maxLength,numeric,helpers} from '@vuelidate/validators';
    export default {
        data() {
      return {
        v$:useValidate(),
        time: ["01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00","07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30" ],
        formdata:{
          name:'',
          dob:'',
          gender:'',
          phone:'',
          address:'',
          reason:'',
          specialist:'',
          date:"",
          startTime:'',
          endTime:'',
        },
        appointmentList:[],
        strstart:'',
        strend:'',
        startTime: '',
        endTime: '',
        endam: false,
        endpm: false,
        startam: false,
        startpm: false
      }
    },
    validations(){
     const nospecial=helpers.regex(/^[A-Za-z]*$/);
     return{
      formdata:{
      name:{required,minLength: minLength(3),maxLength:maxLength(255),nospecial:helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",nospecial)},
      dob: {required},
      gender: {required},
      phone: {required,numeric,minLength: minLength(11),maxLength:maxLength(14)},
     address:{required},
      reason: {required},
      specialist: {required,nospecial:helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",nospecial)},
      date: {required},
      startTime:{required},
      endTime:{required}
      }

     }
    },
    methods: {
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
     
      submitForm() {
        // this.formdata.startTime=this.startTime
        if(this.startTime===''){
          this.strend=""
          this.strstart="Choose Start Time"
        }else if(this.startam===false && this.startpm===false){
          this.strend=""
         this.strstart="Choose AM or PM for Start Time"
        }else if(this.endTime===''){
          this.strstart=""
          this.strend="Choose End Time"
        }else if(this.endam===false && this.endpm===false){
           this.strstart=""
          this.strend="Choose AM or PM for End Time"
        }else{
          this.strstart=""
          this.strend=""
          this.startam===true ? this.startTime=this.startTime+'AM' : this.startTime=this.startTime+'PM'
          this.endam===true ?  this.endTime=this.endTime+'AM' : this.endTime=this.endTime+'PM'
          this.formdata.startTime=this.startTime
          this.formdata.endTime=this.endTime
        }   
        this.v$.$touch()
        //console.log(this.v$.name.$error)
        if (!this.v$.$error) {
          this.appointmentList.push(this.formdata)
          console.log(this.formdata)
        }
      //  console.log(this.v$.value)
      // }
      // }else{

      // }

      }
    }
        
    }
</script>

<style lang="scss" scoped>

</style>