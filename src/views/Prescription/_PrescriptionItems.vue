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

    <ul  class="space-y-3  p-3">
        <li v-if="prescriptions.length > 0"  v-for="(items,i) in prescriptions" :key="i" @click="$emit('viewPrescription' ,i)"  :class="{'btnActive': this.index == i, 'btn' : this.index != i } ">
           
            
                <div class="text-sm">
                    {{new Date(items.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}
                
                </div>
                
                <div class=""><span class=" text-sm">Approved By: </span>
                <span class=" text-sm">Dr.{{items.user.name}}</span>
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
    @apply cursor-pointer border text-regal-teal bg-white rounded-md flex justify-between p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ;
}
.btnActive{
    @apply cursor-pointer border text-regal-teal bg-slate-200 rounded-md flex justify-between p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm ;
}

</style>b