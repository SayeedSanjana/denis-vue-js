<template>

	<Modal :width="'w-1/4'">
		<template v-slot:header>
			<h1 class="font-bold text-xl p-2">Edit General Information</h1>
		</template>
		
		<template v-slot:body>
			<section class="bg-white  px-5">
				<form @submit.prevent="updatePatientInfo(this.$route.params.id)">
					
				<!-- Name -->
				<div class="form-group">
					<label class="form-label" for="name">
						Full Name:
						<div v-show="v$.$error">
							<div v-for="error of v$.formData.name.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>
					</label>
					<input  v-model="formData.name" @blur="v$.formData.name.$touch()" 
						
						:class="{'form-input': true , 'form-input-error': v$.formData.name.$error}"
						id="name" type="text" 
						placeholder="@example John Doe">		
				</div>

				<!-- NID -->
				<div class="form-group">
					<label class="form-label" for="nid">
						NID:
						<div v-show="v$.$error">
							<div v-for="error of v$.formData.nid.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>
					</label>
					<input v-model="formData.nid"
						@blur="v$.formData.nid.$touch()"

						:class="{'form-input': true , 'form-input-error': v$.formData.nid.$error}"
						id="nid" type="text" 
						placeholder="@example 19710XXXX">
				</div>

				<!-- Date of Birth -->
				<div class="form-group">
					<label class="form-label" for="dob">
						Date Of Birth :
						<div v-show="v$.$error">
							<div v-for="error of v$.formData.dob.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>

					</label>
					<!-- <Datepicker type="text" class="form-input" v-model="formData.dob" @blur="v$.formData.dob.$touch()"
					:enableTimePicker="false"></Datepicker> -->
					<input 
					type="date"
					:class="{'form-input': true , 'form-input-error': v$.formData.dob.$error}"
					v-model="dob"
					@blur="v$.formData.dob.$touch()"
					>
				
				</div>

				<!-- Gender -->
				<div class="form-group">
					<label class="form-label" for="gender">
						Gender :
						<div v-show="v$.$error">
							<div v-for="error of v$.formData.gender.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>
					</label>
					<input readonly
						:class="{'form-input': true , 'form-input-error': v$.formData.gender.$error}"
						id="gender" type="text" placeholder="Gender" v-model="formData.gender" 
						@blur="v$.formData.gender.$touch()">
				
				</div>

				<!-- Occupation -->
				<div class="form-group">
					<label class="form-label"
						for="occupation">Occupation :
					</label>
					<input
						class="form-input"
						id="occupation" 
						type="text" 
						placeholder="@example Doctor" v-model="formData.occupation">
				</div>

				<!-- Phone -->
				<div class="form-group">
					<label class="form-label" for="contact">
						Phone :
						<div v-show="v$.$error">
							<div v-for="error of v$.formData.phone.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>
					</label>
					<input @blur="v$.formData.phone.$touch()"
						:class="{'form-input': true , 'form-input-error': v$.formData.phone.$error}"
						id="contact" type="text" placeholder="" v-model="formData.phone"  >
				
				</div>

				<!-- Address -->
				
				<div class="form-group">
					<label class="form-label" for="address">
						Address :
						<div v-show="v$.$error">
							<div v-for="error of v$.formData.address.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>
					</label>
					
					<textarea
					:class="{'form-input': true , 'form-input-error': v$.formData.address.$error}"
					id="address" type="text" 
					placeholder="@example 243/1 West Bank Road#2" 
					v-model="formData.address" @blur="v$.formData.address.$touch()"></textarea>
					
				
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
import swal from 'sweetalert';

import useValidate from '@vuelidate/core';
import {
    required,
    minLength,
    maxLength,
    numeric,
    helpers
  } from '@vuelidate/validators';

import Modal from "../../components/reusable/Modal.vue";

export default {

    components: {
      Modal
    },
    props: {
		// pat: Object,
		patient: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        
        return {
			// message:"",
			// v$: useValidate(),
			// token: localStorage.getItem('token'),
			formData: {
				// ...this.patient
				...this.objectMap({
					name: "",
					phone:"",
					gender: "",
					dob: "",
					nid: "",
					address:"",
					occupation:""

				}, this.patient)
			}
		}
    },
    setup() {
        return {
            v$: useValidate(),
        }
    },
	mounted(){
		this.v$.$touch();

	},
	computed: {
		dob: {
			get() {
				return new Date(this.formData.dob).toISOString().slice(0, 10);
			},
			set(newValue) {
				this.formData.dob = newValue;
			},
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
				dob:{
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
		// close() {
		// 	this.$emit("closeModal");
		// },
		async updatePatientInfo(id) {
            // console.log(this.formData);

			// this.v$.$touch();
			// console.log(this.v$)
        
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
			if (this.v$.$error) throw new Error({message:'Invalid Input'}) 
			const response = await axios.put('/patients/' + id, this.formData );
            Object.assign(this.patient, response.data.data);
            this.$emit("close");
            // console.log(response.data.data);
			swal({
				title: "Success",
				text: "Saved!",
				icon: "success",
				timer: 2000,
				buttons: false
			})

			} catch (error) {
				swal({
					title: "error",
					text: error.message,
					icon: "error",
					buttons: true
				})
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
  .error-banner{
    @apply block py-2 px-4 border-l-4 mb-4 bg-red-100 border-red-400 font-semibold text-lg text-red-800 text-left;
}

  .form-label {
	@apply flex text-left text-regal-teal text-sm font-bold mb-2
  }

  .form-input {
	@apply appearance-none py-3 px-4 mb-3 block w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue
  }
  .form-input-error {
	@apply appearance-none py-3 px-4 mb-3 block w-full bg-white text-red-500 border border-red-300 border-opacity-50 rounded leading-tight focus:outline-none focus:border-red-500
  }
  .form-error-text {
	@apply  px-4 text-regal-red text-sm;
  }
</style>