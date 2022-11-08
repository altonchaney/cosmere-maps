import { Book, Chapter, Character, DataBundle, Map, Series } from "../models";
import map from '../assets/mistborn2.png';

const mapData: Map = {
  image: map,
  dimensions: [1200,795],
  source: 'https://coppermind.net/wiki/File:Elendel_Basin.png'
};

const theAlloyOfLawChapterList: Chapter[] = [
  { altName: 'Prologue', chapter: 0 },
  { chapter: 1 },
  { chapter: 2 },
  { chapter: 3 },
  { chapter: 4 },
  { chapter: 5 },
  { chapter: 6 },
  { chapter: 7 },
  { chapter: 8 },
  { chapter: 9 },
  { chapter: 10 },
  { chapter: 11 },
  { chapter: 12 },
  { chapter: 13 },
  { chapter: 14 },
  { chapter: 15 },
  { chapter: 16 },
  { chapter: 17 },
  { chapter: 18 },
  { chapter: 19 },
  { chapter: 20 },
  { altName: 'Epilogue', chapter: 20.1 }
];

const shadowsOfSelfChapterList: Chapter[] = [
  { altName: 'Prologue', chapter: 0, part: 0 },
  { chapter: 1, part: 1 },
  { chapter: 2, part: 1 },
  { chapter: 3, part: 1 },
  { chapter: 4, part: 1 },
  { chapter: 5, part: 2 },
  { chapter: 6, part: 2 },
  { chapter: 7, part: 2 },
  { chapter: 8, part: 2 },
  { chapter: 9, part: 2 },
  { chapter: 10, part: 2 },
  { chapter: 11, part: 2 },
  { chapter: 12, part: 2 },
  { chapter: 13, part: 2 },
  { chapter: 14, part: 2 },
  { chapter: 15, part: 2 },
  { chapter: 16, part: 2 },
  { chapter: 17, part: 2 },
  { chapter: 18, part: 2 },
  { chapter: 19, part: 2 },
  { chapter: 20, part: 2 },
  { chapter: 21, part: 2 },
  { chapter: 22, part: 3 },
  { chapter: 23, part: 3 },
  { chapter: 24, part: 3 },
  { chapter: 25, part: 3 },
  { chapter: 26, part: 3 },
  { altName: 'Epilogue', chapter: 26.1, part: 3 }
];

const theBandsOfMourningChapterList: Chapter[] = [
  { altName: 'Prologue', chapter: 0, part: 0 },
  { chapter: 1, part: 1 },
  { chapter: 2, part: 1 },
  { chapter: 3, part: 1 },
  { chapter: 4, part: 1 },
  { chapter: 5, part: 2 },
  { chapter: 6, part: 2 },
  { chapter: 7, part: 2 },
  { chapter: 8, part: 2 },
  { chapter: 9, part: 2 },
  { chapter: 10, part: 2 },
  { chapter: 11, part: 2 },
  { chapter: 12, part: 2 },
  { chapter: 13, part: 2 },
  { chapter: 14, part: 2 },
  { chapter: 15, part: 2 },
  { chapter: 16, part: 2 },
  { chapter: 17, part: 3 },
  { chapter: 18, part: 3 },
  { chapter: 19, part: 3 },
  { chapter: 20, part: 3 },
  { chapter: 21, part: 3 },
  { chapter: 22, part: 3 },
  { chapter: 23, part: 3 },
  { chapter: 24, part: 3 },
  { chapter: 25, part: 3 },
  { chapter: 26, part: 3 },
  { chapter: 27, part: 3 },
  { chapter: 28, part: 3 },
  { chapter: 29, part: 3 },
  { chapter: 30, part: 3 },
  { chapter: 31, part: 3 },
  { altName: 'Epilogue', chapter: 31.1, part: 3 }
];

