import { Collection } from "tinacms"

export const theme: Collection = {
        name: "theme",
        label: "Theme",
        path: "content/global",
        match: {
          include: 'theme'
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
            {
              label: 'Background',
              name: 'background',
              type: 'object',
              fields: [
                {
                  label: 'Background Image',
                  name: 'background_image',
                  type: 'image',
                },
                {
                  label: 'Background Size',
                  name: 'background_size',
                  type: 'number',
                },                
                {
                  label: 'Background Color',
                  name: 'background_color',
                  type: 'string',
                  ui: {
                    component: 'color',
                    colorFormat: 'hex',
                  }                  
                },                      
              ],
            },          
            {
                label: 'Logo',
                name: 'logo',
                type: 'object',
                fields: [
                    {
                      label: 'Logo Image',
                      name: 'logo_image',
                      type: 'image',
                    },                  
                    {
                        label: 'Logo Background',
                        name: 'logo_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                        }
                    },
                    {
                        label: 'Logo Border',
                        name: 'logo_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                        }
                    },  
                    {
                        label: 'Logo Shadow',
                        name: 'logo_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                        }
                    },                               
                ]
            },
            {
                label: 'Wrapper',
                name: 'wrapper',
                type: 'object',
                fields: [
                    {
                        label: 'Wrapper Background',
                        name: 'wrapper_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                            }
                        },
                        {
                        label: 'Wrapper Foreground',
                        name: 'wrapper_foreground',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                            }
                        },
                        {
                        label: 'Wrapper Border',
                        name: 'wrapper_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                            }
                        },
                ]
            },
            {
                label:'Navigation',
                name: 'navigation',
                type: 'object',
                fields: [
                    {
                        label: 'Navigation Background',
                        name: 'navigation_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },          
                      {
                        label: 'Navigation Border Background',
                        name: 'navigation_border_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },  
                      {
                        label: 'Navigation Border Foreground',
                        name: 'navigation_border_foreground',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                      {
                        label: 'Menu Color',
                        name: 'menu_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                      
                      {
                        label: 'MOTD Background',
                        name: 'motd_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },       
                      {
                        label: 'MOTD Border',
                        name: 'motd_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },            
                      {
                        label: 'MOTD Color',
                        name: 'motd_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },
                ]
            },
            {
                label: 'Welcome',
                name: 'welcome',
                type: 'object',
                fields: [
                    {
                        label: 'Welcome Background',
                        name: 'welcome_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                               
                      {
                        label: 'Welcome Foreground',
                        name: 'welcome_foreground',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Welcome Inner Background',
                        name: 'welcome_inner',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },  
                      {
                        label: 'Welcome Border',
                        name: 'welcome_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Welcome Shadow',
                        name: 'welcome_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },
                      {
                        label: 'Welcome Color',
                        name: 'welcome_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                ],
            },
            {
                label: 'Currently',
                name: 'currently',
                type: 'object',
                fields: [
                    {
                        label: 'Currently Background',
                        name: 'currently_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                               
                      {
                        label: 'Currently Foreground',
                        name: 'currently_foreground',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Currently Inner Background',
                        name: 'currently_inner',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },  
                      {
                        label: 'Currently Border',
                        name: 'currently_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Currently Shadow',
                        name: 'currently_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },
                      {
                        label: 'Currently Color',
                        name: 'currently_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                ],
            },    
            {
                label: 'Avatar',
                name: 'avatar',
                type: 'object',
                fields: [
                    {
                        label: 'Avatar Background',
                        name: 'avatar_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                               
                      {
                        label: 'Avatar Foreground',
                        name: 'avatar_foreground',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Avatar Border',
                        name: 'avatar_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Avatar Shadow',
                        name: 'avatar_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                ],
            },
            {
                label: 'Post',
                name: 'post',
                type: 'object',
                fields: [
                    {
                        label: 'Post Background',
                        name: 'post_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                      {
                        label: 'Post Foreground',
                        name: 'post_foreground',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Post Border',
                        name: 'post_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },      
                      {
                        label: 'Post Shadow',
                        name: 'post_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Post Title Background',
                        name: 'post_title_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },      
                      {
                        label: 'Post Title Border',
                        name: 'post_title_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                      {
                        label: 'Post Title Color',
                        name: 'post_title_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Post Description Background',
                        name: 'post_description_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },      
                      {
                        label: 'Post Description Border',
                        name: 'post_description_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                      {
                        label: 'Post Description Color',
                        name: 'post_description_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },  
                      {
                        label: 'Post Type Border',
                        name: 'post_type_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                       
                      {
                        label: 'Post Date Background',
                        name: 'post_date_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },      
                      {
                        label: 'Post Date Border',
                        name: 'post_date_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                      {
                        label: 'Post Date Color',
                        name: 'post_date_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },  
                      {
                        label: 'Post Media Background',
                        name: 'post_media_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },      
                      {
                        label: 'Post Media Border',
                        name: 'post_media_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      }, 
                      {
                        label: 'Post Media Shadow',
                        name: 'post_media_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                                                                                                                                                                             
                ],
            },      
            {
                label: 'Stack',
                name: 'stack',
                type: 'object',
                fields: [                                              
                      {
                        label: 'Stack Title Border',
                        name: 'stack_title_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },       
                      {
                        label: 'Stack Title Shadow',
                        name: 'stack_title_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },
                      {
                        label: 'Stack Grid Background',
                        name: 'stack_grid_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                               
                      {
                        label: 'Stack Grid Border',
                        name: 'stack_grid_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Stack Grid Item Border',
                        name: 'stack_grid_item_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Stack Grid Shadow',
                        name: 'stack_grid_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },          
                      {
                        label: 'Stack Description Background',
                        name: 'stack_description_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                               
                      {
                        label: 'Stack Description Border',
                        name: 'stack_description_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Stack Description Color',
                        name: 'stack_description_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Stack Description Shadow',
                        name: 'stack_description_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },                                                            
                ],
            },
            {
                label: 'Block',
                name: 'block',
                type: 'object',
                fields: [
                    {
                        label: 'Block Background',
                        name: 'block_background',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },     
                      {
                        label: 'Block Border',
                        name: 'block_border',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },   
                      {
                        label: 'Block Color',
                        name: 'block_color',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },    
                      {
                        label: 'Block Shadow',
                        name: 'block_shadow',
                        type: 'string',
                        ui: {
                            component: 'color',
                            colorFormat: 'hex',
                          }
                      },  
                ],
            }                                      
        ],
}