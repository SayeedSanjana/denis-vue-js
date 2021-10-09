<template>
  <div>
    <section class="max-w-full px-6 mx-auto bg-white min-h-screen shadow-sm  ">
      <div class="flex justify-end mr-6 mt-6" v-if="changecomponents">
        <button @click="change()" class="button">Back to Past Prescription List</button>
      </div>
      <!--card-->
      <div v-if="!changecomponents">


        <div class="container flex mx-auto w-full items-center justify-center">
          <div v-if="this.Prescription.length >= 1">
            <ul class=" flex-row  p-4 md:w-full">
              <div v-for="pres in filteredList" :key="pres" @click="patientPrescription(pres._id)">

                <li class="border-gray-400 flex justify-center  items-center flex-row mb-2 shadow-sm">
                  <div
                    class="select-none cursor-pointer bg-regal-light-blue rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm">
                    <div class="flex-1 pl-1 mr-52 ">
                      {{this.dateConversion(pres.createdAt.substring(0, 10))}}
                      <div class="font-medium text-regal-teal text-lg">{{this.dateCon}}</div>

                    </div>
                    <div class="">
                      <span class="text-regal-teal text-lg">Approved By: </span><span
                        class="text-regal-teal text-lg ">Dr.{{pres.user.name}} </span>
                    </div>

                  </div>
                </li>

              </div>
            </ul>

            <div class=" px-40 mt-5">

              <div class="flex flex-row justify-center">
                <div class="px-8">
                   <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                :disabled="currentPage === 1" @click="changePage(-1)"> Previous</button>
                </div>
                <div class="px-8">
                  <button class="bg-regal-blue text-white font-bold py-2 px-4 rounded w-32 mt-4" type="button"
                :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>

                </div>
              </div>
             
              

            </div>
          </div>
          <div v-else class="flex-row w-full">
            <div class=" flex items-center justify-center  ">
              <div class="w-full  ">
                <!-- Title -->

                <!-- Alert Info -->
                <div class="bg-indigo-200 px-6 py-4  my-4 rounded-md text-lg mx-auto flex items-center ">
                  <svg class="h-6 w-6 fill-current text-indigo-400 mr-4" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  <div>
                    <p class="font-bold text-gray-700">No Past Prescription</p>

                  </div>
                </div>
                <!-- End Alert Info -->
              </div>
            </div>
          </div>

        </div>
      </div>
      <!--card-->

      <div v-if="changecomponents">
        <PrescriptionView :changecomponents="changecomponents" :presId="presId" />
      </div>

    </section>
  </div>
</template>

<script>
  import axios from "axios";
  import moment from "moment";
  import PrescriptionView from "../DoctorsPortal/PrescriptionView.vue";
  export default {
    props: {
      Prescription1: Array
    },
    components: {
      PrescriptionView
    },
    created() {
      this.getPosts(this.$route.params.id)
    },

    data() {
      return {
        //token: localStorage.getItem('token'),
        changecomponents: false,
        Prescription: [],
        presId: "",
        prePage: 10,
        currentPage: 1,
        dateCon: "",
        result: []


      }
    },
    computed: {
      filteredList() {

        const star = (this.currentPage - 1) * this.prePage
        const end = this.currentPage * this.prePage
        const result = this.Prescription.slice(star, end)
        console.log(result)
        return result
      }
    },
    methods: {
      dateConversion(date) {
        this.dateCon = moment(date).format('LL')

      },
      changePage(num) {
        this.currentPage = this.currentPage + num

      },
      async getPosts(id) {
        await axios.get('prescriptions/' + id + '/list?page=1&limit=10', {
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          })
          .then((response) => {
            this.Prescription = response.data['result'];
            console.log(this.Prescription)

          })

          .catch((error) => {
            console.log(error)
            this.errorMsg = 'Error retrieving data'
          })
      },
      change() {
        this.changecomponents = !this.changecomponents
      },
      patientPrescription(id) {
        this.changecomponents = !this.changecomponents
        this.presId = id
        console.log(this.id)
        console.log(this.presId)
      },
    }
  }
</script>

<style scoped>
</style>