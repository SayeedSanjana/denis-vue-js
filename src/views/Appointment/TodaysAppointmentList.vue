<template>
    <div>
        <div v-if="this.TodayAppointmentList.length>=1">
        <div class="flex flex-row mb-1 sm:mb-0 px-4">
     <!-- search starts -->
        <div class="block relative">
            <form class="bg-regal-light-blue">
                <div class="mt-5 mb-2 border-2  border-regal-light-blue border-opacity-30 py-1 px-3 flex justify-between rounded-lg">
                    <input class="flex-grow outline-none text-regal-teal bg-regal-light-blue" name="q" type="text" placeholder="Search" />
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
                <!-- <option class="text-regal-teal" value="Examined">Oldest</option> -->
                <!-- <option class="text-regal-teal" value="Scheduled">Newest</option> -->
                <option class="text-regal-teal" value="Delayed">Delayed</option>
                <option class="text-regal-teal" value="Examined" >Examined</option>
                <option class="text-regal-teal" value="Scheduled">Scheduled</option>
                <option class="text-regal-teal" value="Cancelled">Cancelled</option>
            </select> 
            <div class=" selectsvg">
                <img src="@/assets/svgs/select.svg">
            </div>
        </div>
        <!-- sortby -->
        </div>

    <!-- List of patient starts here -->
    <div class="mx-3 py-4 mt-6">
        <div class="border border-regal-blue border-opacity-30 rounded-t-xl bg-regal-light-blue py-3 grid grid-cols-8 p-4">
            <div class="text-regal-teal text-sm font-semibold text-left ml-4 ">Sl No</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-6">Name</div>
            <div class="text-regal-teal text-sm font-semibold  text-left ml-2">Age/Gender</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-2">Patient ID</div>
            <div class="text-regal-teal text-sm font-semibold text-left mr-4">Visiting time</div>
            <div class="text-regal-teal text-sm font-semibold text-left mr-2 ml-8">Complaint</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-16">Contact</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-12">Status</div>
        </div>     
        <ul class=" lg:flex-row 2xl:p-4 lg:p-3 pt-4 md:w-full bg-regal-white">
            <li class="border-gray-400 md:flex justify-center items-center lg:flex-row mb-2 shadow-sm mr-6 ml-6 2xl:mr-0 2xl:ml-0 " v-for="(i,index) in filteredList" :key="i">
                <div class="select-none cursor-pointer bg-white rounded-md  justify-between p-4  hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm grid grid-cols-8 border-r-8"
                :class="[(i.status === 'Scheduled' ? ' border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'border-regal-cancelled' : ''), (i.status === 'Examined' ? 'border-regal-examined' : ''),(i.status === 'Delayed' ? 'border-regal-delay' : '')]">   
                <div class="text-regal-teal text-sm text-left lg:ml-2 w-24">{{(this.perPage *(this.currentPage-1))+index+1}}</div>
                <div class="text-regal-teal text-sm text-left -ml-8 w-44 break-words">Abdur Rahman Khaleq mohammad Islam </div>
                <div class="text-regal-teal text-sm text-left -ml-2 w-44">24/Female</div>
                <div class="text-regal-teal text-sm text-left lg:ml-2 w-44">P-1234567</div>
                <div class="text-regal-teal text-sm text-left  w-44">{{i.start_time}}-{{i.end_time}}</div>
                <div class="text-regal-teal text-sm text-center  w-44">{{i.reason}}</div>
                <div class="text-regal-teal text-sm text-center ml-6 w-44">0987654321</div>
                <div class="text-regal-teal text-sm text-center ml-6  w-44">
                <div class="relative inline-flex">
                <select class="border border-regal-blue rounded-full text-gray-600 hpx-1 2xl:px-3 md:px-0 py-0.5 bg-white hover:bg-white focus:outline-none appearance-none text-center"
                :class="[(i.status === 'Scheduled' ? ' text-regal-sta-green' : ''),  (i.status === 'Cancelled'? 'text-regal-dark-red' : ''), (i.status === 'Examined' ? 'text-regal-teal' : ''),(i.status === 'Delayed' ? 'text-regal-brown' : '')]">
                    <option>{{i.status}}</option>
                    <option v-if="i.status!=='Examined'">Examined</option>
                    <option v-if="i.status!=='Scheduled'">Scheduled</option>
                    <option v-if="i.status!=='Cancelled'">Cancelled</option>
                    <option v-if="i.status!=='Delayed'">Delayed</option>
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
       <div v-else class="h-screen  ">
            <div class="  my-4 rounded-md text-lg mx-auto ">
                <p class="font-bold text-regal-teal text-opacity-50 text-center">No Appointments for Today</p>
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
        created(){
          this.getAppointmentList()
          this.parseJwt(this.token)
        },
        data(){
            return{
            sort:'',
            token: localStorage.getItem('token'),
            total:0,
            TodayAppointmentList:[],
            AppointmentList:[],
            // ex:'Scheduled',
            perPage: 10,
            currentPage: 1,
            }
        },
        computed:{
        //filtering the appointment list wrt to status    
        filteredList(){
         if(this.sort==="Scheduled" || this.sort==="Cancelled" || this.sort==="Examined" || this.sort==="Delayed"){
            return this.TodayAppointmentList.filter(item => item.status.toLowerCase().indexOf(this.sort.toLowerCase()) > -1);
        }  
            const result = this.TodayAppointmentList;
            return result
        }
        },
      
        methods:{
        parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
                c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            const payload = JSON.parse(jsonPayload);
            this.uid = payload.sub
            //console.log(payload.sub);
        },

        //Pagination
        pageChange(pageNumber){
            this.currentPage=pageNumber
            this.getAppointmentList(this.currentPage)
        },
        
        //Date Conversion
        dateConversion(date) {
            return moment(date).format('LL')

        },
        status(event){
            this.sort=event.target.value
        },

        // Get Today's appointment list
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
                let today = new Date().toISOString();
                this.AppointmentList.forEach(i => {
                    if (i.date.substring(0, 10)===today.substring(0, 10) && i.doctor===this.uid){
                        this.TodayAppointmentList.push(i) 
                    }
                 });
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>

