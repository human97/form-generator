<script setup lang="ts">
import { computed } from 'vue'

type ButtonColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
type ButtonSize = 'small' | 'normal' | 'large'
type ButtonWidth = 'auto' | 'medium' | 'full'

interface ButtonProps {
  label?: string
  color?: ButtonColor
  size?: ButtonSize
  width?: ButtonWidth
  rounded?: boolean
  disabled?: boolean
  outlined?: boolean
}

interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}

const {
  label = 'Button',
  color = 'primary',
  size = 'normal',
  width = 'auto',
  rounded = false,
  disabled = false,
  outlined = false
} = defineProps<ButtonProps>()

const emit = defineEmits<ButtonEmits>()

const buttonClasses = computed<(string | object)[]>(() => [
  'btn',
  `btn--${color}`,
  `btn--${size}`,
  `btn--${width}`,
  {
    'btn--rounded': rounded,
    'btn--outlined': outlined
  }
])

const handleClick = (event: MouseEvent): void => {
  if (!disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button
      :class="buttonClasses"
      :disabled="disabled"
      :aria-label="label"
      @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.25rem;
  height: 2.5rem;
  color: #fff;
  border-radius: 0.4375rem;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;

  &:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  &--primary {
    background-color: var(--primary);
    border-color: var(--primary);

    &:enabled:hover {
      background-color: var(--primary-hover);
      border-color: var(--primary-hover);
    }
  }

  &--secondary {
    background-color: var(--secondary);
    border-color: var(--secondary);

    &:enabled:hover {
      background-color: var(--secondary-hover);
      border-color: var(--secondary-hover);
    }
  }

  &--success {
    background-color: var(--success);
    border-color: var(--success);

    &:enabled:hover {
      background-color: var(--success-hover);
      border-color: var(--success-hover);
    }
  }

  &--info {
    background-color: var(--info);
    border-color: var(--info);

    &:enabled:hover {
      background-color: var(--info-hover);
      border-color: var(--info-hover);
    }
  }

  &--warning {
    background-color: var(--warning);
    border-color: var(--warning);

    &:enabled:hover {
      background-color: var(--warning-hover);
      border-color: var(--warning-hover);
    }
  }

  &--danger {
    background-color: var(--danger);
    border-color: var(--danger);

    &:enabled:hover {
      background-color: var(--danger-hover);
      border-color: var(--danger-hover);
    }
  }

  &--small {
    height: 2rem;
    padding: 0 0.75rem;
    font-size: 0.875rem;
  }

  &--large {
    height: 3rem;
    padding: 0 1.875rem;
    font-size: 1rem;
  }

  &--medium {
    width: 9.375rem;
  }

  &--full {
    width: 100%;
  }

  &--rounded {
    border-radius: 0.9375rem;
  }

  &--outlined {
    background-color: transparent;
    color: var(--primary);
    border-color: var(--primary);

    &:enabled:hover {
      background-color: var(--primary);
      color: #fff;
    }

    &.btn--secondary {
      color: var(--secondary);
      border-color: var(--secondary);

      &:enabled:hover {
        background-color: var(--secondary);
        color: #fff;
      }
    }

    &.btn--success {
      color: var(--success);
      border-color: var(--success);

      &:enabled:hover {
        background-color: var(--success);
        color: #fff;
      }
    }

    &.btn--info {
      color: var(--info);
      border-color: var(--info);

      &:enabled:hover {
        background-color: var(--info);
        color: #fff;
      }
    }

    &.btn--warning {
      color: var(--warning);
      border-color: var(--warning);

      &:enabled:hover {
        background-color: var(--warning);
        color: #fff;
      }
    }

    &.btn--danger {
      color: var(--danger);
      border-color: var(--danger);

      &:enabled:hover {
        background-color: var(--danger);
        color: #fff;
      }
    }
  }
}
</style>