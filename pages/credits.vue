<template>
  <BaseTable
    title="Credits"
    :data="rows"
    :columns="columns"
    @assignCredits="handleAssignCredits"
  >
    <template #actions="{ row }">
      <button class="text-orange-600"><i class="pi pi-link"></i></button>
      <button class="text-blue-600"><i class="pi pi-pencil"></i></button>
    </template>
  </BaseTable>
</template>

<script setup>

const rows = [
  { id: 1, farmName: "Farm A", owner: "John", zone: "F-2,H-4, Q97", field: "20", size: "32.8", value: "20" },
  { id: 2, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 3, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 4, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 5, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 6, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 7, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 8, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 9, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 10, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 11, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
  { id: 12, farmName: "Farm B", owner: "Doe", zone: "F-2,H-4, Q97", field: "30", size: "15.4", value: "10" },
];

const columns = [
  { key: "owner", label: "Customer Name" },
  { key: "farmName", label: "Project" },
  { key: "zone", label: "Plots" },
  { key: "field", label: "Plots owned" },
  { key: "size", label: "Total area in acres" },
  { key: "value", label: "Available Credits" },
];

const handleAssignCredits = () => {
  alert("Assign credits clicked!")
};
</script>
