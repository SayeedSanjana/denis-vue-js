<template>
    <div class="bg-regal-white">
         <header class="sticky top-0 z-50">
            <Nav />
        </header>

        <div class="mt-10 text-regal-teal font-bold text-left px-16 text-xl">Employee Management</div>

  <div class="flex flex-row mb-1 sm:mb-0 px-16">
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
            <!-- sortby -->
    
    <!-- List of employee starts here -->
    <div class="mx-16 py-4 mt-6">
        <div class="border border-regal-blue border-opacity-30 rounded-t-xl bg-regal-light-blue py-3 grid grid-cols-10 2xl:p-2">
            <div class="text-regal-teal text-sm font-semibold text-left ml-4">Sl No</div>
              <!-- <div class="text-regal-teal text-sm font-semibold text-left ml-4"></div> -->
            <div class="text-regal-teal text-sm font-semibold text-left ">Employee name</div>
            <div class="text-regal-teal text-sm font-semibold  text-left ">Email</div>
            <div class="text-regal-teal text-sm font-semibold text-left ml-8">Job Title</div>
            <div class="text-regal-teal text-sm font-semibold text-left ">Joining Date</div>
            <div class="text-regal-teal text-sm font-semibold text-left  ml-8">Department</div>
            <div class="text-regal-teal text-sm font-semibold text-left  ml-8">Work hours</div>
            <div class="text-regal-teal text-sm font-semibold text-left  ml-8">Contact No</div>
            <div class="text-regal-teal text-sm font-semibold text-left  ml-8">Status</div>
            <div class="text-regal-teal text-sm font-semibold text-left  ml-8">Attendence</div>
        </div>     
        <ul class=" lg:flex-row 2xl:p-2  pt-4 md:w-full bg-regal-white">
                <li class="border-gray-400 md:flex justify-center items-center lg:flex-row mb-2 shadow-sm mr-6 ml-6 2xl:mr-0 2xl:ml-0 " v-for="i in 10" :key="i">
                   <div class="select-none cursor-pointer bg-white rounded-md  justify-between p-4  hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm grid grid-cols-10 border-r-8 border-regal-scheduled  ">                
                   <div class="text-regal-teal text-sm text-left lg:ml-2 flex">
                       <div class="2xl:mr-4">1.</div>
                       <div class="flex relative w-12 h-12 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full text-white">
                           <img class="rounded-full" alt="A" src="https://randomuser.me/api/portraits/men/62.jpg">
                      </div>
                   </div>
                   <div class="text-regal-teal text-sm text-left ">Adbur Rahman Kamal</div>
                   <div class="text-regal-teal text-sm text-left mr-6 break-words">sanjanasayeed68@gmail.com</div>
                   <div class="text-regal-teal text-sm text-left ml-8">HR Manager</div>
                   <div class="text-regal-teal text-sm text-left ">12,November,2021</div>
                   <div class="text-regal-teal text-sm text-center ml-8  2xl:ml-0">Human Resource </div>
                   <div class="text-regal-teal text-sm text-center ml-8  2xl:ml-0">10:00AM-11:00PM </div>
                   <div class="text-regal-teal text-sm text-center ml-10  2xl:ml-0">09876543212</div>
                   <div class="text-regal-teal text-sm text-center ml-8  2xl:ml-0">
                       <div class="relative inline-flex">
                        <select v-model="this.status"  class="border border-regal-blue border-opacity-40 rounded-full  px-1 2xl:px-3 md:px-0 py-0.5 bg-white hover:bg-white focus:outline-none appearance-none text-center"
                        :class="this.status==='Inactive' ? 'text-regal-dark-red' : 'text-regal-dark-green'">
                            <option>{{this.status}}</option>
                            <option  v-if="this.status!=='Inactive'">Inactive</option>
                            <option  v-if="this.status!=='Active'">Active</option>
                        </select>
                        </div>
                    </div>
                   <div class="text-regal-teal text-sm text-center ml-10  2xl:ml-0 ">
                       <div class="relative inline-flex">
                        <select v-model="this.attendance" @change="changeAttendance" class="border border-opacity-30 rounded-full  px-1 2xl:px-3 md:px-0 py-0.5 hover:bg-white focus:outline-none appearance-none text-center"
                        :class="[(this.attendance == 'On Leave' ? ' border border-regal-yellow-ochre bg-regal-skin text-regal-brown' : ''),  (this.attendance === 'Absent' ? 'bg-regal-light-red text-regal-dark-red border border-regal-dark-red' : ''), (this.attendance === 'Present' ? 'bg-regal-light-green text-regal-dark-green border border-regal-dark-green' : '')]">
                            <option>{{this.attendance}}</option>
                            <option v-if="this.attendance!=='Absent'">Absent</option>
                            <option  v-if="this.attendance!=='On Leave'">On Leave</option>
                            <option  v-if="this.attendance!=='Present'">Present</option>
                        </select>
                        </div>
                    </div>
                  </div>
                </li>
            </ul>
    </div>
    <!-- List of employee ends here -->
    <!-- Pagination starts here -->
    <div class="flex px-40 flex-row justify-center">
        <div class="px-4 mx-4 mb-10">
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
import  Nav from "../../components/Nav.vue";
    export default {
        components:{
          Nav
        },
        data(){
            return{
                attendance:'Present',
                status:'Active'
            }
        },
        methods:{
          changeStatus(evt){
           this.status=evt.target.value
          },
          changeAttendance(){

          }

        }
    }
</script>

<style lang="scss" scoped>

</style>