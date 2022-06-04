<template>
    <div>
     
         
            <div class="lg:flex">
                <!--main-->
                <div class=" mx-auto w-full rounded-sm   lg:w-1/5 ">
                    <!--sidebar-->
                    <PreviousMedicalRecords :patient="$store.state.patient.data"/>
                    
                </div>
                <!--sidebar-->

                <div class=" lg:w-4/5  ">

                   
                    <!-- <CreatePrescription /> -->

                    <PrescriptionList />
                    
                  
                </div>
                <!--nav-->
            </div>
            <!--main-->
    </div>
</template>

<script>
    // import TreatmentPrescriptionNav from "../../components/TreatmentPrescriptionNav.vue"
    // import PastPresGeneralNav from "../../components/PastPresGeneralNav.vue";
    // import Nav from "../../components/Nav.vue";
    import PrescriptionList from "../Prescription/PrescriptionList.vue"
    // import CreatePrescription from "../Prescription/CreatePrescription.vue"
    import PreviousMedicalRecords from "../DoctorsPortal/PreviousMedicalRecords.vue";
    // import axios from "axios";
    export default {
        components: {
            // Nav,
            // TreatmentPrescriptionNav,
            // PastPresGeneralNav,
            PreviousMedicalRecords,
            // CreatePrescription,
            PrescriptionList
        },
        created() {
             this.$store.dispatch('fetchPatient', this.$route.params.id);
            //  this.$store.dispatch('updatePatient', this.$route.params.id);
           // this.getPatient(this.$route.params.id)
        },
        // data() {
        //     return {
        //         token: localStorage.getItem('token'),
                // show: false,
                // showHabits: false,
                // date: "",
                // formData: {
                //     name: "",
                //     gender: "",
                //     dob: "",
                //     address:"",
                //     allergies: [],
                //     disease:[],
                //     personalHabits: []
                // }
        //     }
        // },
        methods: {
            // showAllergy() {
            //     this.show = !this.show;
            // },
            // showBadHabits() {
            //     this.showHabits = !this.showHabits
            // },
            // async getPatient(id) {
            //      axios.get('patients/' + id, {
            //             headers: {
            //                 "Authorization": `Bearer ${localStorage.getItem('token') }`
            //             }
            //         })
            //         .then((response) => {
            //             this.formData = response.data.data;
            //             const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
            //             const ageDate = new Date(ageDifMs);
            //             this.formData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
            //             //console.log(this.formData.dob)
            //         })
            //         .catch((error) => {
            //             console.log(error)
            //         })
            // },
        }
    }
</script>

<style scoped>
</style>