<template>
    <header class="sticky top-0 z-50">
        <NavInventory />
    </header>
    <div class=" flex ">

        <aside class="fixed h-screen   ">
            <SideInv />
        </aside>
        <main class=" w-full ml-36 px-6 ">
            <p class="text-lg text-left font-bold m-5 px-32" style="color:#005072">Inventory List</p>
            <!-- <div class=" mt-5 ml-36 mb-2 w-1/6 border-2 border-regal-light-cyan my-1 mx-3 bg-regal-light-cyan flex justify-end  ">
                <input class="flex-grow outline-none ml-1 text-regal-teal bg-regal-light-cyan  w-96 h-8" name="q" type="text"
                    placeholder="Search "/>
                <span class="ml-10 border-l border-regal-light-cyan px-2 bg-regal-lightishblue bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 mt-1  text-regal-teal transition duration-100 cursor-pointer"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
            </div> -->
    <div>
        
    </div>

            <div class=" flex justify-start">

            
            <div class="flex ml-36 w-1/3 bg-regal-light-cyan ">

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
                <div class=" ml-4 mt-1">
                 <button  @click="modal">
                     
                   <img src="@/assets/svgs/addition.svg" alt="" srcset="">
                 </button>   
                </div>
            </div>


            <!-- <input type="search" name="" id="" class="flex justify-start ml-36 border border-regal-blue focus:"> -->
            <table class=" m-5 w-5/6 mx-auto bg-regal-light-cyan ">
                <tr class="text-center text-md text-regal-teal h-12">
                    <th class="px-4 py-1">SL no</th>
                    <th class="px-4 py-1">Item Name</th>
                    <th class="px-4 py-1">Item ID</th>
                    <th class="px-4 py-1">Category</th>
                    <th class="px-4 py-1">Manufacturer</th>
                    <th class="px-4 py-1">Price</th>
                    <th class="px-4 py-1">Quantity</th>
                    <th class="px-4 py-1">Store Box</th>
                    <th class="px-4 py-1">Expire Date</th>
                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">Surgical Mask</td>
                    <td class="px-2 py-3">2454569734</td>
                    <td class="px-2 py-3">Tab</td>
                    <td class="px-2 py-3 ">Square Pharmaceuticals Limited</td>
                    <td class="px-2 py-3 ">10TK/Item</td>
                    <td class="px-2 py-3 ">100/1000</td>
                    <td class="px-2 py-3 ">A12</td>
                    <td class="px-2 py-3 ">Aug, 2022</td>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">Surgical Mask</td>
                    <td class="px-2 py-3">2454569734</td>
                    <td class="px-2 py-3">Tab</td>
                    <td class="px-2 py-3 ">Square Pharmaceuticals Limited</td>
                    <td class="px-2 py-3 ">10TK/Item</td>
                    <td class="px-2 py-3 ">100/1000</td>
                    <td class="px-2 py-3 ">A12</td>
                    <td class="px-2 py-3 ">Aug, 2022</td>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">Surgical Mask</td>
                    <td class="px-2 py-3">2454569734</td>
                    <td class="px-2 py-3">Tab</td>
                    <td class="px-2 py-3 ">Square Pharmaceuticals Limited</td>
                    <td class="px-2 py-3 ">10TK/Item</td>
                    <td class="px-2 py-3 ">100/1000</td>
                    <td class="px-2 py-3 ">A12</td>
                    <td class="px-2 py-3 ">Aug, 2022</td>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">Surgical Mask</td>
                    <td class="px-2 py-3">2454569734</td>
                    <td class="px-2 py-3">Tab</td>
                    <td class="px-2 py-3 ">Square Pharmaceuticals Limited</td>
                    <td class="px-2 py-3 ">10TK/Item</td>
                    <td class="px-2 py-3 ">100/1000</td>
                    <td class="px-2 py-3 ">A12</td>
                    <td class="px-2 py-3 ">Aug, 2022</td>

                </tr>
                <tr
                    class="border border-regal-blue border-opacity-10 bg-white  hover:bg-regal-lightishblue hover:bg-opacity-10  text-regal-cyan">
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">Surgical Mask</td>
                    <td class="px-2 py-3">2454569734</td>
                    <td class="px-2 py-3">Tab</td>
                    <td class="px-2 py-3 ">Square Pharmaceuticals Limited</td>
                    <td class="px-2 py-3 ">10TK/Item</td>
                    <td class="px-2 py-3 ">100/1000</td>
                    <td class="px-2 py-3 ">A12</td>
                    <td class="px-2 py-3 ">Aug, 2022</td>

                </tr>
            </table>
        </main>
        <!-- <section class="w-full  px-6 py-4 ">
            <p class="text-lg text-left font-bold m-5 px-36" style="color:#005072">Inventory List</p>
           
            <table class=" rounded-t-xl m-5 w-5/6 mx-auto bg-regal-light-cyan ">
                <tr class="text-center text-md text-regal-teal h-16">
                    <th class="px-4 py-3">SL no</th>
                    <th class="px-4 py-3">Item Name</th>
                    <th class="px-4 py-3">Item ID</th>
                    <th class="px-4 py-3">Category</th>
                    <th class="px-4 py-3">Manufacturer</th>
                    <th class="px-4 py-3">Price</th>
                    <th class="px-4 py-3">Quantity</th>
                    <th class="px-4 py-3">Store Box</th>
                    <th class="px-4 py-3">Expire Date</th>
                </tr>
                <tr class="border border-regal-blue border-opacity-25 bg-white  hover:bg-regal-white hover:opacity-80 text-regal-cyan"
                    >
                    <td class="py-3 ">1</td>
                    <td class="px-2 py-3">Surgical Mask</td>
                    <td class="px-2 py-3">2454569734</td>
                    <td class="px-2 py-3">Tab</td>
                    <td class="px-2 py-3 ">Square Pharmaceuticals Limited</td>
                    <td class="px-2 py-3 ">10TK/Item</td>
                    <td class="px-2 py-3 ">100/1000</td>
                    <td class="px-2 py-3 ">A12</td>
                    <td class="px-2 py-3 ">Aug, 2022</td>
                    
                </tr>
            </table>
            
        </section> -->
        <div v-if="openModal">
            <AddnewitemInv @closeModal="closeModal" />
        </div>

    </div>


</template>

<script>
    import NavInventory from "../../components/NavInventory.vue";
    import SideInv from "../../components/SideInv.vue";
    import AddnewitemInv from "../AddnewitemInv.vue";
    export default {
        components: {
            NavInventory,
            SideInv,
            AddnewitemInv
        
        },
        data(){
            return{
                openModal: false,
            }
        },
        methods:{
            modal() {
                this.openModal = true
            },

            closeModal() {
                this.openModal = false
            }
        }
    }
</script>

<style scoped>

</style>