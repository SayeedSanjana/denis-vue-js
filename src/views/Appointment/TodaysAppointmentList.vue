<template>
    <div>
        <div class="flex flex-row mb-1 sm:mb-0 px-4">
     <!-- search starts -->
        <div class="block relative">
            <form class="bg-regal-light-blue">
                <div class="mt-5 mb-2 border-2  border-regal-light-blue border-opacity-30 py-1 px-3 flex justify-between rounded-lg">
                    <input class="flex-grow outline-none text-regal-teal bg-regal-light-blue" name="q" type="text" placeholder="Search" v-model="text"/>
                    <span class="ml-10">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </span>
            </div>
            </form>
        </div>
           <!-- search ends -->
            <!-- sortby -->
        <div class="relative ml-4 mt-5">
            <select class="appearance-none block w-full  text-regal-teal bg-regal-light-blue hover:bg-regal-white  pl-2 h-9 border-opacity-50 rounded py-2 px-20 mb-3 leading-tight focus:outline-none " id="sortby">
                <option class="text-regal-teal" >All</option>
                <option class="text-regal-teal" value="Examined">Oldest</option>
                <option class="text-regal-teal" value="Scheduled">Newest</option>
                <option class="text-regal-teal" value="Cancelled">Cancelled</option>
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
            <div class="text-regal-teal text-sm font-semibold text-left ml-4">Sl No</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-6">Name</div>
            <div class="text-regal-teal text-sm font-semibold  text-left ml-2">Age/Gender</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-2">Patient ID</div>
            <div class="text-regal-teal text-sm font-semibold text-left mr-4">Visiting time</div>
            <div class="text-regal-teal text-sm font-semibold text-left mr-2">Complaint</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-8">Contact</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-6">Status</div>
        </div>     
        <ul class=" lg:flex-row 2xl:p-4 lg:p-3 pt-4 md:w-full bg-regal-white">
                <li class="border-gray-400 md:flex justify-center items-center lg:flex-row mb-2 shadow-sm mr-6 ml-6 2xl:mr-0 2xl:ml-0 " v-for="i in TodayAppointmentList" :key="i">
                   <div class="select-none cursor-pointer bg-white rounded-md  justify-between p-4  hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm grid grid-cols-8 border-r-8"
                                 :class="['border-regal-examined', (i.status === 'Scheduled' ? 'border-regal-scheduled ' : 'border-regal-examined'), (i.status === 'Cancelled'  ? 'border-regal-cancelled' : 'border-regal-examined')]">                
                   <div class="text-regal-teal text-sm text-left lg:ml-2">1.</div>
                   <div class="text-regal-teal text-sm text-left ">Abdur Rahman </div>
                   <div class="text-regal-teal text-sm text-left">24/Female</div>
                   <div class="text-regal-teal text-sm text-left lg:ml-2">P-1234567</div>
                   <div class="text-regal-teal text-sm text-left ">{{i.start_time}}-{{i.end_time}}</div>
                   <div class="text-regal-teal text-sm text-center ">{{i.reason}}</div>
                   <div class="text-regal-teal text-sm text-center ml-6">0987654321</div>
                   <div class="text-regal-teal text-sm text-center ml-6 ">
                       <div class="relative inline-flex">
  <!-- <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg> -->
                        <select class="border border-regal-blue rounded-full text-gray-600 hpx-1 2xl:px-3 md:px-0 py-0.5 bg-white hover:bg-white focus:outline-none appearance-none text-center">
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
    <div class="flex px-40 flex-row justify-center">
        <div class="px-4 mx-4">
            <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded-tl-full rounded-bl-full rounded-br-full w-28 mt-4 text-sm" type="button">Previous</button>
        </div>
        <div class="px-4 mx-4">
            <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded-tr-full rounded-br-full rounded-bl-full w-28 mt-4 text-sm" type="button">Next </button>
        </div>
   </div>
   <!-- Pagination ends here -->


    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
    export default {
        created(){
          this.getAppointmentList()
        },
        data(){
            return{
            total:0,
            TodayAppointmentList:[],
            AppointmentList:[],
            // ex:'Scheduled',
            perPage: 10,
            currentPage: 1,
            }
        },
      
              methods:{
        pageChange(pageNumber){
            this.currentPage=pageNumber
            this.getAppointmentList(this.currentPage)
        },

        dateConversion(date) {
            return moment(date).format('LL')

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
                let today = new Date();
                let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                this.AppointmentList.forEach(i => {
                     //console.log(i.toLowerCase())
                     //console.log(this.item)
                    if (i.date.substring(0, 10) ===date){
                        this.TodayAppointmentList.push(i)
                    //    this.err="Allergy already exist"
                    //    this.dup=true

                       console.log(this.err)   
                    }
                 });
                //today.toLocaleDateString();
                //this.total=response.data.totalPages;
                console.log(this.AppointmentList)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>

