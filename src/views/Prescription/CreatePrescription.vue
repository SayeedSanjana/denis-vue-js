<script>
import Editor from "../../components/Editor.vue"

    export default {
        components:{
            Editor
     
        },
        data(){
            return{
            cc:'',
            oe:["Jack","John","Jill","Joe","Jane","Doe","Chen"],
            oelist:[], 
            text:'', 
            investigation:'',
            advice:'', 
            heightAuto: false,
            maxlength:255,
            editor: null,
            recentlyUsed:[],
            showSearch:false,
            


        }
        
    },
      mounted() {
          this.getAllOE()
               
      },


    methods:{
        selectedItem(oe){
            this.text =oe;
        },
        getAllOE(){
            this.oelist= [...this.oe]
        },
       search(term){		
           
			if (term.length>0) {
				this.oelist = this.oelist.filter((i) => {
					return  i.toLowerCase().includes(term.toLowerCase())
				})	

			} 
            else{
                this.oelist = [...this.oe];
            }
            // console.log(term);
		},
        addOE(){
            if(this.text.length>0){
                this.recentlyUsed.push(this.text)
                this.text=''
            }
        },
        removeOE(index){
            this.recentlyUsed.splice(index,1);  

        },
        showSearchOE(){

            if(this.text.length> -1){

                this.showSearch = true
            }
        },



    //     autoResize(event) {
    //   event.target.style.height = "auto";
    //   event.target.style.height = `${event.target.scrollHeight}px`;
    // },
       
       
        // change(){
        //     console.log(this.$refs.cc);
        // },
    
        
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

        <section class="bg-blue-100">
            <article class="flex w-full justify-between">
                <div class="w-2/5 p-2 bg-white">
                    <label
                        class="block my-2 text-md font-medium text-regal-teal capitalize dark:text-white text-left">C/C</label>
                    <Editor v-model="cc" />

                    <label
                        class="block my-2  text-md font-medium text-regal-teal capitalize dark:text-white text-left">O/E</label>
                        <!-- Searchable select -->
                        <div class="w-full ">
                           
                           <div class="flex" >
                               <input placeholder="input here....." @keypress="showSearchOE()" @keydown="this.search(this.text) " type="text" class="w-4/5 rounded-t-md border  px-3 py-1 focus:outline-none" v-model="this.text">
                               <div class="w-1/5 ">
                                   <button class="mt-1" @click="addOE()">
                                       <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-5 w-5 ">
                                   </button>
                               </div>
                           </div>
                            <ul class=" w-4/5  section h-36 " v-show="showSearch" >
                                <li class="border-b border-r border-l hover:bg-gray-200 text-left pl-2" v-for="items in oelist" :key="items" @click="selectedItem(items)">
                                   {{items}} 
                                </li>
                            </ul>
                            <div class="my-4" >
                                <label for="" class="flex text left ml-2">On Examination</label>
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


              
                       
                       
                       
                       <!-- Searchable select -->
                        
                    <!-- <Editor v-model="oe" /> -->
                    <label
                        class="block my-2 text-md font-medium text-regal-teal capitalize dark:text-white text-left">Investigation</label>
                    <Editor v-model="investigation" />
                    <label
                        class="block my-2 text-md font-medium text-regal-teal capitalize dark:text-white text-left">Advice</label>
                    <Editor v-model="advice" />
                </div>
               
            

                <!-- Rx -->
                <div class="w-3/5 p-2">
                    <p class="w-full block bg-gray-300">Chief Complaint</p>
                </div>

            </article>

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

</style>