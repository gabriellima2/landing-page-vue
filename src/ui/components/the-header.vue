<template>
	<header class="header">
		<TheLogo />
		<div>
			<slot name="right"></slot>
		</div>
	</header>
</template>

<script setup lang="ts">
	import TheLogo from './the-logo.vue'
</script>

<style scoped>
	.header {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
