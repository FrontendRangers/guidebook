/* eslint-disable */

const getters = {
  getComponentBySlug: (state) => (slug) => {
    return state.components.find(component => component.slug === slug);
  },
};

export { getters as default };
