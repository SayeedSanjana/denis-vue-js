<template >
<!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="bg-regal-white h-screen ">
            <p class="caheadername ml-52">Create New Appointment </p>
        <section class="max-w-4xl md:p-6 p-3 mx-auto   ">

      <div class="flex items-center justify-center p-6 mx-24 my-4 bg-white  ">
        <form  class="w-full max-w-lg ">
             <p class=" caheadername -my-1 ">Patient Information </p>

          <div class="w-full lg:w-full ">
            <label class="calabel mt-8" >
               Name 
            </label>
            <input
              class="cainput py-2 px-4 mb-4"
              id="name" type="text"  >

          </div>
          

          <div class="flex lg:w-full">
            
          
          <div class=" lg:w-3/5  ">
            <label class="calabel" for="dob">
              Date Of Birth 
            </label>
            <input 
              class="cainput py-2 px-4 mb-6"
              id="dob" type="date"  >

          </div>
          <div class=" lg:w-2/5 ml-4 ">
            <label class="calabel" for="gender">
              Gender 
            </label>
           <div class="relative">
                      <select
                        class=" cainput py-2.5 px-2 mb-7 "
                        id="gender">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
          </div>
          </div>
         
          <div class="w-full lg:w-full ">
            <label class="calabel" for="contact">
              Contact Number 
            </label>
            <input
              class="cainput py-2 px-4 mb-7 "
              id="contact" type="text"  >
          </div>
          <!-- </div> -->

          <div class="flex flex-wrap -mx-3 mb-28">


            <div class="w-full lg:w-full px-3">
              <label class="calabel" for="">
                Reason 
              </label>
              <textarea
                class="cainput h-36  py-3 px-4 "
                id="nationality" type="text" placeholder="" ></textarea>
            </div>
          </div>
        
          
        </form>
      </div>
      <div class="mt-4 py-3 px-3 flex justify-center mb-4">
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