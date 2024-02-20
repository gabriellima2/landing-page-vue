<template>
	<button v-bind="$attrs" :class="`button ${props.class}`">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
	import type { ButtonHTMLAttributes } from 'vue'

	interface BaseButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
		text?: boolean
	}

	const props = defineProps<BaseButtonProps>()
</script>
