<script>
import Editor from "../../components/Editor.vue"
// import Grid from "../../components/Grid.vue"

    export default {
        components:{
            Editor,
            // Grid,
       
     
        },
        data(){
            return{
            cc: '',
            oe: [],
            oelist:["Jack","John","Jill","Joe","Jane","Doe","Chen"], 
            oetext:'',
            invtext:'', 
         
            invlocation:'',
            investigationlist:[{
                inv_name:'Xray',
                location:"22"
            },
            {
                inv_name:'Extraction',
                location:"22"

            }],
            pastMedicationList:[{
                catagory: 'tablet',
                name : 'napa',
                dosage:'1.5 mg',
                frequency: '2',
                duration: '2 days',
                relationWithMeals: 'after meal'

            },
            {
                catagory: 'tablet',
                name : 'napa extra',
                dosage:'50 mg',
                frequency: '2',
                duration: '3 days',
                relationWithMeals: 'before meal'

            },
            {
                catagory: 'tablet',
                name : 'tenocab',
                dosage:'50 mg',
                frequency: '2',
                duration: '3 days',
                relationWithMeals: 'before meal'

            }
            ],
            investigation:[{
                inv_name: '',
                location: '',
            }],
            advice:'', 
            treatmentPlan:'',
            heightAuto: false,
            maxlength:255,
            editor: null,
            medtext:'',
            recentlyUsed:[],
            recentlyUsedMedication:[],
            recentlyUsed2:[],
            showSearch:false,
            showSearchIn:false,
            showSearchInvLocation:false,
            showSearchMed:false,
            gridColumns: {
                    catagory: 'Category',
                    name : 'Name',
                    dosage:'Dosage',
                    frequency: 'Frequency',
                    duration: 'Duration',
                    relationWithMeals: 'Relation with Meals'
                },
                invColumns:{
                    inv_name: 'Investigation Name',
                    location: 'Location'
                },
               
            medication:{
                catagory: '',
                name : '',
                dosage:'',
                frequency: '',
                duration: '',
                relationWithMeals: ''
            },
            medicine:[],
            
            

            

            


        }
        
    },
      mounted() {
          this.getAllOE();
            // this.getAllInvestigation();
               
      },
      watch:{
            oetext(val){
                if(val.length>0){
                    this.showSearch=true;
                    this.search(val);
              
                }
                else{
                    this.showSearch=false;
                    
                    
                }
 
            },
            'medication.name'(val){
                if(val.length> 0){
                    
                    this.showSearchMed=true;
                    this.searchMedicationName(val);

                }
                else{
                    this.showSearchMed=false;
                    
                    
                }
               

            }
       
      },
      


    methods:{
        selectedItem(oe){
            this.oetext =oe;
        },
        selectedItem2(investigation){
            this.invtext =investigation.inv_name;
            this.invlocation =investigation.location;
        },
        getAllOE(){
            this.oe= [...this.oelist]
        },
       search(term){		
           this.oe = [...this.oelist];
    
			if (term.length>0) {
				this.oe = this.oe.filter((i) => {
					return  i.toLowerCase().includes(term.toLowerCase())
				})	
			} 
            

		},
        searchMedicationName(){
            // console.log("jkjkjk")
            this.medicine = [...this.pastMedicationList]
            if (this.medication.name.length>0) {
                this.medicine = this.medicine.filter((i) => {
                    return  i.name.toLowerCase().includes(this.medication.name.toLowerCase())
                })	
                
            }

        },
        addOE(){
            if(this.oetext.length>0){
                this.recentlyUsed.push(this.oetext)
                this.oetext=''
            }
        },
        
        

        addInvestigation(){
            if(this.invtext.length>0 || this.invlocation.length>0){
                this.recentlyUsed2.push(
                    {
                        inv_name: this.invtext,
                        location: this.invlocation
                    }
                
                )

                this.invtext='',
                this.invlocation=''
                console.log(this.recentlyUsed2);
            }
        },
        removeOE(index){
            this.recentlyUsed.splice(index,1);  

        },
        removeInvestigation(index){
            this.recentlyUsed2.splice(index,1);  

        },
        addMedication(i){
              if(this.medication.catagory.length>0 || this.medication.name.length>0 || this.medication.dosage.length>0 || this.medication.frequency.length>0 || this.medication.duration.length>0 || this.medication.relationWithMeals.length>0){
                this.recentlyUsedMedication.push(i);
                this.medication={
                    catagory: '',
                    name : '',
                    dosage:'',
                    frequency: '',
                    duration: '',
                    relationWithMeals: ''
                } }      
        },

        removeMedication(index){
            this.recentlyUsedMedication.splice(index,1);  
        },


        insertMedication(i){
            this.medication.catagory = i.catagory
            this.medication.name = i.name
            this.medication.dosage = i.dosage
            this.medication.frequency = i.frequency
            this.medication.duration = i.duration
            this.medication.relationWithMeals = i.relationWithMeals

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
            <!-- <form action="" > -->
            <article class="flex justify-between mx-12">
                <div class="w-2/5 p-3">
                    <label
                        class=" w-1/4 block my-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Chief Complaint</label>
                    <Editor v-model="cc" class="py-1"/>

                    <label
                        class="block my-2 w-1/4 text-sm font-bold text-regal-teal bg-regal-examined bg-opacity-30 rounded-md px-3 py-1  capitalize text-left">On Examination</label>
                        <!-- Searchable select on OE-->
                        <div class="w-full py-1">
                           
                           <div class="flex" >
                               <input placeholder="input here....." type="text" class="w-4/5 rounded-t-md border border-regal-teal border-opacity-50 px-3 py-1 focus:outline-none" v-model="oetext">
                               <div class="w-1/5 ">
                                   <button class="mt-1" @click="addOE()">
                                       <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-5 w-5 ">
                                   </button>
                               </div>
                           </div>
                            <ul class=" w-4/5  section  " v-show="showSearch" >
                                <li class="border-b border-r border-l hover:bg-gray-200 text-left pl-2" v-for="items in oe" :key="items" @click="selectedItem(items)">
                                   {{items}} 
                                </li>
                            </ul>
                            <div class="my-4" >
                                <label for="" class=" flex text-left ml-2">On Examination</label>
                                    <hr class="w-1/3 ">
                                <div v-if="recentlyUsed.length > 0" class="my-1 border rounded-t-md">

                                    <div class="border-b flex justify-between text-left  py-1 pl-2 " v-for="(item,index) in recentlyUsed" :key="item">
                                       <p>
                                        {{item}}
                                       </p> 
                                       <button  @click="removeOE(index)">X</button>
                                    </div>

                                </div>
                                <div v-else>
                                    <p class="border flex text-left  my-1 py-1 pl-2 rounded-t-md">No Examination Added</p>
                                </div>
                            </div>

                            
                        </div>
                       
                       <!-- Searchable select on Investigation -->
                        
                    <label
                        class=" w-1/4 block my-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Investigation</label>
                     <div class="w-full ">
                           
                           <div class="flex" >
                               <input placeholder="investigation name here....." type="text" class="w-4/5 mr-2 rounded-t-md border border-regal-teal border-opacity-50 px-3 py-1 focus:outline-none" v-model="invtext">
                               <input placeholder="investigation location....." type="text" class="w-4/5 rounded-t-md border border-regal-teal border-opacity-50 px-3 py-1 focus:outline-none" v-model="invlocation">
                               <div class="w-1/5 ">
                                   <button class="mt-1" @click="addInvestigation()">
                                       <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-5 w-5 ">
                                   </button>
                               </div>
                           </div>
                           
                            <div class="my-4" >
                                <label for="" class=" flex text-left ml-2">Investigation</label>
                                    <hr class="w-1/3 ">
                                <table v-if="recentlyUsed2.length > 0" class="w-full mx-auto  bg-opacity-80 text-sm">
                                 <thead class="bg-regal-teal text-white">
                                     <tr class="">
                                         <th v-for="item in invColumns" :key="item"
                                             class="p-2 appearance-none first:rounded-tl-md  text-left">
                                             {{item}}
                                         </th>
                                         <th class="last:rounded-tr-md">

                                         </th>

                                     </tr>
                                 </thead>
                                 <tbody>

                                     <tr class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row " v-for="(item,index) in recentlyUsed2" :key="item">
                                        <td class="text-left p-2" v-for="data in item" :key="data">
 
                                        <p>
                                         {{data}}
                                        </p> 
                                        </td>
                                        <td class="text-left">

                                            <button  @click="removeInvestigation(index)">X</button>
                                        </td>
                                     </tr>
                                 </tbody>


                                </table>
                                <div v-else>
                                    <p class="border flex text-left  my-1 py-1 pl-2 rounded-t-md">No Investigation Added</p>
                                </div>
                            </div>

                            
                        </div>





                </div>
               
            

                <!-- Rx -->
                <div class="w-3/5 p-3 border-l border-regal-teal mx-auto ">
                    <div>  
                        <label
                            class=" w-1/4 block my-2 mx-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Medication</label>
                            
                        <div class=" text-left mx-auto grid grid-cols-3">
                            <!-- <label for="" class="text-sm px-3 py-0.5  grid col-span-1">Category</label> -->
                            <input type="text" v-model="this.medication.catagory" placeholder="category .." class=" focus:outline-none border py-1 m-2 px-2 rounded-md appearance-none">
                            
                            <!-- <label for="" class="text-sm px-3 py-0.5">Name</label> -->
                            <input type="text" v-model="this.medication.name" placeholder="name ..." class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                            

                            <!-- <label for="" class="text-sm px-3 py-0.5">Dosage</label> -->
                            <input type="text" v-model="this.medication.dosage" placeholder="dosage ..." class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                            <!-- <label for="" class="text-sm px-3 py-0.5">Frequency</label> -->
                            <input type="text" v-model="this.medication.frequency" placeholder="frequency ..." class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                            <!-- <label for="" class="text-sm px-3 py-0.5">Duration</label> -->
                            <input type="text" v-model="this.medication.duration" placeholder="duration ..." class=" focus:outline-none border py-1 m-2 px-2 rounded-md">
                            <!-- <label for="" class="text-sm px-3 py-0.5">Relation with Meals</label> -->
                            <input type="text" v-model="this.medication.relationWithMeals" placeholder="relation with meal ..." class=" focus:outline-none border py-1 m-2 px-2 rounded-md">
                            <div class="flex justify-end col-span-3">

                                <button class=" bg-regal-teal text-white font-semibold border rounded-md  px-3 py-0.5 mx-2" @click="addMedication(this.medication)">Add</button>
                            </div>
                        </div>
                        
                       

                    </div>
                    <section class="my-4 mx-2">
                        <table v-if="recentlyUsedMedication.length >0" class="w-full mx-auto  bg-opacity-80 text-sm">
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
                                <tr v-for="(data,index) in recentlyUsedMedication" :key="data" class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row " >
                               
                                    <td class="p-3" v-for="items in data" :key="items">
                                       <p>

                                           {{items}}
                                       </p>
                                  
                                    </td>
                                    <td>
                                          <button  @click="removeMedication(index)">X</button>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                         <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Medication Added.</p>
                        <!-- <Grid   :columns="gridColumns" :data="this.medicine"/> -->

                        <div class="my-5" v-show="showSearchMed">
                            <label class="flex content-start py-1 text-regal-teal font-semibold ">Past Medicine</label>

                           
                            <table class="w-full mx-auto  bg-opacity-80 text-sm">
                                <thead class="bg-regal-light-blue text-regal-teal">
                                    <tr class="">
                                        <th v-for="item in gridColumns" :key="item"
                                            class="p-2 appearance-none first:rounded-tl-md  text-left">
                                            {{item}}
                                        </th>
                                        <th class="last:rounded-tr-md">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <tr class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row " v-for="(item,index) in medicine" :key="index">
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
                    <Editor v-model="treatmentPlan" class="m-2" />

                    <label
                        class=" w-1/4 block m-2  border px-3 py-1 bg-regal-examined bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Advice</label>
                    <Editor v-model="advice" class="m-2" />
            <div class="flex justify-end mr-2 my-2">
                <button class=" px-3 py-1 font-semibold text-regal-teal bg-gray-50">Submit</button>

            </div>
                </div>

            </article>
        
            <!-- </form> -->

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