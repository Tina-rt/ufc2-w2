<template>
  <div class="main-step-list w-full flex justify-center">
    <div class="flex flex-col items-center justify-center w-2/3 px-20 gap-20">
      <Step
        v-for="(step, index) in stepList"
        :key="step.title"
        :step="step"
        :index="index+1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Step } from "./step.model";

const stepList = ref<Step[]>([]);
stepList.value = [
  {
    title: "What level of  hiker are you?",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
    image: "step1.png",
    subtitle: "GET STARTED",
  },
  {
    title: "Picking the right Hiking Gear!",
    description:
      "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet. ",
    image: "step2.jpeg",
    subtitle: "Hiking Essentials",
  },
  {
    title: "Understand Your Map & Timing",
    description:
      "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
    image: "step3.png",
    subtitle: "where you go is the key",
  },
];
</script>

<style lang="scss" scoped>
.main-step-list {
  transform: translateY(-100px);
}
</style>
