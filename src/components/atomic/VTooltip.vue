<template>
<!--  <div class="tooltip-box">-->
<!--    <slot></slot>-->
<!--    <div class="tooltip">-->
<!--      <span class="triangle"></span>-->
<!--      {{ tooltip }}-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "VTooltip",
  props: {
    "tooltip": { type: String, required: true }
  }
}
</script>

<style scoped>
.tooltip {
  width: 200px;
  background: #59c7f9;
  color: #ffffff;
  text-align: center;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  bottom: calc(100% + 11px);
  left: 50%;
  transform: translate-x(-50%)
}
.tooltip-box {
  position: relative
}
.triangle {
  border-width: 0 6px 6px;
  border-color: transparent;
  border-bottom-color: #59c7f9;
  position: absolute;
  bottom: -6px;
  transform: rotate(180deg) translate-x(-50%);
  left: calc(50% - 12px)
}
</style>