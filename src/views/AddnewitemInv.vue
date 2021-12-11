<template>
    <div>
        <div
            class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
            <div class="w-full  lg:max-w-3xl max-w-lg  rounded-xl relative mx-auto my-auto shadow-lg ">
                <!--content-->
                <div class="mt-5 overflow-y-scroll no-scrollbar h-screen">
                    <!--body-->
                    <div class="text-center  flex-auto justify-center  ">
                        <div
                            class="flex justify-start text-lg title-font font-bold  bg-regal-light-cyan  text-regal-teal pb-3 pt-2 ">
                            <p class="ml-8">Add New Item</p>
                        </div>
                        <section class="max-w-4xl p-6 pt-4 mx-auto bg-white  dark:bg-gray-800  ">
                            <!-- form input starts here -->

                            <form class="w-full max-w-lg ">
                                <div
                                    class="flex justify-start text-base  font-semibold ml-2  text-regal-teal pb-3 pt-2 ">
                                    <p>Item Description</p>
                                </div>
                                <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Item Name
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Item ID
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                </div>
                                <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Category
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="gender">
                                                <option>Medicine</option>
                                                <option>Disease</option>

                                                <option>Others</option>
                                            </select>
                                            <div
                                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label
                                            class="block text-left text-regal-teal text-xs font-bold mb-2">Manufacturer
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                </div>
                                <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Price per
                                            unit
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Store Box
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                </div>
                                <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Barcode
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Add Image
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-1.5 px-4 mb-4 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="file" placeholder="">
                                    </div>
                                </div>

                                <div class="flex flex-wrap -mx-24 mb-2 mt-4">
                                    <div class="flex w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label
                                            class="block text-left text-regal-teal text-xs font-bold mt-2.5 mb-2 mr-5"
                                            for="dob">Expire Date</label>
                                        <input
                                            class="appearance-none block w-1/3  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="date" type="date" placeholder="Input date of birth">
                                    </div>
                                </div>
                                <div
                                    class="flex justify-start text-base font-semibold ml-2  text-regal-teal pb-3 pt-2 ">
                                    <p>Supplier Information</p>
                                </div>
                                <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Supplier
                                            Name
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Contact
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                </div>
                                <div class="flex  -mx-24 mb-2 mt-4">
                                    <div class="w-1/2 ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Email
                                        </label>
                                        <input
                                            class="appearance-none block w-5/6  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>

                                </div>

                                <div
                                    class="flex justify-start text-base font-semibold ml-2  text-regal-teal pb-3 pt-2 ">
                                    <p>Quantity Information</p>
                                </div>
                                <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Unit
                                        </label>
                                        <div class="relative">
                                            <select
                                                class="appearance-none block w-full bg-white  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="gender">
                                                <option>Bottles</option>

                                                <option>Others</option>
                                            </select>
                                            <div
                                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Price per
                                            Unit
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    
                                </div>
                            
                                 <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Unit per box
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Price per box
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                </div>
                                 <div class="flex justify-between -mx-24 mb-2 mt-4">
                                    <div class="w-full ml-24 mr-4 px-2 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Total no. of Box
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    <div class="w-full  px-3 mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Total Price
                                        </label>
                                        <input
                                            class="appearance-none block w-full  text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                </div>
                                <div class=" -mx-24 mb-2 mt-4">
                                    <div class="w-6/7 ml-24  px-2 mr-1  mb-6 md:mb-0">
                                        <label class="block text-left text-regal-teal text-xs font-bold mb-2">Inventory Note
                                        </label>
                                        <input
                                            class="appearance-none block w-full text-regal-teal border border-regal-teal h-10 border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="name" type="text" placeholder="">
                                    </div>
                                    
                                </div>

                                <!-- Buttons for creating new patient and cancelling starts -->
                                <div class=" flex justify-between mt-6 ">
                                    
                                    <button
                                        class=" ml-40 h-9 px-8 py-2 mr-2 bg-gradient-to-r from-regal-gb3 to-regal-gb4 text-center border text-white font-medium  text-sm">Add Item</button>
                                    <button @click="closeModal"
                                        class="mr-20 h-9 px-8 py-2 bg-regal-white text-center border border-regal-ash text-regal-teal font-medium  text-sm">Cancel</button>
                                </div>
                                <!-- Buttons for creating new patient and cancelling ends -->
                            </form>
                            <!-- form input ends here -->
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            closeModal() {
                this.$emit("closeModal")
            }
        }
    }
</script>

<style scoped>
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }
</style>