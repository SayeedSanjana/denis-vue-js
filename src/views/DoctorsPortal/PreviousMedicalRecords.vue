<template>
    <div>
        <div class="px-4 py-2">


            <h2 class="text-xl font-semibold text-center text-gray-700 title-font ">{{this.formData.name}}</h2>




            <div class="flex flex-col justify-between flex-1 mt-6  pt-2 pb-4">
                <nav>
                   
                    <div class="flex items-center justify-between px-8 py-2 text-gray-700 ">
                        <div class="text-gray-500 text-sm font-semibold">
                            Gender
                        </div>
                        <div class="text-gray-700 text-sm font-semibold">
                            {{this.formData.gender}}
                        </div>
                    </div>
                    <div class="flex items-center justify-between px-8 py-2 text-gray-700 ">
                        <div class="text-gray-500 text-sm font-semibold">
                            Age
                        </div>
                        <div class="text-gray-700 text-sm font-semibold">
                            {{
                        this.formData.dob
                    }} years
                        </div>
                    </div>
                    

                    <div class=" border-t border-gray-300 ">
                        <!--allergy-->
                          <Allergies :formData="formData" @myEvent="getPosts" /> 
                    </div>
                    
                    <div class="  ">
                        <!--habit-->
                          <Disease :formData="formData" @myEvent="getPosts" /> 
                    </div>
                     <div class="  ">
                        <!--habit-->
                          <PersonalHabits :formData="formData" @myEvent="getPosts" /> 
                    </div>
                    
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Allergies from "../DoctorsPortal/Allergies.vue";
    import PersonalHabits from "../DoctorsPortal/PersonalHabits.vue";
    import Disease from "../DoctorsPortal/Disease.vue";
   
//    import Allergies from "../../components/Allergies.vue";
    export default {
        components:{
           Allergies,
           PersonalHabits,
           Disease
        },
        //    },
    //      beforeCreate() {
    //     this.$options.components.Allergies =Allergies;
    // },
        created() {
            this.getPosts(this.$route.params.id)
        },
        data() {
            return {
                token: localStorage.getItem('token'),
                dob:"",
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
                await axios.get('patients/' + id,
                {
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