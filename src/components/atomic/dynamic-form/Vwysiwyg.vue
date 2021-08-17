<template>
  <div>
    <v-form-label v-bind="labelProps">
    <editor
          v-model="dynamicValue"
          api-key="no-api-key"
            :init="{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }"></editor>
    </v-form-label>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import FormInputMixin from './FormInputMixin';

export default {
  name: "Vwysiwyg",
  components: {
    'editor': Editor
  },
  mixins: [FormInputMixin],
}
</script>

<style scoped>

</style>