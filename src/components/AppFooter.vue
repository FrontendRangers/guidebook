<template>
  <div class="App-footer">
    <div>
      &copy; {{appName}}
    </div>
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
  .App-footer {
    flex: 0 1 auto;
    margin-top: auto;
    padding: 8px 16px;
    color: #fff;
    background-color: grey;
    font-size: 14px;
    line-height: 16px;
  }
</style>
