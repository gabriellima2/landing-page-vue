<script setup lang="ts">
	import BaseHeader from './ui/components/base-header.vue'
	import BaseLink from './ui/atoms/base-link.vue'
</script>
<template>
	<BaseHeader>
		<template #right>
			<section class="header__authentication-links">
				<BaseLink title="Sign Up" text>Sign Up</BaseLink>
				<BaseLink title="Login">Log In</BaseLink>
			</section>
		</template>
	</BaseHeader>
</template>

<style scoped>
	.header__authentication-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
</style>
