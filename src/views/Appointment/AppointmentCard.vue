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

<!-- checking condition if both existingPatient and newPatient is false -->
<div v-if="!this.newPatient && !this.existingPatient">

<!-- Card for Existing Patient starts here -->
<div class="flex justify-center items-center mt-5   " @click="existPat()">
  <div class="flex flex-col justify-between w-72 sm:w-72 h-72 bg-white bg-center text-gray-800 shadow-lg overflow-hidden cursor-pointer  hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">
    <div class="flex justify-between items-center ml-4 pr-8">
        svg
    </div>
    <!-- card footer -->
        <div class="p-3 bg-regal-footer text-right border rounded-tl-3xl rounded-tr-3xl">
            <!-- button link -->
            <p class="text-sm text-regal-teal font-semibold py-3 md:px-8 px-4 rounded text-center">Existing Patient</p>
        </div>
  </div>
</div>
<!-- Card for Existing patient ends here -->

<!-- Card for new Patient starts here -->
<div class="flex justify-center items-center mt-5 "  @click="newPat()">
  <div class="flex flex-col justify-between w-72 sm:w-72 h-72 bg-white bg-center text-gray-800 shadow-lg overflow-hidden cursor-pointer  hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm">
    <div class="flex justify-between items-center ml-4 pr-8">
        svg
    </div>
    <!-- card footer -->
        <div class="p-3 bg-regal-footer text-right border rounded-tl-3xl rounded-tr-3xl ">
            <!-- button link -->
            <p class=" text-sm text-regal-teal font-semibold py-3 md:px-8 px-4 rounded  text-center" >New Patient</p>
        </div>
  </div>
</div>
<!-- Card for new Patient ends here -->
</div>

<!-- else condition-->
<div v-else> 
  <!-- Calling new appointment component -->
    <div v-if="this.existingPatient===false && this.newPatient===true">
      <NewAppointment @cancelEvent="formtoCard" :patientId="patientId"/>
    </div>
  <!-- Calling Patient list component -->
    <div v-else >
      <PatientList :patientList="patientID" @cancelEventPatient="formtoCard"  @newForm="newPat" />
    </div>
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
      newPatient:false,
      patientId:''
     }
    },
    methods:{
      // If existing patient card is clicked
        existPat(){
        this.newPatient=false
        this.existingPatient=true
        },

        // If new patient card is clicked
        newPat(){
        this.existingPatient=false
        this.newPatient=true
        },

      //  Method to come back to initial card design
        formtoCard(){
        this.existingPatient=false
        this.newPatient=false
        },
        patientID(id){
          this.patientId=id
          //console.log(this.patientId)
          this.existingPatient=false
          this.newPatient=true
        }
      }      
    }
    
</script>

<style lang="scss" scoped>

</style>