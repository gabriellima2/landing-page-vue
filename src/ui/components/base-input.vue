<template>
	<input
		v-bind="$attrs"
		:value="props.modelValue"
		:class="`base-input ${props.class}`"
		@input="
			($event) =>
				emits('update:modelValue', ($event.target as HTMLInputElement).value)
		"
	/>
</template>

<script setup lang="ts">
	import type { InputHTMLAttributes } from 'vue'

	interface BaseInputProps extends /* @vue-ignore */ InputHTMLAttributes {
		modelValue: string
	}

	type BaseInputEmits = {
		(e: 'update:modelValue', value: string): void
	}

	const props = defineProps<BaseInputProps>()
	const emits = defineEmits<BaseInputEmits>()
</script>

<style scoped>
	.base-input {
		width: 100%;
		height: 50px;
		font-size: 1rem;
		font-weight: 300;
		font-family: var(--primary-font);
		color: var(--white);
		border: none;
		border-radius: 15px;
		padding: 0px 16px;
		background-color: var(--dark-gray);
		&::placeholder {
			color: var(--white);
			opacity: 0.4;
		}
	}
</style>
