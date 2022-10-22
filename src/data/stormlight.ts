import { Book, Chapter, Character, DataBundle, Map, Series } from "../models";
import map from '../assets/stormlight.webp';

const mapData: Map = {
  image: map,
  dimensions: [1000,1720]
};

const theWayOfKingsChapterList: Chapter[] = [
  { altName: 'Prelude', chapter: 0, part: 0 },
  { altName: 'Prologue', chapter: 0.1, part: 0 },
  { chapter: 1, part: 1 }, // 2
  { chapter: 2, part: 1 },
  { chapter: 3, part: 1 },
  { chapter: 4, part: 1 },
  { chapter: 5, part: 1 },
  { chapter: 6, part: 1 },
  { chapter: 7, part: 1 },
  { chapter: 8, part: 1 },
  { chapter: 9, part: 1 },
  { chapter: 10, part: 1 },
  { chapter: 11, part: 1 },
  { altName: 'Interlude 1', chapter: 11.1, part: 1 },
  { altName: 'Interlude 2', chapter: 11.2, part: 1 },
  { altName: 'Interlude 3', chapter: 11.3, part: 1 },
  { chapter: 12, part: 2 }, // 16 (+4)
  { chapter: 13, part: 2 },
  { chapter: 14, part: 2 },
  { chapter: 15, part: 2 },
  { chapter: 16, part: 2 },
  { chapter: 17, part: 2 },
  { chapter: 18, part: 2 },
  { chapter: 19, part: 2 },
  { chapter: 20, part: 2 },
  { chapter: 21, part: 2 },
  { chapter: 22, part: 2 },
  { chapter: 23, part: 2 },
  { chapter: 24, part: 2 },
  { chapter: 25, part: 2 },
  { chapter: 26, part: 2 },
  { chapter: 27, part: 2 },
  { chapter: 28, part: 2 }, // 32
  { altName: 'Interlude 4', chapter: 28.1, part: 2 },
  { altName: 'Interlude 5', chapter: 28.2, part: 2 },
  { altName: 'Interlude 6', chapter: 28.3, part: 2 },
  { chapter: 29, part: 3 }, // 36 (+7)
  { chapter: 30, part: 3 },
  { chapter: 31, part: 3 },
  { chapter: 32, part: 3 },
  { chapter: 33, part: 3 },
  { chapter: 34, part: 3 },
  { chapter: 35, part: 3 },
  { chapter: 36, part: 3 },
  { chapter: 37, part: 3 },
  { chapter: 38, part: 3 },
  { chapter: 39, part: 3 },
  { chapter: 40, part: 3 },
  { chapter: 41, part: 3 },
  { chapter: 42, part: 3 },
  { chapter: 43, part: 3 },
  { chapter: 44, part: 3 },
  { chapter: 45, part: 3 },
  { chapter: 46, part: 3 },
  { chapter: 47, part: 3 },
  { chapter: 48, part: 3 },
  { chapter: 49, part: 3 },
  { chapter: 50, part: 3 },
  { chapter: 51, part: 3 }, // 58
  { altName: 'Interlude 7', chapter: 51.1, part: 3 },
  { altName: 'Interlude 8', chapter: 51.2, part: 3 },
  { altName: 'Interlude 9', chapter: 51.3, part: 3 },
  { chapter: 52, part: 4 }, // 62 (+10)
  { chapter: 53, part: 4 },
  { chapter: 54, part: 4 },
  { chapter: 55, part: 4 },
  { chapter: 56, part: 4 },
  { chapter: 57, part: 4 },
  { chapter: 58, part: 4 },
  { chapter: 59, part: 4 },
  { chapter: 60, part: 4 },
  { chapter: 61, part: 4 },
  { chapter: 62, part: 4 },
  { chapter: 63, part: 4 },
  { chapter: 64, part: 4 },
  { chapter: 65, part: 4 },
  { chapter: 66, part: 4 },
  { chapter: 67, part: 4 },
  { chapter: 68, part: 4 },
  { chapter: 69, part: 4 },
  { chapter: 70, part: 5 },
  { chapter: 71, part: 5 },
  { chapter: 72, part: 5 },
  { chapter: 73, part: 5 },
  { chapter: 74, part: 5 },
  { chapter: 75, part: 5 }, // 85
  { altName: 'Epilogue', chapter: 75.1, part: 6 },
];

