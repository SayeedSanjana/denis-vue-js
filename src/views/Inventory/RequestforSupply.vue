<template>
    <header class="sticky top-0 z-50">
        <NavInventory />
    </header>
    <div class=" flex ">

        <aside class="fixed h-screen   ">
            <SideInv />
        </aside>
        <main class=" w-full ml-36 px-6 ">
            <p class="text-lg text-left font-bold m-5 px-32" style="color:#005072">Request for Supply</p>
            <div class="flex  mb-2 ml-36 pl-3    mx-3   ">
            <div class="flex w-1/3 -ml-3 bg-regal-light-cyan ">

                <input
                    class="flex-grow outline-none pl-3 border border-r-0 border-regal-ash  text-regal-teal bg-regal-light-cyan py-2"
                    name="q" type="text" placeholder="Search " />
                <span class=" border-l-0 border border-regal-ash pt-0.5 px-2  bg-regal-lightishblue bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-2  text-regal-teal transition duration-100 cursor-pointer" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
            </div>

            </div>


            <!-- <input type="search" name="" id="" class="flex justify-start ml-36 border border-regal-blue focus:"> -->
            <table class=" m-5 w-5/6 mx-auto bg-white ">
                <tr class="text-center text-md bg-regal-light-cyan text-regal-teal h-12">
                    <th class="px-4 py-1">SL No</th>
                    <th class="px-4 py-1">Order ID</th>
                    <th class="px-4 py-1">Employee ID</th>
                    <th class="px-4 py-1">Order date</th>
                    <th class="px-4 py-1">Item Qty</th>
                    <th class="px-4 py-1">Status</th>
                    <th class="px-4 py-1">Order Amount</th>
                    <th class="w-12"></th>


                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-lightishred bg-regal-lightishred text-regal-deepred py-1 px-1 rounded-4xl">Pending</span> </td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3 " @click="a = !a"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
                <tr v-show="a" class="bg-white text-center text-md text-regal-grayish text-opacity-40 h-12">
                    <th class="px-4 py-1">SL No</th>
                    <th class="px-4 py-1">Item Name</th>
                    <th class="px-4 py-1">Item ID</th>
                    <th class="px-4 py-1">Manufacturer name</th>
                    <th class="px-4 py-1">Qty</th>
                    <th class="px-4 py-1">Price</th>
                    
                    
              
            </tr>
            <tr v-show="a" v-for="i in arr" :key="i" class="bg-white text-regal-cyan">
                <td class="px-2 py-3 ">{{i.sl}}</td>
                <td class="px-2 py-3">{{i.itemname}}</td>
                <td class="px-2 py-3">{{i.itemid}}</td>
                <td class="px-2 py-3">{{i.manufacturername}}</td>
                <td class="px-2 py-3">{{i.qty}}</td>
                <td class="px-2 py-3">{{i.price}}</td>
               
            </tr>

               
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-lightgreen bg-regal-lightgreen text-regal-deepishgreen py-1 px-1 rounded-4xl">Fulfilled</span></td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-lightgreen bg-regal-lightgreen text-regal-deepishgreen py-1 px-1 rounded-4xl">Fulfilled</span></td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-lightgreen bg-regal-lightgreen text-regal-deepishgreen py-1 px-1 rounded-4xl">Fulfilled</span></td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
                
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-yellow bg-regal-yellow text-regal-brown py-1 px-1 rounded-4xl">Ordered</span></td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-yellow bg-regal-yellow text-regal-brown py-1 px-1 rounded-4xl">Ordered</span></td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">A46621</td>
                    <td class="px-2 py-3">Mr Jan Doe</td>
                    <td class="px-2 py-3">8/11/2021</td>
                    <td class="px-2 py-3 ">10</td>
                    <td class="px-2 py-3 "><span class="border border-regal-yellow bg-regal-yellow text-regal-brown py-1 px-1 rounded-4xl">Ordered</span></td>
                    <td class="px-2 py-3 ">500 Tk</td>
                    <button class="mt-3"> <img src="@/assets/svgs/dd.svg" alt="" srcset=""></button>

                </tr>
               
                
            </table>
            
        </main>

    </div>


</template>

<script>
    import NavInventory from "../../components/NavInventory.vue";
    import SideInv from "../../components/SideInv.vue";
    export default {
        components: {
            NavInventory,
            SideInv
        },
        data() {
            return {
                a: false,
                arr:[
                    {
                        sl:1,
                       itemname:"Medicine1",
                       itemid:"7890",
                       manufacturername:"Square Limited",
                       qty:1,
                       price:678 
                    },
                    {
                        sl:2,
                       itemname:"Medicine2",
                       itemid:"7890",
                       manufacturername:"Square Limited",
                       qty:1,
                       price:678 
                    },
                    {
                        sl:3,
                       itemname:"Medicine3",
                       itemid:"7890",
                       manufacturername:"Square Limited",
                       qty:1,
                       price:678 
                    },
                    
                ]
            }
        },

    }
</script>

<style scoped>

</style>