<template>
  <div>
    <section class="max-w-4xl md:p-6 p-3 mx-auto bg-white  dark:bg-gray-800 ">

      <div class="flex items-center justify-center p-6 mx-3 my-4  ">
        <form @submit.prevent="updatePosts(this.$route.params.id)" class="w-full max-w-lg ">

          <div class="w-full lg:w-full ">
            <label class="flex  text-regal-teal text-sm font-medium mb-2 justify-start " for="duuid">
              Full Name :
            </label>
            <input
              class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue"
              id="name" type="text" placeholder="Name" v-model="formData.name">
                <small class="text-regal-red mb-2">{{this.strName}}</small>

          </div>
          <div class="w-full lg:w-full ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="nid">
              NID :
            </label>
            <input
              class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue"
              id="nid" type="text" placeholder="Enter NID" v-model="formData.nid">

          </div>


          <div class="w-full lg:w-full mt-6 ">
            <label class="flex justify-start text-regal-teal text-sm font-medium mb-2" for="dob">
              Date Of Birth :
            </label>
            <input 
              class="appearance-none block w-full text-regal-teal border border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue "
              id="dob" type="date" placeholder="1990-09-08" v-model="formData.dob">
                <small class="text-regal-red mb-2">{{this.strDob}}</small>
          </div>
          <div class="w-full lg:w-full  ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="gender">
              Gender :
            </label>
            <input readonly
              class="appearance-none block w-full text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue"
              id="gender" type="text" placeholder="Gender" v-model="formData.gender">
          </div>

          <div class="w-full lg:w-full mt-6 ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="religion">
              Occupation :
            </label>
            <input
              class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue"
              id="religion" type="text" placeholder="" v-model="formData.occupation">
          </div>
          <div class="w-full lg:w-full ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="contact">
              Phone :
            </label>
            <input
              class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue"
              id="contact" type="text" placeholder="" v-model="formData.phone">
                <small class="text-regal-red mb-2">{{this.strPhone}}</small>
          </div>
          <!-- </div> -->

          <div class="flex flex-wrap -mx-3 mb-6">


            <div class="w-full lg:w-full px-3">
              <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="nationality">
                Address :
              </label>
              <textarea
                class="appearance-none block w-full h-36 bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue"
                id="nationality" type="text" placeholder="" v-model="formData.address"></textarea>
            </div>
          </div>
        
          <div class="mt-8 py-3 px-3 flex justify-end">
            <button class="buttonsubmit">
              Update Profile
            </button>
          </div>
        </form>
      </div>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import swal from 'sweetalert';
  import moment from "moment";

  export default {
    created() {

      this.getPosts(this.$route.params.id);


    },
    mounted() {

      // this.$refs.inputRef.focus()
    },
    data() {
      return {
        strName: "",
        strDob: "",
        strGender: "",
        strPhone: "",
        token: localStorage.getItem('token'),
        formValid: true,
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
    methods: {
      async getPosts(id) {
        const format2 = 'LL'
        await axios.get('patients/' + id, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          })
          .then((response) => {

            this.formData = response.data.result
            this.formData.dob = new Date(this.formData.dob).toJSON().slice(0, 10).replace(/-/g, '/')
            this.formData.dob = moment(this.formData.dob).format(format2);
            console.log(this.formData)

          })


          .catch((error) => {
            console.log(error)

          })

      },
      async updatePosts(id) {
       console.log(this.formData)
       this.formData.phone = this.formData.phone.replace(/\s/g, '')
        if (this.formData.name === '') {
          this.strName = 'Name cannot be blank';
        } else if (this.formData.name.length < 3 || this.formData.name.length > 255) {
          this.strDob = '',
          this.strGender = '',
          this.strPhone = '',
          this.strName = 'Minimum length 3 & Maximum length 255 ';
        } else if (this.formData.phone === '') {
          this.strDob = '',
          this.strGender = '',
          this.strName = '',
          this.strPhone = 'Phone cannot be blank';
        } else if (this.formData.phone.length < 11 || this.formData.phone.length > 14) {
          this.strDob = '',
          this.strGender = '',
          this.strName = '',
          this.strPhone = 'Minimum length 11 & Maximum length 14';
        } else if (this.formData.gender === '') {
          this.strDob = '',
          this.strName = '',
          this.strPhone = '',
          this.strGender = 'Gender cannot be blank';
        } else if (this.formData.dob === '') {
          this.strName = '',
          this.strGender = '',
          this.strPhone = '',
          this.strDob = 'Date of Birth cannot be blank';
        } else {
           this.strDob = '',
          this.strGender = '',
          this.strPhone = '',
          this.strName = '';
          if(this.formData.address===""){
          this.formData.address='N/A'
          }
          await axios.patch('patients/' + id + '/update-patient', this.formData, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token') }`
              }
            })
            .then((response) => {
              swal({
                title: "Success",
                text: "Patient updated Successfully!",
                icon: "success",
                timer: 1000,
                buttons: false
              }).then(function () {
                  new Promise(resolve => setTimeout(resolve, 2000));
                  window.location = `/patient-details1/${id}`;
               })
              // this.$router.push({
              //   name: 'PatientDetails'
              // });
              console.log(response);

            })


            .catch((error) => {
              console.log(error)

            })
          this.formValid = true
        }

      },


    },
  }
</script>

<style scoped>
  .buttonsubmit {
    @apply px-4 py-2 bg-regal-teal text-center border text-white font-semibold rounded-md text-sm flex
  }
</style>