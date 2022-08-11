<template>

    <div class="container mx-auto py-4">
        <div class=" grid grid-cols-4 gap-4  ">
    
            <div class=" px-4 py-3 border rounded-lg bg-slate-50 shadow-md">
                <div class="flex justify-between ">
                    <div class="flex items-center border border-gray-200 rounded bg-white shadow ">
                        <img src="@/assets/svgs/total.svg" alt="" srcset="" class="place-content-center h-20 w-20 p-2 -mt-1 mx-2">
                    </div>

                <div>
                    <p class="text-sm font-semibold text-gray-500 text-right">Total Patients Registered </p>
                  
                    <p class="text-4xl text-right font-semibold text-gray-600 pt-12 ">{{getTotalData}}</p>
                </div>
                </div>
            </div>
            
            <div class=" px-4 py-3 border rounded-lg bg-slate-50 shadow-md">
                <div class="flex justify-between">
                    <div class="flex items-center border border-gray-200 rounded bg-white shadow">
                        <img src="@/assets/svgs/visitedtoday.svg" alt="" srcset="" class="place-content-center h-20 w-20 p-2 -mt-1 mx-2">
                    </div>

                <div>
                    <div>
                        <p class="text-sm font-medium text-gray-500 text-right">Patient Visits today</p>
                        <p class="text-sm font-semibold text-gray-600 text-right">Thursday 2nd August,2022</p>
                    </div>
                    <!-- <p class="text-base font-medium text-gray-600 ">Total Visits <span class="font-bold">:</span> </p> -->
                    <p class="text-4xl text-right font-semibold text-gray-600 pt-7 ">50</p>
                </div>
                </div>
            </div>
            
             <div class=" px-4 py-3 border rounded-lg bg-slate-50 shadow-md">
                <div class="flex justify-between">
                    <div class="flex items-center border border-gray-200 rounded bg-white shadow">
                        <img src="@/assets/svgs/due.svg" alt="" srcset="" class="place-content-center h-20 w-20 p-2 -mt-1 mx-2">
                    </div>
                <div>
                    <div>
                        <p class="text-base font-semibold text-gray-500 text-right">Total Due</p>
                        <!-- <p class="text-sm font-semibold text-gray-600 text-right">Thursday 2nd August,2022</p> -->
                    </div>
                    <!-- <p class="text-base font-medium text-gray-600 ">Due Amount <span class="font-bold">:</span> </p> -->
                    <p class="text-2xl text-right font-semibold text-regal-red pt-14 ">TK {{billInfo.total_due['amount']}}</p>
                </div>
                </div>
            </div>
            
            <div class=" px-4 py-3 border rounded-lg bg-slate-50 shadow-md">
                <div class="flex justify-between">
                    <div class="flex items-center border border-gray-200 rounded bg-white shadow">
                        <img src="@/assets/svgs/billstatus.svg" alt="" srcset="" class="place-content-center h-14 w-14 p-1">
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-500 text-right">Bill Status for</p>
                        <p class="text-sm font-semibold text-gray-600 text-right">Thursday 2nd August,2022</p>
                    </div>

                </div>
                <div class="flex justify-between pt-4" >
                    <p class="text-base font-medium text-gray-600 ">Total Patients <span class="font-bold">:</span> </p>
                    <p class="text-base font-semibold text-gray-600 ">{{billInfo.latest_paid[0].patients}}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-base font-medium text-gray-600 ">Amount Paid <span class="font-bold">:</span> </p>
                    <p class="text-base font-semibold text-regal-success ">TK {{billInfo.latest_paid[0].amount}}</p>
                </div>
            </div>
        
    
        </div>
        <!-- showing total patients -->
        <p class="text-xl text-left font-bold text-regal-teal py-5">
            Patient Records <span class="text-sm text-gray-400 ">(Showing total results - <span
                    class="font-semibold text-regal-teal">{{getFoundData}}</span>)</span>
        </p>
        <!-- showing total patients -->
        <section class="flex sm:flex-row justify-between">



            <form id="search" class="w-1/2 flex">
            <!-- search -->
                <div class="border-2  px-3 flex bg-white rounded-md items-center  w-1/2">
                    <input class="flex-grow outline-none text-regal-teal" name="q" type="text" placeholder="Search ..."
                        v-model="searchQuery" @keyup="search" />
                    <span class="mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mt-1 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                            fill="none" viewBox="0 0 20 20" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </div>
            <!-- search -->
            </form>

            <div class="w-1/2 flex justify-end">
            <!-- register button -->
                <button class="flex items-center register-btn" @click="modal">
                    Register
                    <span class="pl-3">
                        <svg class="w-3 h-4 fill-current" height="426.66667pt" viewBox="0 0 426.66667 426.66667"
                            width="426.66667pt" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                        </svg>
                    </span>
                </button>
            <!-- register button -->
            </div>
        </section>



        <section class="mt-10">
        <!-- patient table -->
            <Grid :method="patientDetails" :data="patients" :columns="gridColumns" :filter-key="searchQuery"
                @empty="search" />

        <!-- patient table -->
        </section>

        <!-- Pagination -->
        <div class="flex justify-center my-5">
            <Pagination :totalData="getFoundData" :per-page="perPage" :current-page="currentPage"
                @pagechanged="onPageChange" />
        </div>




        <RegisterPatient v-if="openModal" @close="closeModal" />

    </div>
