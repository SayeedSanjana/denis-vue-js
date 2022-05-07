<script>
import Modal from "../../components/reusable/Modal.vue";
export default {
    components: {
        Modal,
    },

    props: {
        patient: {
            type: Object,
        },
    },
    data() {
        return {
            ...Object.assign(
                {
                    allergies: [],
                    diseases: [],
                    personalHabits: [],
                },
                this.patient
            ),
            formData: {
                allergies: [],
                diseases: [],
                personalHabits: [],
            },
        };
    },
};
</script>

<template>
    <Modal :width="'w-1/2'">
        <template v-slot:header> 
            <h1 class="font-bold text-xl p-2">Add Medical History</h1>
        </template>

        <template v-slot:body>
            <div class="mx-10">
                <form @submit.prevent="" id="selectors" class="flex justify-between items-center">
                    <div class="relative"> 
                        <input type="text" class="py-2 w-80 pl-5 pr-20 rounded-lg z-0 border border-regal-teal border-opacity-50 focus:border-regal-blue focus:shadow focus:outline-none" placeholder="Add History...">
                        <div class="absolute top-0 right-0">
                            
                            <button class="btn add">+</button>
                            
                        </div>
                    </div>
                    
                    <div class="flex">
                        <div class="pr-4">
                            <input
                                class="h-5 w-5 appearance-none checked:bg-regal-cyan ring-1 ring-regal-teal border-4 border-white rounded-full mt-1 align-top bg-center mr-2 cursor-pointer"
                                type="radio"
                                name="option"
                                id="option1"
                                value="allergies"
                            />
                            <label
                                class="text-gray-800"
                                for="option1"
                                >Allergies</label
                            >
                        </div>
                        <div class="pr-4">
                            <input
                                class="h-5 w-5 appearance-none checked:bg-regal-cyan ring-1 ring-regal-teal border-4 border-white rounded-full mt-1 align-top bg-center mr-2 cursor-pointer"
                                type="radio"
                                name="option"
                                id="option2"
                                value="diseases"
                            />
                            <label
                                class="text-gray-800"
                                for="option2"
                                > Diseases </label
                            >
                        </div>
                        <div class="pr-4">
                            <input
                                class="h-5 w-5 appearance-none checked:bg-regal-cyan ring-1 ring-regal-teal border-4 border-white rounded-full mt-1 align-top bg-center mr-2 cursor-pointer"
                                type="radio"
                                name="option"
                                id="option3"
                                value="personalHabits"
                            />
                            <label
                                class="text-gray-800"
                                for="option3"
                                >Personal Habits</label
                            >
                        </div>
                    </div>

                    <button class="btn">save</button>
                </form>
                <section class=" mt-10 flex flex-row">
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-red-900 underline"> Allergies</summary>
                            
                            <ul class="mx-auto px-4 py-1">
                                <li v-for="data in [1,2,3,4]" :key="data" class="flex justify-between py-1"> 
                                    <p>Something here</p>
                                    <button>X</button>
                                </li>

                            </ul>
                        </article>
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-green-800 underline"> Diseases</summary>
                            
                            <ul class="mx-auto px-4">
                                <li v-for="data in [1,2,3]" :key="data" class="flex justify-between py-1"> 
                                    <p>Something here</p>
                                    <button>X</button>
                                </li>

                            </ul>
                        </article>
                        <article class="w-full border-l-2 border-regal-teal">
                            <summary class="font-bold py-2 px-3 block text-yellow-600 underline"> Personal Habits</summary>
                            
                            <ul class="mx-auto px-4">
                                <li v-for="data in [1,2]" :key="data" class="flex justify-between py-1"> 
                                    <p>Something here</p>
                                    <button>X</button>
                                </li>

                            </ul>
                        </article>
                        
                </section>

            </div>
        </template>
    </Modal>
</template>

<style scoped>
.btn{
    @apply py-2 px-4 bg-regal-teal text-white font-bold rounded border border-regal-teal;
}
.btn:hover {
    @apply  text-regal-teal bg-transparent;
}
.btn.add {
    @apply  rounded-l-none rounded-r-lg border;
}
</style>
