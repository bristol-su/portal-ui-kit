<template>
    <div>
        <v-form-label v-bind="labelProps">
            <editor
              :id="id"
              :aria-describedby="ariaDescribedBy"
              :required="required"
              :aria-invalid="isInvalid"
              v-model="dynamicValue"
              :api-key="usableApiKey"
              :init="config"
              :class=componentStyling
            ></editor>
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
        apiKey: {required: false, type: String, default: null}
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
        usableApiKey() {
            if(!this.apiKey) {
                return this.$tinyMceApiKey;
            }
            return this.apiKey;
        },
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
