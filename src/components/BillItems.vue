<template>
    
        <div  class="bg-white md:shadow-sm rounded md:my-6  pt-1 ">
    
<div class="flex justify-center items-center ">
    
	<table class="text-left w-full border-collapse ">
		<thead class=" flex text-gray-400 w-full">
			<tr class="flex w-full mb-4 border-b">
				<th class="p-4 w-1/4 text-gray-500 font-bold uppercase text-sm ">Date</th>
				<th class="p-4 w-1/4 text-gray-500 font-bold uppercase text-sm">Treatment Plan</th>
				<th class="p-4 w-1/4 text-gray-500 font-bold uppercase text-sm">Cost</th>
			
			</tr>
		</thead>
    <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
		<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style="height: 15vh;">
			<tr class="flex w-full mb-4 border-b"  v-for="item in Bills.items" :key="item" >
				<td class="p-4 w-1/4 text-gray-800 font-medium uppercase text-sm">{{item.date.substring(0,10)}}</td>
				<td class="p-4 w-1/4 text-gray-800 font-medium uppercase text-sm">  {{item.service}}</td>
				<td class="p-4 w-1/4 text-gray-800 font-medium uppercase text-sm">{{item.cost}}</td>
			
			</tr>
	
		
		

		</tbody>
	</table>
  </div>
  </div>


</template>

<script>
    export default {
        props:{
          Bills:Object
        }
    }
</script>

<style lang="scss" scoped>

</style>