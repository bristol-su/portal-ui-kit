<template>
    <v-page-content
        class="text-center"
        title="Whoops!"
        :subtitle="subtitle">

        <span v-if="hasMessage">{{message}}</span>

        <hr class="border-0 bg-gray-500 text-gray-500 h-px my-4 sm:mx-20 md:mx-30 lg:mx-40">

        <span v-if="hasEmail">
            If this error persists, please contact us for help at <a class="text-blue-600 lg:mb-0 hover:text-black" :href="'mailto:' + email">{{email}}</a>.
        </span>

        <v-button type="secondary" :href="homeUrl">Take me home</v-button>
    </v-page-content>
</template>

<script>
import VPageContent from './VPageContent';
import VButton from './../atomic/VButton';

export default {
    name: "VErrorPage",
    components: {VPageContent, VButton},
    props: {
        message: {
            required: false, type: String, default: ''
        },
        code: {
            required: false, type: Number, default: 0
        },
        email: {
            required: false, type: String, default: ''
        },
        homeUrl: {
            required: false, type: String, default: ''
        }
    },
    computed: {
        hasMessage() {
            return this.message && this.message !== '';
        },
        hasEmail() {
            return this.email && this.email !== '';
        },
        hasHomeUrl() {
            return this.homeUrl && this.homeUrl !== '';
        },
        subtitle() {
            return 'Something went wrong | Code ' + this.code
        }
    }
}
</script>

<style scoped>

</style>
