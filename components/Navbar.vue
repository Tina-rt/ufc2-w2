<template>
  <div class="navbar w-full flex justify-between items-center py-5 px-10">
      <div class="logo">
        <h1 class="text-2xl font-bold">MTN</h1>
      </div>
      <div class="menu">
        <ul class="flex items-center gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="account flex items-center gap-2 ">
        <font-awesome-icon icon="fa-solid fa-user-circle" size="lg" class="w-4 h-4"/>
        <span class="text-sm font-bold">Account</span>
      </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.navbar{  
  color: white;
  z-index: 100;
}

</style>