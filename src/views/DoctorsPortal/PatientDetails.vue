<template>
<div>
     <header class="sticky top-0 z-50">

       <Nav />
    </header>

    <div class="px-4 py-4">

        <div class="md:flex   md:py-8 bg-white px-3  ">
            <!--main-->
            <div
                class="max-w-xs mx-auto  bg-white w-full rounded-sm  shadow-md lg:w-1/6 md:w-3/4 min-h-screen">
                <!--sidebar-->

                <div >
                    <PreviousMedicalRecords />
                </div>
            </div>
            <!--sidebar-->

            <div class="xl:w-5/6 xl:w-1/34">
                <!--nav-->
               
                <div class="xl:flex justify-between md:ml-2 min-h-screen">
                    <div class="xl:w-1/2 xl:ml-5 xl:mr-5 pt-3 xl:pt-0 md:mb-4 ">

                        <TreatmentPrescriptionNav :id="$route.params.id"> </TreatmentPrescriptionNav>
                    </div>
                    <div class="xl:w-1/2 pt-3 xl:pt-0">

                        <PastPresGeneralNav :id="$route.params.id"></PastPresGeneralNav>


                    </div>
                </div>


            </div>
            <!--nav-->

        </div>
        <!--main-->
    </div>
</div>
</template>

<script>

    import TreatmentPrescriptionNav from "../../components/TreatmentPrescriptionNav.vue"
    import PastPresGeneralNav from "../../components/PastPresGeneralNav.vue";
    import Nav from "../../components/Nav.vue";
    import PreviousMedicalRecords from "../DoctorsPortal/PreviousMedicalRecords.vue";
    import axios from "axios";
    export default {
        components: {
           
        Nav,
        TreatmentPrescriptionNav,
        PastPresGeneralNav,
        PreviousMedicalRecords

            //PreviousMedicalRecords
        },
        created() {
            this.getPatient(this.$route.params.id)
        },
        data() {
            return {
                show: false,
                showHabits: false,


                date: "",
                formData: {
                    name: "",
                    gender: "",
                    dob: "",
                    allergies: [],
                    badHabits: []
                }

            }
        },


        methods: {

            showAllergy() {
                this.show = !this.show;
            },
            showBadHabits() {
                this.showHabits = !this.showHabits
            },

            async getPatient(id) {
               await axios.get('patients/' + id ,{headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
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