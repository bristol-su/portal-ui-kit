<template>
    <div>
        <v-dynamic-form
          :schema="schema"
          v-model="formData"
          ref="form"
        >
            <template v-slot:append>
                <v-button @click.prevent="submit" :busy="busy"><slot name="buttonText">{{ buttonText }}</slot></v-button>
            </template>
        </v-dynamic-form>
    </div>
</template>

<script>
import VDynamicForm from './VDynamicForm';
import VButton from './atomic/VButton';

export default {
    name: "VApiForm",
    components: {
        VDynamicForm,
        VButton
    },
    data() {
        return {
            formData: {}
        }
    },
    watch: {
        formData: {
            deep: true,
            handler() {
                this.$emit('updated', this.formData);
            }
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
            default: () => {
                return {}
            },
            type: Object
        },
        busy: {
            required: false, type: Boolean, default: false
        }
    },
    created() {
        this.formData = this.initialData;
    },
    methods: {
        checkValidity(e) {
            if (!this.$refs.form.checkValidity()) {
                e.preventDefault();
            }
            return true;
        },
        submit() {
            if(this.checkValidity()) {
                this.$emit('submit', this.formData);
            }
        },
        reset() {
            this.formData = this.initialData;
        }
    }
}
</script>

<style scoped>

</style>
