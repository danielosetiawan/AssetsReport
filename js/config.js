var config = {
    style: 'mapbox://styles/ayamashita24/cki9g6s3y4i1319rwxek2kyoq',
    accessToken: 'pk.eyJ1IjoiYXlhbWFzaGl0YTI0IiwiYSI6ImNraTlvd3N1NTBhNHMydW14c3V2Y242NGkifQ.Ej7QL5RXwMlo9fAAtqwZUg',
    showMarkers: false,
    theme: 'light',
    alignment: 'center',
    title: 'The COVID Pandemic through the Lens of Vulnerable Youth in NYC',
    subtitle: 'Was NYC prepared for this unprecedented social disaster?',
    byline: 'Final Project for 11.154/11.454 Big Data, Visualization, and Society / By Naroa Coretti Sanchez, Ayaka Yamashita, Hyun-Chae Chad Loh',
    //footer: '',
    chapters: [
        {
            id: 'preview',
            title: 'Elements of Youth Wellness; EAT, PLAY, and LEARN',
              //image: './path/to/image/source.png',
            description: 'When the stay-at-home order and school closures went into effect, youth in NYC were subjected to the triple burden of not being able to access school meals, school playgrounds, and in-person classes. By analyzing census and NYC data, we display where the city may need to focus more in the future. In the next few maps, we will zoom in into two very different neighborhoods: The Upper East Side and Brownsville.',
            location: {
              center: { lon: -73.96, lat: 40.74 },
              zoom: 9.88,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
          id: 'upper_east_side_preview',
          title: 'The Upper East Side',
          image: 'image/UpperEastSide.PNG',
          description: 'This neighborhood is dominated by wealthy White Anglo-Saxon Protestant families. The area contains the greatest concentration of individual wealth in Manhattan. As of 2011, the median household income for the Upper East Side was $131,492.',
          location: {
            center: { lon: -73.956555, lat: 40.773565 },
            zoom: 12.85,
            pitch: 53.00,
            bearing: 28.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
          id: 'brownsville_preview',
          title: 'Brownsville',
          image: 'image/Brownsville.PNG',
          description: 'Consequently, the same systematic racism mechanisms that have kept the Upper East Side wealthy, Brownsville - a predominantly black neighborhood - has been the most impoverished neighborhood in NYC for several years. We wonder: Is this pandemic making these communities even more vulnerable than before?',
          location: {
            center: { lon:  -73.9065, lat: 40.6564 },
            zoom: 12.85,
            pitch: 53.00,
            bearing: 8.00
          },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0.8
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },

        {
            id: 'food_access',
            title: 'The 1st element: Food Access',
            description: 'Lighter color means less food access. Though the city has been doing an excellent job to combat food insecurity, the light-colored areas need improvements to avoid vulnerable youth becoming even more vulnerable during the pandemic.',
            location: {
              center: { lon: -73.96, lat: 40.74 },
              zoom: 10.06,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0.8
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0.8
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'openspace_access',
            title: 'The 2nd element: Access to Playground',
            //image: './path/to/image/source.png',
            description: 'Covid-19 deprived access to school playgrounds from youth, and parks became the alternative for recreational space. The green color indicates the park access index that accounts for the accessibility to parks and park budgets, meaning that the residents in greener neighborhoods have a better recreational infrastructure.',
            location: {
              center: { lon: -73.96, lat: 40.74  },
              zoom: 10.06,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0.8
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0.8
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'internet_access',
            title: 'The 3rd element: Access to the Internet',
            //image: './path/to/image/source.png',
            description: 'Internet became an essential infrastructure for online education during the pandemic. Less color places need more internet access.',
            location: {
              center: { lon: -73.96, lat: 40.74  },
              zoom: 10.06,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0.8
                 },
                {
                     layer: 'svi',
                     opacity: 0
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.8
                 }
            ]
        },
        {
            id: 'svi',
            title: 'How does Social Vulnerability relate to the three elements of Youth Wellness?',
            //image: './path/to/image/source.png',
            description: 'The map shows the place with high social vulnerability with a bolder color.',
            location: {
              center: { lon: -73.96, lat: 40.74  },
              zoom: 10.06,
              pitch: 0.00,
              bearing: 0.00
            },
          onChapterEnter: [
                 {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.8
                 }
            ],
            onChapterExit: [

               {
                     layer: 'eat',
                     opacity: 0
                 },
                 {
                     layer: 'play',
                     opacity: 0
                 },
                {
                     layer: 'learn',
                     opacity: 0
                 },
                {
                     layer: 'svi',
                     opacity: 0.8
                 }
            ]
        },

    ]
};