const wordsOfRadianceChapterList: Chapter[] = [
  { altName: 'Prologue', chapter: 0, part: 0 },
  { chapter: 1, part: 1 },
  { chapter: 2, part: 1 },
  { chapter: 3, part: 1 },
  { chapter: 4, part: 1 },
  { chapter: 5, part: 1 },
  { chapter: 6, part: 1 },
  { chapter: 7, part: 1 },
  { chapter: 8, part: 1 },
  { chapter: 9, part: 1 },
  { chapter: 10, part: 1 },
  { chapter: 11, part: 1 },
  { chapter: 12, part: 1 },
  { altName: 'Interlude 1', chapter: 12.1, part: 1 },
  { altName: 'Interlude 2', chapter: 12.2, part: 1 },
  { altName: 'Interlude 3', chapter: 12.3, part: 1 },
  { altName: 'Interlude 4', chapter: 12.4, part: 1 },
  { chapter: 13, part: 2 },
  { chapter: 14, part: 2 },
  { chapter: 15, part: 2 },
  { chapter: 16, part: 2 },
  { chapter: 17, part: 2 },
  { chapter: 18, part: 2 },
  { chapter: 19, part: 2 },
  { chapter: 20, part: 2 },
  { chapter: 21, part: 2 },
  { chapter: 22, part: 2 },
  { chapter: 23, part: 2 },
  { chapter: 24, part: 2 },
  { chapter: 25, part: 2 },
  { chapter: 26, part: 2 },
  { chapter: 27, part: 2 },
  { chapter: 28, part: 2 },
  { chapter: 29, part: 2 },
  { chapter: 30, part: 2 },
  { chapter: 31, part: 2 },
  { chapter: 32, part: 2 },
  { chapter: 33, part: 2 },
  { chapter: 34, part: 2 },
  { altName: 'Interlude 5', chapter: 34.1, part: 2 },
  { altName: 'Interlude 6', chapter: 34.2, part: 2 },
  { altName: 'Interlude 7', chapter: 34.3, part: 2 },
  { altName: 'Interlude 8', chapter: 34.4, part: 2 },
  { chapter: 35, part: 3 },
  { chapter: 36, part: 3 },
  { chapter: 37, part: 3 },
  { chapter: 38, part: 3 },
  { chapter: 39, part: 3 },
  { chapter: 40, part: 3 },
  { chapter: 41, part: 3 },
  { chapter: 42, part: 3 },
  { chapter: 43, part: 3 },
  { chapter: 44, part: 3 },
  { chapter: 45, part: 3 },
  { chapter: 46, part: 3 },
  { chapter: 47, part: 3 },
  { chapter: 48, part: 3 },
  { chapter: 49, part: 3 },
  { chapter: 50, part: 3 },
  { chapter: 51, part: 3 },
  { chapter: 52, part: 4 },
  { chapter: 53, part: 4 },
  { chapter: 54, part: 4 },
  { chapter: 55, part: 4 },
  { chapter: 56, part: 4 },
  { chapter: 57, part: 4 },
  { chapter: 58, part: 4 },
  { chapter: 59, part: 4 },
  { chapter: 60, part: 4 },
  { chapter: 61, part: 4 },
  { chapter: 62, part: 4 },
  { chapter: 63, part: 4 },
  { chapter: 64, part: 4 },
  { chapter: 65, part: 4 },
  { chapter: 66, part: 4 },
  { chapter: 67, part: 4 },
  { chapter: 68, part: 4 },
  { chapter: 69, part: 4 },
  { chapter: 70, part: 5 },
  { chapter: 71, part: 5 },
  { chapter: 72, part: 5 },
  { chapter: 73, part: 5 },
  { chapter: 74, part: 5 },
  { chapter: 75, part: 5 },
];

