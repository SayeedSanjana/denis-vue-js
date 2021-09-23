<template>
  <div>
    <section class="max-w-4xl md:p-6 p-3 mx-auto bg-white  dark:bg-gray-800 ">
      <div class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 ">
        General Information of Patient
        <!-- {{this.$route.params.id}} -->

      </div>
      <div class="flex items-center justify-center p-6 mx-3 my-4  ">
        <form @submit.prevent="updatePosts(this.$route.params.id)" class="w-full max-w-lg ">
          <div class="mx-4 py-4 p-2">
            <h3 class="text-gray-500 font-semibold text-left underline ">Basic Information: </h3>
          </div>
          <div>
            <!--Basic Profile-->
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full lg:w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="duuid">
                  Full Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name" type="text" placeholder="Name" ref="inputRef" v-model="formData.name">

              </div>
              <div class="w-full lg:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nid">
                  NID
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="nid" type="text" placeholder="11111111111" v-model="formData.nid">

              </div>
              <div class="w-full lg:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="contact">
                  Phone
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="contact" type="text" placeholder="Give contact!" v-model="formData.phone">
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">



              <div class="w-full lg:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dob">
                  Date Of Birth
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="dob" type="date" placeholder="1990-09-08" v-model="formData.dob">

              </div>
              <div class="w-full lg:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gender">
                  Gender
                </label>
                <div class="relative">
                  <select value="male"
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="gender" v-model="formData.gender">
                    <option value="" selected disabled class="text-gray-200">Select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">


            <div class="w-full lg:w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="religion">
                Occupation
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="religion" type="text" placeholder="" v-model="formData.occupation">
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">


            <div class="w-full lg:w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nationality">
                Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nationality" type="text" placeholder="Bangladeshi" v-model="formData.address">
            </div>
          </div>
              <p v-if="!formValid" class="text-red-500 mb-4 text-center">Please enter valid information, <span>Phone number should be 11 digits, nid atleast 9 digits and other entities should atleast 3 letters</span> </p>
          <div class="mt-8 py-3 px-3 flex justify-end">
            <button class="button">
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

  export default {
    created() {

      this.getPosts(this.$route.params.id);


    },
    mounted() {
      this.$refs.inputRef.focus()
    },
    data() {
      return {
        formValid:true,
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
        await axios.get('patients/' + id)
          .then((response) => {

            this.formData = response.data.result
            console.log(this.formData)

          })


          .catch((error) => {
            console.log(error)

          })

      },
      async updatePosts(id) {
        console.log(this.formData)
        if(this.formData.name===""||this.formData.name<3||this.formData.phone===""||this.formData.phone<11||this.formData.dob===""||this.formData.dob<3
        ||this.formData.nid===""||this.formData.nid<9||this.formData.gender===""||this.formData.gender<3||this.formData.occupation===""||this.formData.occupation<3
        ||this.formData.address===""||this.formData.address<3){
          this.formValid=false
        }
        else{
        await axios.patch('patients/' + id + '/update-patient', this.formData)
          .then((response) => {
            swal({title: "Success", text: "Patient updated Successfully!", icon: 
                    "success" , timer: 1000, buttons: false})
            this.$router.push({
              name: 'PatientDetails'
            });
            console.log(response);

          })


          .catch((error) => {
            console.log(error)

          })
            this.formValid=true
        }

      },


    },
  }
</script>

<style scoped>

</style>