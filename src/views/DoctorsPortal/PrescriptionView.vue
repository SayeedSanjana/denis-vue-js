<template>
  <div>
    <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  ">
       <div class="mt-12 text-left text-regal-teal font-semibold text-xs mx-7 tracking-widest">
          Prescription History > Details
      </div>
      <div class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto ">
          <!-- Title date and doctor's name starts here -->
          <div class="flex justify-between w-full px-2 mb-8">
            <div class="">
              <div class="font-semibold text-regal-teal px-0 flex items-start">
                Prescription Details
              </div>
              <div class="flex items-start">
                <span class="text-regal-teal font-semibold ">Date:</span><span
                  class="text-regal-teal ml-1 font-normal">{{this.date}}</span>
              </div>
              <div class="flex items-start">
                <span class="text-regal-teal font-semibold">Doctor:</span><span class="text-regal-teal font-normal ml-1">Dr.
                  {{this.user}}</span>
              </div>
            </div>
            <!-- Back to list button starts here -->
            <div class="flex justify-end">     
              <button class="py-2 px-5 h-8 text-white text-center rounded font-semibold  text-xs flex bg-regal-teal" @click="backToList()">Back to List</button>
           </div>
           <!-- Back to list button ends here -->
          </div>
           <!-- Title date and doctor's name starts here -->
          <hr class="border-1 border-opacity-50">
          <!-- Patient Info starts here -->
          <div class="lg:flex px-2 py-2 items-start justify-between">
            <div class="text-left"> <span class="mr-1 font-semibold text-regal-teal">Patient ID: </span><span
                class="text-regal-teal font-normal">P-{{this.id.substring(this.id.length - 7)}}</span></div>
            <div class="text-left"> <span class="mr-1 font-semibold text-regal-teal">Name: </span><span
                class="text-regal-teal font-normal">{{this.name}}</span></div>
            <div class="text-left"><span class="mr-1 font-semibold text-regal-teal">Age: </span><span
                class="text-regal-teal  font-normal">{{this.age}} years</span></div>
            <div class="text-left"> <span class="mr-1 font-semibold text-regal-teal">Gender: </span><span
                class="text-regal-teal  font-normal">{{this.gender}}</span> </div>
          </div>
          <!-- Patient Info ends here -->

          <hr class="border-2 border-opacity-50 ">
          
          <!-- cc starts here -->
          <div class="px-2 mb-6 lg:w-full mt-6">
            <div class="whitespace-normal break-all">
              <div class="font-semibold text-regal-teal mb-4 flex items-start"><span class="">C/C</span></div>
              <div class="flex items-start ">
                <pre class="text-left text-regal-teal whitespace-pre-line break-all  font-sans">{{this.formData.cc}}</pre>
              </div>
            </div>
          </div>
          <!-- cc ends here -->

          <!-- oe starts here -->
          <div class="px-2 mb-6 lg:w-full">
            <div class="whitespace-normal break-all">
              <div class="font-semibold text-regal-teal mb-4  flex items-start"><span class="">O/E</span></div>
              <div class="flex items-start ">
                <pre class="text-left text-regal-teal whitespace-pre-line break-all font-sans">{{this.formData.oe}}</pre>
              </div>
            </div>
          </div>
          <!-- oe ends here -->
          
        <!--treatment plan starts here -->
          <div class="px-2 mb-6 lg:w-full">
            <div class="whitespace-normal break-all">
              <div class="font-semibold text-regal-teal mb-4  flex items-start"><span class="">Treatment Plan</span></div>
              <div class="flex items-start ">
                <pre class="text-left text-regal-teal whitespace-pre-line break-all  font-sans">{{this.formData.treatmentPlan}}</pre>
              </div>
            </div>
          </div>
          <!--treatment plan ends here -->

          <div class="px-2 mb-6 lg:w-full">
            <div class="whitespace-normal break-all">
              <div class="font-semibold text-regal-teal mb-4  flex items-start"><span class="">Investigation</span></div>
              <div class="flex items-start">
                <pre class="text-left text-regal-teal whitespace-pre-line break-all  font-sans">{{this.formData.investigation}}</pre>
              </div>
            </div>
          </div>
          <div>

          <!-- RX svg starts here -->
            <div class="px-2 mt-5 mb-5">
              <img src="@/assets/svgs/prescription.svg" alt="">
            </div>
          <!-- RX svg ends here -->

          <!-- Medicine List starts here -->
            <table class="ml-2 w-full mb-5 bg-regal-blue bg-opacity-30 rounded-t-xl  ">
              <thead class="text-left text-sm text-regal-teal  border-b-2 border-regal-teal border-opacity-30 ">
                <th class="px-4 py-3">Category</th>
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Duration</th>
                <th class="px-4 py-3">Frequency</th>
                <th class="px-4 py-3">Relation with Meals</th>
              </thead>
              <tbody class="text-left">
                <tr class="bg-white  border-b border-regal-cyan border-opacity-50" v-for="item in formData.medicine"
                  :key="item._id">
                  <td class="px-4 py-3 text-regal-teal">{{item.catagory}}</td>
                  <td class="px-4 py-3 text-regal-teal">{{item.name}}</td>
                  <td class="px-4 py-3 text-regal-teal">{{item.duration}}</td>
                  <td class="px-4 py-3 text-regal-teal">{{item.frequency}}</td>
                  <td class="px-4 py-3 text-regal-teal">{{item.relationWithMeals}}</td>
                </tr>
              </tbody>
            </table>
            <!-- Medicine List ends here -->

          </div>
         
         <!-- Advice starts here -->
          <div class="px-2 mb-6 ">
            <div class="whitespace-normal break-all">
              <div class="font-semibold text-regal-teal mb-4  flex items-start"><span class="">Advice</span></div>
              <div class="flex items-start ">
                <pre class="text-left text-regal-teal whitespace-pre-line break-all  font-sans">{{this.formData.advice}}</pre>
              </div>
            </div>
          </div>
          <!-- Advice ends here -->

         <!-- Printing option starts here -->
          <div class="flex justify-center mt-20">
            <div class="flex justify-between px-10 ">
              <button @click="printMedication"
                class=" px-6 py-3 mr-4 bg-regal-light-blue text-center border text-regal-teal font-bold  rounded-md text-xs flex">
                <svg class="w-4 h-4 mr-2 fill-current text-regal-teal" height="457pt" viewBox="-15 0 457 457.14286"
                  width="457pt" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m388.210938 148.9375c-.457032-.367188-1.003907-.644531-1.554688-.914062-.550781-.183594-1.097656-.367188-1.738281-.460938-1.734375-.367188-3.566407-.183594-5.210938.460938-1.1875.453124-2.195312 1.1875-3.019531 2.007812-1.644531 1.648438-2.648438 4.023438-2.648438 6.492188 0 2.378906 1.003907 4.753906 2.648438 6.402343.824219.914063 1.832031 1.550781 3.019531 2.011719 1.097657.457031 2.285157.726562 3.476563.726562.542968 0 1.1875-.089843 1.734375-.183593.640625-.179688 1.1875-.359375 1.738281-.542969.550781-.277344 1.097656-.550781 1.554688-.824219.546874-.367187 1.003906-.734375 1.464843-1.1875 1.640625-1.648437 2.648438-4.023437 2.648438-6.402343 0-2.46875-1.007813-4.753907-2.648438-6.492188-.460937-.457031-.917969-.820312-1.464843-1.09375zm0 0" />
                  <path
                    d="m351.820312 152.960938c-.277343-.550782-.546874-1.011719-.820312-1.554688-.367188-.460938-.730469-.914062-1.191406-1.375-2.558594-2.558594-6.582032-3.378906-9.964844-2.007812-1.097656.453124-2.101562 1.1875-2.925781 2.007812-1.734375 1.738281-2.742188 4.023438-2.742188 6.492188 0 1.191406.273438 2.378906.730469 3.476562.460938 1.09375 1.097656 2.101562 2.011719 2.925781.824219.914063 1.828125 1.550781 2.925781 2.011719 1.097656.457031 2.285156.726562 3.566406.726562 2.375 0 4.753906-1.003906 6.398438-2.738281.914062-.824219 1.558594-1.832031 2.011718-2.925781.457032-1.097656.734376-2.285156.734376-3.476562 0-.640626-.09375-1.1875-.183594-1.828126-.183594-.546874-.367188-1.1875-.550782-1.734374zm0 0" />
                  <path
                    d="m402.820312 104.210938h-60.980468v-95.066407c0-5.050781-4.09375-9.144531-9.144532-9.144531h-238.042968c-5.050782 0-9.144532 4.09375-9.144532 9.144531v95.066407h-60.980468c-13.488282 0-24.4570315 10.96875-24.4570315 24.453124v197.472657c0 13.488281 10.9687495 24.457031 24.4570315 24.457031h60.980468v97.40625c0 5.050781 4.09375 9.144531 9.144532 9.144531h238.042968c5.050782 0 9.144532-4.09375 9.144532-9.144531v-97.40625h60.980468c13.488282 0 24.457032-10.96875 24.457032-24.457031v-197.472657c0-13.484374-10.96875-24.453124-24.457032-24.453124zm-299.027343-85.925782h219.761719v85.925782h-219.761719zm0 420.570313v-174.945313h219.761719v174.945313zm305.199219-112.71875c0 3.402343-2.769532 6.171875-6.171876 6.171875h-60.980468v-68.398438h28.6875c5.046875 0 9.140625-4.09375 9.140625-9.140625 0-5.050781-4.09375-9.144531-9.140625-9.144531h-313.707032c-5.046874 0-9.140624 4.09375-9.140624 9.144531 0 5.046875 4.09375 9.140625 9.140624 9.140625h28.6875v68.398438h-60.980468c-3.402344 0-6.171875-2.769532-6.171875-6.171875v-197.472657c0-3.402343 2.769531-6.167968 6.171875-6.167968h378.292968c3.402344 0 6.171876 2.765625 6.171876 6.167968zm0 0" />
                  <path
                    d="m133.4375 314.277344h110.09375c5.050781 0 9.144531-4.09375 9.144531-9.144532 0-5.046874-4.09375-9.140624-9.144531-9.140624h-110.09375c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532zm0 0" />
                  <path
                    d="m293.910156 342.242188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0" />
                  <path
                    d="m293.910156 388.492188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0" />
                </svg>
                Print Medication And Advice
              </button>
              <button @click="printFullPres"
                class=" px-6 py-3 bg-regal-light-blue text-center border text-regal-teal font-bold  rounded-md text-xs flex">
                <svg class="w-4 h-4 mr-2 fill-current text-regal-teal" height="457pt" viewBox="-15 0 457 457.14286"
                  width="457pt" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m388.210938 148.9375c-.457032-.367188-1.003907-.644531-1.554688-.914062-.550781-.183594-1.097656-.367188-1.738281-.460938-1.734375-.367188-3.566407-.183594-5.210938.460938-1.1875.453124-2.195312 1.1875-3.019531 2.007812-1.644531 1.648438-2.648438 4.023438-2.648438 6.492188 0 2.378906 1.003907 4.753906 2.648438 6.402343.824219.914063 1.832031 1.550781 3.019531 2.011719 1.097657.457031 2.285157.726562 3.476563.726562.542968 0 1.1875-.089843 1.734375-.183593.640625-.179688 1.1875-.359375 1.738281-.542969.550781-.277344 1.097656-.550781 1.554688-.824219.546874-.367187 1.003906-.734375 1.464843-1.1875 1.640625-1.648437 2.648438-4.023437 2.648438-6.402343 0-2.46875-1.007813-4.753907-2.648438-6.492188-.460937-.457031-.917969-.820312-1.464843-1.09375zm0 0" />
                  <path
                    d="m351.820312 152.960938c-.277343-.550782-.546874-1.011719-.820312-1.554688-.367188-.460938-.730469-.914062-1.191406-1.375-2.558594-2.558594-6.582032-3.378906-9.964844-2.007812-1.097656.453124-2.101562 1.1875-2.925781 2.007812-1.734375 1.738281-2.742188 4.023438-2.742188 6.492188 0 1.191406.273438 2.378906.730469 3.476562.460938 1.09375 1.097656 2.101562 2.011719 2.925781.824219.914063 1.828125 1.550781 2.925781 2.011719 1.097656.457031 2.285156.726562 3.566406.726562 2.375 0 4.753906-1.003906 6.398438-2.738281.914062-.824219 1.558594-1.832031 2.011718-2.925781.457032-1.097656.734376-2.285156.734376-3.476562 0-.640626-.09375-1.1875-.183594-1.828126-.183594-.546874-.367188-1.1875-.550782-1.734374zm0 0" />
                  <path
                    d="m402.820312 104.210938h-60.980468v-95.066407c0-5.050781-4.09375-9.144531-9.144532-9.144531h-238.042968c-5.050782 0-9.144532 4.09375-9.144532 9.144531v95.066407h-60.980468c-13.488282 0-24.4570315 10.96875-24.4570315 24.453124v197.472657c0 13.488281 10.9687495 24.457031 24.4570315 24.457031h60.980468v97.40625c0 5.050781 4.09375 9.144531 9.144532 9.144531h238.042968c5.050782 0 9.144532-4.09375 9.144532-9.144531v-97.40625h60.980468c13.488282 0 24.457032-10.96875 24.457032-24.457031v-197.472657c0-13.484374-10.96875-24.453124-24.457032-24.453124zm-299.027343-85.925782h219.761719v85.925782h-219.761719zm0 420.570313v-174.945313h219.761719v174.945313zm305.199219-112.71875c0 3.402343-2.769532 6.171875-6.171876 6.171875h-60.980468v-68.398438h28.6875c5.046875 0 9.140625-4.09375 9.140625-9.140625 0-5.050781-4.09375-9.144531-9.140625-9.144531h-313.707032c-5.046874 0-9.140624 4.09375-9.140624 9.144531 0 5.046875 4.09375 9.140625 9.140624 9.140625h28.6875v68.398438h-60.980468c-3.402344 0-6.171875-2.769532-6.171875-6.171875v-197.472657c0-3.402343 2.769531-6.167968 6.171875-6.167968h378.292968c3.402344 0 6.171876 2.765625 6.171876 6.167968zm0 0" />
                  <path
                    d="m133.4375 314.277344h110.09375c5.050781 0 9.144531-4.09375 9.144531-9.144532 0-5.046874-4.09375-9.140624-9.144531-9.140624h-110.09375c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532zm0 0" />
                  <path
                    d="m293.910156 342.242188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0" />
                  <path
                    d="m293.910156 388.492188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0" />
                </svg>
                Print Full Prescription
              </button>
            </div>
          </div>
          <!-- Printing option ends here -->
        </div>
      </div>

      <!-- fullPrescription component is called -->
      <div v-if="fullPresModal">
        <FullPrescription :formData="formData" :user="user" :name="name" :age="age" :gender="gender" :date="date" :phone="phone"
          @removeFullPres="removeFullPres" />
      </div>
      <!-- medication component is called -->
      <div v-if="medModal">
        <Medication :formData="formData" :user="user" :name="name" :age="age" :gender="gender" :date="date" :phone="phone"
          @removeMedication="removeMedication" />
      </div>

    </section>

  </div>
