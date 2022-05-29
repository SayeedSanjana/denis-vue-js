<script>
import axios from "axios";
import Editor from "../../components/Editor.vue"
import swal from "sweetalert";
// import Grid from "../../components/Grid.vue"



    export default {
        components:{
            Editor,
            // Grid,
       
     
        },
        data(){
            return{
                 
                invlist:[],
                inv:{
                    inv_name:'',
                    location:'',
                },
                medicineList:[],
                oelist:[], 
                oetext:'',
            
            form: {
                cc: '',
                oe: [],
                medicine:[],
                advice:'', 
                treatmentPlan:'',
                investigation:[],
            },

            heightAuto: false,
            maxlength:255,
            editor: null,
            medtext:'',
            recentlyUsed2:[],
            showSearch:false,
            showSearchInv:false,
            showSearchInvLocation:false,
            showSearchMed:false,
            gridColumns: {
                    name : 'Name',
                    category: 'Category',
                    generic: 'Generic',
                    dosage:'Dosage',
                    frequency: 'Frequency',
                    duration: 'Duration',
                    relationWithMeals: 'Relation with Meals'
                },
            medicineColumn:{
                name: 'Name',
                category: 'Category',
                generic: 'Generic',
                dosage: 'Dosage',

            },
                invColumns:{
                    inv_name: 'Investigation Name',
                    location: 'Location'
                },
               
            medication:{
                name : '',
                category: '',
                generic: '',
                dosage:'',
                frequency: '',
                duration: '',
                relationWithMeals: ''
            },
            
        }
        
    },
    
   
    watch:{
            
        oetext() {

            if (this.oetext.length > 2) {
                this.showSearch = true;

            } else {
                this.showSearch = false;
                this.oelist = [];

            }
        },

        'inv.inv_name'(val) {
            if (val.length > 2) {
                this.showSearchInv = true;
            } else {
                this.showSearchInv = false;
                this.invlist = [];
            }
        },

        "medication.name"(val){
            if (val.length > 2) {
                    this.showSearchMed = true;
            } else {
                    this.showSearchMed = false;
                    this.medicineList = [];
            }
        },
           
      },


    methods:{
        selectedItem(oe){
            this.oetext = oe;
            this.showSearch = false;
            this.oelist = [];
            
            

            },
        selectedItemInv(inv){
            this.inv.inv_name = inv;
            this.showSearchInv = false;
            this.invlist = [];
            
        },
        
    
        addOE(){
                if(this.oetext.length > 0){
                    const oe= this.oetext;
                    this.form.oe.push(oe)
                    this.oetext=''
                }
          
        },

        searchInvName(e){
            try {
                  if(this.timeout) clearTimeout(this.timeout);

                    this.timeout = setTimeout(async () => {
                        if (e.target.value.length > 0) {
                            const response = await axios.get('http://localhost:8000/api/treatment-note', {
                                params: {
                                    q: e.target.value,
                                    limit: 5
                                }
                            });
                            console.log(response.data);
                          
                            let arr = [];
                            for (let i = 0; i < response.data.data.length; i++) {
                                let element = response.data.data[i];
                                element = this.objectMap({
                                    name: ''
                                }, element);
                                arr.push(element);
                            }
                            this.invlist = [...arr];
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
       
        
        searchOE(e){
              try {
                  
                    if(this.timeout) clearTimeout(this.timeout);

                    this.timeout = setTimeout(async () => {
                        if (e.target.value.length > 0) {
                            const response = await axios.get('http://localhost:8000/api/treatment-note', {
                                params: {
                                    q: e.target.value,
                                    limit: 5
                                }
                            });
                          
                            let arr = [];
                            for (let i = 0; i < response.data.data.length; i++) {
                                let element = response.data.data[i];
                                element = this.objectMap({
                                    name: ''
                                }, element);
                                arr.push(element);
                            }
                            this.oelist = [...arr];
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
   
        searchMed(e) {
            try {

                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(async () => {

                    if (e.target.value.length > 0) {
                        
                        const response = await axios.get('http://localhost:8000/api/medicine', {
                            params: {
                                q: e.target.value,
                                limit: 20
                            }
                        });
                        let arr = [];
                        for (let i = 0; i < response.data.data.length; i++) {
                            let element = response.data.data[i];
                            element = this.objectMap({
                                name: '',
                                category: '',
                                generic: '',
                                dosage: '',
                            }, element);

                            arr.push(element);
                        }

                        this.medicineList = [...arr];
                    } 
                }, 1000)

            } catch (error) {
                swal({
                    title: "error",
                    text: error.message,
                    icon: "error",
                    button: true
                });

            }


        },
        

        addInvestigation(){
            if(this.inv.inv_name.length > 0 || this.inv.location.length > 0){
                // const invobj= Object.assign({}, this.inv);
                const invobj= {...this.inv};
                this.form.investigation.push(invobj)
                for(const key in this.inv){
                    this.inv[key]='';
                }
            }
            
        },

        removeOE(index){
            this.form.oe.splice(index,1);  

        },
        removeInvestigation(index){
            this.form.investigation.splice(index,1);  

        },
        addMedication(){
              if(this.medication.category.length>0 ||this.medication.generic.length >0 || this.medication.name.length>0 || this.medication.dosage.length>0 || this.medication.frequency.length>0 || this.medication.duration.length>0 || this.medication.relationWithMeals.length>0){
                
                const medobj = Object.assign({}, this.medication);
                this.form.medicine.push(medobj);
                for(const b in this.medication){
                    this.medication[b]='';
                }
                  
        }
        },

        removeMedication(index){
            this.form.medicine.splice(index,1);  
        },


        insertMedication(i){
           Object.assign(this.medication, i);
           this.medicineList='';
        }
        
       
    
        
    }
}
</script>

<template>
    <div class="mx-3 mt-3 bg-white" > 
        <div class="rounded-t-md w-full hover:overflow-hidden">
            <label for="" class="flex justify-between  bg-green-50 shadow-sm text-regal-teal text-xl font-semibold p-3">Prescription</label>
            <section class="flex justify-between p-8">
                <ul>
                    <li class="font-semibold text-sm text-left">
                        Dr. Muhammad Abdul Hussein
                    </li>
                    <hr>
                    
                    <li class="text-xs text-left">
                        BDS,BCS,MPH,NST Fellow MS (Conservative Dentistry), <br/>
                       PhD (USA), FICD (USA)DIrector (Dental Education) <br/>
                       Directorat General of medical Education
                    </li>
                    <li class="text-xs text-left">
                        <span class="text-xs font-semibold">BMDC No: </span>
                        <span class="text-sm">12345</span>
                    </li>
                    <li class="text-xs text-left">
                        <span class="text-xs font-semibold">Contact: </span>
                        <span class="">01236521458</span>
                    </li>
                    <li class=" text-xs text-left">
                        <span class="text-xs font-semibold">Email: </span>
                        <span class="">dr.xyz@mail.com</span>
                    </li>
                   
                </ul>
                <summary>
                    <p class="font-semibold text-sm">XYZ Hospital</p>
                    <p></p>
                </summary>
            </section>
        </div>

        <section class="">
            <form action="" @submit.prevent="">
            <article class="flex justify-between mx-12">
                <div class="w-1/2 p-3">
                    <label
                        class=" w-1/4 block my-2 border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Chief Complaint</label>
                    <Editor v-model="form.cc" class="py-1"/>


                    <label
                        class="block my-2 w-1/4 text-sm font-bold text-regal-teal bg-regal-examined bg-opacity-30 rounded-md px-3 py-1  capitalize text-left">On Examination</label>
                        <!-- Searchable select on OE-->
                        <div class="w-full py-1">
                           
                           <div class="flex" >
                               <textarea  placeholder="Write here......" type="text" class="resize-none w-11/12 rounded-md hover:border focus:border-regal-teal focus:border-opacity-50 px-3 py-2 my-2 focus:outline-none" @keypress="searchOE" v-model="oetext"></textarea>
                               <div class="w-1/12 ">
                                   <button class="mt-4" @click="addOE">
                                       <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-6 w-6 ">
                                   </button>
                               </div>
                           </div>
                            <ul class="w-1/4 shadow-sm section absolute z-40 bg-regal-white border rounded-md" v-show="showSearch" >
                                <li class=" hover:rounded-md hover:bg-gray-200  text-regal-teal font-sans text-left px-2 p-1 m-1 cursor-pointer" v-for="items in oelist" :key="items" @click="selectedItem(items.name)">

                                   {{items.name}} 
                                </li>
                            </ul>
                            <div class="my-4 " > 
                                <label for="" class=" flex text-left font-semibold text-regal-teal ml-2">On Examination</label>
                                    <hr class="w-1/3 ">
                                <div v-if="form.oe.length > 0" class="my-1">

                                    <ul class="  text-left  py-1 ml-6 " v-for="(item,index) in form.oe" :key="item">
                                       <li class=" text-regal-teal italic list-disc">
                                           <div class="flex justify-between">
                                               {{item}}
                                              <button  @click="removeOE(index)" class="pl-3 w-1/12">
                                              <img src="@/assets/svgs/cross.svg" alt="" srcset="" class="pointer-events-none w-4 h-4 ">
                                              </button>
                                           </div>

                                       </li> 
                                    </ul>

                                </div>
                                <div v-else>
                                    <p class=" flex text-left  my-1 py-1 pl-2 text-gray-400 rounded-t-md">No Examination Added</p>
                                </div>
                            </div>

                            
                        </div>
                       
                       <!-- Searchable select on Investigation -->
                        
                    <label
                        class=" w-1/4 block my-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Investigation</label>
                     <div class="w-full ">
                           
                           <div class=" " >
                                <div class=" relative rounded p-1">

                                 <div class=" absolute tracking-wider pl-2 uppercase text-xs">
                                     <p>
                                         <label for="name" class="bg-white text-gray-400 px-1">Investigation Name</label>
                                     </p>
                                 </div>
                               <textarea type="text" class="resize-none w-full mr-2 border rounded-md px-3 py-2 my-2 focus:outline-none" @keypress="searchInvName" v-model="inv.inv_name"></textarea>
                                </div>
                                 <ul class="w-1/4 shadow-sm section absolute z-40 bg-regal-white border rounded-md ml-1 -mt-4"
                                     v-show="showSearchInv">
                                     <li class=" hover:rounded-md hover:bg-gray-200  text-regal-teal font-sans text-left px-2 p-1 m-1  cursor-pointer"
                                         v-for="items in invlist" :key="items" @click="selectedItemInv(items.name)">

                                         {{items.name}}
                                     </li>
                                 </ul>


                                <div class="flex justify-between w-full">

                                    <div class="relative rounded p-1 flex w-3/4 ">
   
                                        <div class=" absolute tracking-wider pl-2 uppercase text-xs">
                                            <p>
                                                <label for="name" class="bg-white text-gray-400 px-1">Location</label>
                                            </p>
                                        </div>
                                        <input type="text"
                                            class="w-full border rounded-md px-3 py-2 my-2 focus:outline-none"
                                            v-model="inv.location">
                                    </div>
   
                                  <div class="mr-2 ">
                                      <button class="mt-4" @click="addInvestigation">
                                          <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-6 w-6 ">
                                      </button>
                                  </div>
                                </div>


                           </div>
                           
                           <!-- <ul class="w-1/4 shadow-sm section absolute z-40 bg-regal-white border rounded-md" v-show="showSearchInv" >
                                <li class=" hover:rounded-md hover:bg-gray-200  text-regal-teal font-sans text-left px-2 p-1 m-1 cursor-pointer" v-for="items in invlist" :key="items" @click="selectedItemInv(items.name)">

                                   {{items.name}} 
                                </li>
                            </ul> -->
                            <div class="my-4 " > 
                                <label for="" class=" flex text-left font-semibold text-regal-teal ml-2">Investigation</label>
                                    <hr class="w-1/3 ">
                                <div v-if="form.investigation.length > 0" class="my-1">

                                    <ul class=" text-left  py-1 ml-6 " v-for="(item,index) in form.investigation" :key="item">
                                       <li class=" list-disc ">
                                           
                                           <div class="flex justify-between" >
                                               <p class=" text-regal-teal">
   
                                                   {{item.location}} - <span class="italic"> {{item.inv_name}}</span>  
                                               </p>
   
                                               <button  @click="removeInvestigation(index)" class="pl-3 w-1/12">
                                                   <img src="@/assets/svgs/cross.svg" alt="" srcset="" class="pointer-events-none w-4 h-4 ">
                                               </button>

                                           </div>
                                            
                                       </li> 
                                       <!-- <button  @click="removeInvestigation(index)" class="pl-3 w-1/12">
                                       <img src="@/assets/svgs/cross.svg" alt="" srcset="" class="pointer-events-none w-4 h-4 ">
                                       </button> -->
                                        <!-- <p>({{item.location}}) {{item.inv_name}}</p> -->
                                        <!-- <button  @click="removeInvestigation(index)" class="pl-3 w-1/12">
                                            <img src="@/assets/svgs/cross.svg" alt="" srcset="" class="pointer-events-none w-4 h-4 ">
                                       </button> -->
                                    
                                    </ul>

                                </div>
                                <div v-else>
                                    <p class=" flex text-left  my-1 py-1 pl-2 rounded-t-md">No Investigation Added</p>
                                </div>
                            </div>

                            
                        </div>





                </div>
               
            

                <!-- Rx -->
                
                <div class="w-1/2 p-3 border-l border-regal-teal border-opacity-20 mx-auto ">
                    <div>  
                        <label
                            class=" w-1/4 block my-2 mx-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Medication</label>
                            
                        <div class=" text-left mx-auto grid grid-cols-3">
                                <div class=" transition-all duration-500 relative rounded p-1">

                                 <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                     <p>
                                         <label  class="bg-white text-gray-400 px-1">Name</label>
                                     </p>
                                 </div>
                                 <input type="text" v-model="medication.name" @keypress="searchMed"
                                     class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                             </div>
                            <!-- <label for="" class="text-sm px-3 py-0.5  grid col-span-1">Category</label> -->
                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label  class="bg-white text-gray-400 px-1 focus:outline-none focus-within:border-regal-teal">Category</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.category" 
                                    class=" focus:outline-none border py-1 m-2 px-2 rounded-md appearance-none">
                            </div>
               

                           

                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                 
                                        <label  class="bg-white text-gray-400 px-1">Generic Name</label>
                                 
                                </div>
                                <input type="text" v-model="medication.generic" 
                                    class=" focus:outline-none border py-1 m-2 px-2 rounded-md appearance-none">
                            </div> 
                         

                             <div class=" transition-all duration-500 relative rounded p-1">

                                 <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                     <p>
                                         <label  class="bg-white text-gray-400 px-1">Dosage</label>
                                     </p>
                                 </div>
                                 <input type="text" v-model="medication.dosage"
                                     class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                             </div>
                            <!-- <label for="" class="text-sm px-3 py-0.5">Frequency</label> -->
                             <div class=" transition-all duration-500 relative rounded p-1">

                                 <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                     <p>
                                         <label  class="bg-white text-gray-400 px-1">Frequency</label>
                                     </p>
                                 </div>
                                 <input type="text" v-model="medication.frequency"
                                     class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                             </div>
                            <!-- <label for="" class="text-sm px-3 py-0.5">Duration</label> -->
                             <div class=" transition-all duration-500 relative rounded p-1">

                                 <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                     <p>
                                         <label  class="bg-white text-gray-400 px-1">Duration</label>
                                     </p>
                                 </div>
                                 <input type="text" v-model="medication.duration"
                                     class=" focus:outline-none border py-1 m-2 px-2 rounded-md">
                             </div>
                            <!-- <label for="" class="text-sm px-3 py-0.5">Relation with Meals</label> -->
                            
                             <div class=" transition-all duration-500 relative rounded p-1">

                                 <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                     <p>
                                         <label  class="bg-white text-gray-400 px-1">Relation with Meal</label>
                                     </p>
                                 </div>
                                 <input type="text" v-model="medication.relationWithMeals"
                                     
                                     class=" focus:outline-none border py-1 m-2 px-2 rounded-md">
                             </div>
                           <div class="flex justify-end col-span-3">

                                <button class=" bg-regal-teal text-white font-semibold border rounded-md  px-3 py-0.5 mx-2" @click="addMedication">Add</button>
                            </div>
                        </div>
                        
                       

                    </div>
                    <section class="my-4 mx-2">
                        <!-- <table v-if="form.medicine.length >0" class="w-full mx-auto  bg-opacity-80 text-sm">
                            <thead class="bg-regal-teal text-white">
                            <tr class="">
                                <th v-for="item in gridColumns" :key="item" class="p-3 appearance-none first:rounded-tl-md  ">
                                    {{item}}
                                </th>
                                <th class="last:rounded-tr-md">
                                    
                                </th>

                            </tr>
                            </thead>
                            <tbody class="divide-y ">
                                <tr v-for="(data,index) in form.medicine" :key="data" class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row " >
                               
                                    <td class="p-3" v-for="items in data" :key="items">
                                       
                                           {{items}}
                                     
                                    </td>
                                    <td>
                                          <button  @click="removeMedication(index)">
                                          <img src="@/assets/svgs/cross.svg" alt="" srcset="" class="pointer-events-none mr-2">
                                          </button>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table> -->
                        <hr class="mb-3" />
                        <ul v-if="form.medicine.length > 0" class="mx-6">
                            <li v-for="(data,index) in form.medicine" :key="data" class="list-disc ">

                                <div class="flex justify-between">
                                    <div class="text-regal-teal text-opacity-80">
                                        <div class="flex">
                                            <p class="font-semibold ">{{data.category}} <span> {{data.name}}- </span>
                                            </p>

                                            <p class=" font-semibold">{{data.dosage}} {{data.generic}}</p>

                                        </div>
                                      
                                            <p class="font-semibold text-left  ">
                                                <span class="pr-4"> {{data.frequency}} </span>  
                                                <span class="pr-4">{{data.duration}}</span> 
                                                <span class="pr-4">{{data.relationWithMeals}}</span>
                                            </p>  
                                       
                                    </div>
                                    <div class="">
                                        <button @click="removeMedication(index)">
                                            <img src="@/assets/svgs/cross.svg" alt="" srcset="" class="pointer-events-none mr-2">
                                        </button>
                                    </div>
                                </div>

                            </li>
                        </ul>



                         <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Medication Added.</p>
                        <!-- <Grid   :columns="gridColumns" :data="this.medicine"/> -->

                        <div class="my-5" v-show="showSearchMed">
                            <label class="flex content-start py-1 text-regal-teal font-semibold "> Medicine List</label>

                           
                            <table class="w-full mx-auto  bg-opacity-80 text-sm">
                                <thead class="bg-regal-light-blue text-regal-teal">
                                    <tr class="">
                                        <th v-for="item in medicineColumn" :key="item"
                                            class="p-2 appearance-none first:rounded-tl-md  text-left">
                                            {{item}}
                                        </th>
                                        <th class="last:rounded-tr-md">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <tr class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row " v-for="(item,index) in medicineList" :key="index">
                                        <td class="text-left p-2" v-for="data in item" :key="data">
 
                                        <p>
                                         {{data}}
                                        </p> 
                                        </td>
                                        <td class="text-left">

                                            <button  @click="insertMedication(item)" class="bg-gray-50 border">Insert</button>
                                        </td>
                                     </tr>
                                 </tbody>
                            </table>
                        </div>
                    </section>
                    
                    <label
                        class=" w-1/4 block m-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Treatment Plan</label>
                    <Editor v-model="form.treatmentPlan" class="m-2" />

                    <label
                        class=" w-1/4 block m-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Advice</label>
                    <Editor v-model="form.advice" class="m-2" />
            <div class="flex justify-end mr-2 my-2">
                <button class=" px-3 py-1 font-semibold text-regal-teal bg-gray-50">Submit</button>

            </div>
                </div>

            </article>
        
            </form>

        </section>


    </div>
</template>

<style>


.ProseMirror:focus {
    outline: none;
  }

  .section {
  /* max-height: 600px; */
  
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


.row:hover{
    @apply bg-gray-200 font-semibold text-regal-teal;
}
</style>