<template>
    <div class="items-center">
        <div class="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
            <div class="flex p-5 mx-auto md:items-center">
                <a :href=homeRoute class="pr-2 lg:pr-8 lg:px-6 focus:ring-2 focus:ring-primary">
                    <div class="inline-flex items-center">
                        <img class="w-1/2 md:w-3/12 lg:w-1/12" :src="logo" alt="Go to dashboard">
                    </div>
                </a>
                <div class="flex flex-wrap justify-end ml-auto items-en xl:flex-nowrap md:flex-nowrap lg:flex-wrap">
                    <!-- Search Button -->
                    <!--          <button class="block p-2 mr-4 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 lg:ml-auto">-->
                    <!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
                    <!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />-->
                    <!--            </svg>-->
                    <!--          </button>-->

                    <a href="#" @click.prevent="logout"
                       class="hidden md:block p-2 mr-4 text-base text-blueGray-500 transition duration-500 ease-in-out transform rounded-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 lg:ml-auto"
                    >
                        <span class="sr-only">Logout</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto icon icon-tabler icon-tabler-logout"
                             width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                            <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                        </svg>
                    </a>

                    <div class="relative ml-3">
                        <div>
                            <button
                              class="flex text-sm bg-blueGray-800 rounded-full focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                              id="user-menu" aria-haspopup="true"
                              @click.prevent="showUserDropdown = !showUserDropdown">
                                <span class="sr-only">Open user menu</span>
                                <img v-if="userAvatarIsImage" class="w-full sm:w-48 md:w-72 lg:w-12 rounded-full"
                                     :src="avatarSrcToUse" alt="Open user menu">
                                <span v-else class="w-full sm:w-48 md:w-72 lg:w-12 rounded-full">{{initials}}</span>
                            </button>
                        </div>
                        <div
                          :class="{hidden: !showUserDropdown}"
                          class="absolute right-0 w-48 px-4 py-2 mt-2 transition duration-500 ease-in-out origin-top-right transform bg-white border rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 e z-50"
                          role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                            <div>
                                <a :href=homeRoute
                                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                                   role="menuitem"><i class="fa fa-home"></i> Dashboard</a>
                            </div>
                            <div v-if="profileRoute">
                                <a :href=profileRoute
                                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                                   role="menuitem"><i class="fa user"></i> Your Profile</a>
                            </div>
                            <div v-if="canAccessSettings">
                                <a :href=settingsRoute
                                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                                   role="menuitem"><i class="fa fa-hammer"></i> Build</a>
                            </div>
                            <div v-if="canAccessControl">
                                <a :href=controlRoute
                                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                                   role="menuitem"><i class="fa fa-users"></i> Control</a>
                            </div>
                            <a href="#" @click.prevent="logout"
                               class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                               role="menuitem"><i class="fa fa-sign-out-alt"></i> Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form id="logout-form" ref="logoutForm" :action="logoutRoute" method="POST" style="display: none;">
            <v-csrf-token></v-csrf-token>
        </form>
    </div>
</template>

<script>
import VCsrfToken from '../atomic/VCsrfToken';

export default {
    name: "VTopbar",
    components: {
        VCsrfToken
    },
    props: {
        logo: {type: String, required: true},
        homeRoute: {type: String, required: true},
        logoutRoute: {type: String, required: true},
        profileRoute: {type: String, required: false},
        settingsRoute: {type: String, required: false},
        controlRoute: {type: String, required: false},
        canAccessControl: {type: Boolean, required: false, default: false},
        canAccessSettings: {type: Boolean, required: false, default: false},
        siteName: {type: String, required: false},
        userName: {type: String, required: false},
        avatarSrc: {type: String, required: false},
        defaultAvatarSrc: {type: String, required: true}
    },
    data() {
        return {
            showUserDropdown: false
        }
    },
    methods: {
        logout() {
            this.$refs.logoutForm.submit();
        }
    },
    computed: {
        userAvatarIsImage() {
            return this.initials === null;
        },
        avatarSrcToUse() {
            return this.avatarSrc ?? this.defaultAvatarSrc;
        },
        initials() {
            if(this.userName.replace(/\s+/g, '')) {
                let initials = this.userName.split(' ');
                if(initials.length > 1) {
                    initials = initials.shift().charAt(0) + initials.pop().charAt(0);
                } else {
                    initials = this.userName.substring(0, 2);
                }
                return initials.toUpperCase();
            }
            return null;
        }
    }
}
</script>

<style scoped>

</style>
