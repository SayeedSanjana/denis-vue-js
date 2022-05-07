
<script>
    export default {
        props:{
            color:{
                type: String,
                default: 'bg-regal-teal'
            },
            // textColor:{
            //     type: String,
            //     default: 'text-white'
            // },
            text:{
                type: String,
                default: 'text-white'
            },
            padding:{
                type: String,
                default: 'py-1 px-3'
            },
            fontSize:{
                type: String,
                default: 'text-sm'
            },
            fontWeight:{
                type: String,
                default: 'font-bold'
            },
            borderRadius:{
                type: String,
                default: 'rounded'
            },
            type:{
                type: String,
                default: 'button'
            },
            textStyle:{
                type: Object,
                default: ()=>({'tracking-normal': true}),
            }

        }
    }
</script>

<template>
   
    <button :type="type" :class="[text, textStyle ,color, fontSize, fontWeight, borderRadius, type]">
        <slot>Button</slot>
    </button>
   
</template>

<style scoped>

</style>