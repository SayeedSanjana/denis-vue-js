<script>
import axios from 'axios';
// import swal from 'sweetalert';
    export default {

        data(){
            return{
                bill:{}
            }
        },
        created(){
            this.getBill();
        },

        methods:{
            async getBill(){

                try {
                    const response = await axios.get(import.meta.env.VITE_LOCAL + '/billings/p/' + this.$route.params.id);
                    this.bill = response.data.data;
                    
                } catch (error) {
                    console.log(error);
     
                }

            },
             back(){
                this.$router.push('/BillingWindow');
            },
        }


    }
</script>

<template>
    <section class="container mx-40 my-6">
        <h1 class="text-left mx-40 font-bold my-4 text-regal-teal">Payment</h1>
        <form action="">
            <div>
                <article class="flex justify-end pb-4 space-x-2">
                    <button type="button" @click="back()" class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Back</button>
                    <button type="submit"  class="px-3 py-1 font-semibold rounded-md text-white bg-regal-teal">Confirm</button>
                </article>
            </div>
        </form>


        {{bill}}

    </section>
</template>


<style scoped>

</style>