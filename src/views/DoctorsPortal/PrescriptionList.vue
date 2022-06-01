<template>
  <div>
    <!-- if change components is false then it will show only the list of prescription -->
    <div v-if="!changecomponents">
      <p class="text-left font-semibold text-regal-teal mx-12 mt-6 ">Prescription History</p>

      <!-- If there exists prescription -->
      <div v-if="this.Prescription.length >= 1">

        <!-- Search area starts here -->
        <div class="flex justify-between mx-12">
          <div class="flex relative">
            <form >
              <div class="mt-5 mb-2 border border-regal-teal bg-regal-light-blue  border-opacity-30 py-1 px-3 flex justify-between rounded-md">
                <input class="flex-grow outline-none text-regal-teal bg-regal-light-blue  rounded-md " name="q" placeholder="Search"  />
                <span class="ml-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-regal-teal transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </span>
              </div>
            </form>
            <!-- <div class="mx-5 flex">
           
              <button class="mx-2" :disabled="currentPage === 1" @click="changePage(-1)" type="button">
                <svg  class="w-8 h-8 " width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#F2FBFC" />
                <path d="M18 1.38477C8.82695 1.38477 1.38464 8.82707 1.38464 18.0002C1.38464 27.1732 8.82695 34.6155 18 34.6155C27.1731 34.6155 34.6154 27.1732 34.6154 18.0002C34.6154 8.82707 27.1731 1.38477 18 1.38477Z"
                  stroke="#73C6CA" stroke-width="2" stroke-miterlimit="10" />
                <path d="M21.4617 26.3078L13.154 18.0001L21.4617 9.69238" stroke="#73C6CA" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg></button>
             

             
              <button class="mx-2 " :disabled="filteredList.length<prePage" @click="changePage(1)" type=button>
                <svg class="w-8 h-8 " width="36" height="36" viewBox="0 0 36 36" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle r="18" transform="matrix(-1 0 0 1 18 18)" fill="#F2FBFC" />
                <path d="M18 1.38477C27.173 1.38477 34.6154 8.82707 34.6154 18.0002C34.6154 27.1732 27.173 34.6155 18 34.6155C8.82689 34.6155 1.38459 27.1732 1.38459 18.0002C1.38459 8.82707 8.82689 1.38477 18 1.38477Z"
                  stroke="#005072" stroke-width="2" stroke-miterlimit="10" />
                <path d="M14.5383 26.3078L22.846 18.0001L14.5383 9.69238" stroke="#005072" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
                </svg> 
              </button>   
             

            </div> -->
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

       <!-- Prescription list starts here -->
        <div v-for="pres in Prescription " :key="pres" @click="patientPrescription(pres._id)">
          <div class="lg:flex shadow-md  border border-regal-blue border-opacity-30 justify-center mx-12 my-6 hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm" v-if="!changecomponents">

            <!-- left portion info of the card starts here -->
            <div class="bg-regal-presGreen  rounded-br-4xl py-4 h-full shadow-inner lg:w-2/5 ">
              <div class="grid grid-cols-2 gap-1 mx-3">
                <div class="text-white text-sm font-bold text-left ">Patient ID : </div>
                <div class="text-white text-sm font-bold text-left">P-{{this.id.substring(this.id.length - 7)}}</div>
              </div>
              <div class="grid grid-cols-2 gap-1 mx-3">
                <div class="text-white text-sm text-left">Visiting date : </div>
                {{this.dateConversion(pres.createdAt.substring(0, 10))}}
                <div class="text-white text-sm  text-left">{{this.dateCon}}</div>
              </div>
              <div class="grid grid-cols-2 gap-1 mx-3 ">
                <div class="text-white text-sm text-left ">Prescribed by :</div>
                <div class="text-white text-sm text-left">Dr.{{pres.user.name}}</div>
              </div>
            </div>
            <!-- left portion info of the card starts here -->

            <!-- right portion info of the card starts here -->
            <div class="w-full px-1 bg-white py-5 lg:px-6 lg:py-2 tracking-wide lg:w-3/5  lg:flex lg:mt-2 xl:mt-2 2xl:mt-1">

            <!-- Chief complaint starts here -->
              <div class="lg:w-4/5 ">
                <div class="flex flex-row lg:justify-start mb-3 ">
                  <p class="text-regal-teal text-sm font-semibold">Chief Complaint:</p>
                </div>
                <div class="flex flex-row lg:justify-start">
                  <div class="text-regal-teal text-sm text-left whitespace-nowrap overflow-ellipsis overflow-hidden break-words w-10/12 flex-wrap h-10">{{pres.cc}}s</div>
                </div>
              </div>
              <!-- Chief complaint ends here -->
              
              <!-- Details button starts here -->
              <div @click="patientPrescription(pres._id)" class="flex justify-end items-center cursor-pointer lg:w-1/5">
                <span class="tracking-wider text-white bg-gray-200 px-6 py-1 text-xs rounded-full leading-loose mx-2 font-semibold bg-gradient-to-r from-regal-gradientButton1 to-regal-gradientButton2">Details</span>
              </div>
              <!-- Details button ends here -->
              <div>
              </div>
            </div>
             <!-- right portion info of the card ends here -->
          </div>
         
        </div>
        <!-- Prescription list ends here -->

         <!-- Pagination starts here -->
          <!-- <div class="flex px-40 flex-row justify-center mt-10" v-if="this.total>this.perPage">
              <VueTailwindPaginaiton  :current="currentPage" :total="total" :per-page="perPage" @page-changed="pageChange($event)" background="green-100"></VueTailwindPaginaiton>
          </div> -->
          <!-- Pagination ends here -->
      </div>

      <!-- If there is no prescription this porion of the div will be shown-->
      <div v-else class="flex-row mx-12">
        <!-- Back button starts here -->
        <div class="mt-4 mb-2 py-1 px-3 flex justify-end">
          <button class="py-2.5 px-5 text-regal-teal font-semibold  text-xs flex bg-regal-light-blue" @click="backToDashBoard()">
            <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#005072" /></svg>
            Back
          </button>
        </div>
        <!-- Back button ends here -->

       <div class="  my-4 rounded-md text-lg mx-auto ">
          <p class="font-bold text-regal-teal text-opacity-50 text-center">No Past Prescriptions</p>
        </div>
      </div>
    </div>
    <!-- If details button pressed PrescriptionView components will be called -->
    <div v-if="changecomponents">
      <PrescriptionView :changecomponents="changecomponents" :presId="presId" @backToList="change" />
    </div>
   
  </div>
