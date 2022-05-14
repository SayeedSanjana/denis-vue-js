<template>
    <div>         
        <!-- Profile infomation START  -->
        <div class="border-b-2 bg-gray-50 hover:overflow-hidden ">
            <div class="border-r-4 border-green-600 bg-green-50 text-regal-teal text-xl font-semibold p-3">
                Patient
            </div>
            <!-- {{this.patientInfo}} -->
            <hr class="border-b mb-1"/>

            <div v-for="(val,k) in patientInfoCardLabels" :key="k" class="grid grid-cols-3 px-8 py-2">
                <div class=" text-regal-teal text-sm font-semibold text-left">
                    {{val}}
                </div>
                <div class="grid col-span-2 place-items-start text-regal-teal text-base font-medium">
                    : {{ k === 'dob' ? calculateAge(patientInfo[k]) : patientInfo[k] || `${val} not recorded`}}
                </div>
            </div>
            
            
            <div class="flex flex-row-reverse px-6 py-3">
                <button name="edit" class="btn" @click="openModal($event)"> Edit</button>
            </div>
        </div>
        <!--  Profile infomation END -->

        <div class=" border-b-2 bg-gray-50 hover:overflow-hidden ">

            <div class="border-r-4 border-red-400 bg-red-50 text-regal-teal text-xl font-semibold p-3">
                Medical History
            </div>
            <hr class="border-b mb-1">

            <button name="addHst" @click="openModal($event)" class="btn-underline">
                Add History 
            </button>
            

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
            patient: Object,
        },
      
        watch:{
            patient: function(val){
                console.log(this.getPat(val));
            },
            // patientInfoUpdate(val){
            //     Object.assign(this.patientInfo, val);
            // }
        },
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
                // console.log('before',this.patientInfo);
                console.log(i);
                console.log(this.patientInfo);
                Object.assign(this.patientInfo, i);
                console.log(this.patientInfo);
                // console.log('after',this.patientInfo);
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
                        const response = await axios.put('/patients/' + this.$route.params.id, {
                            history: this.history,
                            label: this.label
                            
                        });
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
    @apply py-1 px-4 bg-regal-teal text-white font-bold rounded border border-regal-teal;
}
.btn:hover{
    @apply underline text-regal-teal bg-transparent;
}

.btn-underline{
    @apply py-2 px-4 text-regal-teal text-lg underline tracking-wider;
}
.btn-underline:hover{
    @apply text-regal-cyan-teal;
}
</style>