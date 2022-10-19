import { Book, Chapter, Character, DataBundle, Map, Series } from "../models";
import map from '../assets/mistborn1.webp';

const mapData: Map = {
  image: map,
  dimensions: [1000,1333]
};

const theFinalEmpireChapterList: Chapter[] = [
  { altName: 'Prologue', chapter: 0, part: 0 },
  { chapter: 1, part: 1 },
  { chapter: 2, part: 1 },
  { chapter: 3, part: 1 },
  { chapter: 4, part: 1 },
  { chapter: 5, part: 1 },
  { chapter: 6, part: 1 },
  { chapter: 7, part: 1 },
  { chapter: 8, part: 1 },
  { chapter: 9, part: 2 },
  { chapter: 10, part: 2 },
  { chapter: 11, part: 2 },
  { chapter: 12, part: 2 },
  { chapter: 13, part: 2 },
  { chapter: 14, part: 2 },
  { chapter: 15, part: 2 },
  { chapter: 16, part: 3 },
  { chapter: 17, part: 3 },
  { chapter: 18, part: 3 },
  { chapter: 19, part: 3 },
  { chapter: 20, part: 3 },
  { chapter: 21, part: 3 },
  { chapter: 22, part: 3 },
  { chapter: 23, part: 3 },
  { chapter: 24, part: 3 },
  { chapter: 25, part: 3 },
  { chapter: 26, part: 4 },
  { chapter: 27, part: 4 },
  { chapter: 28, part: 4 },
  { chapter: 29, part: 4 },
  { chapter: 30, part: 4 },
  { chapter: 31, part: 4 },
  { chapter: 32, part: 4 },
  { chapter: 33, part: 4 },
  { chapter: 34, part: 4 },
  { chapter: 35, part: 5 },
  { chapter: 36, part: 5 },
  { chapter: 37, part: 5 },
  { chapter: 38, part: 5 },
  { altName: 'Epilogue', chapter: 38.1, part: 5 }
];

const wellOfAscensionChapterList: Chapter[] = [
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
  { chapter: 22, part: 2 },
  { chapter: 23, part: 2 },
  { chapter: 24, part: 2 },
  { chapter: 25, part: 2 },
  { chapter: 26, part: 2 },
  { chapter: 27, part: 2 },
  { chapter: 28, part: 3 },
  { chapter: 29, part: 3 },
  { chapter: 30, part: 3 },
  { chapter: 31, part: 3 },
  { chapter: 32, part: 3 },
  { chapter: 33, part: 3 },
  { chapter: 34, part: 3 },
  { chapter: 35, part: 3 },
  { chapter: 36, part: 3 },
  { chapter: 37, part: 3 },
  { chapter: 38, part: 3 },
  { chapter: 39, part: 4 },
  { chapter: 40, part: 4 },
  { chapter: 41, part: 4 },
  { chapter: 42, part: 4 },
  { chapter: 43, part: 4 },
  { chapter: 44, part: 4 },
  { chapter: 45, part: 4 },
  { chapter: 46, part: 4 },
  { chapter: 47, part: 4 },
  { chapter: 48, part: 4 },
  { chapter: 49, part: 5 },
  { chapter: 50, part: 5 },
  { chapter: 51, part: 5 },
  { chapter: 52, part: 5 },
  { chapter: 53, part: 5 },
  { chapter: 54, part: 5 },
  { chapter: 55, part: 5 },
  { chapter: 56, part: 6 },
  { chapter: 57, part: 6 },
  { chapter: 58, part: 6 },
  { chapter: 59, part: 6 },
  { altName: 'Epilogue', chapter: 59.1, part: 6 }
];

