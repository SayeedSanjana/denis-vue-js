<template>
  <section class="text-gray-600 body-font mx-10 ml-8 mb-4">
    <div class="mt-4 bg-gradient-to-b from-regal-teal via-regal-cyan to-regal-cyan-teal opacity-95 px-8 py-16">

    </div>
    <div class="container  px-5 py-16  bg-white  ">
      <div class="flex flex-wrap relative -mt-40 overflow-y-scroll h-zxl no-scrollbar " >
        <!-- 1 -->
        <div  v-for="pat in appointmentList" :key="pat._id" class="">
        <div class=" p-2 lg:w-1/3  w-full">
          <div class="ml-14 w-72 h-44  bg-white border border-gray-200 rounded-lg shadow-md">
            <div class="flex justify-between  ">
              <div class="ml-3 ">

                <h1 class="flex justify-start text-xs text-regal-teal font-semibold mb-1 mt-2">{{pat.name}}</h1>
                <h1 class="flex justify-start text-xs text-regal-cyan-teal font-semibold mb-1 ">{{pat.dob}} years, {{pat.gender}}</h1>
                <h1 class="flex justify-start text-xs text-regal-cyan-teal font-semibold mb-12 ">{{pat.phone}}</h1>
                <h1 class="flex justify-start text-xs text-regal-teal font-semibold mb-2 ">Date: <span
                    class="ml-1 text-regal-lightblue">{{pat.date}}</span> </h1>
                <h1 class="flex justify-start text-xs text-regal-teal font-semibold  ">Time: <span
                    class="ml-1 text-regal-lightblue">{{pat.startTime}}-{{pat.endTime}}</span> </h1>


              </div>
              <div class="mr-3">
                <h1 class="text-xs font-semibold mb-2 mt-2" :class="['text-regal-examined', (pat.status === 'Scheduled' ? 'text-regal-scheduled' : 'text-regal-examined'), (pat.status === 'Cancelled'  ? 'text-regal-cancelled' : 'text-regal-examined')]">{{pat.status}}</h1>
              </div>


            </div>
          </div>
        </div>
        <!-- 1 -->
        </div>
        <!-- 2 -->

        
      </div>
    </div>
  </section>
</template>

<script>
  export default {
      created(){
         this.getSpecificDoctorAppointmentList()
      },
      //get the doctor id by pwd function
      data(){
          return{
              appointmentList:
[
    {
     name:'Iktisad Rashid',
     dob:'34',
     gender:'Male',
     appointmentID:'234567',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Examined',
     date:'2021/09/07'
    },
     {
     name:'Samee Sayeed',
     dob:'67',
     gender:'Male',
     appointmentID:'234566',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Scheduled',
     date:'2021/09/07'
    },
    {
     name:'Semonti Banik',
     dob:'12',
     gender:'Female',
     appointmentID:'234566',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Cancelled',
     date:'2021/09/07'
    },
     {
     name:'Boo Islam',
     dob:'1',
     gender:'Male',
     appointmentID:'234566',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Cancelled',
     date:'2021/09/07'
    },
     {
     name:'Boo Islam',
     dob:'2',
     gender:'Male',
     appointmentID:'234566',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Examined',
     date:'2021/09/07'
    },
     {
     name:'Boo Islam',
     dob:'3',
     gender:'Male',
     appointmentID:'234566',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Cancelled',
     date:'2021/09/07'
    },
     {
     name:'Boo Islam',
     dob:'4',
     gender:'Male',
     appointmentID:'234566',
     contact:'01701883412',
     startTime:'11:00AM',
     endTime:'12:00PM',
     complaint:'Surgery',
     status:'Cancelled',
     date:'2021/09/07'
    }
    ]
          }
      },
      methods:{
          getSpecificDoctorAppointmentList(){
            //    const ageDifMs = Date.now() - new Date(this.appointmentList.dob).getTime();
            //    const ageDate = new Date(ageDifMs);
            //    this.appointmentList.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
            //    console.log(this.appointmentList.dob)
          }
      }
  }
</script>

<style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
  }
</style>