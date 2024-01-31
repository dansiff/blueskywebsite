// sanity/schemas/benefits.js
export default {
    name: 'benefits',
    title: 'Benefits',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'bullets',
            title: 'Bullets',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Bullet Title',
                            type: 'string'
                        },
                        {
                            name: 'desc',
                            title: 'Bullet Description',
                            type: 'text'
                        }
                    ]
                }
            ]
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
        },
        {
            name: 'buttonLink',
            title: 'Button Link',
            type: 'url'
        }
    ]
};
