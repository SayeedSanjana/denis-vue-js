<template>
  <div>
    <div v-if="changecomponent">
      <div class="flex justify-end mr-6 mt-18">
        <button @click="change()" class="button">Back to Past Bill List</button>
      </div>

    </div>
    <div class=" p-2 w-full" v-if="!changecomponent">
      <!--form-->
      <div class="px-8 flex justify-center items-center" v-if="this.Bills.length >= 1">

        <!--items-->
        <ul>
          <div class="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
            <div class="" v-for="bill in this.Bills" :key="bill._id" @click="patientBill(bill._id)">

              <li class="border-gray-400 flex justify-center mt-6 items-center  mb-2 shadow-md">
                <div v-if="bill.balance>0">
                  <div class="flex justify-center">
                    <div>
                      <svg class="w-4 h-4 mt-1" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999"
                        style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                        <path style="fill:#E50027;"
                          d="M501.449,368.914L320.566,66.207C306.751,43.384,282.728,29.569,256,29.569
                                  s-50.752,13.815-64.567,36.638L10.55,368.914c-13.812,23.725-14.113,51.954-0.599,75.678c13.513,23.723,37.836,37.838,65.165,37.838
                                  h361.766c27.329,0,51.653-14.115,65.165-37.838C515.563,420.868,515.262,392.639,501.449,368.914z" />
                        <path style="fill:#C1001F;"
                          d="M502.049,444.592c-13.513,23.723-37.836,37.838-65.165,37.838H256V29.57
                                  c26.727,0,50.752,13.815,64.567,36.638L501.45,368.915C515.262,392.639,515.563,420.868,502.049,444.592z" />
                        <path style="fill:#FD003A;"
                          d="M75.109,452.4c-16.628,0-30.851-8.27-39.063-22.669c-8.211-14.414-8.065-31.087,0.469-45.72
                                  L217.23,81.549c8.27-13.666,22.816-21.951,38.769-21.951s30.5,8.284,38.887,22.157l180.745,302.49
                                  c8.388,14.4,8.534,31.072,0.322,45.485c-8.211,14.4-22.435,22.669-39.063,22.669H75.109V452.4z" />
                        <path style="fill:#E50027;" d="M436.891,452.4c16.628,0,30.851-8.27,39.063-22.669c8.211-14.414,8.065-31.087-0.322-45.485
                                  L294.886,81.754c-8.388-13.871-22.933-22.157-38.887-22.157V452.4H436.891z" />
                        <path style="fill:#E1E4FB;" d="M286.03,152.095v120.122c0,16.517-13.514,30.03-30.03,30.03s-30.031-13.514-30.031-30.03V152.095
                                  c0-16.517,13.514-30.031,30.031-30.031S286.03,135.578,286.03,152.095z" />
                        <path style="fill:#C5C9F7;" d="M286.03,152.095v120.122c0,16.517-13.514,30.03-30.03,30.03V122.064
                                  C272.516,122.064,286.03,135.578,286.03,152.095z" />
                        <path style="fill:#E1E4FB;" d="M256,332.278c-24.926,0-45.046,20.119-45.046,45.046c0,24.924,20.119,45.046,45.046,45.046
                                  s45.046-20.121,45.046-45.046C301.046,352.398,280.925,332.278,256,332.278z" />
                        <path style="fill:#C5C9F7;" d="M301.046,377.323c0,24.924-20.119,45.046-45.046,45.046v-90.091
                                  C280.925,332.278,301.046,352.398,301.046,377.323z" />

                      </svg>
                    </div>
                    <div class="text-red-400 ml-2">Payment Due!</div>

                  </div>
                  <div
                    class="select-none cursor-pointer bg-white rounded-md  items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm">
                    <div class="font-semibold text-gray-800 pl-6 pr-6">{{bill.createdAt.substring(0, 10)}}</div>
                    <div class="font-semibold text-gray-800 pl-6 pr-6"><span class="text-gray-600">Invoice:
                      </span>{{bill._id.substring(bill._id.length - 7)}}</div>
                  </div>
                </div>
                <div v-else>
                  <div
                    class="select-none cursor-pointer bg-white rounded-md  items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-sm">
                    <div class="font-semibold text-gray-800 pl-6 pr-6">{{bill.createdAt.substring(0, 10)}}</div>
                    <div class="font-semibold text-gray-800 pl-6 pr-6"><span class="text-gray-600">Invoice:
                      </span>{{bill._id.substring(bill._id.length - 7)}}</div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
      <!--form-->

      <!-- Alert Info -->
      <div v-else class="flex-row w-full">
        <div class=" flex items-center justify-center  ">
          <div class="w-full  ">

            <div class="bg-indigo-200 px-4 py-4  my-4 rounded-md text-lg mx-auto flex items-center ">
              <svg class="h-6 w-6 fill-current text-indigo-400 mr-4" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              <div>
                <p class="font-bold text-gray-700">No Past Bills</p>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div class=" px-40 mt-10" v-if="this.Bills.length >= 1">
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button"
          :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"
          @click="changePage(1)">Next </button>


      </div>

      <!-- End Alert Info -->
    </div>

    <div v-if="changecomponent">
      <PastBillView :changecomponent="changecomponent" :billId="billId" />

    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import PastBillView from "../Billing/PastBillView.vue";
  export default {
    props: {
      Billing: Array
    },

    components: {
      PastBillView
    },
    created() {
      this.getBills(this.$route.params.id)
    },

    computed: {
      filteredList() {

        const star = (this.currentPage - 1) * this.prePage
        const end = this.currentPage * this.prePage

        const result = this.Bills.slice(star, end)
        return result
      }
    },

    data() {
      return {
        token: localStorage.getItem('token'),
        changecomponent: false,
        Bills: [],
        billId: "",
        invoice: '',
        prePage: 9,
        currentPage: 1,
        page: 1

      }
    },
    methods: {
      changePage(num) {
        this.currentPage = this.currentPage + num
        this.page = this.page + num
        this.getBills(this.$route.params.id)

      },

      patientBill(id) {
        this.changecomponent = !this.changecomponent
        this.billId = id

      },

      change() {
        this.changecomponent = !this.changecomponent
      },

      async getBills(id) {
        await axios.get('billings/' + id + '/list-bills', {
            params: {
              page: this.page,
              limit: 20
            },
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token') }`
            }
          })
          .then((response) => {

            this.Bills = response.data['result'];
            console.log(this.Bills)
          })
          .catch((error) => {
            console.log(error)
            this.errorMsg = 'Error retrieving data'
          })
      },
    }
  }
</script>

<style scoped>

</style>