<template>
    <tr>
      <td>{{ dep.name }}</td>
      <td>{{ dep.emps.length }}</td>
      <td>
        <button class="failure" @click="setDep(dep)">Remove</button>
      </td>
    </tr>
</template>

<script>
export default {
    props:{
        dep:Object
    },
    methods:{
        setDep(dep){
            this.$emit('setDep', dep)
        }
    }
};
</script>

<style>
</style>