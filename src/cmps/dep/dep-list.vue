<template>
  <section class="department-list" v-if="companyToEdit">
    <h2>Departments</h2>
    <table>
      <thead>
        <th>Department name</th>
        <th>employees</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <dep-preview v-for="dep in deps" :key="dep.id" :dep="dep" @setDep="setDep"></dep-preview>
        <new-dep @createDep="createDep"></new-dep>
      </tbody>
    </table>
    <dep-modal
      v-if="depToRemove"
      :dep="depToRemove"
      @closeModal="setDep"
    ></dep-modal>
  </section>
</template>

<script>
import newDep from './new-dep.vue';
import depModal from './dep-modal.vue';
import depPreview from './dep-preview.vue';
export default {
  data() {
    return {
      companyToEdit: null,
      depToRemove: null,
    };
  },
  components: {
    depModal,
    newDep,
    depPreview
  },
  computed: {
    deps() {
      return this.companyToEdit.departments.map((dep) => {
        const emps = this.companyToEdit.employees.filter(
          (emp) => emp.departmentId === dep.id
        );
        return { ...dep, emps };
      });
    },
  },
  methods: {
    setDep(dep) {
      this.depToRemove = dep;
    },
    createDep(dep) {
      this.companyToEdit.departments.push(dep);
      this.updateCompany(this.companyToEdit);
    },
    updateCompany(company) {
      this.$store.dispatch({ type: 'updateCompany', company });
    },
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
};
</script>