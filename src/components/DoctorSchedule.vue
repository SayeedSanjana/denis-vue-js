<template>
    <div
        class="lg:mt-4 lg:ml-36 lg:items-center  mx-auto text-regal-teal capitalize  bg-white border border-regal-cyan border-opacity-20 ">
        <div class="py-3 text-regal-teal font-semibold text-lg">
            <p>Patient Information</p>
        </div>

        <div class="lg:grid lg:grid-cols-3  border">
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Name</p>
            </div>
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">Patient A</p>
            </div>
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Age</p>
            </div>
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">32 years</p>
            </div>
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Gender</p>
            </div>
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">Male</p>
            </div>
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Reason</p>
            </div>
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">Severe Tooth Ache</p>
            </div>
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <div class="border-r py-4 px-2 ">

                <p class="text-left ml-2 font-semibold text-base">Preference</p>
            </div>
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm"><span class="mr-2">Date:</span><span>17/10/2021</span></p>
                <p class="text-left font-medium text-sm"><span class="mr-2">Time:</span><span>7:00PM-10:00PM</span></p>
            </div>



        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Request Date</p>
            </div>
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm"> <span class="mr-3">16/10/2021</span> <span>9:45PM</span></p>
            </div>
        </div>






    </div>
    <div class="py-3 ml-36 text-regal-teal  border border-t-0">
        <p class="font-semibold text-lg mb-4">Appointment Fixing</p>

        <div class="">
            <div class="flex mb-4 ">
                <div class="w-2/5">
                    <p class="text-regal-teal font-semibold flex items-end justify-end mr-20">Date:</p>
                </div>
                <div class="w-3/5">
                    <select name="" class="border px-3 py-2 -ml-20 mr-2 ">
                        <option v-for="items in 31" :key="items" >{{items}}</option>

                    </select>
                    <span class="text-regal-teal">October</span>
                </div>
            </div>
            <div class="flex mb-4">
                <div class="w-2/5">
                    <p class="text-regal-teal font-semibold flex items-end justify-end mr-10">Start Time:</p>
                </div>
                <div class="w-3/5">
                    <select name="" class="border px-3 py-2 mr-2 -ml-8">
                        <option v-for="(item,index) in time" :key="index" >{{item}}</option>

                    </select>
                    <button class="border bg-white focus:bg-regal-cyan-blue px-2 py-1.5">AM</button>
                    <button class="border bg-white focus:bg-regal-cyan-blue px-2 py-1.5">PM</button>
                </div>
            </div>
            <div class="flex justify-center ">
                <div class="w-2/5">
                    <p class="text-regal-teal font-semibold flex items-end justify-end mr-11">End Time:</p>
                </div>
                <div class="w-3/5">
                    <select name="" class="border px-3 py-2 mr-2 -ml-8">
                        <option v-for="(item,index) in time" :key="index" >{{item}}</option>

                    </select>
                    <button class="border bg-white focus:bg-regal-cyan-blue px-2 py-1.5">AM</button>
                    <button class="border bg-white focus:bg-regal-cyan-blue px-2 py-1.5">PM</button>
                </div>
            </div>
        </div>
    
        <button class="resetnewbutton2 mx-36 mt-12">Reset</button>
        <button class="canewbutton1 mx-36 mt-6 mb-9">Create Appointment</button>

        


    </div>
</template>

<script>
    export default {
            data(){
                return{
                    time:["01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00",
                    "07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30"]
                }
            }
    }
</script>

<style scoped>

</style>