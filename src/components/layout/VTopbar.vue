<template>
  <div class="items-center">
    <div class="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
      <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
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
                  class="flex text-sm bg-blueGray-800 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-offset-blueGray-800 focus:ring-white"
                  id="user-menu" aria-haspopup="true" @click.prevent="showUserDropdown = !showUserDropdown">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?img=12" alt="">
              </button>
            </div>
            <div
                :class="{hidden: !showUserDropdown}"
                class="absolute right-0 w-48 px-4 py-2 mt-2 transition duration-500 ease-in-out origin-top-right transform bg-white border rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 e z-50"
                role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <div>
                <a :href=homeRoute
                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                   role="menuitem">Home</a>
              </div>
              <div v-if="profileRoute">
                <a :href=profileRoute
                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                   role="menuitem">Your Profile</a>
              </div>
              <div v-if="canAccessSettings">
                <a :href=settingsRoute
                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                   role="menuitem">Build</a>
              </div>
              <div v-if="canAccessControl">
                <a :href=controlRoute
                   class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                   role="menuitem">Control</a>
              </div>
              <a href="#" @click.prevent="logout"
                 class="block px-4 py-1 my-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100 "
                 role="menuitem">Sign out</a>
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
    siteName: {type: String, required: false}
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
  }
}
</script>

<style scoped>

</style>
