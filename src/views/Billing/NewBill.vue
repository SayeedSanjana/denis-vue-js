<template>
    <div>
        <div><!--else-->
       
    <div class=" p-2 w-full"> <!--form-->
    <div class="px-8 flex justify-center items-center">
        <form @submit.prevent >
            <!--items-->
            <div class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 mb-8">
            Create New Bill
        <!-- {{this.$route.params.id}} -->

      </div>
      <div class=" mb-6  w-full text-left flex justify-start">
            <div>
            <div class="font-semibold text-md text-gray-700  "> Date: 
                    <span
                        class="text-lg font-medium text-indigo-500  ">{{this.date}}</span></div>
            <div class="font-semibold text-md text-gray-700  "> Patient Name: 
                    <span
                        class="text-lg font-medium text-indigo-500">{{this.formData.name}}</span></div>
                        
                <div class="text-gray-700 font-semibold text-md ">Contact: <span
                        class="text-lg font-medium">{{this.formData.phone}}</span> </div>


            </div>
            

        </div>

       <div class="tracking-widest text-left text-lg title-font font-bold text-gray-600 mt-3 mb-3 pb-3 pt-2 border-b border-gray-300 mt-5">
                        Add Items:
                         </div>
       <!--item list-->
                    <div v-show="this.form.items.length>=1">
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
                                    <tr class="hover:bg-grey-lighter" v-for="(item,index) in form.items" :key="index">
                                        <td class="py-4 px-6 border-b border-grey-light">{{item.date.substring(0,10)}}
                                        </td>
                                        <td class="py-4 px-6 border-b border-grey-light">
                                            {{item.service}}
                                            
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
                   

            <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-4 mb-5" >
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="date" >Date</label>
                    <input v-model="item.date" id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                </div>
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="services" >Services*</label>
                   <input v-model="item.service" id="date" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="cost" >Cost*</label>
                    <input  @keypress="isNumber($event)" :disabled= "disabled == 1" v-model.number="item.cost" id="cost" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  >
                </div>

               

            <div class="flex justify-center">
              
              <button class="px-4 py-2 mt-2" @click ="addNewItems()">
              <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M21,14h6v20h-6V14z"/><path fill="#fff" d="M14,21h20v6H14V21z"/></svg>
              </button>

                    
            </div>
                 <p v-if="!formValid" class="text-red-500 mb-4 text-center">Please enter valid information </p>
                
            </div><!--items-->
           
                        <div class="tracking-widest text-lg title-font text-left font-bold text-gray-600 mt-3 mb-3 pb-3 pt-2 border-b border-gray-300 mt-5">
                        Add Payments:
                         </div>
                      <!--payment list-->
                        <div v-if="this.form.payment.length>=1">
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
                                        <tr class="hover:bg-grey-lighter" v-for="(item,index) in form.payment" :key="index">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.date.substring(0,10)}}</td>
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.paid}}
                                                
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
                      

            <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-4" >
                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="date" >Date</label>
                    <input v-model="payment.date" id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                </div>
                 <div>
                    <label class="text-gray-700 dark:text-gray-200" for="cost" >Paid*</label>
                    <input  @keypress="isNumber($event)" v-model.number="payment.paid" id="cost" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"  >
                </div>

                <div>
                    <label class="text-gray-700 dark:text-gray-200" for="paymentMethod">Payment Method*</label>
                   <div class="relative">
                                <select
                                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="paymentMethod" v-model="payment.paymentMethod">
                                
                                    <option  v-for="f in paymentMethods" :key="f._id">{{f}}</option>
                                   
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
              
              <button class="px-4 py-2 mt-2" @click ="addNewPayments()" v-show="(this.totalPaid<= this.totalCost )"  >
              <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M21,14h6v20h-6V14z"/><path fill="#fff" d="M14,21h20v6H14V21z"/></svg>
              </button>

                
            </div>
               <p v-if="!formPayValid" class="text-red-500 mb-4 text-center">Please enter valid information </p>
            </div>
             <div class=" flex items-center mt-10" v-show="(this.totalPaid+this.payment.paid)>this.totalCost">
                                <svg class="h-6 w-6 fill-current text-red-400 mr-4" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                    </svg>
                                <div>
                                    <p class="font-medium text-red-500">Paid Amount Exceeding Total Cost</p>

                                </div>

                            </div>


            <!--paymeent-->

            <!--discount-->

            <div class="mt-5">
        <!--body-->
        <div class="text-left  flex-auto justify-start mt-4 pt-3">
                <!--discount-->

                 <form @submit.prevent>
                     <div class="tracking-widest text-lg text-left title-font font-bold text-gray-500  border-b border-gray-300 ">
                     Discount: 
                     </div>
                     <!--discount-->
                       <div class="inline-flex items-center mt-3 ">
                <label for="" class="mb-3 text-gray-800 mt-2">Give discount in?</label>

  <input type="radio" name="test_id" @change="onChange($event)" value="Amount" class="form-radio h-5 w-5 text-indigo-600 mr-2" checked="checked"><span class="ml-2 mr-2 text-gray-700">Amount</span>
  <input type="radio" name="test_id" @change="onChange($event)" value="Percentage" class="form-radio h-5 w-5 text-indigo-600 mr-1"><span class="ml-2 mr-2 text-gray-700">Percentage</span>
                
            </div>
            <div class="flex justify-between">
                    <div class="flex justify-start">
                        <div class="">
                            <label class="text-gray-700 dark:text-gray-200" for="discount">Discount Amount</label>
                            <input  @keypress="isNumber($event)" v-model.number="discountAmount" id="discount" type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                        
                    </div>
                    <div>
                         <div class="flex ml-6"  >
                            <div class=" mt-5  w-full sm:w-2/4 lg:w-1/4">
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase  "><span
                                            class="ml-5 mt-2">TotalCost:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-xl" >&#2547;{{this.totalCost}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">TotalPaid:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-xl" >&#2547;{{this.totalPaid}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Discount:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-xl" >&#2547;{{this.discount}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Adjustment:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-xl" >&#2547;{{this.totalCost-this.discount}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Balance:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-xl" >&#2547;{{this.balance}}</span></span> </div>
                                    <div class="w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                        
                         </div><!---yyh-->
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
<!-- 
                    <div class="flex justify-end items-end ml-6"  >
                            <div class=" mt-5  w-full sm:w-2/4 lg:w-1/4">
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase  "><span
                                            class="ml-5 mt-2">Total Cost:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-xl" >&#2547;{{this.totalCost}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Total Paid:</span> <span
                                            class="text-lg rounded ml-2 text-gray-500 "><span class="text-xl" >&#2547;{{this.totalPaid}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Discount:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-xl" >&#2547;{{this.discount}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md  flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Adjustment:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-xl" >&#2547;{{this.totalCost-this.discount}}</span></span> </div>
                                    <div class=" w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                                <div class=" justify-between mb-3">
                                    <div class="text-gray-400 text-md flex font-bold uppercase "><span
                                            class="ml-5 mt-2">Balance:</span> <span
                                            class="text-lg  ml-2 text-gray-600"><span class="text-xl" >&#2547;{{this.balance}}</span></span> </div>
                                    <div class="w-40">
                                        <div class="text-gray-800 font-medium" x-html="netTotal"></div>
                                    </div>
                                </div>
                            </div>
                    </div> -->


                </form>


            
            <!--form-->
        </div>
        </div>

            <!--discount-->
           
            <div class="flex justify-end mt-6 " v-if="this.str.length==0" >
                <button @click="printBill()" class="button">Preview</button>
            </div>
        </form>
    </div> <!--form-->

     <div class="mt-5 " v-if="billModal" >
                <BillModal :form="form" :totalCost="totalCost" :totalPaid="totalPaid" :discount="discount" :balance="balance" @billEvent="removeModalBill" />
            </div> 
    </div>
  
    
