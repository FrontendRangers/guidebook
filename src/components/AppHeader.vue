<template>
  <div class="App-header">
    <span class="App-name">{{appName}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        appName: 'VueBook',
      };
    },
  };
</script>

<style scoped>
  .App-header {
    padding: 16px;
    background: indianred;
    color: #fff;
    flex: 0 1 auto;
  }

  .App-name {
    font-size: 18px;
    font-weight: bold;
    line-height: 24px;
  }
</style>
