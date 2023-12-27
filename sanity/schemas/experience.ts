import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string'
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',  
      type: 'date'
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string'
    })
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'position'
    }
  }
})
