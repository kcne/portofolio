import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'userInfo',
  title: 'User Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'surname',
      title: 'Surname',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text'
    }),
    defineField({
      name: 'cv',
      title: 'CV',
      type: 'file'
    }),
    defineField({
      name: 'githubUrl',
      title: 'Github URL',
      type: 'url'
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn URL',
      type: 'url'
    })
  ],
  preview: {
    select: {
      title: 'title',
      name: 'name',
      surname: 'surname'
    },
    prepare (selection) {
      const { title, name, surname } = selection
      return {
        title: `${name} ${surname}`,
        subtitle: title
      }
    }
  }
})
