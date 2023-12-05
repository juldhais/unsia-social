<template>
  <v-app id="app">
    <Sidebar title="Naruto's Profile"></Sidebar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="3" class="pl-5 pt-5">
            <v-avatar size="x-large">
              <v-img src="https://picsum.photos/300" :height="200"></v-img>
            </v-avatar>
          </v-col>
          <v-col>
            <h2>Naruto Uzumaki</h2>
            <i>Unsia adalah jalan ninjaku!</i>
            <div class="mt-3">
              <v-chip class="mr-1" color="primary">999 followers</v-chip>
              <v-chip color="green">999 following</v-chip>
            </div>
          </v-col>
        </v-row>

        <v-row class="mb-3">
          <v-col>
            <v-btn block color="primary">Follow</v-btn>
          </v-col>
          <v-col>
            <v-btn block variant="outlined">Message</v-btn>
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