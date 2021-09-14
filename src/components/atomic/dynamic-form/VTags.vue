<template>
    <div>
      <v-form-label v-bind="labelProps">
        <div class="mt-1 flex rounded-md shadow-sm">
          <div class="relative">
            <input
                :aria-describedby="ariaDescribedBy"
                type="text"
                :name="name"
                :aria-invalid="isInvalid"
                :id="id"
                v-model="inputValue"
                :required="required"
                @keyup.enter.prevent="addTag"
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                :class=componentStyling
            >
            <div class="absolute top-4 right-3 text-primary" @click="addTag" tabindex="0" role="button" @keyup.space.prevent="addTag" @keyup.enter.prevent="addTag">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
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
