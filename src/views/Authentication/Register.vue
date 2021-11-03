<template>
  <div class="bg-regal-bg">


    <section class="flex flex-col md:flex-row h-screen">

      <!-- Body Starts -->
      <div class=" bg-white  2xl:mt-12 2xl:mb-12 w-full 2xl:mx-52 flex px-10 md:px-0 ">
        <div class=" md:max-w-md  md:mx-auto  md:w-1/2 w-full flex  ">
          <div class="w-full mt-5 ">
            <h1 class="text-xl md:text-3xl font-bold leading-tight  text-left mb-8" style="color:#005072 font-mono">MT Dental Center</h1>
            <h1 class="text-xl md:text-3xl font-bold leading-tight mt-2 text-left mb-3" style="color:#005072">Sign Up
            </h1>

               <!-- Register form starts -->
            <form action="" @submit.prevent="signupForm">

              <!-- Input name starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left ">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Full name <span class="text-xs text-gray-400 font-medium">(Should include A-Z, a-z and no special characters i.e' .,/# ' and no Dr./Mr.)</span> </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input v-model.trim="formData.name" type="text" @keypress="onChange('name')" 
                        class="w-full -ml-10 h-11 pl-4 rounded outline-none text-regal-teal"
                        style="background:#E7FBFC">
                    </div>
                    <small class="text-regal-red  flex justify-start text-xs" v-if="v$.formData.name.$error">{{v$.formData.name.$errors[0].$message}}</small>
                  </div>
                </div>
                 <!-- Input name starts -->

                <!-- Input gender starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-1/2 mr-3 mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Gender</label>
                    <div class="relative">
                      <select class="block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" style="background:#E7FBFC" id="gender" v-model="formData.gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                    <small class="text-regal-red flex justify-start" v-if="v$.formData.gender.$error">{{v$.formData.gender.$errors[0].$message}}</small>
                  </div>
                  <div class="w-1/2  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Date of Birth</label>
                    <div class=""> 
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input class="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none  pl-10 text-regal-teal" style="background:#E7FBFC" id="date" type="date" placeholder="" v-model="formData.dob">
                    </div>
                   <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.dob.$error">{{v$.formData.dob.$errors[0].$message}}</small>
                  </div>
                </div>
                <!-- Input gender end-->
                
                <!-- Input address starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1 text-regal-teal">Address</label>
                    <div class="flex ">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <textarea v-model.trim="formData.address" type="text" class="w-full -ml-10 pl-4 pr-3 py-2 text-regal-teal rounded h-24 outline-none " style="background:#E7FBFC"></textarea>
                    </div>
                    <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.address.$error">{{v$.formData.address.$errors[0].$message}}</small>
                  </div>
                </div>
                <!-- Input address end -->
                
                 <!-- Input phone starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1  text-regal-teal">Phone <span class="text-xs text-gray-400 font-medium">(Should include only digits i.e 0-9)</span></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input v-model.trim="formData.phone" type="text" class="w-full -ml-10 h-11 py-2 pl-4 rounded outline-none text-regal-teal" style="background:#E7FBFC">
                    </div>
                  <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.phone.$error">{{v$.formData.phone.$errors[0].$message}}</small>
                  </div>
                </div>
                <!-- Input phone ends -->
                
                <!-- Input email starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1  text-regal-teal">Email</label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input v-model.trim="formData.email" type="email" class="w-full -ml-10 h-11 py-2 pl-4 text-regal-teal rounded outline-none" style="background:#E7FBFC">
                    </div>
                    <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.email.$error">{{v$.formData.email.$errors[0].$message}}</small>
                  </div>
                </div>
                <!-- Input email ends -->

                <!-- Input password starts -->
                <div class="flex 2xl:-mr-12 -mx-1">
                  <div class="w-full  mb-1 text-left">
                    <label for="" class="text-sm font-medium px-1  text-regal-teal">Password <span class="text-xs text-gray-400 font-medium">(Should include 0-9,A-Z, a-z and special characters)</span></label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input v-model="formData.password" type="password" class="w-full -ml-10 h-11 py-2 pl-4 rounded outline-none text-regal-teal" style="background:#E7FBFC">
                    </div>
                    <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.password.$error">{{v$.formData.password.$errors[0].$message}}</small>
                  </div>
                </div>
                <!-- Input password ends -->

                <!-- Button for creating new account -->
                <div class="flex justify-center -mx-1 border-b border-gray-300 2xl:-mr-12 mt-2">
                  <div class="w-full mb-2">
                    <button class="block w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold "
                      style="background:#46CDD3" @click="signupForm">Create New Account</button>
                  </div>
                </div>

                <!-- Button for login-->
                <div class="flex justify-center 2xl:-mr-12 -mx-1">
                  <div class="w-full ">
                    <h3 class="text-sm mb-1" style="color:#036792">Aready Have An Account?</h3>
                    <router-link to="/" class="block w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold"
                      style="background:#036792">Login</router-link>
                  </div>
                  <!-- <router-link to="/" class="hover:text-indigo-800 text-blue-700" > Sign In Instead </router-link> -->
                </div>
            </form>
               <!-- Register form  ends -->

          </div>
        </div>

        <!-- svgs -->
        <div class="hidden 2xl:block w-1/2   0bject-right ">
          <img src="@/assets/svgs/register.svg" alt="" class="w-full h-full object-cover  flex justify-end ">
        </div>
         <!-- svgs -->

      </div>
      <!-- Body Ends -->

    </section>

    <!-- Pin Modal Components Called here -->
    <div v-if="openModal">
      <PinNumber :pin="pin" :formData="formData" @closeModal="closeModal" />
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  import PinNumber from "../../components/PinNumber.vue";
  import useValidate from '@vuelidate/core';
  import {required,minLength,maxLength,numeric,email,helpers} from '@vuelidate/validators';
  export default {
    created() {
      this.getPin()
    },
    components: {
      PinNumber
    },
    data() {
      return {
        v$:useValidate(),
        pinObject: {},
        pin: '',
        openModal: false,
        formData: {
          name: '',
          email: '',
          password: '',
          dob: '',
          phone: '',
          gender: '',
          address: '',
        }
      }
    },
     validations(){
     const pattern =helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
     const val1 =(value)=>!value.includes('Dr.');
     const val2 =(value)=>!value.includes('dr.');
     const val3 =(value)=>!value.includes('DR.');
     const nospecial=helpers.regex(/^[A-Za-z]*$/);
     return{
      formData:{
      name:{required,minLength: minLength(3),maxLength:maxLength(255),val1:helpers.withMessage("Don't include Dr. in the name",val1),val2:helpers.withMessage("Don't include Dr. in the name",val2),val3:helpers.withMessage("Don't include Dr. in the name",val3),nospecial:helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",nospecial)},
      email:{required,email},
      password:{required,minLength: minLength(8),pattern:helpers.withMessage("Should include 0-9,A-Z, a-z and special characters like '@,#,$,*'",pattern)},
      dob: {required},
      gender: {required},
      phone: {required,numeric,minLength: minLength(11),maxLength:maxLength(14)},
      address: {required},
      }
     }
    },
    methods: {
      onChange(v){
        console.log(v)
        //console.log(this.v$.v)
      },
      //Sign In
      async signupForm() {
        this.formData.phone = this.formData.phone.replace(/\s/g,'')
        this.v$.$validate()
         if (!this.v$.$error) {
          this.openModal = true
        }
      },

      //Get the Pin 
      async getPin() {
        await axios.get('pin/search')
          .then((response) => {
            this.pinObject = response.data['result'];
            this.pinObject.forEach((p) => {
              this.pin = p.pin;
            });
          })
          .catch((error) => {
            console.log(error)
            this.errorMsg = 'Error retrieving data'
          })
      },
      closeModal() {
        this.openModal = false
      }
    }
  }
</script>

<style scoped>
</style>