<template>
    <div>
        <!--Modal Prescription-->
        <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
            <!-- modal start -->
            <div class="w-full lg:max-w-3xl max-w-lg relative mx-auto my-auto shadow-lg ">
            
                <!-- print and cross button start-->
                <div class="flex justify-between mb-3 mt-2 ">
                    <div id="no-print">
                        <button @click="print"  class="px-6 py-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex"> Print Prescription </button>
                    </div>
                    <div class="flex items-center">
                        <button @click="removeFullPres">
                            <svg class="w-5 h-5" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                                <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336" />
                                <path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa" />
                            </svg>
                        </button>
                    </div>                    
                </div>
                <!-- print and cross button end-->

                <!--main content-->   
                <section class="bg-white font-sans" id="print">
                    <!-- header start-->
                    <header class="flex justify-between pb-4">
                    <!-- Logo -->
                        <img class="px-12 py-4" src="@/assets/svgs/mt-logo-V2.svg" alt="dental-center-logo.svg">  
                        <p class="text-xs pl-10 text-left py-5 mr-2 text-gray-900">Address: House No 12 (1st Floor), Road No 14 (New) <br> Dhanmondi, Dhaka-1209, Mobile: 01688-329552, 01817-094331,<br> Email: mhkmusa@gmail.com</p>
                    </header>
                    <!-- header end -->

                    <!-- body start -->
                    <div class="container-2xl px-12 h-screen "> 
                    
                    <!--  Doctor Info -->
                    <div class="py-3 text-sm font-sans">
                        <label class="font-bold text-gray-900 flex items-start pb-2">Prescription Details </label>
                        <label class="font-semibold flex items-start text-gray-900 ">Date: <span class="text-gray-500 font-normal ml-1">{{this.date}}</span></label>
                        <label class="font-semibold flex items-start text-gray-900">Doctor: <span class="text-gray-500 font-normal ml-1 ">Dr. {{this.user}}</span></label>
                    </div> 

                    <hr class="border-1 border-opacity-50">

                    <!-- Patient Info start -->
                    <div class="lg:flex items-start justify-between text-sm font-sans py-2">
                        <label class="text-left  font-semibold  mr-1 text-gray-900">ID: <span class="text-gray-500 font-normal">P-{{this.id.substring(this.id.length - 7)}}</span></label>
                        <label class="text-left  font-semibold  mr-1 text-gray-900">Name: <span class="text-gray-500 font-normal">{{this.name}}</span></label>
                        <label class="text-left  font-semibold  mr-1 text-gray-900">Age: <span class="text-gray-500 font-normal">{{this.age}} years</span></label>
                        <label class="text-left  font-semibold  mr-1 text-gray-900">Gender:<span class="text-gray-500 font-normal">{{this.gender}}</span></label>
                    </div>
                    <!-- Patient Info end -->
                     <hr class="border-2 border-opacity-50">
                    <!--Prescription Body starts-->

                    <!-- CC starts -->
                    <div class="py-4 w-full text-sm font-sans">
                        <div class="whitespace-normal break-all mr-5">
                            <label class="font-semibold flex items-start text-gray-900"><span class="">C/C</span></label>
                            <label class="flex items-start text-gray-600"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.cc}}</pre></label>
                        </div>
                    </div>
                    <!-- CC ends -->

                    <!-- OE starts -->
                    <div class="mb-4 text-sm w-full">
                        <div class="whitespace-normal break-all mr-5">
                            <label class="font-semibold flex items-start text-gray-900"><span class="">O/E</span></label>
                            <label class="flex items-start text-gray-600"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.oe}}</pre></label>
                        </div>
                    </div>
                    <!-- OE ends -->
                    
                    <!-- TreatmentPlan starts -->
                    <div class="mb-4 text-sm w-full">
                        <div class="whitespace-normal break-all">
                            <label class="font-semibold flex items-start text-gray-900">Treatment Plan</label>
                            <label class="flex items-start text-gray-600"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.treatmentPlan}}</pre></label>
                        </div>
                    </div>
                    <!-- TreatmentPlan ends -->


                    <!-- Investigation starts -->
                    <div class="mb-4 text-sm w-full">
                        <div class="whitespace-normal break-all">
                            <label class="font-semibold flex items-start text-gray-900 ">Investigation</label>
                            <label class="flex items-start text-gray-600"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.investigation}}</pre></label>
                        </div>
                    </div>
                    <!-- Investigation ends -->

                    <!--Medicine List starts-->
                    <img class="my-5" src="@/assets/svgs/prescription.svg" alt="">
                    <table class="p-5 w-full mx-auto border border-gray-400 border-opacity-25 mt-5">
                    <thead class="text-left text-sm border border-gray-400 border-opacity-30">
                        <th class="px-4 py-3 font-semibold text-gray-900">Category</th>
                        <th class="px-4 py-3 font-semibold text-gray-900">Name</th>
                        <th class="px-4 py-3 font-semibold text-gray-900">Duration</th>
                        <th class="px-4 py-3 font-semibold text-gray-900">Frequency</th>
                        <th class="px-4 py-3 font-semibold text-gray-900">Relation with Meal</th>
                    </thead>
                    <tbody class="text-left">
                        <tr class="bg-white border border-gray-400 border-opacity-30"
                            v-for="item in formData.medicine" :key="item._id">
                            <td class="px-4 py-3 font-semibold text-gray-600 text-xs">{{item.catagory}}</td>
                            <td class="px-4 py-3 font-semibold text-gray-600 text-xs">{{item.name}}</td>
                            <td class="px-4 py-3 font-semibold text-gray-600 text-xs">{{item.duration}}</td>
                            <td class="px-4 py-3 font-semibold text-gray-600 text-xs">{{item.frequency}}</td>
                            <td class="px-4 py-3 font-semibold text-gray-600 text-xs">{{item.relationWithMeals}}</td>
                        </tr>
                    </tbody>
                </table>
                <!--Medicine List ends -->

                <!--Advice starts -->
                <div class=" text-sm w-full mt-5 mb-10">
                    <div class="whitespace-normal break-all">
                        <label class="flex items-start font-semibold text-gray-900">Advice</label>
                        <label class="flex items-start text-gray-600"><pre class="text-left whitespace-pre-line break-all font-sans">{{this.formData.advice}}</pre></label>
                    </div>
                </div>
                <!--Advice ends -->

                <!--Prescription Body ends-->           
                </div>
                <!-- body end -->    
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
            date: String,
            phone:String
        },
        data() {
            return {
                uid: '',
                token: localStorage.getItem('token'),
                 id:this.$route.params.id
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