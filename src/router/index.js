import { createRouter, createWebHistory } from "vue-router";

import Patient from '../views/Patient.vue';
import AccountSettings from '../views/User/AccountSettings.vue';
import ProfileSettings from '../views/User/ProfileSettings.vue';
import EmployeeProfile from '../views/Employee/EmployeeProfile.vue';
import RegisterPatient from "../views/DoctorsPortal/RegisterPatient.vue";

import PatientDetails from '../views/DoctorsPortal/PatientDetails.vue';
import PatientListBilling from '../views/Billing/PatientListBilling.vue';
import SpecificBilling from '../views/Billing/SpecificBilling.vue';
import PastBillView from '../views/Billing/PastBillView.vue';
import Register from '../views/Authentication/Register.vue';
import Login from '../views/Authentication/Login.vue';
import AppointmentPortal from "../views/Appointment/AppointmentPortal.vue";
import EmployeeList from "../views/Employee/EmployeeList.vue";
import InventoryList from "../views/Inventory/InventoryList.vue";
import SupplyRoom from "../views/Inventory/SupplyRoom.vue";
import RequestforSupply from "../views/Inventory/RequestforSupply.vue";
import Library from "../views/Library.vue";
import AddnewitemInv from "../views/AddnewitemInv.vue";
import Prescription from "../views/Prescription/CreatePrescription.vue";
import Service from "../views/Service/Services.vue";
import BillingWindow from "../views/Billing/BillingWindow.vue";
import ConfirmBill from "../views/Billing/ConfirmBill.vue";

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
    path: '/ProfileSettings',
    name: 'ProfileSettings',
    component: ProfileSettings
  },
  {
    path: '/BillingWindow',
    name: 'BillingWindow',
    component: BillingWindow
  },
  {
    path: '/ConfirmBill/:id',
    name: 'ConfirmBill',
    component: ConfirmBill
  },
  {
    path: '/EmployeeProfile/:id',
    name: 'EmployeeProfile',
    component: EmployeeProfile
  },
  {
    path: '/Prescription/:id',
    name: 'Prescription',
    component: Prescription
  },
  {
    path: '/Service/:id/PresId-:presId',
    name: 'Service',
    component: Service
  },

  {
    path: '/AppointmentPortal',
    name: 'AppointmentPortal',
    component: AppointmentPortal
  },
  {
    path: '/SupplyRoom',
    name: 'SupplyRoom',
    component: SupplyRoom
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library
  },
  {
    path: '/AddnewitemInv',
    name: 'AddnewitemInv',
    component: AddnewitemInv
  },
  {
    path: '/RequestforSupply',
    name: 'RequestforSupply',
    component: RequestforSupply
  },
  {
    path: '/InventoryList',
    name: 'InventoryList',
    component: InventoryList
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
    meta: { layout: 'blank'},
    component: Login
  },
  {
    path: '/register-patient',
    name: 'RegisterPatient',
    meta: { layout: 'blank'},
    component: RegisterPatient
  },
  {
    path: '/patient-details/:id',
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
  history: createWebHistory(),
  routes,
  // linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
});

export default router;
