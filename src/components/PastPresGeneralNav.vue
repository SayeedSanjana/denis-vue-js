<template>
    <div class="">

        <!-- <div class="bg-white shadow dark:bg-gray-800 min-h-screen "> -->
            <div class="container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300 bg-regal-white border border-regal-cyan border-opacity-20 py-3">

                <button @click="activeTab = 'General'" :class="activeTab==='General' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent mx-1.5  sm:mx-6">General
                </button>
                 <button @click="activeTab = 'TreatmentNote'" :class="activeTab==='TreatmentNote' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent  mx-1.5  sm:mx-6">Treatment
                    Note</button>


            </div>
            <keep-alive>
                <component :pat="pat" :is="activeTab" />
            </keep-alive>


        <!-- </div> -->
    </div>
</template>

<script>
    import General from "../views/DoctorsPortal/General.vue";
    import TreatmentNote from "../views/DoctorsPortal/TreatmentNote.vue";
    export default {
        props: {id: String,
            pat: Object
        },
        components: {
            General,
            TreatmentNote
        },
        data() {
            return {
                activeTab: 'General'
            }
        },
    }
</script>

<style scoped>

</style>