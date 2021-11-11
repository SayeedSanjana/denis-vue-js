<template>
    <div>
            <div class="container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300 bg-regal-white border border-regal-cyan border-opacity-20 py-3 border-b-0">
               <div class="m-0.5 text-regal-teal font-medium">
                  Patient Information
               </div>
            </div>


            <div class="flex flex-col justify-between flex-1 pb-4">
                <nav> 

                <!-- Patient information starts here-->
                  <div class="bg-regal-white">
                    <div class="flex items-center   px-8 py-2 text-gray-700 ">
                        <div class="text-regal-teal text-sm font-bold w-24 text-left">
                            Date 
                        </div>
                        <div class="text-regal-teal text-sm font-medium mr-2">
                            :
                        </div>
                        <div class="text-regal-teal text-sm font-bold">
                        {{this.datenow}}
                        </div>
                    </div>
                    <div class="flex items-center    px-8 py-2 text-gray-700 ">
                         <div class="text-regal-teal text-sm font-bold w-24 text-left">
                            Patient Name 
                        </div>
                        <div class="text-regal-teal text-sm font-medium mr-2">
                            :
                        </div>
                        <div class="text-regal-teal text-sm font-medium">
                           {{this.formData.name}}
                        </div>
                    </div>
                    <div class="flex items-center  px-8 py-2 text-gray-700 ">
                         <div class="text-regal-teal text-sm font-bold w-24 text-left">
                            Gender 
                        </div>
                         <div class="text-regal-teal text-sm font-medium mr-2">
                            :
                        </div>
                        <div class="text-regal-teal text-sm font-medium">
                          {{this.formData.gender}}
                        </div>
                    </div>
                    <div class="flex items-center px-8 py-2 text-gray-700 ">
                       <div class="text-regal-teal text-sm font-bold w-24 text-left">
                            Age 
                        </div>
                        <div class="text-regal-teal text-sm font-medium mr-2">
                            :
                        </div>
                        <div class="text-regal-teal text-sm font-medium">
                           {{this.formData.dob}} years
                        </div>
                    </div>
                </div>
                <!-- Patient information ends here-->

                <!-- Allergy component called here -->
                    <div class=" border-t border-gray-300 ">
                        <Allergies :formData="formData" @myEvent="getPosts" />
                    </div>
                
                <!-- Disease component called here -->
                    <div>
                        <Disease :formData="formData" @myEvent="getPosts" />
                    </div>

                <!-- PersonalHabit component called here -->
                    <div>
                        <PersonalHabits :formData="formData" @myEvent="getPosts" />
                    </div>
                </nav>
            </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Allergies from "../DoctorsPortal/Allergies.vue";
    import PersonalHabits from "../DoctorsPortal/PersonalHabits.vue";
    import Disease from "../DoctorsPortal/Disease.vue";
    import moment from "moment";

    export default {
        components: {
            Allergies,
            PersonalHabits,
            Disease
        },
        created() {
            this.getPosts(this.$route.params.id)
        },
        data() {
            return {
                datenow: moment().subtract(10, 'days').calendar(),
                token: localStorage.getItem('token'),
                dob: "",
                date: "",
                formData: {
                    name: "",
                    gender: "",
                    dob: "",
                    allergies: [],
                    personalHabits: []
                }

            }
        },

        methods: {


            async getPosts(id) {
                await axios.get('patients/' + id, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })

                    .then((response) => {
                        this.formData = response.data.result;
                        const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
                        const ageDate = new Date(ageDifMs);
                        this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                        console.log(this.formData.dob)
                    })


                    .catch((error) => {
                        console.log(error)

                    })

            },
        }
    }
</script>

<style scoped>

</style>