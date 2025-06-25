import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemaTypes'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'


export default defineConfig({
  name: 'default',
  title: 'Flite CMS',
  projectId: '5senu7u5',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
    structureTool()
  ],
  schema: {
    types: schemaTypes as any,
  },
  // Remove this block entirely — `studio` is NOT a valid top-level key anymore
})
