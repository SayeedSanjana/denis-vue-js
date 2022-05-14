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
            console.log("Hi");
           
            state.patients.unshift(patients)
            state.totalPatient = state.totalPatient + 1
            state.endPage = state.endPage + 1
        },
      

        // editPatient(state, patient) {
        //     state.patient = patient.data
        //     console.log(state.patient.data);
        // }


},
	actions: {
		async fetchPatients({commit} , currentPage, perPage , text) {
			try {
                const data = await axios.get('http://localhost:3000/api/patients', {
                    params: {
                                    page:currentPage,
                                    limit:perPage,
                                    q:text
                                },
    
                },);
                return commit('setPatients', data);
                
            } catch (error) {
                console.log(error);    
            }

				// .then((result) => commit('setPatients', result) 
            
                // )
		},

        fetchPatient ({commit}, patientId) {
            axios.get(`http://localhost:3000/api/patients/${patientId}`)
                .then((result) => commit('getPatient', result)
                )
        },

        fetchBills ({commit} , currentPage, perPage , text) {
            axios.get(`http://localhost:3000/api/billings`, {
                params: {
                    page:currentPage,
                    limit:perPage,
                    q:text
                },

            })
            .then((result) => commit('setBills', result)
            )
        },

       

        // updatePatient({commit}, patientId) {
        //     axios.put(`http://localhost:3000/api/patients/${patientId}`, )
        //         .then((result) => commit('editPatient', result)
        //         )
        // }
	}

})