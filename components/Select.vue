<template>
  <div>
    <div class="select" @click="toggleDropdown">
      <div class="selected-item">{{ selectedOption?.label }}</div>
      <ul v-if="isOpen" class="dropdown">
        <li
          class="dropdown-list"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          :class="{ selected: option.value === selectedOption?.value }"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';

interface Option {
  label: string;
  value: string | number;
}

const props = defineProps({
  options: {
    type: Array as () => Option[],
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref<Option | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: Option) => {
  selectedOption.value = option;
  emit('update:modelValue', option.value);
  closeDropdown();
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (event.target && !(event.target as HTMLElement).closest('.select')) {
    closeDropdown();
  }
};

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeDropdown();
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    selectedOption.value =
      props.options.find((opt) => opt.value === newValue) || null;
  }
);

onMounted(() => {
  selectedOption.value =
    props.options.find((opt) => opt.value === props.modelValue) || null;

  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscapeKey);
});
</script>

<style scoped lang="scss">
@import '~/styles/colors.scss';

.select {
  position: relative;
  width: fit-content;
  cursor: pointer;
  font-size: 16px;
}

.selected-item {
  padding: 6px 8px;
  &:hover {
    padding: 4px 6px;
    border: 2px solid $primary-fg;
  }
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: fit-content;
  margin-top: 5px;
  list-style: none;
  border: 2px solid $primary-fg;
  background-color: $primary-bg;
  padding: 0;
  &-list {
    padding: 6px;
    transition: background-color 0.3s;
    color: $primary-fg;
    list-style: none;
    &:hover {
      background-color: $accent;
      color: $primary-bg;
    }
    &.selected {
      font-weight: bold;
      color: $disable;
    }
    &.selected:hover {
      font-weight: normal;
      color: $secondary-link;
    }
  }
}
</style>
