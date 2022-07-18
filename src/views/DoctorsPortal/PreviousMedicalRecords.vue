<template>
    <div class=" ml-2">         
        <!-- Profile infomation START  -->
        <div class=" bg-white w-full hover:overflow-hidden  mt-3">
            <div class=" border rounded-t-md">

                <div class="flex justify-between  bg-gradient-to-l from-green-200 to-emerald-100 shadow-sm text-regal-teal text-xl font-semibold p-3 ">
                    <label class="mx-5">Patient</label>
    
                    <button name="edit" @click="openModal($event)" class=""> 
                        <img src="@/assets/svgs/edit.svg" alt="" srcset="" class="pointer-events-none w-6 h-6 " >                
                    </button> 
                </div>
            </div>
            <!-- {{this.patientInfo}} -->
            <!-- <hr class="border-b mb-1"/> -->
            <div class="border border-t-0 rounded-b-md mb-2 shadow-md">

                <div v-for="(val,k) in patientInfoCardLabels" :key="k" class="grid grid-cols-3 px-8 py-2.5 ">
                    <div class=" text-regal-teal text-sm font-semibold text-left">
                        {{val}}
                    </div>
                    <div class="grid col-span-2 place-items-start text-regal-teal text-base font-medium">
                        : {{ k === 'dob' ? calculateAge(patientInfo[k]) : patientInfo[k] || `${val} not recorded`}}
                    </div>
                </div>
                
            </div>
            
        </div>
        <!--  Profile infomation END -->

        <div class="bg-white w-full hover:overflow-hidden mt-1">
            <div class=" border rounded-t-md">

                <div class=" bg-gradient-to-l from-green-200 to-emerald-100 shadow-sm text-regal-teal text-xl font-semibold p-3 flex justify-between">
                    <label class="mx-5">Medical History</label>
                   
                    <button name="addHst" @click="openModal($event)">
                        <img src="@/assets/svgs/plus.svg" class="pointer-events-none">                
                    </button>
                </div>
               
            </div>

            <div class="border border-t-0 rounded-b-md mb-2 shadow-md">

                <div class="ml-4 ">
    
                    <History :items="patientInfo.allergies" :title="'allergies'" @removeHistory="removeSingleMedicalHistory"  >
                        Allergies
                    </History>
        
                    <History :items="patientInfo.disease" :title="'disease'" @removeHistory="removeSingleMedicalHistory">
                        Diseases
                    </History>
        
                    <History :items="patientInfo.personalHabits" :title="'personalHabits'" @removeHistory="removeSingleMedicalHistory" >
                        Personal Habits
                    </History>
                </div>
            </div>


        </div>

        <!-- Edit Patient -->
        <EditPatientInfo v-if="isEditPatientActive" :patient="patientInfo" @close="closeModal"/>
        
        <!-- Add Medical History -->
        <AddMedicalHistory v-if="isAddHistoryActive" :patient="patientInfo" @close="closeModal" @onUpdate="(val) => patientInfo = val"/>
        
    </div>
</template>

<script>
    import axios from "axios";
    import swal from "sweetalert";
 
   
    import History from "../../components/MedicalHistory.vue";
    import EditPatientInfo from "./_EditPatientInfo.vue";
    import AddMedicalHistory from "./_AddMedicalHistory.vue"
   
    export default {
        components: {
         
            History,
            EditPatientInfo,
            AddMedicalHistory
        },
        props: {
            patient: {
                type:Object
            },
        },
      
        watch:{
            patient: function(val){
                this.getPat(val);
            },
           
        },

        // mounted(){
        //     this.getPat(this.patient); 
        // },
        data() {
            return {
        
                token: localStorage.getItem('token'),
                isEditPatientActive: false,
                isAddHistoryActive: false,
               
                patientInfo: {
                    name: "",
                    gender: "",
                    dob: "",
                    phone:"",
                    nid: "",
                    address:"",
                    occupation:"",
                    allergies: [],
                    disease:[],
                    personalHabits: [], 

                },
                patientInfoCardLabels:{
                    name: "Name",
                    gender: "Gender",
                    dob: "Age",
                    phone:"Phone",
                    nid: "NID",
                    occupation:"Occupation",
                    address:"Address"
                },
                history:{
                    allergies:[],
                    disease:[],
                    personalHabits:[]
                },
                label:"remove"
          


            }
        },
        
        methods: {
            getPat(i){
               
                Object.assign(this.patientInfo, i);
              
            },
            calculateAge(birthYear){
                let ageDifMs = Date.now() - new Date(birthYear).getTime();
                const ageDate = new Date(ageDifMs);
                return Math.abs(ageDate.getUTCFullYear() - 1970) + ' y';
            },
            openModal(e) {
                if(e.target.name === 'edit')
                    this.isEditPatientActive = true;
                else if(e.target.name === 'addHst')
                    this.isAddHistoryActive = true;
            },

            closeModal() {
                this.isEditPatientActive = false;
                this.isAddHistoryActive = false;
            },
            
            async removeSingleMedicalHistory(item, title) {
                //   this.removeItem(item,title)
                  
                //   console.log(item, title);

                
                  this.history[title].push(item);
                
                  try {
                    const isConfirmed = await swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        buttons: true,
                         dangerMode: true,
                    });
                    // console.log(isConfirmed); 
                    if (isConfirmed) {
                        swal(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const response = await axios.put(import.meta.env.VITE_LOCAL+'/patients/' + this.$route.params.id, {
                            history: this.history,
                            label: this.label
                            
                        },{
                        headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                }});
                        Object.assign(this.patientInfo, response.data.data);
                        swal({
                            title: "Removed ",
                            text: "Saved!",
                            icon: "success",
                            timer: 1000,
                            buttons: false
                        });  
                    }

                    
                  } catch (error) {
                       swal({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    // timer: 1000,
                    buttons: true,
                })
                  }

              },
            //   removeItem(item, title){
            //         switch (title) {
            //           case  "allergies":
            //               this.history.allergies.push(item);
            //             //   console.log(this.history.allergies);
            //               break;
            //             case "disease":
            //                 this.history.disease.push(item);
            //                 // console.log(this.history.disease);
            //                 break;
            //             case "personalHabits":
            //                 this.history.personalHabits.push(item);
            //                 // console.log(this.history.personalHabits);
            //                 break;
            //           default:
            //               break;
            //       }

            //   }
              
              
                 

        }
    }
</script>

<style scoped>
.btn{
    @apply transition ease-in-out delay-150  ;
}
.btn:hover{
    @apply  translate-y-1 scale-110;
}

</style>