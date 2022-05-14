<template>
  <tr>
    <td colspan="2">
      Create department :
      <input type="text" placeholder="Department name" v-model="newDepName" />
    </td>
    <td><button class="success" @click="createDep">Create</button></td>
  </tr>
</template>

<script>
import {utilService} from '../../services/util-service'

export default {
  data() {
    return {
      newDepName: '',
    };
  },
  methods: {
    createDep() {
      const dep = utilService.createDep(this.newDepName);
      this.$emit('createDep',dep)
      this.newDepName = '';

    },
  },
};
</script>