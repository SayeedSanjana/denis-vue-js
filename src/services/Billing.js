import axios from "axios"
const apiClient=axios.create({
    baseURL:'http://localhost:3000/api/billings',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    getBills(id){
        return apiClient.get('/'+id +'/list-bills')
    }
}