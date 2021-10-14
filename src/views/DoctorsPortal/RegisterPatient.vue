<template>
  <div>
    <!-- <header class="sticky top-0 z-50">

      <Nav />
    </header> -->

    <div
      class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
      <div class="w-full  lg:max-w-2xl max-w-lg  max-h-screen relative mx-auto my-auto rounded-sm bg-white">
        <!--content-->
        <div class="mt-5">
          <!--body-->
          <div class="text-center  flex-auto justify-center">

            <!-- <div class="flex justify-end">
              <button @click="closeModal">

                <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                    fill="#f44336" />
                  <path
                    d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                    fill="#fafafa" /></svg>
              </button>
            </div> -->

            <section
              class="max-w-4xl md:p-6 p-1 mx-auto bg-white  flex flex-row  justify-center  dark:bg-gray-800 ">


              <form @submit.prevent="createPatient" class="w-full max-w-lg mx-24">
                <div
                  class=" text-xl title-font font-bold text-regal-teal pb-3 pt-2 ">
                  Register New Patient
                </div>

                <div class="flex flex-wrap -mx-3 mb-2 mt-4">
                  <div class="w-full  px-3 mb-6 md:mb-0">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="name">
                      Full Name
                    </label>
                    <input
                      class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="name" type="text" placeholder="" v-model="formdata.name">
                      <small class="text-regal-red mb-2">{{this.strName}}</small>
                  </div>

                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full px-3">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="phone">
                      Phone
                    </label>
                    <input
                      class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="phone" type="text" placeholder="" v-model="formdata.phone">
                        <small class="text-regal-red mb-2">{{this.strPhone}}</small>
                  </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">

                  <div class="w-full px-3 ">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="gender">
                      Gender
                    </label>
                    <div class="relative">
                      <select
                        class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="gender" v-model="formdata.gender">
                        <option>Male</option>
                        <option>Female</option>
                        <!-- <option>Transgender</option> -->
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                     <small class="text-regal-red mb-2">{{this.strGender}}</small>
                  </div>
                  
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full  px-3">
                    <label class="block text-left text-regal-teal text-xs font-bold mb-2" for="dob">
                      Date Of Birth
                    </label>
                    <input
                      class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="date" type="date" placeholder="Input date of birth" v-model="formdata.dob">
                    <small class="text-regal-red mb-2">{{this.strDob}}</small>
                  </div>
                </div>
                <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">Please enter valid information, <span>Phone
                    number should be 11 digits and name should atleast 3 letters</span> </p>

                <div class=" flex justify-between mt-6">
                  <button  class=" px-10 bg-regal-teal text-center p-2 m-2 border  text-white font-semibold  rounded-lg text-sm">
                    Create Patient
                  </button>
                   <button  @click="closeModal" class=" px-10 bg-regal-green text-center p-2 m-2 border  text-regal-teal font-semibold  rounded-lg text-sm">
                    Cancel
                  </button>
                </div>
              </form>
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
  export default {
    components: {
     
    },
    data() {
      return {
         strName:"",
                strDob:"",
               
                strGender:"",
                strPhone:"",
        token: localStorage.getItem('token'),
        formIsValid: true,
        formdata: {
          name: '',
          gender: '',
          phone: '',
          dob: ''
        }
      }
    },
    methods: {
      async createPatient() {
        this.formIsValid = true;
        // console.log(this.formdata);
        // if (this.formdata.name === '' || this.formdata.name.length < 3 || this.formdata.gender === '' || this.formdata
        //   .dob === '' || this.formdata.phone.length < 11 || this.formdata.phone.length > 11) {
        //   this.formIsValid = false;
         
        // } 
        if (this.formdata.name === '') {
                   this.strName = 'Name cannot be blank';  
                     }   
                       else if (this.formdata.name.length < 3 || this.formdata.name.length > 255) {
                          this.strDob ='',
                          this.strGender='',
                          this.strPhone= '', 
                   this.strName = 'Minimum length 3 & Maximum length 255 '; 
                    }   
                     else if (this.formdata.phone === '') {
                       this.strDob ='',
                         
                          this.strGender='',
                          this.strName= '', 
                   this.strPhone = 'Phone cannot be blank';  
                     } 
                      else if (this.formdata.phone.length < 11 || this.formdata.phone.length > 14 ) {
                          this.strDob ='',
                         
                          this.strGender='',
                          this.strName= '', 
                   this.strPhone = 'Minimum length 11 & Maximum length 14';  
                     }   
                      else if (this.formdata.gender === '') {
                           this.strDob ='',
                         
                          this.strName='',
                          this.strPhone= '', 
                   this.strGender = 'Gender cannot be blank';  
                     }  
                      else if (this.formdata.dob === '') {
                           this.strName ='',
                         
                          this.strGender='',
                          this.strPhone= '', 
                   this.strDob = 'Date of Birth cannot be blank';  
                     } 
                    
                 
                 


        else {
          await axios.post('patients/create-patient', this.formdata, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token') }`
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