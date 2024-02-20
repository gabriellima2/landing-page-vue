<template>
	<a v-bind="$attrs" :class="`button ${text ? 'link--text' : 'link--button'}`">
		<slot></slot>
	</a>
</template>

<script setup lang="ts">
	defineProps<{ text?: boolean }>()
</script>

<style scoped>
	.link--text {
		width: auto;
		height: auto;
		background: none;
		color: var(--white);
	}
	.link--button {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