export const characters: Character[] =[
  {
    name: 'Kaladin',
    image: 'https://coppermind.net/w/images/Kaladin_and_Syl.jpg',
    color: 'rgb(44,66,128)',
    coppermindLink: 'Kaladin'
  },
  {
    name: 'Shallan',
    image: 'https://coppermind.net/w/images/Shallan_in_the_Palanaeum.jpg',
    color: 'rgb(150,36,42)',
    coppermindLink: 'Shallan'
  },
  {
    name: 'Dalinar',
    image: 'https://coppermind.net/w/images/thumb/Dalinar.jpg/400px-Dalinar.jpg',
    color: 'rgb(44,66,128)',
    coppermindLink: 'Dalinar_Kholin',
    firstAppearance: { 1: theWayOfKingsChapterList[16] }
  },
  {
    name: 'Adolin',
    image: 'https://coppermind.net/w/images/thumb/Dalinar.jpg/400px-Dalinar.jpg',
    color: 'rgb(44,66,128)',
    coppermindLink: 'Adolin_Kholin',
    firstAppearance: { 1: theWayOfKingsChapterList[16] }
  },
  {
    name: 'Szeth',
    image: 'https://coppermind.net/w/images/Szeth.jpg',
    color: 'rgb(230,230,230)',
    coppermindLink: 'Szeth'
  },
];

enum CharacterIndex {
  'Kaladin' = 0,
  'Shallan' = 1,
  'Dalinar' = 2,
  'Adolin' = 3,
  'Szeth' = 4
};

export const books: Book[] = [
  {
    title: 'The Way of Kings',
    image: 'https://coppermind.net/w/images/thumb/TheWayOfKings.png/400px-TheWayOfKings.png',
    chapters: theWayOfKingsChapterList
  },
  {
    title: 'Words of Radiance',
    image: 'https://coppermind.net/w/images/thumb/Words_of_Radiance.jpg/400px-Words_of_Radiance.jpg',
    chapters: wordsOfRadianceChapterList
  }
];

export const seriesData: Series = {
  title: 'The Stormlight Archive',
  stub: 'stormlight',
  image: 'https://coppermind.net/w/images/TWoK_US_Cover_art.jpg',
  color: 'rgb(194,94,73)',
  backgroundColor: 'rgb(1,15,42)',
  books: books,
  characters: characters
};

