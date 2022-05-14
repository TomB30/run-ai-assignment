<template>
  <section v-if="company" class="company-app">
    <sidebar-nav :company="company"></sidebar-nav>
    <main>
      <h1>
        {{company.name}}
      </h1>
      <router-view></router-view>
      <div class="blue-circle"></div>
      <div class="pink-ellipse"></div>
    </main>
  </section>
</template>

<script>
import sidebarNav from "../cmps/sidebar-nav.vue";

export default {
  data() {
    return {
      company: null,
    };
  },
  components:{
    sidebarNav
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