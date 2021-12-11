<template>
    <div class="">
        <div class=" w-96 h-screen px-4 py-8 bg-regal-bluishlight border-r dark:bg-gray-800 dark:border-gray-600">
            <p class=" flex justify-start ml-4 text-regal-teal text-xl font-medium ">Items Added</p>
            <div class="flex justify-end ml-24 ">
                <button
                    class=" px-8 py-2 mr-2 bg-gradient-to-r from-regal-gb3 to-regal-gb4 text-center border text-white font-medium  text-sm ">Confirm</button>
            </div>
            <!-- <div class="w-80 mt-2 mx-1 border">

            </div> -->
            <div class=" bg-white flex flex-col w-full mt-10 border border-regal-lightishblue border-opacity-25 ">
                <div class="flex bg-regal-lightishblue bg-opacity-20 ">
                    <h2 class="text-gray-900 text-sm font-medium title-font my-2 ml-2.5 mr-32">Item Details</h2>
                    <h2 class="text-gray-900 text-sm font-medium title-font my-2 mr-16">Qty</h2>
                    <h2 class="text-gray-900 text-sm font-medium title-font my-2 ">Price</h2>

                </div>
                <div class="bg-white">
                    <div class="flex justify-start">
                        <p class="-ml-5 mt-2 text-xs w-3/5">Paraceramol 500mg </p>
                        <p class=" ml-10 w-1/5">
                        <button class="">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7" r="7" fill="#E9F0F1"/>
                            <path d="M10 7H4" stroke="#174D50" stroke-width="0.5" stroke-linecap="round"/></svg>
                        </button>
                        <span><input type="text" class="w-5 border  m-1"></span>
                        <button>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="7" r="7" fill="#E9F0F1"/>
                            <path d="M7 7H3M7 11V7V11ZM7 7V3V7ZM7 7H11H7Z" stroke="#174D50" stroke-width="0.5" stroke-linecap="round"/></svg>
                        </button>
                        </p>
                        <p class="ml-12 flex text-xs w-1/5 mt-2">50 tk <button><img class="ml-2 -mt-2" src="@/assets/svgs/icross.svg" alt="" srcset=""></button></p>
                    </div>
                    
                    

                    <div class="border border-black border-opacity-50 mt-2 mb-2 ml-2 mr-2">

                    </div>
                    <div class="flex justify-between mb-2">
                        <p class="text-xs ml-3" >6 items</p>
                        <p class="text-xs ml-20"> Subtotal</p>
                        <p class="text-xs mr-4">350 TK</p>
                    </div>
                </div>
                   
                
            </div>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>