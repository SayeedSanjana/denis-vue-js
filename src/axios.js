import axios from "axios"
// import 'dotenv/config';
// let ax = axios;

// const NODE_ENV = process.env.NODE_ENV; 

// console.log(process.env.DEV);
// if ( NODE_ENV == 'development') {
   
    axios.defaults.baseURL= 'http://localhost:3000/api/';
// } else {
    
    axios.defaults.baseURL= 'http://178.128.127.150:81/api/';
    //  axios.defaults.baseURL='http://178.128.127.150:81/api/';
//}
