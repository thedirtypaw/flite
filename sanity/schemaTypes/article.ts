import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (Header + Social Preview)',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string'
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'thumbImage',
      title: 'Thumbnail Image (Listing)',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords (for SEO)',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.max(160).required()
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          fields: [
            
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: { isHighlighted: true }
            }
          ],
          options: {
            hotspot: true
          }
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'article'}]}]
    }),
    defineField({
      name: 'articleSection',
      title: 'Article Section',
      type: 'string'
    }),
    defineField({
      name: 'articleType',
      title: 'Article Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hub', value: 'hub' },
          { title: 'Cluster', value: 'cluster' },
          { title: 'Article', value: 'article' },
          { title: 'FAQ', value: 'faq' }
        ]
      },
      validation: Rule => Rule.required()
    })

  ]
})
