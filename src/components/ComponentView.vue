<template>
  <div class="Component-details">
    <h1>{{ component.name }}</h1>
    <span class="Badge" v-if="component.status">{{ component.status }}</span>
    <p v-if="component.description">{{ component.description }}</p>
    <div v-for="example in component.examples">
      <component-example :example="example"></component-example>
    </div>

    <table class="Component-props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Type</th>
          <th>Values</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in component.props">
          <td>
            {{ prop.name }}
          </td>
          <td>
            {{ prop.description }}
          </td>
          <td>
            {{ prop.type }}
          </td>
          <td>
            <select v-model="render">
              <option v-for="value in prop.values" :value="value">{{ value }}</option>
            </select>
            {{ render }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ComponentExample from './ComponentExample';

  export default {
    name: 'ComponentView',
    components: {
      ComponentExample,
    },
    data() {
      return {
        render: '',
      };
    },
    computed: {
      slug() {
        return this.$store.state.route.params.slug;
      },
      component() {
        return this.$store.getters.getComponentBySlug(this.slug);
      },
    },
  };
</script>

<style>
  .Component-details {
    max-width: 960px;
    width: 100%;
  }

  .Badge {
    display: inline-block;
    padding: 4px 12px;
    color: white;
    font-size: 14px;
    line-height: 1;
    border-radius: 100px;
    background-color: green;
  }
</style>
