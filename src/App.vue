<template>
	<TheHeader>
		<template #right>
			<section class="header__authentication-links">
				<BaseLink title="Sign Up" text>Sign Up</BaseLink>
				<BaseLink title="Login">Log In</BaseLink>
			</section>
		</template>
	</TheHeader>
	<main class="container">
		<section class="section hero">
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
		<section class="section details">
			<div class="hero__image dashboard-image">
				<img src="/src/assets/images/dashboard.png" alt="Dashboard Preview" />
			</div>
			<ul class="feature-list">
				<li>
					<FeatureCard
						title="Customizable card"
						description="Custom your own card for your exact incomes and expenses needs."
						:image="{ src: '/src/assets/icons/cards.svg', alt: 'Cards Icon' }"
					/>
				</li>
				<li>
					<FeatureCard
						title="No payment fee"
						description="Transfer your payment all over the world with no payment fee."
						:image="{
							src: '/src/assets/icons/coin.svg',
							alt: 'Currency Icon',
						}"
					/>
				</li>
				<li>
					<FeatureCard
						title="All in one place"
						description="The right place to keep your credit and debit cards, boarding passes & more.  "
						:image="{ src: '/src/assets/icons/purse.svg', alt: 'Purse Icon' }"
					/>
				</li>
			</ul>
			<CustomerFeedback
				:customer="{
					name: 'Johnny Owens',
					avatarUrl: '/src/assets/images/default-avatar.png',
				}"
				:feedback="{
					rating: 5,
					message:
						'Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don`t need to worry because it`s all in one place! thanks!',
				}"
			/>
			<section class="section hero">
				<div class="lets-talk">
					<div class="lets-talk__texts">
						<h1 class="text-head__primary">Questions? Let’s talk</h1>
						<p>
							Contact us through our 24/7 live chat. We’re always happy to help!
						</p>
					</div>
					<BaseLink class="get-started-link">Get Started</BaseLink>
				</div>
				<div class="contact-image">
					<img src="/src/assets/images/lets-talk.png" alt="let`s Talk" />
				</div>
			</section>
		</section>
	</main>
	<TheFooter>
		<template #right>
			<UpdateInboxForm :mailer="new MailerServiceImpl()" />
		</template>
	</TheFooter>
</template>

<script setup lang="ts">
	import CustomerFeedback from './ui/components/customer-feedback.vue'
	import UpdateInboxForm from './ui/components/update-inbox-form.vue'
	import FeatureCard from './ui/components/feature-card.vue'
	import TheHeader from './ui/components/the-header.vue'
	import TheFooter from './ui/components/the-footer.vue'
	import Companies from './ui/components/companies.vue'
	import BaseLink from './ui/atoms/base-link.vue'
	import { MailerServiceImpl } from './services/impl/mailer-service'
</script>

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
		flex-direction: row;
		justify-content: space-between;
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
	.details {
		flex-direction: column;
	}
	.feature-list {
		display: flex;
		justify-content: space-between;
		gap: 48px;
		padding: 0px;
	}
	.lets-talk {
		flex: 1;
		max-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 44px;
	}
	.lets-talk__texts {
		display: flex;
		flex-direction: column;
		gap: 36px;
	}
	.section {
		display: flex;
		width: 100%;
		gap: 76px;
		padding: 76px 0px;
	}
	.preview-image {
		background-color: var(--dark-gray);
		& > img {
			max-width: 500px;
		}
	}
	.dashboard-image {
		overflow: hidden;
		background-color: #fdf5df;
		& > img {
			position: relative;
			bottom: -7px;
		}
	}
	.contact-image {
		& > img {
			width: 100%;
			max-width: 500px;
		}
	}
	.get-started-link {
		background-color: var(--yellow);
	}

	@media screen and (max-width: 768px) {
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
		.header__authentication-links {
			display: none;
		}
		.hero {
			flex-direction: column;
			align-items: center;
		}
		.lets-talk {
			align-items: center;
		}
		.hero__information {
			align-items: center;
		}
		.hero__information__texts__title {
			min-width: auto;
		}
		.preview-image {
			& > img {
				max-width: 100%;
			}
		}
		.contact-image {
			& > img {
				max-width: 100%;
			}
		}
		.feature-list {
			align-items: center;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 560px) {
		.text-head__primary {
			font-size: 40px;
			line-height: 60px;
		}
	}
</style>
