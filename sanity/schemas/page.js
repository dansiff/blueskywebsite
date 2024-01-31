export const page = {
    title: 'Page',
    name: 'page',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'content',
            type: 'blockContent',
            title: 'Content'
        },
        // Add other fields as necessary for your page, such as images, SEO metadata, etc.
    ]
};
