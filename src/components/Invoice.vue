<template>
    <!--Modal Invoice-->
    <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
        
        <!-- modal start -->
        <div class="w-full lg:max-w-3xl max-w-lg relative mx-auto my-auto shadow-lg">  
         <!-- <div class="overflow-hidden overflow-y-scroll h-screen no-scrollbar">  -->
            <div class="flex justify-between mb-3 mt-2">
                <!-- print button -->
                <div id="no-print">
                    <button @click="print"
                        class="px-6 py-3 bg-regal-teal text-center border text-white font-semibold  rounded-md text-xs flex">Print
                        Invoice
                    </button>
                </div>

                <!-- cross button -->
                <div class="flex items-center">
                    <button @click="removeModalBill">
                        <svg class="w-5 h-5" height="512pt" viewBox="0 0 512 512" width="512pt"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336" />
                            <path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa" /></svg>
                    </button>
                </div>
            </div>
            
        <section id="print" class="bg-white font-sans">
                
            <!-- header start-->
            <header class="flex justify-between pb-4">
            <!-- Logo -->
                <img class="px-12 py-4" src="@/assets/svgs/mt-logo-V2.svg" alt="dental-center-logo.svg">  
                <p class="text-xs text-left py-5 mx-6 text-gray-900">Address: House No 12 (1st Floor), Road No 14 (New) <br> Dhanmondi, Dhaka-1209, Mobile: 01688-329552, 01817-094331, Email: mhkmusa@gmail.com</p>
            </header>
            <!-- header end -->
            
            <!-- body start-->
            <div class="container-2xl px-12 h-screen">                    
                <!-- patient info table starts-->
                <table class=" w-full">
                    <tr class="text-gray-900">
                        <td class="text-left ">
                            <label class="text-xs text-gray-900 font-semibold">Patient Name: <span class="text-xs font-normal text-gray-600">{{this.patientData.name}}</span> </label>                                
                        </td>
                        <td class="text-right">
                            <label class="text-gray-900  font-semibold text-xs">Invoice Number: <span class="font-normal text-gray-600">{{this.Bills._id.substring(this.Bills._id.length - 7)}}</span></label>
                        </td>
                    </tr>
                    <tr class="text-gray-900">
                        <td class="text-left">
                            <label class="text-gray-900 font-semibold text-xs">Contact Number: <span class="text-xs font-normal text-gray-600">{{this.patientData.phone}}</span></label>
                        </td>
                        <td class="text-right">
                            <label class="text-gray-900 font-semibold text-xs">Invoice Date: <span class="font-normal text-gray-600">{{this.date}}</span></label>
                        </td>                        
                    </tr>
                    <tr class="text-gray-900">
                        <td></td>
                        <td class="text-right">
                            <label class="text-gray-900 font-semibold text-xs">Patient ID: <span class="font-normal text-gray-600">P-{{this.id.substring(this.id.length - 7)}}</span></label>
                        </td>
                    </tr>
                </table>
                <!-- patient and billing info ends -->
                
                <!-- billing info table starts -->
                <div class="border-t-2 mt-8 border-b-2">
                    <table class="w-full">

                        <thead class="text-left text-xs text-gray-900">
                            <th class="py-3">SL No.</th>
                            <th class="py-3">Description</th>
                            <th class="text-right py-3 ">Amount</th>
                        </thead>

                        <tbody class="text-left">
                        <tr class="bg-white text-gray-700" v-for="(item,index) in Bills.items" :key="index">
                            <td class="text-xs">{{index+1}}.</td>
                            <td class="text-xs pt-1 pb-2">
                                {{item.service}} 
                                <br>
                                <span class="text-gray-500">({{item.date.substring(0,10)}})</span>
                            </td>
                            <td class="text-right py-3 text-xs">{{item.cost}} TK</td>
                        </tr>
                        </tbody>

                    </table>
                </div>
                <!-- billing info table ends -->

                <!-- billing details starts -->
                <div class="flex justify-end py-5">
                    <div class="text-right text-gray-900 text-xs">
                        <div class="flex justify-end">
                            <div class="p-2 w-24"><label class="font-bold">Subtotal : </label></div>
                            <div class="p-2 w-24 text-gray-700">{{Bills.total}} TK </div>
                        </div>
                        <div class="flex justify-end ">
                            <div class="p-2 w-24"><label class="font-bold">Discount : </label></div>
                            <div class=" p-2 w-24 text-gray-700">{{Bills.discount}} TK </div>
                        </div>
                        <div class="flex justify-end">
                            <div class="p-2 w-24"><label class="font-bold">Adjustment : </label></div>
                            <div class=" p-2 w-24 text-gray-700">{{Bills.adjustment}} TK </div>
                        </div>
                        <div class="flex justify-end">
                            <div class=" p-2 w-24"><label class="font-bold">Recieved : </label></div>
                            <div class="p-2 w-24 text-gray-700">{{this.paid}} Tk </div>
                        </div>
                        <div class="flex justify-end">
                            <div class=" p-2 w-24"><label class="font-bold">Balance<span class="text-gray-500 font-normal">(Due) </span>:</label></div>
                            <div class=" p-2 w-24 text-gray-700">{{Bills.balance}} TK</div>
                        </div>                           
                    </div>
                </div>
                <!-- billing detail ends -->
                        
                <!-- signature and total start -->
                <hr class="border-t-2 text-gray-900 py-2">
                <div class="flex justify-between">
                    <div class="text-xs text-left text-gray-700 flex justify-start">
                            <label><span class="text-gray-900 font-bold">Total in words: </span> {{this.word}} Taka Only. </label>                        
                    </div>                                                 
                    <div class="text-xs flex justify-end">
                        <div class="w-28"><label class="font-bold">Total :</label></div>
                        <div class="text-gray-700 px-2">{{Bills.adjustment}} TK </div>
                    </div>
                </div>
                <div class="flex justify-start text-xs pt-24">  
                    <div class=" border-t-2 border-regal-teal border-opacity-10">Signature and Date</div>                   
                </div>
                <!-- signature and total ends -->
        
            </div>
            <!-- body end -->

            <!-- footer start **overlap and padding issues-->
            <!-- <footer class="bg-gray-300"> 
                <p class="px-12 py-2 text-left text-xs">House # 12 (1st Floor),Road # 14 (New), Dhanmondi, Dhaka-1209, Cell: 01688-329552, 01817-094331, <br> Email: mhkmusa@gmail.com</p>                    
            </footer> -->
            <!-- footer end -->                
        </section>  
        <!-- </div>             -->
        </div>
        <!-- modal end  -->
    </div>        
