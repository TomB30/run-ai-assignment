<template>
  <section v-if="company" class="company-app">
    <nav class="sidebar-nav">
      <router-link
        :to="'/company/' + company._id + '/department'"
        title="Deparments"
      >
        <img src="@/assets/icons/departments.png" alt="" />
        <div></div>
      </router-link>
      <router-link
        :to="'/company/' + company._id + '/employee'"
        title="Employees"
      >
        <img src="@/assets/icons/employees.png" alt="" />
        <div></div>
      </router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      company: null,
    };
  },
  computed: {
    companyId() {
      return this.$route.params.id;
    },
  },
  watch: {
    companyId: {
      async handler(newVal) {
        this.company = await this.$store.dispatch({
          type: "loadCompany",
          id: newVal,
        });
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>