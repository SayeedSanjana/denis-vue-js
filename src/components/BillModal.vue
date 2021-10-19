<template>
    <div>

        <!--Modal Prescription-->

        <div
            class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
            <div
                class="w-full  lg:max-w-3xl max-w-lg   rounded-xl p-6 pr-0 relative mx-auto my-auto  shadow-lg  bg-white">
                <!--content-->
                <div class="mt-5 overflow-y-scroll h-xxl">
                    <!--body-->
                    <div class="text-center  flex-auto justify-center">
                        <div class="flex justify-end mr-6">
                            <button @click="removeModalBill">
                                <svg class="w-5 h-5" height="512pt" viewBox="0 0 512 512" width="512pt"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                                        fill="#f44336" />
                                    <path
                                        d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                                        fill="#fafafa" /></svg>
                            </button>
                        </div>
                        <!-- <div class="flex justify-start px-2 mb-5">
                            <button @click="print" class="button"> Save
                            </button>
                        </div> -->

                        <!--main content-->
                        <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  dark:bg-gray-800" id="print">
                            <div class=" mb-4 flex justify-between">
                                <div class=" mb-6  w-full text-left flex justify-start">
                                    <div>
                                        <div class="font-medium text-md text-regal-teal "> Date:
                                            <span class="text-md font-normal  text-regal-teal ml-2 ">{{this.date}}</span>
                                        </div>
                                        <div class="font-medium text-md text-regal-teal inline-flex"> PatientName:
                                            <span
                                                class="text-md font-normal text-regal-teal ml-2 ">{{this.patientData.name}}</span>
                                        </div>

                                        <div class="text-regal-teal font-medium text-md ">Contact:<span
                                                class="text-md text-regal-teal font-normal ml-2">{{this.patientData.phone}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!--Services List-->

                            <div class="flex justify-between w-full">
                                <div
                                    class=" text-md title-font font-bold text-regal-teal  pb-1 pt-2 ">
                                    Services List:
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-center items-center mt-3">

                                    <table class="  p-5 w-full mx-auto bg-regal-blue bg-opacity-30 rounded-t-xl">
                                        <thead class="text-left text-sm text-regal-teal  border-b-2 border-regal-teal border-opacity-30  ">
                                            <th class="  w-1/3 px-10 py-3">Date</th>
                                            <th class="px-10 py-3 w-1/3 ">Treatment Done</th>
                                            <th class="px-10 py-3 w-1/3 ">Cost</th>


                                        </thead>

                                        <tbody class="text-left">
                                            <tr class="bg-white  border-b border-regal-cyan border-opacity-50 "
                                                v-for="item in form.items" :key="item._id">
                                                <td class="px-10 py-3 w-1/3  text-regal-teal font-medium  text-sm">
                                                    {{item.date.substring(0,10)}}</td>
                                                <td class="px-10 py-3 w-1/3  text-regal-teal font-medium  text-sm  ">
                                                    {{item.service}}</td>
                                                <td class="px-10 py-3 w-1/3 text-regal-teal font-medium  text-sm ">
                                                    {{item.cost}} TK</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!--Services List-->

                            <!--Payment Description-->
                            <div class="flex justify-between w-full mt-5">
                                <div
                                    class=" text-md title-font font-bold text-regal-teal   pb-1 pt-2 ">
                                    Payment Description:
                                </div>
                            </div>
                            <div>
                                <div class="flex justify-center items-center mt-3 ">
                                    
                                    <table class="p-5 w-full mx-auto bg-regal-blue bg-opacity-30 rounded-t-xl">
                                        <thead class="text-left text-sm text-regal-teal  border-b-2 border-regal-teal border-opacity-30 " >
                                            <th class="px-10 py-3 w-1/3">Date</th>
                                            <th class="px-10 py-3 w-1/3 ">Paid</th>
                                            <th class="px-10 py-3 w-1/3 ">Payment</th>
                                        </thead>

                                        <tbody class="text-left">
                                            <tr class="bg-white  border-b border-regal-cyan border-opacity-50 "
                                                v-for="item in form.payment" :key="item._id">
                                                <td class="px-10 py-3 w-1/3  text-regal-teal font-medium  text-sm">
                                                    {{item.date.substring(0,10)}}</td>
                                                <td class="px-10 py-3 w-1/3 text-regal-teal font-medium text-sm  ">
                                                    {{item.paid}} TK</td>

                                                <td class="px-10 py-3 w-1/3 text-regal-teal font-medium text-sm ">
                                                    {{item.paymentMethod}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!--Payment Description-->

                           


                            <!--Payment Info-->
                            <div class=" ">
                                <div class="  mr-10">
                                    <div class=" mt-5  w-full ">
                                        <div class=" flex justify-between mb-3 ">

                                            <div class="text-regal-teal text-md font-bold  mt-1">
                                                <label for="" class=""> Subtotal:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-regal-teal mt-1 font-bold">
                                                {{this.totalCost}} TK
                                            </div>
                                        </div>
                                        <div class=" flex justify-between mb-3 " v-if="this.discount>0">

                                            <div class="text-regal-teal text-md font-bold  mt-1">
                                                <label for="" class=""> Discount:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-regal-teal mt-1 font-bold">
                                                {{this.discount}} TK
                                            </div>
                                        </div>
                                        <div class=" flex justify-between mb-3 " v-if="this.discount>0">

                                            <div class="text-regal-teal text-md font-bold  mt-1">
                                                <label for="" class=""> Adjustment:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-regal-teal mt-1 font-bold">
                                                {{this.totalCost-this.discount}} TK
                                            </div>
                                        </div>
                                         <div class=" flex justify-between mb-3 ">
                                            <div class="text-regal-teal text-md font-bold  mt-1">
                                                <label for="" class="">Recieved:</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-regal-teal mt-1 font-bold">
                                                {{this.totalPaid}} TK
                                            </div>
                                        </div>
                                        <div class=" flex justify-between mb-3 ">

                                            <div class="text-regal-teal ml-1 text-md font-bold  mt-1">
                                                <label for="" class=""> Balance(Due):</label>
                                            </div>
                                            <div class="text-md rounded ml-2 text-regal-teal mt-1 font-bold">
                                                {{this.totalCost-this.totalPaid-this.discount}} TK
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--Payment Info-->

                            <div class="flex justify-center px-2 mb-5 mt-6">
                            <button @click="print" class="px-6 py-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex"> Save
                            </button>
                        </div>
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
    import axios from "axios"
    import swal from "sweetalert"
    export default {
        created() {
            this.getPosts(this.$route.params.id)
        },
        props: {
            form: Object,
            totalCost: Number,
            totalPaid: Number,
            balance: Number,
            discount: Number

        },
        data() {
            return {
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                patientData: {}
            }
        },
        methods: {
            //Remove Modal
            removeModalBill() {
                this.$emit("billEvent")
            },


            //Print Bill
            async print() {

                await axios.post('billings/create', this.form, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        const id = this.$route.params.id
                        swal({
                            title: "Success",
                            text: "Bills created Successfully!",
                            icon: "success",
                            timer: 2000,
                            buttons: false
                        }).then(function () {
                            new Promise(resolve => setTimeout(resolve, 2000));
                            window.location = `/specific-billing/${id}`;
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                    })

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
                        //console.log(ageDifMs);
                        const ageDate = new Date(ageDifMs);
                        this.patientData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                    })


                    .catch((error) => {
                        console.log(error)

                    })

            },
        }
    }
</script>

<style scoped>
   
</style>