export const STORMLIGHT_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Kholinar',
      coordinates: [513, 1363.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Kholinar.jpg',
      appearances: {
        1: [
          theWayOfKingsChapterList[1]
        ]
      },
      description: `Kholinar is the capital city of the Kholin princedom in Alethkar, Roshar. It's symmetrical in shape, built around enormous stone formations known as the windblades for their unmistakable shape.`,
      coppermindLink: 'Kholinar',
      confirmed: true
    },
    {
      title: `Amaram's Border Skirmish`,
      coordinates: [599.5, 1272],
      type: 'battle',
      appearances: {
        1: [
          theWayOfKingsChapterList[2]
        ]
      },
      description: `A border skirmish between Amaram's princedom and one of its neighboring princedoms. Kaladin participated in this particular battle.`,
      confirmed: false
    },
    {
      title: 'Kharbranth',
      coordinates: [235.5, 1006.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Kharbranth.jpg',
      appearances: {
        1: [
          theWayOfKingsChapterList[4],
          theWayOfKingsChapterList[6],
          theWayOfKingsChapterList[8],
          theWayOfKingsChapterList[9],
        ]
      },
      description: `Kharbranth, the City of Bells, is an independent city-state on Roshar, ruled by Queen Savrahalidem. It is one of the five Vorin nations and home to the Palanaeum, the largest library on Roshar. Kharbranth is known for the quality of its hospitals, and people come from all over the world to study medicine from Kharbranth's surgeons.`,
      confirmed: true
    },
    {
      title: 'Shattered Plains',
      coordinates: [259.5, 1429],
      type: 'point of interest',
      image: 'https://coppermind.net/w/images/Shattered_Plains_by_Noah_Bradley.jpg',
      appearances: {
        1: [
          7, 10, 12, 16, 17, 18, 19,
          21, 22, 23, 25, 26, 27, 28, 30,
          31, 32
        ].map(i => theWayOfKingsChapterList[i])
      },
      description: `The Shattered Plains are a region of Roshar located on the border of the Frostlands and Unclaimed Hills, in the former territory of the Silver Kingdom of Natanatan. They are named for their topography, consisting of a huge number of plateaus of various sizes surrounded on all sides by deep chasms.`,
      confirmed: true
    },
    {
      title: 'Hearthstone',
      coordinates: [628.5, 1351.5],
      type: 'town',
      image: 'https://coppermind.net/w/images/Watcher_at_the_Rim_by_Marie_Seeberger.jpg',
      appearances: {
        1: [
          11, 20, 24, 29
        ].map(i => theWayOfKingsChapterList[i])
      },
      description: `Hearthstone is a large but remote town near the eastern border of the Sadeas princedom in Alethkar. The town serves as a focal point for the various farming communities in the region.`,
      confirmed: true
    },
    {
      title: 'Fu Abra',
      coordinates: [488.0, 803.0],
      type: 'town',
      image: 'https://coppermind.net/w/images/Ishikk_Purelake_by_Connor_Chamberlain.jpg',
      appearances: {
        1: [
          theWayOfKingsChapterList[13]
        ]
      },
      description: `Fu Abra is a Purelaker village on Roshar. It is located somewhere on the Purelake and is the only village miles. A rare fish, known as a kolgril, can be found near the village.`,
      confirmed: false
    },
    {
      title: 'Davar Estate',
      coordinates: [553, 1099],
      type: 'town',
      image: 'https://coppermind.net/w/images/thumb/Davar_family_by_zoethatcher_art.jpg/600px-Davar_family_by_zoethatcher_art.jpg',
      appearances: {
        1: [
          theWayOfKingsChapterList[14]
        ]
      },
      description: `The ancestral home of House Davar, and is known for mining.`,
      confirmed: false
    },
    {
      title: 'Ironsway',
      coordinates: [433.5, 1032.5],
      type: 'town',
      appearances: {
        1: [
          theWayOfKingsChapterList[15]
        ]
      },
      description: `Ironsway features a town square, several hundred homes, and three taverns, making it one of the largest settlements in Bavland.`,
      confirmed: false
    },
    // {
    //   title: 'Bornwater',
    //   coordinates: [437.5, 1000],
    //   type: 'town',
    //   appearances: {
    //     1: [
    //       theWayOfKingsChapterList[15]
    //     ]
    //   },
    //   description: `It is the largest town in its immediate area, although it could still be considered a "backwater". Outside of the city, there are plains where wild horses run free.`,
    //   confirmed: false
    // },

    
  ],
  paths: [
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[0],
      chapter: theWayOfKingsChapterList[3],
      confirmed: false,
      coordinates: [
        [599.5, 1272],
        [573, 1319.5],
        [513, 1363.5],
        [398, 1337.5],
        [361, 1345]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[0],
      chapter: theWayOfKingsChapterList[4],
      confirmed: true,
      coordinates: [
        [208.5, 911],
        [226.5, 952],
        [247.5, 977.5],
        [235.5, 1006.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[0],
      chapter: theWayOfKingsChapterList[5],
      confirmed: true,
      coordinates: [
        [361, 1345],
        [330, 1351.5],
        [295.5, 1360],
        [271.5, 1372],
        [260, 1383.5],
        [255, 1392.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[0],
      chapter: theWayOfKingsChapterList[7],
      confirmed: true,
      coordinates: [
        [255, 1392.5],
        [254.5, 1407.5]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[0],
      chapter: theWayOfKingsChapterList[15],
      confirmed: false,
      coordinates: [
        [513, 1363.5],
        [543, 1318],
        [568, 1277],
        [586, 1240],
        [610, 1202],
        [611, 1176],
        [569, 1107],
        [529, 1086],
        [501, 1068],
        [471, 1052],
        [455, 1047],
        [433.5, 1032.5]
      ]
    },
  ]
};