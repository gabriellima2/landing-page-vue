<script setup lang="ts">
	import { ref } from 'vue'

	defineProps<{ msg: string }>()

	const count = ref(0)

	console.log('Hello')
</script>

<template>
	<h1>{{ msg }}</h1>
	<main>
		<div><button>Hello</button></div>
	</main>
</template>

<style scoped>
	.read-the-docs {
		color: #888;
	}
</style>
