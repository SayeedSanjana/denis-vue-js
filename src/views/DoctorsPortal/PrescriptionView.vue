<template>
    <div>
<!-- <div hidden>{{this.parseJwt(this.token)}}</div> -->
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
  
     
      <div class="px-2 mb-6 ">

      <div>
           <div class="font-semibold text-gray-600 mb-4 flex items-start"> <span class="border-b border-gray-400"> Advice:</span></div>
           <div class='flex items-start'><p class="leading-relaxed " > <pre class="text-left">{{this.formData.advice}}</pre></p></div>
      </div>
     </div>

    <div class="flex justify-center mt-20">
     <div class="flex justify-between px-10 ">
            <button @click="print" class=" inline-flex border rounded-md border-indigo-500 text-indigo-500 pl-2 pr-2 text-center p-2 m-2 font-bold text-xs hover:text-white hover:bg-indigo-500" >
              <svg class="w-4 h-4 mr-2 fill-current text-indigo-500" height="457pt" viewBox="-15 0 457 457.14286" width="457pt" xmlns="http://www.w3.org/2000/svg"><path d="m388.210938 148.9375c-.457032-.367188-1.003907-.644531-1.554688-.914062-.550781-.183594-1.097656-.367188-1.738281-.460938-1.734375-.367188-3.566407-.183594-5.210938.460938-1.1875.453124-2.195312 1.1875-3.019531 2.007812-1.644531 1.648438-2.648438 4.023438-2.648438 6.492188 0 2.378906 1.003907 4.753906 2.648438 6.402343.824219.914063 1.832031 1.550781 3.019531 2.011719 1.097657.457031 2.285157.726562 3.476563.726562.542968 0 1.1875-.089843 1.734375-.183593.640625-.179688 1.1875-.359375 1.738281-.542969.550781-.277344 1.097656-.550781 1.554688-.824219.546874-.367187 1.003906-.734375 1.464843-1.1875 1.640625-1.648437 2.648438-4.023437 2.648438-6.402343 0-2.46875-1.007813-4.753907-2.648438-6.492188-.460937-.457031-.917969-.820312-1.464843-1.09375zm0 0"/><path d="m351.820312 152.960938c-.277343-.550782-.546874-1.011719-.820312-1.554688-.367188-.460938-.730469-.914062-1.191406-1.375-2.558594-2.558594-6.582032-3.378906-9.964844-2.007812-1.097656.453124-2.101562 1.1875-2.925781 2.007812-1.734375 1.738281-2.742188 4.023438-2.742188 6.492188 0 1.191406.273438 2.378906.730469 3.476562.460938 1.09375 1.097656 2.101562 2.011719 2.925781.824219.914063 1.828125 1.550781 2.925781 2.011719 1.097656.457031 2.285156.726562 3.566406.726562 2.375 0 4.753906-1.003906 6.398438-2.738281.914062-.824219 1.558594-1.832031 2.011718-2.925781.457032-1.097656.734376-2.285156.734376-3.476562 0-.640626-.09375-1.1875-.183594-1.828126-.183594-.546874-.367188-1.1875-.550782-1.734374zm0 0"/><path d="m402.820312 104.210938h-60.980468v-95.066407c0-5.050781-4.09375-9.144531-9.144532-9.144531h-238.042968c-5.050782 0-9.144532 4.09375-9.144532 9.144531v95.066407h-60.980468c-13.488282 0-24.4570315 10.96875-24.4570315 24.453124v197.472657c0 13.488281 10.9687495 24.457031 24.4570315 24.457031h60.980468v97.40625c0 5.050781 4.09375 9.144531 9.144532 9.144531h238.042968c5.050782 0 9.144532-4.09375 9.144532-9.144531v-97.40625h60.980468c13.488282 0 24.457032-10.96875 24.457032-24.457031v-197.472657c0-13.484374-10.96875-24.453124-24.457032-24.453124zm-299.027343-85.925782h219.761719v85.925782h-219.761719zm0 420.570313v-174.945313h219.761719v174.945313zm305.199219-112.71875c0 3.402343-2.769532 6.171875-6.171876 6.171875h-60.980468v-68.398438h28.6875c5.046875 0 9.140625-4.09375 9.140625-9.140625 0-5.050781-4.09375-9.144531-9.140625-9.144531h-313.707032c-5.046874 0-9.140624 4.09375-9.140624 9.144531 0 5.046875 4.09375 9.140625 9.140624 9.140625h28.6875v68.398438h-60.980468c-3.402344 0-6.171875-2.769532-6.171875-6.171875v-197.472657c0-3.402343 2.769531-6.167968 6.171875-6.167968h378.292968c3.402344 0 6.171876 2.765625 6.171876 6.167968zm0 0"/><path d="m133.4375 314.277344h110.09375c5.050781 0 9.144531-4.09375 9.144531-9.144532 0-5.046874-4.09375-9.140624-9.144531-9.140624h-110.09375c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532zm0 0"/><path d="m293.910156 342.242188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0"/><path d="m293.910156 388.492188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0"/></svg>
               Print Medication And Advice
            </button>
           <button @click="print" class=" inline-flex border rounded-md border-indigo-500 text-indigo-500 pl-2 pr-2 text-center p-2 m-2 font-bold text-xs hover:text-white hover:bg-indigo-500" >
              <svg class="w-4 h-4 mr-2 fill-current text-indigo-500" height="457pt" viewBox="-15 0 457 457.14286" width="457pt" xmlns="http://www.w3.org/2000/svg"><path d="m388.210938 148.9375c-.457032-.367188-1.003907-.644531-1.554688-.914062-.550781-.183594-1.097656-.367188-1.738281-.460938-1.734375-.367188-3.566407-.183594-5.210938.460938-1.1875.453124-2.195312 1.1875-3.019531 2.007812-1.644531 1.648438-2.648438 4.023438-2.648438 6.492188 0 2.378906 1.003907 4.753906 2.648438 6.402343.824219.914063 1.832031 1.550781 3.019531 2.011719 1.097657.457031 2.285157.726562 3.476563.726562.542968 0 1.1875-.089843 1.734375-.183593.640625-.179688 1.1875-.359375 1.738281-.542969.550781-.277344 1.097656-.550781 1.554688-.824219.546874-.367187 1.003906-.734375 1.464843-1.1875 1.640625-1.648437 2.648438-4.023437 2.648438-6.402343 0-2.46875-1.007813-4.753907-2.648438-6.492188-.460937-.457031-.917969-.820312-1.464843-1.09375zm0 0"/><path d="m351.820312 152.960938c-.277343-.550782-.546874-1.011719-.820312-1.554688-.367188-.460938-.730469-.914062-1.191406-1.375-2.558594-2.558594-6.582032-3.378906-9.964844-2.007812-1.097656.453124-2.101562 1.1875-2.925781 2.007812-1.734375 1.738281-2.742188 4.023438-2.742188 6.492188 0 1.191406.273438 2.378906.730469 3.476562.460938 1.09375 1.097656 2.101562 2.011719 2.925781.824219.914063 1.828125 1.550781 2.925781 2.011719 1.097656.457031 2.285156.726562 3.566406.726562 2.375 0 4.753906-1.003906 6.398438-2.738281.914062-.824219 1.558594-1.832031 2.011718-2.925781.457032-1.097656.734376-2.285156.734376-3.476562 0-.640626-.09375-1.1875-.183594-1.828126-.183594-.546874-.367188-1.1875-.550782-1.734374zm0 0"/><path d="m402.820312 104.210938h-60.980468v-95.066407c0-5.050781-4.09375-9.144531-9.144532-9.144531h-238.042968c-5.050782 0-9.144532 4.09375-9.144532 9.144531v95.066407h-60.980468c-13.488282 0-24.4570315 10.96875-24.4570315 24.453124v197.472657c0 13.488281 10.9687495 24.457031 24.4570315 24.457031h60.980468v97.40625c0 5.050781 4.09375 9.144531 9.144532 9.144531h238.042968c5.050782 0 9.144532-4.09375 9.144532-9.144531v-97.40625h60.980468c13.488282 0 24.457032-10.96875 24.457032-24.457031v-197.472657c0-13.484374-10.96875-24.453124-24.457032-24.453124zm-299.027343-85.925782h219.761719v85.925782h-219.761719zm0 420.570313v-174.945313h219.761719v174.945313zm305.199219-112.71875c0 3.402343-2.769532 6.171875-6.171876 6.171875h-60.980468v-68.398438h28.6875c5.046875 0 9.140625-4.09375 9.140625-9.140625 0-5.050781-4.09375-9.144531-9.140625-9.144531h-313.707032c-5.046874 0-9.140624 4.09375-9.140624 9.144531 0 5.046875 4.09375 9.140625 9.140624 9.140625h28.6875v68.398438h-60.980468c-3.402344 0-6.171875-2.769532-6.171875-6.171875v-197.472657c0-3.402343 2.769531-6.167968 6.171875-6.167968h378.292968c3.402344 0 6.171876 2.765625 6.171876 6.167968zm0 0"/><path d="m133.4375 314.277344h110.09375c5.050781 0 9.144531-4.09375 9.144531-9.144532 0-5.046874-4.09375-9.140624-9.144531-9.140624h-110.09375c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532zm0 0"/><path d="m293.910156 342.242188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0"/><path d="m293.910156 388.492188h-160.472656c-5.050781 0-9.144531 4.09375-9.144531 9.140624 0 5.050782 4.09375 9.144532 9.144531 9.144532h160.472656c5.050782 0 9.144532-4.09375 9.144532-9.144532 0-5.046874-4.09375-9.140624-9.144532-9.140624zm0 0"/></svg>
               Print Full Prescription
            </button>
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
      
        presId: String
      },
   
        created() {
      this.getPosts(this.presId);
      this.parseJwt(this.token)
      //this.getUser(this.uid)
    },
    
    data() {
      return {
        userName:'',
         uid: '',
         user:'',
        token: localStorage.getItem('token'),
        formData: {},
        name:'',
        dob:'',
        gender:'',
        date:'',
        age:''
        //  cc: '',
        //  oe: '',
        //  medicine : [],
        //  advice: '',
        //  treatmentPlan: '',       
     
        
      }
    },
      methods: {
           parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            const payload = JSON.parse(jsonPayload);
            this.uid = payload.sub
            console.log(this.uid);
            
            //return this.uid;
        },
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
            this.gender=this.formData.patient.gender
            //this.userName = this.formData.user.name
            console.log(this.name)
             const ageDifMs = Date.now() - new Date(this.formData.patient.dob.substring(0, 10)).getTime();
                    
                        const ageDate = new Date(ageDifMs);
                        this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
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