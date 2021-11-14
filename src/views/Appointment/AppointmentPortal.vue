<template>
        <div>
        <header class="sticky top-0 z-50">
            <Nav />
        </header>

            <div class="md:flex bg-white   ">
                <!--main-->
                <div class=" mx-auto  bg-white w-full rounded-sm md:w-1/3 min-h-screen border border-regal-cyan border-opacity-20 ">
                    <!--sidebar-->
                    <div class="">
                        <PatientList/>
                    </div>
                </div>
                <!--sidebar-->

                <div class=" md:w-3/4 w-full">
                    <!--nav-->           
                <div class="justify-between container md:flex md:justify-center text-gray-600  bg-regal-white border border-regal-cyan border-opacity-20 border-b-0 py-3">
                    <div class="md:w-1/3 md:text-right">
                    <button @click="activeTab = 'TodaysAppointmentList'" :class="activeTab==='TodaysAppointmentList' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent mx-1.5 mt-0.5">Today's appointment</button>
                    </div>
                    <div class="md:w-1/3 ">
                    <button @click="activeTab = 'AllAppointmentList'" :class="activeTab==='AllAppointmentList' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent  mx-1.5 mt-0.5 ">All appointments</button>
                    </div>
                    <div class="md:w-1/3 md:text-left">
                    <button @click="activeTab = 'Calendar'" :class="activeTab==='Calendar' ? 'border-regal-teal' : 'border-regal-white'"
                    class="border-b-2 border-transparent  mx-1.5 mt-0.5">Calendar</button>
                    </div>
               </div>
            <keep-alive>
                <component :is="activeTab" />
            </keep-alive>      
                </div>
                <!--nav-->
            </div>
            <!--main-->
    </div>
</template>

<script>
import PatientList from "../Appointment/PatientList.vue";
import Nav from "../../components/Nav.vue";
import TodaysAppointmentList from "../Appointment/TodaysAppointmentList.vue";
import AllAppointmentList from "../Appointment/AllAppointmentList.vue";
import Calendar from "../Appointment/Calendar.vue";
    export default {
    components: {
        Nav,
        PatientList,
        TodaysAppointmentList,
        AllAppointmentList,
        Calendar
    },  
     data() {
            return {
                activeTab: 'TodaysAppointmentList'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>