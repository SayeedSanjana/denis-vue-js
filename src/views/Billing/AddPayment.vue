<script>
import axios from 'axios';
import swal from 'sweetalert';
import PrintBill from "./_PrintBill.vue";
// import router from "../../router/index";

    export default {
        components: {
            PrintBill
        },

        data(){
            return{
               
                bill:{
                    totalAmountPaid: 0,
                    balance: 0,
                    payment:[],
                    schema_version: 0
                },
                form:{
                    prescription : this.$route.params.id,
                    payment:[],      
                    schema_version: 0
                },
                addPayment:{
                        date: Date.now(),
                        paid: 0,
                        currency: 'tk',
                        paymentMethod: 'cash', 
                },

                openModal: false,

            }
        },

        created(){
            this.getBill();
        },

        computed:{
            isEnabled(){
                if((this.bill.balance - this.addPayment.paid) < 0){
                    return false;
                }
                else{
                    return true;
                }
            }
        },

        methods:{
            async getBill(){

                try {
                    const response = await axios.get(import.meta.env.VITE_LOCAL + '/billings/p/' + this.$route.params.id, {
                        headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                },
                    });
                   
                    this.bill= response.data.data;
                   
                    
                } catch (error) {
                   if(error.response.data.message == "jwt expired"){
                        this.$router.push({
                            name: 'Login'
                        })
                     
                    } else {
                        console.log(error);
                    } 
     
                }

            },
             back(){
                this.$router.push('/BillingWindow');
            },
            modal(){
                this.openModal = true;
            },
            closeModal(){
                this.openModal = false;

                // window.location.reload();
               
               
               
            },
            
           

            async updatePayment(){
                if( this.bill.schema_version == 1){
                    this.form.schema_version = 1;
                    this.form.payment.push(this.addPayment);
                try {
                    const response = await axios.put(import.meta.env.VITE_LOCAL + '/billings/save-bill/' + this.$route.params.id, this.form , {
                        headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                },
                    });

                    this.bill= response.data.data;
                    // console.log(this.form);
                    if(response.data.status == 'success'){
                       swal({
                          title: "Success",
                            text: "Payment has been saved",
                            icon: "success",
                            timer: 1000,
                            button: false,
                       });
                       this.addPayment.paid = 0;
                        //   this.$router.push('/BillingWindow');


                    
                        setTimeout(() => {
                            this.modal();
                            
                        }, 1000);

                        
                    }
             
                    
                } catch (error) {
                     if(error.response.data.message == "jwt expired"){
                        this.$router.push({
                            name: 'Login'
                        })
                     
                    } else {
                        console.log(error);
                   swal({
                          title: "Error",
                            text: "Add Paid Amount",
                            icon: "error",
                            timer: 2000,
                            button: false,
                       });
                    } 
                    
                }
                }
                else{
                   
                    this.form.payment.push(this.addPayment);
                     try {
                    const response = await axios.put(import.meta.env.VITE_LOCAL + '/billings/save-bill/' + this.$route.params.id, this.form , {
                        headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                },
                    });
                    this.bill= response.data.data;
                    // console.log(this.form);
                    if(response.data.status == 'success'){
                       swal({
                          title: "Success",
                            text: "Payment has been saved",
                            icon: "success",
                            timer: 1000,
                            button: false,
                       });
                           this.addPayment.paid = 0;
                        //   this.$router.push('/BillingWindow');


                    
                        setTimeout(() => {
                            this.modal();
                            
                        }, 1000);
                    }
             
                    
                } catch (error) {
                     if(error.response.data.message == "jwt expired"){
                        this.$router.push({
                            name: 'Login'
                        })
                     
                    } else {
                        console.log(error);
                   swal({
                          title: "Error",
                            text: "Add Paid Amount",
                            icon: "error",
                            timer: 2000,
                            button: false,
                       });
                    } 
                    
                }

                }
            }
        }


    }
</script>

