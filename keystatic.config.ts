import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "slug",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        slug: fields.text({
          label: "Slug",
          description: "Unique identifier for the post (filename)",
        }),
        title: fields.text({ label: "Title" }),
        date: fields.datetime({ label: "Date" }),
        updatedAt: fields.datetime({ label: "Updated At" }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: "Draft", defaultValue: false }),
        content: fields.mdx({
          label: "Content",
          extension: "mdx",
          options: {
            image: {
              directory: "public/post-assets",
              publicPath: "/post-assets/",
            },
          },
        }),
      },
    }),
  },
});