export const characters: Character[] =[
  {
    name: 'Wax',
    image: 'https://coppermind.net/w/images/thumb/Waxillium_Ladrian.jpg/400px-Waxillium_Ladrian.jpg',
    color: 'rgb(248,203,86)',
    coppermindLink: 'Waxillium_Ladrian'
  },
  {
    name: 'Wayne',
    image: 'https://coppermind.net/w/images/thumb/Wayne_hatted_smile.jpg/400px-Wayne_hatted_smile.jpg',
    color: 'rgb(105,48,38)',
    coppermindLink: 'Wayne'
  },
  {
    name: 'Marasi',
    image: 'https://coppermind.net/w/images/thumb/Marasi_Colms_by_Dan_Watson.jpg/400px-Marasi_Colms_by_Dan_Watson.jpg',
    color: 'rgb(68,119,139)',
    coppermindLink: 'Marasi_Colms'
  },
  // {
  //   name: 'Marasi',
  //   image: 'https://coppermind.net/w/images/thumb/Marasi_Colms_by_Dan_Watson.jpg/400px-Marasi_Colms_by_Dan_Watson.jpg',
  //   color: 'rgb(68,119,139)',
  //   coppermindLink: 'Marasi_Colms',
  //   firstAppearance: { 2: wellOfAscensionChapterList[46] }
  // },
];

enum CharacterIndex {
  'Wax' = 0,
  'Wayne' = 1,
  'Marasi' = 2
}

export const books: Book[] = [
  {
    title: 'The Alloy of Law',
    image: 'https://coppermind.net/w/images/thumb/The_Alloy_of_Law_Cover.jpg/400px-The_Alloy_of_Law_Cover.jpg',
    chapters: theAlloyOfLawChapterList
  },
  {
    title: 'Shadows of Self',
    image: 'https://coppermind.net/w/images/thumb/Shadows_of_Self_US_Hardcover.jpg/400px-Shadows_of_Self_US_Hardcover.jpg',
    chapters: shadowsOfSelfChapterList
  },
  {
    title: 'The Bands of Mourning',
    image: 'https://coppermind.net/w/images/thumb/Bands_of_Mourning_US_Hardcover.jpg/400px-Bands_of_Mourning_US_Hardcover.jpg',
    chapters: theBandsOfMourningChapterList
  }
];

export const seriesData: Series = {
  title: 'Mistborn (Era 2)',
  stub: 'mistborn2',
  image: 'https://coppermind.net/w/images/MB_Era_2_BR_cover_art.jpg',
  planetName: 'Scadrial',
  description: `Set about 300 years after Era 1, the Wax and Wayne series is about the exploits of Waxillium Ladrian, a "wild-west Deputy" forced to move into the big city, and starts investigating kidnappings and robberies.`,
  color: 'rgb(85,105,73)',
  backgroundColor: 'rgb(255,255,255)',
  books: books,
  characters: characters
};

