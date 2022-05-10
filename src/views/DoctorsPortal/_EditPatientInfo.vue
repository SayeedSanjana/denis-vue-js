<template>

	<Modal :width="'w-1/4'">
		<template v-slot:header>
			<h1 class="font-bold text-xl p-2">Edit General Information</h1>
		</template>
		
		<template v-slot:body>
		<!-- <section class="p-3 bg-white dark:bg-gray-800 px-12"> -->
			<section class="bg-white dark:bg-gray-800 px-5">

				<!-- <div class="flex items-center justify-center"> -->
                    <!-- <form @submit.prevent="updatePatientInfo(this.$route.params.id)" class="w-96"> -->
                        <form @submit.prevent="updatePatientInfo(this.$route.params.id)">
                        {{formData}}
						<!-- Name -->
						<div class="form-group">
							<label class="form-label" for="duuid">
								Full Name
							</label>
							<input v-model="formData.name" @blur="v$.formData.name.$touch()"
								class="form-input"
								id="name" type="text" placeholder="Name">
							<small v-if="v$.formData.name.$error" class="form-error-text">
								{{v$.formData.name.$errors[0].$message}}
							</small>
							
						</div>

						<!-- NID -->
						<div class="form-group">
							<label class="form-label" for="nid">NID
								:</label>
							<input @blur="v$.formData.nid.$touch()"
								class="form-input"
								id="nid" type="text" placeholder="Enter NID" v-model="this.formData.nid">
							<small v-if="v$.formData.nid.$error" class="form-error-text">
								{{v$.formData.nid.$errors[0].$message}}
							</small>

						</div>

						<!-- Date of Birth -->
						<div class="form-group">
							<label class="form-label" for="dob">
								Date Of Birth :
							</label>
							<!-- <Datepicker type="text" class="form-input" v-model="formData.dob" @blur="v$.formData.dob.$touch()"
							:enableTimePicker="false"></Datepicker> -->
							<!-- <input type="date" class="form-input" :value="new Date(formData.dob).toISOString().slice(0, 10)"> -->
						</div>

						<!-- Gender -->
						<div class="form-group">
							<label class="form-label" for="gender">
								Gender :
							</label>
							<input readonly
								class="form-input"
								id="gender" type="text" placeholder="Gender" v-model="formData.gender">
							<small v-if="v$.formData.gender.$error" class="form-error-text">
								{{v$.formData.gender.$errors[0].$message}}
							</small>
						</div>

						<!-- Occupation -->
						<div class="form-group">
							<label class="form-label"
								for="occupation">Occupation :
							</label>
							<input
								class="form-input"
								id="occupation" type="text" placeholder="" v-model="formData.occupation">
						</div>

						<!-- Phone -->
						<div class="form-group">
							<label class="form-label" for="contact">
								Phone :
							</label>
							<input @blur="v$.formData.phone.$touch()"
								class="form-input"
								id="contact" type="text" placeholder="" v-model="formData.phone">
							<small v-if="v$.formData.phone.$error" class="form-error-text">
								{{v$.formData.phone.$errors[0].$message}}
							</small>
						</div>

						<!-- Address -->
						
						<div class="form-group">
							<label class="form-label" for="address">
								Address :
							</label>
							
							<textarea
							class="form-input"
							id="address" type="text" placeholder="" v-model="formData.address"></textarea>
							
							<small v-if="v$.formData.address.$error" class="form-error-text">
								{{v$.formData.address.$errors[0].$message}}
							</small>
						</div>
						
						<!-- Update Button -->
						<div class="mt-8 py-3 px-3 flex justify-end">
							<button class="buttonsubmit">Update Profile</button>
						</div>
					
					</form>
				
				<!-- </div> -->
			</section>
		</template>
	</Modal>        
              
</template>

<script>
import axios from "axios";
// import swal from 'sweetalert';
// import moment from "moment";
import useValidate from '@vuelidate/core';
import {
    required,
    minLength,
    maxLength,
    numeric,
    helpers
  } from '@vuelidate/validators';
//   import Datepicker from 'vue3-date-time-picker';
  import 'vue3-date-time-picker/dist/main.css'
  import Modal from "../../components/reusable/Modal.vue";
