<template>
    <div>
        <section class="flex flex-col md:flex-row h-screen items-center">

 

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

          <form action="" @submit.prevent="signupForm">
                <div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Full name</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.name" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John">
                            </div>
                        </div>
                      
                   
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Gender</label>
                            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="gender" v-model="formData.gender">
                <option>Male</option>
                <option>Female</option>
                 <option>Transgender</option>
                <option>Others</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
                        </div>
                      
                    
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Date of Birth</label>
                            <div class="">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="date" type="date" placeholder="" v-model="formData.dob">
                            </div>
                        </div>
                      
                        <div class="w-1/2 px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Phone</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.phone" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Phone Number">
                            </div>
                        </div>
                    </div>
                   
                      
                   
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-xs font-semibold px-1">Address</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.address" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Full Address">
                            </div>
                        </div>
                      
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="email" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.email" type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="name12@example.com">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="password" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input v-model="formData.password" type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                        </div>
                    </div>

                      <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">{{this.str}}</p>
                         
                        <div class="w-full px-3 mb-5">
                            
                            <router-link to="/" class="hover:text-indigo-800 text-blue-700" > Sign In Instead </router-link>
                        </div>
                </div>
                </form>

    </div>
  </div>
   <div class="hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen">
    <img src="@/assets/svgs/register.svg" alt="" class="w-full h-full object-cover">
  </div>

</section>     
<div v-if="openModal"><PinNumber :pin="pin" :formData="formData" @closeModal="closeModal"/></div>

    </div>
</template>

<script>
import axios from "axios";
import PinNumber from "../../components/PinNumber.vue";
    export default {
        created(){
           this.getPin()
        },
        components:{
          PinNumber
        },
        data(){
            return{
                pinObject:{},
                pin:'',
                openModal:false,
                formIsValid:false,
                str:"",
                strPh:"",
                strPa:"",
                formData:{
                    name:'',
                    email:'',
                    password:'',
                    dob:'',
                    phone:'',
                    gender:'',
                    address:'',
                }
            }
        },
        methods:{
            //Sign In
            async signupForm(){
             if(this.formData.email === ''|| this.formData.name===''||this.formData.password===''||this.formData.dob===''||this.formData.phone===''||this.formData.gender===''||this.formData.address===''){
                    this.formIsValid = false;
                    this.str="Please Enter Valid Input"
             }
                    else if(this.formData.phone.length!==11){
                         this.str="Phone number should be of 11 digits"
                    }

                    else if(this.formData.phone.length!==11){
                         this.str="Phone number should be of 11 digits"
                    }
                     else if(this.formData.password.length<8){
                         this.str="Password should be of atleast 8 digits"
                    }
                    
            else{
                this.str=""
                this.openModal=true
        
             }
            },
            
            
            //Get the Pin 
             async getPin(){
               await axios.get('pin/search')
                .then((response) => {
                   
                    this.pinObject= response.data['result'];
                    this.pinObject.forEach((p) => {
                            this.pin=p.pin;
                        });                          
                  console.log(this.pin) 
                })
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retrieving data'
                })
            },
            closeModal(){
                this.openModal=false
            }
        }
    }
</script>

<style scoped>
</style>