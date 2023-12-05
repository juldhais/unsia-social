<template>
  <v-app id="app">
    <Sidebar title="Channel"></Sidebar>

    <v-main>
      <v-container>
        <v-row justify="center" class="mb-5">
          <v-img src="https://picsum.photos/300/100" width="100"></v-img>
        </v-row>
        <h1>Pemorgraman Bergerak</h1>
        <p>Pemrograman Bergerak khususnya Pemrograman Android adalah pemrograman berbasis Java untuk membuat aplikasi pada smartphone, tablet maupun device lainnya yang menggunakan sistem operasi berbasis Android.</p>
        <div class="mt-3 mb-5">
          <v-chip class="mr-1" color="primary">999 members</v-chip>
          <v-chip color="green">100 online</v-chip>
        </div>

        <v-row class="mb-3">
          <v-col>
            <v-btn block color="primary">Join</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" cover
              class="bg-grey-lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>