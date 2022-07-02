<template>
  <div>
    <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
      <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen  p-6 relative mx-auto my-auto rounded-xl bg-white ">
        <div class="flex justify-end">
          <button @click="closeModal">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
                fill="#f44336" />
              <path
                d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0"
                fill="#fafafa" /></svg>
          </button>
        </div>

        <div class=" inset-0 w-full flex  items-center justify-center">
          <div class="bg-white rounded-lg  p-4">
            <div class="font-thin pr-24 pb-4 text-lg">Ask admin for the pin code</div>
            <div class="flex justify-between">
              <div class="flex">
                <input v-model="this.pinno" @keypress="onChange()"
                  class=" border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test" maxlength="4"
                  max="4" min="0" inputmode="decimal" type="password">
              </div>
              <div class="flex items-center ml-3 mr-3">
                <div class="ml-3">
                  <button @click="validate"
                    class="p-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <small class="text-regal-red mb-2 text-center mr-24">{{this.err}}</small>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  import axios from "axios"
  import swal from 'sweetalert';
  export default {
    props: {
      pin: Number,
      formData: Object
    },
    data() {
      return {
        pinlength: 4,
        pinno: '',
        err: ''
      }
    },
    methods: {

      closeModal() {
        this.$emit("closeModal")
      },
      onChange(){
        this.err=""
      },
      async validate() {
        var code = this.pinno
        console.log("pinnumber");
        // console.log(typeof (this.pin))
        code = parseInt(code)
        console.log(typeof (code))
        
        if (code === this.pin) {
          await axios.post(import.meta.env.VITE_LOCAL+'users/signup', this.formData)
            .then((response) => {
              this.err=""
              swal({
                title: "Success",
                text: "Doctor created Successfully!",
                icon: "success",
                timer: 1000,
                buttons: false
              })
              console.log(response)
              this.$router.push('/');
            })
            .catch((error) => {
              this.err="Something went wrong.Please try again!"
              console.log(error)
            })
        } else {
          this.err = "Pin number doesnot match"
        }

      }
    }

  }
</script>

<style lang="scss" scoped>

</style>