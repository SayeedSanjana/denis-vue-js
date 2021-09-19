<template>

    <div class="">
        
        <!--else-->
        <!-- <div>
       <ul class="list-reset flex border-b">
           <li class="-mb-px mr-1">
               <a class="border-b-2 border-transparent bg-white inline-block py-2 px-4 text-gray-700 hover:border-indigo-500 font-semibold" href="#">Bill.1</a>
           </li>
           <li class="mr-1">
               <a class="border-b-2 border-transparent bg-white inline-block py-2 px-4 text-gray-700 hover:border-indigo-500 font-semibold" href="#">Bill.2</a>
           </li>
           <li class="mr-1">
               <a class="border-b-2 border-transparent bg-white inline-block py-2 px-4 text-gray-700 hover:border-indigo-500 font-semibold" href="#">Bill.3</a>
           </li>
           <li class="mr-1">
               <a class="border-b-2 border-transparent bg-white inline-block py-2 px-4 text-gray-700 hover:border-indigo-500 font-semibold" href="#">Bill.4</a>
           </li>
           </ul>  
       </div> -->
        <!--tab-->

        <div class=" mb-4  w-full flex justify-between">
             <div class=" mb-6  w-full text-left flex justify-start">
            <div>
            <div class="font-semibold text-md text-gray-700  "> Date: 
                    <span
                        class="text-lg font-medium text-indigo-500  ">{{this.date}}</span></div>
            <div class="font-semibold text-md text-gray-700  "> Patient Name: 
                    <span
                        class="text-lg font-medium text-indigo-500">{{this.patientData.name}}</span></div>
                        
                <div class="text-gray-700 font-semibold text-md ">Contact: <span
                        class="text-lg font-medium">{{this.patientData.phone}}</span> </div>


            </div>
            

        </div>
            <div>
                <button class="button">Print Bill</button>
            </div>

        </div>

          

        <!--list-->
        <div class="" >
            <div class="flex justify-between w-full">
            <div
                class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 pb-1 pt-2 ">
                List of Services
            </div>
            <button class="text-gray-400 mr-4 font-bold hover:text-indigo-500 " @click="openModalService">+ Add More Services</button>
            </div>
            <BillItems :Bills="Bills" />
        </div>

        <!--list-->

        <!--Payment Methods-->
        <div class="" >
            <div class="flex justify-between w-full">
            <div
                class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 pb-1 pt-2 ">
                Payment Description
            </div>
            <button class="text-gray-400 mr-4 font-bold hover:text-indigo-500 " @click="openModalPayment">+ Add More Payment Info</button>
            </div>
            <PaymentMethods :Bills="Bills" />
        </div>

        <!--Payment Methods-->

        <div class="mt-4">
            <hr>
        </div>

      
            <div class="flex justify-between w-full">
                <!-- <div class="w-1/2  px-6 py-8 ml-6"><button class="text-gray-500 mr-4 font-bold hover:text-indigo-500 font-bold p-3" @click="openModalDiscount">+ Add Discount</button></div> -->
       <!--DISCOUNT-->
        <div>
               <form @submit.prevent>
                     <!-- <div class="tracking-widest text-lg title-font font-bold text-gray-500  mt-12">
                     Discount  
                     </div> -->
                     <!--discount-->
                       <div class="inline-flex items-center mt-12">
                <label for="" class="m-3 text-gray-800">Give discount in?</label>
