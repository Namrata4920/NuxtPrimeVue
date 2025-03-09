<template>
    <component :is="variantTag" :class="[baseStyles[variant], className]">
      <slot v-bind="{}" />
    </component>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    variant: {
      type: String,
      default: "p",
      validator: (val) => ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"].includes(val),
    },
    className: { type: String, default: "" },
  });
  
  const baseStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    p: "text-base",
    span: "text-sm",
  };
  
  const variantTag = computed(() => props.variant || "p");
  </script>
  