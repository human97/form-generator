<script setup lang="ts">
import type { FormField } from '@/types';

defineProps<{
  field: FormField;
}>();

const model = defineModel<any>();
</script>

<template>
  <input
    :id="field.name"
    v-model="model"
    v-bind="field.attributes"
    :placeholder="field.placeholder"
  />
</template>