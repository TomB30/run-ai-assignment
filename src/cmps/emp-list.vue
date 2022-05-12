<template>
  <section v-if="companyToEdit" class="employee-list">
    <h3>{{ companyToEdit.name }}'s Employees</h3>
    <label
      >Filter employees by department
      <select v-model="filterBy.depId" @change="setFilter">
        <option value=""></option>
        <option v-for="dep in deps" :key="dep.id" :value="dep.id">
          {{ dep.name }}
        </option>
      </select>
    </label>
    <table>
      <thead>
        <th>Name</th>
        <th>Department</th>
        <th>Hiring date</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="emp in employees" :key="emp.id">
          <td>{{ emp.name }}</td>
          <td>{{ emp.department }}</td>
          <td>{{ emp.hiredAt }}</td>
          <td>
            <button class="failure" @click="removeEmp(emp.id)">Remove</button>
          </td>
        </tr>
        <new-emp @createEmp="createEmp" />
      </tbody>
    </table>
  </section>
</template>

<script>
import newEmp from './new-emp.vue';
export default {
  data() {
    return {
      companyToEdit: null,
      filterBy: {
        depId: '',
      },
    };
  },
  components: {
    newEmp,
  },
  computed: {
    employees() {
      return this.companyToEdit.employees
        .filter((emp) =>
          this.filterBy.depId ? emp.departmentId === this.filterBy.depId : emp
        )
        .map((emp) => {
          const department = this.deps.find(
            (dep) => dep.id === emp.departmentId
          ).name;
          const options = { year: 'numeric', month: 'short', day: '2-digit' };
          const hiredAt = Intl.DateTimeFormat('en-US', options).format(
            emp.createdAt
          );
          return { ...emp, department, hiredAt };
        });
    },
    deps() {
      return this.companyToEdit.departments;
    },
  },
  methods: {
    removeEmp(empId) {
      const idx = this.companyToEdit.employees.findIndex(
        (emp) => emp.id === empId
      );
      this.companyToEdit.employees.splice(idx, 1);
      this.updateCompany(this.companyToEdit);
    },
    createEmp(emp) {
      this.companyToEdit.employees.push(emp);
      this.updateCompany(this.companyToEdit);
    },
    updateCompany(company) {
      this.$store.dispatch({ type: 'updateCompany', company });
    },
    setFilter(){
      this.$router.replace({query:{depId:this.filterBy.depId}})
    }
  },
  watch: {
    '$store.getters.company': {
      handler(newVal) {
        this.companyToEdit = JSON.parse(JSON.stringify(newVal));
      },
      deep: true,
      immediate: true,
    },
  },
  created(){
    const {depId} = this.$route.query
    this.filterBy.depId = depId || ''
  }
};
</script>