
<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-full bg-regal-white">
        <section class="w-full">
            <h3 class="headername">Profile Settings </h3>
            <form @submit.prevent="updateProfile()">
            <div class="w-full flex">
                <!-- form -->
                <div class="w-3/5" >
                    <div class="flex formbox">
                        <!-- job title -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Job title :</label>
                            <input type="text" class="inputfield" @blur="v$.formData.jobTitle.$touch()" v-model="formData.jobTitle">
                            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.jobTitle.$error">{{v$.formData.jobTitle.$errors[0].$message}}</small>
                        </div>
                        <!-- job title -->

                        <!-- work hours -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Work Hours :</label>
                            <input type="text" class="inputfield" @blur="v$.formData.daysWorked.$touch()" v-model="formData.daysWorked">
                            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.daysWorked.$error">{{v$.formData.daysWorked.$errors[0].$message}}</small>
                        </div>
                        <!-- work hours -->
                    </div>
                    <!-- job description -->
                    <div class="formbox">
                        <label for="" class="labeldesign font-semibold">Job description :</label>
                        <textarea type="text" class=" h-24 inputfield" @blur="v$.formData.jobDescription.$touch()" v-model="formData.jobDescription"></textarea>
                        <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.jobDescription.$error">{{v$.formData.jobDescription.$errors[0].$message}}</small>
                    </div>
                    <!-- job description -->


                    <!-- Bank Information -->
                    <h3 class="headername my-1 ">Bank Information </h3>
                    <div class="flex formbox">
                        <!-- job title -->
                        <div class="w-1/2 pr-10">
                            <label for="" class="labeldesign font-semibold">Bank Account </label>
                            <textarea type="text" class="h-24 inputfield"  @blur="v$.formData.bankAccountNumber.$touch()" v-model="formData.bankAccountNumber"></textarea>
                            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.bankAccountNumber.$error">{{v$.formData.bankAccountNumber.$errors[0].$message}}</small>
                        </div>
                        <!-- job title -->

                        <!-- work hours -->
                        <div class="w-1/2 pl-10">
                            <label for="" class="labeldesign font-semibold">Salary Information </label>
                            <textarea type="text" class="h-24 inputfield" @blur="v$.formData.salary.$touch()" v-model="formData.salary"></textarea>
                            <small class="text-regal-red mb-2 flex justify-start" v-if="v$.formData.salary.$error">{{v$.formData.salary.$errors[0].$message}}</small>
                        </div>
                        <!-- work hours -->
                    </div>
                </div>
                <!-- form -->
                <div class="w-2/5">
                <div class="ml-56 mt-6">
                    <img src="@/assets/svgs/employee.svg" alt="" srcset="">
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
                <div class="w-full">
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
                                <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.educationQualifications.degree.$error">{{v$.educationQualifications.degree.$errors[0].$message}}</small> -->
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
                                <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.educationQualifications.institution.$error">{{v$.educationQualifications.institution.$errors[0].$message}}</small> -->
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
                                <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.educationQualifications.graduation.$error">{{v$.educationQualifications.graduation.$errors[0].$message}}</small> -->
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
                                <!-- <small class="text-regal-red mb-2 flex justify-start" v-if="v$.educationQualifications.specialization.$error">{{v$.educationQualifications.specialization.$errors[0].$message}}</small> -->
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


                    <div class="flex formbox  ">
                        <!-- Save -->
                        <button class="newbutton1  mr-5">Save</button>
                        <!-- Save -->
                        <!-- cancel -->
                        <button class="newbutton2">Cancel</button>
                        <!-- cancel -->
                    </div>
                </div>
                <!-- form -->
            </div>
            </form>
        </section>
    </div>
</template>

