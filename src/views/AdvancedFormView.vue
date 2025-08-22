<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import FormGenerator from '@/components/FormGenerator.vue';
import type { FormField } from '@/types';

const store = useStore();

const formFields = ref<FormField[]>([
  {
    type: 'input',
    name: 'name',
    label: 'Полное имя',
    placeholder: 'Введите ваше полное имя',
  },
  {
    type: 'input',
    name: 'email',
    label: 'Email',
    placeholder: 'Ваш email',
    attributes: { type: 'email', disabled: true },
  },
  {
    type: 'select',
    name: 'department',
    label: 'Отдел',
    placeholder: 'Выберите ваш отдел',
    options: [
      { value: 'dev', label: 'Разработка' },
      { value: 'qa', label: 'Тестирование' },
      { value: 'pm', label: 'Менеджмент' },
    ],
  },
  {
    type: 'textarea',
    name: 'bio',
    label: 'О себе',
    placeholder: 'Расскажите немного о себе',
    attributes: { rows: 4 },
  },
  {
    type: 'checkbox',
    name: 'subscribe',
    label: 'Подписаться на рассылку',
  },
]);

const formData = ref({ ...store.getters.userProfile });

const handleSave = (data: any) => {
  console.log('Сохраняем данные профиля...');
  store.dispatch('saveProfile', data).then(() => {
    alert('Профиль успешно сохранен через Vuex Action!');
  });
};

const handleCancel = () => {
  alert('Редактирование отменено');
  formData.value = { ...store.getters.userProfile };
};
</script>

<template>
  <div class="view-container">
    <h1>Редактирование профиля (со слотами и данными из Vuex)</h1>
    <FormGenerator
      v-model="formData"
      :fields="formFields"
      @save="handleSave"
      @cancel="handleCancel"
    >
      <template #email="{ field, model }">
        <div class="custom-field">
          <label :for="field.name">{{ field.label }}:</label>
          <input
            :id="field.name"
            v-model="model[field.name]"
            :placeholder="field.placeholder"
            class="custom-input"
          />
          <small>Это поле кастомизировано через слот!</small>
        </div>
      </template>
    </FormGenerator>
    <div class="output">
      <h3>Данные формы (v-model):</h3>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-container {
  max-width: 600px;
  margin: 2rem auto;
}
.output {
  margin-top: 2rem;
  background-color: #2d2d2d;
  color: #f1f1f1;
  padding: 1rem;
  border-radius: 8px;

  pre {
    white-space: pre-wrap;
  }   
}

.custom-field {
  .custom-input {
    border: 2px dashed var(--info);
    padding: 0.5rem;
  }
  small {
    margin-top: 4px;
    color: var(--info);
    font-weight: bold;
  }
}
</style>