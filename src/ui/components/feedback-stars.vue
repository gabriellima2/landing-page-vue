<template>
	<div class="feedback-stars">
		<img
			src="/src/assets/icons/star.svg"
			alt="Feedback Stars"
			v-for="(_, i) in [...new Array(rating)]"
			:key="i"
			class="star-icon"
		/>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{ rating: number }>()
	const maxRating = 5
	const rating = props.rating > maxRating ? maxRating : props.rating
</script>

<style scoped>
	.feedback-stars {
		display: flex;
		flex-direction: row;
		gap: 2px;
	}
	.star-icon {
		width: 20px;
		height: 20px;
	}
</style>
