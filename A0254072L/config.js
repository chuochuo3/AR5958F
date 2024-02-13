var config = {
    style: 'mapbox://styles/chuochuo3/clsja4t2i00kx01r9h2sj89ly',
    accessToken: 'pk.eyJ1IjoiY2h1b2NodW8zIiwiYSI6ImNsc2IxYWxjMDA3bDQyanF1c3prcjZ4ZWsifQ.37PnXDhAAUKZUCNjtQggvw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Private Residential Properties in Singapore',
    subtitle: 'Showcasing an overview of the distribution of private housing and dwellers with a personal experience',
    byline: 'By Shen Chuochuo',
    footer: 'Source: URA, data.gov.sg',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'The Number of People Living In Private Residential Properties',
            description: 'In Singapore, approximately 1.4 million people are living in private residential properties.This map shows the number of people living in different types of private residential properties, including condominiums, apartments, and landed properties in each subzones.',
            location: {
                center: [103.79824, 1.38213],
                zoom: 10.72,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1Residents',
                    opacity: 1
                }, 
                {
                    layer: 'Heatmap',
                    opacity: 0
                },
                {
                    layer: '3HDBClementi',
                    opacity: 0
                },
                {
                    layer: '3PrivateClementi',
                    opacity: 0
                },
                {
                    layer: '4route',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: '1Residents',
                    opacity: 0
                },
                {
                   layer: 'Heatmap',
                   opacity: 0
               },
               {
                   layer: '3HDBClementi',
                   opacity: 0
               },
               {
                   layer: '3PrivateClementi',
                   opacity: 0
               },
               {
                   layer: '4route',
                   opacity: 0
               }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Heatmap of Private Housing in Holland Village',
            image: 'HollandV.jpg',
            description: 'This map displays the heatmap of private housing around Holland Village, one of the most densely constructed areas for private housing in Singapore.',
            location: {
                center:[103.79490, 1.31094],
                zoom: 15,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1Residents',
                    opacity: 0
                },
                {
                   layer: 'Heatmap',
                   opacity: 1
               },
               {
                   layer: '3HDBClementi',
                   opacity: 0
               },
               {
                   layer: '3PrivateClementi',
                   opacity: 0
               },
               {
                   layer: '4route',
                   opacity: 0
               }
            ],
            onChapterExit: [
                {
                    layer: '1Residents',
                    opacity: 0
                },
                {
                   layer: 'Heatmap',
                   opacity: 0
               },
               {
                   layer: '3HDBClementi',
                   opacity: 0
               },
               {
                   layer: '3PrivateClementi',
                   opacity: 0
               },
               {
                   layer: '4route',
                   opacity: 0
               }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Distribution of Private and Public Housing in Clementi',
            description: 'In Clementi, which is the planning area that I live in, has a good mix of private and public housing with supplement provision of community facilities and parks. The private housing is shown in red and the public, in blue.',
            location: {
                center: [103.76260, 1.30579],
                zoom: 15,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1Residents',
                    opacity: 0
                },
                {
                   layer: '3HDBClementi',
                   opacity: 1
               },
               {
                   layer: '3PrivateClementi',
                   opacity: 1
               },
               
               {
                   layer: '4route',
                   opacity: 0
               }
            ],
            onChapterExit: [
                {
                layer: '1Residents',
                opacity: 0
            },
            {
               layer: 'Heatmap',
               opacity: 0
           },
           {
               layer: '3HDBClementi',
               opacity: 0
           },
           {
               layer: '3PrivateClementi',
               opacity: 0
           },
           {
               layer: '4route',
               opacity: 1
           }]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'My Daily Route From Home to School',
            description: 'The thin black line demonstrates my daily route to go to SDE4 from home. Though climbing up the Clementi Woods is tiring in the hot weather, the flourishing greeneries and cute puppies that I come across never fail to refresh me.',
            image: 'ClementiWoods.jpg',
            location: {
                center: [103.76765, 1.29544],
                zoom: 16.67,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: '4route',
                   opacity: 1
               },
               {
                    layer: '1Residents',
                    opacity: 0
                },
                {
                   layer: 'Heatmap',
                   opacity: 0
               },
               {
                   layer: '3HDBClementi',
                   opacity: 0
               },
               {
                   layer: '3PrivateClementi',
                   opacity: 0
               }
               
            ],
            onChapterExit: [
                {
                    layer: '4route',
                    opacity: 1
                },
                {
                    layer: '1Residents',
                    opacity: 0
                },
                {
                   layer: 'Heatmap',
                   opacity: 0
               },
               {
                   layer: '3HDBClementi',
                   opacity: 0
               },
               {
                   layer: '3PrivateClementi',
                   opacity: 0
               }              
            ]
        }
    ]
};
