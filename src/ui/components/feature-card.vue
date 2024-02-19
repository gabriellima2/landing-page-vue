<template>
	<article class="feature-card">
		<img :src="image.src" :alt="image.alt" class="feature-card__image" />
		<section>
			<h1 class="feature-card__title">{{ title }}</h1>
			<p class="feature-card__description">{{ description }}</p>
		</section>
	</article>
</template>

<script setup lang="ts">
	defineProps<{
		title: string
		description: string
		image: { src: string; alt: string }
	}>()
</script>

<style scoped>
	.feature-card {
		width: 100%;
		max-width: 310px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}
	.feature-card__image {
		width: 70px;
		height: 70px;
	}
	.feature-card__title {
		font-size: 1rem;
		margin-bottom: 16px;
		text-align: center;
	}
	.feature-card__description {
		text-align: center;
		max-width: 240px;
	}
</style>
