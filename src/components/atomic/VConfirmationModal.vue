<template>
    <v-modal :title="title" :open="true">
        {{message}}

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
    data() {
        return {
            show: true
        }
    },

    methods: {
        confirm() {
            this.$emit('confirmed');
            this.show = false;
        },
        cancel() {
            this.$emit('cancel');
            this.show = false;
        }
    },

    props: {
        title: {type: String, default: 'Deleting'},
        message: {type: String, default: 'Are you sure you want to delete the item?'}
    }
}
</script>

<style scoped>

</style>
