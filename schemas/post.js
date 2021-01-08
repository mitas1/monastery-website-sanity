export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: { type: "author" },
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
            validation: (Rule) => Rule.required(),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "bodyPreview",
            title: "Body Preview",
            type: "string",
            validation: (Rule) => Rule.required().min(20).max(100),
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "PDF attachement",
            name: "file",
            type: "file",
            options: {
                storeOriginalFilename: true,
                accept: "application/pdf",
            },
            fields: [
                {
                    name: "name",
                    type: "string",
                    title: "Name",
                },
                {
                    name: "caption",
                    type: "string",
                    title: "Caption",
                },
            ],
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
