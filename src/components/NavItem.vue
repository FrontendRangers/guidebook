<template lang="html">
  <li class="Navigation-item">
    <router-link v-bind:to="url">
      {{ navItem.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: ['navItem'],
  computed: {
    url() {
      return `/components/${this.navItem.slug}`;
    },
  },
};
</script>
