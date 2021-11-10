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
                        </ul>
                    </div>

                </div>
            </vue-draggable-resizable>


            <section class="flex-auto w-full" :style="{'margin-left': width + 'px'}">
                <div class="container items-center px-5 py-8 mx-auto lg:px-24 w-full">
                    <section class="text-blueGray-700 align-left">
                        <div class="container flex flex-col items-center px-5 py-8 mx-auto">
                            <div class="flex flex-col w-full mb-12 text-left ">
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

export default {
    name: "VListPreview",
    components: {VueDraggableResizable},
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
        }
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
