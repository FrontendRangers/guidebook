<template>
  <div class="Component-example">
    <p>{{ example.name }}</p>
    <span class="Badge" v-if="example.status">{{ example.status }}</span>
    <p>{{ example.description }}</p>

    <div class="Component-markup" v-if="example.type === 'component'">
      {{ example.markup }}
      <pre><code>{{ example.markup }}</code></pre>
    </div>

    <div class="Component-colorScheme" v-if="example.type === 'color-scheme'">
      <div v-for="color in example.data">
        {{ color.name }}
        <div v-for="values in color.values">
          <p>{{ values.name }}</p>
          <p>{{ values.hex }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComponentExample',
    props: ['example'],
  };
</script>

<style>
  .Component-markup {
    background-color: grey;
    border: 1px solid indianred;
  }
</style>
