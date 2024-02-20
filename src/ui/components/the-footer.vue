<template>
	<footer class="footer">
		<section class="footer__content">
			<TheFooter />
			<ul class="footer__content__links">
				<li>
					<TextLink aria-disabled="true" class="copyright"
						>© Wallet 2022</TextLink
					>
				</li>
				<li>
					<TextLink href="#">Privacy policy</TextLink>
				</li>
				<li>
					<TextLink href="#">Cookies policy</TextLink>
				</li>
				<li>
					<TextLink href="#">Terms of use</TextLink>
				</li>
			</ul>
		</section>
		<slot name="right"></slot>
	</footer>
</template>

<script setup lang="ts">
	import TextLink from '../atoms/text-link.vue'
	import TheFooter from './the-logo.vue'
</script>

<style scoped>
	.footer {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 56px 0px;
		border-top: 1px solid #ffffff33;
	}
	.footer__content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 56px;
	}
	.footer__content__links {
		display: flex;
		flex-direction: row;
		gap: 24px;
		flex-wrap: wrap;
	}
	.copyright {
		cursor: default;
		&:hover {
			opacity: 1;
		}
	}
</style>
