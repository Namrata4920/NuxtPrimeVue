<template>
    <div class="bg-gray-50 h-full pb-3">
      <div class="flex justify-between p-4">
        <BaseTypography variant="h3">{{ title }}</BaseTypography>
        <BaseButton variant="success">
          <template #icon-right><i class="pi pi-file-export text-white text-lg ml-2"></i></template>
          Export as csv
        </BaseButton>
      </div>
  
      <div class="rounded-lg mx-4 bg-white overflow-hidden">
        <!-- Selection Info -->
        <div v-if="selectedRows.size > 0" class="bg-red-100 text-red-700 p-4 flex justify-between items-center">
          <span>{{ selectedRows.size }} selected</span>
          <button @click="emit('assignCredits')" class="flex items-center text-sm font-medium text-red-600 hover:underline">
            <i class="pi pi-plus-circle mr-1"></i> Assign credits
          </button>
        </div>
  
        <!-- Table -->
        <div class="overflow-x-auto max-h-[480px] min-h-[480px]">
          <table class="w-full text-sm">
            <thead>
              <tr>
                <th class="p-4">
                  <input type="checkbox" @change="toggleSelectAll" :checked="allSelected" />
                </th>
                <th v-for="col in columns" :key="col.key" class="p-4 text-left">
                  {{ col.label }}
                </th>
                <th class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in displayedRows" :key="row.id" class="border-t border-gray-300">
                <td class="p-4">
                  <input type="checkbox" :value="row.id" v-model="selectedRows" />
                </td>
                <td v-for="col in columns" :key="col.key" class="p-4">
                  {{ row[col.key] }}
                </td>
                <td class="p-4 flex space-x-2">
                  <slot name="actions" :row="row"></slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Pagination -->
        <div class="flex items-center justify-end p-2 border-t border-gray-300 space-x-3">
          <button @click="prevPage" :disabled="currentPage === 1" class="h-8 w-8 border-1 border-gray-300 text-gray-600">&lt;</button>
          <span>{{ currentPage }} / {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="h-8 w-8 border-1 border-gray-300 text-gray-600">&gt;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    title: { type: String, default: "Table" },
    data: { type: Array, required: true },
    columns: { type: Array, required: true },
    itemsPerPage: { type: Number, default: 10 }
  });
  
  const emit = defineEmits(["assignCredits"])
  
  const selectedRows = ref(new Set())
  const currentPage = ref(1)
  
  const totalPages = computed(() => Math.ceil(props.data.length / props.itemsPerPage))
  
  const displayedRows = computed(() => {
    const start = (currentPage.value - 1) * props.itemsPerPage
    return props.data.slice(start, start + props.itemsPerPage)
  });
  
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
  };
  
  const allSelected = computed(() => selectedRows.value.size === props.data.length)
  
  const toggleSelectAll = () => {
    if (allSelected.value) {
      selectedRows.value.clear()
    } else {
      props.data.forEach(row => selectedRows.value.add(row.id))
    }
  };
  </script>
  
  <style scoped>
  th, td {
    text-align: left
  }
  </style>
  