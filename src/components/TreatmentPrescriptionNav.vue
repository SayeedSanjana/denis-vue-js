<template>
    <div>

        <div class="bg-white md:shadow dark:bg-gray-800  ">
            <div
                class="p-6 container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">


                <!-- <button @click="activeTab = 'TreatmentNote'" 
                    class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">Treatment
                    Note</button> -->

                <button @click="activeTab = 'PatientPrescription'" :class="activeTab==='PatientPrescription' ? 'border-indigo-500' : 'border-white'"
                    class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">Prescription</button>
                    
                <button @click="activeTab = 'PrescriptionList'" :class="activeTab==='PrescriptionList' ? 'border-indigo-500' : 'border-white'"
                    class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">Past
                    Prescription</button>



            </div>

            <keep-alive>
                <component :is="activeTab" />
            </keep-alive>
        
        </div>
    </div>
</template>

<script>
    // import TreatmentNote from "../views/DoctorsPortal/TreatmentNote.vue";
    import PatientPrescription from "../views/DoctorsPortal/PatientPrescription.vue";
     import PrescriptionList from "../views/DoctorsPortal/PrescriptionList.vue";
    export default {
        props: ['id'],
        components: {
            // TreatmentNote,
            PatientPrescription,
              PrescriptionList
            
        },
        data() {
            return {
                activeTab: 'PatientPrescription'


            }
        },
        methods: {


        }
    }
</script>

<style scoped>

</style>