<template>
    <div role="tabpanel" :aria-labelledby="tabButtonId" :id="tabPanelId" :tabindex="(this.isActive ? 0 : -1)">
        <div v-if="keepAlive === false && isActive">
            <slot></slot>
        </div>
        <div v-show="keepAlive === true && isActive">
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
        },
        keepAlive: {
            type: Boolean,
            required: false,
            default: true
        },
        badge: {
            type: Number,
            required: false,
            default: null
        },
        icon: {
            type: String,
            required: false,
            default: 'fas fa-edit'
        }
    },
    data () {
        return {
            isActive: false
        }
    },
    watch: {
        badge() {
            this.$ui.eventBus.$emit('refreshTabs');
        },
        icon() {
            this.$ui.eventBus.$emit('refreshTabs');
        }
    },
    created() {
        this.$ui.eventBus.$on('tab-selected', (title) => this.isActive = (this.title === title ? true : this.isActive), this);
        this.$ui.eventBus.$on('tab-deselected', (title) => this.isActive = (this.title === title ? false : this.isActive), this);
    },
    computed: {
        tabPanelId() {
            return slugify('tabs-tab-panel-' + this.title);
        },
        tabButtonId() {
            return slugify('tabs-button-' + this.title);
        }
    }
}
</script>

<style lang="css">

</style>
