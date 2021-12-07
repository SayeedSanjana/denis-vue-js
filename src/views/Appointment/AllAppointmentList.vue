<template>
<div>

<!-- If appointment list is not empty -->
<div v-if="this.AppointmentList.length>=1">
  <div class="flex justify-between mb-1 sm:mb-0 px-4">
     <!-- search starts -->
     <div class="flex flex-row">
        <div class="block relative">
            <form class="bg-regal-light-blue">
                <div class="mt-5 mb-2 border-2  border-regal-light-blue border-opacity-30 py-1 px-3 flex justify-between rounded-lg">
                    <input class="flex-grow outline-none text-regal-teal bg-regal-light-blue" name="q" type="text" placeholder="Search"  @keydown="this.getAppointmentList()"/>
                    <span class="ml-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
            </div>
            </form>
        </div>
           <!-- search ends -->
            <!-- sortby -->
        <div class="relative ml-4 mt-5">
            <select @click="status($event)" class="appearance-none block w-full  text-regal-teal bg-regal-light-blue hover:bg-regal-white  pl-2 h-9 border-opacity-50 rounded py-2 px-20 mb-3 leading-tight focus:outline-none " id="sortby">
                <option class="text-regal-teal" >All</option>
                <!-- <option class="text-regal-teal" value="Examined">Oldest</option>
                <option class="text-regal-teal" value="Scheduled">Newest</option>
                <option class="text-regal-teal" value="Cancelled">Cancelled</option> -->
                <option class="text-regal-teal" value="Examined" >Examined</option>
                <option class="text-regal-teal" value="Scheduled">Scheduled</option>
                <option class="text-regal-teal" value="Cancelled">Cancelled</option>
            </select>   
            <div class=" selectsvg">
                <img src="@/assets/svgs/select.svg">
            </div>
        </div>
     </div>
        <div class="mt-5">
            <div class="">
            <label class="text-xs mt-2 mr-2 text-regal-teal font-semibold " for="contact">Select Date :</label>
            <input @change="this.localizeDate(date)" v-model="date" class="px-4 py-1.5 mr-2 text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue bg-white text-right" type="date">
            </div>
        </div>
        </div>
           
    <!-- List of patient starts here -->
    <div class="mx-3 py-4 mt-6">
        <div class="border border-regal-blue border-opacity-30 rounded-t-xl bg-regal-light-blue py-3 grid grid-cols-8 p-4">
            <div class="text-regal-teal text-sm font-semibold text-left ml-4">Sl No</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-6">Name</div>
            <div class="text-regal-teal text-sm font-semibold  text-left ml-2">Age/Gender</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-2">Patient ID</div>
            <div class="text-regal-teal text-sm font-semibold text-left mr-4">Visiting time</div>
            <div class="text-regal-teal text-sm font-semibold text-left mr-2 ml-9">Complaint</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-10">Visiting date</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-12">Status</div>
        </div>     
        <ul class=" lg:flex-row 2xl:p-4 lg:p-3 pt-4 md:w-full bg-regal-white">
            <li class="border-gray-400 md:flex justify-center items-center lg:flex-row mb-2 shadow-sm mr-6 ml-6 2xl:mr-0 2xl:ml-0 " v-for="(i,index) in filteredList" :key="index">
                <div class="select-none cursor-pointer bg-white rounded-md  justify-between p-4  hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm grid grid-cols-8 border-r-8"
                :class="[(i.status === 'Scheduled' ? ' border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'border-regal-cancelled' : ''), (i.status === 'Examined' ? 'border-regal-examined' : ''),(i.status === 'Delayed' ? 'border-regal-delay' : '')]">             
                <div class="text-regal-teal text-sm text-left lg:ml-2 w-44">{{(this.perPage *(this.currentPage-1))+index+1}}</div>
                <div class="text-regal-teal text-sm text-left  w-44">Abdur Rahman </div>
                <div class="text-regal-teal text-sm text-left w-44">24/Female</div>
                <div class="text-regal-teal text-sm text-left lg:ml-2 w-44">P-1234567</div>
                <div class="text-regal-teal text-sm text-left  w-44">{{i.start_time}}-{{i.end_time}}</div>
                <div class="text-regal-teal text-sm text-center break-words w-44">{{i.reason}}</div>
                <div class="text-regal-teal text-sm text-center ml-6 w-44">{{this.dateConversion(i.date.substring(0, 10))}}</div>
                <div class="text-regal-teal text-sm text-center ml-6  w-44">
                <div class="relative inline-flex">
                    <select  class="border border-regal-blue rounded-full text-gray-600 px-1 2xl:px-3 md:px-0 py-0.5 bg-white hover:bg-white focus:outline-none appearance-none text-center"
                    :class="[(i.status === 'Scheduled' ? ' text-regal-sta-green' : ''),  (i.status === 'Cancelled'? 'text-regal-dark-red' : ''), (i.status === 'Examined' ? 'text-regal-teal' : ''),(i.status === 'Delayed' ? 'text-regal-brown' : '')]">    
                        <option>{{i.status}}</option>
                        <option v-if="i.status!=='Examined'">Examined</option>
                        <option  v-if="i.status!=='Scheduled'">Scheduled</option>
                        <option  v-if="i.status!=='Cancelled'">Cancelled</option>
                        <option  v-if="i.status!=='Delayed'">Delayed</option>
                    </select>
                </div>
                </div>
                </div>
            </li>
        </ul>
    </div>
    <!-- List of patient ends here -->
    <!-- Pagination starts here -->
    <div class="flex px-40 flex-row justify-center bg-regal-white" v-if="this.total>this.perPage">
        <VueTailwindPaginaiton  :current="currentPage" :total="total" :per-page="perPage" @page-changed="pageChange($event)" background="green-100"></VueTailwindPaginaiton>
    </div>
   <!-- Pagination ends here -->
