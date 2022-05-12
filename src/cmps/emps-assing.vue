<template>
  <div class="emp-list">
    <p>Employees that won't be assigned will be deleted.</p>
    <div v-for="emp in empsToEdit" :key="emp.id" class="emp-preview">
      <span>{{ emp.name }}</span>
      <select v-model="emp.departmentId">
        <option :value="depId"></option>
        <option v-for="dep in deps" :key="dep.id" :value="dep.id">
          {{ dep.name }}
        </option>
      </select>
    </div>
    <div class="btns-container">
      <button class="failure" @click="assignEmps">Assign and delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emps: Array,
    deps: Array,
    depId: String,
  },
  data() {
    return {
      empsToEdit: JSON.parse(JSON.stringify(this.emps)),
    };
  },
  methods: {
    assignEmps() {
      this.$emit("assignEmps", this.empsToEdit);
    },
  },
};
</script>