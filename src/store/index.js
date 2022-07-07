import {createStore} from 'vuex'
import axios from "axios"

export default createStore({
	state: {
		patients: [],
        totalPatient: 0,
        totalBill: 0,
        endPage: null,
        patient: {},
        bills:[],
        copiedPrescription: null,
        copiedPatient: null,
       
	},

	mutations: {
		setPatients(state, patients) {
			state.patients = patients.data['data']
            state.totalPatient = patients.data.total
            state.endPage = patients.data.nextPage
            
		},
        getPatient(state, patient) {
            state.patient = patient.data
         
        },
        setBills(state, bills) {
            state.bills = bills.data['data']
            state.totalBill = bills.data.total
            state.endPage = bills.data.nextPage
           
        },
        registerPatient(state, patients) {
            
           
            state.patients.unshift(patients)
            state.totalPatient = state.totalPatient + 1
            state.endPage = state.endPage + 1
        },
        setCopiedPrescription(state, copiedPrescription) {
            state.copiedPrescription = copiedPrescription
           
        },
        clearCopiedPrescription(state) {
            state.copiedPrescription = null
        },
        setCopiedPatient(state, copiedPatient) {
            state.copiedPatient = copiedPatient
           
        },
        clearCopiedPatient(state) {
            state.copiedPatient = null
        }

       

},
	actions: {


		async fetchPatients({commit} ,{currentPage, perPage, text=''}) {
           
			try {
                
                const data = await axios.get(import.meta.env.VITE_LOCAL+'patients', {
                    params: {
                        page:currentPage,
                        limit:perPage,
                        q:text
                    },
                });
                // console.log(data);
                return commit('setPatients', data);
            } catch (error) {
                console.log(error);    
            }


				
		},

        fetchPatient ({commit}, patientId) {
            // axios.get(`http://localhost:3000/api/patients/${patientId}`)
            axios.get(import.meta.env.VITE_LOCAL+`patients/${patientId}`)
                .then((result) => commit('getPatient', result)
                )
        },

        // fetchPatient({commit}, patientId) {
        //     axios.get(import.meta.env.VITE_LOCAL+'patients/' ,{
        //         params: {
        //             id : patientId,
                    
                    

        //         }
        //     })
        //     .then((result) => commit('getPatient', result)
            
        //     )
        //     console.log(patientId);
        // },

      async  fetchBills ({commit} ,{currentPage, perPage, text=''}) {
        try {
            const data = await axios.get(import.meta.env.VITE_LOCAL+'billings', {
                params: {
                    page:currentPage,
                    limit:perPage,
                    q:text,
                    
                },

            });
            return commit('setBills', data);
            
        } catch (error) {
            console.log(error);    
    
        }
          
        },
       
	}

})