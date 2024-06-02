<template>
  <div class="main-trackbar">
    <div class="trackbar">
      <div class="track-element">
        <div class="track-label">Start</div>
      </div>
      <div v-for="i in 3" :key="i" class="track-element">
        <div class="track-label">0{{ i }}</div>
      </div>
    </div>
    <div class="track-progress"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>

@keyframes progress {
  from {
    height: 25%;
  }
  to {
    height: 100%;
  }
}

.main-trackbar {
  display: flex;
  align-items: center;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 200px;

  .track-progress {
    height: 200px;
    width: 5px;
    background-color: #0b1d26;
    display: flex;
    

    &:after {
      content: "";
      height: 25%;
      width: 5px;
      border-right: 5px solid #ffffff;
      animation: progress linear;
      animation-timeline: scroll();
    }
  }
}

.trackbar {
  display: flex;
  flex-direction: column;
  color: white;

  // width: 100px;

  .track-element {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 1rem;
  }
}
</style>
