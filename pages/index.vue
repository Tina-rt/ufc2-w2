<template>
  <div class="main relative w-full flex flex-col h-full">
    <Navbar class="fixed top-0 z-10 w-full" />
    <div class="container w-full flex-1">
      <Hero />
    </div>
    <Socials />
    <Trackbar />
    <StepList />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  head: {
    title: "Hiking Pro",
    link: [{ rel: "stylesheet", href: "@/assets/css/main.css" }],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Hiking Pro" },
    ],
  },
});
</script>

<style style lang="scss">
.container {
  mask-image: linear-gradient(0deg, #0b1d2600 0%, #0b1d26 20%);
  min-width: 100dvw;
  height: auto;
}
</style>
