<template>
  <v-app id="app">
    <Sidebar title="Naruto's Post"></Sidebar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="9">
            <h2>Tutorial Java Dasar</h2>
          </v-col>
          <v-col>
            <v-chip color="primary">@naruto</v-chip>
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-1">
          <v-img src="https://picsum.photos/300/300" width="100"></v-img>
        </v-row>

        <v-row>
          <v-chip color="primary" class="mr-2">999+ likes</v-chip>
          <v-icon size="x-large" color="primary" icon="mdi-heart-outline" class="mr-2"></v-icon>
          <v-icon size="x-large" color="primary" icon="mdi-chat-outline"></v-icon>
        </v-row>

        <p class="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, consequatur. Commodi fugiat, architecto temporibus veritatis cum nobis voluptate molestias aspernatur magni minima eum reiciendis unde vitae ducimus corrupti ab voluptatem.
        </p>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>