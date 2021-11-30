<template>
    <div>
       <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[0]}}</h1>
            </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
              <div class="flex flex-nowrap " v-if="this.list1.length>=1">
                <div class="inline-block px-3" v-for="i in list1" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" >
             <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
            <span class="font-medium">No Appointment For Today</span>
            </div>
           </div>
        </div>
        </div>
     <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">{{this.dateArr[1]}}</h1>
            </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
              <div class="flex flex-nowrap" v-if="this.list2.length>=1">
                <div class="inline-block px-3" v-for="i in list2" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" >
             <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
            <span class="font-medium">No Appointment For Today</span>
            </div>
           </div>
        </div>
        </div>
       <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">
                 {{this.dateArr[2]}}
                </h1>
                 </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
              <div class="flex flex-nowrap " v-if="this.list3.length>=1">
                <div class="inline-block px-3" v-for="i in list3" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" >
             <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
            <span class="font-medium">No Appointment For Today</span>
            </div>
           </div>
        </div>
        </div>
        <div class="flex border-b border-regal-blue border-opacity-30" v-show="this.list4">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">    
                 {{this.dateArr[3]}}
                </h1>
                 </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
              <div class="flex flex-nowrap" v-if="this.list4.length>=1">
                <div class="inline-block px-3" v-for="i in list4" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" >
             <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
            <span class="font-medium">No Appointment For Today</span>
            </div>
           </div>
        </div>
        </div>
      <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">              
                 {{this.dateArr[4]}}
                </h1>
                 </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
              <div class="flex flex-nowrap" v-if="this.list5.length>=1">
                <div class="inline-block px-3" v-for="i in list5" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" >
             <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
            <span class="font-medium">No Appointment For Today</span>
            </div>
           </div>
        </div>
        </div>
       <div class="flex border-b border-regal-blue border-opacity-30" v-show="this.list6.length>=1">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">
                
                 {{this.dateArr[5]}}
                </h1>
                 </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6">
              <div class="flex flex-nowrap" v-if="this.list6.length>=1">
                <div class="inline-block px-3" v-for="i in list6" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert" >
             <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <div>
            <span class="font-medium">No Appointment For Today</span>
            </div>
           </div>
        </div>
        </div>
       <div class="flex border-b border-regal-blue border-opacity-30">
            <div class="font-semibold text-xl py-16 -ml-12 text-regal-teal w-1/6 ">
            <h1 class="ml-36">
                
                 {{this.dateArr[6]}}
                </h1>
                 </div>
             <div class="flex overflow-x-scroll pb-5 ml-24 hide-scroll-bar w-5/6 ">
              <div class="flex flex-nowrap" v-if="this.list7.length>=1">
                <div class="inline-block px-3" v-for="i in list7" :key="i">
                    <div class="text-regal-teal text-left mt-12 px-3 w-64 h-32 max-w-xs overflow-hidden  rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
                             <div class="text-xs mt-6">
                              Visiting time: {{i.start_time}}-{{i.end_time}}
                            </div>
                          </div>
                            <div class="mt-7 ml-2 w-1/3 ">
                               <div class="border text-xs  rounded-full  px-0.5  py-0.5 text-white focus:outline-none appearance-none text-center "   :class="[(i.status === 'Scheduled' ? ' bg-regal-scheduled border-regal-scheduled' : ''),  (i.status === 'Cancelled'? 'bg-regal-cancelled border-regal-cancelled' : ''), (i.status === 'Examined' ? 'bg-regal-examined border-regal-examined text-regal-teal' : ''),(i.status === 'Delayed' ? 'bg-regal-delay border-regal-delay text-regal-brown' : '')]">{{i.status}}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="text-center text-regal-cancelled" >
             <!-- <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg> -->
            <span class="font-medium">No Appointment For Today</span>
            
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
                    //   let lastIndex = nextDate.lastIndexOf(" ");
                    //   nextDate = nextDate.substring(0, lastIndex);
                    //   lastIndex = nextDate.lastIndexOf(" ");
                    //   nextDate = nextDate.substring(0, lastIndex);    
                      this.dateArr.push(nextDate)
                }

                // for (let i = 0; i < dateArr.length; i++) {
                    
                //     console.log( new Date(dateArr[i]));
                    // console.log(new Date(nextDate));
                },
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