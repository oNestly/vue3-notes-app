<template>
	<div class="note-form__wrapper">
		<form class="note-form" @submit.prevent="onSubmit">
			<textarea required v-model="value" placeholder="Type Your Note" />
			<button class="btn btnPrimary" type="submit">Add New Note</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
		};
	},
	methods: {
		onSubmit() {
			const name = 'Anthony';
			const age = 23;

			this.$emit('onSubmit', this.value);
			this.$emit('test', { name, age })
			this.value = '';
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
}
</style>
