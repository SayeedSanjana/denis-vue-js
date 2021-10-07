<template>
    <div>
        <div class="flex items-center px-8 py-2 mt-4"> 
            <h2 class="text-regal-teal text-sm font-bold  text-left">Allergies :</h2>
            </div>
       
        <div class="flex items-center justify-between px-12 py-2 text-gray-700  "
            v-for="(allergy,index) in this.formData.allergies" :key="index">
            <div class="text-regal-teal text-sm font-semibold flex justify-start px-6">
                <span class="mr-5">
                     {{index+1}}.
                </span>
               {{allergy}}
            </div>
            <div>
                <button @click="removeAllergy(allergy)"
                    class="p-0  mt-1 mr-20 flex justify-center items-center  ">
                    <img src="@/assets/svgs/cross.svg" class="" alt="">
                </button>
            </div>
        </div>

        <div class="p-4">
            <!-- <button class="flex text-gray-400 text-sm" @click="showAllergy">
                <span class="p-1">
                    <svg class="h-3 w-3 fill-current text-gray-500 " version="1.1" id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path
                                    d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                            v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z" />
                            </g>
                        </g>

                    </svg>
                </span>
                Add Allergy

            </button> -->

            <div  class="flex-col  flex items-center justify-center font-sans ">
                <div class="  m-4  lg:w-3/4 w-screen xl:w-full md:max-w-2xl px-14">
                    <form @submit.prevent>

                        <div class="mb-4">
                            <div class="flex ">
                                <input
                                    class="border border-regal-teal border-opacity-50 rounded  py-1 px-3 mr-2 2xl:w-56 lg:w-32 text-regal-teal text-opacity-50 font-semibold"
                                    placeholder="Add Allergy " v-model="item" />

                                <!-- Add button -->
                                <button @click="addItem()" type="submit"
                                    class="  ml-6 2xl:ml-6 lg:ml-0 flex justify-center items-center ">
                                    <img src="@/assets/svgs/plus.svg" alt="">
                                </button>
                            </div>
                        </div>
                        <!--mb-4-->
                        <!-- delete button -->
                        <div>
                            <div class="flex mb-4 justify-between" v-for="(item,index) in this.items" :key="index">
                                <div>
                                    <p class=" w-full text-gray-500">
                                        {{item}}
                                    </p>
                                </div>
                                <div>
                                    <button @click="deleteItem(index)"
                                        class="p-0 w-6 h-7 mt-1 flex justify-center items-center bg-gray-400 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                        <svg width="32" height="32" class="w-4 h-4 inline-block fill-current text-white"
                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"
                                            style="transform: rotate(360deg);">
                                            <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                                            <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                                            <path d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
                                                fill="currentColor"></path>
                                            <path d="M12 2h8v2h-8z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Completed -->
                        <div v-show="this.items.length>=1" class="flex justify-center items-center">
                            <button @click="addAllergy(this.$route.params.id)"
                                class="font-bold text-gray-500 hover:text-indigo-500">

                                Confirm


                            </button>
                        </div>


                    </form>
                </div>
            </div>

        </div>
        <!--p4-->


    </div>
</template>

<script>
    import axios from "axios"
    export default {

        props: {
            formData: Object
        },
        data() {
            return {
                token: localStorage.getItem('token'),
                formValid: true,
                show: false,
                item: "",
                items: [],
                form: {
                    allergies: []
                },
                delete: {
                    allergy: ''
                }
            }
        },
        methods: {
            deleteAllergy() {

            },

            showAllergy() {
                this.show = !this.show;
            },
            addItem() {
                if (this.item === "") {
                    this.formValid = false
                } else {

                    this.items.push(this.item)
                    this.item = ""
                }
            },
            deleteItem(i) {
                this.items.splice(i, 1)

            },
            addAllergy(id) {
                console.log(id)
                for (var i of this.items) {
                    this.form.allergies.push(i);
                }
                axios.patch('patients/' + id + '/add-allergy', this.form, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        console.log(response);
                        this.$emit("myEvent", this.$route.params.id)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                this.show = !this.show
                this.items = []

            },
            async removeAllergy(allergy) {

                this.delete.allergy = allergy
                console.log(this.delete)
                //console.log(id)
                await axios.delete('patients/' + this.$route.params.id + '/delete-allergy', {
                        data: {
                            allergy: this.delete.allergy
                        },

                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {

                        console.log(response);
                        this.$emit("myEvent", this.$route.params.id)

                    })
                    .catch((error) => {
                        console.log(error)

                    })
                this.form = {
                    allergies: []
                }
                this.items = []


            }

        }
    }
</script>

<style lang="scss" scoped>

</style>