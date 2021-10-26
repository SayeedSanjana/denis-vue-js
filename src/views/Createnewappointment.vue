<template >
<!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="bg-regal-white h-screen ">
            <p class="caheadername ml-52">Create New Appointment </p>
        <section class="max-w-4xl md:p-6 p-3 mx-auto   ">

      <div class="flex items-center justify-center p-6 mx-24 my-4 bg-white  ">
        <form class="w-full max-w-lg" @submit.prevent="submitForm">
             <p class=" caheadername -my-1 ">Patient Information </p>

          <div class="w-full lg:w-full ">
            <label class="calabel mt-8" >
               Name 
            </label>
            <input
              class="cainput py-2 px-4 mb-4"
              id="name" type="text" v-model="formdata.name" >
                <small class="text-regal-red mb-2 flex justify-start">{{this.strName}}</small>
          </div>
        
          

          <div class="flex lg:w-full">
            
          
          <div class=" lg:w-3/5  ">
            <label class="calabel" for="dob">
              Date Of Birth 
            </label>
            <input 
              class="cainput py-2 px-4 mb-6"
              id="dob" type="date" v-model="formdata.dob">
              <small class="text-regal-red mb-2 flex justify-start">{{this.strDob}}</small>
          </div>
             
          <div class=" lg:w-2/5 ml-4 ">
            <label class="calabel" for="gender">
              Gender 
            </label>
           <div class="relative">
                      <select v-model="formdata.gender"
                        class=" cainput py-2.5 px-2 mb-7 "
                        id="gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                     <small class="text-regal-red mb-2 flex justify-start">{{this.strGender}}</small>
          </div>
             
          </div>
         
          <div class="w-full lg:w-full ">
            <label class="calabel" for="contact">
              Contact Number 
            </label>
            <input
              class="cainput py-2 px-4 mb-7 " v-model="formdata.phone"
              id="contact" type="text"  >
              <small class="text-regal-red mb-2 flex justify-start">{{this.strPhone}}</small>
          </div>
              
          <!-- </div> -->

          <div class="flex flex-wrap -mx-3 mb-28">


            <div class="w-full lg:w-full px-3">
              <label class="calabel" for="">
                Reason 
              </label>
              <textarea
                class="cainput h-36  py-3 px-4 "
                id="nationality" type="text" placeholder="" v-model="formdata.reason" ></textarea>
                <small class="text-regal-red mb-2 flex justify-start">{{this.strReason}}</small>

            </div>
          </div>
        
            <div class="mt-4 py-3 px-3 flex justify-center mb-4">
            <button class="newbutton">
              Create Appointment
            </button>
          </div>
        </form>
      </div>
    

    </section>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
    export default {
        components:{
            Nav
        },
        data(){
            return{
            strName :'',
            strGender : '',
            strPhone : '',
            strReason:'',
            strDob:'',
                formdata:{
                    name:'',
                    dob:'',
                    gender:'',
                    phone:'',
                    reason:''
                }
            }
        },
        methods:{
        submitForm(){

        this.formdata.phone = this.formdata.phone.replace(/\s/g, '')
        if (this.formdata.name === '') {
          this.strName = 'Name cannot be blank';
        } else if (this.formdata.name.length < 3 || this.formdata.name.length > 255) {
          this.strDob = '',
          this.strGender = '',
          this.strPhone = '',
          this.strReason='',
          this.strName = 'Minimum length 3 & Maximum length 255 ';
        } else if (this.formdata.dob === '') {
          this.strName = '',
          this.strGender = '',
          this.strPhone = '',
          this.strReason='',
          this.strDob = 'Date of Birth cannot be blank';
        } else if (this.formdata.gender === '') {
          this.strDob = '',
          this.strName = '',
          this.strPhone = '',
          this.strReason='',
          this.strGender = 'Gender cannot be blank';
        } else if (this.formdata.phone === '') {
          this.strDob = '',
          this.strGender = '',
          this.strName = '',
          this.strReason='',
          this.strPhone = 'Phone cannot be blank';
        } else if (this.formdata.phone.length < 11 || this.formdata.phone.length > 14) {
          this.strDob = '',
          this.strGender = '',
          this.strName = '',
          this.strReason='',
          this.strPhone = 'Minimum length 11 & Maximum length 14';
        }else if (this.formdata.reason === '') {
          this.strName = '',
          this.strGender = '',
          this.strPhone = '',
          this.strDob = '',
          this.strReason='Reason cannot be blank';
        }
        else {
          this.strName = '',
          this.strGender = '',
          this.strPhone = '',
          this.strDob = '',
          this.strReason='';
            console.log("csdsd")
        //   await axios.post('patients/create-patient', this.formdata, {
        //       headers: {
        //         "Authorization": `Bearer ${localStorage.getItem('token') }`
        //       }
        //     })
        //     .then((response) => {
        //       console.log(response)
        //       swal({
        //         title: "Success",
        //         text: "Patient created Successfully!",
        //         icon: "success",
        //         timer: 1000,
        //         buttons: false
        //       }).then(function () {
        //         new Promise(resolve => setTimeout(resolve, 2000));
        //         window.location = `/patient`;
        //       })
        //     })
        //     .catch((error) => {
        //       console.log(error)
        //     })
        }
            }
        }
    }
</script>

<style scoped>
</style>