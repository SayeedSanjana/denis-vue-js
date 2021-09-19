<template>
    <div>
      
        
       
    <div class=" p-2 w-full" v-if="!changecomponent"> <!--form-->
    <div class="px-8 flex justify-center items-center" v-if="this.Bills.length >= 1" >
        
            <!--items-->
            <ul>
          
            <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3" >

                  <div class=""  v-for="bill in this.Bills" :key="bill" @click="patientBill(bill._id)">
                    <li class="border-gray-400 flex justify-center mt-6 items-center  mb-2 shadow-md"   >
          <div class="select-none cursor-pointer bg-white rounded-md  items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm" >
           
            <!-- <div class="flex-1 pl-1 mr-16 "> -->
              <div class="font-semibold text-gray-800 pl-6 pr-6">{{bill.createdAt.substring(0, 10)}}</div>
              <div class="font-semibold text-gray-800 pl-6 pr-6"><span class="text-gray-600">Invoice: </span>{{bill._id.substring(bill._id.length - 7)}}</div>
             
            <!-- </div> -->
          </div>
        </li>
                  </div>


            </div>
            </ul>
        
    </div> <!--form-->

    <!-- Alert Info -->
    <div v-else class="flex-row w-full">
       <div class=" flex items-center justify-center  ">
  <div class="w-full  ">
    
    
    
    <div
         class="bg-indigo-200 px-4 py-4  my-4 rounded-md text-lg mx-auto flex items-center "
         >
      <svg class="h-6 w-6 fill-current text-indigo-400 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg>
    <div>
      <p class="font-bold text-gray-700">No Past Bills</p>
     
    </div>
    </div>
    
  </div>
</div>
</div>
    <!-- End Alert Info -->
    </div>

    <div v-if="changecomponent" >
    <PastBillView :changecomponent="changecomponent" :billId="billId"/>
    <div class="flex justify-end mr-6 mt-6">
      <button @click="change()" class="button">Back to Past Bill List</button>
  </div>
        
  
    
</div>
    </div>
</template>
<script>
import axios from "axios";
import PastBillView from "../Billing/PastBillView.vue";
    export default {

      components:{
            PastBillView
      },
        created(){
             this.getBills(this.$route.params.id)
        },

        data(){
            return{
              changecomponent:false,
               
                Bills: [],
                billId:"",
                invoice:''
              
            }
        },
        methods:{
           
            patientBill(id){
              this.changecomponent=!this.changecomponent
              this.billId=id
            
            },
            change(){
              this.changecomponent=!this.changecomponent
            },
             getBills(id){
                axios.get('http://localhost:3000/api/billings/'+id+'/list-bills' ,
                 {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}}
                  )
                .then((response) => {
                   
                    this.Bills = response.data['result'];
                   
                })

                
                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retrieving data'
                })

            },
           
        }
    }
</script>

<style scoped>

</style>