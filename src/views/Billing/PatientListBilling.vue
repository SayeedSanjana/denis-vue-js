<template>
    <div>
      

        <div class="flex bg-regal-white">
            <div class="w-2/3">
            <div class="h-screen">
        <section class="w-full  px-6 py-4 " >
            <p class="text-lg text-left font-bold m-5 px-20 text-regal-teal" >Patient Billing</p>
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
            <!-- <div class="m-5 xl:w-5/6 w-full mx-auto flex sm:flex-row flex-col justify-between ">
                <div class="flex flex-row mb-1 sm:mb-0">

                    <div class="block relative">
                        <form class="bg-white ">
                            <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between  rounded-md">
                                <input class="flex-grow outline-none text-regal-teal focus:text-gray-600 w-96 h-8"
                                    name="q" type="text" placeholder="Search ..." v-model="searchQuery"
                                     />
                                <span class="">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                        </form>

                    </div>

                </div>
               
            </div> -->
            <!-- <table class=" rounded-t-xl m-5 xl:w-5/6 w-full mx-auto bg-regal-blue " >
                <tr class="text-center text-md text-regal-teal h-16" >
                    <th class="px-4 py-3">SL no</th>
                    <th class="px-4 py-3">Patient ID</th>
                    <th class="px-4 py-3">Total Cost</th>
                    <th class="px-4 py-3">Balance</th>
                    <th class="px-4 py-3">Is Paid?</th>

                    <th class="px-4 py-3">Reg Date</th>
                </tr>
                <tr class="border border-regal-blue border-opacity-25 bg-white  hover:bg-regal-white hover:opacity-80 text-regal-cyan" @click="patientDetails(bill._id)" 
                    v-for="(bill,index) in $store.state.bills " :key="index">
                    <td class=" py-3 ">{{(this.perPage *(this.currentPage-1))+index+1}}</td>
                    <td class="px-2 py-3 ">P-{{bill.patient.substring(bill.patient.length - 7)}}</td>
                    <td class="px-2 py-3">{{bill.total}} TK</td>
                    <td class="px-2 py-3">{{bill.balance}} TK</td>
                    <td class="px-2 py-3">{{bill.isPaid}} </td>


                    <td class="">{{this.dateConversion(bill.createdAt.substring(0, 10))}}</td>
                    
                </tr>
            </table> -->
            <div class="mx-24 my-5">
                <Grid :method="patientDetails" :data="bills" :columns="gridColumns" :filter-key="searchQuery"/>
                
            </div>


             <!-- <div class="flex px-40 flex-row justify-center bg-regal-white" v-if="this.total>this.perPage">
                <VueTailwindPaginaiton  :current="currentPage" :total="total" :per-page="perPage" @page-changed="pageChange($event)" background="green-100"></VueTailwindPaginaiton>
            </div>
             -->

             <div class="flex justify-center my-5">
                 <Pagination :totalData="getTotalData" :per-page="perPage" :current-page="currentPage" @pagechanged="onPageChange" />
             </div>
        


        </section>
        
    </div>
            </div>
            
            <div class="hidden xl:block xl:w-1/3 mr-16">
             <img src="@/assets/svgs/billing.svg" alt="" class="w-full h-full flex justify-end ">
            </div>
        </div>
      
    </div>
</template>

<script>

    import Pagination from '../../components/Pagination.vue'
    import Grid from '../../components/Grid.vue'
    import moment from "moment";
    export default {

        created() {
            this.$store.dispatch('fetchBills', this.currentPage,this.totalData, this.perPage, this.text);
            // this.currentPage=1
        },
        components: {
            Grid,
            Pagination
        },
        watch:{
            '$store.state.bills':function(){
               this.bills.push(...this.$store.state.bills)
               this.bills.forEach(bill=>{
                bill.createdAt=moment(bill.createdAt).format('DD-MM-YYYY');
                bill.isPaid= bill.isPaid == true ? "Paid" : "Unpaid";
                bill.patient= "P-"+bill.patient.substring(bill.patient.length - 7);


               })


            },

            '$store.state.totalBill':function(){
                this.totalData = this.$store.state.totalBill
            },
        },
        computed:{
            getTotalData(){
                return this.$store.state.totalBill
            },
        },



        data() {
            return {
                totalData:0,
                token: localStorage.getItem('token'),
                open: false,
                Patients: [],
                perPage: 10,
                currentPage: 1,
                dateCon:"",
                text:'',
                bills:[],
                gridColumns:{
                     _id: 'bill ID',
                     patient: 'Patient ID',
                    total: 'Total Cost',
                    isPaid:'Payment Status',
                    balance: 'balance',  
                    createdAt: 'Reg Date',  
                },
                searchQuery: '',

            }
        },
        methods: {
            onPageChange(pageNumber){
               this.currentPage=pageNumber
               this.bills=[];
                this.$store.dispatch('fetchBills', this.currentPage,this.totalData, this.perPage, this.text);
               
            },
            
             dateConversion(date) {
             return moment(date).format('LL')

            },
            // changePage(num) {

            //     this.currentPage = this.currentPage + num
            //     this.$store.dispatch('fetchBills', this.currentPage, this.perPage, this.text);

            // },

            toggle() {
                this.open = !this.open
            },
            patientDetails(id) {
                this.$router.push({
                    name: 'SpecificBilling',
                    params: {
                        id: id
                    }
                })
            },
        }
    }
</script>
<style scoped>
</style>