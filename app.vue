<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <ul class="noscreen">
    <li class="noscreen-list" v-for="index in numListItems" :key="index">
      {{ $t('noscreen') }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import '~/styles/global.scss';
import { ref, onMounted, onUnmounted } from 'vue';

const numListItems = ref(0);

const updateNumListItems = () => {
  const screenHeight = window.innerHeight;
  const liHeight = 20;
  numListItems.value = Math.floor(screenHeight / liHeight);
};

onMounted(() => {
  updateNumListItems();
  window.addEventListener('resize', updateNumListItems);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateNumListItems);
});
</script>

<style lang="scss">
.app {
  display: flex;
  justify-content: center;
  margin: 10px;
  @media screen and (max-width: 425px) {
    margin: 5px;
  }
  @media screen and (max-width: 310px) {
    display: none;
  }
}

.noscreen {
  margin: 0;
  overflow: hidden;
  height: 95vh;
  padding: 0;
  &-list {
    list-style: none;
    font-size: clamp(6px, 4.5vw, 14px);
    word-wrap: break-word;
  }
  @media screen and (min-width: 311px) {
    display: none;
  }
}
</style>
