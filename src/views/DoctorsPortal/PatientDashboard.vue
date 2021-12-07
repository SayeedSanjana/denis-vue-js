<template>
    <div>
        <div v-if="!this.PresList && !this.TreatList && !this.XRayList && !this.VisList && !this.MedList">
        <div class="flex justify-between mt-8">
          <div class=" md:w-1/3 w-full flex justify-center">
          <div  @click="patientPresList" class="bg-white border border-regal-blue shadow-sm border-opacity-30 p-6 rounded-lg h-48  w-48 hover:bg-regal-white hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer" >
            <div class="flex items-center justify-center" >
             <img class="w-24 h-24" src="@/assets/svgs/PrescriptionDashboard.svg">
            </div>
            <p class="text-regal-teal font-semibold py-3">Prescriptions</p>
          </div>
          </div>
            <div class=" md:w-1/3 w-full flex justify-center">
            <div  @click="patienttreatList" class="bg-white border border-regal-blue shadow-sm border-opacity-30 p-6 rounded-lg h-48  w-48 hover:bg-regal-white hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer" >
            <div class="flex items-center justify-center" >
             <img class="w-24 h-24" src="@/assets/svgs/TreatmentDashboard.svg">
            </div>
            <p class="text-regal-teal font-semibold py-3">Treatment History</p>
          </div>
          </div>
           <div class="md:w-1/3 w-full flex justify-center">
           <div  @click="patientXRAYList" class="bg-white border border-regal-blue shadow-sm border-opacity-30 p-6 rounded-lg h-48  w-48 hover:bg-regal-white hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer" >
            <div class="flex items-center justify-center" >
             <img class="w-24 h-24" src="@/assets/svgs/XRAYDashboard.svg">
            </div>
            <p class="text-regal-teal font-semibold py-3">X Ray</p>
          </div>
          </div>
        </div>
        <div class="flex  mt-4"  >
           <div class="md:w-1/3 w-full flex justify-center">
           <div  @click="patientVisList" class="bg-white border border-regal-blue shadow-sm border-opacity-30 p-6 rounded-lg h-48  w-48 hover:bg-regal-white hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer" >
            <div class="flex items-center justify-center" >
             <img class="w-24 h-24" src="@/assets/svgs/VisitDashboard.svg">
            </div>
            <p class="text-regal-teal font-semibold py-3">Visit History</p>
          </div>
          </div>
            <div class="md:w-1/3 w-full flex justify-center">
            <div  @click="patientMedList" class="bg-white border border-regal-blue shadow-sm border-opacity-30 p-6 rounded-lg h-48  w-48 hover:bg-regal-white hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm cursor-pointer" >
            <div class="flex items-center justify-center" >
             <img class="w-24 h-24" src="@/assets/svgs/MedicineDashboard.svg">
            </div>
            <p class="text-regal-teal font-semibold py-3">Medicine History</p>
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