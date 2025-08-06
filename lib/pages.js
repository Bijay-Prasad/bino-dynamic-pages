import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  components: { type: Array, required: true },
});

export const Page = mongoose.models.Page || mongoose.model('Page', pageSchema);

export async function createPage(slug, components) {
  await Page.findOneAndUpdate(
    { slug },
    { slug, components },
    { upsert: true, new: true }
  );
  return { success: true, slug };
}

export async function getPage(slug) {
  const page = await Page.findOne({ slug });
  return page ? page.components : null;
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