<script setup lang="ts">
import type { FormField } from '@/types';

defineProps<{
  field: FormField;
}>();

const model = defineModel<any>();
</script>

<template>
  <select
    :id="field.name"
    v-model="model"
    v-bind="field.attributes"
  >
    <option v-if="field.placeholder" disabled value="">{{ field.placeholder }}</option>
    <option
      v-for="option in field.options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>