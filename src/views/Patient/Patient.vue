<template>
    <div class="container mx-auto py-4">   
        
        <p class="text-xl text-left font-bold text-regal-teal py-5">
            Patient Records
        </p>
        <section class="flex sm:flex-row justify-between">

          
            <!-- <div class="flex flex-row mb-1 sm:mb-0"> -->
                <!-- <div class="block relative"> -->
                    <form id="search" class="w-1/2 flex">
                      
                        <div class="border-2  px-3 flex bg-white rounded-md items-center  w-1/2">
                            <input class="flex-grow outline-none text-regal-teal"
                                name="q" type="text" placeholder="Search ..." v-model="searchQuery"
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
          
            <Grid :method="patientDetails" :data="patients"  :columns="gridColumns"   :filter-key="searchQuery"  @empty="search" />
            <!-- <Grid :method="patientDetails" :data="paginate(patients,perPage, currentPage)"  :columns="gridColumns"   :filter-key="searchQuery"  @empty="search" /> -->
            
        </section>

        <!-- Pagination -->
        <div class="flex justify-center my-5">
            <!-- {{this.getTotalData}} -->
          <Pagination :totalData="getTotalData" :per-page="perPage" :current-page="currentPage"
              @pagechanged="onPageChange" />
        </div>
       
        
    
        
        <RegisterPatient v-if="openModal" @close="closeModal"  />
        
    </div>
</template>

<script>
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
            this.$store.dispatch("fetchPatients" , query);
             
        },
      watch: {
        '$store.state.patients': function() {
          
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
            // '$store.state.totalPatient': function() {

            //     this.totalData = this.$store.state.totalPatient;

          
            // },
           
    },
    computed: {
        getTotalData() {
            return this.$store.state.totalPatient;
        },
    },
  
        data() {
            return {
                searchQuery: '',
                gridColumns: {
                    id: 'patient ID',
                    name : 'name',
                    dob:'age',
                    phone: 'contact',
                    // nid:'nid',
                    gender: 'sex',
                    // address:'address',
                    createdAt: 'registration date'
                },
                
                totalData:0,
                text:'',
                currentPage: 1,
                perPage: 10,
                openModal: false,  
                patients:[],

            }
        },

        methods: {
            search(bool){
                
                if (bool) {
                     const query = {
                    currentPage: this.currentPage,
                    perPage: this.perPage,
                    text: this.searchQuery
                }
             
                    this.$store.dispatch("fetchPatients" , query);
                    
                   
                    
                }
               
            },
          
            onPageChange(page) {
               
                this.currentPage = page;
                this.patients = [];

                

                const query = {
                currentPage: this.currentPage,
                perPage: this.perPage,
                text: this.searchQuery
            } 
                this.$store.dispatch("fetchPatients" , query);
               
            },
           
             calculateAge(birthYear){
                let ageDifMs = Date.now() - new Date(birthYear).getTime();
                const ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970) + ' years';
            },
           
            toggle() {
                this.open = !this.open
            },
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