</template>

<script>
    import axios from "axios"
    //import easyinvoice from 'easyinvoice';
    export default {
        created() {
            this.getPosts(this.$route.params.id);
            this.numberToEnglish(this.Bills.adjustment);


        },
        props: {
            Bills: Object,
            paid: Number

        },
        data() {
            return {
                address: 'House # 12 (1st Floor),Road # 14 (New), Dhanmondi, Dhaka-1209',
                mobile: '01688-329552, 01817-094331',
                email: 'mhkmusa@gmail.com ',

                word: '',

                patientData: {},
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                id:this.$route.params.id
            }
        },

        methods: {
            //https://ourcodeworld.com/articles/read/353/how-to-convert-numbers-to-words-number-spelling-in-javascript

            numberToEnglish(n, custom_join_character) {

                let string = n.toString(),
                    units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

                let and = custom_join_character ;

                /* Is number zero? */
                if (parseInt(string) === 0) {
                    return 'zero';
                }

                /* Array of units as words */
                units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
                    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen',
                    'Nineteen'
                ];

                /* Array of tens as words */
                tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

                /* Array of scales as words */
                scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion',
                    'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Secillion', 'Undecillion',
                    'Duodecillion', 'Tredecillion', 'Quatttuor-decillion', 'Quindecillion', 'Sexdecillion',
                    'Septen-Decillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Centillion'
                ];

                /* Split user arguemnt into 3 digit chunks from right to left */
                start = string.length;
                chunks = [];
                while (start > 0) {
                    end = start;
                    chunks.push(string.slice((start = Math.max(0, start - 3)), end));
                }

                /* Check if function has enough scale words to be able to stringify the user argument */
                chunksLen = chunks.length;
                if (chunksLen > scales.length) {
                    return '';
                }

                /* Stringify each integer in each chunk */
                words = [];
                for (i = 0; i < chunksLen; i++) {

                    chunk = parseInt(chunks[i]);

                    if (chunk) {

                        /* Split chunk into array of individual integers */
                        ints = chunks[i].split('').reverse().map(parseFloat);

                        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                        if (ints[1] === 1) {
                            ints[0] += 10;
                        }

                        /* Add scale word if chunk is not zero and array item exists */
                        if ((word = scales[i])) {
                            words.push(word);
                        }

                        /* Add unit word if array item exists */
                        if ((word = units[ints[0]])) {
                            words.push(word);
                        }

                        /* Add tens word if array item exists */
                        if ((word = tens[ints[1]])) {
                            words.push(word);
                        }

                        /* Add 'and' string after units or tens integer if: */
                        if (ints[0] || ints[1]) {

                            /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                            if (ints[2] || !i && chunksLen) {
                                words.push(and);
                            }

                        }

                        /* Add hundreds word if array item exists */
                        if ((word = units[ints[2]])) {
                            words.push(word + ' hundred');
                        }

                    }

                }

                this.word = words.reverse().join(' ');

            },



            //Remove Modal
            removeModalBill() {
                this.$emit("billEvent")
            },

            //Get Specific Patient
            async getPosts(id) {
                await axios.get('patients/' + id, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {

                        this.patientData = response.data.result;
                        const ageDifMs = Date.now() - new Date(this.patientData.dob.substring(0, 10)).getTime();
                        const ageDate = new Date(ageDifMs);
                        this.patientData.dob = Math.abs(ageDate.getUTCFullYear() - 1970);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            //Print Bill
            
        }
    }
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}


</style>