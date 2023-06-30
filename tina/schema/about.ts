import { Collection } from "tinacms"

export const about: Collection = {
        name: "about",
        label: "About",
        path: "content",  
        match: {
            include: 'about'
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },                         
        fields: [
          {
            label: 'Avatar',
            name: 'avatar',
            type: 'image',
          },   
          {
            label: 'Currently I Am',
            name: 'currently',
            type: 'object',
            fields: [
              {
                type: "object",
                name: "reading",
                label: "Reading",
                fields: [
                  {type: "string", name:"title", label: "Title"},
                  {type: "string", name:"author", label: "Author"},
                  {type: "string", name:"symbol", label: "Symbol"},
                ],
              },
              {
                type: "object",
                name: "listening",
                label: "Listening",
                fields: [
                  {type: "string", name:"title", label: "Song/Album"},
                  {type: "string", name:"author", label: "Artist"},
                  {type: "string", name:"symbol", label: "Symbol"},
                ],
              },
              {
                type: "object",
                name: "watching",
                label: "Watching",
                fields: [
                  {type: "string", name:"title", label: "Title"},
                  {type: "string", name:"link", label: "Link"},
                  {type: "string", name:"symbol", label: "Symbol"},
                ],
              },                       
            ],           
          },                 
          {
            label: 'Blocks',
            name: 'blocks',
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => {
                return {label: item?.title};
              },
            },            
            fields: [
              {
                label: 'Title',
                name: 'title',
                type: 'string',
              },                
              {
                label: 'Content',
                name: 'content',
                type: 'rich-text',
                isBody: true,
              },              
            ],
          },     
        ],
}