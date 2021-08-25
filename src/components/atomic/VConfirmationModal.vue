<template>
    <v-modal ref="modal" :id="modalId" :title="title" @hide="cancel">
        {{ message }}

        <v-button @click.prevent="confirm">Confirm</v-button>
        <v-button @click.prevent="cancel">Close</v-button>
    </v-modal>
</template>

<script>
import VModal from './VModal';
import VButton from './VButton';

export default {
    name: "VConfirmationModal",
    components: {
        VButton,
        VModal
    },
    methods: {
        confirm() {
            this.$refs.modal.hide();
            this.$emit('confirmed');
        },
        cancel() {
            this.$refs.modal.hide();
            this.$emit('cancel');
        }
    },

    props: {
        title: {type: String, default: 'Deleting'},
        message: {type: String, default: 'Are you sure you want to delete the item?'},
        type: {type: String, default: 'info'} // One of info or danger
    },

    computed: {
        modalId() {
            return 'vConfirmationModal' + Math.round(Math.random() * 1000);
        }
    }
}
</script>

<style scoped>

</style>