export const characters: Character[] =[
  {
    name: 'Vin',
    image: 'https://coppermind.net/w/images/thumb/The_Ascendant_Warrior.jpg/400px-The_Ascendant_Warrior.jpg',
    color: 'rgb(76,47,74)',
    coppermindLink: 'Vin'
  },
  {
    name: 'Kelsier',
    image: 'https://coppermind.net/w/images/thumb/Cognitive_Shadow_Kelsier.jpg/400px-Cognitive_Shadow_Kelsier.jpg',
    color: 'rgb(119,162,119)',
    coppermindLink: 'Kelsier'
  },
  {
    name: 'Elend',
    image: 'https://coppermind.net/w/images/thumb/Elend_Shuravf.jpg/400px-Elend_Shuravf.jpg',
    color: 'rgb(98,117,230)',
    coppermindLink: 'Elend_Venture'
  },
  {
    name: 'Sazed',
    image: 'https://coppermind.net/w/images/thumb/Sazed_portrait.jpg/442px-Sazed_portrait.jpg',
    color: 'rgb(195,156,76)',
    coppermindLink: 'Sazed'
  },
  {
    name: 'Spook',
    image: 'https://coppermind.net/w/images/thumb/Spook_by_clarinking.jpg/500px-Spook_by_clarinking.jpg',
    color: 'rgb(82,90,138)',
    coppermindLink: 'Spook'
  },
  {
    name: 'Marsh',
    image: 'https://coppermind.net/w/images/thumb/Marsh_by_eyeronis.png/400px-Marsh_by_eyeronis.png',
    color: 'rgb(58,68,75)',
    coppermindLink: 'Marsh'
  },
  {
    name: 'TenSoon',
    image: 'https://coppermind.net/w/images/thumb/Marsh_by_eyeronis.png/400px-Marsh_by_eyeronis.png',
    color: 'rgb(58,68,75)',
    coppermindLink: 'TenSoon',
    firstAppearance: { 3: theFinalEmpireChapterList[20] }
  },
];

enum CharacterIndex {
  'Vin' = 0,
  'Kelsier' = 1,
  'Elend' = 2,
  'Sazed' = 3,
  'Spook' = 4,
  'Marsh' = 5,
  'TenSoon' = 6
}

export const books: Book[] = [
  {
    title: 'The Final Empire',
    image: 'https://coppermind.net/w/images/thumb/Mistborn_Final_Empire.jpg/400px-Mistborn_Final_Empire.jpg',
    chapters: theFinalEmpireChapterList
  },
  {
    title: 'The Well of Ascension',
    image: 'https://coppermind.net/w/images/thumb/Mistborn_2.jpg/400px-Mistborn_2.jpg',
    chapters: wellOfAscensionChapterList
  },
  {
    title: 'The Hero of Ages',
    image: 'https://coppermind.net/w/images/thumb/The_Hero_of_Ages_Cover.jpeg/400px-The_Hero_of_Ages_Cover.jpeg',
    chapters: theFinalEmpireChapterList
  }
];

export const seriesData: Series = {
  title: 'Mistborn (Era 1)',
  stub: 'mistborn',
  image: 'https://coppermind.net/w/images/MB_Era_1_BR_full_cover_art.jpg',
  color: 'rgb(153,64,105)',
  backgroundColor: 'rgb(206,200,187)',
  books: books,
  characters: characters
};

