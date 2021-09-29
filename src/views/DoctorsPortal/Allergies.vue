<template>
    <div>
         <h2 class="text-lg font-semibold text-left text-gray-500 title-font px-8 py-3 ">Allergies</h2>
          <div class="flex items-center justify-between  px-6 py-2 text-gray-700  "
                            v-for="allergy in this.formData.allergies" :key="allergy._id">
                            <div class="text-gray-500 text-sm font-semibold flex justify-start">
                                <span class="mt-1 pr-1">
                                    <svg class="h-3 w-3 fill-current text-gray-700 font-bold" version="1.1" id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                        xml:space="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
                                        C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
                                        z" />
                                                    <path d="M220.875,131.125c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083L315.583,256L205.792,365.792
                                        c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l117.333-117.333
                                        c4.167-4.167,4.167-10.917,0-15.083L220.875,131.125z" />
                                                </g>
                                            </g>
                                        </g>
                                        
                                    </svg>
                                </span>
                                {{allergy}}
                            </div>
                            <div>
                                  <button @click="removeAllergy(allergy)"
                                 class="p-0 w-4 h-4 mt-1 flex justify-center items-center bg-red-100 rounded hover:bg-gray-200 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                      <svg class="w-6 h-6 p-1 inline-block" height="511.992pt" viewBox="0 0 511.992 511.992" width="511.992pt" xmlns="http://www.w3.org/2000/svg"><path d="m415.402344 495.421875-159.40625-159.410156-159.40625 159.410156c-22.097656 22.09375-57.921875 22.09375-80.019532 0-22.09375-22.097656-22.09375-57.921875 0-80.019531l159.410157-159.40625-159.410157-159.40625c-22.09375-22.097656-22.09375-57.921875 0-80.019532 22.097657-22.09375 57.921876-22.09375 80.019532 0l159.40625 159.410157 159.40625-159.410157c22.097656-22.09375 57.921875-22.09375 80.019531 0 22.09375 22.097657 22.09375 57.921876 0 80.019532l-159.410156 159.40625 159.410156 159.40625c22.09375 22.097656 22.09375 57.921875 0 80.019531-22.097656 22.09375-57.921875 22.09375-80.019531 0zm0 0" fill="#e76e54"/></svg>
                                                </button>
                            </div>
                        </div>

                        <div class="p-4">
                              <button class="flex text-gray-400 text-sm" @click="showAllergy">
                                <span class="p-1">
                                    <svg class="h-3 w-3 fill-current text-gray-500 " version="1.1" id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                        xml:space="preserve">
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

                            </button>

                            <div v-show="show" class="flex-col  flex items-center justify-center font-sans ">
                                <div class="  p-3 m-4  lg:w-3/4 w-screen xl:w-full md:max-w-2xl">
                                    <form @submit.prevent>

                                        <div class="mb-4">
                                            <!-- <h1 class="text-white">Todo List</h1> -->
                                            <div class="flex mt-4">

                                                <!-- <h3>{{this.show}}</h3> -->
                                                <input
                                                    class="border border-gray-300 focus:border-gray-400 rounded w-full py-1 px-3 mr-2 text-black"
                                                    placeholder="Add Allergy" v-model="item" />

                                                <!-- Add button -->
                                                <button @click="addItem()" type="submit"
                                                    class="p-0 w-8 h-6 mt-1 flex justify-center items-center bg-indigo-400 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20"
                                                        class="w-4 h-4 inline-block">
                                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div><!--mb-4-->
                                        <!-- delete button -->
                                        <div>
                                            <div class="flex mb-4 justify-between" v-for="(item,index) in this.items"
                                                :key="index">
                                                <div>
                                                <p class=" w-full text-gray-500">
                                                    {{item}}
                                                </p>
                                                </div>
                                                <div>
                                                <button @click="deleteItem(index)"
                                                    class="p-0 w-6 h-7 mt-1 flex justify-center items-center bg-gray-400 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
                                                    <svg width="32" height="32"
                                                        class="w-4 h-4 inline-block fill-current text-white"
                                                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"
                                                        style="transform: rotate(360deg);">
                                                        <path d="M12 12h2v12h-2z" fill="currentColor"></path>
                                                        <path d="M18 12h2v12h-2z" fill="currentColor"></path>
                                                        <path
                                                            d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
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

                        </div><!--p4-->
                      

    </div>
</template>

<script>
import axios from "axios"
    export default {
        
        props:{
            formData:Object
        },
        data(){
            return{
            formValid:true,
             show:false,
             item: "",
             items:[],
             form:{
                 allergies:[]
             },
             delete:{
                 allergy:''
             }
            }
        },
        methods:{
            deleteAllergy(){

            },
            
            showAllergy() {
                this.show = !this.show;
            },
             addItem() {
                //   this.formData.allergies.push(this.item),
                if(this.item===""){
                   this.formValid=false
                }else{
                
                this.items.push(this.item)
                this.item = ""
                }
            },
             deleteItem(i) {
                // this.formData.allergies.splice(i,1)
                this.items.splice(i, 1)

            },
             addAllergy(id) {
                console.log(id)
                for (var i of this.items) {
                    this.form.allergies.push(i);
                }
                axios.patch('patients/' + id + '/add-allergy', this.form)
                    .then((response) => {
                        //this.$router.push({name: 'Patient'});
                        console.log(response);
                      this.$emit("myEvent", this.$route.params.id)


                    })


                    .catch((error) => {
                        console.log(error)

                    })
                this.show = !this.show
                this.items = []

            },
             async removeAllergy(allergy){
                
            this.delete.allergy=allergy
            console.log(this.delete)
            //console.log(id)
               await axios.delete('patients/' + this.$route.params.id+ '/delete-allergy',{ data: { allergy: this.delete.allergy } })
               .then((response) => {
                        //this.$router.push({name: 'Patient'});
                    console.log(response);
                    this.$emit("myEvent", this.$route.params.id)


                    })


                    .catch((error) => {
                        console.log(error)

                    })
                     this.form={
                            allergies:[]
                        }
                          this.items=[]
               

            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>