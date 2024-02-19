<script setup lang="ts">
	import BaseHeader from './ui/components/base-header.vue'
	import Companies from './ui/components/companies.vue'
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
	<main class="container">
		<section class="hero">
			<div class="hero__information">
				<div class="hero__information__texts">
					<h1 class="text-head__primary hero__information__texts__title">
						SaaS Landing Page Template
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit Eveniet
						praesentium dolorem quas facilis in eaque
					</p>
				</div>
				<BaseLink class="get-started-link">Get Started</BaseLink>
			</div>
			<div class="hero__image preview-image">
				<img src="/src/assets/images/hero.png" alt="Charts Preview" />
			</div>
		</section>
		<Companies />
	</main>
</template>

<style scoped>
	.header__authentication-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 30px;
	}
	.container {
		width: 100%;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.hero {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 76px;
		padding: 76px 0px;
	}
	.hero__information__texts {
		display: flex;
		flex-direction: column;
		gap: 36px;
	}
	.hero__information__texts__title {
		min-width: 465px;
	}
	.hero__information {
		flex: 1;
		max-width: 500px;
		display: flex;
		flex-direction: column;
		gap: 76px;
	}
	.hero__image {
		width: fit-content;
		height: fit-content;
		border-radius: 20px;
		& > img {
			width: 100%;
		}
	}
	.preview-image {
		background-color: var(--dark-gray);
		& > img {
			max-width: 500px;
		}
	}
	.get-started-link {
		background-color: var(--yellow);
	}

	@media screen and (max-width: 540px) {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		small {
			text-align: center;
		}
		.hero__information {
			align-items: center;
		}
		.header__authentication-links {
			display: none;
		}
		.hero__information__texts__title {
			min-width: auto;
		}
	}
</style>
