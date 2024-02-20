<template>
	<form class="update-inbox-form" @submit.prevent="handleSubmit">
		<p class="update-inbox-form__title">Updates right to your Inbox</p>
		<div class="update-inbox-form__content">
			<div class="field">
				<BaseInput
					type="email"
					id="email"
					placeholder="Email Address"
					v-model="email"
					class="update-inbox-form__email-input"
					:aria-invalid="!!validationMessage"
					aria-describedby="email-error"
				/>
				<TextError id="email-error" :message="validationMessage" />
			</div>
			<BaseButton
				type="submit"
				class="update-inbox-form__send-button"
				:disabled="isSubmitting"
				>{{ buttonText }}</BaseButton
			>
		</div>
	</form>
</template>

<script setup lang="ts">
	import { computed, ref } from 'vue'

	import BaseButton from '../atoms/base-button.vue'
	import TextError from '../atoms/text-error.vue'
	import BaseInput from './base-input.vue'

	import { EmailValidation } from '../../validations/email.validation'
	import { MailerService } from '../../services/mailer-service'

	const props = defineProps<{ mailer: MailerService }>()

	const email = ref('')
	const isSubmitting = ref(false)
	const validationMessage = ref<string | null>(null)

	const buttonText = computed(() =>
		isSubmitting.value ? 'Submitting...' : 'Send'
	)

	async function handleSubmit() {
		isSubmitting.value = true
		try {
			validationMessage.value = new EmailValidation().execute(email.value)
			if (validationMessage.value) return
			await props.mailer.send({
				recipient: email.value,
				subject: 'Welcome!',
				body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Eveniet praesentium dolorem quas facilis in eaque',
			})
		} catch (err) {
			const message = (err as Error).message || 'Unexpected Error'
			console.error(message)
		} finally {
			isSubmitting.value = false
		}
	}
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
	.field {
		display: flex;
		flex-direction: column;
		gap: 8px;
		border: none;
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