export default {

    components: {
    //   Datepicker,
      Modal
    },
    props: {
		// pat: Object,
		patient: {
            type: Object,
            default: () => ({}),
        },
    },

    created() {
        this.formData = Object.assign({
                    name: "",
                    gender: "",
                    dob: "",
                    phone:"",
                    nid: "",
                    address:"",

        }, this.patient)
		// this.getPat(this.pat)
    },

    watch: {
    
    },


    data() {
        
        return {

        // v$: useValidate(),
        // token: localStorage.getItem('token'),
        formData: {
			...this.patient
        }
    
       
       
      }
    },
    setup() {
        return {
            v$: useValidate(),
        }
    },
    validations() {
		const nospecial = helpers.regex(/^[A-Za-z\s]+$/);
		return {
			
			formData: {
				name: {
					required,
					minLength: minLength(3),
					nospecial: helpers.withMessage("Should include alphabets only and don't add special characters like '@#.,'",
					nospecial)
				},
				
				gender: {
					required
				},
			
				address: {
					minLength: minLength(3)
				},
				
				phone: {
					required,
					numeric,
					minLength: minLength(11),
					maxLength: maxLength(14)
				},
				
				nid: {
					minLength: minLength(9),
					maxLength: maxLength(20)
				}
			}
		}
    },
    methods: {
		close() {
			this.$emit("closeModal");
		},
		// getPat(i) {
     
		// 	// this.formData.name = i.name,
		// 	// this.formData.phone = i.phone,
		// 	// this.formData.dob = i.dob,
		// 	// this.formData.nid = i.nid,
		// 	// this.formData.gender = i.gender,
		// 	// this.formData.occupation = i.occupation,
		// 	// this.formData.address = i.address
		// 	Object.assign(this.formData, i);
		// },

		// async getPatient(id) {
		// 	// const format2 = 'LL';
		// 	try {
		// 		const response = await axios.get('patients/' + id, {
		// 			headers: {
		// 			"Authorization": `Bearer ${localStorage.getItem('token') }`
		// 			}
		// 		});
		// 		// this.formData = response.data.data;
		// 		// this.formData.dob = new Date(this.formData.dob);
		// 		// this.formData.dob = new Date(this.formData.dob).toLocaleDateString();
		// 		// this.formData.dob = moment(this.formData.dob).format(format2);
		// 		Object.assign(this.formData, response.data.data);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// },

		async updatePatientInfo(id) {
            console.log(this.formData);

			this.v$.$touch();
        
			// if (this.v$.$error) throw new Error(this.v$.$error);
			// this.formData.phone = this.formData.phone.replace(/\s/g, '')

			// if (this.formData.address === "") {
			// 	this.formData.address = 'N/A';

			// }
			// ! biirthdate is not changing when we update the patient info
			// !birthdate needs to be fixed
			
			// if (this.formData.occupation === "") {
			// 	this.formData.occupation = 'N/A';

			// }
			try {
			const response = await axios.put('/patients/' + id, this.formData );
            Object.assign(this.patient, this.formData);
            this.$emit("closeModal");
            console.log(response.data.data);
         
			// if (response.data.status === 'success') {
			// 	// console.log(response);
			// 	swal({
			// 		title: "Success",
			// 		text: "Patient updated Successfully!",
			// 		icon: "success",
			// 		timer: 1000,
			// 		buttons: false
			// 	})
			// }

			} catch (error) {
                console.log(error);


				// swal({
				// 	title: "error",
				// 	text: error.message,
				// 	icon: "error",
				// 	buttons: true
				// })
			}
		}
    },
}
</script>


<style scoped>

  .buttonsubmit {
	@apply px-4 py-2 bg-regal-teal text-center border text-white font-semibold rounded-md text-sm flex;
  }

  .form-group {
	@apply w-full lg:w-full;
  }

  .form-label {
	@apply block text-left text-regal-teal text-sm font-bold mb-2
  }

  .form-input {
	@apply appearance-none py-3 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue
  }
  .form-error-text {
	@apply flex justify-start text-regal-red
  }
</style>