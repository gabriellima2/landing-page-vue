<template>
	<a v-bind="$attrs" :class="`text-link ${props.class}`">
		<slot></slot>
	</a>
</template>

<script setup lang="ts">
	const props = defineProps<{ class?: string }>()
</script>

<style scoped>
	.text-link {
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		color: var(--white);
	}
</style>
