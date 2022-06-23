<script>
import OutStandingBill from "./_OutStandingBill.vue";
import CompletedBill from "./_CompletedBill.vue";
import AllBills from "./_AllBills.vue";
import Pending from "./_Pending.vue";
import axios from "axios";
    export default {
        components: {
            OutStandingBill,
            CompletedBill,
            AllBills,
            Pending
        },
       
        created() {
            this.$store.dispatch('fetchBills', this.currentPage, this.perPage,this.totalData, this.text);
            this.getPendingList();
          

           
           
        },
        data() {
            return {
               presId:'',
               activeTab: 'OutStandingBill',
               bills:[],
               totalData: 0, 
               perPage: 10,
               currentPage: 1,
               text:'',
               searchQuery: '',
               pendingList: [],
               specificBill: {},
            }

            },
        watch: {
            '$store.state.bills': function() {
                this.bills.push(...this.$store.state.bills);
                this.bills.forEach(bill => {
                    bill.isPaid = bill.isPaid  == true? 'Paid' : 'Due';
                    

                    

                });
        },

        },
        computed: {
            
            getTotalData() {
                return this.$store.state.totalBill;
            },
            getOutstandingBills() {
                return this.bills.filter(bill => bill.isPaid == 'Due' );
                
                

            },
            getCompletedBills() {
                return this.bills.filter(bill => bill.isPaid == 'Paid');
            },
        },
        methods: {
            onPageChange(page) {
                this.currentPage = page;
                this.bills = [];
                this.$store.dispatch('fetchBills', this.currentPage, this.perPage,this.totalData, this.text);
            },
            changePage(num){
                this.currentPage = this.currentPage + num;
                
                this.$store.dispatch('fetchBills', this.currentPage, this.perPage,this.totalData, this.text);

            },
              async getPendingList() {
                  try {
                      const response = await axios.get(
                          import.meta.env.VITE_LOCAL + '/tn/billable-items', {
                              params: {
                                  limit: 1000
                              }
                          })
                      this.pendingList = response.data.data;
                     
                    
                  } catch (error) {
                      console.log(error);
                  }
              },
              openBill(index){
                this.$router.push({
                    name: 'ConfirmBill',
                    params: {
                        id: this.pendingList[index].prescription._id
                    }
                });
 
              
              },

              addPayment(index){
                this.bills.forEach(bill => {
                    if(bill._id ==index){
                         this.presId=bill.prescription;
                       
                    }
                });
                this.$router.push({
                    name: 'AddPayment',
                    params: {
                        id: this.presId
                    }
                });
 
              
              },
              
          

             
              

        },
       

      
        
    }
</script>

<template>
    <section class="container mx-auto my-4">
    <div class=" ">
            <h1 for="" class="flex justify-start items-start font-semibold text-regal-teal text-xl"> Billing History</h1>
        
    <div class="border p-4">

    
    <div class="flex ">
      
        <button @click="activeTab = 'OutStandingBill'" :class="activeTab==='OutStandingBill' ? 'border border-b-0  rounded-t-md' : 'bg-transparent border-b hover:border-gray-400'" 
         class="flex items-center h-12 px-2 py-2 text-center text-gray-700  border-gray-300 sm:px-4  -px-1  whitespace-nowrap focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>

            <span class="mx-1 text-sm sm:text-base text-regal-teal">
                Outstanding
            </span>
        </button>

        <button @click="activeTab = 'CompletedBill'" :class="activeTab==='CompletedBill' ? 'border border-b-0  rounded-t-md' : 'bg-transparent border-b hover:border-gray-400'"
         class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4  -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>

            <span class="mx-1 text-sm sm:text-base text-regal-teal">
                Completed
            </span>
        </button>

        <button  @click="activeTab = 'AllBills'" :class="activeTab==='AllBills' ? 'border border-b-0  rounded-t-md' : 'bg-transparent border-b hover:border-gray-400'"
        class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4  -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
           <svg class="w-4 h-4 mx-1 sm:w-6 sm:h-6" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                   d="M1.375 6.875V16.5H17.875V6.875H1.375ZM0.6875 5.5H18.5625C18.7448 5.5 18.9197 5.57243 19.0486 5.70136C19.1776 5.8303 19.25 6.00516 19.25 6.1875V17.1875C19.25 17.3698 19.1776 17.5447 19.0486 17.6736C18.9197 17.8026 18.7448 17.875 18.5625 17.875H0.6875C0.505164 17.875 0.330295 17.8026 0.201364 17.6736C0.0724328 17.5447 0 17.3698 0 17.1875V6.1875C0 6.00516 0.0724328 5.8303 0.201364 5.70136C0.330295 5.57243 0.505164 5.5 0.6875 5.5ZM2.0625 2.75H17.1875V4.125H2.0625V2.75ZM4.125 0H15.125V1.375H4.125V0Z"
                   fill="black" />
           </svg>


            <span class="mx-1 text-sm sm:text-base text-regal-teal">
                All
            </span>
        </button>
        <!--  <button  @click="activeTab = 'Pending'" :class="[activeTab==='Pending' ? 'border border-b-0  rounded-t-md' : 'bg-transparent border-b hover:border-gray-400', pendingList.length >0 ? 'animate-ping p-1 bg-blue-300 rounded-full' : '' ]" -->
        <button @click="activeTab = 'Pending'" :class="activeTab==='Pending' ? 'border border-b-0  rounded-t-md' : 'bg-transparent border-b hover:border-gray-400' "
        
        class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4  -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 ">
            <span v-show="pendingList.length > 0" class="absolute flex -mt-10 ml-24">
                <span class="animate-ping inline-flex ml-2 h-5 w-5 rounded-full bg-red-400"></span>
                <span class="relative inline-flex -ml-5 rounded-full h-5 w-5 bg-red-500 "><span class="absolute top-0.5 left-1.5 text-white font-bold text-xs">{{pendingList.length}}</span></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>

            <span class="mx-1 text-sm sm:text-base text-regal-teal">
                Pending
            </span>
        </button>

      

        </div>
         
            <keep-alive>
            <component :is="activeTab" :add-payment="addPayment"  :bills="getOutstandingBills" @view-bill="openBill" :completedBill="getCompletedBills" :pendingList="pendingList" :allBill="bills" :totalData="totalData" :getTotalData="getTotalData" :onPageChange="onPageChange" :changePage="changePage" :perPage="perPage" :currentPage="currentPage" :text="text" :searchQuery="searchQuery" />
            </keep-alive>
        
        </div>
    </div>
    </section>
</template>


<style scoped>

</style>