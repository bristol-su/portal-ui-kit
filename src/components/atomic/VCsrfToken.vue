<template>
    <input type="hidden" name="_token" :value="csrf"/>
</template>

<script>
import Csrf from './index';
export default {
    name: "VCsrfToken",
    computed: {
        csrf() {
            return document.head.querySelector('meta[name="csrf-token"]').content;
        },
        hasCsrf() {
            return !!document.head.querySelector('meta[name="csrf-token"]');
        }
    }
}
</script>
