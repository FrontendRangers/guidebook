<template>
  <div class="App-sidebar">
    <ul class="Navigation">
      <nav-item v-for="component in components" :nav-item="component" :key="component.id"></nav-item>
    </ul>
  </div>
</template>

<script>
  import NavItem from './../components/NavItem';

  export default {
    name: 'Home',
    components: {
      NavItem,
    },
    computed: {
      components() {
        return this.$store.state.components;
      },
    },
  };
</script>

<style>
  .App-sidebar {
    background-color: #e2e2e2;
  }

  .Navigation {
    width: 240px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .Navigation-item a {
    display: block;
    padding: 8px 16px;
  }
</style>
