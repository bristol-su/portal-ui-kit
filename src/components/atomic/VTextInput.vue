<template>
    <div>
        <v-form-label :title="title" :required="required" :help="help" :tooltip="tooltip" errors="">
            <div class="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  :name="name"
                  :id="id"
                  :placeholder="help"
                  v-model="value"
                  :required="required"
                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            </div>
        </v-form-label>
    </div>
</template>

<script>
import DynamicFormInput from '../../mixin/DynamicFormInput';
import VFormLabel from './VFormLabel';

export default {
    name: "VInput",
    mixins: [DynamicFormInput],
    components: {
        VFormLabel
    }
}
</script>

<style scoped>

</style>
