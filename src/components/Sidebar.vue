<template>
      <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <h1>Unsia Social</h1>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link title="Register" to="/register"></v-list-item>
      <v-list-item link title="Login" to="/login"></v-list-item>
      <v-list-item link title="Profile" to="/profile"></v-list-item>
      <v-list-item link title="Follow" to="/follow"></v-list-item>
      <v-list-item link title="Chat" to="/chat"></v-list-item>
      <v-list-item link title="Channel" to="/channel"></v-list-item>
      <v-list-item link title="Posting" to="/posting"></v-list-item>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{title}}</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({ drawer: null }),
  props: {
    title: String
  }
}
</script>