<template>
    <div class="bg-regal-bg">

        <section class="flex flex-col md:flex-row h-screen">
            <div class=" bg-white  2xl:mt-12 2xl:mb-12 w-full 2xl:mx-52 flex xl:mt-32 xl:mb-32  xl:mx-16 ">

                <!-- <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/2  px-6 lg:px-16 xl:px-12 xl:ml-48
        flex  "> -->
                <div class=" md:max-w-md  md:mx-auto  w-1/2  px-6 
        flex  ">
                    <div class="w-full">
                        <div class="2xl:-mx-12">
                            <h1 class="text-xl md:text-3xl font-bold leading-tight text-left mt-12  "
                                style="color:#005072">MT Dental Center</h1>
                            <h1 class="text-xl md:text-3xl font-bold leading-tight text-left  mt-32 mb-6" 
                                style="color:#005072">Log In</h1>
                        </div>

                        <form action="" @submit.prevent="submitForm">
                            <div>
                                <div class="flex 2xl:-mx-12 -mx-1 ">
                                    <div class="w-full  mb-5 text-left">
                                        <label for="" class="text-sm font-medium px-1 text-regal-teal">Email</label>
                                        <div class="flex">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input v-model.trim="formData.email" type="email"
                                                class="w-full h-12 -ml-10 pl-10 pr-3 py-2 rounded outline-none text-regal-teal"
                                                style="background:#E7FBFC">
                                        </div>
                                          <small class="text-regal-red mb-2">{{this.strEmail}}</small>
                                    </div>
                                </div>
                                  
                                <div class="flex 2xl:-mx-12 -mx-1 mb-8 ">
                                    <div class="w-full  mb-5 text-left">
                                        <label for="" class="text-sm font-medium px-1 text-regal-teal">Password </label>
                                        <div class="flex">
                                            <div
                                                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input v-model="formData.password" type="password"
                                                class="w-full h-12 -ml-10 pl-10 pr-3 py-2 rounded outline-none text-regal-teal"
                                                style="background:#E7FBFC">
                                        </div>
                                                                         <small class="text-regal-red mb-2">{{this.strPassword}}</small>
                                    </div>
                                   
                                </div>
                                     <small class="text-regal-red mb-2">{{this.err}}</small>
                                <div class="flex justify-center -mx-3 border-b border-gray-300 ">
                                    <div class="w-full mb-8">
                                        <button
                                            class="block w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold "
                                            style="background:#46CDD3" @click="submitForm">Login</button>
                                    </div>
                                </div>
                                <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">{{this.str}}</p>
                                <div class="flex justify-center 2xl:-mx-12 -mx-1 mt-8">
                                    <div class="w-full mb-4">
                                        <h3 class="text-md mb-2" style="color:#036792">Don't Have An Account?</h3>
                                        <router-link to="/register"
                                            class="block  w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold"
                                            style="background:#036792">Create New Account</router-link>
                                    </div>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <!-- <div class="hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen 0bject-right "> -->
                <!-- <img src="@/assets/svgs/register.svg" alt="" class="w-full h-full object-cover flex justify-end "> -->
                <div class="hidden xl:block w-1/2 0bject-right  ">
                    <img src="@/assets/svgs/register.svg" alt="" class="w-full h-full  flex justify-end object-cover">
                </div>

            </div>
        </section>


    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                err: '',
                formData: {

                    email: '',
                    password: '',
                },
                    strPassword:'',
                    strEmail:'',
                    // strPasswordLength:'',
                    formIsValid: true

            }
        },
        methods: {
            //Login Form
            async submitForm() {
                this.formIsValid = true;
                // if(this.formData.email === ''  || this.formData.password.length < 8){
                //     this.formIsValid = false;
                //     return;
                // }
                if (this.formData.email === '') {
                    this.strPassword='',
                    this.strEmail ='Email cannot be blank';
                } else if (this.formData.password === '') {
                    this.strEmail='',
                   this.strPassword = 'Password cannot be blank';
                } else if (this.formData.password.length < 8) {
                    this.strEmail='',
                   this.strPassword = 'Password should be atleast 8 characters'
                }
                 
                else {
                    await axios.post('users/login', this.formData,

                        )
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
            },


           
        }
    }
</script>

<style scoped>
</style>
