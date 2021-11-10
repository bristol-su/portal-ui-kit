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
        },
        tabButtonId() {
            return slugify('tabs-button-' + this.title);
        }
    }
}
</script>

<style lang="css">

</style>
