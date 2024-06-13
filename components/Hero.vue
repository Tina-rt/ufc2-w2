<script setup lang="ts"></script>

<template>
  <div class="hero relative">
    <div class="img-container absolute top-0 left-0 h-full z-1">
      <img src="@/assets/img/herobg.png" alt="hero" class="im1 bg" />
      <img src="@/assets/img/mg.png" alt="hero" class="im1 mg" />
      <img src="@/assets/img/vg.png" alt="hero" class="im1 vg" />
    </div>

    <div class="hero-container">
      <div class="sub-container">
        <div class="subtitle">
          <Subtitles text="A HIKING GUIDE" />
        </div>
        <h1 class="font-bold">Be Prepared For The Mountains And Beyouds !</h1>
        <div class="action flex items-center gap-5">
          <div class="scroll">Scroll Down</div>
          <div class="icon" style="transform: scaleY(1.2)"> <FontAwesomeIcon class="w-6 h-6" icon="fa-solid fa-arrow-down" /> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

@keyframes parallax1 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.hero {
  height: 100%;
  min-height: 100dvh;
  min-width: 100%;
  mask-image: linear-gradient(0deg, rgba(11, 29, 38, 0) 0%, #0b1d26 41%);
}

.img-container {
  height: fit-content;
  width: 100%;
  height: 100dvh;
  position: relative;
  // box-shadow: inset 0px 10px 106px 31px rgba(0, 0, 0, 0.75);
  overflow-y: hidden;
  mask-image: linear-gradient(-180deg, #0b1d2600 0%, #0b1d26 70%);

  .im1 {
    position: absolute;
    top: 0%;
    left: 0;
    height: 100%;
    width: 100%;
    animation: parallax1 linear;
    animation-timeline: scroll();
  }
  .bg {
    mask-image: linear-gradient(-180deg, #0b1d2600 0%, #0b1d26 70%);
  }
  .mg {
    top: 40%;
    animation-timeline: scroll();
  }
  .vg {
    top: 50%;
  }
}
.hero-container {
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 10%;
  color: white;
}

.sub-container {
  width: 60%;

  h1 {
    font-size: 6rem;
  }
}
</style>