<script>
    import Nav from "../../components/Nav.vue";
    import useValidate from '@vuelidate/core';
    import {required,numeric} from '@vuelidate/validators';
    import swal from "sweetalert";
    import axios from "axios";
    export default {
        components: {
            Nav,
        },
        created(){
          this.getEmployeeList(),
          //this.checkEmployeeId(),
          this.parseJwt(this.token)
          //this.getSpecificEmployee()
        },
        data() {
        return {
        v$:useValidate(),
        form:{},
        EmployeeList:[],
        employeeId:'',
        token: localStorage.getItem('token'),
        education:[],
        formData: {
         jobTitle: "",
         jobDescription: "",
         bankAccountNumber:"",
         daysWorked:0,
         //bankAccount: "",
         salary: 0,
         educationQualifications:[
            {
                degree:'',
                institution:'',
                graduation:'',
                specialization:''
            }
         ],
        },
        // educationQualifications:
        //      {
        //         degree:{required},
        //         institution:{required},
        //         graduation:{required},
        //         specialization:{required}
        //      }
      }
    },
    validations(){
     return{
      formData:{
      jobTitle:{required},
      daysWorked: {required,numeric},
      jobDescription: {required},
      salary:{required,numeric},
      bankAccountNumber:"",
      },
    //   educationQualifications:
    //          {
    //             degree:{required},
    //             institution:{required},
    //             graduation:{required},
    //             specialization:{required}
    //          }
      }
    },
    methods:{
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
            c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        const payload = JSON.parse(jsonPayload);
        this.uid = payload.sub
    },
    //  checkEmployeeId(){
    //    this.EmployeeList.forEach(i => {
    //         if (i.user._id===this.uid){
    //             this.employeeId=i._id 
    //          }
    //     });
    //     console.log(this.employeeId)
    //     this.getSpecificEmployee()
    // },

    //get employee list
          async getEmployeeList() {       
            const response = await axios.get('employee-details/search/', {
                params: {
                 page:this.currentPage,
                 limit:this.perPage,
                // q: this.text
                },
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                }
                })
                this.EmployeeList = response.data['result'];
                //this.total=response.data.totalPages;
                this.total=response.data.totalPages;
                console.log(this.EmployeeList)
                this.EmployeeList.forEach(i => {
                if (i.user._id==this.uid){
                console.log(i.user._id)
                this.employeeId=i._id 
             }
           });
           //console.log(this.uid)
            const response1 = await axios.get('employee-details/search/'+ this.employeeId, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                }
                })
                //this.form= response1.data.result;
                console.log(response1.data.result)
                //this.form= response.data.result;
                this.formData.bankAccountNumber=response1.data.result.bankAccountNumber
                this.formData.salary=response1.data.result.salary
                this.formData.jobTitle=response1.data.result.jobTitle
                this.formData.jobDescription=response1.data.result.jobDescription
                this.formData.daysWorked=response1.data.result.daysWorked
                //console.log(this.form.jobTitle)
          
            },

        //get specific employee
        // async getSpecificEmployee(){
        //     //this.ch
        //     const response = await axios.get('employee-details/search/'+ this.employeeId, {
        //         headers: {
        //             "Authorization": `Bearer ${localStorage.getItem('token') }`
        //         }
        //         })
        //         this.form= response.data.result;
        //         this.formData.bankAccountNumber=this.form.bankAccountNumber
        //         this.formData.salary=this.form.salary
        //         this.formData.jobTitle=this.form.jobTitle
        //         this.formData.jobDescription=this.form.jobDescription
        //         this.formData.daysWorked=this.form.daysWorked
        //         //this.total=response.data.totalPages;
        //         //this.total=response.data.totalPages;
        //         //console.log(this.EmployeeList)
        //        // this.checkEmployeeId();
        // },    

    //For updating Profile
    async updateProfile(){   
        this.v$.$touch(); 
        if (!this.v$.$error) {
            console.log(this.formData)
             await axios.put('employee-details/update/' + this.employeeId , this.formData, {
              headers: {
                "Authorization": `Bearer ${localStorage.getItem('token') }`
              }
            })
            .then(() => {
              swal({
                title: "Success",
                text: "Profile Settings updated Successfully!",
                icon: "success",
                timer: 1000,
                buttons: false
              })
            //   .then(function () {
            //       new Promise(resolve => setTimeout(resolve, 2000));
            //       window.location = `/patient-details1/${id}`;
            //    })
              // this.$router.push({
              //   name: 'PatientDetails'
              // });
              //console.log(response);
            })
            .catch((error) => {
              console.log(error)
            })
        }
    },

    //inserting educational qualifications inside an array
    }
}
</script>

<style scoped>
</style>
