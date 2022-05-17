<script>
    export default {
        props: {
            //
            data: {
                type: Array,
                default: () => []
            },
            columns: {
                type: Object,
                default: () => ({})
            },
            filterKey: {
                type: String,
                default: 'Not Mentioned'
            },
            method: {
                type: Function,
                default: () => false

            }


        },
        data() {
            return {
                //
                sortKey: '',
                sortOrders: Object.keys(this.columns).reduce((o, key) => ((o[key] = 1), o), {}),
            }
        },
        computed: {
            //
            filteredData() {
                const sortKey = this.sortKey
                const filterKey = this.filterKey && this.filterKey.toLowerCase();
                const order = this.sortOrders[sortKey] || 1
                let data = this.data
                if (filterKey) {
                    data = data.filter((row) => {
                        return Object.keys(row).some((key) => {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }
                if (sortKey) {
                    data = data.slice().sort((a, b) => {
                        a = a[sortKey]
                        b = b[sortKey]
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }
                return data
            }
        },
        methods: {
            //
            sortBy(key) {
                    this.sortKey = key
                    this.sortOrders[key] = this.sortOrders[key] * -1
            },
            capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            },



        }
    }
</script>



<template>
    <table  v-if="filteredData.length" class=" w-full mx-auto  bg-opacity-80 text-sm ">
        <thead class="bg-regal-teal text-white">
            <tr class=" appearance-none">
                <th class="p-3 appearance-none first:rounded-tl-md last:rounded-tr-md " v-for="key in Object.values(columns)" :key="key" @click="sortBy(key)" :class="{ active: sortKey == key }">
                    {{ capitalize(key) }}
                    <span :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead>
        <tbody class="divide-y ">
            <tr class="odd:bg-gray-50 even:bg-white "  @click="method(entry._id)" v-for="entry in filteredData" :key="entry._id">
                <td  class="p-3" v-for="key in Object.keys(columns)" :key="key._id">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else>No matches found.</p>
   
</template>


<style scoped>

</style>