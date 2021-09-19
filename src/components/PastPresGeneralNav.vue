<template>
    <div>

        <div class="bg-white shadow dark:bg-gray-800 min-h-screen ">
            <div
                class="md:p-6 p-3 container md:flex md:items-center md:justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">

                <button @click="activeTab = 'General'"
                    class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-indigo-500 mx-1.5 sm:mx-6">General
                </button>

                <button @click="activeTab = 'PrescriptionList'"
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
    import General from "../views/DoctorsPortal/General.vue";
    import PrescriptionList from "../views/DoctorsPortal/PrescriptionList.vue";

    export default {
        props: ['id'],
        components: {
            General,
            PrescriptionList

        },
        data() {
            return {
                activeTab: 'PrescriptionList'


            }
        },



    }
</script>

<style scoped>

</style>