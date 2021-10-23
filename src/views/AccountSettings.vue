<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-screen bg-regal-white">
        <section class="w-full">
            <p class="headername">Account Settings </p>
            <!-- form -->
            <form class="w-1/2">
                <!-- fullname -->
                <div class="formbox">
                    <label for="" class="labeldesign">Full Name</label>

                    <input type="text" class="inputfield">
                </div>
                <!-- fullname -->
                <div class="flex formbox">
                    <!-- email -->
                    <div class="w-1/2 pr-4">
                        <label for="" class="labeldesign">Email</label>

                        <input type="text" class="inputfield">
                    </div>
                    <!-- email -->
                    <!-- phone number -->
                    <div class="w-1/2">
                        <label for="" class="labeldesign">Phone Number</label>

                        <input type="text" class="inputfield">
                    </div>
                    <!-- phone number -->
                </div>
                <!-- address -->
                <div class="formbox">
                    <label for="" class="labeldesign">Address</label>

                    <textarea type="text" class="h-40 inputfield"></textarea>
                </div>
                <!-- address -->

            </form>
            <!-- form -->

            <p class="headername">Password Settings </p>
            <!-- change password -->
            <div class="formbox">
                <button v-show="!a" @click="a = true" class="newbutton">Change Password</button>
            </div>
            <!-- change password -->
            <div v-show="a" class=" w-full formbox">
                <div class="flex">
                   
                    <div class="w-1/2 pr-12">
                        <!-- old password -->
                        <div class="w-1/2 pr-4">
                            <label for="" class="labeldesign">Old Password</label>
                            <input type="text" class="inputfield">
                        </div>
                        <!-- old password -->
                        <div class="flex">
                            <!--new password -->
                            <div class="w-1/2 pr-4">
                                <label for="" class="labeldesign">New Password</label>
                                <input type="text" class="inputfield">
                            </div>
                            <!--new password -->
                            <!-- confirm password-->
                            <div class="w-1/2">
                                <label for="" class="labeldesign">Confirm Password</label>
                                <input type="text" class="inputfield">
                            </div>
                            <!-- confirm password -->
                        </div>
                    </div>
                     <div class="w-1/2 mt-24 mr-28 ">
                        <button class="newbutton1 mt-2.5">Confirm</button>
                    </div>
                </div>
            </div>


            <!-- change password -->

            <div v-show="!a" class="h-28 ">

            </div>


            <!-- <p class="secondaryheadername">Additional Information </p> -->

            <p class="mt-6  px-52 labeldesign">Account Creation Date : <span class="pl-5 labeldesign"> 20 April,2021 at
                    8.56 PM </span></p>

            <div class="flex formbox">
                <!-- Save -->
                <button class="newbutton1  mr-5">Save</button>
                <!-- Save -->
                <!-- cancel -->
                <button class="newbutton2">Cancel</button>
                <!-- cancel -->
            </div>



        </section>
    </div>
</template>

<script>
    import Nav from "../components/Nav.vue";
    export default {
        components: {
            Nav,

        },
        data() {
            return {

                a: false
            }
        },

    }
</script>

<style scoped>

</style>