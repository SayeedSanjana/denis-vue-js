<template>
    <div class="2xl:bg-regal-bg">

        <section class="flex flex-col md:flex-row h-screen">
            <div
                class=" bg-white  2xl:mt-12 2xl:mb-12 w-full 2xl:mx-52 flex xl:mt-32 xl:mb-32  xl:mx-16 px-10 md:px-0 ">

                <div class=" md:max-w-md  md:mx-auto  md:w-1/2 w-full  px-6 flex  ">
                    <div class="w-full">

                        <!-- Heading starts-->
                        <div class="2xl:-mx-12">
                            <h1 class="text-xl md:text-3xl font-bold leading-tight text-left mt-12  " style="color:#005072">MT Dental Center</h1>
                            <h1 class="text-xl md:text-3xl font-bold leading-tight text-left  md:mt-32 mt-16 mb-6" style="color:#005072">Log In</h1>
                        </div>
                        <!-- Heading ends-->
                        
                        <!-- Login form starts -->
                        <form action="" @submit.prevent="submitForm">

                            <!-- Email Input starts-->
                                <div class="flex 2xl:-mx-12 -mx-1 ">
                                    <div class="w-full  mb-5 text-left">
                                        <label for="" class="text-sm font-medium px-1 text-regal-teal">Email</label>
                                        <div class="flex">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input v-model.trim="formData.email" type="email" @blur="v$.formData.email.$touch()" @keydown="toggle()" class="w-full h-12 -ml-10 pl-4 pr-3 py-2 rounded outline-none text-regal-teal" style="background:#E7FBFC">
                                        </div>
                                        <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.email.$error">{{v$.formData.email.$errors[0].$message}}</small>
                                    </div>
                                </div>
                                <!-- Email Input ends-->
                                
                                <!-- Password Input starts-->
                                <div class="flex 2xl:-mx-12 -mx-1 mb-8 ">
                                    <div class="w-full  mb-5 text-left">
                                        <label for="" class="text-sm font-medium px-1 text-regal-teal">Password </label>
                                        <div class="flex">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input v-model="formData.password" type="password" @blur="v$.formData.phone.$touch()"  @keydown="toggle()" class="w-full h-12 -ml-10 pl-4 pr-3 py-2 rounded outline-none text-regal-teal" style="background:#E7FBFC">
                                        </div>
                                      <small class="text-regal-red flex justify-start text-xs" v-if="v$.formData.password.$error">{{v$.formData.password.$errors[0].$message}}</small>
                                    </div>
                                </div>
                                  <!-- Password Input starts--> 

                                <small class="text-regal-red mb-2">{{this.err}}</small>

                                <!-- Button For Login starts -->
                                <div class="flex justify-center -mx-3 border-b border-gray-300 ">
                                    <div class="w-full mb-8">
                                        <button
                                            class="block md:w-64 w-52 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold "
                                            style="background:#46CDD3" @click="submitForm">Login</button>
                                    </div>
                                </div>
                                <!-- Button For Login ends --> 

                                <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">{{this.str}}</p>
                                
                                <!-- Button For Create Account Starts --> 
                                <div class="flex justify-center 2xl:-mx-12 -mx-1 mt-8">
                                    <div class="w-full mb-4">
                                        <h3 class="text-md mb-2" style="color:#036792">Don't Have An Account?</h3>
                                        <router-link to="/register" class="block  md:w-64 w-52 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold" style="background:#036792">Create New Account</router-link>
                                    </div>
                                </div>
                                <!--Button For Create Account Ends--> 
                        </form>
                        <!-- Login form ends -->
                    </div>
                </div>
 
                <!-- Svg starts -->
                <div class="hidden 2xl:block w-1/2 0bject-right  ">
                    <img src="@/assets/svgs/register.svg" alt="" class="w-full h-full  flex justify-end object-cover">
                </div>
                 <!-- Svg ends -->


            </div>
        </section>


    </div>
</template>

<script>
    import axios from 'axios';
    import useValidate from '@vuelidate/core';
    import {required,minLength,email} from '@vuelidate/validators';
    export default {
       
        data() {
            return {
                v$:useValidate(),
                err: '',
                formData: {
                email: '',
                password: '',
                },
            }
        },
     validations(){
     //const pattern =helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
     return{
      formData:{
      email:{required,email},
      password:{required,minLength: minLength(8)},
      }
     }
    },
        methods: {
            toggle(){
              this.str=""
              this.err=""
            },
            onChange(){
              this.v$.$validate()
            },
            //Login Form
            async submitForm() {
            this.v$.$touch()
            if (!this.v$.$error) {
                await axios.post('users/login', this.formData, )
                .then((response) => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token)
                }
                this.$router.push('/patient');
                })
                .catch((error) => {
                this.err = "Invalid Information"
                console.log(error)
            })
           
            }
                    
                }
            },
    }
</script>

<style scoped>
</style>