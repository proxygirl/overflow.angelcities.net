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
            description: "MESSAGE: hi chloe, just an fyi, if you change the title of a stack it messes things up. so, in the future if you want to change the name of one you might have to just make a new one, sorry about that. miss you. -hilah 10/24",
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