<template>
    <div>
         <!--Modal Prescription-->

        <div
            class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
            <div class="w-full  lg:max-w-3xl max-w-lg  p-6 relative mx-auto my-auto rounded-xl shadow-lg">
                <!--content-->
                <div class="mt-5">
                    <!--body-->
                    <div class="text-center  flex-auto justify-center">
                          
                          <!-- Save button starts -->
                         <div class="flex justify-between mb-3 mt-2 ">
                            <div id="no-print">
                                <button @click="addPres" class="px-6 py-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex">Save Prescription </button>
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
                        <!-- Save button ends -->

                        <!--main content-->
                        <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  dark:bg-gray-800" id="print">

                            <div class="text-gray-600 body-font">
                                <div class="container px-6 py-8 mx-auto ">
                                    <div class="flex flex-row w-full px-2 mb-10">
                                        <div class="">
                                            <div class="text-regal-teal font-semibold px-0 flex items-start">Prescription Details</div>
                                            <div class="text-regal-teal flex items-start"><span class="font-semibold">Date: </span><span class="font-normal ml-1">{{this.date}}</span></div>
                                            <div class="text-regal-teal flex items-start"><span class="font-semibold">Doctor:</span><span class="font-normal ml-1">Dr. {{this.userData.name}}{{this.$emit("getUser")}}</span></div>
                                        </div>
                                    </div>

                                    <div class="lg:flex mb-4items-start justify-between px-2 text-sm">
                                        <div class="text-left text-regal-teal"><span class="font-semibold">Patient ID: </span><span class="font-normal mr-1">P-{{this.id.substring(this.id.length - 7)}}</span></div>
                                        <div class="text-left text-regal-teal"> <span class="font-semibold">Name: </span><span class="font-normal  mr-1">{{this.form1.name}}</span></div>
                                        <div class="text-left text-regal-teal"><span class="font-semibold">Age: </span><span class="font-normal  mr-1">{{this.age}}years</span></div>
                                        <div class="text-left text-regal-teal"> <span class="font-semibold">Gender: </span><span class="font-normal  mr-1">{{this.form1.gender}}</span> </div>
                                    </div>
                                    <div class=" mt-5 mb-5">
                                        <hr>
                                    </div>
                                    <div class="flex flex-wrap justify-between">
                                        <div class="px-2 mb-4 w-full">

                                            <div class="whitespace-normal break-all mr-5">
                                                <div class="text-regal-teal font-semibold  mb-4  flex items-start">C/C:</div>
                                                <div class="text-regal-teal flex items-start "><pre class="text-left  whitespace-pre-line break-all  font-sans">{{this.formData.cc}}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap justify-between text-regal-teal">
                                        <div class="px-2 mb-4 w-full">
                                            <div class="whitespace-normal break-all mr-5">
                                                <div class="text-regal-teal font-semibold  mb-4  flex items-start">O/E:</div>
                                                <div class="text-regal-teal flex items-start "><pre class="text-left  whitespace-pre-line break-all  font-sans">{{this.formData.oe}}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="px-2 mb-4 ">
                                            <div class="whitespace-normal break-all mr-5">
                                                <div class="text-regal-teal font-semibold  mb-4  flex items-start">Treatment Plan:</div>
                                                <div class="text-regal-teal flex items-start "><pre class="text-left  whitespace-pre-line break-all  font-sans">{{this.formData.treatmentPlan}}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                     <div class="flex flex-wrap justify-between">
                                        <div class="px-2 mb-4 w-full">

                                            <div class="whitespace-normal break-all mr-5">
                                                <div class="text-regal-teal font-semibold  mb-4  flex items-start">Investigation:</div>
                                                <div class="text-regal-teal flex items-start "><pre class="text-left  whitespace-pre-line break-all  font-sans">{{this.formData.investigation}}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="mt-5 mb-5">
                                            <svg class="w-6 h-6" version="1.1" id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 210 210" style="enable-background:new 0 0 210 210;"
                                                xml:space="preserve">
                                                <path d="M11.842,145.349v30h38.329v-65.605H76.47c1.879,0,3.722-0.051,5.53-0.152l28.328,35.483L77.136,180H57.789v30h32.222
                                                l39.212-41.26l32.94,41.26h35.995v-30h-21.558l-26.515-33.211l28.655-30.152h19.417v-30h-32.292l-34.675,36.485l-17.733-22.212
                                                c15.95-9.269,25.018-25.423,25.018-46.515C138.476,20.843,114.717,0,76.47,0H38.842H20.171h-8.329v30h8.329v115.349H11.842z
                                                M50.171,30H76.47c32.006,0,32.006,18.361,32.006,24.396c0,5.555-0.002,21.166-22.266,24.652c-3.483,0.342-6.495,0.593-9.74,0.593
                                                H50.171V30z" />
                                            </svg>
                                        </div>
                                        <table class="p-5 w-full mx-auto bg-regal-blue bg-opacity-30 rounded-t-xl">
                                            <thead class="text-left text-regal-teal text-sm text-regal-teal  border-b-2 border-regal-teal border-opacity-30  ">
                                                <th class="px-4 py-3">Category</th>
                                                <th class="px-4 py-3">Name</th>
                                                <th class="px-4 py-3">Duration</th>
                                                <th class="px-4 py-3">Frequency</th>
                                                <th class="px-4 py-3">Relation with Meals</th>
                                            </thead>

                                            <tbody class="">
                                                <tr class="bg-white text-regal-teal border-b border-regal-cyan border-opacity-50"
                                                    v-for="item in formData.medicine" :key="item._id">
                                                    <td class="px-4 py-3">{{item.catagory}}</td>
                                                    <td class="px-4 py-3">{{item.name}}</td>
                                                    <td class="px-4 py-3">{{item.duration}}</td>
                                                    <td class="px-4 py-3">{{item.frequency}}</td>
                                                    <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="px-2 mb-6 ">
                                        <div class="mt-8">
                                            <div class="whitespace-normal break-all">
                                                <div class="font-semibold text-regal-teal mb-4 flex items-start">Advice:</div>
                                                <div class="flex items-start text-regal-teal"><pre class="text-left  whitespace-pre-line break-all font-sans">{{this.formData.advice}}</pre></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!--main content-->
                    </div>
                </div>
            </div>
        </div>
        <!--Modal Prescription-->
        

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