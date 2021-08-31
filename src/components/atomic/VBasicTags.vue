<template>
    <div>
        <div class="mt-5 group">
            <div v-for="(tag, index) in tags"
                 class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full">
                {{ tag }}
                <div class="ml-1 hidden group-hover:block" @click.prevent="$emit('delete', index)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-x-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "VBasicTags",
    props: {
        tags: {
            required: true, type: Array
        }
    }
}
</script>

<style scoped>

</style>
