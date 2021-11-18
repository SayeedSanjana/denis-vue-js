<template>
  <div>
    <!-- if change components is false then it will show only the list of medicine -->
    <div v-if="!changecomponents">
      <p class="text-left font-semibold text-regal-teal mx-12 mt-6 ">Medicine History</p>

      <!-- If there exists medicine -->
      <div v-if="this.Treatment.length >= 1">
        <!-- Search area starts here -->
        <div class="flex justify-between mx-12">
          <div class="flex relative">
            <form >
              <div class="mt-5 mb-2 border border-regal-teal bg-regal-light-blue  border-opacity-30 py-1 px-3 flex justify-between rounded-md">
                <input class="flex-grow outline-none text-regal-teal bg-regal-light-blue  rounded-md " name="q" type="text" placeholder="Search" v-model="text" />
                <span class="ml-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-regal-teal transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </span>
              </div>
            </form>
            <div class="mx-5 flex">
            <!-- Previous button starts here -->
              <button class="mx-2" type="button">
                <svg  class="w-8 h-8 " width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#F2FBFC" />
                <path d="M18 1.38477C8.82695 1.38477 1.38464 8.82707 1.38464 18.0002C1.38464 27.1732 8.82695 34.6155 18 34.6155C27.1731 34.6155 34.6154 27.1732 34.6154 18.0002C34.6154 8.82707 27.1731 1.38477 18 1.38477Z"
                  stroke="#73C6CA" stroke-width="2" stroke-miterlimit="10" />
                <path d="M21.4617 26.3078L13.154 18.0001L21.4617 9.69238" stroke="#73C6CA" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg></button>
              <!-- Previous button ends here -->

              <!-- Next button starts here -->
              <button class="mx-2 " type=button>
                <svg class="w-8 h-8 " width="36" height="36" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle r="18" transform="matrix(-1 0 0 1 18 18)" fill="#F2FBFC" />
                <path d="M18 1.38477C27.173 1.38477 34.6154 8.82707 34.6154 18.0002C34.6154 27.1732 27.173 34.6155 18 34.6155C8.82689 34.6155 1.38459 27.1732 1.38459 18.0002C1.38459 8.82707 8.82689 1.38477 18 1.38477Z"
                  stroke="#005072" stroke-width="2" stroke-miterlimit="10" />
                <path d="M14.5383 26.3078L22.846 18.0001L14.5383 9.69238" stroke="#005072" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                </svg> 
              </button>   
              <!-- Next button ends here -->

            </div>
          </div>
          
          <!-- Back button starts here -->
          <div class="mt-4 mb-2 py-1 px-3 flex justify-end">
            <button class="py-2.5 px-5 text-regal-teal font-semibold  text-xs flex bg-regal-light-blue" @click="backToDashBoard()">
              <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#005072" /></svg>
              Back
            </button>
          </div>
           <!-- Back button ends here -->
        </div>
        <!-- Search area ends here -->

       <!-- medicine list starts here -->
        <div v-for="i in 4" :key="i">
          <div class="shadow-md border bg-regal-white border-regal-blue border-opacity-30 justify-center mx-12 my-6 hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm " v-if="!changecomponents">

            <!-- upper portion info of the card starts here -->
            <div class="bg-regal-presGreen rounded-br-3xl py-4 h-full shadow-inner lg:w-1/3">
              <div class="flex mx-3">
                <div class="text-white text-sm font-bold text-left mr-2">Visiting date: </div>
                <div class="text-white text-sm font-bold text-left">10 November,2021</div>
              </div>
            </div>
            <!-- upper portion info of the card starts here -->
            <!-- list of medicine starts -->
                <table class=" rounded-t-xl m-5 w-5/6 lg:w-4/5 mx-6">
                <tr class="border border-regal-blue border-opacity-25 bg-white  text-regal-cyan">
                    <td class="py-3 ">Tablet</td>
                    <td class="px-2 py-3">Fenadin</td>
                    <td class="px-2 py-3">1-0-0-1</td>
                    <td class="px-2 py-3">2 days</td>                
                </tr>
                <tr class="border border-regal-blue border-opacity-25 bg-white  text-regal-cyan">
                    <td class="py-3 ">Tablet</td>
                    <td class="px-2 py-3">Fexo</td>
                    <td class="px-2 py-3">1-0-0</td>
                    <td class="px-2 py-3">1 month</td>                
                </tr>
                <!-- list of medicine ends -->
            </table>
             <!-- right portion info of the card ends here -->
          </div>
        </div>
        <!--medicine list ends here -->
      </div>

      <!-- If there is no medicine this porion of the div will be shown-->
      <div v-else class="flex-row mx-12">
        <!-- Back button starts here -->
        <div class="mt-4 mb-2 py-1 px-3 flex justify-end">
          <button class="py-2.5 px-5 text-regal-teal font-semibold  text-xs flex bg-regal-light-blue" @click="backToDashBoard()">
            <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#005072" /></svg>
            Back
          </button>
        </div>
        <!-- Back button ends here -->

        <div class=" flex items-center justify-center  ">
          <!-- Alert Info -->
          <div  class="bg-regal-teal px-6 py-4  my-4 rounded-md text-lg mx-auto flex items-center  w-full ">
            <svg class="h-6 w-6 fill-current text-white mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
            <div>
              <p class="font-bold text-white">No Past Medicine List</p>
            </div>
          </div>
          <!-- End Alert Info -->

        </div>
      </div>
    </div>
    <!-- If details button pressed X-RayView components will be called -->
    <div v-if="changecomponents">
      <XRayView :changecomponents="changecomponents"  @backToList="change" />
    </div>
   
  </div>
</template>

<script>
  //import axios from "axios";
  import moment from "moment";
  import XRayView from "../DoctorsPortal/XRayView.vue";
  //import PrescriptionView from "../DoctorsPortal/PrescriptionView.vue";
  export default {
    props: {
      //Prescription1: Array
    },
    components: {
      XRayView
    },
    created() {
     // this.getPrescription(this.$route.params.id)
    },

    data() {
      return {
        token: localStorage.getItem('token'),
        changecomponents: false,
        Treatment: [{
            name:'erfere',
            doctorName:'fdf'
        }],
        //Prescription:[],
        //presId: "",
        prePage: 10,
        currentPage: 1,
        dateCon: "",
        result: [],
        id: this.$route.params.id


      }
    },
    computed: {
      filteredList() {
        const star = (this.currentPage - 1) * this.prePage
        const end = this.currentPage * this.prePage
        const result = this.Prescription.slice(star, end)
        console.log(result)
        return result
      }
    },
    methods: {
      dateConversion(date) {
        this.dateCon = moment(date).format('LL')

      },
      changePage(num) {
        this.currentPage = this.currentPage + num

      },
    //   async getPrescription(id) {
    //     this.id = id
    //     await axios.get('prescriptions/' + id + '/list?page=1&limit=10', {
    //         headers: {
    //           "Authorization": `Bearer ${localStorage.getItem('token') }`
    //         }
    //       })
    //       .then((response) => {
    //         this.Prescription = response.data['result'];
    //         console.log(this.Prescription)

    //       })

    //       .catch((error) => {
    //         console.log(error)
    //         this.errorMsg = 'Error retrieving data'
    //       })
    //   },
      change() {
        this.changecomponents = !this.changecomponents
      },
      backToDashBoard() {
        this.$emit("dashboard")
      },
      patientXRay() {
        this.changecomponents = true
        // this.presId = id
        // console.log(this.id)
        // console.log(this.presId)
        // console.log("pressed")
      }
    }
  }
</script>
<style scoped>
</style>