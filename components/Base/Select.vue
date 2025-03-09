<template>
  <div>
    <Select
      :modelValue="modelValue"
      :options="options"
      optionLabel="name"
      :placeholder="placeholder"
      :highlightOnSelect="false"
      checkmark
      @update:modelValue="handleUpdate"
    />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import Select from "primevue/select";

const props = defineProps({
  modelValue: [String, Object],
  options: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleUpdate = (value) => {
  emit("update:modelValue", value)
  console.log(value)
};
</script>
