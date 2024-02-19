<template>
	<img :src="src" :alt="alt" class="avatar" />
</template>

<script setup lang="ts">
	defineProps<{ src: string; alt: string }>()
</script>

<style scoped>
	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 100%;
	}
</style>
