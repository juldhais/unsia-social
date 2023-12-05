<template>
  <v-app id="app">
    <Sidebar title="Personalize Your Profile"></Sidebar>

    <v-main>
      <v-container>
        <v-row justify="center" class="mb-5">
          <v-img src="https://picsum.photos/300" :height="200"></v-img>
        </v-row>
        <v-btn block class="mb-5" variant="outlined">Change Profile Picture</v-btn>
        <v-chip size="large" class="mb-5" color="primary">@naruto</v-chip>
        <v-text-field label="First Name" variant="outlined" />
        <v-text-field label="Last Name" variant="outlined" />
        <v-text-field label="Birth Date" type="date" variant="outlined" />
        <v-select label="Gender" variant="outlined" :items="['Male', 'Female']">
        </v-select>
        <v-text-field label="Email" variant="outlined" />
        <v-btn block class="mb-5" variant="outlined">Change Password</v-btn>

        <hr class="mb-5">

        <v-btn block class="mb-3" color="primary">Save Changes</v-btn>
        <v-btn block class="mb-3">Cancel</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>