<script>



    export default {
      props:{
        pendingList: {
          type: Array,
        },
      }
       
        
    }
</script>


<template>

<section class=" my-4">
    
  <div v-if="pendingList.length > 0" class=" grid grid-cols-3 gap-4 font-semibold text-gray-700">
  
    <div class=" -m-4" v-for="(item,index) in pendingList" :key="index" @click="$emit('viewBill', index)">
      <div class=" p-4">
          <div class="border border-gray-200 bg-white p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-200  mb-4">
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13 11C10.24 11 8 13.24 8 16C8 18.76 10.24 21 13 21C15.76 21 18 18.76 18 16C18 13.24 15.76 11 13 11ZM14.65 18.35L12.5 16.2V13H13.5V15.79L15.35 17.64L14.65 18.35V18.35ZM14 2H10.82C10.4 0.84 9.3 0 8 0C6.7 0 5.6 0.84 5.18 2H2C0.9 2 0 2.9 0 4V19C0 20.1 0.9 21 2 21H8.11C7.51837 20.4258 7.03708 19.7479 6.69 19H2V4H4V7H12V4H14V9.08C14.71 9.18 15.38 9.39 16 9.68V4C16 2.9 15.1 2 14 2ZM8 4C7.45 4 7 3.55 7 3C7 2.45 7.45 2 8 2C8.55 2 9 2.45 9 3C9 3.55 8.55 4 8 4Z"
                          fill="white" />
                  </svg>

              </div>
              <div class="flex justify-between">
                  <h2 class="text-sm flex items-start text-regal-teal font-semibold title-font mb-2">{{item.patientName}},  <span class="px-2 font-semibold "> {{item.patientContact}}</span></h2>
                  <h2 class="text-sm flex items-start text-regal-teal font-semibold title-font mb-2">{{item.doctor}} </h2>

              </div>
              <p class="flex justify-end  text-gray-500 text-sm">Prescription Created At - <span class="italic font-semibold text-regal-teal"> {{new Date(item.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</span></p>
          </div>
      </div>

     
  
    </div>
  </div>
  <div v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Pending Bills</div>
</section>

</template>


<style scoped>

</style>