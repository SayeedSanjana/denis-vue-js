<template>
    <div>
            <div class="container md:flex md:items-center md:justify-center mx-auto text-gray-600  bg-regal-white border border-regal-cyan border-opacity-20 py-3">
                <!-- Button fr patient dashboard -->
                <button @click="activeTab = 'PatientDashboard'"
                    :class="activeTab==='PatientDashboard' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent  mx-1.5 mt-0.5 sm:mx-6">Patient Dashboard
                    </button>
                <!-- Button for prescription -->
                <button @click="activeTab = 'PatientPrescription'"
                    :class="activeTab==='PatientPrescription' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent mx-1.5 mt-0.5 sm:mx-6">Prescription</button>

                <!-- <button @click="activeTab = 'PrescriptionList'"
                    :class="activeTab==='PrescriptionList' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent  mx-1.5 mt-0.5 sm:mx-6">Patient Dashboard
                    </button> -->
                
            </div>
            <keep-alive>
                <component :is="activeTab" />
            </keep-alive>

        
    </div>
</template>

<script>
    import PatientPrescription from "../views/DoctorsPortal/PatientPrescription.vue";
    //import PrescriptionList from "../views/DoctorsPortal/PrescriptionList.vue";
    import PatientDashboard from "../views/DoctorsPortal/PatientDashboard.vue";
    export default {
        props: ['id'],
        components: {
            PatientPrescription,
            PatientDashboard
        },
        data() {
            return {
                activeTab: 'PatientDashboard'
            }
        }
    }
</script>

<style scoped>

</style>