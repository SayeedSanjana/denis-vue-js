
<script>
    export default {
        props: {
            border: {
                type: String,
                default: 'border border-regal-teal border-opacity-50'
            },
            textColor: {
                type: String,
                default: 'text-regal-teal text-opacity-50'
            },
            text: {
                type: String,
                default: ''
            },
            padding: {
                type: String,
                default: 'py-1 px-3'
            },
            fontSize: {
                type: String,
                default: 'text-sm'
            },
            fontWeight: {
                type: String,
                default: 'font-medium'
            },
            borderRadius: {
                type: String,
                default: 'rounded'
            },
            placeholder: {
                type: String,
                default: 'write something'
            },
            type: {
                type: String,
                default: 'text'
            },
            focus: {
                type: String,
                default: 'border-regal-blue outline-none'
            },



        }
    }
</script>

<template>
    <div>
        <input :type="type" :class="[border, textColor, text, padding, fontSize, fontWeight, borderRadius, placeholder, focus]">
    </div>
</template>


<style scoped>

</style>