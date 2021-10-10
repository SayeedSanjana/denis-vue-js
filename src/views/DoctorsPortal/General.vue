<template>
  <div>
    <section class="max-w-4xl md:p-6 p-3 mx-auto bg-white  dark:bg-gray-800 ">
      <!-- <div class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 ">
        General Information of Patient
     
      </div> -->
      <div class="flex items-center justify-center p-6 mx-3 my-4  ">
        <form @submit.prevent="updatePosts(this.$route.params.id)" class="w-full max-w-lg ">
          <!-- <div class="mx-4 py-4 p-2">
            <h3 class="text-gray-500 font-semibold text-left underline ">Basic Information: </h3>
          </div> -->
          
            <!--Basic Profile-->
            <!-- <div class="flex flex-wrap -mx-3 mb-6"> -->
              <div class="w-full lg:w-full ">
                <label class="flex  text-regal-teal text-sm font-medium mb-2 justify-start " for="duuid">
                  Full Name :
                </label>
                <input
                  class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue"
                  id="name" type="text" placeholder="Name" v-model="formData.name">

              </div>
              <div class="w-full lg:w-full ">
                <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="nid">
                  NID :
                </label>
                <input
                  class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue"
                  id="nid" type="text" placeholder="Enter NID" v-model="formData.nid">

              <!-- </div> -->

            </div>

            <!-- <div class="flex flex-wrap -mx-3 mb-6"> -->



              <div class="w-full lg:w-full mt-6 ">
                <label class="flex justify-start text-regal-teal text-sm font-medium mb-2" for="dob">
                  Date Of Birth :
                </label>
                <input readonly
                  class="appearance-none block w-full bg-regal-white text-regal-teal border border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue "
                  id="dob" type="text" placeholder="1990-09-08" v-model="formData.dob">

              </div>
              <div class="w-full lg:w-full  ">
                <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="gender">
                  Gender :
                </label>
                <input readonly
                  class="appearance-none block w-full bg-regal-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue"
                  id="gender" type="text" placeholder="Gender" v-model="formData.gender">
              </div>

            <!-- </div> -->
          
          <!-- <div class="flex flex-wrap -mx-3 mb-6"> -->


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
          <p v-if="!formValid" class="text-red-500 mb-4 text-center">Please enter valid information, <span>Phone number
              should be 11 digits, nid atleast 9 digits and other entities should atleast 3 letters</span> </p>
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
        if (this.formData.name === "" || this.formData.name < 3 || this.formData.phone === "" || this.formData.phone <
          11 || this.formData.dob === "" || this.formData.dob < 3 ||
          this.formData.nid === "" || this.formData.nid < 9 || this.formData.gender === "" || this.formData.gender <
          3 || this.formData.occupation === "" || this.formData.occupation < 3 ||
          this.formData.address === "" || this.formData.address < 3) {
          this.formValid = false
        } else {
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
              })
              this.$router.push({
                name: 'PatientDetails'
              });
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
     .buttonsubmit{
        @apply px-4 py-2 bg-regal-teal text-center border text-white font-semibold  rounded-md text-sm flex
    }
</style>