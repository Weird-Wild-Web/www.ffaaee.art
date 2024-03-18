<template>
  <div class="main">
    <div v-if="!$route.params.slug">
      <BlogPosts />
    </div>

    <div class="content" v-else>
      <ContentDoc>
        <template #empty>
          <h1>Loading...</h1>
        </template>
        <ContentRenderer :value="data" />
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const localeCookie = useCookie('curentLocale');

const { data, refresh } = await useAsyncData(() => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug : [route.params.slug];
  return queryContent('/' + slug.join('/')).findOne();
});


const redirectIfMissingLocale = () => {
  if (route.params.slug && route.params.slug[1] === '') {
    router.push(`/${route.params.slug[0]}/${localeCookie.value}`);
  }

  if (route.params.slug[1] !== localeCookie.value) {
    router.push(`/${route.params.slug[0]}/${localeCookie.value}`);
  }
};

watchEffect(() => {
  if (route.params.slug && route.params.slug[1] === localeCookie.value) {
    refresh();
  }
});

watch(
  () => localeCookie.value,
  () => {
    redirectIfMissingLocale();
  }
);

redirectIfMissingLocale();
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}
</style>
