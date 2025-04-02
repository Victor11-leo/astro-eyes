// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {schemaTypes} from './cms/schemaTypes'
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  projectId: 'l0foa61x',
  dataset: 'production',
  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: location.origin,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});