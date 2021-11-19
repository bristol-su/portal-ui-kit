<template>
    <div>
        <div>
            <slot name="topbar"></slot>
        </div>
        <div class="flex-col w-full md:flex md:flex-row md:min-h-screen bg-blueGray-50">

            <vue-draggable-resizable :w="200" :min-width="50" :max-width="1000" h="auto" :draggable="false" :handles="['mr']" @resizing="onResize" :active="true" :prevent-deactivation="true">
                <div class="overflow-y-auto max-h-screen">
                    <div class="bg-white shadow-xl rounded-lg">
                        <ul class="divide-y divide-gray-300">
                            <li class="p-4 hover:bg-gray-50 cursor-pointer" :class="{'bg-gray-200 drop-shadow': activeItem === item.id}" v-for="item in listItems" :key="item.id"  href="#" @click.prevent="$emit('change', item)">
                                <div class="flex flex-col flex-auto items-start">
                                    <div class="w-100 justify-between">
                                        <h5 class="mb-1">{{ item.title }}</h5>
                                        <small>{{ item.note }}</small>
                                    </div>

                                    <p class="mb-1">
                                        {{ item.body }}
                                    </p>

                                    <small>{{ item.subtitle }}</small>

                                </div>
                            </li>
                            <li v-if="loading">
                                <div class="flex flex-col flex-auto items-center">
                                    <div class="w-100 justify-between">
                                        <h5 class="mb-1">Loading</h5>
                                    </div>

                                    <p class="mb-1">
                                        <svg class="animate-spin h-5 w-5 mr-3 text-primary" xmlns="http://www.w3.org/2000/svg"
                                             fill="none"
                                             viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                    stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </p>
                                </div>
                            </li>
                            <li v-else-if="listItems.length === 0" class="p-4">
                                <div class="flex flex-col flex-auto items-center">
                                    <div class="w-100 justify-between">
                                        <h5 class="mb-1">Nothing here!</h5>
                                    </div>

                                    <p class="mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </p>
                                </div>
                            </li>
                            <li class="p-4" v-if="!loading && loadMore">
                                <div class="flex flex-col flex-auto items-center">
                                    <div class="w-100 justify-between">
                                        <v-button @click="$emit('nextPage')">Load more</v-button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </vue-draggable-resizable>


            <section class="flex-auto w-full" :style="{'margin-left': width + 'px'}">
                <div class="container items-center px-5 py-8 mx-auto lg:px-24 w-full">
                    <section class="text-blueGray-700 align-left">
                        <div class="container flex flex-col items-center px-5 py-8 mx-auto">
                            <div class="lex flex-col w-full mb-12 text-left ">
                                <div class="w-full mx-auto">
                                    <slot></slot>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </div>
        <div class="text-muted py-5" style=" bottom: 0; width: 100%; height: 5%; margin-top: 10px; margin-bottom: 2px; ">
            <div class="container" style="text-align: center;">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import VButton from './../atomic/VButton';

export default {
    name: "VListPreview",
    components: {VueDraggableResizable, VButton},
    props: {
        listItems: {
            required: false,
            type: Array,
            default: () => []
        },
        activeItem: {
            required: false,
            type: Number,
            default: null
        },
        loading: {
            required: false,
            type: Boolean,
            default: false
        },
        loadMore: {
            required: false,
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            width: 200
        }
    },
    methods: {
        onResize(x, y, width, height) {
            this.width = width;
        }
    }
}
</script>

<style scoped>

</style>
