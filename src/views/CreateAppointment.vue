<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>

<div class="bg-regal-white h-screen">
    <!-- header -->
     <p class="headernames -ml-4">Create Appointment <span class="ml-80 pl-5">Your Timeline</span> </p>
    <div class="flex">

        <div class="lg:w-1/3 ">

            <DoctorSchedule />
        </div>
        <div class="lg:w-2/3 ">
            <PatientAppointment />
        </div>

    </div>
</div>
</template>

<script>
    import Nav from "../components/Nav.vue";
    import DoctorSchedule from "../components/DoctorSchedule.vue";
    import PatientAppointment from "../components/PatientAppointment.vue";
    export default {
        components: {
            DoctorSchedule,
            PatientAppointment,
            Nav
        }
    }
</script>

<style scoped>
</style>