<template>

	<div class="bg-white md:shadow-sm rounded md:my-6 mt-6 pt-1">

		<div class="flex justify-center items-center ">

			<table class="text-left w-full border-collapse ">
				<thead class=" flex text-gray-400 w-full">
					<tr class="flex w-full mb-4 border-b">
						<th class="p-4 w-1/4 text-gray-500 font-bold uppercase text-sm ">Date</th>
						<th class="p-4 w-1/4 text-gray-500 font-bold uppercase text-sm">Paid</th>
						<th class="p-4 w-1/4 text-gray-500 font-bold uppercase text-sm">Payment</th>

					</tr>
				</thead>
				<tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
					style="height: 15vh;">
					<tr class="flex w-full mb-4 border-b" v-for="payment in Bills.payment" :key="payment">
						<td class="p-4 w-1/4 text-gray-800 font-medium uppercase text-sm">
							{{payment.date.substring(0,10)}}</td>
						<td class="p-4 w-1/4 text-gray-800 font-medium uppercase text-sm"> {{payment.paid}}</td>
						<td class="p-4 w-1/4 text-gray-800 font-medium uppercase text-sm">{{payment.paymentMethod}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			Bills: Object
		}

	}
</script>

<style lang="scss" scoped>

</style>