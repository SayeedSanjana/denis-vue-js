<template>
    <div>
        <header class="sticky top-0 z-50">

            <Nav />
        </header>

        <div class="flex bg-regal-white">
            <div class="w-2/3">
            <div class="h-screen">
        <section class="w-full  px-6 py-4 " >
            <p class="text-2xl text-left font-bold m-5 px-20" style="color:#005072">Patient Billing</p>
            <div class="m-5 w-5/6 mx-auto flex sm:flex-row flex-col justify-between ">
                <div class="flex flex-row mb-1 sm:mb-0">

                    <div class="block relative">
                        <form class="bg-white ">
                            <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between  rounded-md">
                                <input class="flex-grow outline-none text-regal-teal focus:text-gray-600 w-96" name="q"
                                    type="text" placeholder="Search" v-model="text"
                                    @keydown="this.getPosts()" />
                                <span class="ml-10">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                        </form>

                    </div>

                </div>
               
            </div>
            <table class=" rounded-t-xl m-5 w-5/6 mx-auto bg-regal-blue " >
                <tr class="text-center text-md text-regal-teal h-16" >
                    <th class="px-4 py-3">SL no</th>
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">Contact</th>
                    <th class="px-4 py-3">Patient ID</th>
                    <th class="px-4 py-3">Reg Date</th>
                </tr>
                <tr class="border border-regal-blue border-opacity-25 bg-white  hover:bg-regal-white hover:opacity-80 text-regal-cyan" @click="patientDetails(post._id)" 
                    v-for="(post,index) in filteredList " :key="index">
                     <!-- {{this.dateConversion(post.createdAt.substring(0, 10))}} -->
                    <td class=" py-3 ">{{index+1}}</td>
                    <td class="px-2 py-3">{{post.name}}</td>
                    <td class="px-2 py-3">{{post.phone}}</td>
                    <td class="px-2 py-3 ">P-{{post._id.substring(post._id.length - 7)}}</td>

                    <td class="">{{this.dateConversion(post.createdAt.substring(0, 10))}}</td>
                    
                </tr>
            </table>
            
            <div class="flex px-40 flex-row justify-center">
                <div class="px-40"> 
                <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                    :disabled="currentPage === 1" @click="changePage(-1)"> Previous</button>
                </div>
                <div class="px-40">
                <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                    :disabled="filteredList.length<prePage || filteredList.length==0" @click="changePage(1)">Next </button>
                    </div>
            </div>
        </section>
        
    </div>
            </div><!--main 2/3-->
            
            <div class="w-1/3 mr-16">
             <img src="@/assets/svgs/billing.svg" alt="" class="w-full h-full flex justify-end ">
            </div>
        </div>
      
    </div>
</template>

<script>
    import Nav from "../../components/Nav.vue";
    import axios from 'axios';
    import moment from "moment"
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
                text: "",
                dateCon:""

            }
        },
        methods: {
            
             dateConversion(date) {
             return moment(date).format('LL')

            },
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