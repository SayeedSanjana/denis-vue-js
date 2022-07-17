<template>
    
    <nav class=" shadow sticky z-40 bg-gradient-to-l from-regal-cyan-teal to-regal-teethblue">
        
        <div class="flex justify-between container py-3 mx-auto items-center">
            
            <router-link :to="{ name:'Patient'}" class="text-xl font-semibold lg:text-2xl text-regal-teal"
                
                >
                MT Dental Center
            </router-link>
        
            <ul class="flex items-center">
                <li class="px-2">
                    <router-link :to="{ name:'Patient'}"
                        class="text-md font-semibold text-white hover:text-regal-teal hover:underline">
                        Patient</router-link>

                </li>
                <!-- <li class="px-2">
                 
                    <router-link to='/AppointmentPortal'
                        class="text-md font-semibold text-white hover:text-regal-teal hover:underline">
                        <span class="">Appointment</span>
                    </router-link>

                </li> -->
                
                <li class="px-2">
                    <!-- Billing -->
                    <router-link :to="{name: 'BillingWindow'}"
                        class="text-md font-semibold text-white hover:text-regal-teal hover:underline">
                        Billing</router-link>

                </li>
                <!-- user profile -->
                <li class="dropdown relative text-left font-semibold"  >
                    
                    <div class="p-2  rounded-full">

                        <img class=" pointer-events-none " src="@/assets/svgs/user.svg" alt="user-image" >
                    </div>

                    <!--
                        Dropdown menu, show/hide based on menu state.

                        Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                    <div class="dropdown-menu absolute hidden right-2"  tabindex="-1">
                        <div class="dropdown-list-group">
                            <router-link to="/ProfileSettings" class="dropdown-items" tabindex="-1">
                                    Profile Settings
                            </router-link>
                            <router-link to="/AccountSettings" class="dropdown-items" tabindex="-1">
                                Account Settings
                            </router-link>
                            <router-link to="/" @click="logout" class="dropdown-items" tabindex="-1">
                                Logout
                            </router-link>
                        </div>
                    </div>

                    
                </li>
            </ul> 
        </div>
        
    </nav>
    
</template>
<script>
    export default {
        
        methods: {
            
            logout() {
                localStorage.clear()
            },
        }
    }
</script>

<style scoped>
    .dropdown-list-group {
        @apply py-1 text-regal-teal text-opacity-60;
        @apply bg-white block w-56 mt-2 rounded-md shadow-lg;
        @apply ring-1 ring-regal-cyan-teal ring-opacity-20 focus:outline-none;
    }
    .dropdown-items{
        @apply block px-4 py-2 text-sm;
    }
    .dropdown-items:hover{
        @apply bg-gray-200 text-regal-teal;
    }
</style>