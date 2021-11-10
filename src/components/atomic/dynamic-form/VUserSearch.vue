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

export default {
    name: "VUserSearch",
    mixins: [FormInputMixin],
    data() {
        return {
            users: []
        }
    },
    methods: {
        search(search, loading) {
            this.$ui.userSearcher(search)
              .then(users => this.users = users)
              .catch(() => {})
              .then(() => loading(true));
        }
    },
    computed: {
        selectOptions() {
            return this.users.map(user => {
                user.preferred_name = user.data.preferred_name;
                return user;
            });
        }
    }
} // TODO COMMIT JS, UPDATE AND TEST USER SEARCHER
</script>

<style scoped>

</style>
