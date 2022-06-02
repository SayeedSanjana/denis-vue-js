<script>
import Modal from "../../components/reusable/Modal.vue";
    export default {
        components:{
            Modal
        },
        props:{
            form:{
                type:Object,
            }
        },
       
        methods:{
            print() {
                // Get HTML to print from element
                const prtHtml = document.getElementById('print').innerHTML;

                // Get all stylesheets HTML
                let stylesHtml = '';
                for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
                    stylesHtml += node.outerHTML;
                }

                // Open the print window
                const WinPrint = window.open('', '', 'left=0,top=0,width=1000,height=900,toolbar=0,scrollbars=0,status=0');

                WinPrint.document.write(`<!DOCTYPE html>
                        <html>
                        <head>
                            ${stylesHtml}
                        </head>
                        <body class= 'w-full'>
                            ${prtHtml}
                        </body>
                        </html>`);

                WinPrint.document.close();
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
            },

            
          

        }
        
    }
</script>

<template>
    <Modal :width="'w-1/2'" :height="'h-xxxl'" >
        <template v-slot:header >
            <!-- <h1 class="font-bold text-xl p-2">Prescription Preview</h1> -->
            <button type="button" class="px-3 py-1 rounded-md  text-white bg-regal-teal" @click="print">Print</button>
        </template>
        <template v-slot:body >
           

            <div id="print" >
                <section class="flex justify-between  px-4 py-2" >

                    <div>
                        <ul>
                            <li class="font-semibold text-lg text-left">
                                MT Dental Center
                            </li>


                            <li class="text-xs text-left">
                                <span class="font-semibold"> Address:</span> House No 12 (1st Floor), Road No 14 (New)<br />
                                <span> Dhanmondi, Dhaka-1209 </span> <br />
                                <span class="font-semibold"> Contact:</span> 01688-329552, 01817-094331 <br />
                                <span class="font-semibold"> Email:</span> mhkmusa@gmail.com <br />

                            </li>
                            <li class="text-xs text-left">
                                <span class=" font-semibold">Visiting Days : </span>
                                <span class="">Monday – Friday (9 AM- 6 PM)</span>
                            </li>
                            <li class="text-xs text-left">
                                <span class=" font-semibold">Report Checking Hours : </span>
                                <span class=""> 4 PM- 6 PM</span>
                            </li>


                        </ul>

                    </div>

                    <div>

                        <ul>

                            <li class="font-semibold text-lg text-right">
                                Dr. Muhammad Abdul Hussein
                            </li>


                            <li class="text-xs text-right">
                                BDS,BCS,MPH,NST Fellow MS, <br />
                                PhD (USA), FICD (USA)DIrector (Dental Education) <br />
                                Directorat General of medical Education
                            </li>
                            <li class="text-xs text-right ">
                                <span class=" font-semibold">BMDC No: </span>
                                <span class="text-sm">12345</span>
                            </li>
                            <li class="text-xs text-right">
                                <span class=" font-semibold">Contact: </span>
                                <span class="">01236521458</span>
                            </li>
                            <li class=" text-xs text-right">
                                <span class=" font-semibold">Email: </span>
                                <span class="">dr.xyz@mail.com</span>
                            </li>

                        </ul>

                    </div>


                </section>
                    <hr/>
                <section class="my-2 ">
                    <article class="flex justify-between text-sm "   >
                        <div class="w-1/2 p-3">

                            <div class=" text-left my-2" v-if="form.cc.length > 0">

                                <label
                                    class=" w-2/5 block my-2  px-3 py-1    font-bold text-sm text-regal-teal capitalize text-left">Chief
                                    Complaint</label>


                                <div class="mx-2 text-regal-teal" v-html="form.cc"></div>

                            </div>

                            <div class="w-full my-2" v-if="form.oe.length > 0">
                                <label
                                    class=" block my-2 w-2/5 text-sm font-bold text-regal-teal   px-3 py-1  capitalize text-left">On
                                    Examination</label>

                                <ul class=" text-regal-teal lowercase text-left  py-1 ml-6 " v-for="item in form.oe"
                                    :key="item">
                                    <li class="  italic list-disc">
                                        <div class="flex justify-between">
                                            {{item}}
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        


                        
                            <div class="w-full my-2" v-if="form.investigation.length > 0">
                                <label
                                    class=" w-2/5 block my-2   px-3 py-1    font-bold text-sm text-regal-teal capitalize text-left">Investigation</label>


                                <ul class=" text-regal-teal text-left  py-1 ml-6 " v-for="item in form.investigation"
                                    :key="item">
                                    <li class=" list-disc ">

                                        <div class="flex justify-between">
                                            <p class=" ">

                                                {{item.location}} - <span class="italic"> {{item.inv_name}}</span>
                                            </p>



                                        </div>

                                    </li>


                                </ul>



                            </div>
                        

                        </div>


                        <!-- Rx -->

                        <div class="w-1/2 p-3 border-l border-regal-teal border-opacity-20 mx-auto ">

                            <section class="m-1">
                                
                                <div v-if="form.medicine.length > 0" class="my-2">

                                <label
                                    class=" w-2/5 block my-2  px-3 py-1  font-bold text-sm text-regal-teal capitalize text-left">Medication</label>
                                
                                <ul class="ml-6 my-1 text-regal-teal">
                                    <li v-for="data in form.medicine" :key="data" class="list-disc ">

                                        <div class="flex justify-between">
                                            <div class="">
                                                <div class="flex">
                                                    <p class="">{{data.category}} <span> {{data.name}}-
                                                        </span>
                                                    </p>

                                                    <p class=" "><span class="italic">{{data.dosage}}</span>
                                                        {{data.generic}}</p>

                                                </div>

                                                <p class=" text-left  ">
                                                    <span class="pr-4"> {{data.frequency}} </span>
                                                    <span class="pr-4">{{data.duration}}</span>
                                                    <span class="pr-4">{{data.relationWithMeals}}</span>
                                                </p>

                                            </div>

                                        </div>

                                    </li>
                                </ul>
                                </div>
                                <!-- <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Medicine Added</p> -->

                                





                        
                            <!-- <div class="flex justify-between my-2"> -->

                                
                                <!-- </div> -->
                            <!-- treatment plan -->

                            <div class="w-full my-2" v-if="form.treatmentPlan.length > 0">
                                <label
                                    class=" w-2/5 block    px-3 py-1  font-bold text-sm text-regal-teal capitalize text-left">Treatment
                                    Plan</label>

                                <ul class=" text-regal-teal text-left  py-1 ml-6 " v-for="item in form.treatmentPlan" :key="item">
                                    <li class=" italic list-disc ">
                                        <div class="flex justify-between flex-wrap">
                                            {{item}}

                                        </div>

                                    </li>
                                </ul>

                            </div>
                        
                            <!-- <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Treatment Plan Added</p> -->
                        

                        


                    
                            <div v-if="form.advice.length > 0" class="text-left my-2">
                                <label
                                    class=" w-2/5 block    px-3 py-1  font-bold text-sm text-regal-teal capitalize text-left">Advice</label>

                                <div class=" py-1 mx-2 text-regal-teal  " v-html="form.advice"></div>
                            </div>
                            <!-- <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Advice Added</p> -->

                    </section>
                        </div>
                    </article>


                </section>
            </div>
           
        </template>

    </Modal>




</template>

<style scoped>


</style>