<template>
	<div class="main-step flex items-center gap-4 justify-between   ">

		<div class="w-full lg:w-2/3 md:w-2/3 lg:p-14 md:p-14  relative">
			<div class="step-index absolute top-[-20%] left-0">
				<p>0{{ props.index }}</p>
			</div>
			<div class="subtitle">
				<Subtitles :text="props.step.subtitle" />
			</div>
			<h1 class="font-bold">{{ props.step.title }}</h1>
			<p>
				{{ props.step.description }}
			</p>
			<div class="read-more flex items-center gap-5 py-5">
				<p>read more</p>
				<FontAwesomeIcon icon="fa-solid fa-arrow-right-long" size="w-8 h-8" color="white" />
			</div>
		</div>
		<div class="img-container w-1/3">
			<NuxtImg :src="`/img/${props.step.image}`" alt="" />
		</div>
	</div>
</template>

<script lang="ts" setup>
/* __placeholder__ */
import type { Step } from "./step.model";

type Props = {
	step: Step;
	index: number;
};
const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.main-step {
	height: 50dvh;
	width: 100%;
}

.main-step:nth-child(even) {
	flex-direction: row-reverse;
}

h1 {
	color: white;
	font-size: 3rem;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
}

p {
	color: white;
	letter-spacing: 0.1rem;
}

.read-more>* {
	color: var(--accent-color);
}

.img-container {
	// width: auto;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.step-index {
	font-size: 10rem;
	color: white;
	opacity: 0.3;
	font-weight: bold;
}
</style>
