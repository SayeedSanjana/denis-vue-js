<script>
import axios from "axios";
import Editor from "../../components/Editor.vue"
import swal from "sweetalert";
import MeiliSearch from "meilisearch";
import useValidate from '@vuelidate/core';
import {required} from '@vuelidate/validators';
import PreviousMedicalRecords from "../DoctorsPortal/PreviousMedicalRecords.vue";


    export default {
        components:{
            Editor,
            PreviousMedicalRecords
             
        },

        props: {
            pat: {
                type: Object
            }
        },
        data(){
            return{
                copiedData: null,
                previewPrescriptionActive: false,   
                meiliSearch:null,
               
                invlist:[],
                inv:{
                    inv_name:'',
                    location:'',
                },

                medicineList:[],
                oelist:[], 
                oetext:'',
                tptext:'',
                tplist:[],
                doctor: this.parseJwt(localStorage.getItem('token')).name,
                docEmail: this.parseJwt(localStorage.getItem('token')).email,
                docPhone: this.parseJwt(localStorage.getItem('token')).phone,
                docQualification: this.parseJwt(localStorage.getItem('token')).qualification,
                docBMDC: this.parseJwt(localStorage.getItem('token')).bmdc,
                docTitle: this.parseJwt(localStorage.getItem('token')).title,
               
            form: {
                user: this.parseJwt(localStorage.getItem('token')).sub,
                patient: '',
                cc: '',
                oe: [],
                medicine:[],
                advice:'', 
                treatmentPlan:[],
                investigation:[],
            },
            editor: null,
            showSearch:false,
            showSearchInv:false,
            showSearchtp:false,
            showSearchMed:false,      
            medicineColumn:{
                name: 'Name',
                category: 'Category',
                generic: 'Generic',
                dosage: 'Dosage',
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
            pres:{}         
        }
        
    },

    setup(){
        return{
            v$: useValidate(),
        }
    },
    validations(){
       
     return {
		form:{
			cc: {
				required,
			},
			oe: [{
				required,

			}],
            
            treatmentPlan: [{
                required,
            }],
            investigation: [{
                required,
            }],	
		},

     }

    },
    created() {
            this.$store.dispatch('fetchPatient', this.$route.params.id);
       
            this.copiedData = this.$store.state.copiedPrescription;
 
                
        },
       
   
    watch:{

       

        
        tptext(val){
            if(val.length>0){
                this.showSearchtp=true;
            }else{
                this.showSearchtp=false;
            }
        },
            
        oetext() {
            if (this.oetext.length > 0) {
                this.showSearch = true;

            } else {
                this.showSearch = false;
                this.oelist = [];

            }
        },
        oelist(){
            if(this.oelist.length>0){
                this.showSearch=true;
            }else{
                this.showSearch=false;
            }
        },
        invlist(){
            if(this.invlist.length>0){
                this.showSearchInv=true;
            }else{
                this.showSearchInv=false;
            }
        },
        tplist(){
            if(this.tplist.length>0){
                this.showSearchtp=true;
            }else{
                this.showSearchtp=false;
            }
        },

        'inv.inv_name'(val) {
            if (val.length > 0) {
                this.showSearchInv = true;
            } else {
                this.showSearchInv = false;
                this.invlist = [];
            }
        },

        "medication.name"(val){
            if (val.length > 0) {
                    this.showSearchMed = true;
            } else {
                    this.showSearchMed = false;
                    this.medicineList = [];
            }
        },
           
      },

     
      mounted(){

            // console.log(this.$store.state.copiedPatient);

            if(!(this.$store.state.copiedPatient )){
                 this.$router.push({
                    name: 'PatientDetails'
                   
                })
                return;
            }
            this.form.patient = this.$store.state.copiedPatient._id;
            
           
            


            
           
       
            this.meiliSearch = new MeiliSearch({
                host: 'https://157.245.202.136/',
                apiKey: 'ImBadass',
            });

            if(this.copiedData){
                this.form.cc = this.copiedData.cc;
                this.form.advice = this.copiedData.advice;
                this.form.investigation = this.copiedData.investigation;
                this.form.medicine = this.copiedData.medicine;
                this.form.treatmentPlan = this.copiedData.treatmentPlan;
                this.form.oe = this.copiedData.oe;
            }

      },

      computed:{
          isEnabled(){
            if(this.form.cc.length > 0 || this.form.oe.length > 0 || this.form.medicine.length > 0 || this.form.advice.length > 0 || this.form.treatmentPlan.length > 0 || this.form.investigation.length > 0){
                return true;
            }else{
                return false;
            }
          }
      },


    methods:{

    
        

         openModal(){
            if(this.form.cc.length > 0 || this.form.oe.length > 0 || this.form.medicine.length > 0 || this.form.advice.length > 0 || this.form.treatmentPlan.length > 0 || this.form.investigation.length > 0){

                this.previewPrescriptionActive= true ;
                document.body.style.overflow = 'hidden';
               
            }
        
            
        },

       
        closeModal(){
            this.previewPrescriptionActive=false;
            document.body.style.overflow = 'auto';
        },

         search(keyword) {
             this.client.index(this.index).search(keyword).then(res => {
                 this.data = res.hits;
             });
         },


        selectedItemTp(item){
            this.tptext=item;
            this.showSearchtp=false;
            this.tplist=[];
        },

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

        addtp(){
            if(this.tptext.length>0){
                const tp = this.tptext;
                this.form.treatmentPlan.push(tp);
                this.tptext='';
            

            }

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

                            const response = await   this.meiliSearch.index("treatmentNote").search(e.target.value);
                          
                            let arr = [];
                            for (let i = 0; i < response.hits.length; i++) {
                                let element = response.hits[i];
                                element = this.objectMap({
                                    name: ''
                                }, element);
                                arr.push(element);
                            }
                            this.invlist = [...arr];
                        } 
                    }, 600);

                
            } catch (error) {
                 swal({
					title: "error",
					text: error.message,
					icon: "error",
					button: true
				});
                
            }

        },

        searchtp(e){
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
                            this.tplist = [...arr];
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

                                const response = await   this.meiliSearch.index("dental_diagnosis").search(e.target.value);

                           
                            let arr = [];
                            for (let i = 0; i < response.hits.length; i++) {
                                let element = response.hits[i];
                                element = this.objectMap({
                                    diagnosis: ''
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

                        
                         const response = await   this.meiliSearch.index("medicine").search(e.target.value)
                        
                            
                        let arr = [];
                        for (let i = 0; i < response.hits.length; i++) {
                            let element = response.hits[i];
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

        removeTp(index){
            this.form.treatmentPlan.splice(index,1);
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
        },
        backToPrescriptionList(id){
            this.copiedData = null;
             this.$router.push({
                        name: 'PatientDetails',
                        params: {
                            id
                        }
                    });

                    

        },
     
        
        async createPrescription(id){
            try {
               
                this.v$.$touch();

				if (this.v$.$error) throw new Error("Whoops!! You need to complete the required information!!");
              
               
                const response = await axios.post(import.meta.env.VITE_LOCAL+'prescriptions', this.form,{
                    headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                },
                });
                Object.assign(this.pres, response.data.data);
                
                if(response.data.status === 'success'){
                    
                    swal({
                        title: "Success",
                        text: "Prescription created successfully",
                        icon: "success",
                        timer: 1000,
                        button: false
                    });

                    this.$router.push({
                        name: 'PatientDetails',
                        params: {
                            id
                        }
                    });
                    
                    
                    // this.$emit('backToPrescriptionList');
                    // this.$emit('refreshPrescriptionList', this.pres );
                  

                }
                
            } catch (error) {
                swal({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    button: true
                });
                
            }
        }
    }
}
</script>

<template>
<section class="lg:flex">

    <div class="lg:w-1/5">
    <PreviousMedicalRecords :patient="$store.state.patient.data"/>
    </div>
    
    <div class="lg:w-4/5 mx-3 mt-3 bg-white rounded-sm">
        <form @submit.prevent="createPrescription(this.$route.params.id)">
            <div class="rounded-t-md w-full hover:overflow-hidden">
                <div class="flex justify-between bg-green-50">
                  
                    <label for=""
                        class="flex justify-between   shadow-sm text-regal-teal text-xl font-semibold p-3">Prescription</label>
                    <div class="m-2 ">


                        <button @click="backToPrescriptionList(this.$route.params.id)" class="btn" type="button" >Back</button>
                        <!-- <button type="button" @click="openModal($event)" :class="{'btn' : isEnabled, 'btn-disabled': !isEnabled}" :disabled="!(isEnabled)"  >Preview</button> -->
                        <button type="submit"
                            class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal ">Save</button>
                    </div>
                </div>
                 
                 
                   
                <section class="flex justify-between px-16 py-8">

                    <div>
                        <ul>
                            
                            <li class="font-semibold text-2xl text-left">
                                MT Dental Center
                            </li>


                            <li class="text-sm text-left">
                                <span class="font-semibold"> Address:</span> House No 12 (1st Floor), Road No 14
                                (New)<br />
                                <span> Dhanmondi, Dhaka-1209 </span> <br />
                                <span class="font-semibold"> Contact:</span> 01688-329552, 01817-094331 <br />
                                <span class="font-semibold"> Email:</span> mhkmusa@gmail.com <br />

                            </li>
                            <li class="text-sm text-left">
                                <span class=" font-semibold">Visiting Days : </span>
                                <span class="">Monday – Friday (9 AM- 6 PM)</span>
                            </li>
                            <li class="text-sm text-left">
                                <span class=" font-semibold">Report Checking Hours : </span>
                                <span class=""> 4 PM- 6 PM</span>
                            </li>


                        </ul>

                    </div>

                    <div>

                        <ul>

                            <li class="font-semibold text-xl text-right">
                             {{docTitle}} {{doctor}}
                            </li>
                            

                            <li class="text-sm text-right w-72">
                                <!-- BDS,BCS,MPH,NST Fellow MS (Conservative Dentistry), <br />
                                PhD (USA), FICD (USA)DIrector (Dental Education) <br />
                                Directorat General of medical Education -->
                                {{docQualification}}
                            </li>
                            <li class="text-sm text-right">
                                <span class=" font-semibold">BMDC No: </span>
                                <span class="text-sm">{{docBMDC}}</span>
                            </li>
                            <li class="text-sm text-right">
                                <span class=" font-semibold">Contact: </span>
                                <span class="">{{docPhone}}</span>
                            </li>
                            <li class=" text-sm text-right">
                                <span class=" font-semibold">Email: </span>
                                <span class="">{{docEmail}}</span>
                            </li>

                        </ul>
                    </div>

                </section>
            </div>

                <article class="flex justify-between mx-12">
                    <div class="w-1/2 p-3">

                        <div class="flex justify-between ">

                            <label
                                class=" w-1/4 block my-2 border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Chief
                                Complaint</label>

                            <span v-show="v$.form.cc.$error" class="mt-2">
                                <div v-for="error of v$.form.cc.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>
                        </div>
                        
                        <Editor id="cc" name="cc" v-model="form.cc" @blur="v$.form.cc.$touch()" class="py-1 mr-14 " />

                        <div class="flex justify-between">

                            <label
                                class="block my-2 w-1/4 text-sm font-bold text-regal-teal bg-green-100 bg-opacity-30 rounded-md px-3 py-1  capitalize text-left">On
                                Examination</label>
                            <span v-show="v$.form.oe.$error">
                                <div v-for="error of v$.form.oe.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>



                        </div>

                        <!-- Searchable select on OE-->
                        <div class="w-full py-1">

                            <div class="flex">
                                <textarea placeholder="Write here......" type="text"
                                    class="resize-none w-11/12 rounded-md hover:border focus:border-regal-teal focus:border-opacity-50 px-3 py-2 my-2 focus:outline-none"
                                    @keypress="searchOE" v-model="oetext"></textarea>
                                <div class="w-1/12 ">
                                    <button type="button" class="mt-4" @click="addOE">
                                        <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-6 w-6 ">
                                    </button>
                                </div>
                            </div>
                            <ul class="w-1/4 shadow-sm section absolute z-40 bg-regal-white border rounded-md"
                                v-if="showSearch && oelist.length == 0">
                                <li class=" px-2 p-1 m-2"
                                    v-for="items in 5" :key="items">
                                    <p class=" placeholder-item">items.diagnosis</p>
                                    <!-- <p class=" placeholder-item">items.diagnosis</p>
                                    <p class=" placeholder-item">items.diagnosis</p> -->
                                </li>
                            </ul>
                            <ul class="w-1/4 shadow-sm section h-60 absolute z-40 bg-regal-white border rounded-md" v-else
                                v-show="showSearch">
                                <li class=" hover:rounded-md hover:bg-gray-200  text-regal-teal font-sans text-left px-2 p-1 m-1 cursor-pointer"
                                    v-for="items in oelist" :key="items" @click="selectedItem(items.diagnosis)">
                                    {{items.diagnosis}}
                                </li>
                            </ul>
                            <div class="my-4 ">
                                <!-- <label for="" class=" flex text-left font-semibold text-regal-teal ml-2">On Examination</label> -->
                                <hr class="mb-3" />
                                <div v-if="form.oe.length > 0" class="my-1">

                                    <ul class="  text-left  py-1 ml-6 " v-for="(item,index) in form.oe" :key="item">
                                        <li class=" text-regal-teal italic list-disc">
                                            <div class="flex justify-between">
                                                {{item}}
                                                <button type="button" @click="removeOE(index)" class="pl-3 w-1/12">
                                                    <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                                        class="pointer-events-none w-4 h-4 ">
                                                </button>
                                            </div>

                                        </li>
                                    </ul>

                                </div>

                                <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Examination
                                    Added</p>

                            </div>
                        </div>

                        <!-- Searchable select on Investigation -->
                        <div class="flex justify-between mt-2">

                            <label
                                class=" w-1/4 block my-2  border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Investigation</label>
                            <span v-show="v$.form.investigation.$error">
                                <div v-for="error of v$.form.investigation.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>

                        </div>
                        <div class="w-full ">

                            <div class=" ">
                                <div class=" relative rounded p-1 mr-14">

                                    <div class=" absolute tracking-wider pl-2 uppercase text-xs">
                                        <p>
                                            <label for="name" class="bg-white text-gray-400 px-1">Investigation
                                                Name</label>
                                        </p>
                                    </div>
                                    <textarea type="text"
                                        class="resize-none w-full mr-2 border rounded-md px-3 py-2 my-2 focus:outline-none"
                                        @keypress="searchInvName" v-model="inv.inv_name"></textarea>
                                </div>
                                <ul class="w-1/4 shadow-sm section absolute z-40 bg-regal-white border rounded-md"
                                v-if="showSearchInv && invlist.length == 0">
                                <li class=" px-2 p-1 m-2"
                                    v-for="items in 5" :key="items">
                                    <p class=" placeholder-item">items.diagnosis</p>
                                    <!-- <p class=" placeholder-item">items.diagnosis</p>
                                    <p class=" placeholder-item">items.diagnosis</p> -->
                                </li>
                            </ul>
                                <ul class="w-1/4 shadow-sm section h-48 absolute z-40 bg-regal-white border rounded-md ml-1 -mt-4"
                                 v-else   v-show="showSearchInv">
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

                                    <div class="mr-3 ">
                                        <button type="button" class="mt-4" @click="addInvestigation">
                                            <img src="@/assets/svgs/plus.svg" alt=""
                                                class="pointer-events-none h-6 w-6 ">
                                        </button>
                                    </div>
                                </div>


                            </div>


                            <div class="my-4 ">
                                <hr class="mb-3">
                                <div v-if="form.investigation.length > 0" class="my-1">

                                    <ul class=" text-left  py-1 ml-6 " v-for="(item,index) in form.investigation"
                                        :key="item">
                                        <li class=" list-disc ">

                                            <div class="flex justify-between">
                                                <p class=" text-regal-teal">

                                                    {{item.location}} - <span class="italic"> {{item.inv_name}}</span>
                                                </p>

                                                <button type="button" @click="removeInvestigation(index)"
                                                    class="pl-3 w-1/12">
                                                    <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                                        class="pointer-events-none w-4 h-4 ">
                                                </button>

                                            </div>

                                        </li>


                                    </ul>

                                </div>

                                <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Investigation
                                    Added</p>

                            </div>


                        </div>

                    </div>



                    <!-- Rx -->

                    <div class="w-1/2 p-3 border-l border-regal-teal border-opacity-20 mx-auto ">
                        
                        <label
                            class=" w-1/4 block my-2 mx-2  border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Medication</label>

                        <div class=" text-left mx-auto grid grid-cols-3">
                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label class="bg-white text-gray-400 px-1">Name</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.name" @input="searchMed"
                                    class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                            </div>
                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label
                                            class="bg-white text-gray-400 px-1 focus:outline-none focus-within:border-regal-teal">Category</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.category"
                                    class=" focus:outline-none border py-1 m-2 px-2 rounded-md appearance-none">
                            </div>

                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">

                                    <label class="bg-white text-gray-400 px-1">Generic Name</label>

                                </div>
                                <input type="text" v-model="medication.generic"
                                    class=" focus:outline-none border py-1 m-2 px-2 rounded-md appearance-none">
                            </div>


                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label class="bg-white text-gray-400 px-1">Dosage</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.dosage"
                                    class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                            </div>
                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label class="bg-white text-gray-400 px-1">Frequency</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.frequency"
                                    class="  focus:outline-none border py-1 m-2 px-2 rounded-md">
                            </div>
                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label class="bg-white text-gray-400 px-1">Duration</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.duration"
                                    class=" focus:outline-none border py-1 m-2 px-2 rounded-md">
                            </div>

                            <div class=" transition-all duration-500 relative rounded p-1">

                                <div class=" absolute tracking-wider px-4 uppercase text-xs">
                                    <p>
                                        <label class="bg-white text-gray-400 px-1">Relation with Meal</label>
                                    </p>
                                </div>
                                <input type="text" v-model="medication.relationWithMeals"
                                    class=" focus:outline-none border py-1 m-2 px-2 rounded-md">
                            </div>
                            <div class="flex justify-start col-span-3">

                                <button type="button"
                                    class=" bg-regal-teal text-white font-semibold border rounded-md  px-3 py-0.5 mx-2"
                                    @click="addMedication">Add</button>
                            </div>
                        </div>



                        
                        <section class="my-4 mx-2">

                            <hr class="mb-3" />
                            <ul v-if="form.medicine.length > 0" class="mx-6">
                                <li v-for="(data,index) in form.medicine" :key="data" class="list-disc ">

                                    <div class="flex justify-between">
                                        <div class="text-regal-teal text-opacity-80">
                                            <div class="flex">
                                                <p class=" ">{{data.category}} <span> {{data.name}}- </span>
                                                </p>

                                                <p class=""><span class="italic">{{data.dosage}}</span> {{data.generic}}
                                                </p>

                                            </div>

                                            <p class=" text-left  ">
                                                <span class="pr-4"> {{data.frequency}} </span>
                                                <span class="pr-4">{{data.duration}}</span>
                                                <span class="pr-4">{{data.relationWithMeals}}</span>
                                            </p>

                                        </div>
                                        <div class="">
                                            <button type="button" @click="removeMedication(index)">
                                                <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                                    class="pointer-events-none mr-2">
                                            </button>
                                        </div>
                                    </div>

                                </li>
                            </ul>



                            <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Medication Added.
                            </p>

                            <div class="my-5 " v-show="showSearchMed">
                                <label class="flex content-start py-1 text-regal-teal font-semibold "> Medicine
                                    List</label>

                                <div class="section h-48">
                                <table class="w-full mx-auto  bg-opacity-80 text-sm ">
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

                                        <tr class="odd:bg-gray-50 even:bg-white cursor-pointer text-gray-500 font-semibold row "
                                            v-for="(item,index) in medicineList" :key="index">
                                            <td class="text-left p-2" v-for="data in item" :key="data">

                                                <p>
                                                    {{data}}
                                                </p>
                                            </td>
                                            <td class="text-left">

                                                <button type="button" @click="insertMedication(item)"
                                                    class="bg-gray-50 border">Insert</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </section>
                        <div class="flex justify-between mt-2">

                            <label
                                class=" w-1/4 block m-2  border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Treatment
                                Plan</label>
                            <span v-show="v$.form.treatmentPlan.$error">
                                <div v-for="error of v$.form.treatmentPlan.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>
                        </div>
                        <!-- treatment plan -->

                        <div class="w-full py-1">

                            <div class="flex justify-between">
                                <textarea placeholder="Write here......" type="text"
                                    class="resize-none w-11/12 rounded-md hover:border hover:border-gray-200 focus:border-regal-teal focus:border-opacity-50 px-3 py-2 my-2 focus:outline-none"
                                    @keypress="searchtp" v-model="tptext"></textarea>
                                <div class="w-1/12">
                                    <button type="button" class="mt-4" @click="addtp">
                                        <img src="@/assets/svgs/plus.svg" alt="" class="pointer-events-none h-6 w-6 ">
                                    </button>
                                </div>
                            </div>
                            <ul class="w-1/4 shadow-sm section absolute z-40 bg-regal-white border rounded-md"
                                v-if="showSearchtp && tplist.length == 0">
                                <li class=" px-2 p-1 m-2"
                                    v-for="items in 5" :key="items">
                                    <p class=" placeholder-item">items.diagnosis</p>
                                    <!-- <p class=" placeholder-item">items.diagnosis</p>
                                    <p class=" placeholder-item">items.diagnosis</p> -->
                                </li>
                            </ul>
                            <ul class="w-1/4 shadow-sm section h-44 absolute z-40 bg-regal-white border rounded-md"
                              v-else  v-show="showSearchtp">
                                <li class=" hover:rounded-md hover:bg-gray-200  text-regal-teal font-sans text-left px-2 p-1 m-1 cursor-pointer"
                                    v-for="items in tplist" :key="items" @click="selectedItemTp(items.name)">

                                    {{items.name}}
                                </li>
                            </ul>
                            <div class="my-4 ">
                                <hr class="mb-3 ">
                                <div v-if="form.treatmentPlan.length > 0" class="my-1">

                                    <ul class="  text-left  py-1 ml-6 " v-for="(item,index) in form.treatmentPlan"
                                        :key="item">
                                        <li class=" text-regal-teal italic list-disc">
                                            <div class="flex justify-between">
                                                {{item}}
                                                <button type="button" @click="removeTp(index)" class="pl-3 w-1/12">
                                                    <img src="@/assets/svgs/cross.svg" alt="" srcset=""
                                                        class="pointer-events-none w-4 h-4 ">
                                                </button>
                                            </div>

                                        </li>
                                    </ul>

                                </div>

                                <p v-else class="px-3 py-1 font-semibold text-regal-teal bg-gray-50">No Treatment Plan
                                    Added</p>

                            </div>


                        </div>


                        <label
                            class=" w-1/4 block m-2  border px-3 py-1 bg-green-100 bg-opacity-30 rounded-md font-bold text-sm text-regal-teal capitalize text-left">Advice</label>
                        <Editor id="advice" name="advice" v-model="form.advice" class="m-2 mr-14" />
                        
                    </div>

                </article>
        </form>

    </div>
</section>
</template>

<style scoped>

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

.form-input-error {
@apply appearance-none py-3 px-4 mb-3 block w-full bg-white text-red-500 border border-red-300 border-opacity-50 rounded leading-tight focus:outline-none focus:border-red-500
}
.form-error-text {
@apply  px-2 text-regal-red text-xs;
}

.btn{
    @apply mx-1 px-3 py-1 rounded-md font-semibold text-white bg-regal-teal;
}
  .btn-disabled{
    @apply mx-1 px-3 py-1 rounded-md font-semibold text-white bg-regal-teal cursor-not-allowed bg-opacity-70 ;
}
</style>