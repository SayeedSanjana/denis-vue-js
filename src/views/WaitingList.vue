<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-screen bg-regal-white">
        <section class="w-full">
            <p class="headername -mx-4">Patient Waiting List </p>
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
                    <th class="px-4 py-3">Contact Number</th>
                    <th class="px-4 py-3">Reason</th>
                    <th class="px-4 py-3">Request Date</th>
                    <th class="px-4 py-3">Action</th>
                </tr>
                <!-- thead -->
                <!-- tbody -->
                <tr  @click="appointmentDetails" class="trbody" v-for="(pat,index) in filteredList" :key="index">
                    <td class="px-2 ">{{(this.prePage *(this.currentPage-1))+index+1}}</td>
                    <td class="px-2 py-3">{{pat.name}}</td>
                    <td class="px-2 py-3">{{pat.age}}/{{pat.gender}}</td>
                    <td class="px-2 py-3">{{pat.appointmentID}}</td>
                    <td class="px-2 py-3">{{pat.contact}}</td>
                    <td class="px-2 py-3">{{pat.reason}}</td>
                    <td class="px-2 py-3">{{pat.requestDate}}</td>
                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>
                </tr>
                <!-- <tr class="trbody">
                    <td class="px-2 ">2</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">3</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">4</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">5</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">6</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">7</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">8</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">9</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr>
                <tr class="trbody">
                    <td class="px-2 ">10</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">A4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">Severe Tooth Ache</td>
                    <td class="px-2 py-3">16/10/2021</td>

                    <td class="px-2 py-3 "> <button class="  px-2 py-1  text-regal-red">Cancel Request</button></td>

                </tr> -->

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
         computed: {
            filteredList() {
                const start = (this.currentPage - 1) * this.prePage
                const end = this.currentPage * this.prePage
                const result =this.waitingList.slice(start, end)
                return result
            }
        },
        data(){
            return{
            prePage:5,
            currentPage: 1,    
            sort:'',
            waitingList:[
            {
             name:'Iktisad Rashid',
             age:'91',
             gender:'Male',
             appointmentID:'234567',
             contact:'01701883412',
             requestDate:'11:00AM',
             reason:'Surgery',
             status:'Examined',
            },
             {
             name:'Samee Sayeed',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'12:00AM',
              reason:'Surgery',
             status:'Scheduled',
            },
            {
             name:'Semonti Banik',
             age:'91',
             gender:'Female',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'1:30PM',
              reason:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'1:30PM',
             reason:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'1:30PM',
             reason:'Surgery',
             status:'Examined',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'1:30PM',
             reason:'Surgery',
             status:'Cancelled',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'1:30PM',
             reason:'Surgery',
            },
             {
             name:'Boo Islam',
             age:'91',
             gender:'Male',
             appointmentID:'234566',
             contact:'01701883412',
             requestDate:'1:30PM',
             reason:'Surgery',
            },
            ]

            }
        },
        methods:{
             changePage(num) {
                this.currentPage = this.currentPage + num
            },
            appointmentDetails() {
                this.$router.push({
                    name: 'CreateAppointment',
                   
                })
            },
        }
           
    }
</script>

<style scoped>

</style>