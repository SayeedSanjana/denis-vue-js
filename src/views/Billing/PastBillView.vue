<template>

    <div class="px-32">

        <div class=" mb-4 flex justify-between">
            <div class=" mb-6  w-full text-left">
                <div>
                    <div class="font-semibold text-md text-gray-700  "> Date:
                        <span class="text-lg font-medium text-indigo-500  ">{{this.date}}</span></div>
                    <div class="font-semibold text-md text-gray-700  "> Patient Name:
                        <span class="text-lg font-medium text-indigo-500">{{this.patientData.name}}</span></div>

                    <div class="text-gray-700 font-semibold text-md ">Contact: <span
                            class="text-lg font-medium">{{this.patientData.phone}}</span> </div>
                </div>
            </div>
        </div>

        <!--list-->
        <div class="">
            <div class="flex justify-between w-full">
                <div
                    class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 pb-1 pt-2 ">
                    List of Services
                </div>
                <button class="text-gray-400 mr-4 font-bold hover:text-indigo-500 " @click="openModalService">+ Add More
                    Services</button>
            </div>
            <BillItems :Bills="Bills" />
        </div>
        <!--list-->

        <!--Payment Methods-->
        <div class="">
            <div class="flex justify-between w-full">
                <div
                    class="tracking-widest text-lg title-font font-bold text-gray-600  border-b border-gray-300 pb-1 pt-2 ">
                    Payment Descriptions
                </div>
                <button class="text-gray-400 mr-4 font-bold hover:text-indigo-500 " @click="openModalPayment">+ Add More
                    Payment Info</button>
            </div>
            <PaymentMethods :Bills="Bills" />
        </div>

        <!--Payment Methods-->

        <div class="mt-4">
            <hr>
        </div>
        <div class="flex justify-between w-full">
            <div>
                <form @submit.prevent>
                    <div
                        class="tracking-widest text-lg text-left title-font font-bold text-gray-600 mt-12 border-b border-gray-300 mb-4 w-1/4">
                        Discount
                    </div>
                    <div class="flex justify-start items-center mt-2">
                        <label for="" class="m-1 text-gray-800 ">Give discount in?</label>

                        <input type="radio" name="test_id" @change="onChange($event)" value="Amount" @keypress="applyDiscount" 
                            class="form-radio h-5 w-5 text-indigo-600 mr-1" checked="checked"><span
                            class="ml-1 mr-1 text-gray-700">Amount</span>
                        <input type="radio" name="test_id" @change="onChange($event)" value="Percentage" @keypress="applyDiscount" 
                            class="form-radio h-5 w-5 text-indigo-600 mr-1"><span
                            class="ml-1 mr-1 text-gray-700">Percentage</span>
                    </div>

                    <div class="flex justify-start">
                        <div class="text-left">
                            <label class="text-gray-700 dark:text-gray-200 ml-1" for="discount">Discount Amount</label>
                            <input @keyup="applyDiscount" @keypress="isNumber($event)" v-model.number="discountAmount" id="discount"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        </div>
                        <div class="flex justify-center mt-6  ml-3" v-if="this.str.length==0">
                            <button @click="discountApply()" class="button">Confirm</button>
                        </div>
                    </div>
                                      <div v-if="this.type==='Amount' || this.type==='Percentage'">{{this.applyDiscount()}}</div> 
                    <!-- <div>{{this.applyDiscount()}}</div> -->
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
                </form>
                <!--form-->

            </div>
            <div class="w-1/2 px-10 mr-20">
                <PaymentInfo :Bills="Bills" :discount="discount" />
            </div>
        </div>

        <div class="mr-3 mt-2 flex-1 w-full mb-10">
            <button @click="printModal"
                class=" inline-flex border rounded-md border-indigo-500 text-indigo-500 text-center font-bold text-md hover:text-gray-500 p-2 pl-3 pr-2">
                <svg class="w-5 h-5 mr-2 fill-current text-indigo-600" height="457pt" viewBox="-15 0 457 457.14286"
                    width="457pt" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m388.210938 148.9375c-.457032-.367188-1.003907-.644531-1.554688-.914062-.550781-.183594-1.097656-.367188-1.738281-.460938-1.734375-.367188-3.566407-.183594-5.210938.460938-1.1875.453124-2.195312 1.1875-3.019531 2.007812-1.644531 1.648438-2.648438 4.023438-2.648438 6.492188 0 2.378906 1.003907 4.753906 2.648438 6.402343.824219.914063 1.832031 1.550781 3.019531 2.011719 1.097657.457031 2.285157.726562 3.476563.726562.542968 0 1.1875-.089843 1.734375-.183593.640625-.179688 1.1875-.359375 1.738281-.542969.550781-.277344 1.097656-.550781 1.554688-.824219.546874-.367187 1.003906-.734375 1.464843-1.1875 1.640625-1.648437 2.648438-4.023437 2.648438-6.402343 0-2.46875-1.007813-4.753907-2.648438-6.492188-.460937-.457031-.917969-.820312-1.464843-1.09375zm0 0" />
                    <path
                        d="m351.820312 152.960938c-.277343-.550782-.546874-1.011719-.820312-1.554688-.367188-.460938-.730469-.914062-1.191406-1.375-2.558594-2.558594-6.582032-3.378906-9.964844-2.007812-1.097656.453124-2.101562 1.1875-2.925781 2.007812-1.734375 1.738281-2.742188 4.023438-2.742188 6.492188 0 1.191406.273438 2.378906.730469 3.476562.460938 1.09375 1.097656 2.101562 2.011719 2.925781.824219.914063 1.828125 1.550781 2.925781 2.011719 1.097656.457031 2.285156.726562 3.566406.726562 2.375 0 4.753906-1.003906 6.398438-2.738281.914062-.824219 1.558594-1.832031 2.011718-2.925781.457032-1.097656.734376-2.285156.734376-3.476562 0-.640626-.09375-1.1875-.183594-1.828126-.183594-.546874-.367188-1.1875-.550782-1.734374zm0 0" />
                    <path
                        d="m402.820312 104.210938h-60.980468v-95.066407c0-5.050781-4.09375-9.144531-9.144532-9.144531h-238.042968c-5.050782 0-9.144532 4.09375-9.144532 9.144531v95.066407h-60.980468c-13.488282 0-24.4570315 10.96875-24.4570315 24.453124v197.472657c0 13.488281 10.9687495 24.457031 24.4570315 24.457031h60.980468v97.40625c0 5.050781 4.09375 9.144531 9.144532 9.144531h238.042968c5.050782 0 9.144532-4.09375 9.144532-9.144531v-97.40625h60.980468c13.488282 0 24.457032-10.96875 24.457032-24.457031v-197.472657c0-13.484374-10.96875-24.453124-24.457032-24.453124zm-299.027343-85.925782h219.761719v85.925782h-219.761719zm0 420.570313v-174.945313h219.761719v174.945313zm305.199219-112.71875c0 3.402343-2.769532 6.171875-6.171876 6.171875h-60.980468v-68.398438h28.6875c5.046875 0 9.140625-4.09375 9.140625-9.140625 0-5.050781-4.09375-9.144531-9.140625-9.144531h-313.707032c-5.046874 0-9.140624 4.09375-9.140624 9.144531 0 5.046875 4.09375 9.140625 9.140624 9.140625h28.6875v68.398438h-60.980468c-3.402344 0-6.171875-2.769532-6.171875-6.171875v-197.472657c0-3.402343 2.769531-6.167968 6.171875-6.167968h378.292968c3.402344 0 6.171876 2.765625 6.171876 6.167968zm0 0" />
                    <path
                        d="m133.4375 314.277344h110.09375c5.050781 0 9.144531-4.09375 9.144531-9.144532 0-5.046874-4.09375-9.140624-9.144531-9.140624h-110.09375c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532zm0 0" />
                    <path
                        d="m293.910156 342.242188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0" />
                    <path
                        d="m293.910156 388.492188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0" />
                </svg>
                Print Invoice
            </button>
        </div>

        <!--Modal Service-->
        <div v-show="openModalSer">
            <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id">
                <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
                <div
                    class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <!--content-->
                    <div class="mt-5">
                        <!--body-->
                        <div class="text-center  flex-auto justify-center">
                            <!--item-->
                            <div class="flex justify-end">
                                <button @click="removeSer">

                                    <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                                            fill="#f44336" />
                                        <path
                                            d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                                            fill="#fafafa" /></svg>
                                </button>
                            </div>
                            <form @submit.prevent>
                                <div
                                    class="tracking-widest text-lg title-font font-bold text-gray-500  border-b border-gray-300 ">
                                    Add More Items
                                </div>
                                <!--items-->
                                <div class="lg:grid lg:grid-cols-1 lg:gap-6 lg:mt-4 lg:grid-cols-4">
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="date">Date</label>
                                        <input v-model="item.date" id="date" type="date"
                                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="services">Treatment
                                            Plan</label>
                                        <input v-model="item.service" id="date" type="text"
                                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    </div>

                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="cost">Cost</label>
                                        <input @keypress="isNumber($event)" v-model.number="item.cost" id="cost"
                                            type="text"
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

                                    </div>

                                    <p v-if="!formPayValid" class="text-red-500 mb-4 text-center">Please enter valid
                                        information</p>
                                </div>
                                <!--items-->

                                <!--item list-->
                                <div v-show="this.items.length>=1">
                                    <div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-3 pl-4 pr-3">
                                        <div
                                            class="tracking-widest text-md title-font font-bold text-gray-500  border-b border-gray-300 pb-3 pt-2 flex justify-start">
                                            Items Added:</div>

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
                                                <tr class="hover:bg-grey-lighter" v-for="(item,index) in items"
                                                    :key="item._id">
                                                    <td class="py-4 px-6 border-b border-grey-light">
                                                        {{item.date.substring(0,10)}}
                                                    </td>
                                                    <td class="py-4 px-6 border-b border-grey-light">
                                                        {{item.service}}
                                                    </td>
                                                    <td class="md:py-4 md:px-6 border-b border-grey-light">{{item.cost}}
                                                    </td>
                                                    <td class="md:py-4 md:px-6 border-b border-grey-light">
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
                                <!--item-list-->
                                <!--cost-->
                                <div class="flex justify-end" v-show="this.items.length>=1">
                                    <div class="  ml-6 mr-10">
                                        <div class=" mt-5  w-full ">
                                            <div class=" flex  mb-3 ">

                                                <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                    <label for="" class=""> Total Cost:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                    TK{{this.totalCost}}
                                                </div>
                                            </div>

                                            <div class=" flex  mb-3 ">

                                                <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                    <label for="" class=""> Sub total:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                    TK{{this.subtotal}}
                                                </div>
                                            </div>
                                            <div class=" flex  mb-3 ">

                                                <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                    <label for="" class=""> Balance(Due):</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                    TK{{Bills.balance+this.totalCost}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <!--cost-->
                                <div class="flex justify-center mt-10 ">
                                    <button @click="addItems()" class="button">Add Services</button>
                                </div>
                            </form>

                            <!--form-->

                            <!--item-->
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!--modal service-->

        <!--Modal payment-->
        <div v-show="openModalPay">
            <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
                id="modal-id">
                <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
                <div
                    class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                    <!--content-->
                    <div class="mt-5">
                        <!--body-->
                        <div class="text-center  flex-auto justify-center">
                            <!--payment-->
                            <div class="flex justify-end">
                                <button @click="removePay">

                                    <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                                            fill="#f44336" />
                                        <path
                                            d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                                            fill="#fafafa" /></svg>
                                </button>
                            </div>
                            <form @submit.prevent>
                                <div
                                    class="tracking-widest text-lg title-font font-bold text-gray-500  border-b border-gray-300 ">
                                    Add Payment Information
                                </div>

                                <!--payment-->

                                <div class="lg:grid lg:grid-cols-1 lg:gap-6 lg:mt-4 lg:grid-cols-4">
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="date">Date</label>
                                        <input v-model="payment.date" id="date" type="date"
                                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    </div>
                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="paid">Paid</label>
                                        <input @keypress="isNumber($event)" v-model.number="payment.paid" id="date"
                                            type="text"
                                            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    </div>

                                    <div>
                                        <label class="text-gray-700 dark:text-gray-200" for="cost">Payment
                                            Method</label>
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

                                    </div>
                                    <p v-if="!formValid" class="text-red-500 mb-4 text-center">Please enter valid
                                        information</p>

                                </div>
                                <!--payment-->

                                <div v-if="this.Bills.balance<(this.totalPaid+this.payment.paid)">


                                    <div class=" flex items-center mt-10">
                                        <svg class="h-6 w-6 fill-current text-red-400 mr-4"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path
                                                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                        </svg>
                                        <div>
                                            <p class="font-medium text-red-500">Paid Amount exceeding due</p>

                                        </div>
                                    </div>
                                </div>

                                <!--payment list-->
                                <div v-show="this.payments.length>=1">
                                    <div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-3">
                                        <table class="text-left w-full border-collapse">
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
                                                <tr class="hover:bg-grey-lighter" v-for="(item,index) in payments"
                                                    :key="index">
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
                                <!--payment-list-->

                                <!--paid-->
                                <div v-show="this.payments.length>=1" class="flex justify-end ">
                                    <div class="  ml-6 mr-10">
                                        <div class=" mt-5  w-full ">
                                            <div class=" flex  mb-3 ">
                                                <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                    <label for="" class=""> Total Paid:</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                    TK{{this.totalPaid}}
                                                </div>
                                            </div>
                                            <div class=" flex  mb-3 ">
                                                <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                    <label for="" class=""> Balance(Due):</label>
                                                </div>
                                                <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                    TK{{this.afterPaid}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-center mt-10 ">
                                    <button @click="addPayments()" class="button">Add Payment Info</button>
                                </div>
                            </form>

                            <!--form-->

                            <!--item-->
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div class="mt-5 " v-if="modalInvoice">
            <Invoice @billEvent="removeModal" :Bills="Bills" :paid="paid" />
        </div>
        <!--modal service-->

        <!--modal discount -->

        <!--modal discount-->


    </div>
</template>


<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    import BillItems from "../../components/BillItems.vue";
    import PaymentMethods from "../../components/PaymentMethods.vue";
    import PaymentInfo from "../../components/PaymentInfo.vue";
    import Invoice from "../../components/Invoice.vue";

    export default {
        props: {
            changecomponent: Boolean,
            billId: String
        },
        components: {
            BillItems,
            PaymentMethods,
            PaymentInfo,
            Invoice


        },
        created() {
            this.getBill(this.billId),
                this.getPosts(this.$route.params.id)
        },
        data() {
            return {
                token: localStorage.getItem('token'),
                formValid: true,
                formPayValid: true,
                patientData: {
                    name: "",
                    gender: "",
                    dob: "",
                    phone: ""

                },
                modalInvoice: false,
                paid: 0,
                openModalSer: false,
                isPercentage: null,
                adjustment: 0,
                discount: 0,
                discountAmount: 0,
                openModalPay: false,
                openModalDis: false,
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                default: true,
                paymentMethods: ['bKash', 'Nagad', 'Rocket', 'Card-Debit', 'Visa', 'Cash'],
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
                amountDiscount: {
                    discount: 0
                }

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

            async getPosts(id) {
                await axios.get('patients/' + id, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {

                        this.patientData = response.data.result;
                        const ageDifMs = Date.now() - new Date(this.patientData.dob.substring(0, 10)).getTime();
                        const ageDate = new Date(ageDifMs);
                        this.patientData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            removeDis() {
                this.openModalDis = false
            },
            removeSer() {
                this.openModalSer = false
            },
            removePay() {
                this.openModalPay = false
            },

            onChange(event) {
                this.isPercentage = event.target.value;
            },

            applyDiscount() {
                if (this.isPercentage == 'Percentage') {
                    if (this.discountAmount <= 100) {
                        this.discount = (this.Bills.total / 100) * this.discountAmount
                        this.amountDiscount.discount = this.discount
                        this.str = ""
                        if (this.Bills.balance - this.discount >= 0) {
                            this.adjustment = this.Bills.total - this.discount
                            this.str = ""
                        } else {
                            this.str = "Discount amount exceeding balance"
                        }

                    } else {
                        this.str = "Percentage is exceeding 100%"
                    }
                } else  {
                    this.str = ""
                    this.discount = this.discountAmount
                    this.amountDiscount.discount = this.discount
                    if (this.Bills.balance - this.discount >= 0) {
                        this.adjustment = this.Bills.total - this.discount
                        this.str = ""

                    } else {
                        this.str = "Discount amount exceeding balance"
                    }
                }
            },
            openModalService() {
                this.openModalSer = true

            },
            openModalPayment() {
                this.openModalPay = true

            },
            openModalDiscount() {
                this.openModalDis = true

            },

            addNewItems() {
                if (this.item.date === "" || this.item.service === "" || this.item.service.length < 3 || this.item
                    .cost === "") {
                    this.formValid = false
                } else {
                    this.items.push(this.item)
                    this.totalCost = this.totalCost + parseInt(this.item.cost)
                    this.balance = this.Bills.balance
                    this.subtotal = this.balance + this.totalCost
                    this.item = {
                        date: '',
                        service: '',
                        cost: 0
                    }
                    this.formValid = true
                }
            },

            addNewPayments() {
                if (this.payment.date === "" || this.payment.paid === "" || this.payment.paymentMethod === "") {
                    this.formPayValid = false
                } else {
                    if (this.Bills.balance >= (this.totalPaid + this.payment.paid)) {
                        this.payments.push(this.payment)
                        this.totalPaid = this.totalPaid + parseInt(this.payment.paid)
                        this.balance = this.Bills.balance
                        this.afterPaid = this.balance - this.totalPaid
                        this.str = ""

                    } else {
                        this.str = "Payment exceeding due"

                    }
                    this.payment = {
                        date: '',
                        paid: 0,
                        paymentMethod: ''
                    }
                    this.formPayValid = true
                }
            },

            async addItems() {
                this.items.forEach((item) => {
                    this.form.items.push(item)
                })
                await axios.put('billings/' + this.billId + '/add-bill', this.form, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        this.items = []

                        this.form = {

                            items: []
                        }
                        this.getBill(this.billId)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                this.openModalSer = false
                this.items = []
                this.form = {
                    items: []
                }
                this.getBill(this.billId)
                this.totalCost = 0
            },

            async addPayments() {
                this.payments.forEach((item) => {
                    this.formData.payment.push(item)
                })
                await axios.put('billings/' + this.billId + '/add-payment', this.formData, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        this.payments = []
                        this.formData = {

                            payment: []
                        }
                        this.getBill(this.billId)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                this.openModalPay = false
                this.payments = []
                this.formData = {

                    payment: []
                }
                this.getBill(this.billId)
                this.totalPaid = 0

            },
            discountApply() {
                console.log(this.amountDiscount)
                axios.patch('billings/' + this.billId + '/discount', this.amountDiscount, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        swal({
                            title: "Success",
                            text: "DiscounT Added Successfully!",
                            icon: "success",
                            timer: 1000,
                            buttons: false
                        })
                        this.amountDiscount = {}
                        this.discountAmount = 0
                        this.discount = 0
                        this.amountDiscount.discount = 0
                        console.log("discount")
                        console.log(this.discount)
                        this.getBill(this.billId)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                this.openModalDis = false
            },

            async getBill(id) {
                console.log(id)
                await axios.get('billings/' + id, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.Bills = response.data['result'];
                        this.Bills.payment.forEach(item => {
                            this.paid = item.paid + this.paid
                        })
                        console.log("Bills")
                        console.log(this.Bills)
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMsg = 'Error retrieving data'
                    })
            },

            deleteItems(i) {
                this.items.forEach((item, index) => {
                    if (index === i) {
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
                        this.totalPaid = this.totalPaid - item.paid
                    }
                })
                this.afterPaid = this.balance - this.totalPaid
                this.payments.splice(i, 1);
            },

            printModal() {
                this.modalInvoice = true
            },

            removeModal() {
                this.modalInvoice = false
            },

            change() {
                window.location.reload();
            },

        }

    }
</script>

<style lang="scss" scoped>

</style>