<template>
    <section class="container mx-40 my-6">
        <!-- <h1 class="text-left mx-40 font-bold my-4 text-regal-teal">Payment</h1> -->
        <form @submit.prevent="updatePayment" class="mx-40 ">
            <div>
                <article class="flex justify-end pb-4 space-x-2">
                    <button type="button" @click="back()" class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Back</button>
                    <button type="button" class="btn" @click="modal">Print</button>
                    <button v-show="bill.balance > 0" type="submit"  :class="{'btn' : isEnabled, 'btn-disabled' : !isEnabled}" :disabled="!(isEnabled)">Confirm</button>
                </article>
            </div>
            <section class="border px-12 py-4 bg-white">
                <article class="p-6 flex justify-between  bg-regal-teal rounded-lg">
                    <div class="text-left text-regal-white">
                        <h2 class="font-semibold">Invoice Number</h2>
                        <p class="font-semibold">INV-{{bill._id}}</p>
                        <p class="font-medium">Issue Date - <span class="font-semibold">{{new Date(bill.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</span></p>
                    </div>
                    <div class="text-right text-regal-white">
                        <h2 class="font-semibold">Billed to</h2>
                        <p class="font-medium">Patient Name - <span class="font-semibold">{{bill.patientName}}</span> </p>
                        <p class="font-medium">Contact - <span class="font-semibold">{{bill.patientContact}}</span> </p>

                    </div>

              
                </article>
                <article class="py-4">
                     
                    <h2 class="text-left font-semibold text-regal-teal mb-4">Services Provided</h2>

                    <div class="flex text-regal-teal text-left">
                        <h1 class="basis-2/6 font-semibold">Date</h1>
                        <h1 class="basis-3/6  font-semibold">Service</h1>
                        <h1 class="basis-1/6 font-semibold">Cost</h1>

                    </div>
                    <div class="flex text-gray-400 text-left border-b last:border-b-0 space-x-3 space-y-3" v-for="(item, index) in bill.items" :key="index">
                        <h2 class="basis-2/6 ">{{new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</h2>
                        <h2 class="basis-3/6 break-words">{{item.service}} <span>{{item.location}}</span></h2>
                        <h2 class="basis-1/6 ">{{item.cost}}</h2>
                    </div>


                </article>
              
                <article v-if="bill.payment.length>0" class="py-4">
                    <h2 class="text-left font-semibold text-regal-teal mb-4">Past Payments</h2>
                    <div class="flex text-regal-teal text-left">
                        <h1 class="basis-1/4 font-semibold">Date</h1>
                        <h1 class="basis-1/4  font-semibold">Paid</h1>
                        <h1 class="basis-1/4 font-semibold">Currency</h1>
                        <h1 class="basis-1/4 font-semibold">Payment Method</h1>
                    </div>
                    <div class="flex text-gray-400 text-left border-b last:border-b-0 space-x-3 space-y-3" v-for="(item, index) in bill.payment" :key="index">
                     <h2 class="basis-1/4 ">{{new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</h2>
                        <h2 class="basis-1/4 ">{{item.paid}}</h2>
                        <h2 class="basis-1/4  ">{{item.currency}}</h2>
                        <h2 class="basis-1/4 ">{{item.paymentMethod}}</h2>

                    </div>

                </article>
                <!-- <article>
                <h2 class="text-left font-semibold text-regal-teal mb-4">Add more Service</h2>
                <div class="flex justify-between mb-4">
                    <div class="text-left w-4/6 mr-3">
                        <label for="">Service</label>
                        <input  type="text" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <div class="text-left w-1/6 mr-3">
                        <label for="">location</label>
                        <input  type="text" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <div class="text-left w-1/6 mx-3">
                        <label for="">Cost</label>
                        <input  type="number" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <button  type="button" class="w-1/6 mt-2 flex justify-center items-center ">
                            <img src="@/assets/svgs/plus.svg" alt="" srcset="" class="pointer-events-none w-6 h-6 ">
                    </button>
                </div>

                <h2 class="text-left font-semibold text-regal-teal mb-4">Additional Services</h2>
                
                    <div class="flex text-regal-teal text-left">
                        <h1 class="basis-3/12 font-semibold">Date</h1>
                        <h1 class="basis-5/12  font-semibold">Service</h1>
                        <h1 class="basis-3/12 font-semibold">Cost</h1>
                        <h1 class="basis-1/12"></h1>

                    </div>

                     <div class="flex text-gray-400 text-left border-b last:border-b-0" >
                        <h2 class="basis-3/12 ">uygjygj</h2>
                        <h2 class="basis-5/12 break-words">gjhgjhg</h2>
                        <h2 class="basis-3/12 ">gjjhgjh</h2>
                        <button type="button" >
                                <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                    class="basis-1/12 pointer-events-none mr-2 mt-2">
                        </button>
                    </div>
                

                
                </article> -->
                <article class="flex  my-4 border-t py-3">
                    <div class=" basis-1/3">
                        <h1 class="font-bold text-lg text-regal-teal">Payment </h1>
                    <div v-if="bill.balance > 0">

                     

                        
                        <div class="flex text-left pr-3 py-3">
                            <label class="basis-1/2 font-semibold text-regal-teal">Payment Type</label>
                            <select v-model="addPayment.paymentMethod" class="basis-1/2 py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                                <option value="cash">Cash</option>
                                <option value="bkash">Bkash</option>
                                <option value="nagad">Nagad</option>
                                <option value="rocket">Rocket</option>
                                <option value="masterCard">MasterCard</option>
                                <option value="visa">Visa</option>
                                <option value="cheque">Cheque</option>
                                <option value="account">Account</option>
                            </select>

                        </div>
                        <div class="flex text-left pr-3 py-3">
                            <label class="basis-1/2 font-semibold text-regal-teal">Currency</label>
                            <select v-model="addPayment.currency" class="basis-1/2 py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                                <option value="tk">৳</option>
                                <option value="usd">US$</option>
                                <option value="euro">€</option>
                                
                            </select>

                        </div>
                        <div class="flex text-left pr-3 ">
                            <label class="basis-1/2 font-semibold text-regal-teal">Paid Amount</label>
                            <input v-model="addPayment.paid" type="number"
                                class="basis-1/2 py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">

                        </div>
                       

                           
                      
                       
                    </div>

                    <div v-else class="py-8">
                        <h1 class="font-bold text-4xl text-regal-teal">Paid</h1>
                    </div>

                    </div>

                
                    <div class="basis-1/3 px-2 flex justify-between border-l">
                        <ul class="text-left text-gray-400 font-semibold px-4">
                            <li >Subtotal </li>
                            <li>Discount </li>
                            <li>Adjustment </li>
                            <li>Received </li>
                       
                            <li  class="py-3 ">Balance(Due)</li>
                        </ul>
                        <ul class="text-right font-bold text-regal-teal px-3">
                            <li>  {{bill.total}}</li>
                            <li>  {{bill.discount}}</li>
                            <li>  {{bill.adjustment}}</li>
                            <li>  {{bill.totalAmountPaid + addPayment.paid}}</li>
                        
                            <li class="py-3" > {{bill.balance - addPayment.paid}}</li>
                        </ul>


                    </div>
                    <div class="border-l basis-1/3 px-2 ">
                        <h1 class="font-bold text-lg text-regal-teal">Amount Due</h1>
                        <div v-if="(bill.balance - addPayment.paid) >= 0">

                        <h1 class="font-bold text-4xl text-red-700 py-8">৳ {{bill.balance - addPayment.paid }} </h1>
                        </div>
                        <div v-else class="my-6">
                             <p  class="text-red-700 text-xl font-semibold"> The paid amount cannot exceed the due amount.</p>
                        </div>

                    </div>

                </article>
                
            </section>
        </form>


        <!-- {{bill}} -->
     <PrintBill v-if="openModal" @close="closeModal" :bill="bill" />
    </section>
</template>


<style scoped>

.form-error-text {
@apply  px-2 text-regal-red text-xs;
}
.btn{
    @apply px-3 py-1 font-semibold rounded-md text-white bg-regal-teal;
}
.btn-disabled{
    @apply px-3 py-1 font-semibold rounded-md text-gray-400 bg-regal-light-blue;
}
</style>