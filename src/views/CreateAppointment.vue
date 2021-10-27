<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>


    <!-- header -->
     <p class="headernames">Create Appointment </p>
    <div class="flex">

        <div class="lg:w-1/3">

            <DoctorSchedule />
        </div>
        <div class="lg:w-2/3">
            <PatientAppointment />
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