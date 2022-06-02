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
            showInput: false,
            editField: false,

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


            if (!isSame) {
                return this.editor.commands.setContent(value, false)
            }

    //          if (isSame) {
    //     return
    //   }

    //   this.editor.commands.setContent(value, false)

        },
    },
    mounted() {


        const classes = {
            1: 'text-lg',
            2: 'text-base',
            3: 'text-sm',

        }

        this.editor = new Editor({
            extensions: [
                StarterKit,
                // Document,
                // Paragraph,
                Underline,
                // Text,
                BulletList.configure({
                    HTMLAttributes: {
                        class: ' ml-4 list-disc ',
                    },
                }),

                Heading.configure({
                    levels: [1, 2, 3],
                }).extend({
                    renderHTML({
                        node,
                        HTMLAttributes
                    }) {
                        const hasLevel = this.options.levels.includes(node.attrs.level);
                        const level = hasLevel ? node.attrs.level : this.options.levels[0];
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
            onUpdate: () => {
                const html = ['<h1 class="text-xl"></h1>', '<h2 class="text-base"></h2>', '<h3 class="text-sm"></h3>', '<p></p>'];
                let htmlVal = this.editor.getHTML();
                // if (this.html === '<p></p>') this.html = '';
                if (html.includes(htmlVal)) htmlVal = '';
                this.$emit('update:modelValue', htmlVal);
                // this.$emit('update:modelValue', this.editor.getHTML())
            }
        })


    },
    beforeUnmount() {
        this.editor.destroy()
    },
    methods: {
        focusField() {
            this.showInput = true;
            this.editField = true;
        },

        blurField() {

            this.showInput = false;
            this.editField = false;
        },
    }

}
</script>
<template>
    <div>
        <div class="">
            <p class="text-left w-full px-2 py-2 text-regal-teal hover:border hover:rounded-md cursor-pointer whitespace-pre-line break-all h-auto"
                v-show="!showInput" v-html="modelValue ||`<p class='text-gray-400' >Write Here......</p>`" @click="focusField"></p>
            
            <section v-show="showInput"
                class="text-left w-full px-6 py-2 text-regal-teal bg-white border border-regal-teal border-opacity-50 rounded-md h-auto">

                <div :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 1 }) }">
                        H1
                    </button>
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 2 }) }">
                        H2
                    </button>
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('heading', { level: 3 }) }">
                        H3
                    </button>
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleBold().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('bold') }">
                        <b>B</b>
                    </button>
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleItalic().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('italic') }">
                        <i>I</i>
                    </button>
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleUnderline().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('underline') }">
                       <u>U</u>
                    </button>
                    <button type="button" class=" border border-gray-500 text-sm px-2 py-0.5 pb-1.5 rounded-md mx-1 "
                        @click="editor.chain().focus().toggleBulletList().run()"
                        :class="{ 'bg-regal-teal font-bold text-white': editor.isActive('bulletList') }">
                       <div>
                            <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M3.71023 16.29C3.61513 16.199 3.50298 16.1276 3.38023 16.08C3.13677 15.98 2.86369 15.98 2.62023 16.08C2.49748 16.1276 2.38534 16.199 2.29023 16.29C2.19919 16.3851 2.12783 16.4972 2.08023 16.62C2.00365 16.8021 1.98273 17.0028 2.0201 17.1968C2.05748 17.3908 2.15147 17.5694 2.29023 17.71C2.38743 17.7983 2.49905 17.8694 2.62023 17.92C2.73993 17.9729 2.86936 18.0002 3.00023 18.0002C3.1311 18.0002 3.26053 17.9729 3.38023 17.92C3.50142 17.8694 3.61303 17.7983 3.71023 17.71C3.84899 17.5694 3.94299 17.3908 3.98036 17.1968C4.01773 17.0028 3.99681 16.8021 3.92023 16.62C3.87264 16.4972 3.80127 16.3851 3.71023 16.29ZM7.00023 8H21.0002C21.2654 8 21.5198 7.89464 21.7073 7.70711C21.8949 7.51957 22.0002 7.26522 22.0002 7C22.0002 6.73478 21.8949 6.48043 21.7073 6.29289C21.5198 6.10536 21.2654 6 21.0002 6H7.00023C6.73502 6 6.48066 6.10536 6.29313 6.29289C6.10559 6.48043 6.00023 6.73478 6.00023 7C6.00023 7.26522 6.10559 7.51957 6.29313 7.70711C6.48066 7.89464 6.73502 8 7.00023 8ZM3.71023 11.29C3.56961 11.1512 3.39104 11.0572 3.19705 11.0199C3.00306 10.9825 2.80234 11.0034 2.62023 11.08C2.49905 11.1306 2.38743 11.2017 2.29023 11.29C2.19919 11.3851 2.12783 11.4972 2.08023 11.62C2.02733 11.7397 2 11.8691 2 12C2 12.1309 2.02733 12.2603 2.08023 12.38C2.13087 12.5012 2.2019 12.6128 2.29023 12.71C2.38743 12.7983 2.49905 12.8694 2.62023 12.92C2.73993 12.9729 2.86936 13.0002 3.00023 13.0002C3.1311 13.0002 3.26053 12.9729 3.38023 12.92C3.50142 12.8694 3.61303 12.7983 3.71023 12.71C3.79856 12.6128 3.86959 12.5012 3.92023 12.38C3.97314 12.2603 4.00047 12.1309 4.00047 12C4.00047 11.8691 3.97314 11.7397 3.92023 11.62C3.87264 11.4972 3.80127 11.3851 3.71023 11.29ZM21.0002 11H7.00023C6.73502 11 6.48066 11.1054 6.29313 11.2929C6.10559 11.4804 6.00023 11.7348 6.00023 12C6.00023 12.2652 6.10559 12.5196 6.29313 12.7071C6.48066 12.8946 6.73502 13 7.00023 13H21.0002C21.2654 13 21.5198 12.8946 21.7073 12.7071C21.8949 12.5196 22.0002 12.2652 22.0002 12C22.0002 11.7348 21.8949 11.4804 21.7073 11.2929C21.5198 11.1054 21.2654 11 21.0002 11ZM3.71023 6.29C3.61513 6.19896 3.50298 6.12759 3.38023 6.08C3.19812 6.00342 2.99741 5.9825 2.80342 6.01987C2.60943 6.05725 2.43086 6.15124 2.29023 6.29C2.2019 6.3872 2.13087 6.49882 2.08023 6.62C2.02733 6.7397 2 6.86913 2 7C2 7.13087 2.02733 7.2603 2.08023 7.38C2.13087 7.50119 2.2019 7.6128 2.29023 7.71C2.38743 7.79833 2.49905 7.86936 2.62023 7.92C2.80234 7.99658 3.00306 8.0175 3.19705 7.98013C3.39104 7.94275 3.56961 7.84876 3.71023 7.71C3.79856 7.6128 3.86959 7.50119 3.92023 7.38C3.97314 7.2603 4.00047 7.13087 4.00047 7C4.00047 6.86913 3.97314 6.7397 3.92023 6.62C3.86959 6.49882 3.79856 6.3872 3.71023 6.29ZM21.0002 16H7.00023C6.73502 16 6.48066 16.1054 6.29313 16.2929C6.10559 16.4804 6.00023 16.7348 6.00023 17C6.00023 17.2652 6.10559 17.5196 6.29313 17.7071C6.48066 17.8946 6.73502 18 7.00023 18H21.0002C21.2654 18 21.5198 17.8946 21.7073 17.7071C21.8949 17.5196 22.0002 17.2652 22.0002 17C22.0002 16.7348 21.8949 16.4804 21.7073 16.2929C21.5198 16.1054 21.2654 16 21.0002 16Z" />

                            </svg>
                           <!-- <img src="@/assets/svgs/bullet.png" alt="" srcset="" class="pointer-events-none object-center h-5 w-5"> -->
                       </div>

                    </button>
                </div>

                <editor-content :editor="editor"/>

                <div class="flex flex-row-reverse">
                    
                    <button type="button" class="py-0.5 px-3 bg-regal-teal rounded text-white" @click="blurField">
                        Done
                    </button>
                </div>
                
            </section>
        </div>

        </div>
</template>


<style >

.ProseMirror:focus {
    outline: none;
  }
</style>