<template>
    <div>
         
         <!--Modal Prescription-->
          
         <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
    <div class="absolute bg-black opacity-80 inset-0 z-0  "></div>
    <div class="w-full  lg:max-w-3xl max-w-lg  max-h-screen overflow-y-scroll p-6 relative mx-auto my-auto rounded-xl shadow-lg  bg-white">
      <!--content-->
      <div class="mt-5">
        <!--body-->
        <div class="text-center  flex-auto justify-center">
              
            <div class="flex justify-end">
            <button @click="removeModal">

            <svg class="w-4 h-4" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>
            </button>
            </div>
            <div class="flex justify-start px-10">
            <button @click="print" class="button" > Print And Save Prescription
            </button>
            </div>

            <!--main content-->
            <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  dark:bg-gray-800"   id="print">
         <!-- <div>
            <PrescriptionList />
           </div> -->
<div class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto ">
    <div class="flex flex-row w-full px-2 mb-10">
        <div class=" ">
        <div class="font-semibold px-0 flex items-start">
            Prescription Details
        </div>
        <div class="px-0  flex items-start">
           <span class="text-gray-600 ">Prescribed </span><span class="text-gray-400 ml-2">{{this.date}}</span>
        </div>
        <div class="px-0 flex items-start" >
           <span class="text-gray-600">Approved By </span><span class="text-indigo-500 text-lg ml-2">Dr. </span>
        </div>
        </div>
        
      
     </div>

     <div class="lg:flex mb-4items-start justify-between">
         <div class="lg:w-1/3 text-left"> <span class="mr-1 font-semibold text-gray-500">Name: </span><span class="border-b border-gray-300" >{{this.form1.name}}</span></div>
          <div class="lg:w-1/3 text-left"><span class="mr-1 font-semibold text-gray-500">Age: </span><span class="border-b border-gray-300">{{this.age}}years</span></div>
           <div class="lg:w-1/3 text-left"> <span class="mr-1 font-semibold text-gray-500">Gender: </span><span class="border-b border-gray-300">{{this.form1.gender}}</span> </div>
     </div>
          <div class=" mt-5 mb-5">
         <hr>
     </div>
     <div class="flex justify-between">
     <div class="px-2 mb-4 lg:w-1/2  ">

      <div class="">
           <div class="font-semibold text-gray-600 mb-4 flex items-start"><span class="border-b border-gray-400">C/C:</span></div>
           <div class='flex items-start'><p class="leading-relaxed   " > <pre class="text-left">{{this.formData.cc}}</pre></p></div>
      </div>
     </div>
      <div class="px-2 mb-4 lg:w-1/2">

      <div>
           <div class="font-semibold text-gray-600 mb-4  flex items-start"><span class="border-b border-gray-400">O/E:</span></div>
           <div class='flex items-start'><p class="leading-relaxed  " > <pre class="text-left">{{this.formData.oe}}</pre></p></div>
      </div>
     </div>
     </div>
     
     

      <div class="flex justify-between">
     <div class="px-2 mb-4 lg:w-1/2  ">

      <div class="">
           <div class="font-semibold text-gray-600 mb-4 flex items-start"><span class="border-b border-gray-400">Treatment Plan:</span></div>
           <div class='flex items-start'><p class="leading-relaxed " > <pre class="text-left">{{this.formData.treatmentPlan}}</pre></p></div>
      </div>
     </div>
      <div class="px-2 mb-4 lg:w-1/2">

      <div>
           <div class="font-semibold text-gray-600 mb-4  flex items-start"><span class="border-b border-gray-400">Investigation:</span></div>
           <div class=' flex items-start'><p class="leading-relaxed " > <pre class="text-left">{{this.formData.investigation}}</pre></p></div>
      </div>
     </div>
     </div>

     <div >

         <div class="mt-5 mb-5">
          <svg class="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 210 210" style="enable-background:new 0 0 210 210;" xml:space="preserve">
