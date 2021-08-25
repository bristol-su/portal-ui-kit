<template>
    <div>
        <v-form-label v-bind="labelProps">
            <editor
              v-model="dynamicValue"
              :api-key="apiKey"
              :init="config"></editor>
        </v-form-label>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import FormInputMixin from './FormInputMixin';

export default {
    name: "VWysiwyg",
    components: {
        'editor': Editor
    },
    props: {
        apiKey: {required: false, type: String, default: 'no-api-key'}
    },
    data() {
        return {
            width: 700,
            height: 600,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat fullscreen'
        }
    },
    computed: {
        config() {
            return {
                menubar: this.menubar,
                plugins: this.plugins,
                toolbar: this.toolbar,
                width: this.width
            }
        },
    },
    mixins: [FormInputMixin],
}
</script>

<style scoped>

</style>
