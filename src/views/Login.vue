<template>
  <v-container>
    <h1 class="mb-5"><span class="text-primary">Unsia</span> Social<i class="text-primary">!</i></h1>
    <h2 class="mb-3">Login</h2>
    <v-text-field label="Email" variant="outlined" />
    <v-text-field label="Password" type="password" variant="outlined" />
    <v-btn  @click="login" block class="mb-3" color="primary">Login</v-btn>
    <v-btn @click="login" block class="mb-3">Login with Google</v-btn>
    <v-btn @click="login" block class="mb-3">Login with Facebook</v-btn>
    <v-btn @click="register" block class="mb-3">Register</v-btn>

    <v-alert v-if="errorMessage" type="error" :text="errorMessage">
      {{ errorMessage }}
    </v-alert>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import database from '../database';

const  router = useRouter();

const email = ref(null);
const password = ref(null);
const errorMessage = ref(null);

function login() {
  const user = database.login(email.value, password.value);
  if (!user) {
    errorMessage.value = "Username atau password tidak sesuai!";
    return;
  }
  router.push('/profile');
}

function register() {
  router.push('/register');
}
</script>