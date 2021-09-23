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
                          <PersonalHabits :formData="formData" @myEvent="getPosts" /> 
                    </div>
                    <div class="  ">
                        <!--habit-->
                          <Disease :formData="formData" @myEvent="getPosts" /> 
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
                show: false,
                showHabits: false,


                item: "",
                items: [],
                habits: [],
                item1: "",




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


            addHabits() {
                this.habits.push(this.item1)
                this.item1 = ""
            },
            deleteHabits(i) {
                this.habits.splice(i, 1)
            },
            addBadHabits(id) {
                for (var i of this.habits) {
                    this.formData.badHabits.push(i);
                }

                console.log(this.formData.badHabits)
                axios.patch('http://localhost:3000/api/patients/' + id + '/add-bad-habit', this.formData)
                    .then((response) => {
                        //this.$router.push({name: 'Patient'});
                        console.log(response);
                        this.getPosts(this.$route.params.id);


                    })


                    .catch((error) => {
                        console.log(error)

                    })
                this.showHabits = !this.showHabits
                this.item1 = []


            },



            addItem() {
                //   this.formData.allergies.push(this.item),
                this.items.push(this.item)
                this.item = ""
            },
            deleteItem(i) {
                // this.formData.allergies.splice(i,1)
                this.items.splice(i, 1)

            },
            addAllergy(id) {
                for (var i of this.items) {
                    this.formData.allergies.push(i);
                }

                console.log(this.formData.allergies)
                axios.patch('http://localhost:3000/api/patients/' + id + '/add-allergy', this.formData)
                    .then((response) => {
                        //this.$router.push({name: 'Patient'});
                        console.log(response);
                        this.getPosts(this.$route.params.id);


                    })


                    .catch((error) => {
                        console.log(error)

                    })
                this.show = !this.show
                this.items = []

            },




            showAllergy() {
                this.show = !this.show;
            },
            showBadHabits() {
                this.showHabits = !this.showHabits
            },

            async getPosts(id) {
                await axios.get('patients/' + id)
                    .then((response) => {

                        this.formData = response.data.result;
                        const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
                        //console.log(ageDifMs);
                        const ageDate = new Date(ageDifMs);
                        this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                        //console.log(this.formData.dob)
                        //this.calculateAge(this.formData.dob.substring(0,10))
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