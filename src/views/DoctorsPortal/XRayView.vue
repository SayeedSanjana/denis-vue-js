<template>
  <div>
      <!-- title starts here -->
      <div class="mt-12 text-left text-regal-teal font-semibold text-xs mx-12 tracking-widest">
          X-Ray History > Details
      </div>
       <!-- title ends here -->
       <!-- back button starts here -->
       <div class="mt-4 mb-2 py-1 px-3 flex justify-end mx-10">
          <button class="py-2.5 px-5 text-regal-teal font-semibold  text-xs flex bg-regal-light-blue" @click="backToList()">
            <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#005072" /></svg>
            Back
          </button>
          <!-- back button ends here -->
        </div>
       <!-- X-Ray description starts here -->
       <div class="bg-regal-white mx-12 py-4">
           <div class="mt-12 text-left text-regal-teal font-semibold mx-12">
                X-Ray Information
           </div>
          <div class="lg:flex shadow-md border border-regal-blue border-opacity-30 justify-center mx-12 my-6 bg-white h-38 ">
            <!-- left portion info of the card starts here -->
            <div class="bg-regal-blue rounded-br-4xl py-4  shadow-inner text-regal-teal lg:w-1/3 px-4 ">   
                <div class="text-sm  text-left mb-1 ">Patient ID</div>
                <div class=" text-sm text-left mb-1 ">Treatment date</div>
                <div class="text-sm text-left mb-1 ">Report Collection date</div>
                <div class=" text-sm text-left mb-1 ">Treatment Name</div>
                <!-- <div class="text-sm text-left  mb-1 ">Reason</div> -->
            </div>
            <!-- left portion info of the card starts here -->

            <!-- right portion info of the card starts here -->
            <div class=" py-4 text-regal-black lg:w-2/3 px-4 ">
            <!-- x-ray summary starts here -->
              <div class="text-sm text-left mb-1 ">P-{{this.id.substring(this.id.length - 7)}}</div>
                <div class=" text-sm text-left  mb-1 ">November 20, 2021</div>
                <div class="text-sm text-left  mb-1 ">November 20, 2021</div>
                <div class=" text-sm text-left  mb-1 ">Tooth Extraction</div>
                <!-- <div class="text-sm text-left  mb-1 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div> -->
              <!-- x-ray summary ends here -->
            </div>
             <!-- right portion info of the card ends here -->
            
          </div>
          <!-- title -->
          <div class="mt-12 text-left text-regal-teal font-semibold  mx-12">
                X-Ray Preview
          </div>
           <!-- title -->

           <!-- Reason for xray starts here -->
          <div class="lg:flex mt-4 mx-12">
          <div class="text-left text-regal-teal font-semibold text-sm mr-4">
                Reason:
          </div>
           <div class="text-left text-regal-teal  text-sm">
             Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          </div>
            <!-- Reason for xray ends here -->
        
        <!-- image -->
           <div class="flex justify-between my-12 px-4" >
                <div class=" md:w-1/3 w-full flex justify-center">
                    <div class="bg-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center ">
                    Image
                    </div>
                </div>
                <div class=" md:w-1/3 w-full flex justify-center">
                    <div class="bg-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center">
                    Image
                    </div>
                </div>
                 <div class=" md:w-1/3 w-full flex justify-center">
                    <div class="bg-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center  ">
                    Image
                    </div>
                </div>
                    
           </div>
           
           <div class="flex justify-between my-12 px-4 " >
                <div class=" md:w-1/3 w-full flex justify-center">
                    <div class="bg-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center ">
                    Image
                    </div>
                </div>
                <div class=" md:w-1/3 w-full flex justify-center">
                    <div class="bg-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center">
                    Image
                    </div>
                </div>
                 <div class=" md:w-1/3 w-full flex justify-center">
                    <div class="bg-white border border-regal-blue border-opacity-30 p-6 rounded-lg h-32 w-48 flex items-center justify-center  ">
                    Image
                    </div>
                </div>                 
           </div>
            <!-- image -->
        </div>
        <!-- X-Ray description ends here -->         
  </div>
</template>


<script>
    export default {
        data(){
         return{
              id: this.$route.params.id
         }
        },
        methods:{
        backToList(){
          this.$emit("backToList")
      },

        }
    }
</script>

<style lang="scss" scoped>

</style>