<template>
    <!-- header -->
    <header class="headerclass">
        <Nav />
    </header>
    <!-- header -->
    <div class="h-screen bg-regal-white">
        <section class="w-full">
            <h3 class="headername">Account Settings </h3>
            <div class="w-full flex">
                <!-- form -->
                <form @submit.prevent="updateUser()" class="w-1/2">
                    <!-- fullname -->
                    <div class="formbox">
                        <label for="" class="labeldesign">Full Name</label>
                        <input type="text" class="inputfield" v-model="formData.name">
                    </div>
                    <!-- fullname -->

                     <!-- email -->
                    <div class="flex formbox">
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

                    <p class="mt-6  px-52 labeldesign">Account Creation Date : <span class="pl-5 labeldesign"> 20 April,2021 at 8.56 PM </span></p>

                    <div class="flex formbox">
                        <!-- Save -->
                        <button @click="updateUser()" class="newbutton1  mr-5">Save</button>
                        <!-- Save -->
                        <!-- cancel -->
                        <button class="newbutton2">Cancel</button>
                        <!-- cancel -->
                    </div>

                </form>

                <!-- form -->

                <!-- Visiting Card -->
                <div class="lg:w-1/2   ">
                    <div class="w-3/5  mt-12 ml-40  ">
                        <div class=" border rounded-lg border-regal-blue border-opacity-20 shadow-xl">


                            <div class=" pt-10 rounded-t-lg bg-regal-cyan"></div>
                            <div class="flex justify-between p-4 mt-2">
                                <div class="ml-3 ">
                                    <h4 class="text-xl text-regal-teal font-semibold mb-2">Dr. {{this.formData.name}}</h4>
                                </div>
                                <div class="mr-3">
                                    <h4 class="text-xl text-regal-teal font-semibold mb-2"> MT DENTAL CENTER</h4>
                                </div>
                            </div>
                            <div class="w-1/2 ml-7 mb-7 mt-3 border-t border-regal-blue"></div>

                            <div class="flex justify-between ">
                                <div class="p-2 ml-5">
                                    <h1 class="flex justify-start text-regal-teal mb-1"><span> Email </span><span class="ml-20 pl-1 pr-2">:</span><span>{{this.formData.email}}</span></h1>
                                    <h1 class="flex justify-start text-regal-teal mb-1"><span> Phone Number </span><span class="ml-4 pr-2">:</span> <span>{{this.formData.phone}}</span></h1>
                                    <h1 class="flex justify-start text-regal-teal mb-1"><span> Address </span><span class="ml-16 pr-2">:</span> <span>{{this.formData.address}}</span></h1>
                                </div>

                                <div class="mt-5">
                                    <svg width="120" height="100" viewBox="0 0 188 145" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M184.563 97.3583C185.703 96.8666 186.849 96.3559 188 95.8217V86.1737C187.63 86.3227 187.26 86.4696 186.889 86.6142C185.885 87.0053 184.879 87.3803 183.875 87.7411C182.98 88.0624 182.086 88.3725 181.197 88.6728C177.806 89.8178 174.467 90.8085 171.281 91.6899C168.094 92.5707 165.054 93.3315 162.239 93.9926C159.721 94.5844 157.383 95.0966 155.272 95.5365C153.698 95.8647 152.249 96.1523 150.945 96.4032C150.681 90.434 149.825 84.5053 148.392 78.7045C145.423 66.6938 151.822 51.5238 151.822 51.5238C151.822 51.5238 168.475 23.1176 154.924 9.1967C137.109 -9.10604 117.039 5.56291 117.039 5.56291C113.447 7.36076 110.056 8.07072 106.827 8.07463C103.598 8.07902 100.211 7.36076 96.6143 5.56291C96.6143 5.56291 76.5405 -9.10604 58.73 9.1967C50.6431 17.5043 53.312 30.9584 56.7793 40.4765C53.2593 41.3974 48.5259 42.7348 43.0449 44.5961C40.4028 45.4931 37.5869 46.5121 34.6494 47.6723C34.2388 47.8344 33.8262 47.9994 33.4111 48.1669C32 48.7367 30.5625 49.3378 29.1055 49.975C27.0679 50.8661 24.9917 51.8266 22.897 52.8676C19.1523 54.7104 15.5386 56.807 12.0801 59.1425C11.4219 59.5907 10.7744 60.0541 10.1382 60.5331C9.00049 61.3896 7.89941 62.2939 6.83789 63.2436C5.14746 64.7817 3.50781 66.495 2.12988 68.6669C1.93652 68.9706 1.75439 69.2812 1.58398 69.5976C1.11035 70.4775 0.726562 71.4047 0.439453 72.3642C0.232422 73.078 0.0957031 73.8105 0.0317383 74.5512L0.0126953 74.8363L0 75.1698V75.6982C0.0117188 75.8886 0.0205078 76.0785 0.0341797 76.268C0.0454102 76.4184 0.0595703 76.5688 0.0800781 76.7187C0.235352 78.0424 0.578125 79.3373 1.09863 80.5639C1.59131 81.7118 2.21094 82.8012 2.9458 83.8114C4.30469 85.642 5.91357 87.2734 7.7251 88.6581C9.38574 89.9369 11.1426 91.0854 12.9805 92.0932C16.3525 93.9218 19.8691 95.4701 23.4946 96.7226C24.6938 97.1469 25.875 97.538 27.0337 97.9008C29.1689 98.5688 31.2295 99.1401 33.1895 99.6444C36.2134 100.422 39.0044 101.026 41.4829 101.516C42.6895 101.755 43.8228 101.966 44.8735 102.153C45.9819 102.351 46.9985 102.521 47.9131 102.67C49.6943 102.959 51.106 103.158 52.0654 103.304L53.5317 103.515C53.5879 103.525 53.645 103.523 53.6997 103.51C53.7451 103.499 53.7886 103.479 53.8281 103.453C53.9146 103.393 53.9741 103.302 53.9932 103.199C54.0127 103.096 53.9902 102.989 53.9312 102.903C53.8716 102.816 53.7808 102.757 53.6777 102.737L52.2383 102.393C51.3022 102.165 49.9312 101.829 48.1919 101.371C46.4531 100.912 44.3525 100.331 41.9629 99.6103C39.5728 98.8901 36.8916 98.0238 34.02 96.9779C31.1484 95.932 28.0718 94.7069 24.9341 93.2362C21.667 91.7348 18.5283 89.9682 15.5498 87.9545C14.0381 86.9198 12.6089 85.7699 11.2754 84.5146C9.99512 83.33 8.8877 81.9716 7.98535 80.4794C7.79785 80.1586 7.62744 79.829 7.4751 79.4911C7.3042 79.1117 7.15576 78.7221 7.03027 78.3241C6.8208 77.6391 6.71045 76.9277 6.70264 76.2118C6.70264 76.0385 6.71289 75.8652 6.71729 75.6938C6.71729 75.747 6.72998 75.4086 6.74072 75.455L6.74902 75.4262L6.75342 75.4047L6.77002 75.3051C6.79785 75.1669 6.83252 75.0302 6.87305 74.8949C6.91455 74.7563 6.96289 74.6195 7.01758 74.4853C7.14453 74.1835 7.29004 73.8901 7.45312 73.6064C7.63818 73.2841 7.84521 72.975 8.07373 72.6811C9.01416 71.4452 10.3306 70.2387 11.7739 69.1381C13.2656 68.0199 14.8291 67.0009 16.4541 66.0873C19.7451 64.2489 23.1567 62.6366 26.6665 61.2616C30.1152 59.8886 33.5317 58.7265 36.8091 57.6996C40.0864 56.6728 43.2222 55.8256 46.1401 55.101C51.9639 53.6537 56.8828 52.7304 60.3228 52.143C60.9189 52.0414 61.4702 51.953 61.9756 51.8725C62.9136 54.2323 67.9595 67.7709 65.2612 78.6943C60.1118 99.5155 62.6792 120.687 71.1904 140.721C72.7495 144.389 74.543 148.135 76.3604 151H85.6011C86.3604 148.305 86.9507 144.4 87.3105 139.001C89.1279 111.759 93.2739 95.0321 106.82 95.0321C120.523 95.0321 124.513 111.759 126.33 139.001C126.69 144.4 127.28 148.305 128.04 151H137.28C139.098 148.135 140.891 144.389 142.45 140.721C146.852 130.368 149.665 119.697 150.643 108.932L151.276 108.761C154.668 107.835 159.494 106.46 165.223 104.592C168.086 103.659 171.175 102.6 174.421 101.402C177.667 100.204 181.068 98.8666 184.563 97.3583ZM184.083 53.9628C185.358 54.37 186.667 54.8153 188 55.3095V59.4672C186.422 58.641 184.857 57.8891 183.326 57.2016C182.139 56.6689 180.972 56.1742 179.836 55.7138C177.132 54.6171 174.604 53.7021 172.348 52.9394C170.915 52.455 169.588 52.0302 168.39 51.6596C167.701 51.4467 167.055 51.2519 166.455 51.0741C164.809 50.5859 163.507 50.2245 162.622 49.9814L161.254 49.6142C161.157 49.5868 161.074 49.5234 161.022 49.4369C160.97 49.3505 160.953 49.248 160.974 49.1493C160.995 49.0507 161.052 48.9633 161.135 48.9057C161.182 48.873 161.234 48.851 161.289 48.8412C161.332 48.8334 161.375 48.8324 161.419 48.8388L162.818 49.0497C163.733 49.2001 165.068 49.4174 166.773 49.7304C167.507 49.8647 168.307 50.0165 169.168 50.1874C170.309 50.414 171.558 50.6733 172.901 50.9682C175.26 51.4858 177.914 52.1366 180.787 52.9648C181.856 53.2729 182.957 53.6029 184.083 53.9628ZM72.8428 50.6239C72.7085 50.7836 72.5503 50.9213 72.3735 51.0317C71.9321 51.3041 71.4004 51.3905 70.8955 51.2719C70.585 51.1991 70.3003 51.0522 70.063 50.8471C69.9146 50.7187 69.7852 50.5678 69.6797 50.3979C69.5229 50.1484 69.3691 49.8969 69.2188 49.6479C67.0981 46.2177 65.3848 42.5517 64.1138 38.725C63.4956 36.8305 63.0293 34.8896 62.7192 32.9208C62.0112 28.3617 62.2734 23.9838 63.499 19.9062C65.6016 12.9003 69.8232 9.22648 70.0029 9.07414C70.3979 8.76066 70.8994 8.61173 71.4019 8.65959C71.9043 8.70695 72.3687 8.9467 72.6982 9.32902C73.0278 9.71086 73.1968 10.206 73.1694 10.7099C73.1426 11.2133 72.9219 11.6874 72.5532 12.0321C72.4897 12.0893 68.9102 15.2753 67.1797 21.2416C65.5166 26.9779 66.0239 33.2441 68.6865 39.9482C69.4204 41.7807 70.2671 43.5658 71.2222 45.2934C71.77 46.2978 72.3633 47.3095 73.001 48.3295C73.2207 48.6796 73.3237 49.0903 73.2954 49.5024C73.2666 49.9145 73.1084 50.3075 72.8428 50.6239Z"
                                            fill="url(#paint0_linear_623:1039)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_623:1039" x1="130.5" y1="89" x2="82.5"
                                                y2="31" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#098BC2" />
                                                <stop offset="1" stop-color="#00D7E1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div class=" pt-2 rounded-b-lg bg-regal-cyan">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Visiting Card -->

            </div>


            <h3 class="headername">Password Settings </h3>
            <!-- change password -->

            <div class="formbox">
                <button v-show="!a" @click="a = true" class="newbutton">Change Password</button>
            </div>
            <!-- change password -->
            <form @submit.prevent="changePassword()">
                <div v-show="a" class=" w-full formbox">
                    <div class="flex">

                        <div class="w-1/2 pr-12">
                            <!-- old password -->
                            <div class="w-1/2 pr-4">
                                <label for="" class="labeldesign">Old Password</label>
                                <input type="password" class="inputfield" v-model="oldPassword">
                            </div>
                            <!-- old password -->
                            <div class="flex">
                                <!--new password -->
                                <div class="w-1/2 pr-4">
                                    <label for="" class="labeldesign">New Password</label>
                                    <input type="password" class="inputfield" v-model="newPassword">
                                </div>
                                <!--new password -->
                                <!-- confirm password-->
                                <div class="w-1/2">
                                    <label for="" class="labeldesign">Confirm Password</label>
                                    <input type="password" class="inputfield" v-model="confirmPassword">

                                </div>
                                <!-- confirm password -->
                            </div>
                            <small>
                                <p class="text-regal-red text-left">{{this.str}}</p>
                            </small>
                        </div>
                        <div class="w-1/2 mt-24 mr-28 ">
                            <button @click="changePassword()" class="newbutton1 mt-2.5">Confirm</button>
                        </div>
                    </div>
                </div>
            </form>

            <!-- change password -->

            <div v-show="!a" class="h-28 "></div>

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
            this.parseJwt(this.token)
            this.getUser()
        },
        data() {
            return {
                token: localStorage.getItem('token'),
                uid: '',
                str: '',
                formData: {
                    name: '',
                    email: '',
                    phone: '',
                    gender: '',
                    address: '',
                    password: ''
                },
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                a: false,
                form: {
                    oldPassword: '',
                    newPassword: ''
                }
            }
        },
        methods: {
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

            //get the specific user
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
                await axios.put('users/update/' + this.uid, this.formData, {
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


            // checking validation while changing the password
            async changePassword() {
                const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                if (this.oldPassword === "") {
                    this.str = "Provide your old password"
                } else if (this.oldPassword === this.newPassword) {
                    this.str = "Old Password cannot match New Password"
                } else if (this.newPassword === '' || this.confirmPassword === '') {
                    this.str = 'Password cannot be blank';
                } else if (this.newPassword.length < 8) {
                    this.str = 'Password should be atleast 8 characters'
                } else if (!(pattern.test(this.newPassword))) {
                    this.str = "(Should include 0-9,A-Z, a-z and special characters like '@,#,$,*')"
                } else if (this.newPassword === this.confirmPassword) {
                    this.form.oldPassword = this.oldPassword
                    this.form.newPassword = this.newPassword
                    this.str = ''
                    console.log(this.formData)
                    await axios.patch('users/update-password/' + this.uid, this.form, {
                            headers: {
                                "Authorization": `Bearer ${localStorage.getItem('token') }`
                            }
                        })
                        .then((response) => {
                            swal({
                                title: "Success",
                                text: "Password updated Successfully!",
                                icon: "success",
                                timer: 1000,
                                buttons: false
                            })
                            console.log(response);
                        })
                        .catch((error) => {
                            this.str = "Old Password"
                            console.log(error)
                        })
                } else if (this.newPassword !== this.confirmPassword) {
                    this.str = "Password doesnot match"
                } else {
                    this.str = "Something went wrong"
                }
            },
        },
    }
</script>

<style scoped>

</style>