<template>
    <div>
        <label class="inline-flex items-center">
            <input
              :id="id"
              :name="title"
              v-model="value"
              type="radio"
              class="form-radio px-4 py-2 mt-2 h-5 w-5">
            <span class="ml-2" v-text="title"></span>
        </label>
    </div>
</template>

<script>
import DynamicFormInput from '../../mixin/DynamicFormInput';

export default {
    name: "VRadio",
    mixins: [DynamicFormInput]
}
</script>

<style scoped>

</style>
