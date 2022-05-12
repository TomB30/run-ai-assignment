<template>
  <header class="app-header">
    <router-link to="/" class="logo"
      ><img src="@/assets/logo.svg" class="header-logo" alt=""
    /></router-link>
    <nav>
      <router-link
        v-for="company in companies"
        :key="company._id"
        :to="'/company/' + company._id"
        >{{ company.name }}</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    companies() {
      return this.$store.getters.companiesList;
    },
  },
};
</script>