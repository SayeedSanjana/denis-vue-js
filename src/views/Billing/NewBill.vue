<template>
    <div class="">
        <div>

            <div class=" p-2 mt-10 w-full">
                <!--form-->
                <div class="px-8 flex justify-center items-center">
                    <form @submit.prevent>

                        <!--items-->

                        <div class="mt-4 mb-6  w-full text-left flex justify-between">
                            <div>
                                <div class="font-semibold text-md text-regal-teal  "> Date:
                                    <span class="text-lg font-medium text-regal-teal   ">{{this.date}}</span></div>
                                <div class="font-semibold text-md text-regal-teal   "> Patient Name:
                                    <span class="text-lg font-medium text-regal-teal ">{{this.formData.name}}</span>
                                </div>

                                <div class="text-regal-teal font-semibold text-md ">Contact: <span
                                        class="text-lg text-regal-teal  font-medium">{{this.formData.phone}}</span>
                                </div>
                            </div>
                            <div class=" px-7 h-10 mt-6 bg-regal-teal text-center border text-white font-semibold  rounded-md text-sm flex"
                                v-if="this.str.length==0">
                                <button @click="printBill()">Preview</button>
                            </div>
                        </div>



                        <div
                            class=" text-left text-lg title-font font-bold text-regal-teal  mb-3 pb-3 pt-2 border-b border-gray-300 mt-5">
                            Add Items
                        </div>

                        <!--item list-->
                        <div v-show="this.form.items.length>=1">
                            <div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-3">
                                <table class="text-left w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Date</th>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Treatment Done</th>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Cost</th>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter" v-for="(item,index) in form.items"
                                            :key="index">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.date.substring(0,10)}}
                                            </td>
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.service}}
                                            </td>
                                            <td class="md:py-4 md:px-6 border-b border-grey-light">{{item.cost}}</td>
                                            <td class="md:py-4 md:px-6 border-b border-grey-light text-center">
                                                <button class="px-4 py-2 mt-2" @click="deleteItems(index)">
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

                        <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-4 mb-5">
                            <div class="text-left ">
                                <label class="text-regal-teal " for="date">Date</label>
                                <input v-model="item.date" id="date" type="date"
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md focus:border-regal-blue focus:outline-none">
                            </div>
                            <div class="text-left ">
                                <label class="text-regal-teal " for="services">Services</label>
                                <input v-model="item.service" id="date" type="text"
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md focus:border-regal-blue focus:outline-none">
                            </div>

                            <div class="text-left ">
                                <label class="text-regal-teal " for="cost">Cost</label>
                                <input @keypress="isNumber($event)" :disabled="disabled == 1" v-model.number="item.cost"
                                    id="cost" type="text"
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md focus:border-regal-blue focus:outline-none">
                            </div>

                            <div class="flex justify-center">
                                <button class="px-4 py-2 mt-5 ml-5" @click="addNewItems()">
                                    <img src="@/assets/svgs/plus.svg" alt="" srcset="">
                                </button>

                            </div>
                            <p v-if="!formValid" class="text-red-500 mb-4 text-center">Please enter valid information
                            </p>

                        </div>
                        <!--items-->

                        <div
                            class=" text-lg title-font text-left font-bold text-regal-teal  mb-3 pb-3 pt-2 border-b border-gray-300 mt-5">
                            Add Payments
                        </div>


                        <!--payment list-->
                        <div v-if="this.form.payment.length>=1">
                            <div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-3">
                                <table class="text-left w-full border-collapse">

                                    <thead>
                                        <tr>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Date</th>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Paid</th>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                                Payment Method</th>
                                            <th
                                                class="md:py-4 md:px-6 text-regal-teal font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="hover:bg-grey-lighter" v-for="(item,index) in form.payment"
                                            :key="index">
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.date.substring(0,10)}}</td>
                                            <td class="py-4 px-6 border-b border-grey-light">
                                                {{item.paid}}

                                            </td>
                                            <td class="md:py-4 md:px-6 border-b border-grey-light">
                                                {{item.paymentMethod}}</td>
                                            <td class="md:py-4 md:px-6 border-b border-grey-light text-center">
                                                <button class="px-4 py-2 mt-2 " @click="deletePayments(index)">
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
                        <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-4">
                            <div class="text-left ">
                                <label class="text-regal-teal" for="date">Date</label>
                                <input v-model="payment.date" id="date" type="date"
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white  border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue focus:outline-none ">
                            </div>
                            <div class="text-left ">
                                <label class="text-regal-teal" for="cost">Paid</label>
                                <input @keypress="isNumber($event)" v-model.number="payment.paid" id="cost" type="text"
                                    class="block w-full px-4 py-2 mt-2 text-regal-teal bg-white  border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue focus:outline-none ">
                            </div>

                            <div class="text-left ">
                                <label class="text-regal-teal" for="paymentMethod">Payment
                                    Method</label>
                                <div class="relative">
                                    <select
                                        class="block appearance-none w-full px-4 py-2 mt-1 text-regal-teal bg-regal-white border border-regal-teal border-opacity-50 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-regal-blue  focus:outline-none "
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

                                <button class="px-4 py-2 mt-4 ml-5" @click="addNewPayments()"
                                    v-show="(this.totalPaid<= this.totalCost )">
                                    <img src="@/assets/svgs/plus.svg" alt="" srcset="">
                                </button>
                            </div>
                            <p v-if="!formPayValid" class="text-red-500 mb-4 text-center">Please enter valid information
                            </p>
                        </div>
                        <div class=" flex items-center mt-10"
                            v-show="(this.totalPaid+this.payment.paid)>this.totalCost">
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

                                    <!-- discount -->
                                    <div
                                        class=" text-lg title-font text-left font-bold text-regal-teal  mb-3 pb-3 pt-2 border-b border-gray-300 mt-5">
                                        Discount
                                    </div>

                                    <div class="inline-flex  mt-4  mb-5">
                                        <label for="" class="mr-8 mt-0.5 text-regal-teal font-medium">Give discount in:
                                        </label>
                                        <!-- 
                                        <input type="radio"  name="test_id"
                                            @change="applyDiscount($event)" value="Amount"   v-model="type"
                                            class="form-radio h-5 w-5   mt-1 mr-1" checked="checked"><span
                                            class="text-regal-teal font-medium mt-1 mr-12">Amount</span>
                                        <input type="radio" name="test_id"
                                            @change="applyDiscount($event)" value="Percentage"  v-model="type"
                                            class="form-radio h-5 w-5   mt-1 mr-1"><span
                                            class="text-regal-teal mt-1 mr-12 font-medium">Percentage</span> -->
                                        <input type="radio" name="test_id" @change="applyDiscount()" value="Amount"
                                            @click="onChange($event)" class="form-radio h-5 w-5   mt-1 mr-1"
                                            checked="checked"><span
                                            class="text-regal-teal font-medium mt-1 mr-12">Amount</span>
                                        <input type="radio" name="test_id" @change="applyDiscount()" value="Percentage"
                                            @click="onChange($event)" class="form-radio h-5 w-5   mt-1 mr-1"><span
                                            class="text-regal-teal mt-1 mr-12 font-medium">Percentage</span>

                                    </div>

                                    <div class="flex justify-between ">
                                        <div class="flex justify-between">
                                            <div class="mt-4 mr-5">

                                                <label class="text-regal-teal inline-block " for="discount">Discount
                                                    Amount :</label>
                                            </div>
                                            <div>

                                                <input @keyup="applyDiscount" @keypress="isNumber($event)"
                                                    v-model.number="discountAmount" id="discount" type="text"
                                                    class="block w-full px-4 py-2 mt-2 text-regal-teal border  border-regal-teal border-opacity-50 rounded focus:outline-none focus:border-regal-blue">

                                            </div>

                                        </div>


                                    </div>
                                    <div v-if="this.str.length>=1">


                                        <div class=" flex items-center mt-10 px-8">

                                            <div>
                                                <small class="font-medium text-regal-red">{{this.str}}</small>

                                            </div>

                                        </div>

                                    </div>
                                    <div class=" mt-5 ">
                                        <hr />
                                    </div>
                                    <!--discount-->
                                    <div class="flex justify-start">


                                        <div class=" mt-5  w-full ">
                                            <div class=" flex justify-between mb-3 ">

                                                <div class="text-regal-teal text-md font-bold  mt-1">
                                                    <label for="" class=""> Total Cost:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
                                                    {{this.totalCost}}TK
                                                </div>
                                            </div>
                                            <div class=" flex justify-between mb-3 ">

                                                <div class="text-regal-teal text-md font-bold  mt-1">
                                                    <label for="" class=""> Total Paid:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
                                                    {{this.totalPaid}}TK
                                                </div>
                                            </div>
                                            <div class=" flex justify-between mb-3 ">

                                                <div class="text-regal-teal text-md font-bold  mt-1">
                                                    <label for="" class=""> Discount:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
                                                    {{this.discount}}TK
                                                </div>
                                            </div>
                                            <div class=" flex justify-between  mb-3 ">

                                                <div class="text-regal-teal text-md font-bold  mt-1">
                                                    <label for="" class=""> Adjustment:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
                                                    {{this.totalCost-this.discount}}TK
                                                </div>
                                            </div>
                                            <div class=" flex justify-between  mb-3 ">

                                                <div class="text-regal-teal text-md font-bold  mt-1">
                                                    <label for="" class=""> Balance(Due):</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
                                                    {{this.totalCost-this.totalPaid}}TK
                                                </div>
                                            </div>
                                        </div>
                                        <!-- </div> -->

                                        <!-- </div> -->
                                    </div>
                                    <!--discount-->

                                </form>
                                <!--form-->
                            </div>
                        </div>
                        <!--discount-->


                    </form>
                </div>
                <!--form-->

                <div class="mt-5 " v-if="billModal">
                    <BillModal :form="form" :totalCost="totalCost" :totalPaid="totalPaid" :discount="discount"
                        :balance="balance" @billEvent="removeModalBill" />
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
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
                type: '',
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
            applyDiscount() {

                this.balance = this.totalCost - this.totalPaid

                if (this.isPercentage == 'Percentage') {

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

            //Checking if only numbers inputted
            isNumber(evt) {
                if (!/\d/.test(evt.key)) {
                    return evt.preventDefault();
                } else {
                    return true;
                }
            },


            onChange(event) {
                this.isPercentage = event.target.value;
                console.log(this.isPercentage);
            },

            //Add Sercives to Array
            addNewItems() {
                if (this.item.date === "" || this.item.service === "" || this.item.service.length < 3 || this.item
                    .cost === "") {
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


            //Delete Services from Array
            deleteItems(i) {
                this.form.items.forEach((item, index) => {
                    if (index === i) {
                        this.totalCost = this.totalCost - item.cost
                    }
                })
                this.form.items.splice(i, 1);


            },

            //Add Payment to Array
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

            //Delete Payment From Array
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