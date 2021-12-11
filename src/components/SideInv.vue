<template>
    <div class="">
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-regal-light-cyan border-r dark:bg-gray-800 dark:border-gray-600">
        <p class=" flex justify-start ml-4 text-regal-blackgray text-xl font-semibold ">Inventory</p>
        <div class="-ml-4  ">
        <router-link to="/InventoryList" class="flex justify-center text-regal-blackgray py-2 mt-2 hover:bg-regal-lightishblue hover:bg-opacity-10 border-r-4  border-regal-light-cyan hover:border-regal-lightishblue hover:border-opacity-20" active-class=" bg-regal-lightishblue bg-opacity-10 border-r-4 border-regal-light-cyan border-regal-lightishblue  border-opacity-20" >Inventory List </router-link>
        </div>
        <div class="-ml-4 "
         >
        <router-link to="/SupplyRoom" class="flex justify-center text-regal-blackgray py-2 mt-2 hover:bg-regal-lightishblue hover:bg-opacity-10 border-r-4  border-regal-light-cyan hover:border-regal-lightishblue hover:border-opacity-20" active-class=" bg-regal-lightishblue bg-opacity-10 border-r-4 border-regal-light-cyan border-regal-lightishblue  border-opacity-20">Supply Room</router-link>
        </div>
        <div class="-ml-4 "
         >
        <router-link to="/RequestforSupply" class="flex justify-center ml-9 text-regal-blackgray py-2 mt-2 hover:bg-regal-lightishblue hover:bg-opacity-10 border-r-4  border-regal-light-cyan hover:border-regal-lightishblue hover:border-opacity-20 " active-class=" bg-regal-lightishblue bg-opacity-10 border-r-4 border-regal-light-cyan border-regal-lightishblue  border-opacity-20">Request for Supply</router-link>
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