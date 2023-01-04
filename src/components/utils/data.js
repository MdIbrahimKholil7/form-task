export const options = [
    {
        optionName: 'Manufacturing',
        subOptions: [
            {
                name: 'Construction materials',
                id: 1
            },
            {
                name: 'Electronics and Optics',
                id: 2
            },
            {
                subCategory: {
                    subCategoryName: 'Food and Beverage',
                    subCategoryItems: [
                        {
                            name: 'Bakery &amp; confectionery products'
                        },
                        {
                            name: 'Beverages'
                        },
                        {
                            name: 'Fish &amp; fish products'
                        },
                        {
                            name: 'Meat &amp; meat products'
                        },
                        {
                            name: 'Milk &amp; dairy products '
                        },
                        {
                            name: 'Other'
                        },
                        {
                            name: 'Sweets &amp; snack food'
                        },
                    ]

                }
            },
            {
                subCategory: {
                    subCategoryName: 'Furniture',
                    subCategoryItems: [
                        {
                            name: 'Bathroom/sauna'
                        },
                        {
                            name: 'Bedroom'
                        },
                        {
                            name: 'Children’s room'
                        },
                        {
                            name: 'Kitchen'
                        },
                        {
                            name: 'Living room'
                        },
                        {
                            name: 'Office'
                        },
                        {
                            name: 'Other (Furniture)'
                        },
                        {
                            name: 'Outdoor'
                        },
                        {
                            name: 'Project furniture'
                        },
                    ]

                }
            },
            {
                subCategory: {
                    subCategoryName: 'Machinery',
                    subCategoryItems: [
                        {
                            name: 'Machinery components'
                        },
                        {
                            name: 'Machinery equipment/tools'
                        },
                        {
                            name: 'Manufacture of machinery'
                        },
                        {
                            subCategoryChild: {
                                subCatChildName: "Maritime",
                                subCategorys: [
                                    {
                                        name: "Aluminium and steel workboats"
                                    },
                                    {
                                        name: "Boat/Yacht building"
                                    },
                                    {
                                        name: "Ship repair and conversion"
                                    },
                                ]
                            }
                        },
                        {
                            name: 'Metal structures'
                        },
                        {
                            name: 'Other'
                        },
                        {
                            name: 'Repair and maintenance service'
                        },
                    ]

                }
            },
            {
                subCategory: {
                    subCategoryName: 'Metalworking',
                    subCategoryItems: [
                        {
                            name: 'Construction of metal structures'
                        },
                        {
                            name: 'Houses and buildings'
                        },
                        {
                            name: 'Metal products'
                        },
                        {
                            subCategoryChild:
                            {
                                subCatChildName: "Metal works",
                                subCategorys: [
                                    {
                                        name: "CNC-machining"
                                    },
                                    {
                                        name: "Forgings, Fasteners"
                                    },
                                    {
                                        name: "Gas, Plasma, Laser cutting"
                                    },
                                    {
                                        name: "MIG, TIG, Aluminum welding"
                                    },
                                ]
                            }

                        },

                    ]
                }
            },
            {
                subCategory: {
                    subCategoryName: 'Plastic and Rubber',
                    subCategoryItems: [
                        {
                            name: 'Packaging'
                        },
                        {
                            name: 'Plastic goods'
                        },

                        {
                            subCategoryChild:
                            {
                                subCatChildName: "Plastic processing technology",
                                subCategorys: [
                                    {
                                        name: "Blowing"
                                    },
                                    {
                                        name: "Moulding"
                                    },
                                    {
                                        name: "Plastics welding and processing"
                                    },

                                ]
                            }

                        },
                        {
                            name: 'Plastic profiles'
                        }
                    ]
                }
            },
            {
                subCategory: {
                    subCategoryName: 'Printing ',
                    subCategoryItems: [
                        {
                            name: 'Advertising'
                        },
                        {
                            name: 'Book/Periodicals printing'
                        },

                        {
                            name: 'Labelling and packaging printing'
                        },

                    ]
                }
            },
            {
                subCategory: {
                    subCategoryName: 'Textile and Clothing ',
                    subCategoryItems: [
                        {
                            name: 'Clothing'
                        },
                        {
                            name: 'Textile'
                        }
                    ]
                }
            },
            {
                subCategory: {
                    subCategoryName: 'Wood',
                    subCategoryItems: [
                        {
                            name: 'Other (Wood)'
                        },
                        {
                            name: 'Wooden building materials'
                        },
                        {
                            name: 'Wooden houses'
                        },
                    ]
                }
            },


        ]
    },
    {
        optionName: 'Other',
        subOptions: [
            {
                name: 'Creative industries'
            },
            {
                name: 'Energy technology'
            },
            {
                name: 'Environment'
            },
        ]

    },
    {
        optionName: 'Service',
            subOptions: [
                {
                    name: 'Business services'
                },
                {
                    name: 'Engineering'
                },

                {
                    subCategory:
                    {
                        subCategoryName: "Information Technology and Telecommunications",
                        subCategoryItems: [
                            {
                                name: "Data processing, Web portals, E-marketing"
                            },
                            {
                                name: "Programming, Consultancy"
                            },
                            {
                                name: "Software, Hardware"
                            },
                            {
                                name: "Telecommunications"
                            },

                        ]
                    }

                },
                {
                    name: 'Tourism'
                },
                {
                    name: 'Translation services'
                },
                {
                    subCategory:
                    {
                        subCategoryName: "Transport and Logistics",
                        subCategoryItems: [
                            {
                                name: "Air"
                            },
                            {
                                name: "Rail"
                            },
                            {
                                name: "Road"
                            },
                            {
                                name: "Water"
                            },

                        ]
                    }

                },

            ],

        
    },
]