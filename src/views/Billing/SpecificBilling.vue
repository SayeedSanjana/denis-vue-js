<template>
         <header class="sticky top-0 z-50">

       <Nav />
    </header>
    <div class="px-4 py-4 ">

        <div class="md:flex  h-screen md:py-16 bg-white px-3  ">
            <!--main-->


            <div class="xl:flex justify-between md:ml-3 w-screen">
                <div class="xl:w-1/3 xl:ml-5 xl:mr-5 pt-3 xl:pt-0 md:mb-4 border-r border-gray-300">
                    <div class="tracking-widest text-lg title-font font-bold text-gray-600   pb-3 pt-2  mt-3 ml-2">
                        Treatments Prescribed
                    </div>
                    <div class="">
                       <TreatmentTimeline :treatmentList = "treatmentList"/>
                    </div>

                </div>
                <div class="xl:w-2/3 pt-3 xl:pt-0">

                    <div class="bg-white md:shadow dark:bg-gray-800  p-4">
                        <div
                            class="p-6 container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">


                            <button @click="activeTab = 'NewBill'" :class="activeTab==='NewBill' ? 'border-indigo-500' : 'border-white'"
                                class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">Create
                                New Bill
                            </button>

                            <button @click="activeTab = 'PastBillList'"  :class="activeTab==='PastBillList' ? 'border-indigo-500' : 'border-white'"
                                class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">Bills</button>


                        </div>

                        <keep-alive>
                            <component :is="activeTab" />
                        </keep-alive>
                           
                               <div v-show="show">  
                            <PastBillList  :Billing="Billing" show="show" /> 
                            </div> 

                    </div>
                </div>
            </div>





        </div>

    </div>
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

            //this.getBills(this.$route.params.id),
            this.getspecificTreatmentList()


        },
        // beforeUpdate(){
        // this.getBills(this.$route.params.id)
        // },
        // updated(){
        // this.getBills(this.$route.params.id)
        // },

        data() {
            return {
                token: localStorage.getItem('token'),
                activeTab: 'NewBill',
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                default: true,
                Billing:[],
                form: {},
                treatmentList:[],
                show:false

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
                    //  console.log(this.treatmentList)
                })
                .catch((error) => {
                    console.log(error);
                })
        },
           
           async getBills(id) {
                await axios.get('billings/' + id + '/list-bills' , 
                {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}}
                )
                    .then((response) => {
                        console.log(response.data['result']);
                        this.Billing = response.data['result'];
                        console.log(this.Billing)

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