<script setup lang="ts">
import type { FormField } from '@/types';

defineProps<{
  field: FormField;
}>();

const model = defineModel<any>();
</script>

<template>
  <textarea
    :id="field.name"
    v-model="model"
    :placeholder="field.placeholder"
    v-bind="field.attributes"
  ></textarea>
</template>