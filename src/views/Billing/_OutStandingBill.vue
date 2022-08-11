<template>
    <div>
        <section class="w-full  px-6 py-4 " >
              <p class="text-xl text-left font-bold text-regal-teal pb-2">
            <span class="text-sm text-gray-400 ">(Showing total results - <span class="font-semibold text-regal-teal">{{getTotalOutstandingData}}</span> )</span> 
        </p>
             <form id="search" class="w-1/2 flex mx-24">
                      
                        <div class="border-2  px-3 flex bg-white rounded-md items-center  w-1/2">
                            <input class="flex-grow outline-none text-regal-teal"
                                name="q" type="text" placeholder="Search ..." v-model="searchQuery" @keyup="search"
                                />
                            <span class="mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 mt-1 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                                    fill="none" viewBox="0 0 20 20" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                    </form>
          
            <div class="mx-24 my-5">
             
                <Grid :method="addPayment" :data="bills" :columns="gridColumns" :filter-key="searchQuery" @empty="search"/>
                
            </div>


             <div class="flex justify-center my-5">
                 <Pagination :totalData="getTotalOutstandingData" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange" />
             </div>
        


        </section>
        
   
      
    </div>
</template>

<script>

    import Pagination from '../../components/Pagination.vue'
    import Grid from './BillGrid.vue'
    // import moment from "moment";
    export default {

       
        components: {
            Grid,
            Pagination
        },
        props:{
            bills: {
                type: Array,
            },
            // totalData: {
            //     type: Number,          
            // },
            // perPage: {
            //     type: Number,
               
            // },
            // currentPage: {
            //     type: Number,
               
            // },
            // text: {
            //     type: String,
               
            // },
            // searchQuery: {
            //     type: String,

               
            // },
            // onPageChange: {
            //     type: Function,
               
            // },
           
            getTotalOutstandingData: {
                type: Number,
               
            },
            addPayment: {
                type: Function,
               
            },
            // search: {
            //     type: Function,
               
            // },


           
        },
       

       
        data() {
            return {
                gridColumns:{
                     _id: 'bill ID',
                    //  patient: 'Patient ID',
                     patientName: 'Patient Name',
                     patientContact: 'Patient Contact',

                    total: 'Total Cost',
                    isPaid:'Payment Status',
                    balance: 'balance',
                    createdAt: 'Bill Created At',
                    updatedAt: 'Last Updated At',  
                
                },
                  perPage: 10,
               currentPage: 1,
                text: '',
                 searchQuery: '',
                 bill: [],
               

            }
        },
        methods: {
           
             search(bool){

                if(bool){
                const query = {
                    currentPage: this.currentPage,
                    perPage: this.perPage,
                    text: this.searchQuery,
                    
                }
                this.$store.dispatch('fetchOutstandingBills', query);
              
                
                
                
                }
            
            },
              onPageChange(page) {

                this.currentPage = page;

                const query = {
                    currentPage: this.currentPage,
                    perPage: this.perPage,
                    text: this.searchQuery
                }
                this.$store.dispatch('fetchOutstandingBills', query);
            },
            
            
        }
    }
</script>
<style scoped>
</style>