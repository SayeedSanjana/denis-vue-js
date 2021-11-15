<template>
    <div>
        <div class="container md:flex md:items-center md:justify-center text-gray-600  bg-regal-white border border-regal-cyan border-opacity-20 py-3 border-b-0">
            <div class="m-0.5 text-regal-teal font-medium"  v-if="!this.existingPatient">
                Create Appointment
            </div>
            <div class="m-0.5 text-regal-teal font-medium" v-else>
                Patient List
            </div>
        </div>


<div v-if="!this.newPatient && !this.existingPatient">
<div class="flex justify-center items-center mt-5 " @click="existPat">
  <div class="flex flex-col justify-between w-72 sm:w-72 h-72 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer border border-gray-500">
    <div class="flex justify-between items-center ml-4 pr-8">
      Existing Patient
      <!-- <div class="bg-red-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Some information</div>
      <div class="bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">%</div> -->
    </div>
    <!-- <div class="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
      <h3 class="text-xl font-bold pb-2">Happy Nowruz 1400</h3>
      <p class="truncate text-gray-500 text-sm">Nowruz is the Persian New Year, which begins on the Spring equinox, marking the first day of Farvardin, the first month of the Iranian solar calendar.</p>
      <div class="flex justify-between items-center">
        <span class="text-gray-400 text-xs">Have a nice year...</span>
      </div>
    </div> -->
  </div>
</div>
<div class="flex justify-center items-center mt-5"  @click="newPat">
  <div class="flex flex-col justify-between w-72 sm:w-72 h-72 bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer border border-gray-500">
    <div class="flex justify-between items-center ml-4 pr-8">
         New Patient
    </div>
  </div>
</div>
</div>
<div v-else>
    <div v-if="this.existingPatient && !this.newPatient">
        <PatientList/>
    </div>
    <div v-if="!this.existingPatient && this.newPatient"></div>
    <NewAppointment/>
</div>

    </div>
</template>

<script>
import PatientList from "../Appointment/PatientList.vue";
import NewAppointment from "../Appointment/NewAppointment.vue";
    export default {
        components:{
           PatientList,
           NewAppointment
        },
    data(){
     return{
      existingPatient:false,
      newPatient:false
     }
    },
    methods:{
        existPat(){
        this.existingPatient=true
        this.newPatient=false
        },
        newPat(){
        this.existingPatient=false
        this.newPatient=true
        }
      }
        
    }
    
</script>

<style lang="scss" scoped>

</style>