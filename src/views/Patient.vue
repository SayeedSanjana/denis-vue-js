<template>
    <div class="container mx-auto py-4">   
        
        <p class="text-lg text-left font-bold text-regal-teal py-5">
            Patient Records
        </p>
        <section class="flex sm:flex-row justify-between">
            <!-- <div class="flex flex-row mb-1 sm:mb-0"> -->
                <!-- <div class="block relative"> -->
                    <form id="search" class="w-1/2 flex">
                        <!-- <div class="border-2  px-3 flex bg-white rounded-md items-center  w-1/2">
                            <input class="flex-grow outline-none text-regal-teal"
                                name="q" type="text" placeholder="Search by name or phone number" v-model="this.text"
                                /> -->
                        <div class="border-2  px-3 flex bg-white rounded-md items-center  w-1/2">
                            <input class="flex-grow outline-none text-regal-teal"
                                name="q" type="text" placeholder="Search by name or phone number" v-model="searchQuery"
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
                <!-- </div> -->
            <!-- </div> -->
            <div class="w-1/2 flex justify-end">

                <button class="flex items-center register-btn"
                    @click="modal">
                     Register
                    <span class="pl-3">
                        <svg class="w-3 h-4 fill-current" height="426.66667pt"
                            viewBox="0 0 426.66667 426.66667" width="426.66667pt"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                        </svg>
                    </span>
                </button>
            </div>
        </section>

        <section class="mt-10">
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
            <!-- <form id="search">
                <label for="" class="font-bold px-2">Search</label>
                <input name="query" class="border-b" v-model="searchQuery">
            </form> -->
            <Grid :data="this.$store.state.patients"  :columns="gridColumns" :filter-key="searchQuery" />
            
        </section>

        <section class="flex px-40 flex-row justify-center">
            <div class="px-40">
                <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                    :disabled="currentPage === 1" 
                    :class="{'hidden': currentPage === 1,'cursor-pointer': typeof $store.state.endPage ==='number'}" 
                    @click="changePage(-1)">
                    Previous
                </button>
                        <!-- :class="currentPage === 1 ?'cursor-not-allowed' :'cursor-pointer'" @click="changePage(-1)"> Previous</button> -->
            </div>
            <div class="px-40">
                <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                    :disabled="$store.state.endPage == false " 
                    :class="{'hidden': $store.state.endPage=== false,'cursor-pointer': typeof $store.state.endPage ==='number' }" 
                    @click="changePage(1)">
                    Next 
                </button>
                    <!-- :class="$store.state.endPage == false ?'cursor-not-allowed' :'cursor-pointer' "  @click="changePage(1)">Next </button> -->
            </div>
        </section>       
        
    
        
        <RegisterPatient v-if="openModal" @close="closeModal"  />
        
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
            // this.currentPage=1;
             
        },
        
        data() {
            return {
                searchQuery: '',
                // gridColumns: ['Name', 'Contact', 'Gender', 'PatientId', 'RegDate'],
                gridColumns: {
                    _id: 'patient ID',
                    name: 'name',
                    phone: 'contact',
                    gender: 'sex',
                    createdAt: 'registration date'
                },
                
                total:0,
                text:'',
                perPage: 10,
                currentPage: 1,
                openModal: false,                
            

            }
        },

        methods: {
                        
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
        }
    }
</script>

<style scoped>
.register-btn{
    @apply bg-regal-cyan-teal text-center px-4 py-3 border rounded-md text-white font-semibold  
}
.register-btn:hover{
    @apply bg-regal-teethblue
}
</style>