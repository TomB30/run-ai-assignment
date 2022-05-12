<template>
  <section class="bg" @click.self="closeModal">
    <section class="dep-modal" @click.stop>
      <button @click="closeModal" class="close-btn">✖</button>
      <section v-if="isAssigning">
        <p>This department has employees.</p>
        <p>Would you like to assign them to other departments?</p>
        <div class="btns-container">
          <button class="success" @click="setAssign(true)">Yes</button>
          <button class="failure" @click="assignEmps(this.dep.emps)">
            Delete department with employees
          </button>
        </div>
      </section>
      <emps-assign
        v-if="assign"
        :emps="dep.emps"
        :deps="deps"
        :depId="dep.id"
        @assignEmps="assignEmps"
      />
      <div v-if="!dep.emps?.length">
        <p>Are you sure you want to delete this department?</p>
        <div class="btns-container">
          <button class="failure" @click="deleteDep">Ok</button>
          <button class="success" @click="closeModal">Cancel</button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import empsAssign from "./emps-assing.vue";
export default {
  props: {
    dep: Object,
  },
  data() {
    return {
      emps: JSON.parse(JSON.stringify(this.dep.emps)),
      assign: null,
    };
  },
  components: {
    empsAssign,
  },
  computed: {
    deps() {
      return this.$store.getters.company.departments.filter(
        (dep) => dep.id !== this.dep.id
      );
    },
    isAssigning() {
      return this.dep.emps?.length && this.assign === null;
    },
    company() {
      return this.$store.getters.company;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    assignEmps(emps) {
      const company = JSON.parse(JSON.stringify(this.company));
      emps.forEach((emp) => {
        const idx = company.employees.findIndex(
          (companyEmp) => companyEmp.id === emp.id
        );
        const args =
          emp.departmentId === this.dep.id ? [idx, 1] : [idx, 1, emp];
        company.employees.splice(...args);
      });
      this.deleteDep(company);
    },
    deleteDep(company) {
      company = company._id
        ? company
        : JSON.parse(JSON.stringify(this.company));
      console.log("company:", company);
      const idx = company.departments.findIndex(
        (dep) => dep.id === this.dep.id
      );
      company.departments.splice(idx, 1);
      this.updateCompany(company);
    },
    updateCompany(company) {
      this.$store.dispatch({ type: "updateCompany", company });
      this.closeModal();
    },
    setAssign(isAssign) {
      this.assign = isAssign;
    },
  },
};
</script>