<template>
    <div>
        <section class="w-full  px-6 py-4 " >
           
             <form id="search" class="w-1/2 flex mx-24">
                      
                        <div class="border-2  px-3 flex bg-white rounded-md items-center  w-1/2">
                            <input class="flex-grow outline-none text-regal-teal"
                                name="q" type="text" placeholder="Search ..." v-model="searchQuery"
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
               
                <Grid :method="addPayment" :data="allBill" :columns="gridColumns" :filter-key="searchQuery"/>
                
            </div>


             <div class="flex justify-center my-5">
                 <Pagination :totalData="allBill.length" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange" />
             </div>
        


        </section>
        
   
      
    </div>
</template>

<script>

    import Pagination from '../../components/Pagination.vue'
    import Grid from '../../components/Grid.vue'
    // import moment from "moment";
    export default {

       
        components: {
            Grid,
            Pagination
        },
        props:{
            allBill: {
                type: Array,
            },
            totalData: {
                type: Number,          
            },
            perPage: {
                type: Number,
               
            },
            currentPage: {
                type: Number,
               
            },
            text: {
                type: String,
               
            },
            searchQuery: {
                type: String,
               
            },
            onPageChange: {
                type: Function,
               
            },
            changePage: {
                type: Function,
               
            },
            getTotalData: {
                type: Number,
               
            },
             addPayment: {
                type: Function,
               
            },



           
        },
        computed:{
        },

        mounted() {
        },

        data() {
            return {
                gridColumns:{
                     _id: 'bill ID',
                     patient: 'Patient ID',
                    total: 'Total Cost',
                    isPaid:'Payment Status',
                    balance: 'balance',  
                
                },

            }
        },
        methods: {
           
            
            
        }
    }
</script>
<style scoped>
</style>