</div>
    </div>
</template>

<script>
import axios from 'axios'
//import swal from 'sweetalert'
import BillModal from "../../components/BillModal.vue";
export default {
    components: {
        BillModal
    },

    mounted() {
        this.getPosts(this.$route.params.id)
    },
    data() {
        return {
            token: localStorage.getItem('token'),
            billModal: false,
            id: '',
            formValid: true,
            formPayValid: true,
            formValidated: true,
            formData: {
                name: "",
                gender: "",
                dob: "",
                phone: ""

            },

            openModal: false,
            str: '',
            isPercentage: null,
            discount: 0,
            discountAmount: 0,
            balance: 0,
            date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            default: true,
            paymentMethods: ['bKash', 'Nagad', 'Rocket', 'Card-Debit', 'Card-Visa', 'Cash'],
            item: {
                date: '',
                service: '',
                cost: ''
            },
            payment: {
                date: '',
                paid: '',
                paymentMethod: ''

            },

            form: {


                patient: '',
                items: [],
                payment: [],
                discount: 0
            },
            totalCost: 0,
            totalPaid: 0,
            invoice: ""

        }

    },
    methods: {
        isNumber(evt) {
            if (!/\d/.test(evt.key)) {
                return evt.preventDefault();
            } else {
                return true;
            }
        },


        applyDiscount() {
            this.balance = this.totalCost - this.totalPaid

            if (this.isPercentage == 'Percentage') {

                if (this.discountAmount <= 100) {
                    this.str = ""
                    this.discount = (this.totalCost / 100) * this.discountAmount
                    this.form.discount = this.discount

                    if (this.discount <= this.totalCost - this.totalPaid) {
                        this.adjustment = this.totalCost - this.discount
                        this.balance = this.balance - this.discount
                    } else {
                        this.str = "Discount amount exceeding balance"
                    }

                } else {
                    this.str = "Percentage is exceeding 100%"

                }

            } else {
                this.str = ""
                this.discount = this.discountAmount
                this.form.discount = this.discount
                if (this.discount <= this.totalCost - this.totalPaid) {
                    this.adjustment = this.totalCost - this.discount
                    this.balance = this.balance - this.discount
                    this.str = ""
                } else {
                    this.str = "Discount amount exceeding balance"

                }
            }
        },

        onChange(event) {
            this.isPercentage = event.target.value;
            console.log(this.isPercentage);
        },

        addNewItems() {
            if (this.item.date === "" || this.item.service === "" || this.item.service.length < 3 || this.item.cost === "") {
                this.formValid = false
            } else {
                this.form.items.push(this.item)
                console.log(this.items);
                this.totalCost = this.totalCost + parseInt(this.item.cost)

                this.item = {
                    date: '',
                    service: '',
                    cost: 0

                }
                this.formValid = true
            }


        },
        deleteItems(i) {
            this.form.items.forEach((item, index) => {
                if (index === i) {
                    this.totalCost = this.totalCost - item.cost
                }
            })
            this.form.items.splice(i, 1);


        },
        addNewPayments() {

            if (this.payment.date === "" || this.payment.paid === "" || this.payment.paymentMethod === "") {
                this.formPayValid = false
            } else {

                if ((this.totalPaid + this.payment.paid) <= this.totalCost) {
                    this.form.payment.push(this.payment)
                    this.totalPaid = this.totalPaid + parseInt(this.payment.paid)
                }
                this.payment = {
                    date: '',
                    paid: 0,
                    paymentMethod: ''

                }
            }
            this.formPayValid = true


        },


        deletePayments(i) {
            this.form.payment.forEach((item, index) => {
                if (index === i) {
                    this.totalPaid = this.totalPaid - item.paid
                }
            })
            this.form.payment.splice(i, 1);


        },

        async getPosts(id) {
            await axios.get('patients/' + id, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    }
                })
                .then((response) => {

                    this.formData = response.data.result;
                    const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
                    const ageDate = new Date(ageDifMs);
                    this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                    console.log(this.formData.dob)


                })
                .catch((error) => {
                    console.log(error)
                })
        },
        printBill() {
            this.form.patient = this.$route.params.id
            this.billModal = true
        },
        removeModalBill() {
            this.billModal = false
        },


    }
} 
</script>

<style lang="scss" scoped>

</style>