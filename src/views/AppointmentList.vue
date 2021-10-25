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
                    <button class="newbutton mt-5 mb-2 " @click="modal">
                        <span class=" mt-1 mr-2"> Create New Appointment</span>
                        <span class="mr-2">
                            <img src="@/assets/svgs/add2.svg" class="w-3 h-7 ">
                        </span>
                    </button>

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
                    <td class="px-2 py-3">{{item.age}}/{{item.gender}}</td>
                    <td class="px-2 py-3">A-{{item.appointmentID}}</td>
                    <td class="px-2 py-3">{{item.contact}}</td>
                    <td class="px-2 py-3">{{item.visitingTime}}</td>
                    <td class="px-2 py-3">{{item.complaint}}</td>
                    <td class="px-2 py-3 " :class="['text-regal-examined', (item.status === 'Scheduled' ? 'text-regal-scheduled' : 'text-regal-examined'), (item.status === 'Cancelled'  ? 'text-regal-cancelled' : 'text-regal-examined')]">{{item.status}}</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button><button class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1" :class="['bg-regal-examined', (item.status === 'Scheduled' ? 'bg-regal-scheduled' : 'bg-regal-examined'), (item.status === 'Cancelled'  ? 'bg-regal-cancelled' : 'bg-regal-examined')]"></td>
                </tr>

                <!-- tbody -->
            </table>
            <!-- table -->
            <!-- pagination -->
            <!-- <div class="flex px-40 flex-row justify-center">
                <div class="px-40">
                    <button class="pagebutton" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Previous</button>
                </div>
                <div class="px-40">
                    <button class="pagebutton" type="button" :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
                </div>
            </div> -->
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
        
        computed: {
            filteredList() {
                if(this.sort==="Scheduled" || this.sort==="Cancelled" || this.sort==="Examined"){
                   return this.appointmentList.filter(item => item.status.toLowerCase().indexOf(this.sort.toLowerCase()) > -1);
                }
                //this.sort="";
                return this.appointmentList
           
            }
            
        },
        data(){
            return{
            result:[],
            prePage:4,
            currentPage: 1,    
            sort:'',
            appointmentList:[
            {
             name:'Iktisad Rashid',
             age:'91',
             gender:'Male',
             appointmentID:'234567',
             contact:'01701883412',
             visitingTime:'11:00AM',
             complaint:'Surgery',
             status:'Examined',
            },
             {
             name:'Samee Sayeed',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'12:00AM',
             complaint:'Surgery',
             status:'Scheduled',
            },
            {
             name:'Semonti Banik',
             age:'91',
             gender:'Female',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'1:30PM',
             complaint:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'1:30PM',
             complaint:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'1:30PM',
             complaint:'Surgery',
             status:'Examined',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'1:30PM',
             complaint:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'1:30PM',
             complaint:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             visitingTime:'1:30PM',
             complaint:'Surgery',
             status:'Scheduled',
            },
            ]
            }
        },
        methods:{
             changePage(num) {
                this.currentPage = this.currentPage + num
            },
            status(event){
                this.sort=event.target.value
                /**
                 * first capture the event value
                 * pass the event value 
                 * based on event filter the array list
                 * display
                 * if no value is not there then no action
                 */
                
                // const star = (this.currentPage - 1) * this.prePage;
                // const end = this.currentPage * this.prePage;
                // const result = this.appointmentList.slice(star, end); 
              
                // console.log(event.target.value);
            //     if (event.target.value=='sch'){
            //         this.sort = event.target.innerHTML;
            //     }

            //     else if (event.target.value=='ex'){
            //         this.sort = event.target.innerHTML;
            //     }

            //     else if (event.target.value=='ca'){
            //         this.sort = event.target.innerHTML;
            //     }
               
            //     console.log(this.sort)
            //     //result.filter(item => item.status.toLowerCase().indexOf(this.sort.toLowerCase()) > -1);
            //     // if(this.sort==="Examined" || this.sort==="Cancelled" ||this.sort==="Scheduled"){
            //     // }
             }
            
            //hit get api
            //hit delete api to delete patient from appointment list
        }     
    }
</script>

<style scoped>

</style>