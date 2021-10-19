<template>
    <div class="bg-regal-bg">
        <section class="flex flex-col md:flex-row h-screen ">

             <div class=" bg-white  2xl:mt-12 2xl:mb-12 w-full 2xl:mx-52 flex px-10 md:px-0 ">
  <div class=" md:max-w-md  md:mx-auto  md:w-1/2 w-full flex  ">

    <div class="w-full mt-5 ">

      <h1 class="text-xl md:text-3xl font-bold leading-tight  text-left mb-10" style="color:#005072 font-mono">MT Dental Center</h1>
      <h1 class="text-xl md:text-3xl font-bold leading-tight mt-2 text-left mb-5"  style="color:#005072">Sign Up</h1>

          <form action="" @submit.prevent="signupForm" >
                <div>
                    <div class="flex 2xl:-mr-12 -mx-1">
                        <div class="w-full  mb-3 text-left ">
                            <label for="" class="text-sm font-medium px-1 text-regal-teal">Full name <span class="text-xs text-gray-400 font-medium">(Should include A-Z, a-z and no special characters i.e ' .,/# ' and no Dr./Mr.)</span> </label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.name" type="text" class="w-full -ml-10 h-11 pl-10 rounded outline-none text-regal-teal"  style="background:#E7FBFC" >
                            </div>
                                 <small class="text-regal-red mb-2">{{this.strName}}</small>
                        </div>
                    </div>
                    <div class="flex 2xl:-mr-12 -mx-1">
                        
                        <div class="w-1/2 mr-3 mb-3 text-left">
                            <label for="" class="text-sm font-medium px-1  text-regal-teal">Gender</label>
                            <div class="relative">
              <select
                class="block appearance-none w-full  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" style="background:#E7FBFC"
                id="gender" v-model="formData.gender">
                <option>Male</option>
                <option>Female</option>
                
                <option>Others</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
              <small class="text-regal-red mb-2">{{this.strGender}}</small>
                        </div>
                        <div class="w-1/2  mb-3 text-left">
                            <label for="" class="text-sm font-medium px-1  text-regal-teal">Date of Birth</label>
                            <div class="">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                            <input class="appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none  pl-10 text-regal-teal" style="background:#E7FBFC"
                            id="date" type="date" placeholder="" v-model="formData.dob">
                            </div>
                              <small class="text-regal-red mb-2">{{this.strDob}}</small>
                        </div>
                    </div>
                    <div class="flex 2xl:-mr-12 -mx-1">
                        <div class="w-full mb-3 text-left">
                            <label for="" class="text-sm font-medium px-1  text-regal-teal">Address</label>
                            <div class="flex ">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <textarea v-model.trim="formData.address" type="text" class="w-full -ml-10 pl-10 pr-3 py-2 text-regal-teal   rounded h-24 outline-none " style="background:#E7FBFC"></textarea>
                            </div>
                              <small class="text-regal-red mb-2">{{this.strAddress}}</small>
                        </div>
                      
                    </div>
                    <div class="flex 2xl:-mr-12 -mx-1">
                    <div class="w-full  mb-2 text-left">
                            <label for="" class="text-sm font-medium px-1  text-regal-teal">Phone <span class="text-xs text-gray-400 font-medium">(Should include only digits i.e 0-9)</span></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.phone" type="text" class="w-full -ml-10 h-11 py-2 pl-10 rounded outline-none text-regal-teal" style="background:#E7FBFC" >
                            </div>
                              <small class="text-regal-red mb-2">{{this.strPhone}}</small>
                        </div>
                     </div>
                    <div class="flex 2xl:-mr-12 -mx-1">
                    <div class="w-full  mb-2 text-left">
                            <label for="" class="text-sm font-medium px-1  text-regal-teal">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model.trim="formData.email" type="email" class="w-full -ml-10 h-11 py-2  pl-10 text-regal-teal rounded outline-none" style="background:#E7FBFC" >
                            </div>
                              <small class="text-regal-red mb-2">{{this.strEmail}}</small>
                        </div>
                     </div>
                    <div class="flex 2xl:-mr-12 -mx-1">
                    <div class="w-full  mb-2 text-left">
                            <label for="" class="text-sm font-medium px-1  text-regal-teal">Password <span class="text-xs text-gray-400 font-medium">(Should include 0-9,A-Z, a-z and special characters)</span></label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input v-model="formData.password" type="password" class="w-full -ml-10 h-11 py-2  pl-10 rounded outline-none text-regal-teal" style="background:#E7FBFC" >
                            </div>
                              <small class="text-regal-red mb-2">{{this.strPassword}}</small>
                        </div>
                     </div>
                    
                    <div class="flex justify-center -mx-1 border-b border-gray-300 2xl:-mr-12 mt-2">
                         <div class="w-full mb-2"> 
                            <button class="block w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold " style="background:#46CDD3" @click="signupForm">Create New Account</button>
                        </div>
                    </div> 

                      <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">{{this.str}}</p>

                   
                         
                        <div class="flex justify-center 2xl:-mr-12 -mx-1">
                            <div class="w-full "> 
                                <h3 class="text-sm mb-1" style="color:#036792">Aready Have An Account?</h3>
                            <router-link to="/" class="block w-64 max-w-xs mx-auto text-white rounded-lg  py-3 font-semibold" style="background:#036792">Login</router-link>
                            </div>
                            <!-- <router-link to="/" class="hover:text-indigo-800 text-blue-700" > Sign In Instead </router-link> --> 
                        </div>
                </div>
                </form>

    </div>
  </div>
  <div class="hidden 2xl:block w-1/2   0bject-right ">
    <img src="@/assets/svgs/register.svg" alt="" class="w-full h-full object-cover  flex justify-end ">
  </div>
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
                strEmail:"",
                strPassword:"",
                strName:"",
                strDob:"",
                strAddress:"",
                strGender:"",
                strPhone:"",
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
              this.formData.phone=this.formData.phone.replace(/\s/g, '')
            
              if (this.formData.name === '') {
                   this.strName = 'Name cannot be blank';  
                     }   
                       else if (this.formData.name.length < 3 || this.formData.name.length > 255) {
                          this.strDob ='',
                          this.strEmail= '',
                          this.strPassword='',
                          this.strAddress='',
                          this.strGender='',
                          this.strPhone= '', 
                   this.strName = 'Minimum length 3 & Maximum length 255 '; 
                    }   
                      else if (this.formData.gender === '') {
                           this.strDob ='',
                          this.strEmail= '',
                          this.strPassword='',
                          this.strAddress='',
                          this.strName='',
                          this.strPhone= '', 
                   this.strGender = 'Gender cannot be blank';  
                     }  
                      else if (this.formData.dob === '') {
                           this.strName ='',
                          this.strEmail= '',
                          this.strPassword='',
                          this.strAddress='',
                          this.strGender='',
                          this.strPhone= '', 
                   this.strDob = 'Date of Birth cannot be blank';  
                     } 
                      else if (this.formData.address === '') {
                           this.strDob ='',
                          this.strEmail= '',
                          this.strPassword='',
                          this.strName='',
                          this.strGender='',
                          this.strPhone= '', 
                   this.strAddress = 'Address cannot be blank';  
                     }   
                 
                  else if (this.formData.phone === '') {
                       this.strDob ='',
                          this.strEmail= '',
                          this.strPassword='',
                          this.strAddress='',
                          this.strGender='',
                          this.strName= '', 
                   this.strPhone = 'Phone cannot be blank';  
                     }   
                     else if (this.formData.phone.length < 11 || this.formData.phone.length > 14 ) {
                          this.strDob ='',
                          this.strEmail= '',
                          this.strPassword='',
                          this.strAddress='',
                          this.strGender='',
                          this.strName= '', 
                   this.strPhone = 'Minimum length 11 & Maximum length 14';  
                     }   
               else if (this.formData.email === '') {
                    this.strDob ='',
                          this.strPhone= '',
                          this.strPassword='',
                          this.strAddress='',
                          this.strGender='',
                          this.strName= '', 
                    this.strEmail ='Email cannot be blank';
                }
                 else if (this.formData.password === '') {
                      this.strDob ='',
                          this.strEmail= '',
                          this.strPhone='',
                          this.strAddress='',
                          this.strGender='',
                          this.strName= '', 
                   this.strPassword = 'Password cannot be blank';
                } 
                else if (this.formData.password.length < 8) {
                     this.strDob ='',
                          this.strEmail= '',
                          this.strPhone='',
                          this.strAddress='',
                          this.strGender='',
                          this.strName= '', 
                   this.strPassword = 'Password should be atleast 8 characters'
                }
            else{
                this.strDob ='',
                this.strEmail= '',
                this.strPhone='',
                this.strAddress='',
                this.strGender='',
                this.strName= '',
                this. strPassword="",
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