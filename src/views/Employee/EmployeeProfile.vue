<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-full bg-regal-white">
        <section class="w-full">
            <h3 class="headername">General Information</h3>
            <div class="w-full flex">
                <!-- form -->
                <form class="w-3/5">


                    <div class="flex formbox">
                        <!-- first name -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">First Name :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- first name -->

                        <!-- last name -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Last Name :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- last name -->
                    </div>
                    <div class="flex formbox">
                        <!-- job title -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Date of Birth :</label>
                            <input type="date" class="inputfield">
                        </div>
                        <!-- job title -->
                        <!-- job title -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Gender :</label>
                            <select
                                    class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="gender">
                                    <option>Male</option>
                                    <option>Female</option>

                                    <option>Other</option>
                                </select>
                        </div>
                        <!-- job title -->

                        <!-- work hours -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Employee ID :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- work hours -->
                    </div>

                      <div class="flex formbox">
                        <!-- first name -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Email :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- first name -->

                        <!-- last name -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Phone :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- last name -->
                    </div>
                    <!-- job description -->
                    <div class="formbox">
                        <label for="" class="labeldesign font-semibold">Address :</label>
                        <textarea type="text" class=" h-24 inputfield"></textarea>
                    </div>
                    <!-- job description -->
                     <div class="flex formbox">
                        <!-- job title -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Job title :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- job title -->

                        <!-- work hours -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Work Hours :</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- work hours -->
                    </div>
                    <!-- job description -->
                    <div class="formbox">
                        <label for="" class="labeldesign font-semibold">Job description :</label>
                        <textarea type="text" class=" h-24 inputfield"></textarea>
                    </div>
                    <!-- job description -->

                    <!-- Bank Information -->
                    <h3 class="headername my-1 ">Bank Information </h3>
                    <div class="flex formbox">
                        <!-- job title -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Bank Account </label>
                            <textarea type="text" class="h-24 inputfield"></textarea>
                        </div>
                        <!-- job title -->

                        <!-- work hours -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Salary Information </label>
                            <textarea type="text" class="h-24 inputfield"></textarea>
                        </div>
                        <!-- work hours -->

                    </div>
                </form>
                <!-- form -->
                <div class="w-2/5">
                <div class="ml-56 mt-6">

                    <img src="@/assets/svgs/profilePic.svg" alt="" srcset="">
                </div>
                <h3 class="headername text-sm ml-24 my-1 ">Display Picture </h3>
               
                 <div class="flex formbox">
                        <!-- Change -->
                        <button class="changebutton1  mr-5">Change</button>
                        <!-- Change -->
                        <!-- Remove -->
                        <button class="px-10 py-2 bg-regal-light-pink text-center border  font-semibold rounded-md text-sm flex text-regal-ruby">Remove</button>
                        <!-- Remove -->
                    </div>

                </div>
            </div>

            <div class="w-full flex">
                <form action="" class="w-full">
                    <h3 class="headername my-1 ">Educational Qualification </h3>
                    <div class="w-4/5">

                        <div class="flex formbox ">
                            <!-- degree -->
                            <div class="w-1/3 pr-3">
                                <label for="" class="labeldesign font-semibold">Degree</label>
                                <select
                                    class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="gender">
                                    <option>MS(Conservative Dentistry)</option>
                                    <option>PHD</option>
                                    <option>FICD</option>
                                </select>
                            </div>
                            <!-- degree -->
                        </div>
                        <div class="flex formbox">
                            <!-- degree -->
                            <div class="w-1/3 pr-3">
                                <label for="" class="labeldesign font-semibold">Institution</label>
                                <select
                                    class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="gender">
                                    <option>Dhaka Medical College</option>
                                    <option>Private Medical College</option>
                                </select>
                            </div>
                            <!-- degree -->

                        </div>
                        <div class="flex formbox">
                            <!-- degree -->
                            <div class="w-1/3 pr-3">
                                <label for="" class="labeldesign font-semibold">Year of Graduation</label>
                                <select
                                    class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="gender">
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                </select>
                            </div>
                            <!-- degree -->

                        </div>
                        <div class="flex formbox">
                            <!-- degree -->
                            <div class="w-1/3 pr-3">
                                <label for="" class="labeldesign font-semibold">Specialization</label>
                                <select
                                    class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="gender">
                                    <option>Surgeon</option>
                                    <option>Medicine</option>
                                </select>
                            </div>
                            <div class="ml-16 -mt-72">
                                <table class=" rounded-t-xl tracking-wide bg-regal-ash ">
                                    <tr class="text-center text-sm text-regal-teal ">
                                        <th class="px-10 py-3 border-r border-b border-regal-blue">Degree</th>
                                        <th class="px-10 py-3 border-r border-b border-regal-blue">Institution</th>
                                        <th class="px-10 py-3 border-r border-b border-regal-blue">Year of Graduation</th>
                                        <th class="px-10 py-3 border-b border-regal-blue">Specialization</th>
                                    </tr>
                                    <tr class="border border-regal-blue border-opacity-25 bg-white text-regal-cyan">
                                        <td class="py-4 px-3 text-xs border border-regal-blue">B.Sc In Computer Science Engineering</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Brac University</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">2021</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Computer Languages</td>
                                    </tr>
                                    <tr class="border border-regal-blue border-opacity-25 bg-white text-regal-cyan">
                                        <td class="py-4 px-3 text-xs border border-regal-blue">B.Sc In Computer Science Engineering</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Brac University</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">2021</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Computer Languages</td>
                                    </tr>
                                    <tr class="border border-regal-blue border-opacity-25 bg-white text-regal-cyan">
                                        <td class="py-4 px-3 text-xs border border-regal-blue">B.Sc In Computer Science Engineering</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Brac University</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">2021</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Computer Languages</td>
                                    </tr>
                                    <tr class="border border-regal-blue border-opacity-25 bg-white text-regal-cyan">
                                        <td class="py-4 px-3 text-xs border border-regal-blue">B.Sc In Computer Science Engineering</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Brac University</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">2021</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Computer Languages</td>
                                    </tr>
                                    <tr class="border border-regal-blue border-opacity-25 bg-white text-regal-cyan">
                                        <td class="py-4 px-3 text-xs border border-regal-blue">B.Sc In Computer Science Engineering</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Brac University</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">2021</td>
                                        <td class="px-3 py-4 text-xs border border-regal-blue">Computer Languages</td>
                                    </tr>
                                </table>
                            </div>
                            <!-- degree -->
                        </div>
                    </div>

                    <div class="flex formbox justify-center -ml-24 ">
                        <!-- Save -->
                        <button class="newbutton1  mr-20">Save</button>
                        <!-- Save -->
                        <!-- cancel -->
                        <button class="newbutton2" @click="back">Back</button>
                        <!-- cancel -->
                    </div>
                </form>
                <!-- form -->
            </div>
        </section>
    </div>
