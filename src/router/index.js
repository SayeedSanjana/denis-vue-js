import { createRouter, createWebHistory } from "vue-router";

import Patient from '../views/Patient.vue';
import AccountSettings from '../views/AccountSettings.vue';
import RegisterPatient from "../views/DoctorsPortal/RegisterPatient";
import PatientDetails from '../views/DoctorsPortal/PatientDetails.vue';
import PatientListBilling from '../views/Billing/PatientListBilling';
import SpecificBilling from '../views/Billing/SpecificBilling.vue';
import PastBillView from '../views/Billing/PastBillView';
import Register from '../views/Authentication/Register.vue';
import Login from '../views/Authentication/Login.vue';
import AppointmentPortal from "../views/Appointment/AppointmentPortal.vue";
import EmployeeList from "../views/Employee/EmployeeList.vue";
// import AppointmentList from "../views/AppointmentList.vue";
// import WaitingList from "../views/WaitingList.vue";
// import Createnewappointment from "../views/Createnewappointment.vue";
// import CreateAppointment from "../views/CreateAppointment.vue";
const routes = [
 
  {
    path: '/patient',
    name: 'Patient',
    component: Patient
  },
  {
    path: '/EmployeeList',
    name: 'EmployeeList',
    component: EmployeeList
  },
  
  {
    path: '/AccountSettings',
    name: 'AccountSettings',
    component: AccountSettings
  },
  {
    path: '/AppointmentPortal',
    name: 'AppointmentPortal',
    component: AppointmentPortal
  },
  // {
  //   path: '/AppointmentList',
  //   name: 'AppointmentList',
  //   component: AppointmentList
  // },
  // {
  //   path: '/CreateAppointment',
  //   name: 'CreateAppointment',
  //   component: CreateAppointment
  // },
  // {
  //   path: '/WaitingList',
  //   name: 'WaitingList',
  //   component: WaitingList
  // },
  // {
  //   path: '/Createnewappointment',
  //   name: 'Createnewappointment',
  //   component: Createnewappointment
  // },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register-patient',
    name: 'RegisterPatient',
    component: RegisterPatient
  },
  {
    path: '/patient-details1/:id',
    name: 'PatientDetails',
    component: PatientDetails
  },
  {
    path: '/specific-billing/:id',
    name: 'SpecificBilling',
    component: SpecificBilling
  },
  {
    path: '/past-bill/:id',
    name: 'PastBillView',
    component: PastBillView
  },
  {
    path: '/patient-list-billing',
    name: 'PatientListBilling',
    component: PatientListBilling
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
