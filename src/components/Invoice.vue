<template>
    <div>

        <!--Modal Invoice-->

        <div
            class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
            <div
                class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
                <!--content-->
                <div class="mt-5">
                    <!--body-->
                    <div class="text-center  flex-auto justify-center">
                        <div class="flex justify-end">
                            <button @click="removeModalBill">
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
                        <div class="flex justify-start px-2 mb-5 ">
                            <button @click="print" class="button">Print Invoice
                            </button>
                        </div>
                        <!--main content-->
                        <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  dark:bg-gray-800" id="print">
                            <div class="flex flex-row w-full px-2 mb-10 justify-between">
                                <div class=" ">
                                    <div class="px-0  flex items-start">
                                        <span class="text-gray-600 ">Date</span><span
                                            class="text-gray-400 ml-1">{{this.date}}</span>
                                    </div>
                                    <div class="px-0 flex items-start">
                                        <span class="text-gray-600">Patient Name: </span><span
                                            class="text-indigo-500 text-lg ml-1">{{this.patientData.name}}</span>
                                    </div>
                                    <div class="px-0 flex items-start">
                                        <span class="text-gray-600">Contact: </span><span
                                            class="text-indigo-500 text-lg ml-1">{{this.patientData.phone}}</span>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="px-0 flex items-end">
                                        <span class="text-gray-600">Invoice No # </span><span
                                            class="text-indigo-600 text-lg ml-1">{{this.Bills._id.substring(this.Bills._id.length - 7)}}</span>
                                    </div>
                                </div>
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
                                        <thead class="text-center  border-b-2 border-gray-300 text-sm text-gray-400">
                                            <th class="px-4 py-3">Date</th>
                                            <th class="px-4 py-3  ">Treatment Plan</th>
                                            <th class="px-4 py-3  ">Cost</th>
                                        </thead>

                                        <tbody class="">
                                            <tr class="bg-white  border border-gray-300 hover:bg-gray-100 text-center"
                                                v-for="item in Bills.items" :key="item._id">
                                                <td class="px-4 py-3 p-4  text-gray-500 font-bold uppercase text-sm">
                                                    {{item.date.substring(0,10)}}</td>
                                                <td class="px-4 py-3 text-gray-500 font-semibold uppercase text-sm  ">
                                                    {{item.service}}</td>
                                                <td class="px-4 py-3 text-gray-500 font-bold uppercase text-sm ">
                                                    {{item.cost}}</td>
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
                                        <thead class="text-center  border-b-2 border-gray-300 text-sm text-gray-400">
                                            <th class="px-4 py-3">Date</th>
                                            <th class="px-4 py-3 ">Paid</th>
                                            <th class="px-4 py-3 ">Payment</th>
                                        </thead>

                                        <tbody class="">
                                            <tr class="bg-white  border border-gray-300 hover:bg-gray-100 text-center"
                                                v-for="item in Bills.payment" :key="item._id">
                                                <td class="px-4 py-3 p-4  text-gray-500 font-bold uppercase text-sm">
                                                    {{item.date.substring(0,10)}}</td>
                                                <td class="px-4 py-3 text-gray-500 font-bold uppercase text-sm  ">
                                                    {{item.paid}}</td>

                                                <td class="px-4 py-3 text-gray-500 font-bold uppercase text-sm ">
                                                    {{item.paymentMethod}}</td>
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
                            
                            <div class="flex item-end justify-end ">
                                <div class="">
                                    <div class=" mt-5  w-full ">
                                        <div class=" flex mb-3 ">

                                            <div class="text-gray-400 text-md font-bold uppercase mt-1 inline-block">
                                                <label class=" whitespace-nowrap" for="" > Total Cost:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                TK{{Bills.total}}
                                            </div>
                                        </div>
                                        <!-- <div class=" flex mb-3 ">

                                            <div class="text-gray-400 text-md font-bold uppercase mt-1 inline-block">
                                                <label class=" whitespace-nowrap" for="" > Total Paid:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                TK{{this.paid}}
                                            </div>
                                        </div> -->
                                        <div class=" flex  mb-3 " v-if="Bills.discount>0">

                                            <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                <label for="" class=" whitespace-nowrap"> Discount:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                TK{{Bills.discount}}
                                            </div>
                                        </div>
                                        <div class=" flex  mb-3 ">

                                            <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                <label for="" class=" whitespace-nowrap"> Adjustment:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                TK{{Bills.adjustment}}
                                            </div>
                                        </div>
                                        <div class=" flex  mb-3 ">

                                            <div class="text-gray-400 text-md font-bold uppercase mt-1">
                                                <label for="" class=" whitespace-nowrap"> Balance(Due):</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-gray-500 mt-1 font-bold">
                                                TK{{Bills.balance}}
                                            </div>
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
        <!--Modal Invoice-->
    </div>
</template>

<script>
    import printJS from "print-js"
    import axios from "axios"
    export default {
        created() {
            this.getPosts(this.$route.params.id)
        },
        props: {
            Bills: Object,
            paid: Number

        },
        data() {
            return {
                patientData: {},
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
            }
        },
        methods: {
            //Remove Modal
            removeModalBill() {
                this.$emit("billEvent")
            },

            //Get Specific Patient
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

            //Print Bill
            print() {
                printJS({
                    printable: "print",
                    type: 'html',
                    targetStyles: ['*'],
                    style: ['*'],
                    maxWidth: 800,
                    gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
                    header: ['Invoice']

                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>