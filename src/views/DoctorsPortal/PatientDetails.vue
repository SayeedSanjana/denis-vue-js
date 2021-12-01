<template>
    <div>
        <header class="sticky top-0 z-50">

            <Nav />
        </header>

            <div class="lg:flex bg-white   ">
                <!--main-->
                <div class=" mx-auto  bg-white w-full rounded-sm   lg:w-1/4 min-h-screen border border-regal-cyan border-opacity-20 ">
                    <!--sidebar-->

                    <div >
                        <PreviousMedicalRecords />
                    </div>
                </div>
                <!--sidebar-->

                <div class=" lg:w-3/4  ">
                    <!--nav-->
                    <div class="xl:flex justify-between min-h-screen ">
                        <div class="xl:w-3/5  md:mb-4  ">

                            <TreatmentPrescriptionNav :id="$route.params.id"> </TreatmentPrescriptionNav>
                        </div>
                        <div class="xl:w-2/5 xl:pt-0 border border-regal-cyan border-opacity-20">

                            <PastPresGeneralNav :id="$route.params.id"></PastPresGeneralNav>
                        </div>
                    </div>
                </div>
                <!--nav-->
            </div>
            <!--main-->
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
        },
        created() {
            this.getPatient(this.$route.params.id)
        },
        data() {
            return {
                token: localStorage.getItem('token'),
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
                        //console.log(this.formData.dob)
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