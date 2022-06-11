<script>
    export default {

        props: {
            form: {
                type: Object,
            },

        },
        computed: {
            formData() {
                const data = {
                    ...this.form
                }
                for (let i = 0; i < data.length; i++) {
                    data['isHidden'] = false;

                }
                return data;
            },
            medicine() {
                for (let i = 0; i < this.formData.medicine.length; i++) {
                    this.formData.medicine.isHidden = false;

                }
                return this.form.medicine;
            },

        },
        data() {
            return {

                previewInv: false,
                previewTreatment: false,

            }
        },

        methods: {
            calculateAge(birthYear) {
                let ageDifMs = Date.now() - new Date(birthYear).getTime();
                const ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970) + ' years';
            },
            copyPrescription() {
                this.$store.commit("setCopiedPrescription", this.form)

                this.$router.push({
                    name: 'Prescription',
                    
                })
            },
            
            print() {


                const prtHtml = document.getElementById('print').innerHTML;

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
                        <body>
                            ${prtHtml}
                           
                        </body>
                        </html>`);

                WinPrint.document.close();
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
            },

            selectMedicine(i) {
                this.formData.medicine[i].isHidden = !this.formData.medicine[i].isHidden;
            },
            addService(){
                  this.$router.push({
                        name: 'Service',
                        params: {
                            id: this.$route.params.id,
                            presId: this.form._id,
                            data: JSON.stringify(this.formData)          
                        },
                        
                    });
            }




        }

    }
</script>

<template>
    <div class="flex justify-end space-x-2 m-2">
        <button @click="addService" class="bg-regal-teal p-2 rounded-full">
            <img src="@/assets/svgs/service.svg" alt="" srcset="" class="pointer-events-none">
        </button>

        <button type="button " class="p-2 rounded-full  bg-regal-teal" @click="copyPrescription()">
            <img src="@/assets/svgs/copy.svg" class="pointer-events-none">
        </button>

        <button type="button" class="p-2 bg-regal-teal rounded-full " @click="print">
            <img src="@/assets/svgs/print.svg" class="pointer-events-none ">
        </button>
    </div>

    <div class="section h-xxl">



        <div id="print" class="">
            <section class="flex justify-between  px-4 py-2">
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




                <ul>

                    <li class="font-semibold text-lg text-right">
                        {{formData.user.name}}
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



            </section>
            <hr />
            <div class="flex justify-between items-start mx-4 my-2">
                <p class="text-sm"><span class="font-semibold">Patient Name:</span>
                    <span>{{formData.patient.name}}</span> </p>
                <p class="text-sm"><span class="font-semibold">Phone:</span> <span>{{formData.patient.phone}}</span>
                </p>
                <p class="text-sm"><span class="font-semibold">Dob:</span>
                    <span>{{calculateAge(formData.patient.dob)}}</span>
                </p>
                <p class="text-sm"><span class="font-semibold">Gender:</span> <span>{{formData.patient.gender}}</span>
                </p>
            </div>
            <hr />
            <section class="my-2 ">
                <article class="flex justify-between text-sm ">
                    <div class="w-1/2 p-3 ">


                        <div class=" text-left my-2" v-if="formData.cc.length > 0">

                            <label
                                class=" w-2/5 block my-2  px-3 py-1 font-bold text-sm text-regal-teal text-left">Chief
                                Complaint</label>

                            <div class="mx-2 text-regal-teal" v-html="formData.cc"></div>

                        </div>

                        <div class="w-full my-2 " v-if="formData.oe.length > 0">

                            <label
                                class=" block my-2 w-2/5 text-sm font-bold  text-regal-teal px-3 py-1  capitalize text-left">On
                                Examination</label>

                            <ul class="  lowercase text-left text-regal-teal py-1 ml-6 " v-for="item in formData.oe"
                                :key="item">
                                <li class="  italic list-disc">
                                    <div class="flex justify-between">
                                        {{item}}
                                    </div>

                                </li>
                            </ul>



                        </div>




                        <div :class="{'hidebutton': previewInv , 'showbutton': !previewInv}"
                            v-if="formData.investigation.length > 0">


                            <div class="flex justify-between">

                                <label
                                    class=" w-2/5 block my-2   px-3 py-1    font-bold text-sm  capitalize text-left">Investigation</label>

                                <button type="button" class="hidebutton" @click="previewInv = !previewInv">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.3 3.3C16.9 2.9 16.2 2.9 15.7 3.3L13.3 5.7C12.2437 5.3079 11.1267 5.1048 10 5.1C6.2 5.2 2.8 7.2 1 10.5C1.2 10.9 1.5 11.3 1.8 11.7C2.6 12.8 3.6 13.7 4.7 14.4L3 16.1C2.6 16.5 2.5 17.2 3 17.7C3.4 18.1 4.1 18.2 4.6 17.7L17.3 4.9C17.7 4.4 17.7 3.7 17.3 3.3V3.3ZM6.7 12.3L5.4 13.6C4.2 12.9 3.1 11.9 2.3 10.7C3.5 9 5.1 7.8 7 7.2C5.7 8.6 5.6 10.8 6.7 12.3V12.3ZM10.1 9C9.6 8.5 9.7 7.7 10.2 7.2C10.7 6.8 11.4 6.8 11.9 7.2L10.1 9ZM18.3 9.5C17.8 8.8 17.2 8.1 16.5 7.6L15.5 8.6C16.3 9.2 17 9.9 17.6 10.8C15.9 13.4 13 15 9.9 15H9.1L8.1 16C8.8 15.9 9.4 16 10 16C13.3 16 16.4 14.4 18.3 11.7C18.6 11.3 18.8 10.9 19.1 10.5C18.8 10.2 18.6 9.8 18.3 9.5V9.5ZM14 10L10 14C12.2 14 14 12.2 14 10Z"
                                            fill="black" fill-opacity="0.33" />
                                    </svg>
                                </button>
                            </div>

                            <ul class="  text-left  py-1 ml-6 " v-for="item in formData.investigation" :key="item">
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

                            <div v-if="formData.medicine.length > 0" class="my-2">

                                <label
                                    class=" w-2/5 block my-2  px-3 py-1  font-bold text-sm text-regal-teal capitalize text-left">Medication</label>

                                <ul class="ml-6 my-1 text-regal-teal">
                                    <li v-for="(data,index) in formData.medicine" :key="index" class="list-disc ">

                                        <div class="flex justify-between">
                                            <div
                                                :class="{'strikebutton':formData.medicine[index].isHidden , 'showbutton': !formData.medicine[index].isHidden}">
                                                <div class="flex">
                                                    <p class="">
                                                        {{data.category}}
                                                        <span>
                                                            {{data.name}}-
                                                        </span>
                                                    </p>

                                                    <p class=" ">
                                                        <span class="italic">{{data.dosage}}</span>
                                                        {{data.generic}}
                                                    </p>

                                                </div>

                                                <p class=" text-left  ">
                                                    <span class="pr-4"> {{data.frequency}} </span>
                                                    <span class="pr-4">{{data.duration}}</span>
                                                    <span class="pr-4">{{data.relationWithMeals}}</span>
                                                </p>

                                            </div>


                                            <button type="button" class="hidebutton" @click="selectMedicine(index)">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21.9201 13.28H1.92008C1.74327 13.28 1.5737 13.2098 1.44868 13.0847C1.32366 12.9597 1.25342 12.7901 1.25342 12.6133C1.25342 12.4365 1.32366 12.2669 1.44868 12.1419C1.5737 12.0169 1.74327 11.9467 1.92008 11.9467H21.9201C22.0969 11.9467 22.2665 12.0169 22.3915 12.1419C22.5165 12.2669 22.5868 12.4365 22.5868 12.6133C22.5868 12.7901 22.5165 12.9597 22.3915 13.0847C22.2665 13.2098 22.0969 13.28 21.9201 13.28Z"
                                                        fill="black" fill-opacity="0.33" />
                                                    <path
                                                        d="M4.84687 10.5734C5.12709 10.4424 5.41418 10.3267 5.70687 10.2267C6.09834 10.0847 6.51052 10.0081 6.92687 10C7.26958 9.96515 7.61563 10.0143 7.93508 10.1432C8.25452 10.2722 8.53773 10.477 8.7602 10.74C9.14839 11.2686 9.35005 11.9111 9.33354 12.5667V12.8934C8.41222 12.579 7.44693 12.4125 6.47354 12.4C5.87876 12.3942 5.28975 12.517 4.74687 12.76C4.42743 12.9041 4.1327 13.0975 3.87354 13.3334H10.5869V12.5667C10.6376 11.5933 10.3104 10.6379 9.67354 9.90004C9.32564 9.55381 8.90768 9.28603 8.44773 9.1147C7.98778 8.94337 7.49649 8.87245 7.00687 8.9067C6.10729 8.92435 5.2206 9.12392 4.4002 9.49337C4.32804 9.52427 4.26291 9.5695 4.20875 9.62631C4.15458 9.68313 4.11251 9.75034 4.08509 9.82389C4.05766 9.89744 4.04545 9.97579 4.0492 10.0542C4.05294 10.1326 4.07256 10.2094 4.10687 10.28C4.13589 10.3481 4.17813 10.4098 4.23113 10.4615C4.28414 10.5131 4.34686 10.5538 4.41568 10.5811C4.48449 10.6084 4.55803 10.6217 4.63204 10.6204C4.70606 10.6191 4.77907 10.6031 4.84687 10.5734V10.5734Z"
                                                        fill="black" fill-opacity="0.33" />
                                                    <path
                                                        d="M13.9998 13.3334C14.015 12.8011 14.1374 12.2773 14.3598 11.7934C14.5885 11.2954 14.9538 10.8723 15.4131 10.5734C15.8702 10.282 16.401 10.1273 16.9431 10.1273C17.4852 10.1273 18.016 10.282 18.4731 10.5734C18.9272 10.8765 19.2892 11.2985 19.5198 11.7934C19.746 12.2769 19.8751 12.8001 19.8998 13.3334H21.2331C21.2141 12.5954 21.0368 11.8702 20.7131 11.2067C20.3897 10.5379 19.8865 9.9723 19.2598 9.57338C18.641 9.1845 17.9239 8.98092 17.1931 8.98672C16.5382 8.97577 15.8927 9.14405 15.3264 9.47338C14.7701 9.80444 14.3103 10.2757 13.9931 10.8401V6.66672C13.9914 6.5152 13.9304 6.37037 13.8233 6.26322C13.7161 6.15608 13.5713 6.09512 13.4198 6.09338H13.3331C13.1816 6.09512 13.0368 6.15608 12.9296 6.26322C12.8225 6.37037 12.7615 6.5152 12.7598 6.66672V13.3334H13.9998Z"
                                                        fill="black" fill-opacity="0.33" />
                                                    <path
                                                        d="M19.7799 14.6666C19.7241 14.9119 19.6437 15.1509 19.5399 15.38C19.3114 15.8797 18.9492 16.3065 18.4932 16.6133C18.0347 16.9008 17.5044 17.0533 16.9632 17.0533C16.422 17.0533 15.8918 16.9008 15.4332 16.6133C14.972 16.3107 14.6066 15.8829 14.3799 15.38C14.274 15.1511 14.1913 14.9121 14.1332 14.6666H12.7266V17.42C12.7265 17.4984 12.7423 17.5761 12.7731 17.6483C12.8039 17.7204 12.849 17.7856 12.9058 17.8398C12.9625 17.894 13.0296 17.9362 13.1031 17.9637C13.1766 17.9912 13.2548 18.0036 13.3332 18H13.4666C13.6181 17.9982 13.7629 17.9373 13.8701 17.8301C13.9772 17.723 14.0382 17.5781 14.0399 17.4266V16.34C14.3569 16.9062 14.8166 17.3797 15.3732 17.7133C15.9413 18.0375 16.5859 18.2033 17.2399 18.1933C17.9711 18.2021 18.6891 17.9983 19.3066 17.6066C19.92 17.2135 20.4118 16.6571 20.7266 16C20.9342 15.5792 21.078 15.1298 21.1532 14.6666H19.7799Z"
                                                        fill="black" fill-opacity="0.33" />
                                                    <path
                                                        d="M9.33339 14.6666V15.1733C9.2505 15.4559 9.11236 15.7193 8.92698 15.9481C8.74159 16.177 8.51264 16.3668 8.25339 16.5066C7.70858 16.8224 7.08976 16.988 6.46005 16.9866C5.89823 17.011 5.3444 16.8467 4.88672 16.5199C4.6858 16.377 4.52342 16.1865 4.41407 15.9654C4.30472 15.7444 4.2518 15.4997 4.26005 15.2533C4.26245 15.0441 4.30784 14.8376 4.39339 14.6466H3.08005C3.02316 14.8643 2.99404 15.0883 2.99339 15.3133C2.97935 15.6992 3.05305 16.0834 3.20894 16.4367C3.36483 16.7901 3.59886 17.1034 3.89339 17.3533C4.5429 17.8879 5.36609 18.1655 6.20672 18.1333C6.82903 18.1347 7.44309 17.9909 8.00005 17.7133C8.54827 17.4652 9.0118 17.0619 9.33339 16.5533V17.3333C9.33339 17.4853 9.39379 17.6312 9.50131 17.7387C9.60883 17.8462 9.75466 17.9066 9.90672 17.9066H10.0001C10.1521 17.9066 10.2979 17.8462 10.4055 17.7387C10.513 17.6312 10.5734 17.4853 10.5734 17.3333V14.6666H9.33339Z"
                                                        fill="black" fill-opacity="0.33" />
                                                </svg>
                                            </button>
                                        </div>


                                    </li>
                                </ul>
                            </div>

                            <!-- treatment plan -->

                            <div :class="{'hidebutton': previewTreatment , 'showbutton': !previewTreatment}"
                                v-if="formData.treatmentPlan.length > 0">



                                <div class="flex justify-between">

                                    <label
                                        class=" w-2/5 block    px-3 py-1  font-bold text-sm capitalize text-left">Treatment
                                        Plan</label>

                                    <button class="hidebutton" @click="previewTreatment = !previewTreatment">

                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.3 3.3C16.9 2.9 16.2 2.9 15.7 3.3L13.3 5.7C12.2437 5.3079 11.1267 5.1048 10 5.1C6.2 5.2 2.8 7.2 1 10.5C1.2 10.9 1.5 11.3 1.8 11.7C2.6 12.8 3.6 13.7 4.7 14.4L3 16.1C2.6 16.5 2.5 17.2 3 17.7C3.4 18.1 4.1 18.2 4.6 17.7L17.3 4.9C17.7 4.4 17.7 3.7 17.3 3.3V3.3ZM6.7 12.3L5.4 13.6C4.2 12.9 3.1 11.9 2.3 10.7C3.5 9 5.1 7.8 7 7.2C5.7 8.6 5.6 10.8 6.7 12.3V12.3ZM10.1 9C9.6 8.5 9.7 7.7 10.2 7.2C10.7 6.8 11.4 6.8 11.9 7.2L10.1 9ZM18.3 9.5C17.8 8.8 17.2 8.1 16.5 7.6L15.5 8.6C16.3 9.2 17 9.9 17.6 10.8C15.9 13.4 13 15 9.9 15H9.1L8.1 16C8.8 15.9 9.4 16 10 16C13.3 16 16.4 14.4 18.3 11.7C18.6 11.3 18.8 10.9 19.1 10.5C18.8 10.2 18.6 9.8 18.3 9.5V9.5ZM14 10L10 14C12.2 14 14 12.2 14 10Z"
                                                fill="black" fill-opacity="0.33" />
                                        </svg>

                                    </button>
                                </div>


                                <ul class=" text-left  py-1 ml-6 " v-for="item in formData.treatmentPlan" :key="item">
                                    <li class=" italic list-disc ">
                                        <div class="flex justify-between flex-wrap">
                                            {{item}}

                                        </div>

                                    </li>
                                </ul>


                            </div>


                            <div v-if="formData.advice.length > 0" class="text-left my-2">
                                <label
                                    class=" w-2/5 block    px-3 py-1  font-bold text-sm text-regal-teal capitalize text-left">Advice</label>

                                <div class=" py-1 mx-2 text-regal-teal  " v-html="formData.advice"></div>
                            </div>

                        </section>
                    </div>
                </article>


            </section>
        </div>
    </div>
    <!-- </template> -->

    <!-- </Modal> -->



</template>

<style scoped>
@media print{
    .dontprint{
        display:none;
    }
}

.hidebutton{
    @apply dontprint text-gray-300;
}

.showbutton{
    @apply  text-regal-teal w-full my-2;
}

.strikebutton{
    @apply line-through text-regal-teal w-full my-2;
}

.section {
  /* max-height: 600px; */
  padding: .5rem;
  overflow-y: auto;
  direction: ltr;
  scrollbar-color: rgb(214, 221, 221) #e4e4e4;
  scrollbar-width: thin;
}
.section::-webkit-scrollbar {
  width: 8px;
}
.section::-webkit-scrollbar-track {
  background-color: rgb(214, 221, 221);
  border-radius: 100px;
}
.section::-webkit-scrollbar-thumb {
  border-radius: 100px;
  /* background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%); */
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}





</style>