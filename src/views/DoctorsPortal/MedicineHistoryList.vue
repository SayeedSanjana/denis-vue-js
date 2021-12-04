<template>
  <div>
    <!-- {{this.Prescription}} -->
    <!-- if change components is false then it will show only the list of medicine -->
    <div v-if="!changecomponents">
      <p class="text-left font-semibold text-regal-teal mx-12 mt-6 ">Medicine History</p>
  
      <!-- If there exists medicine -->
      <div v-if="this.Prescription.length>= 1">
      
        <!-- Search area starts here -->
        <div class="flex justify-between mx-12">
          <div class="flex relative">
            <form >
              <div class="mt-5 mb-2 border border-regal-teal bg-regal-light-blue  border-opacity-30 py-1 px-3 flex justify-between rounded-md">
                <input class="flex-grow outline-none text-regal-teal bg-regal-light-blue  rounded-md " name="q" type="text" placeholder="Search" />
                <span class="ml-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-regal-teal transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </span>
              </div>
            </form>
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
        <div v-for="i in this.Prescription" :key="i">
          <div class="shadow-md border bg-regal-white border-regal-blue border-opacity-30 justify-center mx-12 my-6 hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm " v-if="!changecomponents && i.medicine.length>=1">

            <!-- upper portion info of the card starts here -->
            <div class="lg:flex w-full justify-between">
            <div class="bg-regal-presGreen rounded-br-3xl py-4 h-full shadow-inner lg:w-1/3 ">
              <div class="flex mx-3">
                <div class="text-white text-sm font-bold text-left mr-2">Visiting date: </div>
                <div class="text-white text-sm font-bold text-left">{{i.createdAt.substring(0,10)}}</div>
              </div>        
            </div>
            <div class="mx-3 py-4">
                <div class=" text-xs font-bold text-left mr-2 text-regal-teal">Prescribed by: </div>
                <div class=" text-sm font-bold text-left text-regal-teal">Dr.{{i.user.name}}</div>
              </div>
            </div>
            <!-- upper portion info of the card starts here -->
            <!-- list of medicine starts -->
                <table class=" rounded-t-xl m-5 w-5/6 lg:w-4/5 mx-6">
                <tr class="border border-regal-blue border-opacity-25 bg-white  text-regal-cyan" v-for="j in i.medicine" :key="j" >
                    <td class="py-3 ">{{j.catagory}}</td>
                    <td class="px-2 py-3">{{j.name}}</td>
                    <td class="px-2 py-3">{{j.frequency}}</td>
                    <td class="px-2 py-3">{{j.duration}}</td>                
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
        <div class="  my-4 rounded-md text-lg mx-auto ">
          <p class="font-bold text-regal-teal text-opacity-50 text-center">No Past Medicine History</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import moment from "moment";
  //import PrescriptionView from "../DoctorsPortal/PrescriptionView.vue";
  export default {
    props: {
      //Prescription1: Array
    },
    created() {
     this.getPrescription(this.$route.params.id)
    },

    data() {
      return {
        total:0,
        token: localStorage.getItem('token'),
        changecomponents: false,
        Prescription:[],
        //presId: "",
        prePage: 10,
        currentPage: 1,
        dateCon: "",
        result: [],
        id: this.$route.params.id


      }
    },
    // computed: {
    //   filteredList() {
    //     const star = (this.currentPage - 1) * this.prePage
    //     const end = this.currentPage * this.prePage
    //     const result = this.Prescription.slice(star, end)
    //     console.log(result)
    //     return result
    //   }
    // },
    methods: {
      dateConversion(date) {
        this.dateCon = moment(date).format('LL')

      },
      changePage(num) {
        this.currentPage = this.currentPage + num

      },
     async getPrescription(id) {
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
    }
  }
</script>
<style scoped>
</style>