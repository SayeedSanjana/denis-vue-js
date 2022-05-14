<template>
    <div>
        <!-- <header>
            <Nav/>
        </header> -->
   
        <div class="w-full px-6 py-4">
            <p class="text-lg text-left font-bold m-5 px-36 text-regal-teal">Patient Records</p>
            <section class="m-5 w-5/6 mx-auto flex sm:flex-row flex-col justify-between ">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="block relative">
                        <form class="bg-white ">
                            <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between  rounded-md">
                                <input class="flex-grow outline-none text-regal-teal focus:text-gray-600 w-96 h-8"
                                    name="q" type="text" placeholder="Search by name or phone number" v-model="this.text"
                                    />
                                <span class="ml-10">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 mt-1 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="flex items-center text-center m-2 p-1 border rounded text-white font-semibold "
                        style="background-color:#73C6CA" @click="modal">
                        <span class=" mt-1 ml-2 mr-2"> Register New Patient</span>
                        <span class="mr-2"><svg class="w-3 h-4 fill-current text-white" height="426.66667pt"
                                viewBox="0 0 426.66667 426.66667" width="426.66667pt"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                            </svg></span>
                    </button>
                </div>
            </section>

            <section>
                <!-- <table class=" rounded-t-xl m-5 w-5/6 mx-auto bg-regal-blue ">
                    <tr class="text-center text-md text-regal-teal h-16">
                        <th class="px-4 py-3">SL no</th>
                        <th class="px-4 py-3">Name</th>
                        <th class="px-4 py-3">Contact</th>
                        <th class="px-4 py-3">Gender</th>
                        <th class="px-4 py-3">Patient ID</th>
                        <th class="px-4 py-3">Reg Date</th>
                    </tr>
                
                    <tr class="border border-regal-blue border-opacity-25 bg-white  hover:bg-regal-white hover:opacity-80 text-regal-cyan"
                    @click="patientDetails(patient._id)" v-for="(patient,index) in $store.state.patients.slice(0, perPage)" :key="index"  >
                        <td class="py-3 ">{{(this.perPage *(this.currentPage-1))+index+1}}</td>   
                        <td class="px-2 py-3">{{patient.name}}</td>
                        <td class="px-2 py-3">{{patient.phone}}</td>
                        <td class="px-2 py-3">{{patient.gender}}</td>
                        <td class="px-2 py-3 ">P-{{patient._id.substring(patient._id.length - 7)}}</td>
                        <td class="">{{this.dateConversion(patient.createdAt.substring(0, 10))}}</td>
                    </tr>
                
                </table>   -->
                <form id="search">
                    Search <input name="query" v-model="searchQuery">
                </form>
                <Grid :data="this.$store.state.patients"  :columns="gridColumns" :filter-key="searchQuery" />
                
            </section>

             <section class="flex px-40 flex-row justify-center">
                <div class="px-40">
                    <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                          :disabled="currentPage === 1" :class="currentPage === 1 ?'cursor-not-allowed' :'cursor-pointer'" @click="changePage(-1)"> Previous</button>
                </div>
                <div class="px-40">
                    <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                        :disabled="$store.state.endPage == false " :class="$store.state.endPage == false ?'cursor-not-allowed' :'cursor-pointer' "  @click="changePage(1)">Next </button>
                </div>
            </section>       
          
        </div>
        <div v-if="openModal">
            <RegisterPatient @close="closeModal"  />
        </div>
    </div>
</template>

<script>
   import Grid from '../components/Grid.vue'
    // import Nav from "../components/Nav.vue"
    import RegisterPatient from "./DoctorsPortal/RegisterPatient.vue";
    import moment from "moment"
    export default {

        components: {
            Grid,
            // Nav,
            RegisterPatient,
          

        },

    
        created() {
           
            this.$store.dispatch("fetchPatients" , this.currentPage, this.perPage, this.text);
        //     // this.pat
            this.currentPage=1
             
        //  this.getPatients()
            //  this.patients = this.$store.state.patients
        },
        // watch:{
        //     patients(){
        //         this.currentPage=1
        //         this.patients = this.$store.state.patients
                
        //     }
        // },
        // mounted() {
        //  this.patients = this.$store.dispatch("fetchPatients" , this.currentPage, this.perPage, this.text);
        //     this.patients = this.objectMap({
        //         name:'',
        //         phone:'',
        //         gender:'',
        //         _id:'',
        //         createdAt:''            
        //         }, this.patients)             
         
        // },


        data() {
            return {
                searchQuery: '',
                // gridColumns: ['Name', 'Contact', 'Gender', 'PatientId', 'RegDate'],
                 gridColumns: {name:'Name',contact: 'Contact', gender: 'Gender',_id: 'PatientId',createdAt: 'RegDate'},
                
                total:0,
                text:'',
         
                patients: [],
                perPage: 10,
                currentPage: 1,
                openModal: false,
                dateCon:'',

                // sdfsd = this.$store.state.patients,
                
            

            }
        },

        methods: {
            getPatients(){
                this.$store.dispatch("fetchPatients" , this.currentPage, this.perPage, this.text);
                this.currentPage=1
                this.patients = this.$store.state.patients

            },
            
          
            
            dateConversion(date) {
                return moment(date).format('LL')

            },
            changePage(num) {
                this.currentPage = this.currentPage + num
                this.$store.dispatch("fetchPatients" , this.currentPage, this.perPage, this.text);

            },


            toggle() {
                this.open = !this.open
            },

            patientDetails(id) {
                this.$router.push({
                    name: 'PatientDetails',
                    params: {
                        id: id
                    }
                })
            },


            modal() {
                this.openModal = true
            },

            closeModal() {
                this.openModal = false
            },
            // register(patient){
            //     this.$store.state.patients.push(patient)
            // }
          
        }
    }
</script>

<style scoped>

</style>