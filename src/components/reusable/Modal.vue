<script>
    export default {
        props:{
            title: {
                type: String,
                default: 'header'
            },
            color: {
                type: String,
                default: 'bg-gray-200'
            },
            textColor: {
                type: String,
                default: 'text-red-800'
            },
        },
        methods: {
            closeModal() {
                this.$emit('closeModal');
            }
        }
    
        
    }
</script>


<template>
   <div
      class="fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">

     
      <div class="absolute h-screen  bg-black opacity-80 inset-0 z-0"></div>
    
      <div class="relative  ">

        <div class="flex flex-col w-full h-yyxl bg-gray-50 ">

          <div class="flex justify-between " :class="color">
            <h3 class="p-2  text-lg font-semibold" :class="textColor">{{title}}</h3>
            <button class="text-gray-600 font-extrabold text-2xl mb-1 mr-4" @click="closeModal()">&#215;</button>
          </div>
                <!--main content-->
                <slot>Modal Content</slot>
                <!--main content-->
        </div>
      </div>
    </div>

</template>


<style scoped>

</style>