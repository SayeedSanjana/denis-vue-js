<script>
import axios from 'axios';
import Modal from '../../components/reusable/Modal.vue'
    export default {
        components: {
            Modal
        },
        props: {
            bill: {
                type: Object,
               

               
                
            }
        },
        data(){
            return{
                word: '',
            }

        },
        created(){
            this.numberToEnglish(this.bill.balance);

        },
       

        methods:{
             numberToEnglish(n, custom_join_character) {

                let string = n.toString(),
                    units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

                let and = custom_join_character ;
                /* Is number zero? */
                if (parseInt(string) === 0) {
                    return this.word = 'Zero';
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

           print() {


                const prtHtml = document.getElementById('print').innerHTML;
                const cssUrl = document.querySelectorAll('link[rel="stylesheet"], style')[1].href
                if(!cssUrl) {
                    let stylesHtml = '';
                    for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
                        stylesHtml += node.outerHTML;
                    }
                    // Open the print window
                    const WinPrint = window.open('', '', 'left=0,top=0,width=1000,height=900,toolbar=0,scrollbars=0,status=0');

                    WinPrint.document.write(`<!DOCTYPE html>
                            <html>
                            <head>
                                ${stylesHtml}
                            </head>
                            <body>
                                ${prtHtml}
                            
                            </body>
                            </html>`);

                    WinPrint.document.close();
                    WinPrint.focus();
                    WinPrint.print();
                    WinPrint.close();
                } else {
                    axios.get(cssUrl).then(res => {
                    let styles = res.data;
                    // Open the print window
                    const WinPrint = window.open('', '', 'left=0,top=0,width=1000,height=900,toolbar=0,scrollbars=0,status=0');

                    WinPrint.document.write(`<!DOCTYPE html>
                            <html>
                            <head>
                                <style type="text/css">
                                ${styles}
                                </style>
                            </head>
                            <body>
                                ${prtHtml}
                            
                            </body>
                            </html>`);

                    WinPrint.document.close();
                    WinPrint.focus();
                    WinPrint.print();
                    WinPrint.close();
                })
                }

            },



        }
        
    }
</script>

<template>
   <Modal :width="'w-1/2'">
   <template v-slot:header> 
            <!-- <h1 class="font-bold text-xl p-2">Print Invoice</h1> -->
            <button type="button" class="ml-1 p-2 bg-regal-teal rounded-full " @click="print">
            <img src="@/assets/svgs/print.svg" class="pointer-events-none ">
        </button>
   </template>

    <template v-slot:body>
       
        <section id="print" class="bg-white font-sans">
                
            <!-- header start-->
            <header class="flex justify-between px-12 pb-4">
            <!-- Logo -->
               <p class="font-bold text-left py-5 mr-2 text-gray-900 text-sm">MT Dental Center 
                <br><span class="text-xs"> Next Generation HighTech Dentistry</span>
               </p>
                <p class="text-xs  text-right py-5  text-gray-900">Address: House No 12 (1st Floor), Road No 14 (New) 
                    <br> Dhanmondi, Dhaka-1209, Mobile: 01688-329552, 01817-094331
                    <br>Email: mhkmusa@gmail.com</p>
            </header>
            <!-- header end -->
            
            <!-- body start-->
            <div class="container-2xl px-12 h-yyxl">                    
                <!-- patient info table starts-->
                <table class=" w-full">
                    <tr class="text-gray-900">
                        <td class="text-left ">
                            <label class="text-xs text-gray-900 font-semibold">Patient Name: <span class="text-xs font-normal text-gray-600">{{bill.patientName}}</span> </label>                                
                        </td>
                        <td class="text-right">
                            <label class="text-gray-900  font-semibold text-xs">Invoice Number: <span class="font-normal text-gray-600">INV-{{bill._id}}</span></label>
                        </td>
                    </tr>
                    <tr class="text-gray-900">
                        <td class="text-left">
                            <label class="text-gray-900 font-semibold text-xs">Contact Number: <span class="text-xs font-normal text-gray-600">{{bill.patientContact}}</span></label>
                        </td>
                        <td class="text-right">
                            <label class="text-gray-900 font-semibold text-xs">Invoice Date: <span class="font-normal text-gray-600">{{new Date(bill.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }}</span></label>
                        </td>                        
                    </tr>
                    <tr class="text-gray-900">
                        <td></td>
                       
                    </tr>
                </table>
                
                <div class="border-t-2 mt-8 border-b-2">
                    <table class="w-full">

                        <thead class="text-left text-xs text-gray-900">
                            <!-- <th class="py-3">SL No.</th> -->
                            <th class="py-3">Description</th>
                            <th class="text-right py-3 ">Amount</th>
                        </thead>

                        <tbody class="text-left">
                        <tr class="bg-white text-gray-700" v-for="(item, index) in bill.items" :key="index">
                            <!-- <td class="text-xs"></td> -->
                            <td class="text-xs pt-1 pb-2">
                                {{item.service}} <span>{{item.location}}</span>
                                <br>
                                <span class="text-gray-500">({{new Date(item.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                    }) }})</span>
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
                            <div class="py-2  w-24 text-gray-700">{{bill.total}} TK </div>
                        </div>
                        <div class="flex justify-end ">
                            <div class="p-2 w-24"><label class="font-bold">Discount : </label></div>
                            <div class=" py-2 w-24 text-gray-700">{{bill.discount}} TK </div>
                        </div>
                        <div class="flex justify-end">
                            <div class="p-2 w-24"><label class="font-bold">Adjustment : </label></div>
                            <div class=" py-2 w-24 text-gray-700">{{bill.adjustment}} TK </div>
                        </div>
                        <div class="flex justify-end">
                            <div class=" p-2 w-24"><label class="font-bold">Recieved : </label></div>
                            <div class="py-2 w-24 text-gray-700">{{bill.totalAmountPaid}} Tk </div>
                        </div>
                        <div class="flex justify-end">
                            <div class=" p-2 w-24"><label class="font-bold">Balance<span class="text-gray-500 font-normal">(Due) </span>:</label></div>
                            <div class=" py-2 w-24 text-gray-700">{{bill.balance}}TK</div>
                        </div>                           
                    </div>
                </div>
               
                <hr class="border-t-2 text-gray-900 py-2">
                <div class="flex justify-between">
                    <div class="text-xs text-left text-gray-700 flex justify-start">
                            <label><span class="text-gray-900 font-bold">Total in words: </span>{{this.word}} Only. </label>                        
                    </div>                                                 
                    <div class="text-xs flex justify-end">
                        <div class="w-28"><label class="font-bold">Total :</label></div>
                        <div class="text-gray-700 ">{{bill.balance}} TK </div>
                    </div>
                </div>
                <div class="flex justify-start text-xs pt-24">  
                    <div class=" border-t-2 border-regal-teal border-opacity-10">Signature and Date</div>                   
                </div>
               
        
            </div>
                         
        </section>  

    </template>

   
   </Modal>
</template>

<style scoped>
@media print{
    .dontprint{
        display:none;
    }


}

.hidebutton{
    @apply dontprint text-gray-300;
}

.showbutton{
    @apply  text-regal-teal w-full my-2;
}

</style>