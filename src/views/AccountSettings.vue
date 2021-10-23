<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-screen bg-regal-white">
        <section class="w-full">
            <p class="headername">Account Settings </p>
            <!-- form -->
            <form  @submit.prevent="updateUser()" class="w-1/2">
                <!-- fullname -->
                <div class="formbox">
                    <label for="" class="labeldesign">Full Name</label>

                    <input type="text" class="inputfield" v-model="formData.name">
                </div>
                <!-- fullname -->
                <div class="flex formbox">
                    <!-- email -->
                    <div class="w-1/2 pr-4">
                        <label for="" class="labeldesign">Email</label>

                        <input type="text" class="inputfield" v-model="formData.email">
                    </div>
                    <!-- email -->
                    <!-- phone number -->
                    <div class="w-1/2">
                        <label for="" class="labeldesign">Phone Number</label>

                        <input type="text" class="inputfield" v-model="formData.phone">
                    </div>
                    <!-- phone number -->
                </div>
                <!-- address -->
                <div class="formbox">
                    <label for="" class="labeldesign">Address</label>
                    <textarea type="text" class="h-40 inputfield" v-model="formData.address"></textarea>
                </div>
                <!-- address -->

            </form>
            <!-- form -->

            <p class="headername">Password Settings </p>
            <!-- change password -->
            
            <div class="formbox">
                <button v-show="!a" @click="a = true" class="newbutton">Change Password</button>
            </div>
            <!-- change password -->
            <form  @submit.prevent="changePassword()">
            <div v-show="a" class=" w-full formbox">
                <div class="flex">
                   
                    <div class="w-1/2 pr-12">
                        <!-- old password -->
                        <div class="w-1/2 pr-4">
                            <label for="" class="labeldesign">Old Password</label>
                            <input type="password"  class="inputfield">
                        </div>
                        <!-- old password -->
                        <div class="flex">
                            <!--new password -->
                            <div class="w-1/2 pr-4">
                                <label for="" class="labeldesign">New Password</label>
                                <input type="password"  class="inputfield" v-model="newPassword">
                            </div>
                            <!--new password -->
                            <!-- confirm password-->
                            <div class="w-1/2">
                                <label for="" class="labeldesign">Confirm Password</label>
                                <input type="password" class="inputfield" v-model="confirmPassword">
                                   <small><p class="text-regal-red">{{this.str}}</p></small>
                            </div>
                            <!-- confirm password -->
                        </div>
                    </div>
                     <div class="w-1/2 mt-24 mr-28 ">
                        <button @click="changePassword()" class="newbutton1 mt-2.5">Confirm</button>
                    </div>
                </div>
            </div>
            </form>


            <!-- change password -->

            <div v-show="!a" class="h-28 ">

            </div>


            <!-- <p class="secondaryheadername">Additional Information </p> -->

            <p class="mt-6  px-52 labeldesign">Account Creation Date : <span class="pl-5 labeldesign"> 20 April,2021 at
                    8.56 PM </span></p>

            <div class="flex formbox">
                <!-- Save -->
                <button @click="updateUser()" class="newbutton1  mr-5">Save</button>
                <!-- Save -->
                <!-- cancel -->
                <button class="newbutton2">Cancel</button>
                <!-- cancel -->
            </div>



        </section>
    </div>
</template>

<script>
    import Nav from "../components/Nav.vue";
    import axios from "axios";
    import swal from 'sweetalert';
    export default {
        components: {
            Nav,
        },
          created() {
            //this.parseJwt(this.token)
            this.getUser()
        },
        data() {
            return {
                token: localStorage.getItem('token'),
                uid:'6145812934bfa3eea55fc5a1',
                str:'',
                formData:{
                    name:'',
                    email:'',
                    phone:'',
                    gender:'',
                    address:'',
                },
                newPassword:'',
                confirmPassword:'',
                a: false
            }
        },
        methods:{
             parseJwt(token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                var jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (
                c) {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(''));
                const payload = JSON.parse(jsonPayload);
                this.uid = payload.sub
                console.log(payload.sub);
            },

             async getUser() {
                await axios.get('users/search/' + this.uid, {
                        headers: {
                            "Authorization": `Bearer ${localStorage.getItem('token') }`
                        }
                    })
                    .then((response) => {
                        this.formData = response.data['result'];
                        console.log(this.formData)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            },

            async updateUser() {
                console.log(this.formData)
                await axios.put('users/update/'+ this.uid, this.formData, {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token') }`
                    }
                    })
                    .then((response) => {
                    swal({
                        title: "Success",
                        text: "Information updated Successfully!",
                        icon: "success",
                        timer: 1000,
                        buttons: false
                    })
                    console.log(response);
                    })
                    .catch((error) => {
                    console.log(error)
                    })
                this.formValid = true
                },

                async changePassword() {
                    const pattern =new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
                    if (this.newPassword === '' || this.confirmPassword==='') {
                    this.str= 'Password cannot be blank';
                    } else if (this.newPassword.length< 8) {
                    this.str= 'Password should be atleast 8 characters'
                    }else if(pattern.test(this.newPassword)){
                        this.str="(Should include 0-9,A-Z, a-z and special characters)"
                    }
                    // else if(this.newPassword===this.confirmPassword){
                    //     this.str=''
                    //     console.log(this.formData)
                    //    await axios.put('users/update/'+ this.uid, this.formData, {
                    // headers: {
                    //     "Authorization": `Bearer ${localStorage.getItem('token') }`
                    // }
                    // })
                    // .then((response) => {
                    // swal({
                    //     title: "Success",
                    //     text: "Information updated Successfully!",
                    //     icon: "success",
                    //     timer: 1000,
                    //     buttons: false
                    // })
                    // console.log(response);
                    // })
                    // .catch((error) => {
                    // console.log(error)
                    // })
                    // this.str=''
                    // console.log("wrong")
                    // }
                    else{
                    this.str="Password doesnot match"
                    }
                },

      },

        }

</script>

<style scoped>

</style>