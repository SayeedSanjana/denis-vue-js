<script>
import axios from 'axios';
import swal from "sweetalert";
import MeiliSearch from "meilisearch";
import useValidate from '@vuelidate/core';
import {required} from '@vuelidate/validators';
import PreviousMedicalRecords from "../DoctorsPortal/PreviousMedicalRecords.vue";
import ToothSvg from "./_ToothSvg.vue";
    export default {
         components:{
            PreviousMedicalRecords,
            ToothSvg
        
        },
        data(){
            return{
               location:[],
               tp: {
                   patient:{
                          name: '',
                          phone: '',
                   },
                   treatmentPlan:''
               },
               service:[],
               tn: {
                name: '',
                location: '',
               },
               tnList:[],
               search: false,
               errorMessage: '',
               
               form:{
                   prescription: this.$route.params.presId,
                   doctor: this.parseJwt(localStorage.getItem('token')).name,
                   patientName: '',
                   patientContact: '',
                   items: []

               },
               item:{
                   service: '',
                   location: '',
                   date: Date.now(),
               },

              
            

            }
        },
        setup() {
            return {
                v$: useValidate()
            }
        },
        validations() {
            return{
                form:{
                    items: [{
                        required
                    }]
                },
                
               
            }
        },
        async created(){
            this.$store.dispatch('fetchPatient', this.$route.params.id);
            try {
                const res = await axios.get(import.meta.env.VITE_LOCAL+'/tn/' + this.$route.params.presId);
                if(res.data.data){
                    this.service = res.data.data.items;
                }

            }catch ({response}) {
                if(response.status === 404){
                    this.errorMessage = response.data.message;

                    
                }
                // swal({
				// 	title: "error",
				// 	text: error.message,
				// 	icon: "error",
				// 	button: true
				// }); 
            }
            
        },
       async mounted(){
            
             this.meiliSearch = new MeiliSearch({
                host: 'https://app-meilirtexus-dev-001.azurewebsites.net/',
                apiKey: 'ImBadass',
            });
          
        

            if(this.$route.params.data){
               
               return this.objectMap(this.tp, JSON.parse(this.$route.params.data))
            }

            try {
                const response = await axios.get(import.meta.env.VITE_LOCAL+'/prescriptions/' + this.$route.params.presId);
                this.objectMap(this.tp ,response.data.data);

               
            } 
            catch (error) {
                
                 swal({
					title: "error",
					text: error.message,
					icon: "error",
					button: true
				});
                
            }
           
            
        },
        watch:{
            'tn.name'(val){
                if(val.length > 0){
                    
                    this.search = true;
                }
                else{
                    this.tnList = [];
                    this.search =false;
                    
                }

                if(this.tnList.length > 0){
                    this.search =false;
                }
                
        },

        },
        
        methods:{
            selectedTn(item){
                this.tn.name = item;
                this.search = false;
                this.tnList = [];
            },
        
             
          


            searchtn(e){
                try {
                  if(this.timeout) clearTimeout(this.timeout);
                    this.timeout = setTimeout(async () => {
                        if (e.target.value.length > 0) {

                                 const response = await   this.meiliSearch.index("treatmentNote").search(e.target.value);
                          
                          
                            let arr = [];
                            for (let i = 0; i < response.hits.length; i++) {
                                let element = response.hits[i];
                                element = this.objectMap({
                                    name: ''
                                }, element);
                                arr.push(element);
                            }
                            this.tnList= [...arr]
                           
                        } 
                    }, 1000);
                   
                
            } catch (error) {
                   swal({
					title: "error",
					text: error.message,
					icon: "error",
					button: true
				});
                }
            },
          



            async saveService(){

                this.form.patientName = this.tp.patient.name;
                this.form.patientContact = this.tp.patient.phone;
                    
                try {
                    this.v$.$touch();

                    if (this.v$.$error) throw new Error('Whoops!! You need to complete the required information!!');

                    const response = await axios.post(import.meta.env.VITE_LOCAL+'tn/save', this.form)
                     this.service=response.data.data.items;

                    if(response.data.status === 'success'){
                    
                    swal({
                        title: "Success",
                        text: "Prescription created successfully",
                        icon: "success",
                        timer: 1000,
                        button: false
                    });
                    this.form.items = [];
                }
                  
                    
                } catch (error) {
                    
                    swal({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    button: true
                });
                    
                }
            },
            
            addService() {

                 

                // if (this.item.service.length > 0 || this.item.location.length > 0) {
                if (this.tn.name.length > 0 || this.tn.location.length > 0) {
                    this.location.forEach(item => {
                          this.tn.location = this.tn.location + ' ' + item;
                      
                    });
                    const service = {
                        service: this.tn.name,
                        location: this.tn.location,
                        date: Date.now()
                    };
                    this.form.items.push(service);
                    for (const b in this.tn) {
                        this.tn[b] = '';
                    }
                    var all = document.getElementsByClassName('colorFill');
                    const keys = Object.values(all);
                    keys.forEach(i => {
                        i.classList.toggle('colorFill')
                    });

                }
                this.location = [];
            },
            removeService(index){
                this.form.items.splice(index, 1)
            },
            concatenateLocation(value){
                
               this.location=[...value];
               
                // let temp=this.item.location
                // value.forEach(item => {
                //     this.item.location=temp+' '+item;
                // });
               
                // temp=''
             
            
            },
            removeComma(){
                this.item.location = this.item.location.substring(1);
            },
            
            

          
        }
        
    }
