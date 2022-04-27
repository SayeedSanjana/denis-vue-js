
<script>
    export default {
        props:{
            color:{
                type: String,
                default: 'bg-regal-teal'
            },
            textColor:{
                type: String,
                default: 'text-white'
            },
            text:{
                type: String,
                default: 'button'
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

        }
    }
</script>

<template>
    <div>
        <button :class="[color, textColor, padding, fontSize, fontWeight, borderRadius, type]">{{text}}</button>
    </div>
</template>

<style scoped>

</style>