<template>
  <tr>
    <td colspan="2">
      <label
        >Name
        <input type="text" v-model="newEmp.name" placeholder="Employee's name"
      /></label>
    </td>
    <td>
      <select v-model="newEmp.departmentId">
      <option value="" disabled>Department</option>
        <option v-for="dep in deps" :key="dep.id" :value="dep.id">
          {{ dep.name }}
        </option>
      </select>
    </td>
    <td><button class="success" @click="createEmp">Create</button></td>
  </tr>
</template>

<script>
import { utilService } from '../services/util-service';
export default {
  data() {
    return {
      newEmp: {
        name: '',
        departmentId: '',
      },
    };
  },
  computed: {
    deps() {
      return this.$store.getters.company.departments;
    },
  },
  methods: {
    createEmp() {
      const { name, departmentId } = this.newEmp;
      if(!name || !departmentId) return
      const emp = utilService.createEmp(name, departmentId);
      this.$emit('createEmp', emp);
      this.newEmp = {
        name: '',
        departmentId: '',
      };
    },
  },
};
</script>