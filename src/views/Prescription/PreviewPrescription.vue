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
        }
        
    }
</script>

<template>
    <Modal :width="'w-1/2'" :height="'h-screen'" >
        <template v-slot:header>
            <h1 class="font-bold text-xl p-2">Prescription Preview</h1>
        </template>
        <template v-slot:body >
            <section class="flex justify-between px-4 py-2">

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
                            BDS,BCS,MPH,NST Fellow MS (Conservative Dentistry), <br />
                            PhD (USA), FICD (USA)DIrector (Dental Education) <br />
                            Directorat General of medical Education
                        </li>
                        <li class="text-xs text-right">
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
            <section class="">
                

                <article class="flex justify-between text-sm ">
                    <div class="w-1/2 p-3">

                        <div class=" text-left">

                            <label
                                class=" w-1/3 block my-2 border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Chief
                                Complaint</label>

                            <p class="px-1 text-regal-teal" v-html="form.cc"></p>

                        </div>


                        <label
                            class="border block my-2 w-1/3 text-sm font-bold text-regal-teal bg-green-100 bg-opacity-30 rounded-md px-3 py-1  capitalize text-left">On
                            Examination</label>

                        <!-- Searchable select on OE-->
                        <div class="w-full ">

                            <ul class=" lowercase text-left  py-1 ml-6 " v-for="item in form.oe" :key="item">
                                <li class=" text-regal-teal italic list-disc">
                                    <div class="flex justify-between">
                                        {{item}}
                                    </div>

                                </li>
                            </ul>

                        </div>

                        <!-- Searchable select on Investigation -->
                        <div class="flex justify-between mt-2">

                            <label
                                class=" w-1/3 block my-2  border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Investigation</label>


                        </div>
                        <div class="w-full ">


                            <ul class=" text-left  py-1 ml-6 " v-for="item in form.investigation" :key="item">
                                <li class=" list-disc ">

                                    <div class="flex justify-between">
                                        <p class=" text-regal-teal">

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
                            <label
                                class=" w-1/3 block my-2  border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Medication</label>


                            <ul class="ml-6 my-1">
                                <li v-for="data in form.medicine" :key="data" class="list-disc ">

                                    <div class="flex justify-between">
                                        <div class="text-regal-teal text-opacity-80">
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





                       
                        <div class="flex justify-between mt-2">

                            <label
                                class=" w-1/3 block   border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Treatment
                                Plan</label>

                        </div>
                        <!-- treatment plan -->

                        <div class="w-full">

                            <ul class="  text-left  py-1 ml-6 " v-for="item in form.treatmentPlan" :key="item">
                                <li class=" text-regal-teal italic list-disc">
                                    <div class="flex justify-between">
                                        {{item}}

                                    </div>

                                </li>
                            </ul>

                        </div>

                        <div class="text-left my-2 ">

                            <label
                                class=" w-1/3 block   border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Advice</label>
                            <p class=" py-1 px-1 text-regal-teal " v-html="form.advice"></p>

                        </div>
                 </section>
                    </div>
                </article>


            </section>

           
        </template>

    </Modal>




</template>

<style scoped>

</style>