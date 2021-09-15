<template>
    <div class="w-full p-6 mx-auto md:w-1/2 lg:w-1/3">
        <div class="shadow-xl rounded-xl bg-white">
            <img class="object-cover object-center w-full lg:h-48 md:h-36 rounded-t-xl" v-if="imageUrl" :src="imageUrl"
                 :alt="title + ' banner imageUrl'">
            <div class="p-4 lg:p-8 bg-blueGray-50"
                 :class="[disabled ? 'bg-gray-100': '']"
            >
                <h3
                    class="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    {{ title }}</h3>
                <h4 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font" v-if="subtitle">
                    {{ subtitle }}</h4>
                <a :href=url
                   v-if="url"
                   class="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black"
                   :class="[disabled ? 'cursor-not-allowed pointer-events-none' : '']"
                   :title="'Continue ' + title"> {{ generatedLinkText }} </a>
                <slot></slot>
            </div>
            <div class="px-6 py-4 rounded-b-xl" :class="progressStyling" v-if="progress || progress === 0">
                <p class="inline-flex items-center mt-auto font-semibold lg:mb-0"
                   title="Read Full Article"> {{ Math.ceil(progress) }}% complete <span class="ml-3"
                                                                                        v-if="tasksComplete || tasksComplete === 0"> ({{ tasksComplete }}/{{ totalTasks }})</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "VCard",
    props: {
        title: {type: String, required: true},
        subtitle: {type: String, required: false},
        imageUrl: {type: String, required: false},
        url: {type: String, required: false},
        urlText: {type: String, required: false, default: "Continue Task"},
        progress: {type: Number, required: false},
        tasksComplete: {type: Number, required: false},
        totalTasks: {type: Number, required: false},
        disabled: {type: Boolean, required: false, default: false},
        mandatory: {type: Boolean, required: false, default: false}
    },
    computed: {
        progressStyling() {
            return {
                "bg-success-dark text-black": this.progress === 100,
                "bg-secondary text-black": this.progress >= 66 && this.progress < 100,
                "bg-info-dark text-black": this.progress >= 33 && this.progress <= 66,
                "bg-warning-dark text-white": this.progress <= 32
            };
        },
        generatedLinkText() {
            if (this.disabled) {
                return '(Locked)';
            }
            return this.urlText + (this.mandatory ? ' (Mandatory)' : '');
        }
    }
}
</script>

<style scoped>

</style>
