import payload from "payload";

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
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "Content",
      label: "Content",
      type: "textarea",
      required: true,
    },
    {
      name: "Price",
      label: "Price",
      type: "text",
      required: true,
    },
    {
      name: "Image",
      label: "Image URL",
      type: "text",
      required: true,
    },
  ],
  hooks: {
    afterOperation: [
      async (args) => {
        let action, logMessage;

        if (args.operation === "create") {
          action = "Blog Created";
          logMessage = args.result.Title;
        } else if (args.operation === "deleteByID") {
          action = "Blog Deleted";
          logMessage = args.result.Title;
        } else if (args.operation === "updateByID") {
          action = "Blog Updated";
          logMessage = args.result.Title;
        }

        if (action) {
          console.log("Operation:", args.operation);
          await payload.create({
            collection: "BlogLog",
            data: {
              name: logMessage,
              log: args.result.id,
              timestamp: new Date(),
              action: action,
            },
          });
        }
      },
    ],
  },
};

export default Blog;
