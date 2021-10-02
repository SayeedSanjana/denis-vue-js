<template>
    <div>
        <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"></script> -->


  <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen  p-6 relative mx-auto my-auto rounded-xl   bg-white">
 <div class=" inset-0 w-full flex  items-center justify-center"> 
    <div class="bg-white rounded-lg  p-4" x-data="app()">
        <div class="font-thin px-2 pb-4 text-lg">Enter your pin code</div>
        <div class="flex">
            <!-- <div v-for="(l,i) in pinlength" :key="i" > -->
            <input v-model="pin0" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test" maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward()" type="password" >
               <input v-model="pin1" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test"  maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward()" type="password">
                  <input v-model="pin2" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test"  maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward()" type="password" >
                    <input v-model="pin3" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl test"  maxlength="1" max="9" min="0" inputmode="decimal"  type="password">
                     
           <!-- </div> -->
        </div>
    </div>
 </div> 
  <div>
         <button @click="validate">Submit</button></div>
    </div>
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
            //    if(!elt.nextElementSibling){
            //      break;
            //    }
              // Focus on the next sibling
              console.log(elt.nextElementSibling)
             elt.nextElementSibling.focus()
            console.log(elt)        
           }
  });
})
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