<template>
    <div>
        <header class="sticky top-0 z-50">

            <Nav />
        </header>
        <section class="max-w-full px-6 mx-auto bg-white ">
            <div class="m-5 w-5/6 mx-auto flex justify-center sm:flex-row flex-col mt-14">

                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search" v-model="text" @keydown="this.getPosts()" name="q"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>

            <!--card-->
            <div>

                <div class="flex items-center justify-center">
                    <div class="container">
                        <div class="lg:flex justify-center">

                            <div class="bg-white shadow-xl rounded-lg lg:w-1/2">
                                <ul class="divide-y divide-gray-300">
                                    <div v-for="patient in  filteredList" :key="patient"
                                        @click="patientDetails(patient._id)">
                                        <li class="p-4 hover:bg-gray-50 cursor-pointer">
                                            <div class="flex flex-row justify-between">
                                                <div class="text-bold text-indigo-400">
                                                    {{patient.name}}

                                                </div>
                                                <div>
                                                    <span class="text-gray-400">Mobile no:</span> <span
                                                        class="text-gray-600">{{patient.phone}}</span>

                                                </div>
                                            </div>
                                        </li>
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" px-40 mt-10">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                        type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                        type="button" :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
                </div>
            </div>
            <!--card-->
        </section>
    </div>
</template>

<script>
    import Nav from "../../components/Nav.vue";
    import axios from 'axios';
    export default {

        created() {
            this.getPosts();
        },
        components: {
            Nav
        },


        computed: {
            filteredList() {

                const star = (this.currentPage - 1) * this.prePage
                const end = this.currentPage * this.prePage

                const result = this.Patients.slice(star, end)
                return result
            }
        },

        data() {
            return {
                token: localStorage.getItem('token'),
                open: false,
                Patients: [],
                prePage: 10,
                currentPage: 1,
                text: ""

            }
        },
        methods: {
            changePage(num) {

                this.currentPage = this.currentPage + num
            },

            toggle() {
                this.open = !this.open
            },
            patientDetails(id) {
                this.$router.push({
                    name: 'SpecificBilling',
                    params: {
                        id: id
                    }
                })
            },
            async getPosts() {
                await axios.get('patients', {
                            params: {
                                q: this.text
                            },

                            headers: {
                                "Authorization": `Bearer ${localStorage.getItem('token') }`
                            }
                        }
                    )
                    .then((response) => {
                        console.log(response.data['result']);
                        this.Patients = response.data['result'];
                        console.log(this.Patients)
                    })
                    .catch((error) => {
                        console.log(error)
                        this.errorMsg = 'Error retrieving data'
                    })
            },
        }
    }
</script>
<style scoped>
</style>