<template>
	<div class="mt-4">

		<div class=" flex justify-between mb-3 ">

			<div class="text-regal-teal text-md font-bold  mt-1">
				<label for="" class=""> Subtotal:</label>
			</div>
			<div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
				{{Bills.total}}TK
			</div>
		</div>
		<div class=" flex justify-between mb-3 ">

			<div class="text-regal-teal text-md font-bold  mt-1">
				<label for="" class=""> Discount:</label>
			</div>
			<div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
				{{Bills.discount+this.discount}}TK
			</div>
		</div>

		<div class=" flex justify-between  mb-3 ">

			<div class="text-regal-teal text-md font-bold  mt-1">
				<label for="" class=""> Adjustment:</label>
			</div>
			<div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
				{{Bills.adjustment-this.discount}}TK
			</div>
		</div>
			<div class=" flex justify-between mb-3 ">

			<div class="text-regal-teal text-md font-bold  mt-1">
				<label for="" class=""> Recieved:</label>
			</div>
			<div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
				{{this.paid}}TK
			</div>
		</div>
		<div class=" flex justify-between  mb-3 ">

			<div class="text-regal-teal text-md font-bold  mt-1">
				<label for="" class=""> Balance(Due):</label>
			</div>
			<div class="text-md rounded ml-2 text-regal-teal mt-1 mr-16 font-bold">
				{{Bills.balance-this.discount}}TK
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			Bills: Object,
			discount: Number,
			paid:Number

		},
	}
</script>

<style lang="scss" scoped>

</style>