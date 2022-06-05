<script>

export default {
    props:{
        prescriptions: {
            type: Array
        },
        index: {
            type: Number
        },
    },

    data(){
        return{
           
        }
    },
    methods:{
         
        


    }
   
   
}
</script>
<template>
    
<div>

    <ul  class="space-y-3   p-3">
        <li v-if="prescriptions.length > 0"  v-for="(items,i) in prescriptions" :key="i" @click="$emit('viewPrescription' ,i)"  :class="{'btnActive': this.index == i, 'btn' : this.index != i } ">
           
            
                <div class=" text-regal-teal text-lg">{{new Date(items.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }) }}</div>
                
                <div class="text-right"><span class="text-regal-teal text-lg">Approved By: </span>
                <span
                        class="text-regal-teal text-lg">Dr.{{items.user.name}}</span>
                </div>
           
          

        </li>
        <li v-else class="my-60">
            <div class="text-center text-regal-teal text-4xl">No Prescription Added</div>
        </li>
        
    </ul>

</div>

</template>

<style scoped>
.btn{
    @apply cursor-pointer border bg-white rounded-md flex justify-between p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm focus:bg-red-600;
}
.btnActive{
    @apply cursor-pointer border bg-regal-white rounded-md flex justify-between p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm focus:bg-red-600;
}

</style>b