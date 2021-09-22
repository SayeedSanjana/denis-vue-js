<template>
  <div>
      <header class="sticky top-0 z-50">

       <Nav />
    </header>

    <section
      class="max-w-4xl md:p-6 p-3 mx-auto bg-white mt-10 flex flex-row  justify-center shadow-lg dark:bg-gray-800">


      <form @submit.prevent="createPatient" class="w-full max-w-lg">
        <div class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 pb-3 pt-2 ">
          Register New Patient
        </div>

        <div class="flex flex-wrap -mx-3 mb-6 mt-4">
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
              Full Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name" type="text" placeholder="John" v-model="formdata.name">

          </div>

        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
              Phone
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone" type="text" placeholder="01708877990" v-model="formdata.phone">

          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-2">

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="gender">
              Gender
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="gender" v-model="formdata.gender">
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="dob">
              Date Of Birth
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="date" type="date" placeholder="1990/09/08" v-model="formdata.dob">
          </div>
        </div>
                            <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">Please enter valid information, <span>Phone number should be 11 digits and name should atleast 3 letters</span> </p>

        <div class="md:w-2/3 mt-6">
          <button  class="button">
            Create Patient
          </button>
        </div>
      </form>
    </section>

  </div>
</template>

<script>
  import axios from 'axios';
  import swal from 'sweetalert';
  import Nav from "../../components/Nav.vue";
  export default {
    components:{
      Nav
      },
    data() {
      return {
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
          if (this.formdata.name === '' ||this.formdata.name.length<3 || this.formdata.gender === ''  || this.formdata.dob === '' ||  this.formdata.phone.length < 11 || this.formdata.phone.length > 11 ) {
                this.formIsValid = false;
                return;
            } else {

        await axios.post('patients/create-patient', this.formdata , 
        //  {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}}
         )
          .then((response) => {
            console.log(response)
             swal({title: "Success", text: "Patient created Successfully!", icon: 
                    "success" , timer: 1000, buttons: false})
            //this.doctors=response.data['result']
           this.$router.push('/patient'); 

          })
          .catch((error) => {
            console.log(error)
          })
            }
      },
    }

  }
</script>

<style scoped>

</style>