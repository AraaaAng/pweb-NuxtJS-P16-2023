/** @type {import('payload/types').CollectionConfig} */
const Blog = {
  slug: "Blog",
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "Title",
      type: "text",
      required: true,
    },
    {
      name: "Content",
      type: "text",
      required: true,
    },
    {
      name: "Price",
      type: "text",
      required: true,
    },
    {
      name: "Image",
      type: "text",
      required: true,
    },
  ],
};

export default Blog;
