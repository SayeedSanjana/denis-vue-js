<script>
import { Editor, EditorContent, mergeAttributes } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import Underline from '@tiptap/extension-underline'
    export default {
        components: {
                EditorContent,
            },
            data() {
                return {
                    editor: null,
                     showInput:false,
                    editField : false,
                   
                }
            },
            props: {
                modelValue: {
                    type: String,
                    default: '',
                },
            },
            watch: {
                modelValue(value) {
                    // HTML
                    const isSame = this.editor.getHTML() === value

                    // JSON
                    // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

                    if (isSame) {
                        return
                    }

                    this.editor.commands.setContent(value, false)
                },
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
              content: this.modelValue,
              onUpdate: () =>{
                  this.$emit('update:modelValue', this.editor.getHTML())
              }
          })

  
      },
      beforeUnmount() {
          this.editor.destroy()
      },
      methods:{
          focusField(){
            this.showInput = true;
            this.editField = true;
        },
        
        blurField(){
            
            this.showInput = false;
            this.editField = false;
        },
      }
        
    }
</script>
<template>
    <div>
        <div class="">
            <p class="text-left w-full px-2 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md  whitespace-pre-line break-all h-auto"
                v-show="!showInput" v-html="modelValue ||'..............'" @click="focusField"></p>

            <section v-show="showInput"
                class="text-left w-full px-6 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md h-auto">

                <div :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 1 }) }">
                        H1
                    </button>
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 2 }) }">
                        H2
                    </button>
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 3 }) }">
                        H3
                    </button>
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleBold().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('bold') }">
                        Bold
                    </button>
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleItalic().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('italic') }">
                        Italic
                    </button>
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleUnderline().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('underline') }">
                        Underline
                    </button>
                    <button class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleBulletList().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('bulletList') }">
                        BulletList
                    </button>
                </div>
                <editor-content :editor="editor" />

                <div class="flex flex-row-reverse">

                    <button class="py-0.5 px-3 bg-regal-teal rounded text-white" @click="blurField">
                        Done
                    </button>
                </div>
            </section>
        </div>

        </div>
</template>


<style scoped>

</style>