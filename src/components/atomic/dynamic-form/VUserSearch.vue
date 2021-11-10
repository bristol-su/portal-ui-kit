<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <v-vue-select label="preferred_name"
                              :options="selectOptions"
                              :clearable="true"
                              :inputId="id"
                              :name="title"
                              @search="search"
                              :required="required"
                              v-model="dynamicValue"
                              :reduce="option => option.id"
                              :loading="$isLoading('user-search')"
                              :fitlerable="false">

                </v-vue-select>

            </div>
        </v-form-label>
    </div>
</template>

<script>

import FormInputMixin from './FormInputMixin';
import {debounce} from 'lodash';

export default {
    name: "VUserSearch",
    mixins: [FormInputMixin],
    data() {
        return {
            users: []
        }
    },
    methods: {
        search: debounce((search, loading) => {
            this.$ui.userSearcher(search, 1, 15)
              .then(users => {
                  this.users = users.data
              })
              .catch(() => {})
              .then(() => loading(false));
        }, 2000)
    },
    computed: {
        selectOptions() {
            return (this.users ?? []).map(user => {
                user.preferred_name = user.data.preferred_name;
                return user;
            });
        }
    }
}
</script>

<style scoped>

</style>
