import { Collection } from "tinacms"

export const post: Collection = {
        name: "post",
        label: "Posts",
        path: "content/post",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            label: "Date",
            name: "date",
            required: true,
          },
          {
            label: "Stack",
            name: "stack",
            type: "reference",
            collections: ["stack"],
            required: true,
          },      
          {
            label: 'Images',
            name: 'images',
            type: 'object',
            description: 'Images',
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item?.title};
              },
            },
            fields: [
              {
                label: 'Image',
                name: 'image',
                type: 'image',
              },
              {
                label: 'Title',
                name: 'title',
                type: 'string',
              },              
              {
                label: 'Alt Text',
                name: 'alt_text',
                type: 'string',
              },
            ],
          },                  
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
        ],
}