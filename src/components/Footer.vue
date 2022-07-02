<template>
	<header class="footer">
		<div class="container">
			<ul class="navbar-list">
				<li class="navbar-item" v-for="link in links" :key="link.alias">
					<router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
import { links } from '@/_config';

export default {
	data() {
		return {
			links: links,
		};
	},
};
</script>

<style lang="scss" scoped></style>
