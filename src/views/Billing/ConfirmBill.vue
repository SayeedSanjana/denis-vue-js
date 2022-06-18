<script>
import axios from "axios";
import swal from 'sweetalert';

    export default {
        data(){
            return{
                pendingBill: {
                    patient: '',
                    patientName: '',
                    patientContact: '',
                    items: [{
                        date: '',
                        service: '',
                        _id: ''
                    }],
                },
                isPercentage: null,
                discount: 0,
                discountAmount: 0,
                totalCost: 0,
                totalPaid: 0,
                str: '',
                form:{
                    prescription: this.$route.params.id,
                    patient: '',
                    patientName: '',
                    patientContact: '',
                    discount: 0,
                    items: [{
                        date: "",
                        service: "",
                        cost: 0,
                        currency: "",
                        _id: ""
                    }],
                }
            }

        },
        created() {
            this.getPendingBill();
        },
        methods:{
            async confirmBill(){
                this.form.patient = this.pendingBill.patient;
                this.form.patientName = this.pendingBill.patientName;
                this.form.patientContact = this.pendingBill.patientContact;
                this.form.items.date = this.pendingBill.items.date;
                this.form.items.service = this.pendingBill.items.service;
                this.form.items._id = this.pendingBill.items._id;
                

                try {
                    const response = await axios.put(import.meta.env.VITE_LOCAL + 'billings/save-bill/' + this.$route.params.id, this.form);

                    console.log(response.data.data);

                    if(response.data.status == 'success'){
                        swal({
                            title: "Success",
                            text: "Bill has been confirmed",
                            icon: "success",
                            timer: 1000,
                            button: false,
                        });
                    }

                    

                    
                } catch (error) {
                   swal({
                        title: "Error",
                        text: "Something went wrong",
                        icon: "error",
                        button: true,
                    });
                }

            },

           async getPendingBill(){
                try {
                    const response = await axios.get( import.meta.env.VITE_LOCAL + '/billings/pendding/' +this.$route.params.id )
                    this.pendingBill = response.data.data;
                    console.log(this.pendingBill);
                    
                } catch (error) {
                    console.log(error);
                    
                }
            },
            applyDiscount() {
               
                if (this.isPercentage === 'Percentage') {
                    if (this.discountAmount <= 100) {
                        this.discount = (this.totalCost / 100) * this.discountAmount
                        this.form.discount = this.discount
                        this.str = ""
                        if (this.discount <= this.totalCost - this.totalPaid) {
                            this.adjustment = this.totalCost - this.discount
                            this.balance = this.balance - this.discount
                            this.str = ""
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
               
            },
             //Checking if only numbers inputted
            isNumber(evt) {
                if (!/\d/.test(evt.key)) {
                    return evt.preventDefault();
                } else {
                    return true;
                }
            },


        }
          
          
        
    }
</script>

<template>

          <section class="container mx-40 my-6">
            
                <h1 class="text-left mx-40 font-bold my-4 text-regal-teal">Confirm Bill</h1>
           <form action="" @submit.prevent="confirmBill(this.$route.params.id)">
            <div class=" mx-40 border p-4 bg-slate-100">

                <article class="flex justify-end pb-4 space-x-2">
                    <button type="button"  class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Back</button>
                    <button type="submit"  class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Confirm</button>
                </article>
                
                <article class="flex justify-between mb-4">
                    <div class="text-left w-3/6 mr-3">
                        <label for="">Service</label>
                        <input type="text" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <div class="text-left w-2/6 mx-3">
                        <label for="">Cost</label>
                        <input @keypress="isNumber($event)" v-model="form.items.cost" type="text" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <button type="button" class="w-1/6 mt-2 flex justify-center items-center ">
                            <img src="@/assets/svgs/plus.svg" alt="" srcset="" class="pointer-events-none w-6 h-6 ">
                    </button>
                </article>

                <article class="flex p-2 bg-regal-light-blue text-regal-teal font-semibold">
                    <div class="basis-1/6 flex justify-start items-start">Date</div>
                    <div class="basis-4/6">Service</div>
                    <!-- <div class="basis-1/6">Location</div> -->
                    <div class="basis-1/6">Cost</div>
                </article>
                
                <article v-for="item in pendingBill.items" :key="item" class="flex pt-2 px-2 border-b last:border-b-0 text-regal-teal bg-white">
                    <div class="basis-1/6 flex justify-start items-start">{{new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</div>
                    <div class="basis-4/6 break-words">
                        {{item.service}} <span> - {{item.location}}</span>
                    </div>
                    <!-- <div class="basis-1/6">24</div> -->
                    <input @keypress="isNumber($event)"
                        class="basis-1/6 appearance-none py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue" />
                </article>

                <section class="my-4">
                    <h1 class="text-left font-semibold ">Additional Services</h1>

                    <article class="flex pt-2 px-2 border-b last:border-b-0 text-regal-teal bg-white">
                        <div class="basis-1/6 flex justify-start items-start">12/24/2022</div>
                        <div class="basis-4/6 break-words">antigen testing for a public health related pathogen, including
                            coronavirus</div>
                        
                        <p
                            class="basis-1/6 appearance-none py-1 px-4 mb-3 block w-full bg-white text-regal-teal " contenteditable="true" >1999
                        </p>

                        <div>
                            <button type="button">
                                <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                    class="pointer-events-none mr-2 mt-2">
                            </button>
                        </div>
                    </article>
                </section>
              
                <article class="border bg-white flex justify-evenly p-4 my-4">
                    <div class="text-left ">
                        <label for="" class="font-semibold text-regal-teal">Discount</label>
                        <div class="space-x-5">
                            <input type="radio" name="test_id" @change="applyDiscount()" value="Amount" checked="checked"  @click="onChange($event)">
                            <label for="">Amount</label>
                            <input type="radio" name="test_id" @change="applyDiscount()" value="Percentage"   @click="onChange($event)">
                            <label for="">Percentage</label>
                        </div>
                    </div>

                    <div class="text-left">
                        <label for="" class="text-regal-teal font-semibold">Discount Amount</label>
                        <input @keyup="applyDiscount" @keypress="isNumber($event)" type="text" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">

                    </div>

                </article>

                <article class=" border bg-white p-4">
                    <ul class="flex justify-evenly">
                        <li for="">Subtotal : <b>10000 TK</b></li>
                        <li for="">Discount : <b>10000 TK</b></li>
                        <li for="">Adjustment : <b>10000 TK</b></li>
                        <li for="">Balance(Due) : <b>10000 TK</b></li>
                    </ul>
                    
                </article>
            </div>
            </form>
        </section>
</template>



<style scoped>

</style>