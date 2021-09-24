<template>
    <div class="flex flex-col flex-shrink-0 w-full text-blueGray-700 bg-blue-900 shadow-xl md:w-64 h-full">
        <div class="flex flex-col items-center flex-shrink-0 bg-primary h-12">
        </div>
        <div class="flex flex-col items-center flex-shrink-0 py-4 bg-primary-dark">
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
        <nav class="flex-grow pb-4 pr-4 bg-primary-dark md:block md:pb-0 md:overflow-y-auto">
            <ul>
                <li v-for="navItem in navItems">
                    <a v-if="navItem.route" :href=navItem.route
                       :class="{'bg-white shadow-lg rounded-r-lg text-black': isCurrentUrl(navItem.route)}"
                       class="inline-flex items-center px-4 py-2 mt-2 text-base text-white transition duration-500 ease-in-out transform border-l-4 border-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-200 hover:border-blue-200">
                        <span class="ml-4" :class="{'text-black': isCurrentUrl(navItem.route)}">
                            <i v-if="navItem.icon" :class="iconStyling(navItem)"></i>  {{ navItem.title }}
                            <span v-if="navItem.highlight">(Mandatory)</span>
                        </span>
                    </a>

                    <ul v-else-if="navItem.children && navItem.children.length > 0">
                        {{ navItem.title }}
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
import URL from 'domurl';

export default {
    name: "VSidenav",
    props: {
        userName: {type: String, required: false},
        subtitle: {type: String, required: false},
        navItems: {type: Array, required: true}, // Expects array of Objects -> {title: '', route: ''} // icon to be added LT
        currentUrl: {type: String, required: false}
    },
    methods: {
        isCurrentUrl(url) {
            return new URL(url).clearQuery().toString() === new URL(window.location.pathname).clearQuery().toString();
        },
        iconStyling(navItem) {
            let style = {'text-green-600': this.isCurrentUrl(navItem.route) && navItem.icon === 'fa fa-check', 'text-blue-600': this.isCurrentUrl(navItem.route) && navItem.icon !== 'fa fa-check' && navItem.highlight};
            style[navItem.icon] = true;
            return style;
        }
    }
}
</script>

<style scoped>

</style>