<!--                 
                <input v-model="isPercentage" value="Amount" type="radio" id="Amount" name="isPercentage" checked="checked"
                    class="form-radio h-5 w-5 text-indigo-600"><span class="ml-2 mr-2 text-gray-700">Amount</span>
                    <input v-model="isPercentage" value="Percentage" type="radio" id="Percentage" name="isPercentage"
                    class="form-radio h-5 w-5 text-indigo-600"><span class="ml-2 mr-2 text-gray-700">Percentage</span> -->
                    
  <input type="radio" name="test_id" @change="onChange($event)" value="Amount" class="form-radio h-5 w-5 text-indigo-600 mr-2" ><span class="ml-2 mr-2 text-gray-700">Amount</span>
  <input type="radio" name="test_id" @change="onChange($event)" value="Percentage" class="form-radio h-5 w-5 text-indigo-600 mr-1"><span class="ml-2 mr-2 text-gray-700">Percentage</span>
                
            </div>
            
                    <div class="flex justify-center">
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200" for="discount">Discount Amount</label>
                            <input  @keypress="isNumber($event)" v-model.number="discountAmount" id="discount" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                        
                    </div>
                    <div>{{this.applyDiscount()}}</div>
            <!--discount-->
            <div v-if="this.str.length>=1">


                            <div class=" flex items-center mt-10 px-8">
                                <svg class="h-6 w-6 fill-current text-red-400 mr-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                <div>
                                    <p class="font-medium text-red-500">{{str}}</p>

                                </div>

                            </div>

                        </div>
                   


                      
                    <!--after discount-->

                    <!-- <div class="flex justify-start items-start ml-6" >
                            <div class="py-3 mr-3  mt-5  w-full sm:w-2/4 lg:w-1/4">
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Total:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-2xl" >&#2547;</span>{{this.Bills.total}}</span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Discount:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.discount}}</span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Adjustment:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.Bills.adjustment-this.discount}}</span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Balance:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.Bills.balance-this.discount}}</span> </div>
                                    <div class="w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                            </div>
                    </div> -->


                    <!--after discount-->
                    
                    
                        <div class="flex justify-center mt-8 " v-if="this.str.length==0">
                            <button @click="discountApply()" class="text-gray-400 font-bold hover:text-indigo-500">+ Apply Discount</button>
                        </div>

                    <!-- <div>Total: {{this.total}} </div> -->
                </form>


            
            <!--form-->
                
        </div>
          <!--DISCOUNT-->
        
        
        <div class="w-1/2 px-6 py-8 mr-6">
            <PaymentInfo :Bills="Bills" :discount="discount" />
            </div>
       
        </div>

        


        
         <!-- <div v-show="openModalSer"><ServicesModal :Bills="Bills"  :openModalSer=" openModalSer"/></div> -->

         <!--Modal Service-->
           <div v-show="openModalSer">
         <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <!--content-->
      <div class="mt-5">
        <!--body-->
        <div class="text-center  flex-auto justify-center">
                <!--item-->
