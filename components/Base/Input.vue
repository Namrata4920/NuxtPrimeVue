<template>
  <InputText 
    v-model="inputValue" 
    :placeholder="placeholder"
    @input="emitValue"
    type="text"
    variant="filled"
  />
</template>
  
<script setup>
import { ref, watch } from 'vue'
  
const props = defineProps({
  modelValue: String,
  placeholder: { type: String, default: "Enter text..." }
})

const emit = defineEmits(["update:modelValue"])
const inputValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
})

const emitValue = () => {
  emit("update:modelValue", inputValue.value)
}
</script>
  