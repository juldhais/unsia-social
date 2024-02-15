<template>
  <v-container>
    <h1 class="mb-5"><span class="text-primary">Unsia</span> Social<i class="text-primary">!</i></h1>
    <h2 class="mb-3">Register</h2>
    <v-text-field label="First Name" variant="outlined" v-model="user.firstName" />
    <v-text-field label="Last Name" variant="outlined" v-model="user.lastName" />
    <v-text-field label="Birth Date" type="date" variant="outlined" v-model="user.birthDate" />
    <v-select label="Gender" variant="outlined" :items="['Male', 'Female']" v-model="user.gender">
    </v-select>
    <v-text-field label="Email" variant="outlined" v-model="user.email" />
    <v-text-field label="Password" type="password" variant="outlined" v-model="user.password"/>
    <v-btn @click="register" block class="mb-3" color="primary">Register</v-btn>
    <v-btn @click="login" block class="mb-3">Login</v-btn>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import database from '../database';

const router = useRouter();

const user = ref({
  firstName: null,
  lastName: null,
  birthDate: null,
  gender: null,
  email: null,
  password: null
});

function register() {
  database.register(user.value);
  router.push('/profile');
}

function login() {
  router.push('/login');
}

</script>