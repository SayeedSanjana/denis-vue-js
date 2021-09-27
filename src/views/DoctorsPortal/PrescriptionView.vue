<template>
    <div>
<!-- <div hidden>{{this.parseJwt(token)}}</div> -->
        <section class="max-w-4xl p-6 pt-0 mx-auto bg-white rounded-md  dark:bg-gray-800">
         <!-- <div>
            <PrescriptionList />
           </div> -->
<div class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto ">
    <div class="flex flex-row w-full px-2 mb-20">
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

     <div class="lg:flex mb-8 items-start justify-between">
         <div class="lg:w-1/3 text-left"> <span class="mr-1 font-semibold text-gray-500">Name: </span><span class="border-b border-gray-300" >{{this.name}}</span></div>
          <div class="lg:w-1/3 text-left"><span class="mr-1 font-semibold text-gray-500">Age: </span><span class="border-b border-gray-300">{{this.age}}years</span></div>
           <div class="lg:w-1/3 text-left"> <span class="mr-1 font-semibold text-gray-500">Gender: </span><span class="border-b border-gray-300">{{this.gender}}</span> </div>
     </div>
          <div class=" mb-16">
         <hr>
     </div>
     <div class="flex justify-between">
     <div class="px-2 mb-6 lg:w-1/2  ">

      <div class="">
           <div class="font-semibold text-gray-600 mb-4 flex items-start"><span class="border-b border-gray-400">C/C:</span></div>
           <div class='flex items-start'><p class="leading-relaxed   " > <pre class="text-left">{{this.formData.cc}}</pre></p></div>
      </div>
     </div>
      <div class="px-2 mb-6 lg:w-1/2">

      <div>
           <div class="font-semibold text-gray-600 mb-4  flex items-start"><span class="border-b border-gray-400">O/E:</span></div>
           <div class='flex items-start'><p class="leading-relaxed  " > <pre class="text-left">{{this.formData.oe}}</pre></p></div>
      </div>
     </div>
     </div>
     
     

      <div class="flex justify-between">
     <div class="px-2 mb-6 lg:w-1/2  ">

      <div class="">
           <div class="font-semibold text-gray-600 mb-4 flex items-start"><span class="border-b border-gray-400">Treatment Plan:</span></div>
           <div class='flex items-start'><p class="leading-relaxed " > <pre class="text-left">{{this.formData.treatmentPlan}}</pre></p></div>
      </div>
     </div>
      <div class="px-2 mb-6 lg:w-1/2">

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
        
              <table class="w-full mb-5 bg-gray-200 text-gray-800 table-auto  ">
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
     
    <!-- <div class="flex flex-wrap items-start">
     <div>
         <svg class="w-6 h-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 210 210" style="enable-background:new 0 0 210 210;" xml:space="preserve">
<path d="M11.842,145.349v30h38.329v-65.605H76.47c1.879,0,3.722-0.051,5.53-0.152l28.328,35.483L77.136,180H57.789v30h32.222
    l39.212-41.26l32.94,41.26h35.995v-30h-21.558l-26.515-33.211l28.655-30.152h19.417v-30h-32.292l-34.675,36.485l-17.733-22.212
    c15.95-9.269,25.018-25.423,25.018-46.515C138.476,20.843,114.717,0,76.47,0H38.842H20.171h-8.329v30h8.329v115.349H11.842z
     M50.171,30H76.47c32.006,0,32.006,18.361,32.006,24.396c0,5.555-0.002,21.166-22.266,24.652c-3.483,0.342-6.495,0.593-9.74,0.593
    H50.171V30z"/>