export const MISTBORN_ERA1_DATA: DataBundle = {
  ...seriesData,
  map: mapData,
  markers: [
    {
      title: 'Tresting',
      coordinates: [597.5, 718.5],
      type: 'town',
      image: 'https://coppermind.net/w/images/Final_Empire_Opening_Scene.jpg',
      appearances: {
        1: [
          theFinalEmpireChapterList[0]
        ]
      },
      description: `Tresting plantation is located in the Central Dominance north-west of Luthadel.`,
      coppermindLink: 'Tresting_plantation',
      confirmed: true
    },
    {
      title: 'Luthadel',
      coordinates: [532, 780.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Luthadel_by_Ricky_Ho.jpg/1024px-Luthadel_by_Ricky_Ho.jpg',
      appearances: {
        1: [
          1, 2, 3, 4, 5, 6, 7, 8, 10,
          11, 12, 13, 14, 15, 16, 18, 19,
          23, 24, 25, 26, 27, 28, 30, 31,
          32, 33, 34, 35, 36, 37, 38, 39
        ].map(i => (theFinalEmpireChapterList[i])),
        2: [
          0, 1, 2, 4, 5, 7, 9, 10,
          12, 13, 15, 16, 17, 19, 20,
          21, 22, 23, 24, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36, 37, 39, 40,
          42, 43, 44, 45, 46, 47, 48, 49, 50,
          51, 52, 53, 54, 56, 57, 58, 59
        ].map(i => (wellOfAscensionChapterList[i]))
      },
      description: `Luthadel is the capital city of the Final Empire on Scadrial.`,
      coppermindLink: 'Luthadel',
      confirmed: true
    },
    {
      title: 'Siege of Luthadel',
      coordinates: [534, 790],
      type: 'event',
      appearances: {
        2: [
          0, 2, 4, 5, 7, 9, 10, 12,
          13, 15, 16, 17, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
          31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
          41, 42, 43, 44, 45, 46, 47, 48, 49
        ].map(i => (wellOfAscensionChapterList[i]))
      },
      description: `The armies of Straff Venture, Ashweather Cett, and the Koloss army of Jastes Lekal besieged Luthadel, King Elend Venture's throne.`,
      coppermindLink: 'Siege_of_Luthadel',
      confirmed: true
    },
    {
      title: 'Battle of Luthadel',
      coordinates: [534, 790],
      type: 'battle',
      image: 'https://coppermind.net/w/images/Sazed_vs._Koloss_by_Lara_Sarmiento.jpg',
      appearances: {
        2: [
          50, 51, 52, 53, 54
        ].map(i => (wellOfAscensionChapterList[i]))
      },
      description: `The Battle of Luthadel is a major event in the history of Scadrial. It is a battle following the Siege of Luthadel.`,
      coppermindLink: 'Battle_of_Luthadel',
      confirmed: true
    },
    {
      title: 'Fellise',
      coordinates: [533.5, 759.5],
      type: 'town',
      appearances: {
        1: [
          8, 9, 16, 17, 18, 19, 20, 22, 29
        ].map(i => (theFinalEmpireChapterList[i]))
      },
      description: `Fellise was a small, suburban town in the Central Dominance, relatively close to Luthadel. It was a prosperous city with a reputation for being less crowded, cleaner, and less strict in enforcing the imperial laws than the capital.`,
      coppermindLink: 'Fellise',
      confirmed: true
    },
    {
      title: 'Arguois caverns',
      coordinates: [619.5, 792.5],
      type: 'point of interest',
      image: 'https://coppermind.net/w/images/Yeden%27s_Army_by_Kelly_Mai.jpg',
      appearances: {
        1: [
          21, 25
        ].map(i => (theFinalEmpireChapterList[i]))
      },
      description: `The Arguois caverns is a natural system of caves in the Central Dominance of the Final Empire on Scadrial. They can be found north of Luthadel, placed between the city and the Pits of Hathsin.`,
      coppermindLink: 'Arguois_caverns',
      confirmed: false
    },
    {
      title: 'Pits of Hathsin',
      coordinates: [609, 750],
      type: 'point of interest',
      image: 'https://coppermind.net/w/images/Atium_geode.jpg',
      appearances: {
        1: [
          32
        ].map(i => (theFinalEmpireChapterList[i]))
      },
      description: `The Pits of Hathsin are a system of caves near Luthadel on Scadrial at the time of the Final Empire in which atium geodes grow.`,
      coppermindLink: 'Pits_of_Hathsin',
      confirmed: true
    },
    {
      title: 'Conventical of Seran',
      coordinates: [288, 1033.5],
      type: 'city',
      appearances: {
        2: [
          11, 59
        ].map(i => (wellOfAscensionChapterList[i]))
      },
      description: `The Conventical of Seran is a fortress of the Canton of Inquisition on Scadrial. It is where new Inquisitors were made, and Kwaan's inscription is kept there.`,
      coppermindLink: 'Conventical_of_Seran',
      confirmed: true
    },
    {
      title: 'Urbene',
      coordinates: [322.5, 998.5],
      type: 'town',
      appearances: {
        2: [
          14
        ].map(i => (wellOfAscensionChapterList[i]))
      },
      description: `The village consisted of ten large wooden hovels built in a loose circle with a well in the center, and a nobleman's manor a little farther up the valley. The skaa of Urbene were herdsmen. The village itself lay in a quiet hollow amid the rising landscape. It was described as picturesque.`,
      coppermindLink: 'Urbene',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[8],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[8],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      book: books[0],
      chapter: theFinalEmpireChapterList[8],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[10],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[10],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      book: books[0],
      chapter: theFinalEmpireChapterList[10],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      book: books[0],
      chapter: theFinalEmpireChapterList[15],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[16],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[16],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[18],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[19],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[20],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      book: books[0],
      chapter: theFinalEmpireChapterList[20],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[21],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
        [539, 783.5],
        [552.5, 778.5],
        [568, 788],
        [575.5, 788.5],
        [579.5, 790],
        [588.5, 784],
        [594.5, 778.5],
        [597.5, 774],
        [600, 774],
        [604, 781],
        [613, 783.5],
        [619.5, 792.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[23],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[23],
      confirmed: true,
      coordinates: [
        [619.5, 792.5],
        [613, 783.5],
        [604, 781],
        [600, 774],
        [597.5, 774],
        [594.5, 778.5],
        [588.5, 784],
        [579.5, 790],
        [575.5, 788.5],
        [568, 788],
        [552.5, 778.5],
        [539, 783.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[25],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
        [539, 783.5],
        [552.5, 778.5],
        [568, 788],
        [575.5, 788.5],
        [579.5, 790],
        [588.5, 784],
        [594.5, 778.5],
        [597.5, 774],
        [600, 774],
        [604, 781],
        [613, 783.5],
        [619.5, 792.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[25],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
        [539, 783.5],
        [552.5, 778.5],
        [568, 788],
        [575.5, 788.5],
        [579.5, 790],
        [588.5, 784],
        [594.5, 778.5],
        [597.5, 774],
        [600, 774],
        [604, 781],
        [613, 783.5],
        [619.5, 792.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[26],
      confirmed: true,
      coordinates: [
        [619.5, 792.5],
        [613, 783.5],
        [604, 781],
        [600, 774],
        [597.5, 774],
        [594.5, 778.5],
        [588.5, 784],
        [579.5, 790],
        [575.5, 788.5],
        [568, 788],
        [552.5, 778.5],
        [539, 783.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[26],
      confirmed: true,
      coordinates: [
        [619.5, 792.5],
        [613, 783.5],
        [604, 781],
        [600, 774],
        [597.5, 774],
        [594.5, 778.5],
        [588.5, 784],
        [579.5, 790],
        [575.5, 788.5],
        [568, 788],
        [552.5, 778.5],
        [539, 783.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      book: books[0],
      chapter: theFinalEmpireChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[30],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      book: books[0],
      chapter: theFinalEmpireChapterList[30],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[32],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [555, 775],
        [574, 769.5],
        [585, 761],
        [597.5, 752.5],
        [609, 750]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      book: books[0],
      chapter: theFinalEmpireChapterList[33],
      confirmed: true,
      coordinates: [
        [609, 750],
        [597.5, 752.5],
        [585, 761],
        [574, 769.5],
        [555, 775],
        [532, 780.5],
      ]
    },
    // well of ascension paths
    {
      character: characters[CharacterIndex.Sazed],
      book: books[1],
      chapter: wellOfAscensionChapterList[3],
      confirmed: false,
      coordinates: [
        [532, 780.5],
        [507, 810],
        [485.5, 827],
        [461.5, 830.5],
        [437.5, 840.5],
        [423.5, 861],
        [413, 890.5]
      ]
    },
  ]
};