
<script>
    export default {
        props: {
            label:{
                type: String,
                default: "History"
            },
            items:{
                type:Array,
                default: () => [],   
            },

        },        
        }
</script>

<template>
    <div>
        <label for="" class="flex justify-start mx-5  text-regal-teal font-bold">{{label}}</label>
        <div v-if="items.length > 0"  class="flex flex-wrap mx-4 my-4">
            <div v-for="item in items" :key="item" class="mx-1 my-1 text-xs inline-flex items-center font-bold px-3 py-1 bg-white border text-regal-teal rounded-md ">
                <label>{{item}}</label>
                <div class="pl-5">
                    <button class="py-1">
                        <img src="@/assets/svgs/cross.svg" alt="">
                    </button>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="text-regal-teal text-opacity-60 font-semibold ">No history recorded</p>
        </div>
    </div>
</template>

<style scoped>

</style>