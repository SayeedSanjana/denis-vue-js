<template>
    <div>

        <!--Modal Prescription-->
        <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>

            <!-- modal start -->
            <div class="w-full lg:max-w-3xl max-w-lg relative mx-auto my-auto shadow-lg ">
                <div class="overflow-hidden overflow-y-scroll h-screen no-scrollbar"> 

                    <div class="flex justify-between mb-3 mt-2 mr-2">
                        <!-- Button for print and save prescription and cross button -->
                        <div class="flex justify-center  " id="no-print">
                            <button @click="print" class="px-6 py-3 mr-2 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex"> Print And Save Prescription</button>
                            <button @click="addPres" class="px-6 py-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex">Save Prescription</button>
                        </div> 
                            
                        <div class="flex items-center">
                            <button @click="removeModal">
                                <svg class="w-5 h-5" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336" />
                                <path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa" />
                                </svg>
                            </button>
                        </div>
                    </div>

                <!--main content-->
                    <section class="bg-white font-sans px-10" id="print">
                            
                        <!-- header start-->
                        <header class="flex justify-between pb-4">
                        <!-- Logo -->
                            <img class="px-12 py-4" src="@/assets/svgs/mt-logo-V2.svg" alt="dental-center-logo.svg">  
                            <p class="text-xs text-left py-5 mx-6 text-gray-900">Address: House No 12 (1st Floor), Road No 14 (New) <br> Dhanmondi, Dhaka-1209, Mobile: 01688-329552, 01817-094331, Email: mhkmusa@gmail.com</p>
                        </header>
                        <!-- header end -->

                        <!-- body start -->
                        <div class="container-2xl px-12"> 
                            
                        <!--  Doctor Info -->
                            <div class="mb-5 text-sm font-sans">
                                <label class="font-semibold text-gray-900 px-0 flex items-start">Prescription Details </label>
                                <label class="font-semibold flex items-start text-gray-900 ">Prescribed Date: <span class="text-gray-700 font-normal">{{this.date}}</span></label>
                                <label class="font-semibold flex items-start text-gray-900 ">Prescribed By: <span class="text-gray-700">Dr. {{this.userData.name}}{{this.$emit("getUser")}}</span></label> 
                            </div> 

                        <hr>  

                        <!-- Patient Info starts-->
                            <div class="lg:flex items-start justify-between my-4 text-sm mb-5 font-sans">
                                <label class="lg:w-1/4 text-left  font-semibold  mr-1 text-gray-700">ID : <span class="text-gray-700 font-normal">P-{{this.id.substring(this.id.length - 7)}}</span></label>
                                <label class="lg:w-1/4 text-left  font-semibold  mr-1 text-gray-700">Name : <span class="text-gray-700 font-normal">{{this.form1.name}}</span></label>
                                <label class="lg:w-1/4 text-left  font-semibold  mr-1 text-gray-700">Age : <span class="text-gray-700 font-normal">{{this.age}}years</span></label>
                                <label class="lg:w-1/4 text-left  font-semibold mr-1 text-gray-700">Gender :<span class="text-gray-700 font-normal">{{this.form1.gender}}</span></label>
                            </div>
                        <!-- Patient Info ends-->


                        <!--Prescription Body-->

                        <!-- C/C starts -->
                            <div class="mb-4 w-full text-sm font-sans">
                                <div class="whitespace-normal break-all mr-5">
                                    <label class="font-bold flex items-start"><span class="">C/C</span></label>
                                    <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.cc}}</pre></label>
                                </div>
                            </div>
                        <!-- C/C ends -->
                        
                        <!-- O/E starts -->
                            <div class="mb-4 text-sm w-full">
                                <div class="whitespace-normal break-all mr-5">
                                    <label class="font-bold flex items-start"><span class="">O/E</span></label>
                                    <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.oe}}</pre></label>
                                </div>
                            </div>
                        <!-- O/E ends -->

                        <!-- Treatment Plan starts -->
                            <div class="mb-4 text-sm w-full">
                                <div class="whitespace-normal break-all">
                                    <label class="font-bold flex items-start">Treatment Plan</label>
                                    <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.treatmentPlan}}</pre></label>
                                </div>
                            </div>
                        <!-- Treatment Plan ends -->
                            
                        <!-- Investigation starts-->
                            <div class="mb-4 text-sm w-full">
                                <div class="whitespace-normal break-all">
                                    <label class="font-bold flex items-start">Investigation</label>
                                    <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.treatmentPlan}}</pre></label>
                                </div>
                            </div>
                        <!-- Investigation starts-->


                        <!--Medicine List starts -->
                            <img class="my-5" src="@/assets/svgs/prescription.svg" alt="">
                            <table class="p-5 w-full mx-auto border border-gray-400 border-opacity-25 mt-5">
                                <thead class="text-left text-sm border border-gray-400 border-opacity-30">
                                    <th class="px-4 py-3">Category</th>
                                    <th class="px-4 py-3">Name</th>
                                    <th class="px-4 py-3">Duration</th>
                                    <th class="px-4 py-3">Frequency</th>
                                    <th class="px-4 py-3">Relation with Meal</th>
                                </thead>
                                <tbody class="text-left">
                                    <tr class="bg-white border border-gray-400 border-opacity-30" v-for="item in formData.medicine" :key="item._id">
                                        <td class="px-4 py-3">{{item.catagory}}</td>
                                        <td class="px-4 py-3">{{item.name}}</td>
                                        <td class="px-4 py-3">{{item.duration}}</td>
                                        <td class="px-4 py-3">{{item.frequency}}</td>
                                        <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!--Medicine List ends-->

                            <!-- Advice starts -->
                            <div class="text-sm w-full mt-5 mb-10">
                                <div class="whitespace-normal break-all">
                                    <label class="font-bold flex items-start">Advice</label>
                                    <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.advice}}</pre></label>
                                </div>
                            </div>
                            <!-- Advice ends -->

                            <!--Prescription Body-->  
                        
                        <!-- body end -->            
                        </div>
                    </section>
                </div>       
            </div>
        </div>
        <!--Modal Prescription-->
    </div>