</svg>
</div>

     <div v-for="med in formData.medicine" :key="med" class="xl:w-full lg:w-full md:w-full px-8 py-6 border-opacity-60 ">

       <div class="flex">
         <div class="mr-2">

         <svg class="w-4 h-6 border-b-4 border-indigo-500" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
    <g>
        <path d="M443.393,259.503l29.041-29.041c52.753-52.753,52.759-138.138,0-190.896c-52.751-52.752-138.137-52.759-190.895,0
            C270.279,50.824,49.78,271.325,39.567,281.538c-52.753,52.753-52.759,138.138,0,190.896c52.751,52.752,138.137,52.759,190.895,0
            l29.042-29.041c23.216,40.911,67.177,68.577,117.482,68.577c74.43,0,134.984-60.554,134.984-134.984
            C511.97,326.68,484.305,282.719,443.393,259.503z M242.002,376.985c0,12.635,1.75,24.869,5.011,36.477l-37.761,37.761
            c-41.029,41.028-107.44,41.034-148.474,0c-41.029-41.028-41.035-107.44,0-148.474l109.465-109.465l100.512,100.511
            C252.75,316.736,242.002,345.629,242.002,376.985z M361.987,480.897c-50.811-7.3-89.989-51.113-89.989-103.912
            c0-52.799,39.178-96.612,89.989-103.912V480.897z M291.766,272.386L191.453,172.073L302.749,60.777
            c41.029-41.028,107.44-41.034,148.474,0c41.029,41.028,41.035,107.44,0,148.474l-37.761,37.761
            c-11.608-3.262-23.841-5.011-36.476-5.011C344.696,242.001,315.022,253.404,291.766,272.386z M391.984,480.897V273.074
            c50.811,7.3,89.989,51.113,89.989,103.912C481.973,429.784,442.795,473.597,391.984,480.897z"/>
    </g>
</g>

</svg>
         </div>
         <div>

        <h2 class="text-md sm:text-xl text-gray-700 font-medium text-relaxed mb-2">{{med.name}}<span class="text-sm text-gray-500 font-semibold ml-3 mr-3"> - {{med.duration}}</span></h2>
         </div>

       </div>
       <div class="flex items-start">
        <p class="leading-relaxed text-base "> <span class="font-semibold">{{med.frequency}}</span> - <span >{{med.relationWithMeals}}</span></p>
       </div>
       <hr>

      </div>
     

     
     
    </div> -->
     
      <div class="px-2 mb-6 ">

      <div>
           <div class="font-semibold text-gray-600 mb-4 flex items-start"> <span class="border-b border-gray-400"> Advice:</span></div>
           <div class='flex items-start'><p class="leading-relaxed " > <pre class="text-left">{{this.formData.advice}}</pre></p></div>
      </div>
     </div>
  
  </div>
</div>
      
        </section>

    </div>
</template>

<script>
import axios from "axios";
import moment from "moment"
//import PrescriptionList from "../DoctorsPortal/PrescriptionList.vue";
    export default {
      props:{
        //changecomponents:Boolean,
        presId: String
      },
    //   components:{
    //     PrescriptionList
    //   },
        created() {
      this.getPosts(this.presId);
      //this.parseJwt(this.token)
      //this.getUser(this.uid)
    },
    
    data() {
      return {
        userName:'',
         uid: '',
         user:'',
          //token: localStorage.getItem('token'),
        formData: {},
        name:'',
        dob:'',
        gender:'',
        date:''
        //  cc: '',
        //  oe: '',
        //  medicine : [],
        //  advice: '',
        //  treatmentPlan: '',       
     
        
      }
    },
      methods: {
        //    parseJwt(token) {
        //     var base64Url = token.split('.')[1];
        //     var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        //     var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        //         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        //     }).join(''));
        //     const payload = JSON.parse(jsonPayload);
        //     this.uid = payload.uid
        //     console.log(this.uid);
        //     return this.uid;
        // },
        //  getUser() {
        //     console.log(this.uid);
        //     axios.get('http://localhost:3000/api/users/search/' + this.uid, {
        //             headers: {
        //                 "Authorization": `Bearer ${localStorage.getItem('token') }`
        //             }
        //         })
        //         .then((response) => {
        //             this.user = response.data['result'];
        //             console.log(this.user)
        //            // this.userName=this.user.name
        //            // console.log(response.data['result']);
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
        // },
      async getPosts(id) {
        await axios.get('prescriptions/'+id , {headers:{"Authorization": `Bearer ${localStorage.getItem('token') }`}})
          .then((response) => {
            this.formData = response.data.result
            this.name=this.formData.patient.name
            //this.age=this.formData.patient.dob
            this.gender=this.formData.patient.gender
            //this.userName = this.formData.user.name
            console.log(this.name)
             const ageDifMs = Date.now() - new Date(this.formData.patient.dob.substring(0, 10)).getTime();
                        //console.log(ageDifMs);
                        const ageDate = new Date(ageDifMs);
                        this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
                        //console.log(this.formData.dob)
                        //this.calculateAge(this.formData.dob.substring(0,10))
                        this.date=this.formData.createdAt.substring(0,10)
                        this.date=moment(this.date).format('LL')
                        console.log(this.date)
          })
          .catch((error) => {
            console.log(error)
          })
      },
    }
    }
</script>

<style scoped>
</style>