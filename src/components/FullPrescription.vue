<template>
    <div>

        <!--Modal Prescription-->

        <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>


            <!-- modal start -->
            <div class="w-full  lg:max-w-3xl max-w-lg   p-6 pr-0 relative mx-auto my-auto shadow-lg ">
                
                        <div class="flex justify-between mb-3 mt-2">
                             <div id="no-print">
                                <button @click="print"  class="px-6 py-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex"> Print Prescription
                                </button>
                            </div>
                            <div class="flex items-center">
                            <button @click="removeFullPres">
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
                            <div class="container-2xl px-12 h-screen"> 
                            
                            <!--  Doctor Info -->
                            <div class="mb-5 text-sm font-sans">
                                    <label class="font-semibold text-gray-900 px-0 flex items-start">Prescription Details </label>
                                    <label class="font-semibold flex items-start text-gray-900 ">Prescribed Date: <span class="text-gray-700 font-normal ml-2">{{this.date}}</span></label>
                                    <label class="font-semibold flex items-start text-gray-900 ">Prescribed By: <span class="text-gray-700 ml-2">Dr. {{this.user}}</span></label> 
                            </div> 

                            <hr>  

                            <!-- Patient Info -->
                             <div class="lg:flex items-start justify-between my-4 text-sm mb-5 font-sans">
                                        <label class="lg:w-1/4 text-left  font-semibold  mr-1 text-gray-700">ID : <span class="text-gray-700 font-normal">{{this.name}}</span></label>
                                        <label class="lg:w-1/4 text-left  font-semibold  mr-1 text-gray-700">Name : <span class="text-gray-700 font-normal">{{this.name}}</span></label>
                                        <label class="lg:w-1/4 text-left  font-semibold  mr-1 text-gray-700">Age : <span class="text-gray-700 font-normal">{{this.age}} years</span></label>
                                        <label class="lg:w-1/ text-left  font-semibold mr-1 text-gray-700">Gender :<span class="text-gray-700 font-normal">{{this.gender}}</span></label>
                             </div>


                             <!--Prescription Body-->
                              <div class="mb-4 w-full text-sm font-sans">
                                    <div class="whitespace-normal break-all mr-5">
                                        <label class="font-bold flex items-start"><span class="">C/C</span></label>
                                        <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.cc}}</pre></label>
                                    </div>
                             </div>

                               <div class="mb-4 text-sm w-full">
                                    <div class="whitespace-normal break-all mr-5">
                                        <label class="font-bold flex items-start"><span class="">O/E</span></label>
                                        <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.oe}}</pre></label>
                                    </div>
                             </div>

                             <div class="mb-4 text-sm w-full">
                                    <div class="whitespace-normal break-all">
                                        <label class="font-bold flex items-start">Treatment Plan</label>
                                        <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.treatmentPlan}}</pre></label>
                                    </div>
                             </div>
                             
                            <div class="mb-4 text-sm w-full">
                                    <div class="whitespace-normal break-all">
                                        <label class="font-bold flex items-start">Investigation</label>
                                        <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.treatmentPlan}}</pre></label>
                                    </div>
                             </div>


                             <!--Medicine List -->
                             <img class="my-5" src="@/assets/svgs/prescription.svg" alt="">
                             <table class="p-5 w-full mx-auto border border-gray-400 border-opacity-25 mt-5">
                                    <thead class="text-left text-sm border border-gray-400 border-opacity-30">
                                                <th class="px-4 py-3">Category</th>
                                                <th class="px-4 py-3">Name</th>
                                                <th class="px-4 py-3">Duration</th>
                                                <th class="px-4 py-3">Frequency</th>
                                                <th class="px-4 py-3">Relation with Meals</th>

                                            </thead>

                                            <tbody class="text-left">
                                                <tr class="bg-white border border-gray-400 border-opacity-30"
                                                    v-for="item in formData.medicine" :key="item._id">
                                                    <td class="px-4 py-3">{{item.catagory}}</td>
                                                    <td class="px-4 py-3">{{item.name}}</td>
                                                    <td class="px-4 py-3">{{item.duration}}</td>
                                                    <td class="px-4 py-3">{{item.frequency}}</td>
                                                    <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                <!--Medicine List -->


                                <div class="mb-4 text-sm w-full mt-5">
                                    <div class="whitespace-normal break-all">
                                        <label class="font-bold flex items-start">Advice</label>
                                        <label class="flex items-start"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.advice}}</pre></label>
                                    </div>
                             </div>
                             
                              <!--Prescription Body-->

                                         
                            <!-- body end -->            
                            </div>


           
                            <!-- <div class="text-gray-600 body-font">
                                <div class="container px-5 py-8 mx-auto ">
                                    <div class="flex justify-between">

                                        <div class="flex flex-row w-full px-2 mb-10">
                                            <div class=" ">
                                                <div class="font-semibold text-regal-teal px-0 flex items-start">
                                                    Prescription Details
                                                </div>
                                                <div class="px-0  flex items-start">
                                                    <span class="text-regal-teal ">Prescribed </span><span
                                                        class="text-regal-teal ml-2">{{this.date}}</span>
                                                </div>
                                                <div class="px-0 flex items-start">
                                                    <span class="text-regal-teal">Approved By </span><span
                                                        class="text-regal-teal ml-2">Dr. {{this.user}}</span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div class="lg:flex items-start justify-between mb-4 ml-2">
                                        <div class="lg:w-1/3 text-left"> <span
                                                class="mr-1 font-semibold text-regal-teal">Name </span><span
                                                class="text-regal-teal">{{this.name}}</span></div>
                                        <div class="lg:w-1/3 text-left"><span
                                                class="mr-1 font-semibold text-regal-teal">Age </span><span
                                                class="text-regal-teal">{{this.age}} years</span></div>
                                        <div class="lg:w-1/3 text-left"> <span
                                                class="mr-1 font-semibold text-regal-teal">Gender </span><span
                                                class="text-regal-teal">{{this.gender}}</span> </div>
                                    </div>


                                    <div class="px-2 mb-4 lg:w-full  w-full">

                                        <div class="whitespace-normal break-all mr-5">
                                            <div class="font-semibold text-regal-teal mb-4  flex items-start"><span
                                                    class="text-regal-teal">C/C</span></div>
                                            <div class="flex items-start ">
                                                <pre
                                                    class="text-left text-regal-teal whitespace-pre-line break-all ">{{this.formData.cc}}</pre>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-2 mb-4 lg:w-full w-full">
                                        <div class="whitespace-normal break-all  mr-5">
                                            <div class="font-semibold text-regal-teal mb-4  flex items-start"><span
                                                    class="text-regal-teal">O/E</span></div>
                                            <div class="flex items-start ">
                                                <pre
                                                    class="text-left text-regal-teal whitespace-pre-line break-all ">{{this.formData.oe}}</pre>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-between">
                                        <div class="px-2 mb-4 lg:w-1/2  ">
                                            <div class="whitespace-normal break-all mr-5">
                                                <div class="font-semibold text-regal-teal mb-4  flex items-start"><span
                                                        class="text-regal-teal">Treatment Plan</span></div>
                                                <div class="flex items-start ">
                                                    <pre
                                                        class="text-left  text-regal-teal whitespace-pre-line break-all ">{{this.formData.treatmentPlan}}</pre>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="px-2 mb-4 lg:w-1/2">
                                            <div class="whitespace-normal break-all  ml-5">
                                                <div class="font-semibold text-regal-teal mb-4  flex items-start"><span
                                                        class="text-regal-teal ">Investigation</span></div>
                                                <div class="flex items-start ">
                                                    <pre
                                                        class="text-left text-regal-teal  whitespace-pre-line break-all">{{this.formData.investigation}}</pre>
                                                </div>
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

                                        <table class="p-5 w-full mx-auto bg-regal-blue bg-opacity-30 rounded-t-xl  ">
                                            <thead
                                                class="text-left text-sm text-regal-teal  border-b-2 border-regal-teal border-opacity-30 ">
                                                <th class="px-4 py-3">Category</th>
                                                <th class="px-4 py-3">Name</th>
                                                <th class="px-4 py-3">Duration</th>
                                                <th class="px-4 py-3">Frequency</th>
                                                <th class="px-4 py-3">Relation with Meals</th>

                                            </thead>

                                            <tbody class="text-left">
                                                <tr class="bg-white  border-b border-regal-cyan border-opacity-50 "
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
                                                <div class="font-semibold text-regal-teal mb-4  flex items-start"><span
                                                        class="text-regal-teal">Advice</span></div>
                                                <div class="flex items-start ">
                                                    <pre
                                                        class="text-left text-regal-teal whitespace-pre-line break-all ">{{this.formData.advice}}</pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </section>
            </div>
        </div>
        <!--Modal Prescription-->
    </div>
</template>

<script>
    import printJS from "print-js"
    export default {

        props: {
            formData: Object,
            user: String,
            name: String,
            age: String,
            gender: String,
            date: String
        },
        data() {
            return {
                uid: '',
                token: localStorage.getItem('token'),
            }
        },
        methods: {
            //Remove Modal for Full Prescription
            removeFullPres() {
                this.$emit("removeFullPres")
            },

            //Print Prescription
            async print() {
                printJS({
                    printable: "print",
                    type: 'html',
                    targetStyles: ['*'],
                    font_size: "12px",
                    style: '.custom-h1 { font-size:24px}',
                    gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
                    ignoreElements: ['no-print']

                })
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>