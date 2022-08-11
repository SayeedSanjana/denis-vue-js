import {createStore} from 'vuex'
import router from "../router/index"
import axios from "axios"

export default createStore({
	state: {
		patients: [],
        totalPatient: 0,
        totalfoundPatient: 0,
        totalBill: 0,
        // totalfoundBill: 0,
        totalOutstandingBills: 0,
        totalCompletedBills: 0,
        endPage: null,
        patient: {},
        bills:[],
        outStandingBills: [],
        completedBills: [],
        copiedPrescription: null,
        copiedPatient: null,
       
	},

	mutations: {
		setPatients(state, patients) {
			state.patients = patients.data['data']
            state.totalPatient = patients.data.total
            state.totalfoundPatient = patients.data['totalFound']
            // console.log(patients.data['totalFound']);
            state.endPage = patients.data.nextPage
            
		},
        setOutstandingBills(state, outStandingBills){
            state.outStandingBills = outStandingBills.data['data']
            state.totalOutstandingBills = outStandingBills.data['totalFound']
            
            state.endPage = outStandingBills.data.nextPage
        },
        setCompletedBills(state, completedBills){
            state.completedBills = completedBills.data['data']
            state.totalCompletedBills = completedBills.data['totalFound']
            state.endPage = completedBills.data.nextPage
        },


        getPatient(state, patient) {
            state.patient = patient.data
         
        },
        setBills(state, bills) {
            state.bills = bills.data['data']
            state.totalBill = bills.data['totalFound']
            state.endPage = bills.data.nextPage
           
        },
        registerPatient(state, patients) {
            
           
            state.patients.unshift(patients)
            state.totalPatient = state.totalPatient + 1
            state.totalfoundPatient = state.totalfoundPatient + 1
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
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    },
                    params: {
                        page:currentPage,
                        limit:perPage,
                        q:text
                    },
                });

                  return commit('setPatients', data);
 
            } catch (error) {
                if (error.response.data.message == "jwt expired") {
                router.push({
                    name: 'Login'
                })
            }
            else{
                console.log(error);
            }
                   
            }
	
		},

        fetchPatient ({commit}, patientId) {
            axios.get(import.meta.env.VITE_LOCAL+`patients/${patientId}`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                },
            })
                .then((result) => commit('getPatient', result)
                )
        },

      async  fetchBills ({commit} ,{currentPage, perPage, text=''}) {
        try {
            const data = await axios.get(import.meta.env.VITE_LOCAL+'billings', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token') }`
                },
                params: {
                   
                    page:currentPage,
                    limit:perPage,
                    q:text,
                    
                },

            });
            return commit('setBills', data);
            
        } catch (error) {
            if (error.response.data.message == "jwt expired") {
                router.push({
                    name: 'Login'
                })
            }
            else{
                console.log(error);
            } 
    
        }
          
        },
        async  fetchOutstandingBills ({commit} ,{currentPage, perPage, text=''}) {
            try {
                const data = await axios.get(import.meta.env.VITE_LOCAL+'billings', {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    },
                    params: {

                        "filter[paid]": false,
                        page:currentPage,
                        limit:perPage,
                        q:text,
                        
                    },
    
                });
                return commit('setOutstandingBills', data);
                
            } catch (error) {
                if (error.response.data.message == "jwt expired") {
                    router.push({
                        name: 'Login'
                    })
                }
                else{
                    console.log(error);
                }   
            }
              
            },

            async fetchCompletedBills ({commit} ,{currentPage, perPage, text=''}) {
                try {
                    const data = await axios.get(import.meta.env.VITE_LOCAL+'billings', {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        },
                        params: {

                            "filter[paid]": true,
                            page:currentPage,
                            limit:perPage,
                            q:text,
                            
                        },

                    });
                    return commit('setCompletedBills', data);
                    
                } catch (error) {
                    if (error.response.data.message == "jwt expired") {
                        router.push({
                            name: 'Login'
                        })
                    }
                    else{
                        console.log(error);
                    }    
                }
                  
                }

       
	}

})