</template>

<script>
  import axios from "axios";
  import moment from "moment";
  // import VueTailwindPaginaiton from '@ocrv/vue-tailwind-pagination';
  import PrescriptionView from "../DoctorsPortal/PrescriptionView.vue";
  export default {
    props: {
      Prescription1: Array
    },
    components: {
      PrescriptionView,
      //  VueTailwindPaginaiton
    },
    created() {
      this.currentPage=1
      this.getPosts(this.$route.params.id)
    },

    data() {
      return {
        token: localStorage.getItem('token'),
        changecomponents: false,
        Prescription: [],
        presId: "",
        perPage: 10,
        currentPage: 1,
        total:0,
        dateCon: "",
        result: [],
        id: ''


      }
    },
    computed: {
      // filteredList() {

      //   const star = (this.currentPage - 1) * this.prePage
      //   const end = this.currentPage * this.prePage
      //   const result = this.Prescription.slice(star, end)
      //   console.log(result)
      //   return result
      // }
    },
    methods: {
      dateConversion(date) {
        this.dateCon = moment(date).format('LL')

      },
       pageChange(pageNumber){
        this.currentPage=pageNumber
        this.getPosts(this.$route.params.id)
      },
      async getPosts(id) {
        this.id = id
        await axios.get('prescriptions/' + id + '/list', {
           params: {
                        page:this.currentPage,
                        limit:this.perPage,
                        q: this.text
                    },
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          })
          .then((response) => {
            this.Prescription = response.data['result'];
            this.total=response.data.totalPages;
            //console.log(this.Prescription)

          })

          .catch((error) => {
            console.log(error)
            this.errorMsg = 'Error retrieving data'
          })
      },
      change() {
        this.changecomponents = !this.changecomponents
      },
      backToDashBoard() {
        this.$emit("dashboard")
      },
      patientPrescription(id) {
        this.changecomponents = true
        this.presId = id
        // console.log(this.id)
        // console.log(this.presId)
        // console.log("pressed")
      },
    }
  }
</script>
<style scoped>
</style>