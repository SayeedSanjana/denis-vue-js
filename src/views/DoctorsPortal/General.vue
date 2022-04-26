<template>
  <div>
    <section class="max-w-4xl md:p-6 p-3 mx-auto bg-white  dark:bg-gray-800 ">

      <div class="flex items-center justify-center p-6 mx-3 my-4  ">

        <!-- form starts -->
        <form @submit.prevent="updatePatientInfo(this.$route.params.id)" class="w-full max-w-lg ">
          <div class="w-full lg:w-full ">
            <label class="flex  text-regal-teal text-sm font-medium mb-2 justify-start " for="duuid">Full Name :</label>
           
           
            <input v-model="this.formData.name" @blur="v$.formData.name.$touch()" class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue" id="name" type="text" placeholder="Name" >
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.name.$error">{{v$.formData.name.$errors[0].$message}}</small>
          </div>
          <div class="w-full lg:w-full ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="nid">NID :</label>
            <input @blur="v$.formData.nid.$touch()"  class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue" id="nid" type="text" placeholder="Enter NID" v-model="this.formData.nid">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.nid.$error">{{v$.formData.nid.$errors[0].$message}}</small>

          </div>
          <div class="w-full lg:w-full mt-6 ">
            <label class="flex justify-start text-regal-teal text-sm font-medium mb-2" for="dob"> Date Of Birth :</label>
            <Datepicker type="text" class="" v-model="formData.dob" @blur="v$.formData.dob.$touch()" :enableTimePicker="false"></Datepicker>
          </div>
          <div class="w-full lg:w-full  ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="gender">Gender :</label>
            <input readonly class="appearance-none block w-full text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue" id="gender" type="text" placeholder="Gender" v-model="this.formData.gender">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.gender.$error">{{v$.formData.gender.$errors[0].$message}}</small>
          </div>
          <div class="w-full lg:w-full mt-6 ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="religion">Occupation :</label>
            <input class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue" id="religion" type="text" placeholder="" v-model="this.formData.occupation">
          </div>
          <div class="w-full lg:w-full ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="contact">Phone :</label>
            <input  @blur="v$.formData.phone.$touch()" class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue" id="contact" type="text" placeholder="" v-model="this.formData.phone">
            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.phone.$error">{{v$.formData.phone.$errors[0].$message}}</small>
          </div>
          <!-- </div> -->
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full lg:w-full px-3">
              <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="nationality">Address :</label>
              <textarea class="appearance-none block w-full h-36 bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue" id="nationality" type="text" placeholder="" v-model="this.formData.address"></textarea>
               <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.address.$error">{{v$.formData.address.$errors[0].$message}}</small>
            </div>
          </div>
        
        <!-- Button for submitting form starts here -->
          <div class="mt-8 py-3 px-3 flex justify-end">
            <button class="buttonsubmit">
              Update Profile
            </button>
          </div>
          <!-- Button for submitting form ends here -->
        </form>
        <!-- form ends -->
      </div>
    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import swal from 'sweetalert';
  import moment from "moment";
  import useValidate from '@vuelidate/core';
  import {required,minLength,maxLength,numeric,helpers} from '@vuelidate/validators';
  import Datepicker from 'vue3-date-time-picker';
  import 'vue3-date-time-picker/dist/main.css'
  export default {
     components: {
      Datepicker
        },
        props:{
          pat:Object
        },
 
    created() {
     
     
     
    //  this.getPatient(this.$route.params.id);
    },
     watch: {
       pat: function (new_value) {
         this.getPat(new_value)

       }
     },
    
    
    data() {
      return {
        v$:useValidate(),
        token: localStorage.getItem('token'),
        formData: {
          name: "",
          phone: "",
          dob: "",
          nid: "",
          gender: "",
          occupation: "",
          address: "",
        }
      }
    },
     validations(){
		const nospecial=helpers.regex(/^[A-Za-z\s]+$/);
		return{

			formData: {
			  name: {
			    required,
			    minLength: minLength(3),
			    nospecial: helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'", nospecial)
			  },
			  gender: {
			    required
			  },
			  address: {
			    minLength: minLength(3)
			  },
			  phone: {
			    required,
			    numeric,
			    minLength: minLength(11),
			    maxLength: maxLength(14)
			  },
			  nid: {
			    minLength: minLength(9),
			    maxLength: maxLength(20)
			  }
			}


		}
	
    },
    methods: {
      getPat(i) {
        //  console.log(i);
          this.formData.name = i.name,
          this.formData.phone = i.phone,
          this.formData.dob = i.dob,
          this.formData.nid = i.nid,
          this.formData.gender = i.gender,
          this.formData.occupation = i.occupation,
          this.formData.address = i.address
      },
      async getPatient(id) {
        const format2 = 'LL'
        try {
          const response = await axios.get('patients/' + id, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          });

          this.formData = response.data.data;
          this.formData.dob = new Date(this.formData.dob).toJSON().slice(0, 10).replace(/-/g, '/');
          this.formData.dob = moment(this.formData.dob).format(format2);
          
        } catch (error) {
          console.log(error);
        }
      },
      
      async updatePatientInfo(id) {

        this.v$.$touch();

        if (this.v$.$error) throw new Error(this.v$.$error);
        this.formData.phone = this.formData.phone.replace(/\s/g, '')

        if (this.formData.address === "") {
          this.formData.address = 'N/A'
          
        }
        
        if (this.formData.occupation === "") {
          this.formData.occupation = 'N/A'
          
        }
        try {
          const response = await axios.put(`patients/${id}`, this.formData, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token') }`
              }
            });
            if(response.data.status === 'success'){
              // console.log(response);
              swal({
                title: "Success",
                text: "Patient updated Successfully!",
                icon: "success",
                timer: 1000,
                buttons: false
              }).then(() => {
                new Promise(resolve => setTimeout(resolve, 2000));
                window.location = `/patient-details1/${id}`;
              })
            }
          
        } catch (error) {
          
     
          swal({
            title:"error",
            text:error.message,
            icon:"error",
            buttons:false
          })
        }
         
        
      }
    },   
  }
</script>

<style scoped>
  .buttonsubmit {
    @apply px-4 py-2 bg-regal-teal text-center border text-white font-semibold rounded-md text-sm flex
  }
</style>