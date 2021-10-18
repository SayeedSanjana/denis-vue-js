<template>

    <!--Modal Invoice-->

    <div class="max-h-screen  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
        <div class="absolute bg-black opacity-80 inset-0 z-0 "></div>
        
        <!-- modal start -->
        <div class="w-full lg:max-w-3xl max-w-lg relative mx-auto my-auto shadow-lg">  
            
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

            <section id="print">
                
                <!-- header start-->
                <header class="bg-gray-300">
                <!-- Logo -->
                    <img class="px-12 py-2" src="@/assets/svgs/mt-logo-V2.svg" alt="dental-center-logo.svg">  
                </header>
                <!-- header end -->

                <!-- body start-->
                <div class="container-2xl px-12 bg-white h-screen">
                    <div class="flex justify-end">
                        <div class="text-right w-1/2"> 
                            <div class="px-0">
                                <label class="font-semibold text-xs text-regal-teal">Address: <span
                                        class="text-xs font-normal ">{{address}}</span> </label>

                            </div>
                            <div class="px-0">
                                <label class="font-semibold text-xs text-regal-teal">Cell: <span
                                        class="text-xs font-normal">{{mobile}}</span></label>

                            </div>
                            <div class="px-0">
                                <label class="font-semibold text-xs text-regal-teal">Email: <span
                                        class="text-xs font-normal">{{email}}</span></label>

                            </div>
                        </div> 

                    </div>

                    <hr class="border border-b-1 border-gray-300 mb-4">

                    <div class="flex justify-between w-full px-0 mb-14  ">
                        <div class="text-left w-1/2">
                            <div class="px-0">
                                <label class="font-semibold text-xs text-regal-teal">Patient Name: <span
                                        class="text-xs font-normal ">{{this.patientData.name}}</span> </label>

                            </div>
                            <div class="px-0">
                                <label class="font-semibold text-xs text-regal-teal">Contact: <span
                                        class="text-xs font-normal">{{this.patientData.phone}}</span></label>

                            </div>
                        </div>

                        <div class="text-right  w-1/2">
                            <div class="px-0 flex justify-end ">
                                <label class="font-semibold text-xs text-regal-teal">Invoice No : <span
                                        class="font-normal ">{{this.Bills._id.substring(this.Bills._id.length - 7)}}</span></label>
                            </div>
                            <div class="px-0 flex justify-end ">
                                <label class="font-semibold text-xs text-regal-teal">Invoice Date : <span
                                        class="font-normal ">{{this.date}}</span></label>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center items-center mt-3">
                        <table class="  p-5 w-full mx-auto  rounded-t-xl">
                            <thead class="text-left text-xs text-regal-teal  border-b-2 border-regal-teal border-opacity-30  ">

                                <th class=" py-3  ">SL. no</th>
                                <th class=" py-3  ">Description of Treatment</th>
                                <th class="text-right px-4 py-3 ">Amount</th>
                            </thead>

                            <tbody class="text-left">

                                <tr class="bg-white  " v-for="(item,index) in Bills.items" :key="index">
                                    <td class=" text-regal-teal  text-xs">{{index+1}}.</td>
                                    <td class=" text-regal-teal  text-xs  ">
                                        {{item.service}} <br>
                                        <small>[{{item.date.substring(0,10)}}]</small>

                                    </td>
                                    <td class=" text-right px-4 py-3 text-regal-teal  text-xs ">
                                        {{item.cost}} TK</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <hr class="border border-b-1 border-regal-teal border-opacity-30 mb-4 flex justify-between">

                    <div class="flex justify-between">
                        <div class="mt-5 text-regal-teal text-xs text-left">
                            <div class="font-semibold">Amount Recieved (In words) :<span
                                    class="text-gray-500">BDT</span></div>
                            <div>{{this.word}}</div>

                        </div>
                        <div class="mt-5 text-right text-regal-teal text-xs">
                            <div class="flex justify-end ">

                                <div class="p-2 w-24">
                                    <label class="font-bold">Subtotal</label>
                                </div>

                                <div class="p-2 w-24">
                                    {{Bills.total}} TK
                                </div>
                            </div>
                            <div class="flex justify-end ">

                                <div class="p-2 w-24">
                                    <label class="font-bold">Discount</label>
                                </div>

                                <div class=" p-2 w-24">
                                    {{Bills.discount}} TK
                                </div>
                            </div>
                            <div class="flex justify-end  ">

                                <div class="p-2 w-24">
                                    <label class="font-bold">Adjustment</label>
                                </div>
                                <div class=" p-2 w-24">
                                    {{Bills.adjustment}} TK
                                </div>

                            </div>
                            <div class="flex justify-end ">

                                <div class=" p-2 w-24">
                                    <label class="font-bold">Recieved</label>
                                </div>
                                <div class="p-2 w-24">
                                    {{this.paid}} Tk
                                </div>

                            </div>
                            <div class="flex justify-end ">

                                <div class=" p-2 w-24">
                                    <label class="font-bold">Balance <small>(Due)</small></label>
                                </div>
                                <div class=" p-2 w-24">
                                    909 Tk

                                </div>

                            </div>
                            <hr class="border-t-2 border-regal-teal border-opacity-10 mt-2">
                            <div class="flex justify-end border-t-1 border-gray-300">

                                <div class=" p-2 w-24">
                                    <label class="font-bold">Total</label>
                                </div>
                                <div class=" p-2 w-24">
                                    {{Bills.adjustment}} Tk

                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="text-left w-36 mt-10">
                        <div class=" border-t-2 border-regal-teal border-opacity-10"><small>Signature and Date</small></div>
                    </div>
                </div>
                <!-- body end -->

                <!-- footer start -->
                <footer class="bg-gray-300"> 
                    <p class="px-12 py-2 text-left text-xs">House # 12 (1st Floor),Road # 14 (New), Dhanmondi, Dhaka-1209, Cell: 01688-329552, 01817-094331, <br> Email: mhkmusa@gmail.com</p>                    
                </footer>
                <!-- footer end -->
                
            </section>  
            
        </div>
        <!-- modal end  -->

    </div>
        
</template>

<script>
    import printJS from "print-js"
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
            }
        },

        methods: {
            //https://ourcodeworld.com/articles/read/353/how-to-convert-numbers-to-words-number-spelling-in-javascript

            numberToEnglish(n, custom_join_character) {

                let string = n.toString(),
                    units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

                let and = custom_join_character || 'and';

                /* Is number zero? */
                if (parseInt(string) === 0) {
                    return 'zero';
                }

                /* Array of units as words */
                units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
                    'nineteen'
                ];

                /* Array of tens as words */
                tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

                /* Array of scales as words */
                scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion',
                    'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion',
                    'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion',
                    'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'
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
            print() {
                printJS({
                    printable: "print",
                    type: 'html',
                    targetStyles: ['*'],
                    // style: ['*'],
                    // css: "./src/assets/tailwind.css",
                    // maxWidth: 800,
                    font_size: "12px",
                    // header: '<h1 class="custom-h1">INVOICE</h1>',
                    style: '.custom-h1 { font-size:24px}',
                    // honorColor: true,
                    gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
                    ignoreElements: ['no-print']

                })
            }
        }
    }
</script>

<style scoped>


</style>