export const MISTBORN_ERA2_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Feltrel',
      coordinates: [899, 141],
      type: 'town',
      appearances: {
        1: [
          0
        ].map(i => (theAlloyOfLawChapterList[i])),
      },
      description: `Feltrel is a ghost town in the Roughs of Scadrial. It is built in a dry area of the Roughs, with a large amount of red clay for soil and few plants other than weeds.`,
      coppermindLink: 'Feltrel',
      confirmed: true
    },
    {
      title: 'Elendel',
      coordinates: [405, 273],
      type: 'city',
      image: 'https://coppermind.net/w/images/Elendel.jpg',
      appearances: {
        1: [
          1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 14, 15, 
          17, 18, 19, 20, 21
        ].map(i => (theAlloyOfLawChapterList[i])),
        2: [
          1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23,
          24, 25, 26, 27
        ].map(i => (shadowsOfSelfChapterList[i])),
        3: [
          0, 1, 2, 3, 4, 31, 32
        ].map(i => (theBandsOfMourningChapterList[i])),
      },
      description: `Elendel is the largest city in the Elendel Basin on Scadrial and in the cosmere at large. Named by The Lord Mistborn, Spook, for Elend Venture, it is located at the mouth of the Irongate river where it flows into Hammondar Bay. Though no accurate estimate exists for population size, there are certainly millions of residents, and estimates top out at around five million.`,
      coppermindLink: 'Elendel',
      confirmed: true
    },
    {
      title: 'Weathering',
      coordinates: [966.5, 228.5],
      type: 'town',
      appearances: {
        2: [
          0
        ].map(i => (shadowsOfSelfChapterList[i])),
      },
      description: `Located on a flat grassland plain, Weathering is made up of a cluster of dusty houses and shops with unpaved dirt roads. It is the westernmost stop of the railway line in the Northern Roughs.`,
      coppermindLink: 'Weathering',
      confirmed: true
    },
    {
      title: 'Doriel',
      coordinates: [301, 357.5],
      type: 'city',
      appearances: {
        3: [
          5
        ].map(i => (theBandsOfMourningChapterList[i])),
      },
      description: `Doriel is a city in the Elendel Basin. It is southeast of Elendel. Doriel is the only city in the Elendel Basin outside of Elendel itself that has a railway interchange.`,
      coppermindLink: 'Doriel_(city)',
      confirmed: true
    },
    {
      title: 'Ironstand',
      coordinates: [219, 428.5],
      type: 'town',
      appearances: {
        3: [
          9
        ].map(i => (theBandsOfMourningChapterList[i])),
      },
      description: `Ironstand is a town in Elendel Basin on the train line between Elendel and New Seran.`,
      coppermindLink: 'Ironstand',
      confirmed: false
    },
    {
      title: 'New Seran',
      coordinates: [99, 581],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/New_Seran_by_Lyraina.jpeg/1920px-New_Seran_by_Lyraina.jpeg',
      appearances: {
        3: [
          10, 11, 12, 13, 14, 15, 16
        ].map(i => (theBandsOfMourningChapterList[i])),
      },
      description: `New Seran is a city in the Elendel Basin. It is located on the very southern edge of the basin, on the rail line through the Seran Range to the Southern Roughs.`,
      coppermindLink: 'New_Seran',
      confirmed: true
    },
    {
      title: 'Dulsing',
      coordinates: [148, 620],
      type: 'town',
      appearances: {
        3: [
          17, 18, 19, 20
        ].map(i => (theBandsOfMourningChapterList[i])),
      },
      description: `Dulsing is a remote farming village, isolated from everything. The village is at the foot of the Seran Range and is close enough to high ground that it contains a small waterfall which has been fitted with a turbine to provide electricity.`,
      coppermindLink: 'New_Seran',
      confirmed: true
    },
    {
      title: `Sovereign's temple`,
      coordinates: [131.5, 637.5],
      type: 'point of interest',
      image: 'https://coppermind.net/w/images/thumb/Bands_of_Mourning_Mural_by_Shuravf.jpg/1024px-Bands_of_Mourning_Mural_by_Shuravf.jpg',
      appearances: {
        3: [
          23, 24, 25, 26, 27, 28, 29, 30
        ].map(i => (theBandsOfMourningChapterList[i])),
      },
      description: `The Sovereign's temple is a building in the Seran Range of Elendel Basin. It was built by the Sovereign and his priests to house the Bands of Mourning.`,
      coppermindLink: 'Sovereign%27s_temple',
      confirmed: false
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Wax],
      book: books[0],
      chapter: theAlloyOfLawChapterList[1],
      confirmed: true,
      coordinates: [
        [899, 141],
        [933, 175],
        [954, 202],
        [967, 228],
        [972, 249],
        [976, 275],
        [977, 302],
        [976, 337],
        [970, 371],
        [962, 396],
        [950, 416],
        [935, 435],
        [917, 448],
        [899, 454],
        [856, 435],
        [819, 413],
        [798, 399],
        [779, 390],
        [764, 386],
        [726, 381],
        [712, 378],
        [683, 367],
        [620, 339],
        [591, 327],
        [580, 320],
        [544, 304],
        [524, 296],
        [504, 288],
        [485, 282],
        [472, 280],
        [448, 280],
        [424, 279],
        [405, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[0],
      chapter: theAlloyOfLawChapterList[2],
      confirmed: false,
      coordinates: [
        [933, 175],
        [954, 202],
        [967, 228],
        [972, 249],
        [976, 275],
        [977, 302],
        [976, 337],
        [970, 371],
        [962, 396],
        [950, 416],
        [935, 435],
        [917, 448],
        [899, 454],
        [856, 435],
        [819, 413],
        [798, 399],
        [779, 390],
        [764, 386],
        [726, 381],
        [712, 378],
        [683, 367],
        [620, 339],
        [591, 327],
        [580, 320],
        [544, 304],
        [524, 296],
        [504, 288],
        [485, 282],
        [472, 280],
        [448, 280],
        [424, 279],
        [405, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[0],
      chapter: theAlloyOfLawChapterList[12],
      confirmed: true,
      coordinates: [
        [405, 273],
        [390, 280.5]
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[0],
      chapter: theAlloyOfLawChapterList[12],
      confirmed: true,
      coordinates: [
        [405, 273],
        [390, 280.5]
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[0],
      chapter: theAlloyOfLawChapterList[12],
      confirmed: true,
      coordinates: [
        [405, 273],
        [390, 280.5],
        // [379, 287]
      ],
    },

    {
      character: characters[CharacterIndex.Wax],
      book: books[0],
      chapter: theAlloyOfLawChapterList[13],
      confirmed: true,
      coordinates: [
        [390, 280.5],
        [379, 287],
        [405, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[0],
      chapter: theAlloyOfLawChapterList[13],
      confirmed: true,
      coordinates: [
        [390, 280.5],
        [379, 287],
        [405, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[0],
      chapter: theAlloyOfLawChapterList[13],
      confirmed: true,
      coordinates: [
        [390, 280.5],
        [379, 287],
        [405, 273],
      ],
    },

    {
      character: characters[CharacterIndex.Wax],
      book: books[0],
      chapter: theAlloyOfLawChapterList[16],
      confirmed: true,
      coordinates: [
        [405, 273],
        [389.5, 277.5],
        [379.5, 280],
        [371.5, 280.5],
        [363.5, 279.5],
        [357, 276],
        [351.5, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[0],
      chapter: theAlloyOfLawChapterList[16],
      confirmed: true,
      coordinates: [
        [405, 273],
        [389.5, 277.5],
        [379.5, 280],
        [371.5, 280.5],
        [363.5, 279.5],
        [357, 276],
        [351.5, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[0],
      chapter: theAlloyOfLawChapterList[16],
      confirmed: true,
      coordinates: [
        [405, 273],
        [389.5, 277.5],
        [379.5, 280],
        [371.5, 280.5],
        [363.5, 279.5],
        [357, 276],
        [351.5, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[0],
      chapter: theAlloyOfLawChapterList[16],
      confirmed: true,
      coordinates: [
        [351.5, 273],
        [341.5, 275.5],
        [330, 271]
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[0],
      chapter: theAlloyOfLawChapterList[16],
      confirmed: true,
      coordinates: [
        [351.5, 273],
        [341.5, 275.5],
        [330, 271]
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[0],
      chapter: theAlloyOfLawChapterList[16],
      confirmed: true,
      coordinates: [
        [351.5, 273],
        [341.5, 275.5],
        [330, 271]
      ],
    },
    
    {
      character: characters[CharacterIndex.Wax],
      book: books[0],
      chapter: theAlloyOfLawChapterList[17],
      confirmed: true,
      coordinates: [
        [330, 271],
        [340, 270],
        [335, 269],
        [347, 268.5],
        [351.5, 273],
        [360.5, 273],
        [367.5, 276],
        [373, 275],
        [382, 275],
        [390.5, 272.5],
        [395, 272.5],
      ],
    },

    {
      character: characters[CharacterIndex.Wayne],
      book: books[0],
      chapter: theAlloyOfLawChapterList[17],
      confirmed: true,
      coordinates: [
        [330, 271],
        [341.5, 275.5],
        [351.5, 273],
        [357, 276],
        [363.5, 279.5],
        [371.5, 280.5],
        [379.5, 280],
        [389.5, 277.5],
        [405, 273],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[0],
      chapter: theAlloyOfLawChapterList[17],
      confirmed: true,
      coordinates: [
        [330, 271],
        [341.5, 275.5],
        [351.5, 273],
        [357, 276],
        [363.5, 279.5],
        [371.5, 280.5],
        [379.5, 280],
        [389.5, 277.5],
        [405, 273],
      ],
    },
    
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[5],
      confirmed: true,
      coordinates: [
        [405, 273],
        [381.5, 286.5],
        [373.5, 294.5],
        [363, 302],
        [350.5, 310.5],
        [341, 320],
        [324, 338],
        [306, 355],
        [301, 357.5],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[5],
      confirmed: true,
      coordinates: [
        [405, 273],
        [381.5, 286.5],
        [373.5, 294.5],
        [363, 302],
        [350.5, 310.5],
        [341, 320],
        [324, 338],
        [306, 355],
        [301, 357.5],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[5],
      confirmed: true,
      coordinates: [
        [405, 273],
        [381.5, 286.5],
        [373.5, 294.5],
        [363, 302],
        [350.5, 310.5],
        [341, 320],
        [324, 338],
        [306, 355],
        [301, 357.5],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[6],
      confirmed: true,
      coordinates: [
        [301, 357.5],
        [281, 372],
        [269.5, 384],
        [256.5, 396],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[6],
      confirmed: true,
      coordinates: [
        [301, 357.5],
        [281, 372],
        [269.5, 384],
        [256.5, 396],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[6],
      confirmed: true,
      coordinates: [
        [301, 357.5],
        [281, 372],
        [269.5, 384],
        [256.5, 396],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[7],
      confirmed: true,
      coordinates: [
        [256.5, 396],
        [244, 406],
        [227.5, 419],
        [228.5, 417.5],
        // [219, 428.5],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[7],
      confirmed: true,
      coordinates: [
        [256.5, 396],
        [244, 406],
        [227.5, 419],
        [228.5, 417.5],
        [219, 428.5]
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[7],
      confirmed: true,
      coordinates: [
        [256.5, 396],
        [244, 406],
        [227.5, 419],
        [228.5, 417.5],
        [219, 428.5]
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[8],
      confirmed: true,
      coordinates: [
        [229.5, 422.5],
        [228, 427],
        [225, 431.5],
        [223, 433],
        [219, 428.5]
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[10],
      confirmed: true,
      coordinates: [
        [219, 428.5],
        [207.5, 467],
        [203, 476],
        [192.5, 485],
        [188, 496.5],
        [180.5, 505.5],
        [166.5, 516],
        [152, 529],
        [127.5, 553],
        [110, 575],
        [104.5, 579.5],
        [99, 581],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[10],
      confirmed: true,
      coordinates: [
        [219, 428.5],
        [207.5, 467],
        [203, 476],
        [192.5, 485],
        [188, 496.5],
        [180.5, 505.5],
        [166.5, 516],
        [152, 529],
        [127.5, 553],
        [110, 575],
        [104.5, 579.5],
        [99, 581],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[10],
      confirmed: true,
      coordinates: [
        [219, 428.5],
        [207.5, 467],
        [203, 476],
        [192.5, 485],
        [188, 496.5],
        [180.5, 505.5],
        [166.5, 516],
        [152, 529],
        [127.5, 553],
        [110, 575],
        [104.5, 579.5],
        [99, 581],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[17],
      confirmed: true,
      coordinates: [
        [99, 581],
        [102, 591.5],
        [112, 598],
        [122.5, 601.5],
        [132.5, 607.5],
        [148, 620],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[17],
      confirmed: true,
      coordinates: [
        [99, 581],
        [102, 591.5],
        [112, 598],
        [122.5, 601.5],
        [132.5, 607.5],
        [148, 620],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[17],
      confirmed: true,
      coordinates: [
        [99, 581],
        [102, 591.5],
        [112, 598],
        [122.5, 601.5],
        [132.5, 607.5],
        [148, 620],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[22],
      confirmed: true,
      coordinates: [
        [148, 620],
        [140, 628],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[22],
      confirmed: true,
      coordinates: [
        [148, 620],
        [140, 628],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[22],
      confirmed: true,
      coordinates: [
        [148, 620],
        [140, 628],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[23],
      confirmed: true,
      coordinates: [
        [140, 628],
        [131.5, 637.5],
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[23],
      confirmed: true,
      coordinates: [
        [140, 628],
        [131.5, 637.5],
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[23],
      confirmed: true,
      coordinates: [
        [140, 628],
        [131.5, 637.5],
      ],
    },
    {
      character: characters[CharacterIndex.Wax],
      book: books[2],
      chapter: theBandsOfMourningChapterList[31],
      confirmed: true,
      coordinates: [
        [131.5, 637.5],
        [405, 273]
      ],
    },
    {
      character: characters[CharacterIndex.Wayne],
      book: books[2],
      chapter: theBandsOfMourningChapterList[31],
      confirmed: true,
      coordinates: [
        [131.5, 637.5],
        [405, 273]
      ],
    },
    {
      character: characters[CharacterIndex.Marasi],
      book: books[2],
      chapter: theBandsOfMourningChapterList[31],
      confirmed: true,
      coordinates: [
        [131.5, 637.5],
        [405, 273]
      ],
    },
  ]
};

