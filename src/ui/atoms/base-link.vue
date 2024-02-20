<template>
	<a
		v-bind="$attrs"
		:class="`button ${props.class} ${props.text ? 'link--text' : 'link--button'}`"
	>
		<slot></slot>
	</a>
</template>

<script setup lang="ts">
	import type { AnchorHTMLAttributes } from 'vue'

	interface BaseLinkProps extends /* @vue-ignore */ AnchorHTMLAttributes {
		text?: boolean
	}

	const props = defineProps<BaseLinkProps>()
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
