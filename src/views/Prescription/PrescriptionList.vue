<script>
import axios from "axios";
import PrescriptionItems from "./_PrescriptionItems.vue";

import Preview from "./_Preview.vue"
    export default {
        components: {
            PrescriptionItems,
          
            Preview
        },
        data(){
            return{
              
                prescriptions: [],
                index: null,
               
             
                
            }
        },
       
       
        created() {
            this.getPrescription(this.$route.params.id);
            },

        methods: {
            
            async getPrescription() {
               
                try {
                    const response = await axios.get('/prescriptions/?pid=' + this.$route.params.id)
                    this.prescriptions = response.data.data;
                  
                } catch (error) {
                    console.log(error);
                }
            },
            openPrescription(index){
                this.index = index;
        
            },

        }, 
      
    }
</script>


<template>
    
    <div  class=" flex justify-between p-4">
        
        <div class="w-1/3 bg-gray-50">

            <div class="flex justify-between  bg-gradient-to-l from-green-200 to-emerald-100 border-r-2 border-emerald-600 shadow-sm  p-3 ">
                    <label class="mx-5 text-regal-teal text-xl font-semibold">Prescription List</label>

                    <router-link :to="{name: 'Prescription'}">
                        <img src="@/assets/svgs/plus.svg" alt="" srcset="" class="pointer-events-none w-6 h-6 ">
                    </router-link>
                 
            </div>

            
            <PrescriptionItems :prescriptions="prescriptions" @view-prescription= "openPrescription" :index="index"/>
        </div>
     
      
           
        
        <div class="w-2/3  bg-gray-50 mx-4">
          

            <Preview v-if="prescriptions[index]" :form="prescriptions[index]"  />
           <div v-else class=" grid place-content-center my-52">
             <img src="@/assets/images/empty-state.png" alt="" srcset="">
             <p class="text-gray-500">No Prescription Selected.</p>
             <p class="text-gray-500">Please select a prescription in the list to the left.</p>
           </div>
        </div>
    </div>

    
</template>


<style scoped>

</style>