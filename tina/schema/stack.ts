import { Collection } from "tinacms"

export const stack: Collection = {
        name: "stack",
        label: "Stacks",
        path: "content/stack",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "symbol",
            label: "Symbol",
            required: true,
          },
          {
            label: 'Background',
            name: 'background',
            type: 'string',
            ui: {
                component: 'color',
                colorFormat: 'hex',
            }
        },  
        {
          label: 'Color',
          name: 'color',
          type: 'string',
          ui: {
              component: 'color',
              colorFormat: 'hex',
          }
        },                      
        {
          type: "rich-text",
          name: "description",
          label: "Description",
          isBody: true,
        },
        ],
}