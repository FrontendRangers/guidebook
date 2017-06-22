const state = {
  components: [
    {
      id: 1,
      name: 'Buttons',
      description: 'The buttons.',
      category: 'components',
      slug: 'buttons',
      status: 'In production',
      examples: [
        {
          name: 'Example 1',
          status: 'In production',
          description: 'The default button',
          type: 'component',
          style: 'dark',
          showMarkup: true,
          markup: '<Button></Button>',
        },
        {
          name: 'Example 2',
          status: 'Deprecated',
        },
      ],
      props: [
        {
          name: 'Variant',
          description: 'The variation of the button',
          binding: 'variant',
          type: 'string',
          values: [
            'primary',
            'secondary',
          ],
        },
        {
          name: 'Size',
          description: 'The size of the button',
          type: 'string',
          binding: 'size',
          values: [
            'sm',
            'lg',
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Cards',
      category: 'components',
      description: 'The cards.',
      slug: 'cards',
    },
    {
      id: 3,
      name: 'Grids',
      category: 'layout',
      description: 'The grids.',
      slug: 'grids',
    },
    {
      id: 4,
      name: 'Colors',
      category: 'design',
      description: 'The color scheme.',
      slug: 'colors',
      examples: [
        {
          type: 'color-scheme',
          data: [{
            name: 'brand',
            values: [{
              name: '500',
              hex: '#fff',
            }],
          }],
        },
      ],
    },
  ],
};

export { state as default };
