<template>
    <div>
        <div class="mt-5">
            <div v-for="(tag, index) in tags"
                 class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-blue-200 text-blue-700 rounded-full" tabindex="0">
                {{ tag }}
                <a href="#" class="ml-1" @keydown.enter.prevent="$emit('delete', index)" @keydown.space.prevent="$emit('delete', index)" @click.prevent="$emit('delete', index)" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="feather feather-x-circle">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span class="sr-only">{{ deleteText }}</span>
                </a>
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
        },
        deleteText: {
            required: false, type: String, default: 'Delete'
        }
    }
}
</script>

<style scoped>

</style>