<div class="flex justify-end">
            <button @click="removeSer">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
            </button>
            </div>
                 <form @submit.prevent>
                     <div class="tracking-widest text-lg title-font font-bold text-gray-500  border-b border-gray-300 ">
                     Add More Items
        <!-- {{this.$route.params.id}} -->

      </div>

                      <!--item list-->
                    <div v-show="this.items.length>=1">
                        <div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-3 pl-4 pr-3">
                             <div class="tracking-widest text-md title-font font-bold text-gray-500  border-b border-gray-300 pb-3 pt-2 flex justify-start">Items Added:</div>

                            <table class="text-left w-full border-collapse">

                                <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                                <thead>
                                    <tr>
                                        <th
                                            class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Date</th>
                                        <th
                                            class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Treatment Plan</th>
                                        <th
                                            class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Cost</th>
                                        <th
                                            class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="hover:bg-grey-lighter" v-for="(item,index) in items" :key="index">
                                        <td class="py-4 px-6 border-b border-grey-light">{{item.date.substring(0,10)}}
                                        </td>
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            {{item.service}}
                                            <!-- <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a> -->
                                        </td>
                                        <td class="md:py-4 md:px-6 border-b border-grey-light">{{item.cost}}</td>
                                        <td class="md:py-4 md:px-6 border-b border-grey-light">
                                            <button class="px-4 py-2 mt-2" @click="deleteItems(index)">
                                                <svg class="w-7 h-7 " height="512pt" viewBox="0 0 512 512" width="512pt"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                                                        fill="#f44336" />
                                                    <path
                                                        d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                                                        fill="#fafafa" /></svg>
                                            </button>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>


                    </div>
                    <!--item-list-->
                      <!--cost-->
                    <div class="flex justify-end " v-show="this.items.length>=1">
                        <div class="py-8 mr-8 ml-auto mt-5  w-full sm:w-2/4 lg:w-1/4">
                            <div class=" justify-between mb-3">
                                <div class="text-gray-400 text-md text-right flex font-bold uppercase "><span
                                        class="ml-5 mt-2">Total Cost:</span> <span
                                        class="text-lg rounded ml-2 text-gray-500 "><span class="text-2xl" >&#2547;</span>{{this.totalCost}}</span> </div>
                                <div class="text-right w-40">
                                    <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                </div>
                            </div>
                            <div class=" justify-between mb-3">
                                <div class="text-gray-400 text-md text-right flex font-bold uppercase "><span
                                        class="ml-5 mt-2">Balance:</span> <span
                                        class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{Bills.balance}}</span> </div>
                                <div class="text-right w-40">
                                    <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                </div>
                            </div>
                            <div class=" justify-between mb-3">
                                <div class="text-gray-400 text-md text-right flex font-bold uppercase"><span
                                        class="ml-5 mt-2">Sub-Total:</span> <span
                                        class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.subtotal}}</span> </div>
                                <div class="text-right w-40">
                                    <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                </div>
                            </div>




                        </div>

                    </div>
                    <!--cost-->
                    <!--items-->


                    <div class="lg:grid lg:grid-cols-1 lg:gap-6 lg:mt-4 lg:grid-cols-4">
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="date">Date</label>
                            <input v-model="item.date" id="date" type="date"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="services">Treatment Plan</label>
                            <input v-model="item.service" id="date" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>

                        <div>
                            <label class="text-gray-700 dark:text-gray-200" for="cost">Cost</label>
                            <input  @keypress="isNumber($event)" v-model.number="item.cost" id="cost" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>

                        <div class="flex justify-center">

                            <button class="px-4 py-2 mt-2" @click="addNewItems()">
                                <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                    width="48px" height="48px">
                                    <path fill="#4caf50"
                                        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                                    <path fill="#fff" d="M21,14h6v20h-6V14z" />
                                    <path fill="#fff" d="M14,21h20v6H14V21z" /></svg>
                            </button>

                            <!-- <button class="px-4 py-2 mt-2" @click="deleteItems(index)" v-show="index||(!index && this.form.items.length>1)">
             <svg class="w-7 h-7 " height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
              </button>-->

                        </div>


                    </div>
                    <!--items-->
                   

                  

                    <div class="flex justify-center mt-10 ">
                        <button @click="addItems()" class="button">Add Services</button>
                    </div>

                    <!-- <div>Total: {{this.total}} </div> -->
                </form>


            
            <!--form-->

                <!--item-->
        </div>
        <!--footer-->
        <!-- <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
        </div> -->
      </div>
    </div>
  </div>
           </div>
         <!--modal service-->



         
         <!--Modal payment-->
           <div v-show="openModalPay">
         <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <!--content-->
      <div class="mt-5">
        <!--body-->
        <div class="text-center  flex-auto justify-center">
                <!--payment-->
 <div class="flex justify-end">
            <button @click="removePay">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
            </button>
            </div>
                 <form @submit.prevent>
                     <div class="tracking-widest text-lg title-font font-bold text-gray-500  border-b border-gray-300 ">
                     Add Payment Information
        <!-- {{this.$route.params.id}} -->

      </div>

                        <!--payment list-->
                        <div v-show="this.payments.length>=1">
                            <div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-3">
                                <table class="text-left w-full border-collapse">
                                    <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
                                    <thead>
                                        <tr>
                                            <th
                                                class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Date</th>
                                            <th
                                                class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Paid</th>
                                            <th
                                                class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Payment Method</th>
                                            <th
                                                class="md:py-4 md:px-6 text-gray-400 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter" v-for="(item,index) in payments" :key="index">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.date.substring(0,10)}}</td>
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.paid}}
                                                <!-- <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</a>
            <a href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</a> -->
                                            </td>
                                            <td class="md:py-4 md:px-6 border-b border-grey-light">
                                                {{item.paymentMethod}}</td>
                                            <td class="md:py-4 md:px-6 border-b border-grey-light">
                                                <button class="px-4 py-2 mt-2" @click="deletePayments(index)">
                                                    <svg class="w-7 h-7 " height="512pt" viewBox="0 0 512 512"
                                                        width="512pt" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                                                            fill="#f44336" />
                                                        <path
                                                            d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                                                            fill="#fafafa" /></svg>
                                                </button>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <!--payment-list-->
                      
                        <!--paid-->
                        <div class="flex justify-end " v-show="this.payments.length>=1">
                            <div class="py-8 mr-8 ml-auto mt-5  w-full sm:w-2/4 lg:w-1/4">
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md text-right flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Total Paid:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-2xl" >&#2547;</span>{{this.totalPaid}}</span> </div>
                                    <div class="text-right w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md text-right flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Balance:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.afterPaid}}</span> </div>
                                    <div class="text-right w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <!-- <div class=" justify-between mb-3">
				<div class="text-gray-400 text-md text-right flex font-bold uppercase"><span  class="ml-5">Sub-Total:</span> <span class="text-lg  ml-2 text-gray-600">{{this.subtotal}}</span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div> -->




                            </div>

                        </div>
                        <!--paid-->
                     <!--payment-->

                        <div class="lg:grid lg:grid-cols-1 lg:gap-6 lg:mt-4 lg:grid-cols-4">
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="date">Date</label>
                                <input v-model="payment.date" id="date" type="date"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                            </div>
                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="paid">Paid</label>
                                <input  @keypress="isNumber($event)" v-model.number="payment.paid" id="date" type="text"
                                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                            </div>

                            <div>
                                <label class="text-gray-700 dark:text-gray-200" for="cost">Payment Method</label>
                                <div class="relative">
                                    <select
                                        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 mt-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="paymentMethod" v-model="payment.paymentMethod">

                                        <option v-for="f in paymentMethods" :key="f._id">{{f}}</option>

                                    </select>
                                    <div
                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center">

                                <button class="px-4 py-2 mt-2" @click="addNewPayments()">
                                    <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                        width="48px" height="48px">
                                        <path fill="#4caf50"
                                            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" />
                                        <path fill="#fff" d="M21,14h6v20h-6V14z" />
                                        <path fill="#fff" d="M14,21h20v6H14V21z" /></svg>
                                </button>

                                <!-- <button class="px-4 py-2 mt-2" @click="deleteItems(index)" v-show="index||(!index && this.form.items.length>1)">
             <svg class="w-7 h-7 " height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
              </button>-->

                            </div>


                        </div>
                        <!--payment-->
                        
                        <div v-if="this.Bills.balance<(this.totalPaid+this.payment.paid)">


                            <div class=" flex items-center mt-10">
                                <svg class="h-6 w-6 fill-current text-red-400 mr-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                <div>
                                    <p class="font-medium text-red-500">Paid Amount exceeding due</p>

                                </div>

                            </div>

                        </div>
                   

                  

                        <div class="flex justify-center mt-10 ">
                            <button @click="addPayments()" class="button">Add Payment Info</button>
                        </div>

                    <!-- <div>Total: {{this.total}} </div> -->
                </form>


            
            <!--form-->

                <!--item-->
        </div>
        <!--footer-->
        <!-- <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
        </div> -->
      </div>
    </div>
  </div>
           </div>
         <!--modal service-->


        


         <!--modal discount -->
          <div v-show="openModalDis">
         <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <!--content-->
      <div class="mt-5">
        <!--body-->
        <div class="text-center  flex-auto justify-center">
        <div class="flex justify-end">
            <button @click="removeDis">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
            </button>
            </div>

                <!--discount-->

                 <form @submit.prevent>
                     <div class="tracking-widest text-lg title-font font-bold text-gray-500  border-b border-gray-300 ">
                     Discount  
                     </div>
                     <!--discount-->
                       <div class="inline-flex items-center mt-3 ">
                <label for="" class="m-3 text-gray-800">Give discount in?</label>