</template>

<script>
  import axios from "axios";
  import moment from "moment"
  import FullPrescription from "../../components/FullPrescription.vue";
  import Medication from "../../components/Medication.vue";
  export default {
    components: {
      FullPrescription,
      Medication
    },
    props: {
      presId: String
    },

    created() {
      this.getPosts(this.presId);
    },

    data() {
      return {
        id:this.$route.params.id,
        fullPresModal: false,
        medModal: false,
        userName: '',
        uid: '',
        user: '',
        token: localStorage.getItem('token'),
        formData: {},
        name: '',
        dob: '',
        gender: '',
        date: '',
        age: '',
        phone:''
      }
    },
    methods: {
      async getPosts(id) {
        await axios.get('prescriptions/' + id, {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          })
          .then((response) => {
            this.formData = response.data.result
            this.name = this.formData.patient.name
            this.gender = this.formData.patient.gender
            this.user = this.formData.user.name
            this.phone=this.formData.user.phone
            const ageDifMs = Date.now() - new Date(this.formData.patient.dob.substring(0, 10)).getTime();
            const ageDate = new Date(ageDifMs);
            this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
            this.date = this.formData.createdAt.substring(0, 10)
            this.date = moment(this.date).format('LL')
          })
          .catch((error) => {
            console.log(error)
          })
      },
      backToList(){
          this.$emit("backToList")
      },

      printFullPres() {
        this.fullPresModal = true
      },

      printMedication() {
        this.medModal = true
      },

      removeFullPres() {
        this.fullPresModal = false
      },

      removeMedication() {
        this.medModal = false
      },
    }
  }
</script>

<style scoped>
</style>