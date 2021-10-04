import axios from "axios"
const apiClient=axios.create({
    baseURL:'http://178.128.127.150:81/api/billings',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    getBills(id){
        return apiClient.get('/'+id +'/list-bills')
    },
    getSpecificBill(id){
        return apiClient.get('/'+id)
    }
}