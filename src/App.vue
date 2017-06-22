<template>
  <div class="App" id="app">
    <app-header></app-header>
    <div class="App-context">
      <app-sidebar></app-sidebar>
      <div class="App-content">
        <router-view></router-view>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppSidebar from './components/AppSidebar';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter,
    AppSidebar,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.App {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.App-context {
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
}

.App-content {
  flex: 1 0 auto;
  padding: 32px;
  display: flex;
  justify-content: center;
}

</style>
