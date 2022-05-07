
<script>
    export default {
        props: {
            items:{
                type:Array,
                default: () => [],   
            },

        },        
    }
</script>

<template>
    <div class="py-5">
        <label for="" class="block text-left px-5  text-regal-teal font-bold">
            <slot>History</slot>
        </label>
        <div v-if="items.length > 0"  class="flex flex-wrap mx-4 my-4">
            <span v-for="item in items" :key="item" class="mx-1 my-1 text-xs inline-flex items-center font-bold px-3 py-1 bg-white border text-regal-teal rounded-md ">
                <label>{{item}}</label>
                <span class="pl-5">
                    <button  class="py-1">
                        <img src="@/assets/svgs/cross.svg" alt="delete">
                    </button>
                </span>
            </span>
            <!-- <span v-for="item in items" :key="item" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{item}}</span> -->
        </div>
        <div v-else>
            <p class="text-regal-teal text-opacity-60 font-semibold">No history recorded</p>
        </div>
    </div>
</template>

<style scoped>

</style>