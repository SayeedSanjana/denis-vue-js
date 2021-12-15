<template>
  <div>
    <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
      <div class="w-full  lg:max-w-2xl max-w-lg  max-h-screen relative mx-auto my-auto rounded-sm bg-white">
        <!--content-->
        <div class="mt-5">
          <!--body-->
          <div class="text-center  flex-auto justify-center">
            <section class="max-w-4xl md:p-6 p-1 mx-auto bg-white  flex flex-row  justify-center  dark:bg-gray-800 ">
            <!-- form input starts here -->
              <form @submit.prevent="createPatient" class="w-full max-w-lg mx-24">
                <div class=" text-xl title-font font-bold text-regal-teal pb-3 pt-2 ">
                  Register New Patient
                </div>
                <div class="flex flex-wrap -mx-3 mb-2 mt-4">
                  <div class="w-full  px-3 mb-6 md:mb-0">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="name">Full Name <span class="text-xs text-gray-400 font-medium">(Should include A-Z, a-z and no special characters i.e ' .,/# ')</span></label>
                    <input  @blur="v$.formdata.name.$touch()" class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="name" type="text" placeholder="" v-model="formdata.name">
                     <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.name.$error">{{v$.formdata.name.$errors[0].$message}}</small>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="phone">Phone <span class="text-xs text-gray-400 font-medium">(Should include only digits i.e 0-9 , no special characters i.e ' + ' )</span></label>
                    <input  @blur="v$.formdata.phone.$touch()" class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="phone" type="text" placeholder="" v-model="formdata.phone">
                    <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.phone.$error">{{v$.formdata.phone.$errors[0].$message}}</small>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full px-3 ">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="gender"> Gender</label>
                    <div class="relative">
                      <select @blur="v$.formdata.gender.$touch()" class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="gender" v-model="formdata.gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                    <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.gender.$error">{{v$.formdata.gender.$errors[0].$message}}</small>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full  px-3">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="dob">Date Of Birth</label>
                    <!-- <Datepicker  @blur="v$.formdata.dob.$touch()" class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="date" placeholder="Input date of birth" v-model="formdata.dob"></Datepicker> -->
                    <Datepicker  @blur="v$.formdata.dob.$touch()" class="" id="date" type="date" placeholder="" v-model="formdata.dob" :enableTimePicker="false"></Datepicker>
                    <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formdata.dob.$error">{{v$.formdata.dob.$errors[0].$message}}</small>
                  </div>
                </div>
                <!-- Buttons for creating new patient and cancelling starts -->
                <div class=" flex justify-between mt-6">
                  <button class=" px-10 bg-regal-teal text-center p-2 m-2 border  text-white font-semibold  rounded-lg text-sm">Create Patient</button>
                  <button @click="closeModal" class=" px-10 bg-regal-green text-center p-2 m-2 border  text-regal-teal font-semibold  rounded-lg text-sm">Cancel</button>
                </div>
                <!-- Buttons for creating new patient and cancelling ends -->
              </form>
              <!-- form input ends here -->
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import swal from 'sweetalert';
  import useValidate from '@vuelidate/core';
  import {required,minLength,maxLength,numeric,helpers} from '@vuelidate/validators';
  import Datepicker from 'vue3-date-time-picker';
  import 'vue3-date-time-picker/dist/main.css'
  export default {
    components: {
     Datepicker
    },
    data() {
      return {
        v$:useValidate(),
        token: localStorage.getItem('token'),
        formdata: {
          name: '',
          gender: '',
          phone: '',
          dob: ''
        }
      }
    },
    validations(){
     const nospecial=helpers.regex(/^[A-Za-z\s]+$/);
     return{
      formdata:{
      name:{required,minLength: minLength(3),nospecial:helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",nospecial)},
      gender: {required},
      phone: {required,numeric,minLength: minLength(11),maxLength:maxLength(14)},
      dob: {required},
      }

     }
    },
    methods: {
      async createPatient() {
        this.formdata.phone = this.formdata.phone.replace(/\s/g, '')
        this.v$.$touch()
        if (!this.v$.$error) {
          await axios.post('patients/create-patient', this.formdata, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then((response) => {
              console.log(response)
              swal({
                title: "Success",
                text: "Patient created Successfully!",
                icon: "success",
                timer: 1000,
                buttons: false
              }).then(function () {
                new Promise(resolve => setTimeout(resolve, 2000));
                window.location = `/patient`;
              })
            })
            .catch((error) => {
              console.log(error)
              console.log("Something went wrong. Please try again")
            })
        }
      },
      closeModal() {
        this.$emit("closeModal")
      }
    }
  }
</script>
<style scoped>
</style>