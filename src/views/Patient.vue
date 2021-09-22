
<template>
<header class="sticky top-0 z-50">

       <Nav />
    </header>
    <div >
         

        <section class="w-full  px-6 py-4  bg-white ">
        <p class="text-lg text-center font-bold m-5">Patients Table</p>
   
        <!-- <div hidden>{{parseJwt(this.token)}}</div>
       
        <div hidden>{{getUser(this.uid)}}</div> 
        -->
            <div class="m-5 w-5/6 mx-auto flex sm:flex-row flex-col justify-between ">



            
            <div class="flex flex-row mb-1 sm:mb-0">
             
                <div class="block relative">
                    <form>
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input name="q"  placeholder="Search" v-model="text" @keydown="this.getPatients()"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    
                    </form>
                   
                </div>
                    <!-- <button @click="getPosts()">search</button> -->
            </div>
             <div class="flex justify-end"><!--button for registering patient-->
                    <router-link to="/register-patient">Register New Patient</router-link>

                    </div>

            </div>
            <div class=" px-40">
                   <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"  @click="changePage(1)">Next </button>
           

            </div>
               
                
        <!-- </div> -->
        
        <!-- </div> -->
<table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tr class="text-left border-b-2 border-gray-300">
    <th class="px-4 py-3">Name</th>
    <th class="px-4 py-3">Contact</th>
    <th class="px-4 py-3">Gender</th>
  </tr>
  
      
  <tr  class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 " @click="patientDetails(post._id)" v-for="post in filteredList " :key="post._id">
   
    <td class="px-4 py-3">{{post.name}}</td>
    <td class="px-4 py-3">{{post.phone}}</td>
    <td class="px-4 py-3">{{post.gender}}</td>
    <td class="py-3 px-6 text-center"></td>
    
  
      
  </tr> 
  
 
</table>
        
        </section>
    </div>
</template>

<script>
  import axios from "axios";
  import Nav from "../components/Nav.vue"
    export default {
        components:{
             Nav
        },
      
        created(){
          
            this.getPatients()
        },

        computed:{
      filteredList() {
     
      const star = (this.currentPage - 1) * this.prePage
      const end = this.currentPage * this.prePage
    
      const result = this.Patients.slice(star, end)
      return result
    }
        },

        data(){
            return{
                Patients:[],
                prePage: 5,
                currentPage: 1
                
            }

        },

        methods:{
            
            changePage(num) {
      
            this.currentPage = this.currentPage + num
             },

            
             toggle(){
                this.open=!this.open
            },

            patientDetails(id){
                console.log(id)
                this.$router.push({name:'PatientDetails' , params: {id:id}})
            },
            async getPatients(){
               //console.log(this.text)
                const response=await axios.get('patients' , 
                {
                params:{
                    q:this.text
                },
               
                // headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}
             
                }
               
                )
                    console.log(response.data['result']);
                         
                    this.Patients = response.data['result'];
                    console.log(this.Patients)
                

            },
        }
    }
</script>

<style lang="scss" scoped>

</style>