<template>
    <button
      :class="computedClasses"
      :disabled="disabled"
      @click="onClick"
    >
      <slot name="icon-left"></slot>
      <slot></slot>
      <slot name="icon-right"></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    variant: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["primary", "secondary", "outline", "danger", "success"].includes(value),
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(["click"])
  
  const onClick = (event) => {
    if (!props.disabled) {
      emit("click", event)
    }
  };
  
  const computedClasses = computed(() => {
    const baseClasses = "flex items-center justify-center font-semibold rounded transition duration-300 focus:outline-none";
  
    const sizeClasses = {
      sm: "px-3 py-1 text-sm",
      md: "h-10 w-34 text-base",
      lg: "px-6 py-3 text-lg",
    }
  
    const variantClasses = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-600 text-white hover:bg-gray-700",
      outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
      success: "bg-green-600 text-white hover:bg-green-600",
    }
  
    return `${baseClasses} ${sizeClasses[props.size]} ${variantClasses[props.variant]} ${
      props.disabled ? "opacity-50 cursor-not-allowed" : ""
    }`
  })
  </script>
  
  