<template>
    <header class="sticky top-0 z-50">
        <Nav />
    </header>
    <div>
        <section class="w-full  px-6 py-4  bg-white ">
            <p class="text-lg text-center font-bold m-5 border-b border-gray-200">Patient Records</p>
            <div class="m-5 w-5/6 mx-auto flex sm:flex-row flex-col justify-between ">
                <div class="flex flex-row mb-1 sm:mb-0">

                    <div class="block relative">
                        <form>
                            <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
                                <input class="flex-grow outline-none text-gray-600 focus:text-blue-600" name="q"
                                    type="text" placeholder="Search Patient..." v-model="text"
                                    @keydown="this.getPatients()" />
                                <spa>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </spa>
                            </div>
                        </form>

                    </div>

                </div>
                <div class="flex justify-end">
                    <button
                        class="flex items-center bg-indigo-500 text-center hover:bg-transparent  m-2 p-1 border border-indigo-500 text-white font-semibold hover:text-indigo-500 rounded text-sm"
                        @click="modal">
                        <span class="mr-1 mt-1 pl-1"><svg class="w-3 h-4 fill-current text-white  " height="426.66667pt"
                                viewBox="0 0 426.66667 426.66667" width="426.66667pt"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
                                </svg></span>
                        <span class=" mt-1 mr-2"> Register New Patient</span></button>

                </div>
            </div>
            <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tr class="text-center border-b-2 border-gray-300">
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Contact</th>
                    <th class="px-4 py-3">Gender</th>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 " @click="patientDetails(post._id)"
                    v-for="post in filteredList " :key="post._id">

                    <td class="px-4 py-3">{{post.name}}</td>
                    <td class="px-4 py-3">{{post.phone}}</td>
                    <td class="px-4 py-3">{{post.gender}}</td>
                    <td class="py-3 px-6 text-center"></td>
                </tr>
            </table>
            <div class=" px-40">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button"
                    :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"
                    :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
            </div>
        </section>
        <div v-if="openModal">
            <RegisterPatient @closeModal="closeModal" />
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Nav from "../components/Nav.vue"
    import RegisterPatient from "./DoctorsPortal/RegisterPatient.vue";
    export default {
        components: {
            Nav,
            RegisterPatient
        },
        created() {
            this.getPatients()
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
                Patients: [],
                prePage: 10,
                currentPage: 1,
                openModal: false
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
                    name: 'PatientDetails',
                    params: {
                        id: id
                    }
                })
            },

            async getPatients() {
                const response = await axios.get('patients', {
                    params: {
                        q: this.text
                    },
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    }
                })
                this.Patients = response.data['result'];
            },

            modal() {
                this.openModal = true
            },

            closeModal() {
                this.openModal = false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>