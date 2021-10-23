<template>

	<div class="bg-white rounded md:my-6 mt-6 pt-1">

		<div class="flex justify-center items-center ">

			<table class="text-left w-full border-collapse ">
				<thead class=" flex text-gray-400 w-full">
					<tr class="flex w-full mb-4 border-b">
						<th class="p-4 w-1/3 text-regal-teal font-bold uppercase text-sm ">Date</th>
						<th class="p-4 w-1/3 text-regal-teal font-bold uppercase text-sm">Paid</th>
						<th class="p-4 w-1/3 text-regal-teal font-bold uppercase text-sm">Payment</th>
					</tr>
				</thead>
				<tbody class="bg-grey-light flex flex-col items-center justify-between">
					<tr class="flex w-full mb-4 border-b" v-for="payment in Bills.payment" :key="payment">
						<td class="p-4 w-1/3 text-regal-teal font-medium  text-sm">
							{{payment.date.substring(0,10)}}</td>
						<td class="p-4 w-1/3 2xl:ml-4 text-regal-teal font-medium text-sm"> {{payment.paid}} TK</td>
						<td class="p-4 w-1/3 2xl:ml-4 text-regal-teal font-medium  text-sm">{{payment.paymentMethod}}</td>
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