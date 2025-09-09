<script setup lang="ts">
import type { FormField } from '@/types';

defineProps<{
  field: FormField;
}>();

const model = defineModel<any>();
</script>

<template>
  <div class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="field.name"
      v-model="model"
      v-bind="field.attributes"
    />
  </div>
</template>