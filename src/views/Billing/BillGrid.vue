<script>
// import axios from 'axios';
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

            },
          


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
                    });
                    
                    if(data.length ===0){
                        this.$emit('empty', true);
                    }
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
            <tr class=" appearance-none ">
                <th class="p-3 appearance-none first:rounded-tl-md last:rounded-tr-md " v-for="key in Object.values(columns)" :key="key" @click="sortBy(key)" :class="{ active: sortKey == key }">
                    {{ capitalize(key) }}
                    <span :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead>
        <tbody class="divide-y ">
            <tr class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row"  @click="method(entry._id)" v-for="entry in filteredData" :key="entry._id">
                <td  class="p-3" v-for="key in Object.keys(columns)" :key="key._id">
                    <label class="border rounded-full px-4 py-1" v-if="key === 'isPaid'"  :class="entry[key]=== true? 'text-emerald-700 bg-emerald-100 ': 'text-red-700 bg-red-100'">
                       {{entry[key] ===true ? 'PAID' : 'DUE'}}
                    </label>
                    <div v-else>
                         {{entry[key]}}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No matches found.</p>
   
</template>


<style scoped>
.row:hover{
    @apply bg-gray-200 font-semibold text-regal-teal;
}
</style>