<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->

    <div class="m-96">
        <!-- <img class="ml-0.5" src="@/assets/svgs/ul7.svg" alt="" srcset="">    -->
        <button @click="choosetooth($event,17)" class="">
            <!-- <img class="" src="@/assets/svgs/ul8.svg" alt="" srcset=""> -->
            <!-- 17 -->
            <svg class="h-8 w-8  stroke-current text-regal-teal hover:text-regal-red " width="50" height="37"
                viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M3.20036 19.3736C4.12028 17.7208 4.41347 15.9246 4.05051 14.1654C3.17052 9.91379 4.63221 5.84287 8.42063 3.37693C13.7006 -0.0775049 21.3072 1.00666 27.3627 1.86761C32.6426 2.62227 41.6215 3.90839 46.3197 9.37171C51.8532 15.8235 48.9597 25.3153 42.0839 30.5554C34.6263 36.2951 24.5736 35.6148 21.352 35.5723C20.2035 35.5723 10.4043 35.9018 4.94542 32.1285C4.78136 32.0116 4.5278 31.8309 4.19967 31.5758C2.85655 30.4858 1.89535 29.1843 1.39495 27.7782C0.894552 26.3721 0.869236 24.9015 1.32108 23.4871C1.61329 22.5526 2.00724 21.6357 2.49936 20.7448C2.72308 20.2665 2.96172 19.8094 3.20036 19.3736Z"
                    stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M27.5574 29.6208C23.465 22.0386 23.5877 13.6293 27.9004 6.10938" stroke-width="1.5"
                    stroke-miterlimit="10" />
                <path d="M8.91421 17.3965C13.5975 17.6835 19.8469 17.5984 24.5303 17.8961" stroke-width="1.5"
                    stroke-miterlimit="10" />

            </svg>
        </button>
            <!-- 17 -->
            <!-- 16 -->
        <button @click="choosetooth($event,16)" class="">
            <svg class="h-8 w-8 stroke-current text-regal-teal hover:text-regal-red" width="55" height="39" viewBox="0 0 55 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.19814 15.4815C6.45978 12.1265 7.46663 8.82228 9.18115 5.69211C9.49827 4.97501 10.0045 4.30762 10.6727 3.72574C13.9838 1.0047 20.4122 1.53616 21.3966 1.59993C24.7972 1.87629 24.6033 2.66283 30.3456 3.47064C32.2249 3.74699 32.1205 3.66196 36.073 4.17216C39.5482 4.62921 41.3231 4.86304 43.5305 5.29884C47.0952 6.01098 48.885 6.36174 50.2423 7.22269C52.0323 8.54998 53.1412 10.269 53.3894 12.1014C53.715 13.6528 53.7851 15.2259 53.5982 16.7888C54.2097 21.625 51.7785 31.0743 47.4681 34.2311C45.4734 35.6455 42.9355 36.6071 40.1746 36.9947C34.7452 37.887 29.0599 37.5451 23.9172 36.0168L14.0435 35.2621C7.91338 34.55 2.94667 32.371 1.87278 29.4055C0.470766 22.5392 6.01916 20.8704 6.19814 15.4815Z"
                     stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M31.6875 8.72266C26.0496 17.5873 25.2293 25.0489 26.0943 30.8523L26.2286 31.6495"
                     stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M11.1655 17.8525C24.0223 22.1041 33.8066 22.4018 42.0845 21.4133" 
                    stroke-width="1.5" stroke-miterlimit="10" />
            </svg>

        </button>
            <!-- 16 -->
    </div>

</template>

<script>
    import Nav from "../../components/Nav.vue";
    export default {
        components: {
            Nav,
        },
        data() {
            return {
                str: 0
            }
        },
        methods: {
            choosetooth(evt, toothNo) {
                console.log(evt)
                console.log(toothNo);
            }
        }
    }
</script>

<style scoped>

</style>