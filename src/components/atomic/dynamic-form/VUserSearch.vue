<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <v-vue-select class="w-full"
                              label="preferred_name"
                              :options="selectOptions"
                              :clearable="true"
                              :inputId="id"
                              :name="title"
                              @search="onSearch"
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
        onSearch: function(search, loading) {
            if(search.length) {
                this.search(search, loading, this)
            }
        },
        search: _.debounce((search, loading, vm) => {
            loading(true)
            vm.$ui.userSearcher(search, 1, 15)
              .then(users => vm.users = users)
              .catch(error => vm.$notify.alert('Could not load users: ' + error.message))
              .then(() => loading(false));
        })
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
