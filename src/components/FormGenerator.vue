<script setup lang="ts">
import type { FormField } from '@/types';
import AppButton from '@/components/UI/AppButton.vue';
import { defineAsyncComponent } from 'vue';

const props = defineProps<{
  fields: FormField[];
}>();

const emit = defineEmits(['save', 'cancel']);

const localModel = defineModel<Record<string, any>>({ required: true });

const fieldComponents = {
  input: defineAsyncComponent(() => import('@/components/form-fields/InputFormField.vue')),
  textarea: defineAsyncComponent(() => import('@/components/form-fields/TextareaFormField.vue')),
  select: defineAsyncComponent(() => import('@/components/form-fields/SelectFormField.vue')),
  checkbox: defineAsyncComponent(() => import('@/components/form-fields/CheckboxFormField.vue')),
};

const resolveFieldComponent = (type: string) => {
  return fieldComponents[type as keyof typeof fieldComponents] || null;
};

const onSave = () => {
  emit('save', localModel.value);
};

const onCancel = () => {
  emit('cancel');
};
</script>

<template>
  <form class="dynamic-form" @submit.prevent="onSave">
    <div
      v-for="field in fields"
      :key="field.name"
      class="form-field"
      :class="`field-type-${field.type}`"
    >
      <slot :name="field.name" :field="field" :model="localModel">
        <label :for="field.name">{{ field.label }}</label>

        <component
          :is="resolveFieldComponent(field.type)"
          v-if="resolveFieldComponent(field.type)"
          :field="field"
          v-model="localModel[field.name]"
        />
      </slot>
    </div>

    <div class="form-actions">
      <AppButton type="submit" label="Сохранить" color="success" />
      <AppButton type="button" label="Отмена" color="danger" @click="onCancel" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.dynamic-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-field {
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }

  input,
  textarea,
  select {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: var(--info);
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    }
  }

  &.field-type-checkbox {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    
    label {
      margin-bottom: 0;
    }
  }
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>