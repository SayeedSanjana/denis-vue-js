<template>
    <header class="sticky top-0 z-50">
        <NavInventory />
    </header>
    <div class="flex border-t">
        <div class="w-1/4 bg-regal-light-cyan py-2 pl-28 text-regal-teal font-bold flex justify-start">Category</div>
        <div class="w-3/4 bg-regal-light-cyan py-2 pl-48 text-regal-teal font-bold flex justify-start">Create New
            Category</div>

    </div>

    <div class="flex ">
        <div class="border-r w-1/4">

        <Categorylib />
        </div>
       
        <div class="w-3/4 bg-white  text-regal-teal font-bold ">
            <div class="flex formbox">
                        <!-- job title -->
                        <div class="w-1/2 mr-9 -ml-5 ">
                            <label for="" class="labeldesign font-semibold">Category Name</label>
                            <input type="text" class="appearance-none block w-3/4 px-4 py-2 mt-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded mb-3 leading-tight focus:outline-none focus:border-regal-blue ">
                        </div>
                        <!-- job title -->
                        <!-- job title -->
                        <div class="w-1/2  -ml-32">
                            <label for="" class="labeldesign font-semibold">Category Type</label>
                         
 

                            <!-- <select
                                    class="appearance-none block w-3/4 bg-white  text-regal-teal border border-regal-teal  border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue"
                                    id="category">
                                    <option>Medicine</option>
                                    <option>Diseases</option>

                                    <option>Habits</option>
                                    <option>Manufacturer</option>
                                    <option>Supplier</option>
                                </select> -->
                        </div>
                        <!-- job title -->

                       
                    </div>
                    <div class="flex justify-end mr-64">
                        <button class="px-8 py-2 mr-2 bg-regal-light-cyan text-center border text-regal-cyan font-semibold rounded-md text-sm flex">Add New Type</button>
                    </div>
                    <div class="formbox -ml-5">
                        <label for="" class="labeldesign font-semibold">Catagory Description</label>
                        <textarea type="text" class="appearance-none block w-4/5 h-24 px-4 py-2 mt-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded mb-3 leading-tight focus:outline-none focus:border-regal-blue" ></textarea>
                    </div>

                    <div class="flex justify-start ml-48 mt-2">
                        <p class="-ml-1">Input records</p>
                    </div>

                    <div class="ml-48 mr-4">
                        <table class="-ml-1  mt-3 w-4/5 px-4 py-2  bg-regal-light-green bg-opacity-20 ">
                <tr class="flex text-center text-sm text-regal-teal border ">
                   <th class="flex justify-start ml-12 py-3 w-4/5 border-r"> Category Name </th>
                   <th class="ml-5 mr-10 mt-3 w-1/5">Input Date</th>
                    
                </tr>
                <tr class="flex text-center text-sm bg-white border border-t-0 hover:bg-regal-white hover:opacity-80 text-regal-cyan">
                    <td class="flex justify-start text-regal-blackgray font-medium ml-12 py-3 w-4/5 border-r">Napa 50mg</td>
                    <td class="ml-5 mr-10 mt-3 text-regal-blackgray font-medium w-1/5">4 Nov,2021</td>
                </tr>
                <tr class="flex text-center text-sm bg-white border border-t-0 hover:bg-regal-white hover:opacity-80 text-regal-cyan">
                    <td class="flex justify-start text-regal-blackgray font-medium ml-12 py-3 w-4/5 border-r">Napa 50mg</td>
                    <td class="ml-5 mr-10 mt-3 text-regal-blackgray font-medium w-1/5">6 Nov,2021</td>
                </tr>
                <tr class="flex text-center text-sm bg-white border border-t-0 hover:bg-regal-white hover:opacity-80 text-regal-cyan">
                    <td class="flex justify-start text-regal-blackgray font-medium ml-12 py-3 w-4/5 border-r">xgy 50mg</td>
                    <td class="ml-5 mr-10 mt-3 text-regal-blackgray font-medium w-1/5">5 Nov,2021</td>
                </tr>
                <tr class="flex text-center text-sm bg-white border border-t-0 hover:bg-regal-white hover:opacity-80 text-regal-cyan">
                    <td class="flex justify-start font-medium ml-12 py-3 w-4/5 border-r">sd 50mg</td>
                    <td class="ml-5 mr-10 mt-3 text-regal-blackgray font-medium w-1/5">4 Nov,2021</td>
                </tr>
                <tr class="flex text-center text-sm bg-white border border-t-0 hover:bg-regal-white hover:opacity-80 text-regal-cyan">
                    <td class="flex justify-start text-regal-blackgray font-medium ml-12 py-3 w-4/5 border-r">Ndfdfapa 50mg</td>
                    <td class="ml-5 mr-10 mt-3 text-regal-blackgray font-medium w-1/5">4 Nov,2021</td>
                </tr>
            </table>
                    </div>
                    
                    <div class="flex formbox ">
                        <div class="w-1/2 flex justify-center ml-24 ">
                            <button class=" px-8 py-2 mr-2 bg-gradient-to-r from-regal-gb3 to-regal-gb4 text-center border text-white font-semibold rounded-md text-sm ">Save</button>
                            </div>
                        <div class="w-1/2 flex justify-start -ml-56">
                            <button class="px-8 py-2 mr-2 bg-regal-light-cyan text-center border text-regal-cyan font-semibold rounded-md text-sm ">Cancel</button>
                            </div>
                    </div>

        </div>

    </div>

</template>

<script>
    import Categorylib from "../components/Categorylib.vue";
    import NavInventory from "../../src/components/NavInventory.vue";
    export default {
        components: {
            NavInventory,
            Categorylib
        }
    }
</script>

<style scoped>

</style>