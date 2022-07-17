<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit">
			<textarea required v-model="value" placeholder="Type Your Note" />
			<TagsList @onItemClick="handleTagClick" :items="tags" />
			<button class="btn btnPrimary" type="submit">Add New Note</button>
		</form>
	</div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue';

export default {
	components: { TagsList },
	data() {
		return {
			value: '',
			tags: ['personal', 'work', 'vue', 'react'],
		};
	},
	methods: {
		onSubmit() {
			const name = 'Anthony';
			const age = 23;
			this.$emit('onSubmit', this.value);
			this.$emit('test', { name, age });
			this.value = '';
		},
		handleTagClick(tag) {
			console.log(tag);
		},
	},
};
</script>

<style lang="scss" scoped>
.note-form__wrapper {
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.note-form {
	display: flex;
	flex-direction: column;
	max-width: 600px;
	width: 100%;
	textarea {
		margin-bottom: 0;
	}
}
</style>
