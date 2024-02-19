<template>
	<section class="companies">
		<img
			srcset="
				/src/assets/images/companies-wrapped.png  619w,
				/src/assets/images/companies-row.png     1862w
			"
			sizes="(max-width: 540px) 310px,
            930px"
			src="/src/assets/images/companies-row.png"
			alt="Companies Logo"
		/>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped>
	.companies {
		width: 100%;
		height: 170px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid #ffffff33;
		border-bottom: 1px solid #ffffff33;
		& > img {
			width: 100%;
			max-width: 930px;
		}
	}
</style>
