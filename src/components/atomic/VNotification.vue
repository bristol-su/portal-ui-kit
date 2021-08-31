<template>
    <div>
        <v-modal ref="modal" :id="modalId" :title="title" @hide="hide">
            {{type}}: {{ message }}

            <v-button @click.prevent="hide">OK</v-button>
        </v-modal>
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
        }
    },
    methods: {
        hide() {
            this.$ui.modal.hide(this.modalId);
        },
        show() {
            this.$ui.modal.show(this.modalId);
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
        }
    }
}
</script>

<style scoped>

</style>
