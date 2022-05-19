<script>
    export default {
        data(){
            return{
            cc:'',
            showInput:false,
            editField : false,
            heightAuto: false,
            maxlength:255

        }
        
    },
     
    mounted(){
        
        this.$nextTick(() => {
        this.$el.setAttribute("style", "height",
       `${this.$el.scrollHeight}px`);
    });
  },
    
    computed:{
        // showField(){
        //     // return (this.cc == '' || this.editField == cc)
        //     return this.cc.length>0
        // }
    },
    methods:{
        autoResize(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    },
        //  editInput(cc) {
        //      console.log(cc)
        //     this.showInput=true
        //     },
        focusField(){
            this.showInput = true;
            this.editField = true;
        },
        blurField(){
            
            this.showInput = false;
            this.editField = false;
        },
        change(){
            console.log(this.$refs.cc);
        }
        
    }
}
</script>

<template>
    <div class="mx-3 mt-3 bg-white "> 
        <div class="rounded-t-md w-full hover:overflow-hidden">
            <label for="" class="flex justify-between  bg-green-50 shadow-sm text-regal-teal text-xl font-semibold p-3">Prescription</label>
            <section class="flex justify-between p-8">
                <ul>
                    <li class="font-semibold text-sm text-left">
                        Dr. Muhammad Abdul Hussein
                    </li>
                    <hr>
                    
                    <li class="text-xs text-left">
                        BDS,BCS,MPH,NST Fellow MS (Conservative Dentistry), <br/>
                       PhD (USA), FICD (USA)DIrector (Dental Education) <br/>
                       Directorat General of medical Education
                    </li>
                    <li class="text-xs text-left">
                        <span class="text-xs font-semibold">BMDC No: </span>
                        <span class="text-sm">12345</span>
                    </li>
                    <li class="text-xs text-left">
                        <span class="text-xs font-semibold">Contact: </span>
                        <span class="">01236521458</span>
                    </li>
                    <li class=" text-xs text-left">
                        <span class="text-xs font-semibold">Email: </span>
                        <span class="">dr.xyz@mail.com</span>
                    </li>
                   
                </ul>
                <summary>
                    <p class="font-semibold text-sm">XYZ Hospital</p>
                    <p></p>
                </summary>
            </section>
        </div>

        <section class="bg-blue-100">
                      <!-- @keypress="this.editInput(this.cc)" v-focus -->
                <article class="flex w-full justify-between">
                    <div class="w-2/5 p-2 bg-gray-100">

                        <label class="block mb-2text-md font-medium text-regal-teal capitalize dark:text-white text-left">C/C</label>
                                                
                        <div class="">
                            <p
                            
                            class="text-left w-full px-4 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50  whitespace-pre-line break-all h-auto" 
                            v-show="!showInput" 
                            @click="focusField">
                                
                            <!-- @click="focusField('cc')"> -->
                                {{ cc ||'..............'}}
                            
                            </p>
                            <textarea :maxlength="this.maxlength"
                            @input="autoResize"
                            ref="cc"
                            class="w-full px-4 py-2 text-regal-teal bg-white border 
                            border-regal-teal border-opacity-50 focus:border-regal-blue rounded-md 
                            focus:outline-none overflow-hidden h-auto  whitespace-pre-line break-all "
                            placeholder="@example pain in the lower part of the gum" 
                            v-model="this.cc" 
                            v-show="showInput" 
                            id="cc" type="text" 
                            @focus="focusField" 
                            @blur="blurField"></textarea>
                            <span  v-show="showInput" class="flex justify-end text-gray-500 text-sm">{{this.cc.length}}/{{this.maxlength}}</span>
                            <button @click="change">submit</button>
                            
                        </div>

                    </div>

                    <!-- Rx -->
                    <div class="w-3/5 p-2">
                        <p class="w-full block bg-gray-300">Cheif Complaint</p>
                    </div>

                </article>
        </section>


    </div>
</template>

<style scoped>

</style>