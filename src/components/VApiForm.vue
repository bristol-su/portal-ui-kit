<template>
    <div>
        <v-dynamic-form
          :schema="schema"
          v-model="formData"
          ref="form"
        >
            <template v-slot:append>
                <v-button @click.prevent="submit"><slot name="buttonText">{{ buttonText }}</slot></v-button>
            </template>
        </v-dynamic-form>
    </div>
</template>

<script>
import VDynamicForm from './VDynamicForm';
import VButton from './atomic/VButton';

export default {
    name: "VSubmitForm",
    components: {
        VDynamicForm,
        VButton
    },
    data() {
        return {
            formData: {}
        }
    },
    props: {
        schema: {
            required: true,
            validator: (val) => typeof val === 'object' && val !== null
        },
        groupFormat: {
            required: false,
            validator: (val) => val === null || (typeof val === 'string' && ['single'].indexOf(val) !== -1)
        },
        buttonText: {
            required: false,
            type: String,
            default: 'Submit'
        },
        initialData: {
            required: false,
            default: () => {},
            type: Object
        }
    },
    created() {
        this.formData = this.initialData;
    },
    methods: {
        checkValidity() {
            if (!this.$refs.form.checkValidity()) {
                e.preventDefault();
            }
            return true;
        },
        submit() {
            if(this.checkValidity()) {
                this.$emit('submit', this.formData);
            }
        }
    }
}
</script>

<style scoped>

</style>
