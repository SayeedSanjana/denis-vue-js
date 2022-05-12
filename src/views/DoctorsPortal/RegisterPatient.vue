<template>
	
	<Modal :width="'w-1/4'">
		<template v-slot:header>
			<h1 class="font-bold text-xl p-2">Create New Patient</h1>
		</template>

		<template v-slot:body>
			<section class="bg-white dark:bg-gray-800 px-5 ">
				<!-- form input starts here -->
				<form @submit.prevent="createPatient" >
					
						<!-- Name -->
						<div class="form-group">
							<label class="form-label" for="name">
								Full Name
						<div v-show="v$.formdata.name.$error">
							<div v-for="error of v$.formdata.name.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
							</div>
						</div>

						</label>

							<input 
								class="form-input" 
								id="name" type="text" placeholder="@example John Doe" v-model.trim="v$.formdata.name.$model">
						</div>

						<!-- phone -->
				
						<div class="form-group">
							<label class="form-label" for="phone">
								Phone 
							<div v-show="v$.formdata.phone.$error">
								<div v-for="error of v$.formdata.phone.$errors" :key="error.$uid">
									<small class="form-error-text">
										{{error.$message}}
									</small>
										
								</div>
							</div>
						</label>
							<input  
								class="form-input"
								id="phone" type="text" placeholder="@example +880 162 7XX XXXX" v-model.trim="v$.formdata.phone.$model">
						
						</div>

						<!-- Gender -->
				

					
						<div class="form-group">
							<label class="form-label" for="gender">
								Gender
							<div v-show="v$.formdata.gender.$error">
								<div v-for="error of v$.formdata.gender.$errors" :key="error.$uid">
								<small class="form-error-text">
									{{error.$message}}
								</small>
									
							</div>
						</div>
						</label>
							<div class="relative">
								<select 
									class="form-input"
									id="gender" 
									v-model.trim="v$.formdata.gender.$model"
									>
									<option>none</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="others">Others</option>
								</select>
								<div
									class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
									<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20">

										<path
											d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						
						</div>

						<!-- Date of Birth -->
					

				
						<div class="form-group">
							<label class="form-label" for="dob">Date Of Birth
							
							<div v-show="v$.formdata.dob.$error">
								<div v-for="error of v$.formdata.dob.$errors" :key="error.$uid">
									<small class="form-error-text">
										{{error.$message}}
									</small>
										
								</div>
							</div>
						</label>
						<input
						class="form-input"
						id="date" type="text" 
						placeholder="Month - Day - Year"
						onfocus="(this.type='date')"
						onblur="(this.type='text')"
						v-model.trim="v$.formdata.dob.$model" 
						>
			
						</div>

						<!-- Create button -->
					
					<div class="py-4">
						
						<button type="submit" class="buttonsubmit w-full">
							Create Patient
						</button>
					</div>
				</form>
			</section>
		</template>
	</Modal>




</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import Modal from "../../components/reusable/Modal.vue"
import useValidate from '@vuelidate/core';
import {required,minLength,maxLength,numeric,helpers} from '@vuelidate/validators';

export default {	  
	
	components: {
		Modal
	},
    data() {
      return {
        // token: localStorage.getItem('token'),
        formdata: {
          name: '',
          gender: 'none',
          phone: '',
          dob: ''
        }
      }
    },
	setup() {
        return {
            v$: useValidate(),
        }
    },
	
    validations(){
     const nospecial=helpers.regex(/^[A-Za-z\s]+$/);
     return {
		formdata:{
			name: {
				required,
				minLength: minLength(3),
				nospecial: helpers.withMessage("Should not include special characters like '@#.,'", nospecial)
			},
			gender: {
				required,
			},
			phone: {
				required,
				numeric,
				minLength: minLength(11),
				maxLength: maxLength(14),
			},
			dob: {
				required,
			},
		}

     }
    },
    methods: {
      async createPatient() {
        this.formdata.phone = this.formdata.phone.replace(/\s/g, '');
		
		
			try {
				if (this.v$.$error) throw new Error("Whoops!! You need to complete the required information!!");
				const response = await axios.post('patients/', this.formdata);
				
				if(response.data.status === 'success'){
					this.$emit('register', response.data.data);
					this.$emit('close');
					swal({
						title: "Success",
						text: "Patient created Successfully!",
						icon: "success",
						timer: 1000,
						buttons: false
					});

				}
				
			} catch (error) {
				swal({
					title: "error",
					text: error.message,
					icon: "error",
					buttons: false
				});
			}		
        }
    }
  }
</script>

<style scoped>
 .buttonsubmit {
	@apply px-4 py-2 bg-regal-teal text-center border text-white font-semibold rounded-md tracking-wider text-base;
  }
.buttonsubmit:hover{
	@apply bg-regal-cyan cursor-pointer;
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
	@apply appearance-none block py-3 px-4 mb-3 w-full bg-white text-regal-teal border border-regal-teal border-opacity-50 rounded leading-tight focus:outline-none focus:border-regal-blue
  }
  .form-input-error {
	@apply appearance-none py-3 px-4 mb-3 block w-full bg-white text-red-500 border border-red-300 border-opacity-50 rounded leading-tight focus:outline-none focus:border-red-500
  }
  .form-error-text {
	@apply  px-2 text-regal-red text-xs;
  }
</style>