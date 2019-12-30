export default {
    name: "announcement",
    title: "Oznam",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            validation: Rule => Rule.required(),
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
    ],
    preview: {
        select: {
            title: "title",
            author: "author.name",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;

            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
