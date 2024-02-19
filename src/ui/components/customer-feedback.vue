<template>
	<article class="customer-feedback">
		<div class="customer-feedback__container">
			<p class="feedback">“{{ feedback.message }}”</p>
			<footer class="customer">
				<Avatar :src="customer.avatarUrl" :alt="`Photo of ${customer.name}`" />
				<div class="customer__informations">
					<p class="customer__informations__name">{{ customer.name }}</p>
					<FeedbackStars :rating="feedback.rating" />
				</div>
			</footer>
		</div>
	</article>
</template>

<script setup lang="ts">
	import Avatar from '../atoms/avatar.vue'
	import FeedbackStars from './feedback-stars.vue'

	defineProps<{
		feedback: { message: string; rating: number }
		customer: { avatarUrl: string; name: string }
	}>()
</script>

<style scoped>
	.customer-feedback {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 20px;
		padding: 76px 36px;
		background-color: var(--purple);
	}
	.customer-feedback__container {
		max-width: 650px;
		display: flex;
		flex-direction: column;
		gap: 56px;
	}
	.feedback {
		font-weight: 600;
		font-size: 1.333rem;
		color: var(--primary-gray);
		opacity: 1;
	}
	.customer {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
	.customer__informations {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.customer__informations__name {
		color: var(--primary-gray);
		opacity: 0.4;
	}
</style>
