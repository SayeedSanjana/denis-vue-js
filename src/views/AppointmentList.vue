<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-screen bg-regal-white">
        <section class="w-full">
            <p class="headername -mx-4">Today's Appointment List </p>
            <div class=" mx-auto flex sm:flex-row flex-col justify-between ">
                <!-- search -->
                <div class="flex flex-row mb-1 sm:mb-0 px-48">

                    <div class="block relative">
                        <form class="bg-white ">
                            <div class="searchdivclass">
                                <input class="searchinput" name="q" type="text"
                                    placeholder="Search by name or phone number" />
                                <span class="ml-10">
                                    <img src="@/assets/svgs/sicon.svg" class="h-5 w-5 mt-1">
                                </span>
                            </div>
                        </form>

                    </div>

                    <!-- sortby -->
                    <div class="relative ml-4 mt-5">
                        <select class="selectclass" id="sortby">

                            <option hidden class="text-regal-teal">Sort By</option>
                            <option class="text-regal-teal">Examined</option>
                            <option class="text-regal-teal">Scheduled</option>
                            <option class="text-regal-teal">Cancelled</option>

                        </select>
                        <div class=" selectsvg">
                            <img src="@/assets/svgs/select.svg">
                        </div>
                    </div>

                    <!-- sortby -->
                </div>

                <!-- create new appointment -->
                <div class="flex justify-end px-48">
                    <button class="newbutton mt-5 mb-2 " @click="createnewappointment">
                        <span class=" mt-1 mr-2"> Create New Appointment</span>
                        <span class="mr-2">
                            <img src="@/assets/svgs/add2.svg" class="w-3 h-7 ">
                        </span>
                    </button>

                </div>
                <!-- create new appointment -->
            </div>
            <!-- search -->
            <!-- table -->
            <table class=" rounded-t-xl m-5  w-4/5 mx-auto bg-regal-blue ">
                <!-- thead -->
                <tr class="trhead">
                    <th class="px-4 py-3">SL No.</th>
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Age/Gender</th>
                    <th class="px-4 py-3">Patient ID</th>
                    <th class="px-4 py-3">Contact Number</th>
                    <th class="px-4 py-3">Visiting Time</th>
                    <th class="px-4 py-3">Complaint</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3">Action</th>
                </tr>
                <!-- thead -->
                <!-- tbody -->
                <tr class="trbody">
                    <td class="px-2 ">1</td>
                    <td class="px-2 py-3">Patient A</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-examined">Examined</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1  bg-regal-examined"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">2</td>
                    <td class="px-2 py-3">Patient B</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-scheduled">Scheduled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-scheduled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">3</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-cancelled">Cancelled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-cancelled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">4</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-cancelled">Cancelled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-cancelled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">5</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-scheduled">Scheduled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-scheduled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">6</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-cancelled">Cancelled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-cancelled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">7</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-examined">Examined</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-examined"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">8</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-cancelled">Cancelled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-cancelled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">9</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-cancelled">Cancelled</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-cancelled"></td>
                </tr>
                <tr class="trbody">
                    <td class="px-2 ">10</td>
                    <td class="px-2 py-3">Patient C</td>
                    <td class="px-2 py-3">24/Male</td>
                    <td class="px-2 py-3">P4321234</td>
                    <td class="px-2 py-3">01928374654</td>
                    <td class="px-2 py-3">11:00AM-11:30AM</td>
                    <td class="px-2 py-3">Surgery</td>
                    <td class="px-2 py-3 text-regal-examined">Examined</td>
                    <td class="px-2 py-3"><button class="text-regal-cyan mr-2">Edit</button> <button
                            class=" text-regal-red">Cancel</button></td>
                    <td class="border border-r-1 bg-regal-examined"></td>
                </tr>
                <!-- tbody -->
            </table>
            <!-- table -->
            <!-- pagination -->
            <div class="flex px-40 flex-row justify-center">
                <div class="px-40">
                    <button class="pagebutton" type="button"> Previous</button>
                </div>
                <div class="px-40">
                    <button class="pagebutton" type="button">Next </button>
                </div>
            </div>
            <!-- pagination -->
        </section>

    </div>
</template>

<script>
    import Nav from "../components/Nav.vue";
    export default {
        components: {
            Nav,

        },
         methods:{
             createnewappointment() {
                this.$router.push({
                    name: 'Createnewappointment',
                   
                })
            },

        }
    }
</script>

<style scoped>

</style>