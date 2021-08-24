<template>
    <v-modal :title="title" :open="show">
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
            this.show = false;
            this.$emit('confirmed');
        },
        cancel() {
            this.show = false;
            this.$emit('cancel');
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
