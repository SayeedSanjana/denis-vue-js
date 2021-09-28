<template>
    <div>
         
         <!--Modal Prescription-->
          
         <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <!--content-->
      <div class="mt-5">
        <!--body-->
        <div class="text-center  flex-auto justify-center">
              
            <div class="flex justify-end">
            <button @click="removeModalBill">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
            </button>
            </div>
            <div class="flex justify-start px-2 mb-5">
            <button @click="print" class="button" > Save 
            </button>
            </div>

            <!--main content-->
            <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  dark:bg-gray-800"   id="print">

                
        <div class=" mb-4 flex justify-between">
             <div class=" mb-6  w-full text-left flex justify-start">
            <div>
            <div class="font-semibold text-sm text-gray-700 "> Date: 
                    <span
                        class="text-md font-medium text-indigo-500 ml-2 ">23rd Sept 2020</span></div>
            <div class="font-semibold text-sm text-gray-700 inline-flex"> PatientName: 
                   <span class="text-md font-medium text-indigo-500 ml-2 ">IktisadRashid</span></div>
                        
                <div class="text-gray-700 font-semibold text-sm ">Contact:<span
                        class="text-md font-medium ml-2">01712221603</span> </div>


            </div>
            

        </div>
            <!-- <div>
                <button class="text-indigo-500 mr-3">Print Bill</button>
            </div> -->

        </div>
         <!--Services List-->
          
            <div class="flex justify-between w-full">
            <div
                class="tracking-widest text-md title-font font-bold text-gray-600  border-b border-gray-300 pb-1 pt-2 ">
                Services List:
            </div>
            </div>
         
        <div>
            <div class="flex justify-center items-center mt-3">
                
              <table class="text-left w-full border table-auto  ">
                  <thead class="text-center text-gray-800 border-b-2 border-gray-300 text-sm text-gray-400">
                      <th class="px-4 py-3">Date</th>
                      <th class="px-4 py-3  ">Treatment Plan</th>
                      <th class="px-4 py-3  ">Cost</th>
                    
                    
                  </thead>

                   <tbody class="" >
                  <tr class="bg-white  border border-gray-300 hover:bg-gray-100 text-center"
                    v-for="item in form.items"  :key="item._id">
                      <td class="px-4 py-3 p-4  text-gray-500 font-bold uppercase text-sm">{{item.date.substring(0,10)}}</td>
                      <td class="px-4 py-3 text-gray-500 font-semibold uppercase text-sm  "> {{item.service}}</td>
                      
                      <td class="px-4 py-3 text-gray-500 font-bold uppercase text-sm ">{{item.cost}}</td>
                    
                      
                  </tr>
                   </tbody>


              </table>
  </div>
        
        </div>
         <!--Services List-->

         <!--Payment Description-->
         
            <div class="flex justify-between w-full mt-5">
            <div
                class="tracking-widest text-md title-font font-bold text-gray-600  border-b border-gray-300 pb-1 pt-2 ">
                Payment Description:
            </div>
            </div>
         
        <div>
            <div class="flex justify-center items-center mt-3">
                
              <table class="text-left w-full border table-auto ">
                  <thead class="text-center text-gray-800 border-b-2 border-gray-300 text-sm text-gray-400">
                      <th class="px-4 py-3">Date</th>
                      <th class="px-4 py-3 ">Paid</th>
                      <th class="px-4 py-3 ">Payment</th>
                    
                    
                  </thead>

                   <tbody class="" >
                  <tr class="bg-white  border border-gray-300 hover:bg-gray-100 text-center"
                    v-for="item in form.payment"  :key="item._id">
                      <td class="px-4 py-3 p-4  text-gray-500 font-bold uppercase text-sm">{{item.date.substring(0,10)}}</td>
                      <td class="px-4 py-3 text-gray-500 font-bold uppercase text-sm  "> {{item.paid}}</td>
                      
                      <td class="px-4 py-3 text-gray-500 font-bold uppercase text-sm ">{{item.paymentMethod}}</td>
                    
                      
                  </tr>
                   </tbody>


              </table>
  </div>
        
        </div>
         <!--Payment Description-->

        <div class="mt-6">
            <hr>
            </div>
         <!--Payment Info-->
         <div class="flex justify-end " >
           <div class="py-8 mr-8 ml-auto mt-0 w-full sm:w-2/4 lg:w-1/4">
			<div class=" justify-between mb-3">
				<div class="text-indigo-400 text-sm text-right flex font-bold uppercase "><span  class="ml-5 mt-2">TotalCost</span> <span class="text-lg rounded ml-2 text-gray-400 "><span class="text-lg ml-2" >&#2547;</span>{{this.totalCost}}</span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
            <div class=" justify-between mb-3">
				<div class="text-indigo-400 text-sm text-right flex font-bold uppercase "><span  class="ml-5 mt-2">TotalPaid</span> <span class="text-lg rounded ml-2 text-gray-400 "><span class="text-lg ml-2" >&#2547;</span>{{this.totalPaid}}</span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			
            <div class=" justify-between mb-3" v-if="this.discount>0">
				<div class="text-indigo-400 text-sm text-right flex font-bold uppercase "><span  class="ml-5 mt-2">Discount</span> <span class="text-lg  ml-2 text-gray-400"><span class="text-lg ml-2" >&#2547;</span>{{this.discount}}</span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
            <div class=" justify-between mb-3" v-if="this.discount>0">
				<div class="text-indigo-400 text-sm text-right flex font-bold uppercase"><span  class="ml-5 mt-2">Adjustment</span> <span class="text-lg  ml-2 text-gray-400"><span class="text-lg ml-2" >&#2547;</span>{{this.totalCost-this.discount}}</span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			<div class=" justify-between mb-3">
				<div class="text-indigo-400 text-sm text-right flex font-bold uppercase "><span  class="ml-5 mt-2 mr-2">Balance</span><span class="text-sm ml-1 text-gray-400 mt-2 ">(due)</span> <span class="text-lg rounded ml-2 text-gray-400 "><span class="text-lg ml-2" >&#2547;</span>{{this.balance}}</span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			
			
		
			
		</div>

       </div>
         <!--Payment Info-->
           
        
        </section>

            <!--main content--> 
        </div>
       
      </div>
    </div>
  </div>
           
         <!--Modal Prescription-->

    </div>
</template>

<script>
//import printJS from "print-js"
import axios from "axios"
import swal from "sweetalert"
    export default {
        props:{
            form:Object,
            totalCost:Number,
            totalPaid:Number,
            balance:Number,
            discount:Number

        },
        methods:{
            removeModalBill(){
                   this.$emit("billEvent")
            },
            async print(){
                    
            await axios.post('billings/create', this.form 
      //  {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}}
        )
          .then((response) => {
            console.log(response)
              const id=this.$route.params.id
                   swal({title: "Success", text: "Bills created Successfully!", icon: 
                    "success" , timer: 2000, buttons: false}).then(function(){
                          new Promise(resolve => setTimeout(resolve, 2000));
                          window.location = `/specific-billing/${id}`;
                    })

          })
          .catch((error) => {
            console.log(error)
          })
            
             
                // printJS({
                //     printable:"print",
                //     type:'html',
                //     targetStyles:['*'],
                //     style:['*'],
                //     maxWidth:800,
                //     gridStyle:'border: 1px solid lightgray; margin-bottom: -1px;',
                //     header:['Invoice']
                    
                // })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>