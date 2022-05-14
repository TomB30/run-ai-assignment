<template>
  <tr class="emp-preview">
    <td>{{ emp.name }}</td>
    <td>{{ emp.department }}</td>
    <td>{{ emp.hiredAt }}</td>
    <td>
      <button class="failure" @click="removeEmp(emp.id)">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    emp: Object,
  },
  methods: {
    removeEmp(empId) {
      this.$emit("removeEmp", empId);
    },
  },
};
</script>

<style>
</style>