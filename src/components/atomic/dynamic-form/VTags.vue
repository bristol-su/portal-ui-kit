<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  :name="name"
                  :id="id"
                  :placeholder="help"
                  v-model="inputValue"
                  :required="required"
                  @keyup.enter.prevent="addTag"
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            </div>
        </v-form-label>
        <v-basic-tags :tags="tags" @delete="removeTag">

        </v-basic-tags>
    </div>
</template>

<script>
import FormInputMixin from './FormInputMixin';
import VTextInput from "./VTextInput";
import VBasicTags from '../VBasicTags';
import VFormLabel from '../VFormLabel';

export default {
    name: "VTags",
    components: {VBasicTags, VTextInput, VFormLabel},
    mixins: [FormInputMixin],
    data() {
        return {
            inputValue: '',
            tags: []
        }
    },
    methods: {
        addTag() {
            this.tags.push(this.inputValue);
            this.setValue(this.tags);
            this.inputValue = '';
        },
        removeTag(index) {
            this.tags.splice(index, 1);
            this.setValue(this.tags);
        }
    }
}
</script>

<style scoped>

</style>
