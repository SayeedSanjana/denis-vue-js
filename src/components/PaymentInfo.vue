<template>
    <div >

         <div class="flex " >
           <div class="py-8 mr-8 ml-auto mt-5  w-full sm:w-2/4 lg:w-1/4">
			<div class=" justify-between mb-3">
				<div class="text-indigo-400 text-md text-right flex font-bold uppercase "><span  class="ml-5 mt-2">Total:</span> <span class="text-lg rounded ml-2 text-gray-400 mt-2 "><span class="text-lg" >TK</span><span class="text-gray-500 pl-2">{{Bills.total}}</span></span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			
            <div class=" justify-between mb-3">
				<div class="text-indigo-400 text-md text-right flex font-bold uppercase "><span  class="ml-5 mt-2">Discount:</span> <span class="text-lg  ml-2 text-gray-400  mt-2 "><span class="text-lg" >TK</span><span class="text-gray-500 pl-2">{{Bills.discount+this.discount}}</span></span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
            <div class=" justify-between mb-3">
				<div class="text-indigo-400 text-md text-right flex font-bold uppercase"><span  class="ml-5 mt-2">Adjustment:</span> <span class="text-lg  ml-2 text-gray-400  mt-2"><span class="text-lg" >TK</span><span class="text-gray-500 pl-2">{{Bills.adjustment-this.discount}}</span></span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			<div class=" justify-between mb-3">
				<div class="text-indigo-400 text-md text-right flex font-bold uppercase "><span  class="ml-5 mt-2">Balance</span><span class="text-sm text-gray-400 mt-2">(due):</span> <span class="text-lg rounded ml-2 text-gray-400 mt-2 "><span class="text-lg" >TK</span><span class="text-gray-500 pl-2">{{Bills.balance-this.discount}}</span></span> </div>
				<div class="text-right w-40">
					<div class="text-gray-800 font-medium" x-html="netTotal"></div>
				</div>
			</div>
			
			
		
			
		</div>

       </div>

    </div>
</template>

<script>
    export default {
		props:{
          Bills:Object,
          discount:Number
        }
        
    }
</script>

<style lang="scss" scoped>

</style>