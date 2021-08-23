<template>
    <div class="w-full p-6 mx-auto lg:w-1/3">
        <div class="shadow-xl rounded-xl bg-blueGray-50">
            <img class="object-cover object-center w-full lg:h-48 md:h-36 rounded-t-xl" v-if="imageUrl" :src="imageUrl"
                 :alt="title + ' banner imageUrl'">
            <div class="p-4 lg:p-8 bg-blueGray-50">
                <h1
                  class="mx-auto mb-4 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font">
                    {{ title }}</h1>
                <h2 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font" v-if="subtitle">
                    {{ subtitle }}</h2>
                <a :href=url
                   class="inline-flex items-center mt-auto font-semibold text-blue-600 lg:mb-0 hover:text-black "
                   :title="'Continue ' + title"> {{ urlText }} </a>
            </div>
            <div class="px-6 py-4 rounded-b-xl" :class="progressStyling" v-if="progress || progress === 0">
                <p class="inline-flex items-center mt-auto font-semibold text-gray-500 lg:mb-0 "
                   title="Read Full Article"> {{ progress }}% complete <span v-if="tasksComplete || tasksComplete === 0"> ({{tasksComplete}}/{{totalTasks}})</span></p>
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
        url: {type: String, required: true},
        urlText: {type: String, required: false, default: "Continue Task"},
        progress: {type: Number, required: false},
        tasksComplete: {type: Number, required: false},
        totalTasks: {type: Number, required: false},
    },
    computed: {
        progressStyling() {
            return {
                "bg-green-100": this.progress === 100,
                "bg-blue-400": this.progress >= 66 && this.progress < 100,
                "bg-orange-300": this.progress >= 33 && this.progress <= 66,
                "bg-red-600": this.progress === 0
            };
        }
    }
}
</script>

<style scoped>

</style>
