<template>
    <div>
         <div class="flex items-center px-8 py-2"> 
            <h2 class="text-regal-teal text-sm font-bold  text-left">Diseases: </h2>
            </div>
       
        <div class="flex items-center justify-between px-12 py-2 text-gray-700  "
            v-for="(disease,index) in this.formData.disease" :key="index">
            <div class="text-regal-teal text-sm font-semibold flex justify-start px-6">
                <span class="mr-5">
                      {{index+1}}.
                </span>
                {{disease}}
            </div>
            <div>
                <button @click="removeDisease(disease)"
                    class="p-0  mt-1 mr-20 flex justify-center items-center  ">
                                      <img src="@/assets/svgs/cross.svg" class="" alt="">


                </button>
            </div>
        </div>
        <div class="p-4">
           
            <div  class="flex-col  flex items-center justify-center font-sans ">
                <div class=" m-4  lg:w-3/4 w-screen xl:w-full md:max-w-2xl px-14">
                    <form @submit.prevent>

                        <div class="mb-4">
                            <div class="flex ">
                                <input
                                    class="border border-regal-teal border-opacity-50 focus:border-regal-blue focus:outline-none rounded  py-1 px-3 mr-2 2xl:w-56 lg:w-32 text-regal-teal text-opacity-50 font-semibold"
                                    placeholder="Add Disease" v-model="item" />

                                <!-- Add button -->
                                <button @click="addDisease(this.$route.params.id)" type="submit"
                                    class="  ml-6 2xl:ml-6 lg:ml-0 flex justify-center items-center ">
                                       <img src="@/assets/svgs/plus.svg" alt="">

                                </button>
                            </div>
                             <small class="text-regal-red mb-2 flex justify-start">{{this.err}}</small>
                        </div>
                        <!--mb-4-->
                        <!-- delete button -->
                        <div>
                        </div>

                        <!-- Completed -->
                        
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
                err:'',
                token: localStorage.getItem('token'),
                formValid: true,
                show: false,
                item: "",
                items: [],
                form: {
                    disease: []
                },
                delete: {
                    disease: ''
                }
            }
        },
        methods: {

            showDisease() {
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
                console.log(this.items)

            },
            async addDisease(id) {
                console.log(id)
                this.formData.disease.forEach(i => {
                     console.log(i.toLowerCase())
                     console.log(this.item)
                    if (i.toLowerCase() === this.item.toLowerCase()){
                        this.err="Disease already exist"
                       this.dup=true
                    
                        console.log(this.err)   
                     
                    }
                    
                 });
               
                // this.form.disease.push(this.item);
                 if (this.item === '') {
                     this.dup=false
                    this.err = "Cannot be empty "
                }
                 else if (this.dup){
                     
                     this.err = "Disease Already exist"
                      this.dup=false
                }
                else if (this.item.length < 3){
                      this.dup=false
                     this.err = "Have to be atleast 3 characters"
                }
                else {
                     this.dup=false
                this.err=''
                this.form.disease.push(this.item);
               
                console.log(this.form)
                await axios.patch('patients/' + id + '/add-disease', this.form, {
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
                    this.item=''
                // this.show = !this.show
                // this.items = []
                }

            },
            async removeDisease(disease) {

                this.delete.disease = disease
                console.log(this.delete)
                await axios.delete('patients/' + this.$route.params.id + '/delete-disease', {
                        data: {
                            disease: this.delete.disease
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
                this.items = []
                this.form = {
                    disease: []
                }
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>