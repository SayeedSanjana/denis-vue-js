<template>
    <div>
        <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white ">
         
            <form @submit.prevent="createTreatment" class="w-full max-w-lg">

                <div class="mt-6 ">
                    <div class="items-center -mx-2 md:flex">

                        <div class="w-full mx-2" hidden>
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Patient
                                Name</label>

                            <input v-model="formData.patientName" readonly
                                class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md   "
                                type="text">
                        </div>

                        <div class="w-full mx-2 mt-4 md:mt-0" hidden>
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Date</label>

                            <input v-model="formData.date" readonly
                                class="block w-full px-4 py-2 text-gray-700 bg-white border border-regal-teal border-opacity-50 rounded-md ">
                        </div>
                    </div>
                    {{this.isAll()}}
                    <div class=" flex justify-start items-start mt-5 mb-5">
                        <label for="" class="m-1 text-regal-teal ">All Tooth?</label>
                        <input  @keypress="this.isAll()" v-model="formData.isAll" value="true" type="radio" 
                            class="form-radio h-5 w-5 text-regal-teal mt-3 ml-10"><span
                            class="ml-2 mr-2 text-gray-700 mt-3">Yes</span>
                        <input  @keypress="this.isAll()" v-model="formData.isAll" value="false" type="radio" checked="checked"
                            class="form-radio h-5 w-5 text-regal-teal mt-3 ml-10"><span
                            class="ml-2 text-gray-700 mt-3">No</span>
                    </div>

                   
                    <p v-if="disabled == 1" class="text-red-500 mb-4 text-center">You can't enter tooth number</p>
                    <div class="mt-6">
                        <label class="block mb-2  font-medium text-regal-teal text-left">Tooth
                        </label>
                        <div class="relative">
                            <input v-model="teeth" @keypress="isNumber($event)" :disabled="disabled == 1"  @keydown="this.isAll()"
                                    class="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-regal-teal rounded-md  focus:border-regal-blue  focus:outline-none ">


                        </div>
                    </div>

                    <div class="flex justify-start items-start mt-5 mb-5">
                        <label for="" class="m-1 text-regal-teal text-left">Is BabyTooth?</label>
                        <input v-model="formData.isBabyTooth" value="true" type="radio"
                            class="form-radio h-5 w-5 bg-regal-teal mt-3 ml-5"><span
                            class="ml-2 mr-2 text-gray-700 mt-3">Yes</span>
                        <input v-model="formData.isBabyTooth" value="false" type="radio" checked="checked"
                            class="form-radio h-5 w-5 bg-regal-teal mt-3 ml-6"><span
                            class="ml-2 text-gray-700 mt-3">No</span>
                    </div>

                    <div class="w-full mt-6">
                        <label class="block mb-2  font-medium  text-regal-teal text-left">Treatment
                            Note</label>

                        <textarea v-model="formData.treatmentDone"
                        class="block w-full  h-40  px-4 py-2 mt-1 text-regal-teal bg-white  border border-regal-teal border-opacity-50 rounded-md  focus:border-regal-blue  focus:outline-none ">

                            </textarea>
                    </div>
                    <p v-if="!formIsValid" class="text-red-500 mb-4 text-center">Please enter valid input</p>
                    <div class="flex justify-center mt-6">
                        <button class="buttonsubmit">Submit</button>
                    </div>

                </div>
            </form>

            <div class=" md:mt-4 ">
                <TreatmentTimeline :treatmentList="treatmentList" :uid="uid" />

            </div>

        </section>
    </div>
</template>

<script>
    import TreatmentTimeline from "../../components/TreatmentTimeline.vue";
    import axios from "axios"
    import swal from "sweetalert"
    export default {
        
        components: {
            TreatmentTimeline
        },
        created() {
            this.getSpecificPatient()
            this.getspecificTreatmentList()
            //this.parseJwt(this.token)
        },
        data() {
            return {
                //token: localStorage.getItem('token'),
                uid: '',
                teeth: '',
                disabled: 0,
                formIsValid: true,
                treatmentList: [],
                formData: {
                    user: '',
                    tooth: [],
                    isAll: false,
                    isBabyTooth: false,
                    patient: '',
                    patientName: '',
                    treatmentDone: '',
                    doctorName: '',
                    date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                },
                form: {},
                items: []
            }
        },
        methods: {
            parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
                c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const payload = JSON.parse(jsonPayload);
                this.uid = payload.sub
                console.log(payload.sub);
            },

            isAll() {
                if (this.formData.isAll == "true") {
                    this.disabled = 1
                    this.teeth = ''
                } else {
                    this.disabled = 0
                }
            },

            isNumber(evt) {
                if (!/\d/.test(evt.key) && evt.key !== ',') {
                    return evt.preventDefault();
                } else {
                    return true;
                }
            },

            async getSpecificPatient() {
                await axios.get('patients/' + this.$route.params.id, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.formData.patientName = response.data.result.name;
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            async createTreatment() {
                this.formIsValid = true;
                this.formData.patient = this.$route.params.id
                this.formData.user = '6145812934bfa3eea55fc5a1'
                this.formData.doctorName = 'Iktisad'
                this.formData.tooth = this.teeth.split(',');
                if (this.formData.treatmentDone === '') {
                    this.formIsValid = false;
                } else {
                    await axios.post('treatment-notes/create', this.formData, {
                            headers: {
                                "Authorization": `Bearer ${localStorage.getItem('token') }`
                            }
                        })
                        .then((response) => {
                            console.log(response)
                            swal({
                                title: "Success",
                                text: "Treatment Notecreated Successfully!",
                                icon: "success",
                                timer: 1000,
                                buttons: false
                            })
                            this.formData.treatmentDone = ""
                            this.teeth = ""
                            this.getspecificTreatmentList()
                        })
                        .catch((error) => {
                            console.log(error)
                        })

                }
            },

            async getspecificTreatmentList() {
                await axios.get('treatment-notes/' + this.$route.params.id + '/patient', {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {

                        this.treatmentList = response.data['result']

                        console.log(this.treatmentList)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
        }


    }
</script>

<style scoped>

    .buttonsubmit{
        @apply px-4 py-2 bg-regal-teal text-center border text-white font-semibold  rounded-md text-sm flex
    }

</style>