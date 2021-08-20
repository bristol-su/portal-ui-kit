<template>
    <div class="flex flex-col flex-shrink-0 w-full text-blueGray-700 bg-blue-900 shadow-xl md:w-64">
        <div class="flex flex-col items-center flex-shrink-0 bg-blue-800">
            <button
              class="p-1 m-2 ml-auto text-white transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-white focus:outline-none"
              type="button" aria-label="Close" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x" width="24"
                     height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col items-center flex-shrink-0 py-4 bg-blue-900">
            <div class="inline-flex items-center">
                <h2
                  class="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-white lg:text-x lg:mr-8">
                    Hi<span v-if="userName"> {{ userName }}</span>, </h2>
            </div>
            <div class="inline-flex items-center" v-if="subtitle">
                <p
                  class="block p-2 font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-white lg:text-x lg:mr-8">
                    {{ subtitle }}</p>
            </div>
        </div>
        <nav class="flex-grow pb-4 pr-4 bg-blue-900 md:block md:pb-0 md:overflow-y-auto">
            <ul>
                <li v-for="navItem in navItems">
                    <a v-if="navItem.route" :href=navItem.route
                       class="inline-flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform border-l-4 border-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-200 hover:border-blue-200">
                        <!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">-->
                        <!--              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />-->
                        <!--            </svg>-->
                        <span class="ml-4" v-text="navItem.title"></span>
                    </a>
                    <ul v-else-if="navItem.children && navItem.children.length > 0">
                        {{navItem.title}}
                        <li v-for="child in navItem.children" :key="child.title">
                            <a :href="child.route"><span v-text="child.title"></span></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "VSidenav",
    props: {
        userName: {type: String, required: false},
        subtitle: {type: String, required: false},
        navItems: {type: Array, required: true}, // Expects array of Objects -> {title: '', route: ''} // icon to be added LT
        currentRoute: {type: String, required: false}
    }
}
</script>

<style scoped>

</style>
