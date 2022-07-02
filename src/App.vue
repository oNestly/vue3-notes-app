<template>
	<div class="wrapper">
		<Header />
		<div class="wrapper-content">
			<div class="container">
				<router-view />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
	components: {
		Footer,
		Header,
	},
};
</script>

<style lang="scss"></style>
