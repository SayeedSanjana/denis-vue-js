<template>
  <div>

    <section class="text-gray-600 body-font ">
      <div class="container  md:px-5 mx-auto mb-5">
        <div class="mt-5  ">

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

                <div class="whitespace-normal break-all mr-5  border-l border-gray-300">
                  <div class="font-semibold text-regal-teal text-sm mb-4  flex items-start"><span
                      class="border-b border-gray-400 ml-3">Treatment Done:</span></div>
                  <div class="flex items-start ">
                    <pre class="text-left  whitespace-pre-line break-all ml-3 ">{{tr.treatmentDone}}</pre>
                  </div>
                </div>
              </div>

              <!-- <div>
              </div> -->
              <hr  class="mt-6 mb-6"/>

            </div>
            <!--loop-->
            <div class=" px-40 flex mt-5">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button"
                :disabled="currentPage === 1" @click="changePage(-1)"> Prev</button>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button"
                :disabled="filteredList.length<prePage" @click="changePage(1)">Next </button>

            </div>
          </div>
          <div v-else class="h-screen  ">
            <div class="  my-4 rounded-md text-lg mx-auto ">
              <!-- <svg class="h-6 w-6 fill-current text-white mr-4" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg> -->
             
                <p class="font-bold text-regal-teal text-opacity-50 text-center">No Past Treatment Records</p>
              
            </div>
          </div>
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