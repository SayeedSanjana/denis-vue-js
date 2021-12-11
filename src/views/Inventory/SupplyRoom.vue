<template>
    <header class="sticky top-0 z-50">
        <NavInventory />
    </header>
    <div class=" flex ">

        <aside class="fixed h-screen   ">
            <SideInv />
        </aside>
        <main class=" w-full ml-36 px-6 ">
            <p class="text-lg text-left font-bold mx-7 my-5  px-20" style="color:#005072">Supply Room</p>
            <!-- <div
                class=" mt-5 ml-36 mb-2 w-1/6 border-2 border-regal-light-cyan my-1 mx-3 bg-regal-light-cyan flex justify-end  ">
                <input class="flex-grow outline-none ml-1 text-regal-teal bg-regal-light-cyan  w-96 h-8" name="q"
                    type="text" placeholder="Search " />
                <span class="ml-3 border-l border-regal-light-cyan px-2 bg-regal-lightishblue bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-1  text-regal-teal transition duration-100 cursor-pointer" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
            </div> -->

            <div class="flex  mb-2 ml-24 pl-3    mx-3   ">
            <div class="flex w-1/3 bg-regal-light-cyan ">

                <input
                    class="flex-grow outline-none pl-3 border border-r-0 border-regal-ash  text-regal-teal bg-regal-light-cyan py-2"
                    name="q" type="text" placeholder="Search " />
                <span class=" border-l-0 border border-regal-ash pt-0.5 px-2  bg-regal-lightishblue bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-2  text-regal-teal transition duration-100 cursor-pointer" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
            </div>

            </div>

            <div class="container mx-auto px-2 ">
               
                <div class="grid gap-y-4 xl:grid-cols-4  mt-6">
                    <div class="w-72 max-w-sm ml-1 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative ">
                    <div class="w-72 max-w-sm -ml-16  rounded-md shadow-md overflow-hidden ">
                        <div class="absolute -mt-4 ml-3 ">
                            <button class="py-2 px-3 ml-64 rounded-full bg-regal-teethblue text-black text-xs absolute">2</button>
                        </div>  
                        <div class="flex items-end justify-end h-56 w-72 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80')">            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="w-72 max-w-sm -ml-32 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-72 max-w-sm -ml-48 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                       <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-72 max-w-sm ml-1 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-72 max-w-sm -ml-16 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-72 max-w-sm -ml-32 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                       <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-72  max-w-sm -ml-48 rounded-md shadow-md overflow-hidden">
                        <div class="flex items-end justify-end h-56 w-72 bg-cover"
                            style="background-image: url('https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80')">
                            <!-- <button
                                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </button> -->
                        </div>
                       <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-semibold text-xs">Classic watch</h3>
                            <h3 class="flex justify-start text-black font-medium text-xs">1 pack</h3>
                            
                        </div>
                        <div class="px-5 py-2 bg-gradient-to-r from-regal-light-blue to-regal-bluishlight">
                            <h3 class="flex justify-start text-black font-medium text-lg">In Stock <span class="ml-32">Price</span></h3>
                            <div class="flex justify-between">
                                <p class="border bg-regal-lightishgreen px-1 py-0.5 text-sm text-regal-deepgreen">100 packs</p>
                                <p class="mr-1 text-regal-teal font-bold ">200 TK</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
               
            </div>


        </main>

        <aside class="fixed right-0">

            <libitemadd />
        </aside>

    </div>
</template>

<script>
    import libitemadd from "../../components/libitemadd.vue";
    import NavInventory from "../../components/NavInventory.vue";
    import SideInv from "../../components/SideInv.vue";
    export default {
        components: {
            NavInventory,
            SideInv,
            libitemadd
        }
    }
</script>

<style scoped>

</style>