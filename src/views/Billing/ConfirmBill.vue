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
                    items: [],
                },

                item:{
                    date: Date.now(),
                    service: '',
                    cost: ''
                },
                itemList: [],

                

                value: 0,
                discountType: 'Amount',
                balance: 0,
                subTotal: 0,
                adjustment: 0,
               
                form:{
                    prescription: this.$route.params.id,
                    patient: '',
                    patientName: '',
                    patientContact: '',
                    discount: 0,
                    items: [],
         
                },
                
            }

        },
        created() {
            this.getPendingBill();

        },
        computed:{
            
            
       

           billData(){

            
            this.pendingBill.items.forEach(item => {
              item.cost = 0;
            });
            return this.pendingBill;
                 
           },
           totalCost(){
            let total = 0;
            this.pendingBill.items.forEach(item => {
              total += item.cost;
            });
            return total;
           },

           additionalCost(){
            let total = 0;
            this.itemList.forEach(item => {
              total += item.cost;
            });
            return total;
           },
          
        },

      

        methods:{
            

            

            addItem(){
                if(this.item.service.length > 0 || this.item.cost.length > 0){
                    this.itemList.push(this.item);

                    this.item = {
                        date: Date.now(),
                        service: '',
                        cost: ''
                    };
                     
                 
                }         

            },

            removeItem(index){
                this.itemList.splice(index, 1);

            },
            


            changeDiscountType(e){
                this.discountType = e.target.value;
                this.value = 0;
                this.applyDiscount();

            },


            async confirmBill(){
                this.form.patient = this.pendingBill.patient;
                this.form.patientName = this.pendingBill.patientName;
                this.form.patientContact = this.pendingBill.patientContact;


                this.pendingBill.items = this.pendingBill.items.concat(this.itemList);
                this.form.items = this.pendingBill.items;
                
       
               
                

                try {
                    const response = await axios.put(import.meta.env.VITE_LOCAL + 'billings/save-bill/' + this.$route.params.id, this.form);

                    

                    if(response.data.status == 'success'){
                        swal({
                            title: "Success",
                            text: "Bill has been confirmed",
                            icon: "success",
                            timer: 1000,
                            button: false,
                        });

                        this.$router.push({
                            name: 'AddPayment',
                            params: {
                                id: this.$route.params.id
                            }
                        });
                    }

                    

                    
                } catch (error) {
                    console.log(error);
                
                }

            },
         

           async getPendingBill(){
                try {
                    const response = await axios.get( import.meta.env.VITE_LOCAL + '/billings/pendding/' +this.$route.params.id )
                    this.pendingBill = response.data.data;
                    // console.log(this.pendingBill);
                    
                } catch (error) {
                    console.log(error);
                    
                }
            },
            back(){
                this.$router.push('/BillingWindow');
            },
            applyDiscount() {
              
                try {
                   
                    this.form.discount = parseInt(this.value);
                    this.adjustment = (this.totalCost + this.additionalCost) - this.form.discount;
                    
                    if( this.discountType === 'Percentage'){
                        
                        
                        this.form.discount = ((this.totalCost + this.additionalCost) * this.value) * 0.01;
                     
                        this.adjustment = (this.totalCost + this.additionalCost )- this.form.discount;
                        

                        if(this.value > 100){
                            throw new Error('Discount cannot be greater than 100%');
                        }
    
                    }
                    
    
                    
                } catch (error) {
                    console.log(error);
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
                    <button type="button" @click="back()" class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Back</button>
                    <button type="submit"   class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Confirm</button>
                </article>
                
                <article class="flex justify-between mb-4">
                    <div class="text-left w-3/6 mr-3">
                        <label for="">Service</label>
                        <input v-model="item.service" type="text" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <div class="text-left w-2/6 mx-3">
                        <label for="">Cost</label>
                        <input v-model="item.cost"  type="number" class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">
                    </div>
                    <button @click="addItem" type="button" class="w-1/6 mt-2 flex justify-center items-center ">
                            <img src="@/assets/svgs/plus.svg" alt="" srcset="" class="pointer-events-none w-6 h-6 ">
                    </button>
                </article>

                <article class="flex p-2 bg-regal-light-blue text-regal-teal font-semibold">
                    <div class="basis-1/6 flex justify-start items-start">Date</div>
                    <div class="basis-4/6">Service</div>
                   
                    <div class="basis-1/6">Cost</div>
                </article>
                
                <article v-for="(item,index) in billData.items" :key="index" class="flex pt-2 px-2 border-b last:border-b-0 text-regal-teal bg-white space-x-6">
                    <div class="basis-1/6 flex justify-start items-start">{{new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</div>
                    <div class="basis-4/6 break-words">
                        {{item.service}} <span> - {{item.location}}</span>
                    </div>
                   
                    <input :id="index" type="number" v-model="item.cost"
                        class="basis-1/6 appearance-none py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue" />
                </article>
                
                <section class="my-4">
                    <h1 class="text-left font-semibold ">Additional Services</h1>

                    <article v-for="(data,index) in itemList" :key="index" class="flex pt-2 px-2 border-b last:border-b-0 text-regal-teal bg-white">
                        <div class="basis-1/6 flex justify-start items-start">{{new Date(data.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</div>
                        <div class="basis-4/6 break-words">{{data.service}}</div>
                        
                        <p class="basis-1/6 appearance-none py-1 px-4 mb-3 block w-full bg-white text-regal-teal "  >{{data.cost}}
                        </p>

                        <div>
                            <button type="button" @click="removeItem(index)">
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
                            <input type="radio" name="test_id" @change="changeDiscountType($event)" value="Amount" checked="checked"  >
                            <label for="">Amount</label>
                            <input type="radio" name="test_id" @change="changeDiscountType($event)" value="Percentage"  >
                            <label for="">Percentage</label>
                        </div>
                    </div>

                    <div class="text-left">
                        <label for="" class="text-regal-teal font-semibold">Discount Amount</label>
                        <input type="number"  @keyup="applyDiscount" v-model="value"  class="py-1 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue">

                    </div>
                    
                </article>

                <article class=" border bg-white p-4">
                    <ul class="flex justify-evenly">
                        <li for="">Subtotal : <b>{{totalCost + additionalCost}}</b></li>
                        <li for="">Discount : <b>{{form.discount}}</b></li>
                        <li for="">Adjustment : <b>{{(totalCost + additionalCost) - form.discount}}</b></li>
                     
                    </ul>
                    
                </article>
            </div>
            </form>
        </section>
</template>



<style scoped>

</style>