<path d="M11.842,145.349v30h38.329v-65.605H76.47c1.879,0,3.722-0.051,5.53-0.152l28.328,35.483L77.136,180H57.789v30h32.222
    l39.212-41.26l32.94,41.26h35.995v-30h-21.558l-26.515-33.211l28.655-30.152h19.417v-30h-32.292l-34.675,36.485l-17.733-22.212
    c15.95-9.269,25.018-25.423,25.018-46.515C138.476,20.843,114.717,0,76.47,0H38.842H20.171h-8.329v30h8.329v115.349H11.842z
     M50.171,30H76.47c32.006,0,32.006,18.361,32.006,24.396c0,5.555-0.002,21.166-22.266,24.652c-3.483,0.342-6.495,0.593-9.74,0.593
    H50.171V30z"/>
</svg>
         </div>
        
              <table class="w-full mb-10 bg-gray-200 text-gray-800 table-auto  ">
                  <thead class="text-center text-gray-800 border-b-2 border-gray-300 text-sm">
                      <th class="px-4 py-3">Category</th>
                      <th class="px-4 py-3">Name</th>
                      <th class="px-4 py-3">Duration</th>
                      <th class="px-4 py-3">Frequency</th>
                      <th class="px-4 py-3">Relation with Meals</th>
                    
                  </thead>

                   <tbody class="" >
                  <tr class="bg-white  border border-gray-300 hover:bg-gray-100"
                    v-for="item in formData.medicine"  :key="item._id">
                      <td class="px-4 py-3">{{item.catagory}}</td>
                      <td class="px-4 py-3">{{item.name}}</td>
                      <td class="px-4 py-3">{{item.duration}}</td>
                      <td class="px-4 py-3">{{item.frequency}}</td>
                      <td class="px-4 py-3">{{item.relationWithMeals}}</td>
                      
                  </tr>
                   </tbody>


              </table>
             </div>
     
      <div class="px-2 mb-6 ">

      <div class="mt-8">
           <div class="font-semibold text-gray-600 mb-4 flex items-start"> <span class="border-b border-gray-400"> Advice:</span></div>
           <div class='flex items-start'><p class="leading-relaxed " > <pre class="text-left">{{this.formData.advice}}</pre></p></div>
      </div>
     </div>
  
  </div>
</div>
      
        </section>

            <!--main content--> 
        </div>
       
      </div>
    </div>
  </div>
           
         <!--Modal Prescription-->
    </div>
</template>

<script>
import axios from "axios"
import printJS from "print-js"
import swal from "sweetalert"

    export default {
        // created(){
        //     this.parseJwt(this.token)
        // },
       
        props:{
            formData:Object,
            date:String,
            openModal:Boolean,
            form1:Object,
            age:String
        },
        data(){
            return{
                uid:'',
                token: localStorage.getItem('token'),
                name:'',
                dob:'',
                gender:'',
                 
            }
        },
        
        methods:{
             
        //    parseJwt(token) {
        //     var base64Url = token.split('.')[1];
        //     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        //     var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (c) {
        //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        //     }).join(''));
        //     const payload = JSON.parse(jsonPayload);
        //     this.uid = payload.sub
        //     console.log(this.uid);
            
        //     //return this.uid;
        // },
            removeModal(){
                   this.$emit("myEvent")
            },
           async print(){
               //this.formData.user=this.uid
                await axios.post('prescriptions/create', this.formData , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
                    .then((response) => {
                        console.log(response)
                       
                        const id=this.$route.params.id
                          
                    swal({title: "Success", text: "Prescription created Successfully!", icon: 
                    "success" , timer: 9000, buttons: false}
                      ).then(function(){
                          new Promise(resolve => setTimeout(resolve, 2000));
                          window.location = `/patient-details1/${id}`;
                    })
                    
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                   
               
                printJS({
                    printable:"print",
                    type:'html',
                    targetStyles:['*'],
                    style:['*'],
                    maxWidth:800,
                    gridStyle:'border: 1px solid lightgray; margin-bottom: -1px;'
                    
                })

            }
        },    
    }
</script>

<style lang="scss" scoped>

</style>