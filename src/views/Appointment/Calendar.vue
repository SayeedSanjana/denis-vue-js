<template>
    <div>
      <!--show list for first day-->
       <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[0]}}</h1>
            </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
             <!-- if there exists appointment -->
              <div class="flex flex-nowrap " v-if="this.list1.length>=1">
                <div class="inline-block px-3" v-for="i in list1" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                       <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                           <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                           <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                           <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                        <div class="flex">
                          <div class="w-2/3 mb-2">
                             <div class="text-xs mt-6">Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If there exists no appointments -->
            <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>
        <!--show list for first day-->

         <!--show list for second  day-->
       <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[1]}}</h1>
            </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
             <!-- If there exists appointments -->
              <div class="flex flex-nowrap" v-if="this.list2.length>=1">
                <div class="inline-block px-3" v-for="i in list2" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                         <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                           <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                           <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                           <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                       <div class="flex">
                          <div class="w-2/3 mb-2">
                             <div class="text-xs mt-6">Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If there exists no appointments -->
            <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>
        <!--show list for second  day-->

        <!--show list for third  day-->
       <div class="flex border-b border-regal-blue border-opacity-30">
            <!-- show date starts -->
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[2]}}</h1>
            </div>
            <!-- show date ends -->
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
             <!-- If there exists appointment -->
              <div class="flex flex-nowrap " v-if="this.list3.length>=1">
                <div class="inline-block px-3" v-for="i in list3" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                         <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                           <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                           <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                           <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                       <div class="flex">
                          <div class="w-2/3 mb-2">
                             <div class="text-xs mt-6">Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If no appointment exists -->
            <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>
        <!--show list for third  day-->

        <!--show list for fourth day-->
        <div class="flex border-b border-regal-blue border-opacity-30" v-show="this.list4">
          <!-- show date starts -->
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36"> {{this.dateArr[3]}}</h1>
             </div>
             <!-- show date ends -->
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
             <!-- If there exists appointment -->
              <div class="flex flex-nowrap" v-if="this.list4.length>=1">
                <div class="inline-block px-3" v-for="i in list4" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                           <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                           <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                           <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                        <div class="flex">
                          <div class="w-2/3 mb-2">
                             <div class="text-xs mt-6"> Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If no appointment exists -->
            <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>

      <!-- show list for fifth day -->
      <div class="flex border-b border-regal-blue border-opacity-30">
         <!-- show date starts -->
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[4]}}</h1>
            </div>
            <!-- show date ends -->
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
             <!-- If there exists appointment -->
              <div class="flex flex-nowrap" v-if="this.list5.length>=1">
                <div class="inline-block px-3" v-for="i in list5" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                         <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                           <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                           <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                           <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                        <div class="flex">
                          <div class="w-2/3 mb-2">
                             <div class="text-xs mt-6">Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If there exists no appointment -->
           <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>
         <!-- show list for fifth day -->

        <!-- show list for sixth day -->
       <div class="flex border-b border-regal-blue border-opacity-30">
         <!-- show date starts -->
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[5]}}</h1>
            </div>
            <!-- show date ends -->
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
             <!-- If there exists appointment -->
              <div class="flex flex-nowrap" v-if="this.list6.length>=1">
                <div class="inline-block px-3" v-for="i in list6" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                           <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                           <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                           <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                        <div class="flex">
                          <div class="w-2/3 mb-2">
                            <div class="text-xs mt-6"> Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If there exists no appointment -->
            <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>

        <!-- show list for seventh day -->
       <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36"> {{this.dateArr[6]}}</h1>
            </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6 ">
             <!-- If there exists appointment -->
              <div class="flex flex-nowrap" v-if="this.list7.length>=1">
                <div class="inline-block px-3" v-for="i in list7" :key="i">
                    <div class="text-regal-teal text-left mt-6 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                         <div class="flex justify-between">
                        <div>
                          <h1 class="font-semibold mt-4">Patient A</h1>
                           <p class="text-sm mt-2">09876543212</p>
                        </div>
                        <div class="mt-4">
                          <svg width="4" height="20" viewBox="0 0 4 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="#005072"/>
                          <path d="M2 12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8C0.89543 8 0 8.89543 0 10C0 11.1046 0.89543 12 2 12Z" fill="#005072"/>
                          <path d="M2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16C0.89543 16 0 16.8954 0 18C0 19.1046 0.89543 20 2 20Z" fill="#005072"/>
                        </svg>
                        </div>
                        </div>
                       <div class="flex">
                          <div class="w-2/3 mb-2">
                             <div class="text-xs mt-6"> Visiting time: {{i.start_time}}-{{i.end_time}}</div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If no appointment exists -->
            <div v-else class="ml-3 flex justify-center bg-white  shadow-md rounded-lg p-4 mb-4 text-sm w-64 h-32 items-center mt-10 border border-gray-100" role="alert" >
            <svg class="w-8 h-8 mr-3" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C39.988 31.04 31.04 39.988 20 40ZM20 4C16.8355 4 13.7421 4.93838 11.1109 6.69649C8.47969 8.45459 6.42893 10.9534 5.21793 13.8771C4.00693 16.8007 3.69007 20.0177 4.30744 23.1214C4.9248 26.2251 6.44865 29.0761 8.68629 31.3137C10.9239 33.5513 13.7749 35.0752 16.8786 35.6926C19.9823 36.3099 23.1993 35.9931 26.1229 34.7821C29.0466 33.5711 31.5454 31.5203 33.3035 28.8891C35.0616 26.2579 36 23.1645 36 20C35.9952 15.758 34.308 11.6911 31.3084 8.69155C28.3089 5.692 24.242 4.00476 20 4ZM20 32C18.443 32.0263 16.9027 31.6765 15.51 30.9801C14.1172 30.2837 12.9131 29.2614 12 28C11.1002 26.7966 10.4228 25.4419 10 24H30V24.016C29.5706 25.4504 28.8938 26.7987 28 28C27.0868 29.2612 25.8827 30.2835 24.4899 30.9798C23.0972 31.6762 21.5569 32.0262 20 32ZM13 20C12.2044 20 11.4413 19.6839 10.8787 19.1213C10.3161 18.5587 10 17.7956 10 17C10 16.2044 10.3161 15.4413 10.8787 14.8787C11.4413 14.3161 12.2044 14 13 14C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20ZM26.986 19.972C26.1941 19.972 25.4346 19.6574 24.8746 19.0974C24.3146 18.5374 24 17.7779 24 16.986C24 16.1941 24.3146 15.4346 24.8746 14.8746C25.4346 14.3146 26.1941 14 26.986 14C27.7779 14 28.5374 14.3146 29.0974 14.8746C29.6574 15.4346 29.972 16.1941 29.972 16.986C29.972 17.7779 29.6574 18.5374 29.0974 19.0974C28.5374 19.6574 27.7779 19.972 26.986 19.972Z" fill="#BDD2CB"/>
            </svg>
            <div>
            <span class="font-semibold text-base text-regal-examined">No Appointments </span>
            </div>
           </div>
        </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
    export default {
        created() {
            this.date1(),
            this.parseJwt(this.token),
            this.getSpecificDoctorAppointment()
        },
        data(){
          return{
           dateArr:[],
           dateISO:[],
           AppointmentList:[],
           DoctorAppointment:[],
           token: localStorage.getItem('token'),
           uid: '',
           list1:[],
           list2:[],
           list3:[],
           list4:[],
           list5:[],
           list6:[],
           list7:[]
          }
        },
        methods: {
             parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
                    c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const payload = JSON.parse(jsonPayload);
                this.uid = payload.sub
                //console.log(payload.sub);
            },

            //getting seven date from the present date
            date1() {
                let date = new Date();
               // let dateArr = [];
                this.dateArr[0] = new Date().toISOString();
                this.dateISO[0]= this.dateArr[0]
                this.dateArr[0]=moment( this.dateArr[0]).format('DD MMM ddd')
                for (let i = 0; i < 6; i++) {
                    let nextDate = date.setDate(date.getDate() + 1)
                    nextDate=new Date(nextDate).toISOString()
                    this.dateISO.push(nextDate)
                    nextDate=moment(nextDate).format('DD MMM ddd');   
                      this.dateArr.push(nextDate)
                }
                },

            // get appointment list of the specific dotor
            async getSpecificDoctorAppointment(){
                     
               const response = await axios.get('appointments/search', {
                params: {
                 page:this.currentPage,
                 limit:this.perPage,
                // q: this.text
                },
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                }
                })
                this.AppointmentList = response.data['result'];
                this.AppointmentList.forEach(i => {
                    //console.log(i.doctor)
                    //console.log(this.uid)
                    if (i.doctor===this.uid){
                        this.DoctorAppointment.push(i)
                       //console.log(this.DoctorAppointment)   
                    }
                 });
                 this.DoctorAppointment.forEach(i => {
                     if (i.date.substring(0,10)===this.dateISO[0].substring(0,10)){
                        this.list1.push(i) 
                    }
                    if (i.date.substring(0,10)===this.dateISO[1].substring(0,10)){
                        this.list2.push(i) 
                    }
                    if (i.date.substring(0,10)===this.dateISO[2].substring(0,10)){
                        this.list3.push(i) 
                    }
                    if (i.date.substring(0,10)===this.dateISO[3].substring(0,10)){
                        this.list4.push(i) 
                    }
                    if (i.date.substring(0,10)===this.dateISO[4].substring(0,10)){
                        this.list5.push(i) 
                    }
                    if (i.date.substring(0,10)===this.dateISO[5].substring(0,10)){
                        this.list6.push(i) 
                    }
                    if (i.date.substring(0,10)===this.dateISO[6].substring(0,10)){
                        this.list6.push(i) 
                    }
                 });    
                }
            },           
        }

</script>

<style scoped>
    .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .hide-scroll-bar::-webkit-scrollbar {
        display: none;
    }
</style>