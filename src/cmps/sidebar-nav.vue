<template>
  <nav class="sidebar-nav">
    <router-link
      :to="'/company/' + company._id + '/department'"
      title="Deparments"
    >
      <img src="@/assets/icons/departments.png" alt="" />
    </router-link>
    <router-link
      :to="'/company/' + company._id + '/employee'"
      title="Employees"
    >
      <img src="@/assets/icons/employees.png" alt="" />
    </router-link>
  </nav>
</template>

<script>
export default {
  props: {
    company: Object,
  },
};
</script>

<style>
</style>