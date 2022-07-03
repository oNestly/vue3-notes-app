<template>
	<Form @onSubmit="handleSubmit" @test="handleTest"  />
	<List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from "@/components/Note/Form.vue";
import List from "@/components/Note/List.vue";

export default {
	components: { Form, List },
	data() {
		return {
			notes: ['Task 1', 'Task 2', 'Task 3']
		}
	},
	methods: {
		handleSubmit(note) {
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
	}
};
</script>

<style lang="scss" scoped></style>
