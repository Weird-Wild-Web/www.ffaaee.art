<template>
  <div class="wrapper">
    <h1 class="title">{{ $t('main-menu') }}</h1>
    <ul class="list">
      <li
        class="card"
        v-for="{ _path: slug, title, date, cover, description } in blogPosts"
        :key="slug"
      >
        <img
          class="card-img"
          :src="cover"
          :alt="`${slug}${cover.replace('..', '')}`"
        />
        <div class="card-item">
          <NuxtLink :to="slug" class="card-title">{{ title }}</NuxtLink>
          <div class="card-desc">{{ description }}</div>
          <span class="card-date">{{
            $d(date, 'long').replace(/\s*г\./, '')
          }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const { data: blogPosts, refresh } = await useAsyncData(() =>
  queryContent().where({ lang: locale.value }).sort({ date: -1 }).find()
);

watch(
  () => locale.value,
  () => {
    refresh();
  }
);
</script>

<style scoped lang="scss">
@import '~/styles/colors.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 900px);
  @media screen and (max-width: 768px) {
    width: min(100%, 600px);
  }
}

.title {
  font-size: clamp(18px, 5vw, 36px);
}

.list {
  padding: 0;
}

.card {
  display: flex;
  padding: 10px;
  background: $secondary-bg;
  height: fit-content;
  margin-bottom: 40px;
  color: $secondary-fg;
  width: fit-content;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  &-item {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  &-title {
    color: $secondary-link;
  }
  &-img {
    width: min(400px, max(50%, 350px));
    @media screen and (max-width: 768px) {
      width: min(600px, 100%);
    }
    height: fit-content;
    &[alt] {
      font-size: 12px;
      word-wrap: break-word;
    }
  }
  &-desc {
    margin: 15px 0;
    overflow: hidden;
  }
  &-date {
    color: $accent;
  }
}
</style>
