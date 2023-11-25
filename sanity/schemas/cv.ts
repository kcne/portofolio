import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
