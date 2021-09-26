<template>
    <div>

    <section class="text-gray-600 body-font ">
            
               
                
           <div class="container  md:px-5 mx-auto mb-5">
               <div class="mt-5  ">
           
          

       <div v-if="treatmentList.length>=1">
            <div class="divide-x-2 mb-3" v-for="tr in filteredList" :key="tr"><!--loop-->
            
            <div class="px-2 mb-3" >
                <div class="font-semibold title-font text-gray-700 text-left">Dr. {{tr.doctorName}} </div>
            </div>

             <div class="px-7 " >
                 <div class="mt-1 text-indigo-500 title-font font-bold text-left ">{{tr.createdAt.substring(0,10)}}</div>
            </div>

            <div class="px-12 mt-2 text-left"> <p class="leading-relaxed"> <pre>{{tr.treatmentDone}}</pre></p>
            </div>
            <hr />
            </div><!--loop-->
             <div class=" px-40 flex mt-5">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"  @click="changePage(1)">Next </button>
           

            </div>
               
            </div>
            <div v-else>
                 <div
         class="bg-indigo-200 px-6 py-4  my-4 rounded-md text-lg mx-auto flex items-center "
         >
      <svg class="h-6 w-6 fill-current text-indigo-400 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
    <div>
      <p class="font-bold text-gray-700">No Past Treatments</p>
     
    </div>
    </div>
            </div>

            

            </div>

              
          
           </div>


           
    
</section>

    </div>
</template>

<script>
    export default {
        props:{
          treatmentList: Array
          },
          data(){
              return{
                    prePage: 5,
                currentPage: 1,
              }
          },
           computed:{ 
         filteredList() {
     
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
    
      const result = this.treatmentList.slice(star, end)
      return result
    }},
    methods:{
         changePage(num) {
      
            this.currentPage = this.currentPage + num
             },
    },
    }
</script>

<style lang="scss" scoped>
</style>