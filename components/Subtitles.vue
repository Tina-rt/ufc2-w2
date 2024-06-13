<template>
  <div class="flex items-center gap-5">
    <div class="dash"></div>
    <div class="text">{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>

<style scoped>
.dash {
  height: 2px;
  width:90px;
  background-color: var(--accent-color);
}
.text {
  color: var(--accent-color);
  letter-spacing: 0.1em;
  font-size: 1.1rem;
}
</style>
