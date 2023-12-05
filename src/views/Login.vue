<template>
  <v-container>
    <h1 class="mb-5"><span class="text-primary">Unsia</span> Social</h1>
    <h2 class="mb-3">Login</h2>
    <v-text-field label="Email" variant="outlined" />
    <v-text-field label="Password" type="password" variant="outlined" />
    <v-btn  @click="login" block class="mb-3" color="primary">Login</v-btn>
    <v-btn @click="login" block class="mb-3">Login with Google</v-btn>
    <v-btn @click="login" block class="mb-3">Login with Facebook</v-btn>
    <v-btn @click="register" block class="mb-3">Register</v-btn>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const  router = useRouter();

function login() {
  router.push('/profile');
}

function register() {
  router.push('/register');
}
</script>