<script>
    import PrescriptionList from "../Prescription/PrescriptionList.vue"
    import PreviousMedicalRecords from "../DoctorsPortal/PreviousMedicalRecords.vue";
    export default {
        components: {
            PreviousMedicalRecords,
            PrescriptionList
        },
        created() {
            // fetch patient
            this.$store.dispatch('fetchPatient', this.$route.params.id);
        }


    }
</script>

<template>
    <div>
        <div class="lg:flex">
            <!--main-->
            <div class=" mx-auto w-full rounded-sm   lg:w-1/5 ">
                <!--sidebar-->
                <PreviousMedicalRecords :patient="$store.state.patient.data" />

            </div>
            <!--sidebar-->

            <div class=" lg:w-4/5  ">

                <PrescriptionList :patient="$store.state.patient.data" />

            </div>
            <!--nav-->
        </div>
        <!--main-->
    </div>
</template>


<style scoped>
</style>