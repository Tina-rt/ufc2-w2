<template>
  <div class="socials flex flex-col gap-5 fixed z-10 text-white">
    <div class="text-vertical">Follow us</div>
    <div class="flex flex-col gap-4">
      <font-awesome-icon :icon="['fab', 'instagram']" size="w-6 h-6" />
      <font-awesome-icon :icon="['fab', 'facebook']" size="w-6 h-6" />
      <font-awesome-icon :icon="['fab', 'twitter']" size="w-6 h-6" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">

.socials{
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  padding: 10px;
}

.text-vertical {
  writing-mode: vertical-lr;
  text-orientation: mixed;
}
</style>
