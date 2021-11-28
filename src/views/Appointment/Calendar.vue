<template>
    <div>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                <div class="inline-block px-3" v-for="i in 6" :key="i">
                    <div
                        class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <h1 class="font-semibold mt-4">Patient A</h1>
                        <p class="text-sm mt-2">09876543212</p>
                        <div class="flex">
                            <div>
                                <p class="text-xs mt-6">Visiting time: 8:00:00-8:30:00</p>
                            </div>
                            <div
                                class="border border-regal-blue rounded-full text-gray-600  bg-white hover:bg-white focus:outline-none appearance-none text-center">
                                Scheduled
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.date1()
        },
        methods: {
            date1() {
                let date = new Date();

                let dateArr = [];
                dateArr[0] = new Date();
                for (let i = 0; i < 6; i++) {
                    let nextDate = date.setDate(date.getDate() + 1)
                    dateArr.push(nextDate);
                    // console.log(new Date(nextDate));
                }

                for (let i = 0; i < dateArr.length; i++) {
                    
                    console.log( new Date(dateArr[i]));
                    // console.log(new Date(nextDate));
                }
            },
// date1(){

//     const today = new Date();
// const tomorrow = new Date();
// const dayaftertomorrow = new Date();

// // Add 1 Day
// tomorrow.setDate(today.getDate() + 1);
// dayaftertomorrow.setDate(tomorrow.getDate() + 1);

// console.log(today);
// console.log(tomorrow);
// console.log(dayaftertomorrow);
// }

            
        }

    }
</script>

<style scoped>
    .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .hide-scroll-bar::-webkit-scrollbar {
        display: none;
    }
</style>