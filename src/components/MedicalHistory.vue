
<script>
// import axios from 'axios';
    export default { 
        data(){
            return{
                active: -1
            }
        },

        props: {
            title: {
                type: String,
                default: '',
            },
            items:{
                type:Array,
                default: () => [],   
            },
            removeHistory:{
                type:Function,
            },
        
            

        },
        methods: {
            removeSingleMedicalHistory(item){
                this.$emit( "removeHistory",item, this.title);
                // console.log(item);
               
    },
    showButton(index){
        this.active= index

    }
        }
        
    }
</script>

<template>
    <div class="mt-5">
        <label for="" class="block text-left px-5  text-regal-teal text-sm font-semibold ">
            <slot>History</slot>
        </label>
        <div v-if="items.length > 0"  class="flex flex-wrap mx-4 my-2 " >
            <span v-for="(item,index) in items" :key="item" @mouseover="showButton(index)" @mouseleave="showButton(-1)" class="mx-1 my-4 text-xs inline-flex items-center font-bold px-3 py-2 bg-white border text-regal-teal rounded-full ">
                
                <label  class="">{{item}}</label>
                <span class="pl-2" v-show="active ==index">
                    <button  class="flex justify-center" @click="removeSingleMedicalHistory(item  )">
                        <img src="@/assets/svgs/cross.svg" class="w-4 h-4" alt="delete">
                    </button>
                </span>
            </span>
            <!-- <span v-for="item in items" :key="item" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{item}}</span> -->
        </div>
        <div v-else class="my-5">
            <p class="text-regal-teal text-opacity-60 font-semibold">No history recorded</p>
        </div>
    </div>
</template>

<style scoped>

</style>