<template>
    <section>
     <div >
        
              <table class="w-full   bg-gray-200 text-gray-800 table-auto  ">
                  <thead class="text-center text-gray-800 border-b-2 border-gray-300 text-sm">
                      <th class="px-4 py-3">Name</th>
                      <th class="px-4 py-3">Duration</th>
                      <th class="px-4 py-3">Frequency</th>
                      <th class="px-4 py-3">Relation with Meals</th>
                      <th class="px-4 py-3"></th>
                  </thead>

                   <tbody class="" >
                  <tr class="bg-white  border border-gray-300 hover:bg-gray-100"
                      v-for="(item,index) in med " :key="index">

                      <td class="px-4 py-3  ">{{item.name}}</td>
                      <td class="px-4 py-3">{{item.duration}}</td>
                      <td class="px-4 py-3">{{item.frequency}}</td>
                      <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                      <td class="flex justify-center items-center p-2">
                      <button @click=" deletemed(index)"
                        class="p-0 w-5 h-5 mt-1 flex justify-center items-center  ">
                         <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 496.158 496.158" style="enable-background:new 0 0 496.158 496.158;" xml:space="preserve">
<path style="fill:#E04F5F;" d="M0,248.085C0,111.063,111.069,0.003,248.075,0.003c137.013,0,248.083,111.061,248.083,248.082
	c0,137.002-111.07,248.07-248.083,248.07C111.069,496.155,0,385.087,0,248.085z"/>
<path style="fill:#FFFFFF;" d="M383.546,206.286H112.612c-3.976,0-7.199,3.225-7.199,7.2v69.187c0,3.976,3.224,7.199,7.199,7.199
	h270.934c3.976,0,7.199-3.224,7.199-7.199v-69.187C390.745,209.511,387.521,206.286,383.546,206.286z"/>

</svg>

                       
                       
                    </button>
                      </td>
                  </tr>
                   </tbody>


              </table>
             </div>
             
             
    </section>
</template>

<script>
    export default {
       props:{
            med:Array
        },
        data(){
            return{
                meds:[]

            }
        },

        methods:{
            addMed(){
               this.meds = [...this.med]
            },

           deletemed(index){
               console.log(index)
               console.log(this.med)
                
          this.med.splice(index,1)
           }
        }
       
        
        
    }
</script>