</div>

<!-- If appointment list is empty -->
 <div v-else class="h-screen  ">
    <div class="  my-4 rounded-md text-lg mx-auto ">
        <p class="font-bold text-regal-teal text-opacity-50 text-center">No Appointments</p>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import VueTailwindPaginaiton from '@ocrv/vue-tailwind-pagination';
    export default {
        components: {
            VueTailwindPaginaiton
        },
        computed:{
        filteredList(){
         if(this.sort==="Scheduled" || this.sort==="Cancelled" || this.sort==="Examined"){
            return this.AppointmentList.filter(item => item.status.toLowerCase().indexOf(this.sort.toLowerCase()) > -1);
        }if(this.date) {
            return this.AppointmentList.filter(item => item.date.substring(0,10).indexOf(this.date) > -1);
        }
            const result = this.AppointmentList;
            return result
        }
        },
        created() {
         this.getAppointmentList()
        },
       
        data(){
            return{
                total:0,
                AppointmentList:[],
                perPage: 10,
                currentPage: 1,
                sort:'',
                date:''
            }
        },
        methods:{
        localizeDate(date) {
            // console.log(date)
        if (!date || !date.includes('-')) return date
        const [yyyy, mm, dd] = date.split('-')
        this.date=new Date(`${mm}/${dd}/${yyyy}`)
        console.log(this.date)
       },
        pageChange(pageNumber){
            this.currentPage=pageNumber
            this.getAppointmentList(this.currentPage)
        },
        status(event){
            this.sort=event.target.value
        },
        dateConversion(date) {
            return moment(date).format('LL')

        },
        selectDate(event){
          console.log(event.target.value)
          console.log(this.date)
        },
         async getAppointmentList() {
               
            const response = await axios.get('appointments/search', {
                params: {
                 page:this.currentPage,
                 limit:this.perPage,
                // q: this.text
                },
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                }
                })
                this.AppointmentList = response.data['result'];
                //this.total=response.data.totalPages;
                //console.log(this.AppointmentList)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>