<!--                 
                <input v-model="isPercentage" value="Amount" type="radio" id="Amount" name="isPercentage" checked="checked"
                    class="form-radio h-5 w-5 text-indigo-600"><span class="ml-2 mr-2 text-gray-700">Amount</span>
                    <input v-model="isPercentage" value="Percentage" type="radio" id="Percentage" name="isPercentage"
                    class="form-radio h-5 w-5 text-indigo-600"><span class="ml-2 mr-2 text-gray-700">Percentage</span> -->
                    
  <input type="radio" name="test_id" @change="onChange($event)" value="Amount" class="form-radio h-5 w-5 text-indigo-600 mr-2" ><span class="ml-2 mr-2 text-gray-700">Amount</span>
  <input type="radio" name="test_id" @change="onChange($event)" value="Percentage" class="form-radio h-5 w-5 text-indigo-600 mr-1"><span class="ml-2 mr-2 text-gray-700">Percentage</span>
                
            </div>
            
                    <div class="flex justify-center">
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200" for="discount">Discount Amount</label>
                            <input  @keypress="isNumber($event)" v-model.number="discountAmount" id="discount" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                        
                    </div>
                    <div>{{this.applyDiscount()}}</div>
            <!--discount-->
            <div v-if="this.str.length>=1">


                            <div class=" flex items-center mt-10 px-8">
                                <svg class="h-6 w-6 fill-current text-red-400 mr-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                <div>
                                    <p class="font-medium text-red-500">{{str}}</p>

                                </div>

                            </div>

                        </div>
                   


                      
                    <!--after discount-->

                    <div class="flex justify-start items-start ml-6" >
                            <div class="py-3 mr-3  mt-5  w-full sm:w-2/4 lg:w-1/4">
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Total:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-2xl" >&#2547;</span>{{this.Bills.total}}</span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Discount:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.discount}}</span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Adjustment:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.Bills.adjustment-this.discount}}</span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Balance:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-2xl" >&#2547;</span>{{this.Bills.balance-this.discount}}</span> </div>
                                    <div class="w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                            </div>
                    </div>


                    <!--after discount-->
                    
                    
                        <div class="flex justify-center mt-10 " v-if="this.str.length==0">
                            <button @click="discountApply()" class="button">Apply Discount</button>
                        </div>

                    <!-- <div>Total: {{this.total}} </div> -->
                </form>


            
            <!--form-->

                <!--item-->
        </div>
        <!--footer-->
        <!-- <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancel
            </button>
            <button class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
        </div> -->
      </div>
    </div>
  </div>
           </div>
         <!--modal discount-->

      
    </div>
