// Simple in-memory store for demo purposes
const pages = new Map();

export function createPage(slug, components) {
  pages.set(slug, components);
  return { success: true, slug };
}

export function getPage(slug) {
  return pages.get(slug) || null;
}

// Pre-create some example pages
createPage('example-1', [
  {
    type: 'TextSection',
    props: {
      title: 'Welcome to Example 1',
      content: 'This is an example page created via the API',
      align: 'center'
    }
  },
  {
    type: 'ImageBlock',
    props: {
      src: '/placeholder.jpg',
      alt: 'Example image',
      width: 800,
      height: 400
    }
  }
]);

createPage('example-2', [
  {
    type: 'Card',
    props: {
      title: 'Example Card',
      description: 'This is a card component',
      icon: '🌟'
    }
  },
  {
    type: 'StatsBox',
    props: {
      stats: [
        { value: '100+', label: 'Users' },
        { value: '24/7', label: 'Support' },
        { value: '99%', label: 'Uptime' }
      ]
    }
  }
]);