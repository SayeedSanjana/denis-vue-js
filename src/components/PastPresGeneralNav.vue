<template>
    <div>

        <div class="bg-white shadow dark:bg-gray-800 min-h-screen ">
            <div
                class="md:p-6 p-3 container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">

                <button @click="activeTab = 'General'" :class="activeTab==='General' ? 'border-indigo-500' : 'border-white'"
                    class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">General
                </button>
                 <button @click="activeTab = 'TreatmentNote'" :class="activeTab==='TreatmentNote' ? 'border-indigo-500' : 'border-white'"
                    class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">Treatment
                    Note</button>


            </div>
            <keep-alive>
                <component :is="activeTab" />
            </keep-alive>


        </div>
    </div>
</template>

<script>
    import General from "../views/DoctorsPortal/General.vue";
    import TreatmentNote from "../views/DoctorsPortal/TreatmentNote.vue";
    export default {
        props: ['id'],
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