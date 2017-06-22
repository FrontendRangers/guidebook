<template lang="html">
  <div class="component">
    <router-link v-bind:to="url" class="component">
      <p>{{ component.name }}</p>
    </router-link>
    <p>{{ component.description }}</p>
    <button
      v-bind:data-item-name="component.name"
      v-bind:data-item-id="component.id"
      data-item-url="/">
      {{ component.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Component',
  props: ['component'],
  computed: {
    url() {
      return `/${this.component.category}/${this.component.slug}`;
    },
  },
};
</script>
