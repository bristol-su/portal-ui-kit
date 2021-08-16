<template>
    <div>
        <p-dynamic-form
          :schema="schema"
          v-model="formData"
          refs="form"
        >
            <template v-slot:append>
                <p-button buttonText="Submit" @click="checkValidity"></p-button>
            </template>
        </p-dynamic-form>
    </div>
</template>

<script>
export default {
    name: "VSubmitForm",
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
        }
    },
    methods: {
        checkValidity() {
            if (!this.$form.checkValidity()) {
                e.preventDefault();
            }
        }
    }
}
</script>

<style scoped>

</style>
