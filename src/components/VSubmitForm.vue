<template>
    <div>
        <v-dynamic-form
          :schema="schema"
          v-model="formData"
          :form-url="action"
          :form-method="method"
          ref="form"
        >
            <template v-slot:prepend>
                <input type="hidden" v-if="hasCsrf" name="_token" :value="csrf"/>
            </template>
            <template v-slot:append>
                <v-button :buttonText="buttonText" @click="checkValidity"></v-button>
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
        action: {required: false, type: String, default: '#'},
        method: {required: false, type: String, default: 'POST'},
        buttonText: {required: false, type: String, default: 'Submit'}
    },
    methods: {
        checkValidity() {
            if (!this.$refs.form.checkValidity()) {
                e.preventDefault();
            }
        }
    },
    computed: {
        csrf() {
            return document.head.querySelector('meta[name="csrf-token"]').content
        },
        hasCsrf() {
            return !!document.head.querySelector('meta[name="csrf-token"]')
        }
    }
}
</script>

<style scoped>

</style>
