<template>
    <div>
        <v-form-label v-bind="labelProps">
            <div class="mt-1 flex rounded-md shadow-sm">
                <v-vue-select class="w-full"
                              label="display"
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
                user.email = user.data.email;
                user.display = user.preferred_name + ' (' + user.email + ')';
                return user;
            });
        }
    }
}
</script>

<style scoped>

</style>
