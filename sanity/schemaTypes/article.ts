import { defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'date', title: 'Publish Date', type: 'datetime' },
    { name: 'mainImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Gallery Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'body', title: 'Article Body', type: 'array', of: [{ type: 'block' }] }
  ]
})