</template>

<script>
    import axios from "axios"
    import printJS from "print-js"
    import swal from "sweetalert"
    export default {

        props: {
            formData: Object,
            date: String,
            openModal: Boolean,
            form1: Object,
            age: String,
            userData: Object
        },
        data() {
            return {
                uid: '',
                id:this.$route.params.id,
                token: localStorage.getItem('token'),
                name: '',
                dob: '',
                gender: '',
            }
        },

        methods: {

            removeModal() {
                this.$emit("myEvent")
            },


            async addPres() {
                await axios.post('prescriptions/create', this.formData, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response)

                        const id = this.$route.params.id

                        swal({
                            title: "Success",
                            text: "Prescription created Successfully!",
                            icon: "success",
                            timer: 1000,
                            buttons: false
                        }).then(function () {
                            new Promise(resolve => setTimeout(resolve, 2000));
                            window.location = `/patient-details1/${id}`;
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                    })

            },
            async print() {

                await axios.post('prescriptions/create', this.formData, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response)

                        const id = this.$route.params.id

                        swal({
                            title: "Success",
                            text: "Prescription created Successfully!",
                            icon: "success",
                            timer: 3000,
                            buttons: false
                        }).then(function () {
                            new Promise(resolve => setTimeout(resolve, 2000));
                            window.location = `/patient-details1/${id}`;
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                    })
                printJS({
                     printable: "print",
                    type: 'html',
                    targetStyles: ['*'],
                    //  style: ['*'],
                    maxWidth: 800,
                    font_size: "10px",
                    // header: '<h1 class="custom-h1">INVOICE</h1>',
                    // style: '.custom-h1 { font-size:20px; text-align: right}',
                    honorColor: true,
                    gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
                    ignoreElements: ['no-print']
                })
            }
        },


        async getUser() {

            await axios.get('users/search/' + this.formData.user, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    }
                })
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

</style>