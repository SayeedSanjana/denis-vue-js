<template>
<!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="bg-regal-white h-full ">
            <p class="caheadername ml-52">Create New Appointment </p>
        <section class="max-w-4xl md:p-6 p-3 mx-auto   ">

      <div class="flex items-center justify-center p-6 mx-14 my-4 bg-white  ">
        <form  class="w-full max-w-lg ">
             <p class=" caheadername ">Patient Information </p>

          <div class="w-full lg:w-full ">
            <label class="flex  text-regal-teal text-sm font-semibold mb-2 justify-start mt-4" for="duuid">
               Name 
            </label>
            <input
              class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-regal-blue"
              id="name" type="text"  >

          </div>
          


          <div class="w-full lg:w-full mt-6 ">
            <label class="flex justify-start text-regal-teal text-sm font-medium mb-2" for="dob">
              Date Of Birth 
            </label>
            <input 
              class="appearance-none block w-full bg-regal-white text-regal-teal border border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue "
              id="dob" type="date" placeholder="1990-09-08" >

          </div>
          <div class="w-full lg:w-full  ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="gender">
              Gender 
            </label>
            <input 
              class="appearance-none block w-full  text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none  focus:border-regal-blue"
              id="gender" type="text" >
          </div>

         
          <div class="w-full lg:w-full ">
            <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="contact">
              Contact Number 
            </label>
            <input
              class="appearance-none block w-full bg-white text-regal-teal border  border-regal-teal border-opacity-50 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue"
              id="contact" type="text" placeholder="" >
          </div>
          <!-- </div> -->

          <div class="flex flex-wrap -mx-3 mb-6">


            <div class="w-full lg:w-full px-3">
              <label class="flex justify-start  text-regal-teal text-sm font-medium mb-2" for="nationality">
                Reason 
              </label>
              <textarea
                class="appearance-none block w-full h-36 bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-regal-blue"
                id="nationality" type="text" placeholder="" ></textarea>
            </div>
          </div>
        
          
        </form>
      </div>
      <div class="mt-8 py-3 px-3 flex justify-center mb-4">
            <button class="newbutton">
              Create Appointment
            </button>
          </div>

    </section>
    </div>
</template>

<script>
import Nav from "../components/Nav.vue";
    export default {
        components:{
            Nav
        }
    }
</script>

<style scoped>

</style>