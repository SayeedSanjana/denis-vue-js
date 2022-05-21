<script>
import { Editor, EditorContent, mergeAttributes } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
// import FloatingMenu from '@tiptap/extension-floating-menu'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import Underline from '@tiptap/extension-underline'

// import Bold from '@tiptap/extension-bold'
    export default {
        components:{
             EditorContent,
        },
        data(){
            return{
            cc:'',
            showInput:false,
            editField : false,
            heightAuto: false,
            maxlength:255,
            editor: null,


        }
        
    },
      mounted() {
          const classes = {
                1: 'text-xl',
                2: 'text-base',
                3: 'text-sm',
                
            }
          this.editor = new Editor({
              extensions: [
                  StarterKit,
                  Document,
                  Paragraph,
                  Underline,
                  Text,
                  BulletList.configure({
                      HTMLAttributes: {
                          class: ' ml-4 list-disc ',
                      },
                  }),

                //   FloatingMenu.configure({
                //       element: document.querySelector('.menu'),
                //   }),
                 
                  
                  
                  Heading.configure({
                      levels: [1, 2, 3],
                  }).extend({
                      renderHTML({node, HTMLAttributes}){
                          const hasLevel = this.options.levels.includes(node.attrs.level);
                          const level = hasLevel ? node.attrs.level: this.options.levels[0];
                          return [
                              `h${level}`,
                              mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                                  class: `${classes[level]}`
                              }),
                              0,
                          ]
                      }
                  }),
                  

                  
              ],
          })
      },

  beforeUnmount() {
    this.editor.destroy()
  },
     
//     mounted(){
        
//         this.$nextTick(() => {
//         this.$el.setAttribute("style", "height",
//        `${this.$el.scrollHeight}px`);
//     });
//   },
    
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
        },
        // handleClick(e) {
        //     if (e.target instanceof HTMLElement && !this.$el.contains(e.target)) {
        //         this.$emit("hide");
        //         this.blurField(); //fires only on click outside
        //     }
        //     console.log(e.target instanceof HTMLElement && !this.$el.contains(e.target));

        // }
        
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
                    <div class="w-2/5 p-2 bg-white">

                        <label class="block mb-2text-md font-medium text-regal-teal capitalize dark:text-white text-left">C/C</label>
                                                
                        <div class="">
                            <p
                            
                            class="text-left w-full px-2 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md  whitespace-pre-line break-all h-auto" 
                            v-show="!showInput"
                            
                            v-html="cc ||'..............'" 
                            @click="focusField"></p>

                            <section v-show="showInput" 
                             class="text-left w-full px-6 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md h-auto">
                                <div  :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "  @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 1 }) }">
                                        H1
                                    </button>
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 " @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 2 }) }">
                                        H2
                                    </button>
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 " @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 3 }) }">
                                        H3
                                    </button>
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 " @click="editor.chain().focus().toggleBold().run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('bold') }">
                                        Bold
                                    </button>
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 " @click="editor.chain().focus().toggleItalic().run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('italic') }">
                                        Italic
                                    </button>
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 " @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('underline') }">
                                        Underline
                                    </button>
                                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 " @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('bulletList') }">
                                        BulletList
                                    </button>

                                </div>
                             <editor-content :editor="editor"  v-model="cc"/>
                            </section>
                            <!-- <textarea :maxlength="this.maxlength"
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
                            @blur="blurField"></textarea> -->
                            <!-- <span  v-show="showInput" class="flex justify-end text-gray-500 text-sm">{{this.cc.length}}/{{this.maxlength}}</span> -->
                            <!-- <button @click="blurField" >submit</button> -->
                            
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

<style>
.ProseMirror:focus {
    outline: none;
  }
  

</style>