<template>
  <div>

    <section class="text-gray-600 body-font ">
      <div class="container  md:px-5 mx-auto mb-5">
        <div class="mt-5  ">

          <!-- Treatment Done Timeline Starts -->
          <div v-if="treatmentList.length>=1" class="h-screen">
            <div class=" mb-3" v-for="tr in filteredList" :key="tr">
              <!--loop-->
              <div class="px-2 mb-3">
                <div class="font-semibold title-font text-regal-teal text-left">Dr. {{tr.user.name}} </div>
              </div>

              <div class="px-7  ">
                <div class="mt-1 text-regal-teal title-font font-bold text-left border-l  border-gray-300 ">
                  <div class="ml-3">{{tr.createdAt.substring(0,10)}}</div>
                </div>
              </div>

              <div class="px-12 mt-2 text-left  ">
                <p class="leading-relaxed  border-l border-gray-300 ">
                  <pre class="ml-3"><span class="text-regal-teal">BabyTooth:</span>{{tr.isBabyTooth}}</pre>
                </p>

                <div v-if="this.toothNull(tr.tooth)" class="inline-block">
                  <p class="leading-relaxed border-l border-gray-300 inline-block">
                    <pre class="ml-3 "><span class="text-regal-teal">Teeth: </span></pre>
                  </p>
                  <div v-for="t in tr.tooth" :key="t._id" class="inline-block">

                    <pre class="mr-2">{{t}}</pre>

                  </div>
                </div>
               
               <!-- Treatment Done Starts -->
                <div class="whitespace-normal break-all mr-5  border-l border-gray-300">
                   <div class="font-semibold text-regal-teal text-sm mb-4  flex items-start">
                     <span class="border-b border-gray-400 ml-3">Treatment Done:</span>
                    </div>
                  <div class="flex items-start ">
                    <pre class="text-left  whitespace-pre-line break-all ml-3 ">{{tr.treatmentDone}}</pre>
                  </div>
                </div>
              <!-- Treatment Done Ends -->

              </div>

              <!-- <div>
              </div> -->
              <hr  class="mt-6 mb-6"/>

            </div>
            <!--loop-->

            <!-- Pagination starts -->
            <div class=" px-40 flex mt-5">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button"
                :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"
                :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>
            </div>
            <!-- Pagination ends -->

          </div>
          <!-- Treatment Done Timeline Ends -->

          <!-- v-else no past treatment banner starts -->
          <div v-else class="h-screen  ">
            <div class="  my-4 rounded-md text-lg mx-auto ">
                <p class="font-bold text-regal-teal text-opacity-50 text-center">No Past Treatment Records</p>
            </div>
          </div>
          <!-- v-else no past treatment banner ends  -->

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      treatmentList: Array,
      uid: String
    },
    data() {
      return {
        prePage: 4,
        currentPage: 1,
      }
    },

    computed: {
      filteredList() {

        const star = (this.currentPage - 1) * this.prePage
        const end = this.currentPage * this.prePage

        const result = this.treatmentList.slice(star, end)
        return result
      }
    },

    methods: {
      toothNull(arr) {
        return arr.some(el => el !== null);
      },
      changePage(num) {
        this.currentPage = this.currentPage + num
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>