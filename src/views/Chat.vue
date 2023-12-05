<template>
  <v-app id="app">
    <Sidebar title="Naruto Uzumaki"></Sidebar>

    <v-main>
      <div class="chat-container">
        <div class="flex-grow-1 overflow-y-auto">
          <div class="chat-bubble sender">Halooo</div>
          <div class="chat-bubble receiver">Halo juga!</div>
          <div class="chat-bubble sender">Udah ngerjain UTS belum?</div>
          <div class="chat-bubble receiver">Udah donk. Km?</div>
          <div class="chat-bubble sender">Belum nih :(</div>
        </div>
      </div>
      <div class="chat-input">
        <hr class="mb-3">
        <v-text-field variant="outlined" density="compact" append-icon="mdi-send"></v-text-field>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const messages = ref([
  { id: 1, content: 'Hi there!', me: true },
  { id: 2, content: 'Hello!', me: false }
]);
</script>

<style>
.chat-bubble {
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 80%;
  margin-bottom: 20px;
  position: relative;
  word-wrap: break-word;
}

.chat-bubble.sender {
  background-color: #007bff;
  color: white;
  margin-left: auto;
}

.chat-bubble.receiver {
  background-color: #e9ecef;
  color: black;
  margin-right: auto;
}

.chat-container {
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
}

.flex-grow-1 {
  flex-grow: 1;
}

.overflow-y-auto {
  overflow-y: auto;
}

.chat-input {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}
</style>