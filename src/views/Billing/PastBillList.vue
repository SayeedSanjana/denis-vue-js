<template>
  <div>
    <div v-if="changecomponent">
      <div class="flex justify-end mr-6 mt-6">
        <button @click="change()" class=" p-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex">Back to Past Bill List</button>
      </div>

    </div>
    <div class="  w-full" v-if="!changecomponent">
      <!--form-->
      <div class="" v-if="this.Bills.length >= 1">

        <!--items-->

      
        <div class="border-b border-gray-300 hover:bg-regal-light-blue " v-for="bill in this.Bills" :key="bill" @click="patientBill(bill._id)">


          <div class="">
            <div class="grid grid-cols-1 gap-36 lg:grid-cols-3">
              <div class=" text-left m-3">
                <p class="text-regal-teal font-semibold" >Total Cost: <span class="">{{bill.total}} TK</span></p>
                <p class="text-regal-teal " for="date">Date: <span>{{bill.createdAt.substring(0, 10)}}</span></p>

              </div>
              <div class=" m-3">
                <div v-if="bill.balance>0">

                <p class="text-regal-teal font-semibold">Payment Status: <span class="uppercase font-semibold text-regal-red">Due</span></p>
                </div>
                <div v-else>
                <p class="text-regal-teal font-semibold">Payment Status: <span class=" uppercase font-semibold text-regal-success">Paid</span></p>
                </div>
              </div>
              <div class="m-3">
                <p class="text-regal-teal font-semibold">Invoice No. : <span>{{bill._id.substring(bill._id.length - 7)}}</span></p>
              </div>
          
            </div>
          
          </div>
        </div>

      </div>
      <!--form-->

      <!-- Alert Info -->
      <div v-else class="flex-row w-full h-screen">
        <div class=" flex items-center justify-center  ">
          <div class="w-full  ">

            <div class="  my-4 rounded-md text-lg mx-auto ">
            

              <p class="font-bold text-regal-teal text-opacity-50 text-center">No Past Billing Records</p>

            </div>



          </div>
        </div>
      </div>
      <!-- <div class=" px-40 mt-10" v-if="this.Bills.length >= 1">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button"
          :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"
          @click="changePage(1)">Next </button>


      </div> -->

      <!-- End Alert Info -->
    </div>

    <div v-if="changecomponent">
      <PastBillView :changecomponent="changecomponent" :billId="billId" />




    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import PastBillView from "../Billing/PastBillView.vue";
  export default {
    props: {
      Billing: Array
    },

    components: {
      PastBillView
    },
    created() {
      this.getBills(this.$route.params.id)
    },

    computed: {
      filteredList() {

        const star = (this.currentPage - 1) * this.prePage
        const end = this.currentPage * this.prePage

        const result = this.Bills.slice(star, end)
        return result
      }
    },

    data() {
      return {
        token: localStorage.getItem('token'),
        changecomponent: false,
        Bills: [],
        billId: "",
        invoice: '',
        prePage: 20,
        currentPage: 1,
        page: 1

      }
    },
    methods: {
      //  async getPosts(id) {
      //           await axios.get('patients/' + id, {
      //                   headers: {
      //                       "Authorization": `Bearer ${localStorage.getItem('token') }`
      //                   }
      //               })
      //               .then((response) => {

      //                   this.formData = response.data.result;
      //                   const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
      //                   const ageDate = new Date(ageDifMs);
      //                   this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
      //                   console.log(this.formData.dob)


      //               })
      //               .catch((error) => {
      //                   console.log(error)
      //               })
      //       },



      changePage(num) {
        this.currentPage = this.currentPage + num
        this.page = this.page + num
        this.getBills(this.$route.params.id)

      },

      patientBill(id) {
        this.changecomponent = !this.changecomponent
        this.billId = id

      },

      change() {
        this.changecomponent = !this.changecomponent
      },

      async getBills(id) {
        await axios.get('billings/' + id + '/list-bills', {
            params: {
              page: this.page,
              limit: 20
            },
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          })
          .then((response) => {

            this.Bills = response.data['result'];
            console.log(this.Bills)
          })
          .catch((error) => {
            console.log(error)
            this.errorMsg = 'Error retrieving data'
          })
      },
    }
  }
</script>

<style scoped>

</style>