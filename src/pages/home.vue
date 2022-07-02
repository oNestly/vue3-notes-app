<template>
	<Form @test="handleTest" @onSubmit="handleSubmit" />
</template>

<script>
import Form from "@/components/Note/Form.vue";

export default {
	components: { Form },
	methods: {
		handleSubmit(note) {
			console.log(note);
		},
		handleTest(user) {
			console.log(user.name);
			console.log(user.age);
		},
	}
};
</script>

<style lang="scss" scoped></style>
