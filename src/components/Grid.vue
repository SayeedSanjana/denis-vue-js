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
    <table  v-if="filteredData.length" class=" w-full mx-auto  bg-opacity-80 text-sm">
        <thead >
            <tr>
                <th v-for="key in Object.values(columns)" :key="key" @click="sortBy(key)" :class="{ active: sortKey == key }">
                    {{ capitalize(key) }}
                    <span :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead>
        <tbody class="hoverbody">
            <tr @click="method(entry._id)" v-for="entry in filteredData" :key="entry._id">
                <!-- {{entry}} -->
                <td  v-for="key in Object.keys(columns)" :key="key._id">
                    <!-- {{key}} -->
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
    <p v-else>No matches found.</p>
</template>


<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 350px;
}
table tr th,
table tr td {
  border-right: 1px solid #73C6CA;
  border-bottom: 1px solid #73C6CA;
  
  text-align: center;
  padding: 10px;
}
table tr th:first-child,
table tr td:first-child {
    text-align: center;
    border-left: 1px solid #bbb;
}

table tr th {
  background: #73C6CA;
  border-top: 1px solid #73C6CA;
  text-align: center;
}
.hoverbody tr:hover td{
    background: #c5f3f3;
}

table tr td {
  background: #fff;
}
/* top-left border-radius */
table tr:first-child th:first-child {
  border-top-left-radius: 6px;
}

/* top-right border-radius */
table tr:first-child th:last-child {
  border-top-right-radius: 6px;
}

/* bottom-left border-radius */
table tr:last-child td:first-child {
  border-bottom-left-radius: 6px;
}

/* bottom-right border-radius */
table tr:last-child td:last-child {
  border-bottom-right-radius: 6px;
}
</style>