</template>

<script>
import axios from 'axios';
import Pagination from '../../components/Pagination.vue'
import Grid from './PatientGrid.vue'
import RegisterPatient from "../DoctorsPortal/RegisterPatient.vue";

export default {

    components: {
        Grid,
        RegisterPatient,
        Pagination


    },
    created() {
        const query = {
            currentPage: this.currentPage,
            perPage: this.perPage,

        }
        this.$store.dispatch("fetchPatients", query);

        this.getBillData();

    },
    watch: {
        '$store.state.patients': function () {

            this.patients = [...this.$store.state.patients];


            this.patients.forEach(patient => {

                patient.dob = this.calculateAge(patient.dob);
                patient.createdAt = new Date(patient.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            });

        },
        


    },
    computed: {
    // total patient data
    getTotalData() {
            return this.$store.state.totalPatient;
        },

    getFoundData(){
        // console.log(this.$store.state.totalFound);
        return this.$store.state.totalfoundPatient;
   
    }
   
  
    },

    data() {
        return {
            searchQuery: '',
            gridColumns: {
                id: 'patient ID',
                name: 'name',
                dob: 'age',
                phone: 'contact',
                gender: 'sex',
                createdAt: 'registration date'
            },

            totalData: 0,
            text: '',
            currentPage: 1,
            perPage: 10,
            openModal: false,
            patients: [],
            billInfo: {
                total_due: {
                    amount: 0,
                },
                latest_paid: [{
                    patients: 0,
                    amount: 0,
                }],
            }

        }
    },

    methods: {

        // dashboard bill data
       async getBillData(){
            try {
                const response = await axios.get(
                    import.meta.env.VITE_LOCAL + 'billings/statistics/', {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        },
                    })
                this.billInfo = response.data.data;
                // console.log(this.billInfo);

            } catch (error) {
                if (error.response.data.message == "jwt expired") {
                    this.$router.push({
                        name: 'Login'
                    })

                } else {
                    console.log(error);
                }
            }

        },
        // search function
        search(bool) {
            
            if (bool) {
                const query = {
                    currentPage: this.currentPage,
                    perPage: this.perPage,
                    text: this.searchQuery
                }

                this.$store.dispatch("fetchPatients", query);



            }

        },

        // search function
        // page change
        onPageChange(page) {
            
            this.currentPage = page;
            this.patients = [];



            const query = {
                currentPage: this.currentPage,
                perPage: this.perPage,
                text: this.searchQuery
            }
            this.$store.dispatch("fetchPatients", query);

        },
        // page change
        // calculate age in years
        calculateAge(birthYear) {
            let ageDifMs = Date.now() - new Date(birthYear).getTime();
            const ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970) + ' years';
        },

        toggle() {
            this.open = !this.open
        },
        // route back to patient details
        patientDetails(id) {
            this.$router.push({
                name: 'PatientDetails',
                params: {
                    id: id,



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
    @apply bg-regal-cyan-teal text-center px-4 py-2 border rounded-md text-white font-semibold  
}
.register-btn:hover{
    @apply bg-regal-teethblue
}
</style>