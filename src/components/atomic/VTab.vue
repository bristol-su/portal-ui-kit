<template>
    <div role="tabpanel" :aria-labelledby="tabPanelId" tabindex="0">
        <div v-show="isActive">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import slugify from 'slugify';

export default {
    name: "VTab",
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            isActive: false
        }
    },
    created() {
        this.$ui.eventBus.$on('tab-selected', (title) => this.isActive = (this.title === title ? true : this.isActive), this);
        this.$ui.eventBus.$on('tab-deselected', (title) => this.isActive = (this.title === title ? false : this.isActive), this);
    },
    computed: {
        tabPanelId() {
            return slugify('tabs-tab-panel-' + this.title);
        }
    }
}
</script>

<style lang="css">

</style>
