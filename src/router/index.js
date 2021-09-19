import { createRouter, createWebHistory } from "vue-router";

import Patient from '../views/Patient.vue'
import RegisterPatient from "../views/DoctorsPortal/RegisterPatient";
import PatientDetails from '../views/DoctorsPortal/PatientDetails.vue';
import PatientListBilling from '../views/Billing/PatientListBilling';
import SpecificBilling from '../views/Billing/SpecificBilling.vue';
import PastBillView from '../views/Billing/PastBillView';

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: '/patient',
    name: 'Patient',
    component: Patient
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
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
