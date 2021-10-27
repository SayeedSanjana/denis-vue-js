<template>
    <div
        class="lg:mt-4 lg:ml-36 lg:items-center  mx-auto text-regal-teal bg-white border border-regal-cyan border-opacity-20 ">
        <!-- left header -->
        <div class="py-3 text-regal-teal font-semibold text-lg">
            <p>Patient Information</p>
        </div>
        <!-- left header -->
        <div class="lg:grid lg:grid-cols-3  border">
            <!-- label -->
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Name</p>
            </div>
            <!-- label -->
            <!-- fetcheddata -->
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">{{this.waitingList.name}}</p>
            </div>
            <!-- fetcheddata -->
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <!-- label -->
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Age</p>
            </div>
            <!-- label -->
            <!-- fetcheddata -->
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">{{this.waitingList.dob}} years</p>
            </div>
            <!-- fetcheddata -->
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <!-- label -->
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Gender</p>
            </div>
            <!-- label -->
            <!-- fetcheddata -->
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">{{this.waitingList.gender}}</p>
            </div>
            <!-- fetcheddata -->
        </div>
        <div class="lg:grid lg:grid-cols-3  border">

            <!-- label -->
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Reason</p>
            </div>
            <!-- label -->
            <!-- fetcheddata -->
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm">{{this.waitingList.reason}}</p>
            </div>
            <!-- fetcheddata -->
        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <!-- label -->
            <div class="border-r py-4 px-2 ">

                <p class="text-left ml-2 font-semibold text-base">Preference</p>
            </div>
            <!-- label -->
            <!-- fetcheddata -->
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm"><span class="mr-2">Date:</span><span>{{this.waitingList.date}}</span></p>
                <p class="text-left font-medium text-sm"><span class="mr-2">Time:</span><span>{{this.waitingList.startTime}}-{{this.waitingList.endTime}}</span></p>
            </div>
            <!-- fetcheddata -->



        </div>
        <div class="lg:grid lg:grid-cols-3  border">
            <!-- label -->
            <div class="border-r p-2 ">

                <p class="text-left ml-2 font-semibold text-base">Request Date</p>
            </div>
            <!-- label -->
            <!-- fetcheddata -->
            <div class="p-2 col-span-2">

                <p class="text-left font-medium text-sm"> <span class="mr-3">16/10/2021</span> <span>9:45PM</span></p>
            </div>
            <!-- fetcheddata -->
        </div>






    </div>
    <div class="py-3 ml-36 text-regal-teal  border border-t-0">
        <p class="font-semibold text-lg mb-4">Appointment Fixing</p>

        <form class="">
            <div class="flex mb-4 ">
                <!-- label -->
                <div class="w-2/5">
                    <p class="text-regal-teal font-semibold flex items-end justify-end mr-20">Date:</p>
                </div>
                <!-- label -->
                <div class="w-3/5">
                <input type="date" class="border border-gray-300 px-1 py-2 -ml-20 mr-2" v-model="formData.date">
                    <!-- <select name="" class="border px-3 py-2 -ml-20 mr-2 ">
                        <option v-for="items in 31" :key="items" >{{items}}</option>

                    </select> -->
                    <!-- <span class="text-regal-teal">October</span> -->
                </div>
            </div>
            <div class="flex mb-4">
                <!-- label -->
                <div class="w-2/5">
                    <p class="text-regal-teal font-semibold flex items-end justify-end mr-10">Start Time:</p>
                </div>
                <!-- label -->
                <div class="w-3/5">
                    <select name="" class="border px-3 py-2 mr-2 -ml-8" v-model="startTime">
                        <option v-for="(item,index) in time" :key="index" >{{item}}</option>

                    </select>
                    <button class="btnampm">AM</button>
                    <button class="btnampm">PM</button>
                </div>
            </div>
            <div class="flex justify-center ">
                <!-- label -->
                <div class="w-2/5">
                    <p class="text-regal-teal font-semibold flex items-end justify-end mr-11">End Time:</p>
                </div>
                <!-- label -->
                <div class="w-3/5">
                    <select name="" class="border px-3 py-2 mr-2 -ml-8" v-model="endTime">
                        <option v-for="(item,index) in time" :key="index" >{{item}}</option>

                    </select>
                    <button class="btnampm" @click="setAm">AM</button>
                    <button class="btnampm" @click="setPm">PM</button>
                </div>
            </div>
        </form>
    
        <button class="resetnewbutton2 mx-36 mt-12" >Reset</button>
        <button class="canewbutton1 mx-36 mt-6 mb-9">Create Appointment</button>

        


    </div>
</template>

<script>
    export default {
        created(){
          this.getWaitingPatient()
        },
            data(){
                return{
                    time:["01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00",
                    "07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30"],

                    waitingList:
                    {
                        name:'Iktisad Rashid',
                        dob:'1989/12/9',
                        gender:'Male',
                        reason:'Surgery',
                        date:'2020/09/08',
                        startTime:'4:00 AM',
                        endTime:'5:00 PM'
                    },
                    formData:{
                        date:'',
                        startTime:'',
                        endTime:''
                    },
                    startTime:'',
                    endTime:'',
                    am:false,
                    pm:false
                
                }
            },
            methods:{
                getWaitingPatient(){
                    //const ageDifMs = Date.now() - new Date(this.formData.dob.substring(0, 10)).getTime();
                    const ageDifMs = Date.now() - new Date(this.waitingList.dob).getTime();
                    const ageDate = new Date(ageDifMs);
                    this.waitingList.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                    console.log( this.waitingList.dob)
                },
                setAm(){
                    this.am=true
                },
                setPm(){
                    this.PM=true
                },


            }
    }
</script>

<style scoped>
</style>