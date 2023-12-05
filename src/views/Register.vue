<template>
  <v-container>
    <h1 class="mb-5"><span class="text-primary">Unsia</span> Social</h1>
    <h2 class="mb-3">Register</h2>
    <v-text-field label="First Name" variant="outlined" />
    <v-text-field label="Last Name" variant="outlined" />
    <v-text-field label="Birth Date" type="date" variant="outlined" />
    <v-select label="Gender" variant="outlined" :items="['Male', 'Female']">
    </v-select>
    <v-text-field label="Email" variant="outlined" />
    <v-text-field label="Password" type="password" variant="outlined" />
    <v-btn @click="register" block class="mb-3" color="primary">Register</v-btn>
    <v-btn @click="login" block class="mb-3">Login</v-btn>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function register() {
  router.push('/profile');
}

function login() {
  router.push('/login');
}

</script>