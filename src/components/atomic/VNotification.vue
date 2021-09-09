<template>
    <div class="alert-toast fixed top-0 right-0 m-8 w-5/6 md:w-full max-w-sm" v-if="visible">
        <input type="checkbox" class="hidden" id="footertoast">
        <div class="container items-center">
            <div class="w-full border rounded-lg shadow-xl" :class="style">
                <div class="flex items-center justify-between px-6 py-4 mx-auto ">
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-4 icon icon-tabler icon-tabler-alert-triangle"
                             width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                             fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            <polyline points="11 12 12 12 12 16 13 16"></polyline>
                        </svg>
                        <p class="text-sm font-semibold tracking-wide">
                            <strong class="uppercase">{{ type }}:</strong> {{ message }}
                        </p>
                    </div>
                    <button
                      class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-blueGray-600 focus:outline-none "
                      type="button" aria-label="Close" aria-hidden="true">
                        <label class="" title="close" for="footertoast">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-x"
                                 width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                 fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="12" r="9"></circle>
                                <path d="M10 10l4 4m0 -4l-4 4"></path>
                            </svg>
                        </label>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VModal from './VModal';
import VButton from './VButton';

export default {
    name: "VNotification",
    components: {VModal, VButton},
    props: {
        message: {required: true, type: String},
        type: {
            required: true,
            validator: (val) => typeof val === 'string' && ['info', 'alert', 'warning', 'success'].indexOf(val) !== -1
        },
        showOnStart: {required: false, default: false, type: Boolean}
    },
    data() {
        return {
            visible: false
        }
    },
    created() {
        this.visible = this.showOnStart;
        this.$ui.eventBus.$on('modal.show', (id) => this.visible = (this.id === id ? true : this.visible), this);
        this.$ui.eventBus.$on('modal.hide', (id) => this.visible = (this.id === id ? false : this.visible), this);
    },
    methods: {
        hide() {
            this.visible = false;
        },
        show() {
            this.visible = true;
            setTimeout(() => this.hide(), 5000)
        }
    },
    computed: {
        modalId() {
            return 'vNotificationModal' + Math.round(Math.random() * 1000);
        },
        title() {
            return {
                info: 'Information', alert: 'Dangerous Action', warning: 'Warning', success: 'Success'
            }[this.type];
        },
        style() {
            return {
                'bg-primary text-white': this.type === 'info',
                'bg-info-dark text-white': this.type === 'alert',
                'bg-warning text-white': this.type === 'warning',
                'bg-success text-white': this.type === 'success'
            }
        }
    }
}
</script>

<style scoped>
/*Toast open/load animation*/
.alert-toast {
    -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/*Toast close animation*/
.alert-toast input:checked ~ * {
    -webkit-animation: fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

/* -------------------------------------------------------------
 * Animations generated using Animista * w: http://animista.net,
 * ---------------------------------------------------------- */

@-webkit-keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes slide-in-top {
    0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes slide-out-top {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
    100% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
    }
}

@keyframes slide-out-top {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
    100% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
    }
}

@-webkit-keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@keyframes slide-in-bottom {
    0% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
}

@-webkit-keyframes slide-out-bottom {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
    100% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0
    }
}

@keyframes slide-out-bottom {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
    }
    100% {
        -webkit-transform: translateY(1000px);
        transform: translateY(1000px);
        opacity: 0
    }
}

@-webkit-keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }
}

@keyframes slide-in-right {
    0% {
        -webkit-transform: translateX(1000px);
        transform: translateX(1000px);
        opacity: 0
    }
    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }
}

@-webkit-keyframes fade-out-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }
    100% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0
    }
}

@keyframes fade-out-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1
    }
    100% {
        -webkit-transform: translateX(50px);
        transform: translateX(50px);
        opacity: 0
    }
}
</style>
