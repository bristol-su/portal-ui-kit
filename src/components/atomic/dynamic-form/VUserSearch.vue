<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <v-vue-select label="preferred_name"
                              :options="selectOptions"
                              :clearable="true"
                              :filter="search"
                              :inputId="id"
                              :name="title"
                              :required="required"
                              v-model="dynamicValue"
                              :reduce="option => option.id"
                              :loading="$isLoading('user-search')"
                              :searchable="true">

                </v-vue-select>

<!--                <select-->
<!--                  :aria-describedby="ariaDescribedBy"-->
<!--                  :id="id"-->
<!--                  :name="title"-->
<!--                  :required="required"-->
<!--                  v-model="dynamicValue"-->
<!--                  :aria-invalid="isInvalid"-->
<!--                  :multiple="multiple"-->
<!--                  class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"-->
<!--                  :class=componentStyling-->
<!--                >-->
<!--                    <option v-if="showNullOption" :value="nullValue">{{ nullLabel }}</option>-->
<!--                    <option-->
<!--                      v-for="option in ungroupedSelectOptions"-->
<!--                      :value="option.id"-->
<!--                      v-text="option.value"-->
<!--                    >-->
<!--                    </option>-->
<!--                    <optgroup v-for="(options, group) in groupedSelectOptions">-->
<!--                        <option-->
<!--                          v-for="option in options"-->
<!--                          :value="option.id"-->
<!--                          v-text="option.value"-->
<!--                        >-->
<!--                        </option>-->
<!--                    </optgroup>-->
<!--                </select>-->
            </div>
        </v-form-label>
    </div>
</template>

<script>

import FormInputMixin from './FormInputMixin';

export default {
    name: "VUserSearch",
    data() {
        return {
            users: []
        }
    },
    methods: {
        search(search) {
            this.selectOptions = this.$ui.userSearcher(search);
        }
    },
    computed: {
        selectOptions() {
            return this.users.map(user => {
                user.preferred_name = user.data.preferred_name;
                return user;
            });
        }
    },
    mixins: [FormInputMixin]
}
</script>

<style scoped>

</style>
