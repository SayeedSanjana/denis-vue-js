<template>
    <div>
        <div v-if="!this.PresList && !this.TreatList && !this.XRayList && !this.VisList && !this.MedList">
        <div class="flex justify-between mt-4">
          <div class=" md:w-1/3 w-full flex justify-center">
            <div @click="patientPresList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer ">
             Prescriptions
            </div>
          </div>
            <div class=" md:w-1/3 w-full flex justify-center">
           <div @click="patienttreatList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer">
             Treatment History
            </div>
          </div>
           <div class="md:w-1/3 w-full flex justify-center">
           <div @click="patientXRAYList" class="bg-regal-white  border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer ">
             X-RAY
            </div>
          </div>
        </div>
        <div class="flex  mt-4"  >
          <div class=" md:w-1/3 w-full  flex justify-center">
            <div @click="patientVisList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer">
             Visit History
            </div>
          </div>
            <div class="md:w-1/3 w-full flex justify-center">
           <div  @click="patientMedList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer">
            Medicine History
            </div>
          </div>
         
            </div>
        <!-- </div> -->
          </div> 
        <div v-else>
            <div v-if="PresList">
              <PrescriptionList  @dashboard="dashboard"/>
            </div>
            <div v-if="TreatList">
              <TreatmentHistoryList  @dashboard="dashboard"/>
            </div>
            <div v-if="XRayList">
              <XRayHistoryList  @dashboard="dashboard"/>
            </div>
            <div v-if=" VisList">
              <VisitingHistoryList  @dashboard="dashboard"/>
            </div>
            <div v-if="MedList">
              <MedicineHistoryList  @dashboard="dashboard"/>
            </div>
        </div>
    </div>
        
</template>

<script>
import PrescriptionList from "../DoctorsPortal/PrescriptionList.vue";
import TreatmentHistoryList from "../DoctorsPortal/TreatmentHistoryList.vue";
import XRayHistoryList from "../DoctorsPortal/XRayHistoryList.vue";
import VisitingHistoryList from "../DoctorsPortal/VisitingHistoryList.vue";
import MedicineHistoryList from "../DoctorsPortal/MedicineHistoryList.vue";
    export default {
        components:{
          PrescriptionList,
          TreatmentHistoryList,
          XRayHistoryList,
          VisitingHistoryList,
          MedicineHistoryList
        },
        data(){
            return{
            PresList:false,
            TreatList:false,
            XRayList:false,
            VisList:false,
            MedList:false
            }
        },
        methods:{
            patientPresList(){
            this.PresList=true,
            this.TreatList=false,
            this.XRayList=false,
            this.VisList=false,
            this.MedList=false
            },
            patienttreatList(){
            this. PresList=false,
            this.TreatList=true,
            this.XRayList=false,
            this.VisList=false,
            this.MedList=false
            },
            patientXRAYList(){
            this.PresList=false,
            this.TreatList=false,
            this.XRayList=true,
            this.VisList=false,
            this.MedList=false
            },
            patientVisList(){
            this. PresList=false,
            this.TreatList=false,
            this.XRayList=false,
            this.VisList=true,
            this.MedList=false
            },
            patientMedList(){
            this. PresList=false,
            this.TreatList=false,
            this.XRayList=false,
            this.VisList=false,
            this.MedList=true
            },
            dashboard(){
            this.PresList=false,
            this.TreatList=false,
            this.XRayList=false,
            this.VisList=false,
            this.MedList=false
            },

        }
    }
</script>

<style lang="scss" scoped>

</style>