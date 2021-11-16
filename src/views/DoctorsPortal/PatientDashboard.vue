<template>
    <div>
        <div v-if="!this.PresList && !this.TreatList && !this.XRayList && !this.VisList && !this.MedList">
        <div class="flex justify-between mt-4">
          <div class="xl:w-1/3 md:w-1/2 flex justify-center">
            <div @click="patientPresList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">
             Prescriptions
            </div>
          </div>
            <div class="xl:w-1/3 md:w-1/2 flex justify-center">
           <div @click="patienttreatList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">
             Treatment History
            </div>
          </div>
           <div class="xl:w-1/3 md:w-1/2 flex justify-center">
           <div @click="patientXRAYList" class="bg-regal-white  border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">
             X-RAY
            </div>
          </div>
        </div>
        <div class="flex  mt-4"  >
          <div class="xl:w-1/3 md:w-1/2 flex justify-center">
            <div @click="patientVisList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">
             Visit History
            </div>
          </div>
            <div class="xl:w-1/3 md:w-1/2 flex justify-center">
           <div  @click="patientMedList" class="bg-regal-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-regal-light-green hover:bg-opacity-20 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ">
            Medicine History
            </div>
          </div>
         
            </div>
        <!-- </div> -->
          </div> 
        <div v-else>
            <div v-if="PresList">
              <PrescriptionList/>
            </div>
        </div>
    </div>
        
</template>

<script>
import PrescriptionList from "../DoctorsPortal/PrescriptionList.vue";
    export default {
        components:{
          PrescriptionList
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
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>