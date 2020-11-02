<template>
  <form @submit.prevent="handleSubmit(onSubmit)">
    <ValidationProvider
      name="E-mail"
      rules="required|email"
      v-slot="{ errors }"
    >
      <input v-model="email" type="email" required />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider
      name="First Name"
      rules="required"
      v-slot="{ errors }"
    >
      <input v-model="firstName" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <ValidationProvider
      name="Last Name"
      rules="required"
      v-slot="{ errors }"
    >
      <input v-model="lastName" type="text" />
      <span>{{ errors[0] }}</span>
    </ValidationProvider>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    }
  },
  methods: {
    onSubmit() {
      alert("Form has been submitted!");
    },
  },
};
</script>

<style  scoped>
span {
  display: block;
}
</style>
