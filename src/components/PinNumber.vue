<template>
    <div>
        <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script> -->


  <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen  p-6 relative mx-auto my-auto rounded-xl bg-white">
      <div class="flex justify-end">
            <button @click="closeModal">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
            </button>
            </div>

 <div class=" inset-0 w-full flex  items-center justify-center"> 
    <div class="bg-white rounded-lg  p-4">
        <div class="font-thin px-2 pb-4 text-lg">Enter your pin code</div>
        <div class="flex justify-between">
            <div class="flex"> 
            <input v-model="pin0" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test" maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward()" type="password" >
               <input v-model="pin1" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test"  maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward()" type="password">
                  <input v-model="pin2" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test"  maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward()" type="password" >
                    <input v-model="pin3" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test"  maxlength="1" max="9" min="0" inputmode="decimal"  type="password">
                     
           </div>
          <div class="flex items-center ml-3 mr-3">
         <button @click="validate" class=" border rounded-lg border-gray-700 bg-gray-700 h-8 w-8 flex justify-center items-center">
         <svg class="w-4 h-4 fill-current text-white " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
          <g>
            <g>
              <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
                c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
                v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
                c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
                l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/>
            </g>
          </g>
         </svg>
         </button>
         </div>
           
        </div>
        
         </div>
    </div>
 </div> 
  <!-- <div>
         <button @click="validate" class="text-indigo-500 font-bold hover:text-gray-500">Submit</button></div>
    </div> -->
  </div>



    </div>
</template>

<script>
import axios from "axios"
import swal from 'sweetalert';
    export default {
    props:{
       pin:String,
       formData:Object
    },
     data(){
         return{
             pinlength:4,
             pin0:'',
              pin1:'',
               pin2:'',
                pin3:'',
                
         }
     },
     methods:{
           stepForward() {
             
            var elts = document.getElementsByClassName('test')
      
            Array.from(elts).slice(0,3).forEach(function(elt){
            elt.addEventListener("keyup", function(event) {
              
          // Number 13 is the "Enter" key on the keyboard
          if (event.keyCode === 13 || elt.value.length == 1  ) {
           
              // Focus on the next sibling
              console.log(elt.nextElementSibling)
             elt.nextElementSibling.focus()
            console.log(elt)        
           }
  });
})
     },
     closeModal(){
        this.$emit("closeModal")
     },
    
    async validate(){
      
        var code=this.pin0.concat(this.pin1,this.pin2,this.pin3)
         console.log(typeof(this.pin))
       
        code=parseInt(code)
         console.log(typeof(code))
        if(code===this.pin){
                      await axios.post('users/signup' , this.formData)
                 .then((response) => {
                       swal({title: "Success", text: "Doctor created Successfully!", icon: 
                    "success" , timer: 1000, buttons: false})
                console.log(response)
                 this.$router.push('/');
           
          })
                 .catch((error) => {
                console.log(error)
                })

        }
     
    }
     }
        
    }
</script>

<style lang="scss" scoped>

</style>