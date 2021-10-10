<template>
    <header class="sticky top-0 z-50">

        <Nav />
    </header>

    <h2 class="text-2xl text-left font-bold mx-24 mt-10 text-regal-teal">Patient Billing</h2>
    <div class="mx-24 my-14">
        <div class=" lg:flex border border-regal-teal border-opacity-20 rounded-xl ">
            <div class="xl:w-1/3  ">

                <div
                    class="container md:flex md:items-center md:justify-center mx-auto text-gray-600  bg-regal-blue border rounded-tl-xl  border-regal-cyan border-opacity-20 py-3 ">

                    <h2 class="pb-1 text-regal-teal font-semibold">
                        Treatment Done
                    </h2>
                </div>
                <div class="border border-r-2  border-regal-blue border-opacity-10">

                    <TreatmentTimeline :treatmentList="treatmentList" />
                </div>

            </div>
            <div class="xl:w-2/3 ">
                
                <div
                    class="container md:flex md:items-center md:justify-center mx-auto text-gray-600  bg-regal-blue border rounded-tr-xl  border-regal-cyan border-opacity-20 py-3">
                    
                    <button @click="activeTab = 'NewBill'"
                        :class="activeTab==='NewBill' ? 'border-regal-teal text-regal-teal' : 'border-regal-blue'"
                        class="border-b-2 border-transparent mx-1.5 mt-0.5 sm:mx-6 font-semibold  text-white">Create
                        New Bill
                    </button>
                    <button @click="activeTab = 'PastBillList'"
                        :class="activeTab==='PastBillList' ? 'border-regal-teal text-regal-teal' : 'border-regal-blue'"
                        class="border-b-2 border-transparent mx-1.5 mt-0.5 sm:mx-6 font-semibold text-white">History</button>

                </div>
                <keep-alive>
                    <component :is="activeTab" />
                </keep-alive>

                <div v-show="show">
                    <PastBillList :Billing="Billing" show="show" />
                </div>

            </div>


        </div>
        <!-- <div class="md:flex h-screen md:py-16 bg-white px-3 "> -->
        <!--main-->
        <!-- <div class="xl:flex justify-between md:ml-3 w-screen ">
                <div class="xl:w-1/3 xl:ml-5 xl:mr-5 pt-3 xl:pt-0 md:mb-4 ">
                    
                    <div class="">
                        <TreatmentTimeline :treatmentList="treatmentList" />
                    </div>
                </div> -->

    </div>
    <!-- </div> -->


</template>

<script>
    import NewBill from "./NewBill.vue";
    import TreatmentTimeline from "../../components/TreatmentTimeline.vue";
    import Nav from "../../components/Nav.vue";
    import PastBillList from "./PastBillList.vue";
    import axios from "axios"
    export default {


        components: {
            NewBill,
            TreatmentTimeline,
            Nav,
            PastBillList
        },


        created() {
            this.getspecificTreatmentList()
        },

        data() {
            return {
                token: localStorage.getItem('token'),
                activeTab: 'NewBill',
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                default: true,
                Billing: [],
                form: {},
                treatmentList: [],
                show: false

            }
        },
        methods: {
            async getspecificTreatmentList() {
                await axios.get('treatment-notes/' + this.$route.params.id + '/patient', {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.treatmentList = response.data['result']
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },

            async getBills(id) {
                await axios.get('billings/' + id + '/list-bills', {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.Billing = response.data['result'];
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMsg = 'Error retrieving data'
                    })
            },
        }
    }
</script>

<style scoped>

</style>