</script>

<template>
    <section class="lg:flex">
        <div class="lg:w-1/5">
            <PreviousMedicalRecords :patient="$store.state.patient.data"/>
        </div>
        <div class="lg:w-4/5 mx-3 mt-3 bg-white rounded-sm">
          <div class="flex justify-between bg-green-50">

              <label for=""
                  class="flex justify-between   shadow-sm text-regal-teal text-xl font-semibold p-3">Service</label>
              <div class="m-2 ">


                  <router-link :to="{name:'PatientDetails'}" class="btn mx-1" type="button">Back</router-link>
                 
              </div>
          </div>
          <div class="grid grid-cols-2 my-5 justify-items-start ">
              <div class="flex w-full border-r">
                  <div class="w-1/2">
                      <label class="  block px-3 py-1  font-bold text-sm capitalize text-left">Treatment Plan</label>
                      <ul v-for="item in tp.treatmentPlan" :key="item" class=" text-left text-sm py-1 mx-10 ">
                          <li class=" italic list-disc ">
                              <div class="flex justify-between flex-wrap">
                                  {{item}}
                              </div>

                          </li>
                      </ul>

                  </div>
                  <div class=" w-1/2 text-left">
                      <label class="  block px-3 py-1  font-bold text-sm capitalize text-left">Services Provided</label>
                      <section v-if="service.length>0" class="mx-4 my-2 text-regal-teal space-y-3">

                          <div v-for="data in service" :key="data"
                              class="flex select-none cursor-pointer bg-gray-50 rounded-md  items-center px-4 py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                              <div
                                  class="flex flex-col rounded-full w-6 h-6 bg-gray-300 justify-center items-center mr-4">
                                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                      <path d="M20 6L9 17l-5-5"></path>
                                  </svg>
                              </div>

                              <article class="flex-1 pl-1 mr-16">

                                  <p class="font-medium text-regal-teal text-xs">{{data.service}}
                                      {{data.location ? " - " + data.location : ' N/A'}}</p>
                              </article>

                              <p class="text-regal-teal text-xs">{{new Date(data.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                                }) }}</p>
                          </div>


                      </section>
                      <section v-else class="mx-4 my-2 text-regal-teal space-y-3">
                          <div class="text-center">
                              <div class="text-regal-teal text-sm">{{errorMessage}}</div>
                          </div>
                      </section>



                  </div>
              </div>
              <form @submit.prevent="saveService">
                  <div class="flex flex-1">
                      <div class="xl:w-1/2">

                          <div class=" relative rounded p-1 mx-4">
                              <div class=" absolute tracking-wider pl-2 uppercase text-xs">
                                  <p>
                                      <label for="name" class="bg-white text-gray-400 px-1">Add Services</label>

                                  </p>
                                  
                              </div>
                              <textarea type="text" @keypress="searchtn"
                                  class="resize-none w-full mr-2 border rounded-md px-3 py-2 my-2 focus:outline-none"
                                  v-model="tn.name"></textarea>
                          </div>

                          <ul v-show="tnList.length>0" class="w-80 -mt-4 ml-5 h-96 section  shadow-sm  absolute z-40 bg-regal-white border rounded-md"
                              >
                              <li class=" hover:rounded-md hover:bg-gray-200  text-regal-teal font-sans text-left px-2 p-1 m-1 cursor-pointer"
                                  v-for="items in tnList" :key="items" @click="selectedTn(items.name)">

                                  {{items.name}}
                              </li>
                          </ul>
                          <div v-show="search" class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                              <div class="animate-pulse flex space-x-4">
                                  <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                                  <div class="flex-1 space-y-6 py-1">
                                      <div class="h-2 bg-slate-200 rounded"></div>
                                      <div class="space-y-3">
                                          <div class="grid grid-cols-3 gap-4">
                                              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                          </div>
                                          <div class="h-2 bg-slate-200 rounded"></div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          
                          <div class=" relative rounded p-1 mx-4">
                              <div class=" absolute tracking-wider pl-2 uppercase text-xs">
                                  <p>
                                      <label for="name" class="bg-white text-gray-400 px-1">Location

                                      </label>

                                  </p>
                              </div>
                              <input type="text"
                                  class=" w-full mr-2 border rounded-md px-3 py-2 my-2 focus:outline-none"
                                  @keypress="insertIntoTooth" v-model="tn.location">

                              <div>
                                  <h1 class="py-3"> <span v-if="this.tn.location.length>=1 ">{{this.tn.location}}
                                      </span>
                                      <span class="text-gray-400 mx-1" v-for="(i, index) in this.location" :key="index">
                                          <span> {{i}}</span>
                                          <span v-if="index+1 < this.location.length">, </span>
                                      </span>
                                  </h1>
                              </div>

                          </div>
                          <button type="button" class="btn flex items-start mx-5" @click="addService">Add</button>
                      </div>


                      <!-- svg -->
                      <ToothSvg @concatanate="concatenateLocation" @remove-comma="removeComma" :tooth="location" />
                      <!-- svg -->


                  </div>
                  <!-- <div v-show="v$.form.items.$error">
                      <div v-for="error of v$.form.items.$errors" :key="error.$uid">
                          <small class="form-error-text">
                              {{error.$message}}
                          </small>
                      </div>
                  </div> -->
                  <div v-if="form.items.length> 0" class="border m-4 w-full">
                      <table class="w-full  text-sm">
                          <thead class="bg-regal-light-blue text-regal-teal">
                              <tr>

                                  <th class="p-2 appearance-none first:rounded-tl-md  text-left">Service</th>
                                  <th class="p-2 appearance-none first:rounded-tl-md  text-left">Location</th>
                                  <th class="last:rounded-tr-md"></th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(data,index) in form.items" :key="index"
                                  class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-bold text-sm ">
                                  <td class="text-left  p-2">{{data.service}}</td>
                                  <td class="text-left  p-2">{{data.location}}</td>

                                  <td class="text-right" @click="removeService(index)">
                                      <button type="button">
                                          <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                              class="pointer-events-none mr-2">
                                      </button>
                                  </td>
                              </tr>


                          </tbody>
                      </table>


                  </div>

                  <div v-else class="  p-4 m-4 w-full font-bold text-regal-teal ">
                      <p>No services Added</p>
                  </div>
                  <button type="submit" class="btn ml-4 flex items-start">Submit</button>
              </form>


          </div>


        </div>

    </section>
</template>

<style scoped>
.btn{
    @apply  px-3 py-1 rounded-md font-semibold text-white bg-regal-teal;
}
 .form-error-text {
	@apply  px-4 text-regal-red text-sm;
  }

.section {
  /* max-height: 600px; */
  padding: .5rem;
  overflow-y: auto;
  direction: ltr;
  scrollbar-color: rgb(191, 214, 212) #e4e4e4;
  scrollbar-width: thin;
}
.section::-webkit-scrollbar {
  width: 8px;
}
.section::-webkit-scrollbar-track {
  background-color: rgb(191, 214, 212);
  border-radius: 100px;
}
.section::-webkit-scrollbar-thumb {
  border-radius: 100px;
  /* background-image: linear-gradient(180deg, #d0368a 0%, #708ad4 99%); */
  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
}


</style>