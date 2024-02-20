<template>
	<form class="update-inbox-form">
		<p class="update-inbox-form__title">Updates right to your Inbox</p>
		<div class="update-inbox-form__content">
			<BaseInput
				type="email"
				placeholder="Email Address"
				:model-value="''"
				class="update-inbox-form__email-input"
			/>
			<BaseButton type="submit" class="update-inbox-form__send-button"
				>Send</BaseButton
			>
		</div>
	</form>
</template>

<script setup lang="ts">
	import BaseButton from '../atoms/base-button.vue'
	import BaseInput from './base-input.vue'
</script>

<style scoped>
	.update-inbox-form {
		flex: 1;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.update-inbox-form__title {
		opacity: 1;
	}
	.update-inbox-form__content {
		display: flex;
		gap: 20px;
	}
	.update-inbox-form__email-input {
		max-width: 300px;
		min-width: 175px;
	}

	@media screen and (max-width: 560px) {
		.update-inbox-form__content {
			flex-direction: column;
		}
		.update-inbox-form__email-input {
			max-width: 100%;
		}
		.update-inbox-form__send-button {
			max-width: 100%;
			width: 100%;
		}
	}
</style>
