// Опция для select
export interface FieldOption {
  value: string | number;
  label: string;
}

// Описание поля формы
export interface FormField {
  name: string; // Ключ для v-model, должен быть уникальным
  label: string;
  type: 'input' | 'select' | 'checkbox' | 'textarea';
  placeholder?: string;
  options?: FieldOption[]; // Только для type: 'select'
  attributes?: Record<string, any>; // Для любых HTML-атрибутов, например { type: 'password' }
}