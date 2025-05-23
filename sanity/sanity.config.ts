import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemaTypes'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import './style/override.css'


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
    types: schemaTypes,
  },
  // Remove this block entirely — `studio` is NOT a valid top-level key anymore
})
