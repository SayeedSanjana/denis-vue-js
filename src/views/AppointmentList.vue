<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-screen bg-regal-white">
        <section class="w-full">
            <p class="headername -mx-4">Today's Appointment List </p>
            <div class=" mx-auto flex sm:flex-row flex-col justify-between ">
                <!-- search -->
                <div class="flex flex-row mb-1 sm:mb-0 px-48">

                    <div class="block relative">
                        <form class="bg-white ">
                            <div class="searchdivclass">
                                <input class="searchinput" name="q" type="text"
                                    placeholder="Search by name or phone number" />
                                <span class="ml-10">
                                    <img src="@/assets/svgs/sicon.svg" class="h-5 w-5 mt-1">
                                </span>
                            </div>
                        </form>

                    </div>

                    <!-- sortby -->
                    <div class="relative ml-4 mt-5">
                        <select class="selectclass" id="sortby" @click="status($event)">
                            <option class="text-regal-teal" >All</option>
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

                <!-- create new appointment -->
                <div class="flex justify-end px-48">
                    <router-link to="/Createnewappointment"
                     class="newbutton mt-5 mb-2 ">
                        <span class=" mt-1 mr-2"> Create New Appointment</span>
                        <span class="mr-2">
                            <img src="@/assets/svgs/add2.svg" class="w-3 h-7 ">
                        </span>
                     </router-link>

                </div>
                <!-- create new appointment -->
            </div>
            <!-- search -->
            <!-- table -->
            <table class=" rounded-t-xl m-5  w-4/5 mx-auto bg-regal-blue ">
                <!-- thead -->
                <tr class="trhead">
                    <th class="px-4 py-3">SL No.</th>
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Age/Gender</th>
                    <th class="px-4 py-3">Appointment ID</th>
                    <th class="px-4 py-3">Contact</th>
                    <th class="px-4 py-3">Visiting Time</th>
                    <th class="px-4 py-3">Complaint</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3">Action</th>
                </tr>
                <!-- thead -->
                <!-- tbody -->
                 <tr v-for="(item,index) in filteredList" :key="index" class="trbody" >
                    <td class="px-2 ">{{(this.prePage *(this.currentPage-1))+index+1}}</td>
                    <td class="px-2 py-3">{{item.name}}</td>
                    <td class="px-2 py-3">{{getAge(item.dob)}} years / {{item.gender}}</td>
                    <td class="px-2 py-3">A-{{item.appointmentID}}</td>
                    <td class="px-2 py-3">{{item.contact}}</td>
                    <td class="px-2 py-3">{{item.startTime}}</td>
                    <td class="px-2 py-3">{{item.complaint}}</td>
                    <td class="px-2 py-3 " :class="['text-regal-examined', (item.status === 'Scheduled' ? 'text-regal-scheduled' : 'text-regal-examined'), (item.status === 'Cancelled'  ? 'text-regal-cancelled' : 'text-regal-examined')]">{{item.status}}</td>
                    <td class="px-2 py-3">
                    <!-- <button class="text-regal-cyan mr-2">Edit</button> -->
                    <button class=" text-regal-red" @click="cancel(index)">Cancel</button>
                    </td>
                    <td class="border border-r-1" :class="['bg-regal-examined', (item.status === 'Scheduled' ? 'bg-regal-scheduled' : 'bg-regal-examined'), (item.status === 'Cancelled'  ? 'bg-regal-cancelled' : 'bg-regal-examined')]"></td>
                </tr>

                <!-- tbody -->
            </table>
            <!-- table -->
            <!-- pagination -->
            <div class="flex px-40 flex-row justify-center">
                <div class="px-40">
                    <button class="pagebutton" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Previous</button>
                </div>
                <div class="px-40">
                    <button class="pagebutton" type="button" :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
                </div>
            </div>
            <!-- pagination -->
        </section>

    </div>
</template>

<script>
    import Nav from "../components/Nav.vue";
    
    export default {
        components: {
            Nav,
        },
        // created() {
        //     this.getAppointmentList()
        // },

        computed: {
            filteredList() {
    //             if(this.searchQuery){
    //   return this.resources.filter((item)=>{
    //     return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
    //   })
                const star = (this.currentPage - 1) * this.prePage
                const end = this.currentPage * this.prePage
                if(this.sort==="Scheduled" || this.sort==="Cancelled" || this.sort==="Examined"){
                   return this.appointmentList.filter(item => item.status.toLowerCase().indexOf(this.sort.toLowerCase()) > -1).slice(star, end);
                }
               
                const result = this.appointmentList.slice(star, end)
                return result
                //this.sort="";
                //return 
            }  
        },
        data(){
            return{
            result:[],
            prePage:10,
            currentPage: 1,    
            sort:'',
            appointmentList:[
            {
             name:'Iktisad Rashid',
             dob:'2009-11-26T17:00:00.000+00:00',
             gender:'Male',
             appointmentID:'234567',
             contact:'01701883412',
             startTime:'11:00AM',
             endTime:'12:00PM',
             complaint:'Surgery',
             status:'Examined',
            },
             {
             name:'Samee Sayeed',
             dob:'2015-07-28T00:00:00.000+00:00',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             startTime:'12:30PM',
             endTime:'1:00PM',
             complaint:'Cavities',
             status:'Scheduled',
            },
            {
             name:'Kabir Ahmed',
             dob:'2007-06-27T18:00:00.000+00:00',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             startTime:'1:30PM',
             endTime:'2:00PM',
             complaint:'Pain in the gum',
             status:'Cancelled',
            },
             {
             name:'Mushfiq Rahman',
             dob:'2014-06-30T00:00:00.000+00:00',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             startTime:'2:30PM',
             endTime:'3:00PM',
             complaint:'Surgery',
             status:'Cancelled',
            },
            //  {
            //  name:'Mushfiq Rahman',
            //  age:'91',
            //  gender:'Male',
            //  appointmentID:'234566',
            //  contact:'01701883412',
            //  visitingTime:'1:30PM',
            //  complaint:'Surgery',
            //  status:'Examined',
            // },
            //  {
            //  name:'Boo Islam',
            //  age:'91',
            //  gender:'Male',
            //  appointmentID:'234566',
            //  contact:'01701883412',
            //  visitingTime:'1:30PM',
            //  complaint:'Surgery',
            //  status:'Cancelled',
            // },
            //  {
            //  name:'Boo Islam',
            //  age:'91',
            //  gender:'Male',
            //  appointmentID:'234566',
            //  contact:'01701883412',
            //  visitingTime:'1:30PM',
            //  complaint:'Surgery',
            //  status:'Cancelled',
            // },
            //  {
            //  name:'Boo Islam',
            //  age:'91',
            //  gender:'Male',
            //  appointmentID:'234566',
            //  contact:'01701883412',
            //  visitingTime:'1:30PM',
            //  complaint:'Surgery',
            //  status:'Scheduled',
            // },
            ]
            }
        },
        methods:{
             changePage(num) {
                this.currentPage = this.currentPage + num
            },
            status(event){
                this.sort=event.target.value
             },
              createnewappointment() {
             this.$router.push({ name: 'Createnewappointment',})
        },

        getAge(dob){
            //console.log(this.appointmentList)
            const ageDifMs = Date.now() - new Date(dob.substring(0, 10)).getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);


        },
        cancel(i){
            this.appointmentList.splice(i, 1)
        }
        } ,
       
    
    }
</script>

<style scoped>

</style>