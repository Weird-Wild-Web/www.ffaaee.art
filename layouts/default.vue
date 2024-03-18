<template>
  <div class="container">
    <div class="header">
      <nav v-if="$route.params.slug">
        <NuxtLink to="/" class="link nav">{{ $t('menu') }}</NuxtLink>
      </nav>
      <form class="form">
        <label class="label" for="locale-select"
          >{{ $t('language') }} <span class="colon">:</span>
        </label>
        <Select
          :options="languageOptions"
          v-model="selectedLocale"
          @update:modelValue="changeLocale"
        />
      </form>
    </div>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useLocaleStore } from '~/store/locale';
import { useI18n } from 'vue-i18n';
import Select from '../components/Select.vue';
import { ref, computed } from 'vue';

const localeStore = useLocaleStore();
const { locale } = useI18n();

const languageOptions = ref([
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'Russian', value: 'ru' },
  { label: 'German', value: 'de' },
  { label: 'Ukrainian', value: 'ua' },
  { label: 'Korean', value: 'ko' },
]);

const selectedLocale = computed({
  get() {
    return locale.value || localeStore.locale;
  },
  set(value: string) {
    if (locale.value) {
      locale.value = value;
    } else {
      localeStore.locale = value;
    }
  },
});

onMounted(() => {
  selectedLocale.value = locale.value || localeStore.locale;
  localeStore.initLocale();
});

const changeLocale = () => {
  if (locale.value) {
    locale.value = selectedLocale.value;
  }

  localeStore.setLocale(selectedLocale.value);
};
</script>

<style scoped>
.container {
  width: max(900px, 320px);
}

.main {
  display: flex;
  justify-content: center;
}

.colon {
  font-size: 1.6rem;
}

.link {
  margin-right: 1rem;
}

.header {
  display: flex;
  align-items: center;
  font-size: 18px;
}

.form {
  display: flex;
  align-items: center;
}

.label {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
