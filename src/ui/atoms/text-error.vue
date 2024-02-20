<template>
	<small
		role="alert"
		v-bind="$attrs"
		aria-atomic="true"
		aria-live="polite"
		class="text-error"
	>
		{{ message }}
	</small>
</template>

<script setup lang="ts">
	import { type HTMLAttributes } from 'vue'

	interface TextErrorProps extends /* @vue-ignore */ HTMLAttributes {
		message?: string
	}

	defineProps<TextErrorProps>()
</script>

<style scoped>
	.text-error {
		opacity: 1;
		font-size: 0.75rem;
	}
</style>
