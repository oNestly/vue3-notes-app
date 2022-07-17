<template>
	<Form @onSubmit="handleSubmit" @test="handleTest" />
	<List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Note/Form.vue';
import List from '@/components/Note/List.vue';

export default {
	components: { Form, List },
	data() {
		return {
			notes: [
				{
					title: 'Learn Vue 3',
					tags: ['work'],
				},
				{
					title: 'Finish vue project',
					tags: ['personal', 'vue'],
				},
				{
					title: 'Make some changes in personal project',
					tags: ['personal'],
				},
				{
					title: 'Buy some food',
					tags: [],
				},
			],
		};
	},
	mounted() {
		this.getNotes();
	},
	watch: {
		notes: {
			handler(updatedList) {
				localStorage.setItem('notes', JSON.stringify(updatedList));
			},
			deep: true,
		},
	},
	methods: {
		getNotes() {
			const localNotes = localStorage.getItem('notes');
			if (localNotes) {
				this.notes = JSON.parse(localNotes);
			}
		},
		handleSubmit(title) {
			const note = {
				title: title,
				tags: [],
			};
			this.notes.push(note);
			console.log(note);
		},
		handleTest(user) {
			console.log(user.name);
			console.log(user.age);
		},
		handleRemove(index) {
			this.notes.splice(index, 1);
		},
	},
};
</script>

<style lang="scss" scoped></style>
