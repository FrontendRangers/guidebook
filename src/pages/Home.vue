<template>
  <div class="components">
    <div class="component" v-for="component in components">
      <el-component :component="component"></el-component>
    </div>
  </div>
</template>

<script>
  import ElComponent from './../components/Component';

  export default {
    name: 'Home',
    components: {
      ElComponent,
    },
    computed: {
      components() {
        return this.$store.state.components;
      },
    },
  };
</script>