</template>

<script>
   //import axios from "axios"
   import Nav from "../../components/Nav.vue";
   import useValidate from '@vuelidate/core';
   import {
       required
   } from '@vuelidate/validators';
   export default {
       components: {
           Nav,
       },
       data() {
           return {
               v$: useValidate(),
               token: localStorage.getItem('token'),
               formData: {
                   jobTitle: "",
                   workHours: "",
                   jobDescription: "",
                   bankAccount: "",
                   salaryInformation: "",
                   educationQualifications: [{
                       degree: '',
                       institution: '',
                       graduation: '',
                       specialization: ''
                   }],
               }
           }
       },
       validations() {
           return {
               formData: {
                   jobTitle: {
                       required
                   },
                   workHours: {
                       required
                   },
                   jobDescription: {
                       required
                   },
                   salaryInformation: {
                       required
                   }
               },
               educationQualifications: {
                   degree: {
                       required
                   },
                   institution: {
                       required
                   },
                   graduation: {
                       required
                   },
                   specialization: {
                       required
                   }
               }
           }
       },
       methods:{
           back(){
              this.$router.push({
                    name: 'EmployeeList'
                })
           },
           async updatePosts() {
            // console.log(this.formData)
            // this.v$.$touch()
            // if (!this.v$.$error) {
            // this.formData.phone = this.formData.phone.replace(/\s/g, '')
            //     if(this.formData.address===""){
            //     this.formData.address='N/A'
            //     }
            //     await axios.patch('patients/' + id + '/update-patient', this.formData, {
            //         headers: {
            //             "Authorization": `Bearer ${localStorage.getItem('token') }`
            //         }
            //         })
            //         .then((response) => {
            //         swal({
            //             title: "Success",
            //             text: "Patient updated Successfully!",
            //             icon: "success",
            //             timer: 1000,
            //             buttons: false
            //         }).then(function () {
            //             new Promise(resolve => setTimeout(resolve, 2000));
            //             window.location = `/patient-details1/${id}`;
            //         })
            //         // this.$router.push({
            //         //   name: 'PatientDetails'
            //         // });
            //         console.log(response);
            //         })
            //         .catch((error) => {
            //         console.log(error)
            //         })
            // }
        }
       },

   }
</script>

<style scoped>
</style>