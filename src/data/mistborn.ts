import { Installment, Chapter, Character, DataBundle, Map, Series, MediaType } from "character-journey-map/models";
import map from '../assets/mistborn1.webp';

const mapData: Map = {
  image: map,
  dimensions: [1000,1333],
  source: 'https://www.deviantart.com/mapeffects/art/Mistborn-The-Final-Empire-Map-Brandon-Sanderson-907741466'
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

const theHeroOfAgesChapterList: Chapter[] = [
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
  { chapter: 13, part: 1 },
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
  { chapter: 45, part: 4 },
  { chapter: 46, part: 4 },
  { chapter: 47, part: 4 },
  { chapter: 48, part: 4 },
  { chapter: 49, part: 4 },
  { chapter: 50, part: 4 },
  { chapter: 51, part: 4 },
  { chapter: 52, part: 4 },
  { chapter: 53, part: 4 },
  { chapter: 54, part: 4 },
  { chapter: 55, part: 4 },
  { chapter: 56, part: 4 },
  { chapter: 57, part: 4 },
  { chapter: 58, part: 4 },
  { chapter: 59, part: 5 },
  { chapter: 60, part: 5 },
  { chapter: 61, part: 5 },
  { chapter: 62, part: 5 },
  { chapter: 63, part: 5 },
  { chapter: 64, part: 5 },
  { chapter: 65, part: 5 },
  { chapter: 66, part: 5 },
  { chapter: 67, part: 5 },
  { chapter: 68, part: 5 },
  { chapter: 69, part: 5 },
  { chapter: 70, part: 5 },
  { chapter: 71, part: 5 },
  { chapter: 72, part: 5 },
  { chapter: 73, part: 5 },
  { chapter: 74, part: 5 },
  { chapter: 75, part: 5 },
  { chapter: 76, part: 6 },
  { chapter: 77, part: 5 },
  { chapter: 78, part: 5 },
  { chapter: 79, part: 5 },
  { chapter: 80, part: 5 },
  { chapter: 81, part: 5 },
  { chapter: 82, part: 5 },
  { altName: 'Epilogue', chapter: 82.1, part: 5 }
];

export const characters: Character[] =[
  {
    name: 'Vin',
    image: 'https://uploads.coppermind.net/thumb/The_Ascendant_Warrior.jpg/400px-The_Ascendant_Warrior.jpg',
    color: 'rgb(76,47,74)',
    wikiLink: 'Vin'
  },
  {
    name: 'Kelsier',
    image: 'https://uploads.coppermind.net/thumb/Cognitive_Shadow_Kelsier.jpg/400px-Cognitive_Shadow_Kelsier.jpg',
    color: 'rgb(119,162,119)',
    wikiLink: 'Kelsier'
  },
  {
    name: 'Elend',
    image: 'https://uploads.coppermind.net/thumb/Elend_Shuravf.jpg/400px-Elend_Shuravf.jpg',
    color: 'rgb(98,117,230)',
    wikiLink: 'Elend_Venture'
  },
  {
    name: 'Sazed',
    image: 'https://uploads.coppermind.net/thumb/Sazed_portrait.jpg/442px-Sazed_portrait.jpg',
    color: 'rgb(195,156,76)',
    wikiLink: 'Sazed'
  },
  {
    name: 'Spook',
    image: 'https://uploads.coppermind.net/thumb/Spook_by_clarinking.jpg/500px-Spook_by_clarinking.jpg',
    color: 'rgb(82,90,138)',
    wikiLink: 'Spook'
  },
  {
    name: 'Marsh',
    image: 'https://uploads.coppermind.net/thumb/Marsh_Kelsier.jpg/400px-Marsh_Kelsier.jpg',
    color: 'rgb(58,68,75)',
    wikiLink: 'Marsh'
  },
  {
    name: 'TenSoon',
    image: 'https://uploads.coppermind.net/thumb/Tensoon_portrait_paint.png/1024px-Tensoon_portrait_paint.png',
    color: 'rgb(198,99,36)',
    wikiLink: 'TenSoon',
    firstAppearance: { 2: wellOfAscensionChapterList[46] }
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

export const books: Installment[] = [
  {
    title: 'The Final Empire',
    type: MediaType.Book,
    image: 'https://uploads.coppermind.net/thumb/Mistborn_Final_Empire.jpg/400px-Mistborn_Final_Empire.jpg',
    chapters: theFinalEmpireChapterList
  },
  {
    title: 'The Well of Ascension',
    type: MediaType.Book,
    image: 'https://uploads.coppermind.net/thumb/Mistborn_2.jpg/400px-Mistborn_2.jpg',
    chapters: wellOfAscensionChapterList
  },
  {
    title: 'The Hero of Ages',
    type: MediaType.Book,
    image: 'https://uploads.coppermind.net/thumb/The_Hero_of_Ages_Cover.jpeg/400px-The_Hero_of_Ages_Cover.jpeg',
    chapters: theHeroOfAgesChapterList
  }
];

export const seriesData: Series = {
  title: 'Mistborn (Era 1)',
  stub: 'mistborn',
  image: 'https://uploads.coppermind.net/MB_Era_1_BR_full_cover_art.jpg',
  planetName: 'Scadrial',
  description: `The first Mistborn trilogy chronicles the efforts of a secret group of Allomancers who attempt to overthrow a dystopian empire and establish themselves in a world covered by ash.`,
  color: 'rgb(153,64,105)',
  backgroundColor: 'rgb(206,200,187)',
  installments: books,
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
      image: 'https://uploads.coppermind.net/Final_Empire_Opening_Scene.jpg',
      appearances: {
        1: [
          theFinalEmpireChapterList[0]
        ]
      },
      description: `Tresting plantation is located in the Central Dominance north-west of Luthadel.`,
      wikiLink: 'Tresting_plantation',
      confirmed: true
    },
    {
      title: 'Luthadel',
      coordinates: [532, 780.5],
      type: 'city',
      image: 'https://uploads.coppermind.net/thumb/Luthadel_by_Ricky_Ho.jpg/1024px-Luthadel_by_Ricky_Ho.jpg',
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
          51, 52, 53, 54, 56, 57, 58, 59,
        ].map(i => (wellOfAscensionChapterList[i])),
        3: [
          18, 42, 52, 72, 73, 76, 77, 79
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `Luthadel is the capital city of the Final Empire on Scadrial.`,
      wikiLink: 'Luthadel',
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
      wikiLink: 'Fellise',
      confirmed: true
    },
    {
      title: 'Arguois caverns',
      coordinates: [619.5, 792.5],
      type: 'point of interest',
      image: 'https://uploads.coppermind.net/Yeden%27s_Army_by_Kelly_Mai.jpg',
      appearances: {
        1: [
          21, 25
        ].map(i => (theFinalEmpireChapterList[i]))
      },
      description: `The Arguois caverns is a natural system of caves in the Central Dominance of the Final Empire on Scadrial. They can be found north of Luthadel, placed between the city and the Pits of Hathsin.`,
      wikiLink: 'Arguois_caverns',
      confirmed: false
    },
    {
      title: 'Pits of Hathsin',
      coordinates: [609, 750],
      type: 'point of interest',
      image: 'https://uploads.coppermind.net/Atium_geode.jpg',
      appearances: {
        1: [
          32
        ].map(i => (theFinalEmpireChapterList[i])),
        3: [
          18, 22, 79, 80, 81, 82
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `The Pits of Hathsin are a system of caves near Luthadel on Scadrial at the time of the Final Empire in which atium geodes grow.`,
      wikiLink: 'Pits_of_Hathsin',
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
      wikiLink: 'Siege_of_Luthadel',
      confirmed: true
    },
    {
      title: 'Battle of Luthadel',
      coordinates: [534, 790],
      type: 'battle',
      image: 'https://uploads.coppermind.net/Sazed_vs._Koloss_by_Lara_Sarmiento.jpg',
      appearances: {
        2: [
          50, 51, 52, 53, 54
        ].map(i => (wellOfAscensionChapterList[i]))
      },
      description: `The Battle of Luthadel is a major event in the history of Scadrial. It is a battle following the Siege of Luthadel.`,
      wikiLink: 'Battle_of_Luthadel',
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
      wikiLink: 'Conventical_of_Seran',
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
      wikiLink: 'Urbene',
      confirmed: true
    },
    {
      title: 'Vetitan',
      coordinates: [423.5, 702.5],
      type: 'town',
      appearances: {
        3: [
          1, 3, 5
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `With a population of around seven thousand, Vetitan is fairly large for a farming community. Most houses are one-story buildings, but it is more urban than a plantation. The presence of nearby ore deposits make it both a farming and mining town.`,
      wikiLink: 'Vetitan',
      confirmed: true
    },
    {
      title: 'Tathingdwen',
      coordinates: [813, 824.5],
      type: 'city',
      appearances: {
        3: [
          0
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `Tathingdwen is the capital of the Terris Dominance of the Final Empire on Scadrial.`,
      wikiLink: 'Tathingdwen',
      confirmed: true
    },
    {
      title: 'Kandra Homeland',
      coordinates: [601.5, 786],
      type: 'city',
      image: 'https://uploads.coppermind.net/TenSoon%27s_Judgement_by_Marc_Mestre.jpg',
      appearances: {
        3: [
          2, 7, 9, 11, 20, 24, 33, 66, 68,
          71, 75, 76, 78, 79, 80, 81,
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `The Homeland was the secret, underground nation of the kandra on Scadrial during the Final Empire.`,
      wikiLink: 'Kandra_Homeland',
      confirmed: false
    },
    {
      title: 'Lekal City',
      coordinates: [446, 641.5],
      type: 'town',
      appearances: {
        3: [
          4
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `Lekal City was a country estate, with a manor house but lacked a true palace.`,
      wikiLink: 'Lekal_City',
      confirmed: true
    },
    {
      title: 'Urteau',
      coordinates: [612.5, 952],
      type: 'city',
      image: 'https://uploads.coppermind.net/Urteau.jpg',
      appearances: {
        3: [
          14, 16, 19, 23, 26, 29, 31, 35, 38,
          41, 46, 49, 53, 56, 58, 59, 62, 64,
          66, 73, 83
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `Located northeast of Luthadel near the Kalling Ashmount, Urteau was the largest city in the Northern Dominance and was the hereditary home of House Venture.`,
      wikiLink: 'Urteau',
      confirmed: true
    },
    {
      title: 'Fadrex City',
      coordinates: [557.5, 500],
      type: 'city',
      image: 'https://uploads.coppermind.net/Fadrex_City.jpg',
      appearances: {
        3: [
          25, 27, 28, 30, 32, 36, 37, 40, 43,
          44, 45, 47, 48, 50, 51, 54, 55, 57,
          60, 61, 63, 65, 67, 70, 73, 74
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `Fadrex City is a major trade hub in the Western Dominance of the Final Empire, several month's journey from Urteau. It is located near Chardees.`,
      wikiLink: 'Fadrex_City',
      confirmed: true
    },
    {
      title: 'Mount Tyrian',
      coordinates: [552.5, 680],
      type: 'point of interest',
      image: 'https://uploads.coppermind.net/Ashmount.png',
      appearances: {
        3: [
          34
        ].map(i => (theHeroOfAgesChapterList[i]))
      },
      description: `Mount Tyrian was one of the seven Ashmounts in the Final Empire. These enormous volcanoes continuously emit ash which clouds the skies.`,
      wikiLink: 'Ashmounts',
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Vin],
      installment: books[0],
      chapter: theFinalEmpireChapterList[8],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
      chapter: theFinalEmpireChapterList[8],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[0],
      chapter: theFinalEmpireChapterList[8],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[0],
      chapter: theFinalEmpireChapterList[10],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
      chapter: theFinalEmpireChapterList[10],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[0],
      chapter: theFinalEmpireChapterList[10],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[0],
      chapter: theFinalEmpireChapterList[15],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[0],
      chapter: theFinalEmpireChapterList[16],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
      chapter: theFinalEmpireChapterList[16],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[0],
      chapter: theFinalEmpireChapterList[18],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
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
      installment: books[0],
      chapter: theFinalEmpireChapterList[20],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[0],
      chapter: theFinalEmpireChapterList[20],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
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
      installment: books[0],
      chapter: theFinalEmpireChapterList[23],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
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
      installment: books[0],
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
      installment: books[0],
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
      installment: books[0],
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
      installment: books[0],
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
      installment: books[0],
      chapter: theFinalEmpireChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
      chapter: theFinalEmpireChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[0],
      chapter: theFinalEmpireChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [533.5, 759.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[0],
      chapter: theFinalEmpireChapterList[30],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[0],
      chapter: theFinalEmpireChapterList[30],
      confirmed: true,
      coordinates: [
        [533.5, 759.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kelsier],
      installment: books[0],
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
      installment: books[0],
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
      installment: books[1],
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
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[1],
      chapter: wellOfAscensionChapterList[6],
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
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[1],
      chapter: wellOfAscensionChapterList[8],
      confirmed: true,
      coordinates: [
        [413, 890.5],
        [404, 907.5],
        [393, 920.5],
        [378, 927.5],
        [355.5, 934],
        [338.5, 943],
        [327, 952]
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[1],
      chapter: wellOfAscensionChapterList[8],
      confirmed: true,
      coordinates: [
        [413, 890.5],
        [404, 907.5],
        [393, 920.5],
        [378, 927.5],
        [355.5, 934],
        [338.5, 943],
        [327, 952]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[1],
      chapter: wellOfAscensionChapterList[11],
      confirmed: true,
      coordinates: [
        [327, 952],
        [311, 969.5],
        [301, 988],
        [292.5, 1014.5],
        [288, 1033.5]
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[1],
      chapter: wellOfAscensionChapterList[11],
      confirmed: true,
      coordinates: [
        [327, 952],
        [311, 969.5],
        [301, 988],
        [292.5, 1014.5],
        [288, 1033.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[1],
      chapter: wellOfAscensionChapterList[14],
      confirmed: true,
      coordinates: [
        [288, 1033.5],
        [322.5, 998.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[1],
      chapter: wellOfAscensionChapterList[18],
      confirmed: true,
      coordinates: [
        [322.5, 998.5],
        [423.5, 887],
        [472.5, 835.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[1],
      chapter: wellOfAscensionChapterList[21],
      confirmed: true,
      coordinates: [
        [472.5, 835.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[1],
      chapter: wellOfAscensionChapterList[25],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [534, 790]
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[1],
      chapter: wellOfAscensionChapterList[25],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [534, 790]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[1],
      chapter: wellOfAscensionChapterList[26],
      confirmed: true,
      coordinates: [
        [534, 790],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[1],
      chapter: wellOfAscensionChapterList[26],
      confirmed: true,
      coordinates: [
        [534, 790],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[1],
      chapter: wellOfAscensionChapterList[48],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [560.5, 770.5],
        [578, 760.5],
        [591.5, 739],
        [601, 728.5],
        [617, 727],
        [630.5, 734.5],
        [649.5, 738],
        [672.5, 747]
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[1],
      chapter: wellOfAscensionChapterList[48],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [560.5, 770.5],
        [578, 760.5],
        [591.5, 739],
        [601, 728.5],
        [617, 727],
        [630.5, 734.5],
        [649.5, 738],
        [672.5, 747]
      ]
    },
    {
      character: characters[CharacterIndex.Spook],
      installment: books[1],
      chapter: wellOfAscensionChapterList[48],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [560.5, 770.5],
        [578, 760.5],
        [591.5, 739],
        [601, 728.5],
        [617, 727],
        [630.5, 734.5],
        [649.5, 738],
        [672.5, 747]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[1],
      chapter: wellOfAscensionChapterList[51],
      confirmed: true,
      coordinates: [
        [672.5, 747],
        [649.5, 738],
        [630.5, 734.5],
        [617, 727],
        [601, 728.5],
        [591.5, 739],
        [578, 760.5],
        [560.5, 770.5],
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[1],
      chapter: wellOfAscensionChapterList[52],
      confirmed: true,
      coordinates: [
        [560.5, 770.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[1],
      chapter: wellOfAscensionChapterList[55],
      confirmed: true,
      coordinates: [
        [672.5, 747],
        [649.5, 738],
        [630.5, 734.5],
        [617, 727],
        [601, 728.5],
        [591.5, 739],
        [578, 760.5],
      ]
    },
    {
      character: characters[CharacterIndex.Spook],
      installment: books[1],
      chapter: wellOfAscensionChapterList[55],
      confirmed: true,
      coordinates: [
        [672.5, 747],
        [649.5, 738],
        [630.5, 734.5],
        [617, 727],
        [601, 728.5],
        [591.5, 739],
        [578, 760.5],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[1],
      chapter: wellOfAscensionChapterList[56],
      confirmed: true,
      coordinates: [
        [578, 760.5],
        [560.5, 770.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Spook],
      installment: books[1],
      chapter: wellOfAscensionChapterList[56],
      confirmed: true,
      coordinates: [
        [578, 760.5],
        [560.5, 770.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[1],
      chapter: wellOfAscensionChapterList[59],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [507, 810],
        [485.5, 827],
        [461.5, 830.5],
        [437.5, 840.5],
        [423.5, 861],
        [413, 890.5],
        [404, 907.5],
        [393, 920.5],
        [378, 927.5],
        [355.5, 934],
        [338.5, 943],
        [327, 952],
        [311, 969.5],
        [301, 988],
        [292.5, 1014.5],
        [288, 1033.5]
      ]
    },
    // hero of ages paths
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[1],
      confirmed: true,
      coordinates: [
        [448, 721],
        [423.5, 702.5],
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[3],
      confirmed: true,
      coordinates: [
        [448, 721],
        [423.5, 702.5],
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[6],
      confirmed: false,
      coordinates: [
        [813, 824.5],
        [799.5, 819.5],
        [790, 815.5],
        [781.5, 817],
        [777, 806.5],
        [759.5, 807]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[8],
      confirmed: true,
      coordinates: [
        [423.5, 702.5],
        [448.5, 714],
        [458, 712.5],
        [470.5, 703.5]
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[8],
      confirmed: true,
      coordinates: [
        [423.5, 702.5],
        [448.5, 714],
        [458, 712.5],
        [470.5, 703.5]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[10],
      confirmed: true,
      coordinates: [
        [446, 641.5],
        [441.5, 647.5],
        [447.5, 657],
        [451, 670],
        [456.5, 684],
        [470.5, 703.5]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[15],
      confirmed: true,
      coordinates: [
        [470.5, 703.5],
        [474.5, 688],
        [476, 667],
        [478.5, 655],
        [486, 637],
        [490, 626],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[15],
      confirmed: true,
      coordinates: [
        [470.5, 703.5],
        [474.5, 688],
        [476, 667],
        [478.5, 655],
        [486, 637],
        [490, 626],
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[18],
      confirmed: true,
      coordinates: [
        [470.5, 703.5],
        [478, 717],
        [482, 736.5],
        [493.5, 752.5],
        [503, 764.5],
        [512, 772.5],
        [525.5, 776],
        [532, 780.5],
        [565.5, 770],
        [579, 760],
        [597, 746],
        [609, 750]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[21],
      confirmed: true,
      coordinates: [
        [490, 626],
        [494, 607],
        [498.5, 597.5],
        [506, 590],
        [512, 585],
        [516, 574.5],
        [519.5, 563.5],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[21],
      confirmed: true,
      coordinates: [
        [490, 626],
        [494, 607],
        [498.5, 597.5],
        [506, 590],
        [512, 585],
        [516, 574.5],
        [519.5, 563.5],
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[25],
      confirmed: true,
      coordinates: [
        [519.5, 563.5],
        [524.5, 550],
        [528, 537],
        [535, 521],
        [540.5, 515],
        [549, 507],
        [557.5, 500],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[25],
      confirmed: true,
      coordinates: [
        [519.5, 563.5],
        [524.5, 550],
        [528, 537],
        [535, 521],
        [540.5, 515],
        [549, 507],
        [557.5, 500],
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[29],
      confirmed: true,
      coordinates: [
        [532, 780], // Luthadel
        [541, 785.5],
        [548.5, 798.5],
        [570.5, 875],
        [583, 883],
        [587.5, 890],
        [592.5, 898],
        [595.5, 902],
        [598.5, 918],
        [599, 930.5],
        [600.5, 945.5],
        [604, 952.5],
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[34],
      confirmed: false,
      coordinates: [
        [759.5, 807],
        [744, 798],
        [729, 780],
        [719, 762.5],
        [712.5, 748],
        [692, 743.5],
        [685.5, 736],
        [671, 719],
        [658, 703],
        [638.5, 686.5],
        [613.5, 672.5],
        [600, 672],
        [588, 680],
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[39],
      confirmed: true,
      coordinates: [
        [601.5, 786],
        [589.5, 789],
        [579, 792.5],
        [566.5, 790.5],
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[42],
      confirmed: false,
      coordinates: [
        [588, 680],
        [589, 698.5],
        [586.5, 722],
        [579, 741],
        [566.5, 755],
        [547, 762.5],
        [536.5, 767.5],
        [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[52],
      confirmed: true,
      coordinates: [
        [566.5, 790.5],
        [557, 784],
        [551, 783],
        [542.5, 783.5],
        [532, 780.5],
        [532, 780], // Luthadel
        [541, 785.5],
        [548.5, 798.5],
        [570.5, 875],
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[59],
      confirmed: true,
      coordinates: [
        [570.5, 875],
        [583, 883],
        [587.5, 890],
        [592.5, 898],
        [595.5, 902],
        [598.5, 918],
        [599, 930.5],
        [600.5, 945.5],
        [604, 952.5],
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[63],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [517, 756.5],
        [509, 719],
        [505, 690],
        [505.5, 665],
        [516, 620],
        [528, 576],
        [547, 527],
        [557.5, 500]
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[66],
      confirmed: true,
      coordinates: [
        [604, 952.5],
        [609.5, 934.5],
        [607, 914],
        [606, 887.5],
        [605, 865.5],
        [604, 835.5],
        [605.5, 819],
        [606, 807],
        [605.5, 795.5],
        [601.5, 786]
      ]
    },
    {
      character: characters[CharacterIndex.Sazed],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[66],
      confirmed: true,
      coordinates: [
        [604, 952.5],
        [609.5, 934.5],
        [607, 914],
        [606, 887.5],
        [605, 865.5],
        [604, 835.5],
        [605.5, 819],
        [606, 807],
        [605.5, 795.5],
        [601.5, 786]
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[69],
      confirmed: true,
      coordinates: [
        [557.5, 500],
        [547, 527],
        [528, 576],
        [516, 620],
        [505.5, 665],
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[71],
      confirmed: true,
      coordinates: [
        [601.5, 786],
        [606, 727],
        [606, 711.5],
        [607, 691],
        [615.5, 658],
        [619.5, 635],
        [620, 618.5],
        [612, 605.5],
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[72],
      confirmed: true,
      coordinates: [
        [505.5, 665],
        [505, 690],
        [509, 719],
        [517, 756.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[72],
      confirmed: true,
      coordinates: [
        [557.5, 500],
        [547, 527],
        [528, 576],
        [516, 620],
        [505.5, 665],
        [505, 690],
        [509, 719],
        [517, 756.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[73],
      confirmed: true,
      coordinates: [
        [612, 605.5],
        [617.5, 626],
        [614, 645.5],
        [603.5, 668],
        [596.5, 689.5],
        [591, 718],
        // [583.5, 736.5],
        // [574, 749.5],
        // [565.5, 758],
        // [553.5, 762.5],
        // [538.5, 766],
        // [532, 780.5]
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[74],
      confirmed: true,
      coordinates: [
        [557.5, 500],
        [547, 527],
        [528, 576],
        // [516, 620],
        // [505.5, 665],
        // [505, 690],
        // [509, 719],
        // [517, 756.5],
        // [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[76],
      confirmed: true,
      coordinates: [
        [528, 576],
        [516, 620],
        [505.5, 665],
        [505, 690],
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[77],
      confirmed: true,
      coordinates: [
        [505, 690],
        [509, 719],
        [517, 756.5],
        [532, 780.5],
      ]
    },
    {
      character: characters[CharacterIndex.TenSoon],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[78],
      confirmed: true,
      coordinates: [
        [591, 718],
        [590.5, 741],
        [595.5, 767],
        [601.5, 786]
      ]
    },
    {
      character: characters[CharacterIndex.Vin],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[79],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [565.5, 770],
        [579, 760],
        [597, 746],
        [609, 750]
      ]
    },
    {
      character: characters[CharacterIndex.Elend],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[79],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [565.5, 770],
        [579, 760],
        [597, 746],
        [609, 750]
      ]
    },
    {
      character: characters[CharacterIndex.Marsh],
      installment: books[2],
      chapter: theHeroOfAgesChapterList[81],
      confirmed: true,
      coordinates: [
        [532, 780.5],
        [565.5, 770],
        [579, 760],
        [597, 746],
        [609, 750]
      ]
    },
  ]
};