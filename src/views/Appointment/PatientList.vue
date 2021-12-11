<template>
    <div class="bg-white">

        <!-- Title Starts Here -->
        <!-- <div class="container md:flex md:items-center md:justify-center text-gray-600  bg-regal-white border border-regal-cyan border-opacity-20 py-3 border-b-0">
            <div class="m-0.5 text-regal-teal font-medium">
                Patient List
            </div>
        </div>  -->
        <!-- Title Ends Here -->
    
    <!-- Search bar starts here -->
    <div class="flex justify-between mx-4">
        <div class="block relative">
            <form class="bg-regal-light-blue">
                <div class="mt-5 mb-2 border-2 border-regal-light-blue border-opacity-30 py-1 px-3 flex justify-between rounded-lg">
                    <input  @keydown="this.getPatients()" class="flex-grow outline-none text-regal-teal bg-regal-light-blue" name="q" type="text" placeholder="Search by name or phone number"/>
                    <span class="ml-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400  transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
            </div>
            </form>
        </div>
     <div class="mt-4 mb-2 py-1 px-3 flex justify-end">     
        <button class="py-2.5 px-5 text-regal-teal font-semibold  text-xs flex bg-regal-light-blue" @click="cancel">
           <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#005072"/>
        </svg>
          Back
        </button>
        </div>
    </div>
    <!-- Search bar ends here -->

    <!-- List of patient starts here -->
    <div class="mx-4 py-4  mt-5 ">
        <div class="border border-regal-blue border-opacity-30 rounded-t-xl bg-regal-light-blue py-3 flex">
            <div class="w-1/6 text-regal-teal text-sm font-semibold text-left lg:ml-8 ml-12">Sl No</div>
            <div class=" w-3/6  text-regal-teal text-sm text-left font-semibold lg:ml-3 ml-4 ">Name</div>
            <div class=" w-2/6 text-regal-teal text-sm text-center font-semibold lg:mr-12 mr-16">Contact</div>
        </div>     
        <ul class=" md:flex-row  p-4 md:w-full bg-regal-white">
                <li class="border-gray-400 md:flex justify-center items-center lg:flex-row mb-2 shadow-sm mr-6 ml-6 2xl:mr-0 2xl:ml-0"  v-for="(i,index) in this.Patients" :key="i" @click="patientList(i._id)">
                  <div class="select-none cursor-pointer bg-white rounded-md flex flex-1 justify-between p-4  hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">                
                   <div class="w-1/6 text-regal-teal text-sm text-left lg:ml-2">{{(this.perPage *(this.currentPage-1))+index+1}}</div>
                   <div class=" w-3/6  text-regal-teal text-sm text-left ">{{i.name}}</div>
                   <div class=" w-2/6 text-regal-teal text-sm text-center ">{{i.phone}}</div>
                  </div>
                </li>
            </ul>
    </div>
    <!-- List of patient ends here -->

   <!-- Pagination starts here -->
   
    <div class="flex px-40 flex-row justify-center" v-if="this.total>this.perPage">
        <VueTailwindPaginaiton  :current="currentPage" :total="total" :per-page="perPage" @page-changed="pageChange($event)" background="green-100"></VueTailwindPaginaiton>
    </div>
    <!-- <div class="flex px-40 flex-row justify-center">
        <div class="px-4 mx-4">
            <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded-tl-full rounded-bl-full rounded-br-full w-28 mt-4 text-sm" type="button">Previous</button>
        </div>
        <div class="px-4 mx-4">
            <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded-tr-full rounded-br-full rounded-bl-full w-28 mt-4 text-sm" type="button">Next </button>
        </div>
   </div> -->
   <!-- Pagination ends here -->
    
    </div>
</template>

<script>
import axios from 'axios'
import VueTailwindPaginaiton from '@ocrv/vue-tailwind-pagination';
    export default {
    props:{
     patientList:Function
    },
    components: {
      VueTailwindPaginaiton
    },
     created(){
       this.currentPage=1
       this.getPatients()
     },
     data(){
         return{
          Patients:[],
          perPage: 10,
          currentPage: 1,
          total:0
         }
     },
      methods:{
        //Pagination
        pageChange(pageNumber){
            this.currentPage=pageNumber
            this.getPatients(this.currentPage)
        },
        cancel(){
        this.$emit("cancelEventPatient")
      },
       newAppointmentForm(){
        this.$emit("newForm")
       },
       //patientList()
        async getPatients() {               
                const response = await axios.get('patients', {
                    params: {
                        page:this.currentPage,
                        limit:this.perPage,
                        q: this.text
                    },
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    }
                })
                this.Patients = response.data['result'];
                this.total=response.data.totalPages;
                //console.log(this.Patients)
            },
      }
    }
</script>

<style lang="scss" scoped>

</style>