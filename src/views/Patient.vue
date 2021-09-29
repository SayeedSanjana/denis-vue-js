
<template>
<header class="sticky top-0 z-50">

       <Nav />
    </header>
    <div >
         

        <section class="w-full  px-6 py-4  bg-white ">
        <p class="text-lg text-center font-bold m-5 border-b border-gray-200">Patient's Records</p>
   
        <!-- <div hidden>{{parseJwt(this.token)}}</div>
       
        <div hidden>{{getUser(this.uid)}}</div> 
        -->
            <div class="m-5 w-5/6 mx-auto flex sm:flex-row flex-col justify-between ">



            
            <div class="flex flex-row mb-1 sm:mb-0">
             
                <div class="block relative">
                    <form>
                      <div class="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
      <input class="flex-grow outline-none text-gray-600 focus:text-blue-600" name="q" type="text" placeholder="Search Patient..." v-model="text" @keydown="this.getPatients()" />
      <spa>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </spa>
    </div>

<!--                 
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-4  ">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input name="q"  placeholder="Search" v-model="text" @keydown="this.getPatients()"
                        class="appearance-none  rounded  border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" /> -->
                    
                    </form>
                   
                </div>
                    <!-- <button @click="getPosts()">search</button> -->
            </div>
             <div class="flex justify-end"><!--button for registering patient-->
                    <router-link to="/register-patient" class="button">Register New Patient</router-link>

                    </div>

            </div>
            <!-- <div class=" px-40">
                   <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button" :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
           

            </div> -->
               
                
        <!-- </div> -->
        
        <!-- </div> -->
<table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
  <tr class="text-center border-b-2 border-gray-300">
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
<div class=" px-40">
                   <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button" :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
      <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button" :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
           

            </div>
               
        
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
                prePage: 10,
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
               
               headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}
             
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