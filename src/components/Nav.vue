<template>
    
    <nav class=" shadow sticky z-40 bg-gradient-to-l from-regal-cyan-teal to-regal-teethblue">
        
        <div class="flex justify-between container py-3 mx-auto items-center">
            
            <a class="text-xl font-semibold lg:text-2xl text-regal-teal"
                
                href="#">
                MT Dental Center
            </a>
        
            <ul class="flex items-center">
                <li class="px-2">
                    <router-link :to="{ name:'Patient'}"
                        class="text-md font-semibold text-white hover:text-regal-teal hover:underline">
                        Patient</router-link>

                </li>
                <li class="px-2">
                    <!-- appointment -->
                    <router-link to='/AppointmentPortal'
                        class="text-md font-semibold text-white hover:text-regal-teal hover:underline">
                        <span class="">Appointment</span>
                    </router-link>

                </li>
                
                <li class="px-2">
                    <!-- Billing -->
                    <router-link to="/patient-list-billing"
                        class="text-md font-semibold text-white hover:text-regal-teal hover:underline">
                        Billing</router-link>

                </li>
                <!-- user profile -->
                <li class="relative text-left font-semibold"  >
                    
                    
                    <img class="px-3" @mouseover="toggle" src="@/assets/svgs/icon.svg" alt="user-image">

                    <!--
                        Dropdown menu, show/hide based on menu state.

                        Entering: "transition ease-out duration-100"
                        From: "transform opacity-0 scale-95"
                        To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                        From: "transform opacity-100 scale-100"
                        To: "transform opacity-0 scale-95"
                    -->
                    <div v-show="isOpen"  class="dropdown"  tabindex="-1">
                        <div class="dropdown-list-group" >
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
        data() {
            return {
                isOpen: false,
            }
        },
        mounted() {
            document.querySelector("main").addEventListener("click", () => {
                this.isOpen = false;
            });
        },
        methods: {
            toggle() {
                this.isOpen = true
            },
            logout() {
                localStorage.clear()
            },
        }
    }
</script>

<style scoped>
    .dropdown {
        @apply absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-regal-cyan-teal ring-opacity-20 focus:outline-none;
    }
    
    .dropdown-list-group {
        @apply py-1 text-regal-teal text-opacity-60;
    }
    .dropdown-items{
        @apply block px-4 py-2 text-sm;
    }
    .dropdown-items:hover{
        @apply bg-gray-200 text-regal-teal;
    }
    /* .dropdown:hover .dropdown-menu {
        display: block;
    } */
</style>