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
import AppointmentList from "../views/AppointmentList.vue";
import WaitingList from "../views/WaitingList.vue";
import Createnewappointment from "../views/Createnewappointment.vue";
const routes = [
 
  {
    path: '/patient',
    name: 'Patient',
    component: Patient
  },
  
  {
    path: '/AccountSettings',
    name: 'AccountSettings',
    component: AccountSettings
  },
  {
    path: '/AppointmentList',
    name: 'AppointmentList',
    component: AppointmentList
  },
  {
    path: '/WaitingList',
    name: 'WaitingList',
    component: WaitingList
  },
  {
    path: '/Createnewappointment',
    name: 'Createnewappointment',
    component: Createnewappointment
  },

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