</template>


<script >
import axios from 'axios'
import BillItems from "../../components/BillItems.vue";
import PaymentMethods from "../../components/PaymentMethods.vue";
import PaymentInfo from "../../components/PaymentInfo.vue"

export default {
    props: {
        changecomponent: Boolean,
        billId: String
    },
    components: {
        BillItems,
        PaymentMethods,
        PaymentInfo
       
    },
    created() {
        this.getBill(this.billId),
        this.getPosts(this.$route.params.id)
    },
    data() {
        return {
            patientData: {
                    name: "",
                    gender: "",
                    dob: "",
                    phone:""
                   
                },

            openModalSer: false,
            isPercentage:null,
            adjustment:0,
            discount:0,
            discountAmount:0,
            openModalPay:false,
            openModalDis:false,
            date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            default: true,
            paymentMethods: ['bKash','Nagad','Rocket','Card-Debit','Visa', 'Cash'],
            Bills: {},

            form: {
                items: []
            },
            formData: {
                payment: []
            },
            totalPaid: 0,
            totalCost: 0,
            item: {
                date: '',
                service: '',
                cost: ''
            },
            items: [],
            payments: [],
            payment: {
                date: '',
                paid: '',
                paymentMethod: ''

            },
            balance: 0,
            subtotal: 0,
            afterPaid: 0,
            str: '',
            amountDiscount:{
            discount:0
            }

        }
    },
    methods: {
        isNumber(evt) {
            // evt = (evt) ? evt : window.event;
            //   var charCode = (evt.which) ? evt.which : evt.keyCode;
            //   if ((charCode < 48 || charCode > 57) && charCode !== 188) {
            //     evt.preventDefault();
            //   } else {
            //     return true;
            if (!/\d/.test(evt.key)) {
                return evt.preventDefault();
            } else {
                return true;
            }
        },

 getPosts(id) {
                axios.get('http://localhost:3000/api/patients/' + id ,{headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
                    .then((response) => {

                        this.patientData = response.data.result;
                        const ageDifMs = Date.now() - new Date(this.patientData.dob.substring(0, 10)).getTime();
                        //console.log(ageDifMs);
                        const ageDate = new Date(ageDifMs);
                        this.patientData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                        //console.log(this.formData.dob)
                        //this.calculateAge(this.formData.dob.substring(0,10))
                       


                    })


                    .catch((error) => {
                        console.log(error)

                    })

            },


        removeDis(){
                this.openModalDis=false
        },
        removeSer(){
                this.openModalSer=false
        },
        removePay(){
                this.openModalPay=false
        },
       
        onChange(event) {
              this.isPercentage = event.target.value;
              console.log(this.isPercentage);
          },
          
applyDiscount(){
            //console.log(typeof(this.isPercentage))
            if(this.isPercentage=='Percentage'){
                console.log("true")
                console.log(typeof(this.isPercentage))
                console.log(this.isPercentage)
                if(this.discountAmount<=100 ){
                this.discount=(this.Bills.total/100)*this.discountAmount
                this.amountDiscount.discount=this.discount+this.Bills.discount
                this.str=""
                //this.discountAmount=0
                if(this.Bills.balance-this.discount>=0){
                     this.adjustment=this.Bills.total-this.discount
                     this.str=""
                    //this.discountAmount=0

                }
                else{
                    this.str="Discount amount exceeding balance"
                     //this.discountAmount=0
                }
                  
                }
                else{
                    this.str="Percentage is exceeding 100%"
                     //this.discountAmount=0
                }
        
                

            }if(this.isPercentage=='Amount'){
               console.log(typeof(this.isPercentage))
                console.log(this.isPercentage)
                this.str=""
                this.discount=this.discountAmount
                   this.amountDiscount.discount=this.discount+this.Bills.discount
                 if(this.Bills.balance-this.discount>=0){
                     this.adjustment=this.Bills.total-this.discount
                     this.str=""

                }
                else{
                    this.str="Discount amount exceeding balance"
                    
                }
                  
                
            }
            console.log(this.discount)

        },
        openModalService(){
            this.openModalSer=true

        },
         openModalPayment(){
            this.openModalPay=true

        },
          openModalDiscount(){
            this.openModalDis=true

        },

        addNewItems() {
            this.items.push(this.item)
            console.log(this.items);
            this.totalCost = this.totalCost + parseInt(this.item.cost)
            this.balance = this.Bills.balance
            this.subtotal = this.balance + this.totalCost


            this.item = {
                date: '',
                service: '',
                cost: 0

            }
        },

        addNewPayments() {
            if (this.Bills.balance >= (this.totalPaid + this.payment.paid)) {
                this.payments.push(this.payment)
                console.log(this.payments);
                this.totalPaid = this.totalPaid + parseInt(this.payment.paid)
                this.balance = this.Bills.balance
                this.afterPaid = this.balance - this.totalPaid

            } else {
                this.str = "Payment exceeding due"

            }


            //this.subtotal=this.balance+this.totalCost


            this.payment = {
                date: '',
                paid: 0,
                paymentMethod: ''

            }


        },
        addItems() {
            // console.log(this.formdata);
            this.items.forEach((item) => {
                this.form.items.push(item)
            })
               
            console.log(this.form)
            //console.log(this.billId)

            //this.form.patient=this.$route.params.id
            axios.put('http://localhost:3000/api/billings/' + this.billId + '/add-bill', this.form , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
                .then((response) => {
                    console.log(response)
                    this.items = []
                                        
                    this.form={
                    
                    items:[]
                    }
                    
                    this.getBill(this.billId)

                    //this.doctors=response.data['result'
                })
                .catch((error) => {
                    console.log(error)
                })
         
          
                this.openModalSer=false
                this.items = []
                                        
                    this.form={
                    
                    items:[]
                    }
                    
                    this.getBill(this.billId)
                    this.totalCost=0

        },
        addPayments() {
            console.log(this.payments);
            this.payments.forEach((item) => {
                this.formData.payment.push(item)
            })
            console.log(this.formData)
            //console.log(this.billId)

            //this.form.patient=this.$route.params.id
            axios.put('http://localhost:3000/api/billings/' + this.billId + '/add-payment', this.formData , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
                .then((response) => {
                    console.log(response)
                    this.payments = []
                     this.formData={
                    
                    payment:[]
                    }
                    this.getBill(this.billId)

                    //this.doctors=response.data['result'
                })
                .catch((error) => {
                    console.log(error)
                })
                this.openModalPay=false
                this.payments = []
                this.formData={
                    
                    payment:[]
                    }
                this.getBill(this.billId)
                this.totalPaid=0


        },
      discountApply(){
        console.log(this.amountDiscount)
            //this.amountDiscount.discount=this.discount
            

             axios.patch('http://localhost:3000/api/billings/'+this.billId+'/discount', this.amountDiscount , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
                .then((response) => {
                    console.log(response)
                    
                     this.amountDiscount={ }
                    this.getBill(this.billId)

                    //this.doctors=response.data['result'
                })
                .catch((error) => {
                    console.log(error)
                })
                this.discountAmount=0
                this.discount=0
                // this.discountAmount={
                //     discount:0
                // },
              
            this.openModalDis=false

        },

        getBill(id) {
            console.log(id)
            axios.get('http://localhost:3000/api/billings/' + id , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
                .then((response) => {
                    //console.log(response.data);
                    this.Bills = response.data['result'];
                    //console.log(this.Bills)

                })


                .catch((error) => {
                    console.log(error)
                    this.errorMsg = 'Error retrieving data'
                })

        },


        deleteItems(i) {
            //console.log(i)
            this.items.forEach((item, index) => {
                if (index === i) {
                    //console.log(index)
                    this.totalCost = this.totalCost - item.cost
                    this.balance = this.Bills.balance
                    this.subtotal = this.balance + this.totalCost


                }
            })
            this.items.splice(i, 1);


        },

        deletePayments(i) {
            this.payments.forEach((item, index) => {
                if (index === i) {
                    //console.log(index)
                    this.totalPaid = this.totalPaid - item.paid
                    //this.balance=this.Bills.balance
                }
            })
            this.afterPaid = this.balance - this.totalPaid
            this.payments.splice(i, 1);


        },
        change() {
            //changecomponent=!changecomponent
            window.location.reload();
        },
         
    }

}
 </script>

<style lang = "scss" scoped >

</style>