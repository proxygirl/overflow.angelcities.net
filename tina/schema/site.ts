import { Collection } from "tinacms"

export const site: Collection = {
        name: "site",
        label: "Site",
        path: "content/global/",   
        match: {
            include: 'site'
        },        
        ui: {
            allowedActions: {
              create: false,
              delete: false,
            },
          },         
        fields: [ 
            {
                type: "rich-text",
                name: "welcome",
                label: "Welcome",
            },                 
            {
                label: 'Message of the Day',
                name: 'motd',
                type: 'string',
                required: true,
            },                     
            {
                label: 'Badges',
                name:'badges',
                type: 'image',
                list: true,
            },
        ],
}