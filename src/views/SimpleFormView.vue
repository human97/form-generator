<script setup lang="ts">
import { ref } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';
import type { FormField } from '@/types';

const formFields = ref<FormField[]>([
  {
    type: 'input',
    name: 'username',
    label: 'Имя пользователя',
    placeholder: 'Введите ваше имя',
    attributes: { autocomplete: 'off' },
  },
  {
    type: 'input',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Создайте пароль',
    attributes: { type: 'password' },
  },
  {
    type: 'checkbox',
    name: 'agree',
    label: 'Я согласен с условиями',
  },
]);

const formData = ref({
  username: '',
  password: '',
  agree: false,
});

const handleSave = (data: any) => {
  alert('Форма сохранена! Откройте консоль для просмотра данных.');
  console.log('Данные для отправки:', data);
};

const handleCancel = () => {
  alert('Действие отменено');
  formData.value = {
    username: '',
    password: '',
    agree: false,
  };
};
</script>

<template>
  <div class="view-container">
    <h1>Простая форма регистрации</h1>
    <FormGenerator
      v-model="formData"
      :fields="formFields"
      @save="handleSave"
      @cancel="handleCancel"
    />
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
</style>