<template>
  <!-- header -->
  <header class="headerclass">
    <Nav />
  </header>
  <!-- header -->

  <!--Body Starts-->
  <div class="bg-regal-white h-full ">

    <!-- Title Starts -->
    <p class="caheadername ml-52">Create New Appointment </p>
    <!-- Title Starts -->

    <section class="max-w-4xl md:p-6 p-3 mx-auto   ">
      <div class="flex items-center justify-center p-6 mx-24 my-4 bg-white  ">
      
      <!-- Form Starts -->
        <form class="w-full max-w-lg" @submit.prevent="submitForm">
          <p class=" caheadername -my-1 ">Patient Information </p>
         
         <!-- Input Patient Name Starts -->
          <div class="w-full lg:w-full ">
            <label class="calabel mt-4">Name</label>
            <input class="cainput py-2 px-4 mb-4" id="name" type="text" v-model="formdata.name">
          </div>
          <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.name.$error">{{v$.formdata.name.$errors[0].$message}}</small>
      <!-- Input Patient Name Ends -->
      

          <div class="flex lg:w-full">
          <!-- Input Date Of Birth Starts -->
            <div class=" lg:w-3/5  ">
              <label class="calabel" for="dob">Date Of Birth</label>
              <input class="cainput py-2 px-4 mb-4" id="dob" type="date" v-model="formdata.dob">
              <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.dob.$error">{{v$.formdata.dob.$errors[0].$message}}</small>
            </div>
          <!-- Input Date Of Birth Ends -->

          <!-- Input Gender Starts-->
            <div class=" lg:w-2/5 ml-4 ">
              <label class="calabel" for="gender">Gender</label>
              <div class="relative">
                <select v-model="formdata.gender" class=" cainput py-2 px-2 mb-4" id="gender">
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
            <!-- Input Gender Ends-->
          </div>

        <!-- Input Contact Number Starts-->
          <div class="w-full lg:w-full ">
            <label class="calabel" for="contact">Contact Number</label>
            <input class="cainput py-2 px-4 mb-4 " v-model="formdata.phone" id="contact" type="text">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.phone.$error">{{v$.formdata.phone.$errors[0].$message}}</small>
          </div>
        <!-- Input Contact Number Ends-->

        <!-- Input Reason Starts-->
          <div class="flex flex-wrap -mx-3">  
            <div class="w-full lg:w-full px-3">
              <label class="calabel" for="">Reason</label>
              <textarea class="cainput h-36  py-3 px-4 mb-4" id="nationality" type="text" placeholder="" v-model="formdata.reason"></textarea>
              <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.reason.$error">{{v$.formdata.reason.$errors[0].$message}}</small>
            </div>
          </div>
        <!-- Input Reason Starts-->

      
        <!-- Input Specialist Name Starts-->
          <div class="w-full lg:w-full ">
            <label class="calabel" for="contact">Specialist Name</label>
            <input class="cainput py-2 px-4 mb-4 " v-model="formdata.specialist" id="contact" type="text">
           <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.specialist.$error">{{v$.formdata.specialist.$errors[0].$message}}</small>
          </div>
        <!-- Input Specialist Name Ends-->

        <!-- Input Appointment Date Starts-->
          <div class="w-full lg:w-4/6 ">
            <label class="calabel" for="contact">Appointment Date</label>
            <input class="cainput py-2 px-4 mb-4 " v-model="formdata.date" id="contact" type="date">
           <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.date.$error">{{v$.formdata.date.$errors[0].$message}}</small>
          </div>
        <!-- Input Appointment Date Ends-->

          <div class="flex">

            <!-- Start Time Starts -->
            <div class="mr-10">
              <div class=" py-2">
                <label class="calabel" for="contact">Start Time:</label>
              </div>
              <!-- label -->
              <div class=" py-2">
                <select @change="onChange()" class="text-regal-teal border  border-regal-teal border-opacity-50 rounded  leading-tight  focus:border-regal-blue px-4 py-2 mr-2 focus:outline-none" v-model="startTime">
                  <option v-for="(item,index) in time" :key="index">{{item}} </option>
                </select>
                <button type="button" class="btnampm" :class="this.startam===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="startTimesetAm()">AM</button>
                <button type="button" class="btnampm" :class="this.startpm===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="startTimesetPm()">PM</button>
                <small class="text-regal-red mb-2 flex justify-start">{{this.strstart}}</small>
              </div>
                 <!-- <small class="text-regal-red mb-2 flex justify-start" >{{this.str}}</small> -->
            </div>
            <!-- Start Time Ends-->

            <!-- Start Time Starts -->
            <div class="mr-10">
              <div class=" py-2">
                <label class="calabel" for="contact">End Time:</label>
              </div>
              <!-- label -->
              <div class=" py-2">
                <select @change="onChange()" name="" class="px-4 py-2 mr-2 text-regal-teal border  border-regal-teal border-opacity-50 rounded  leading-tight focus:outline-none focus:border-regal-blue" v-model="endTime">
                  <option v-for="(item,index) in time" :key="index">{{item}}</option>
                </select>
                <button type='button' class="btnampm" :class="this.endam===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="endTimesetAm()">AM</button>
                <button type='button' class="btnampm" :class="this.endpm===true ? 'bg-regal-cyan-blue' : 'bg-white'" @click="endTimesetPm()">PM</button>
                <small class="text-regal-red mb-2 flex justify-start">{{this.strend}}</small>
              </div>
              
            </div>
            
            <!-- Start Time Ends-->
          </div>
        </form>
        <!-- Form Starts -->

      </div>
      <div class="mt-4 py-3 px-3 flex justify-center mb-4 ">
        <button class="newbutton" @click="submitForm">
          Create Appointment
        </button>
      </div>
    </section>
  </div>
<!-- Body Starts -->

</template>

<script>
  import Nav from "../components/Nav.vue";
  import useValidate from '@vuelidate/core';
  import {required,minLength,maxLength,numeric} from '@vuelidate/validators';
  //import {reactive,computed} from "vue";

  export default {
    components: {
      Nav
    },
    
    //For Validation Purpose
    // setup() {
    //   const state = reactive({
    //     name: '',
    //     dob: '',
    //     gender: '',
    //     phone: '',
    //     reason: '',
    //     specialist: '',
    //     date:'',
    //     startTime: '',
    //     endTime: '',
    //   })

    //   const rules = computed(() => {
    //     return {
    //     name:
    //     {
    //       required,
    //       minLength: minLength(3)
    //     },
    //     dob: {required},
    //     gender: {required},
    //     phone: {required},
    //     reason: {required},
    //     specialist: {required},
    //     date: {required},
    //     startTime: {required},
    //     endTime: {required},
    //     }
    //   })

    //   this.formdata=state
    //   const v$ = useValidate(rules, state)
    //   return {
    //     state,
    //     v$
    //   }
    // },
    data() {
      return {
        v$:useValidate(),
        time: ["01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00","07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30" ],
        formdata:{
          name:'',
          dob:'',
          gender:'',
          phone:'',
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
     return{
      formdata:{
      name:{required,minLength: minLength(3),maxLength:maxLength(255)},
      dob: {required},
      gender: {required},
      phone: {required,numeric,minLength: minLength(11),maxLength:maxLength(14)},
      reason: {required},
      specialist: {required},
      date: {required},
      startTime:{required},
      endTime:{required}
      }

     }
    },
    methods: {
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
        this.v$.$validate()
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

<style scoped>
</style>