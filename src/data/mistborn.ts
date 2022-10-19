import { Book, Chapter, Character, DataBundle, Map, Series } from "../models";
import map from '../assets/mistborn1.webp';

const mapData: Map = {
  image: map,
  dimensions: [1000,1333]
};

enum CharacterIndex {
  'Vin' = 0,
  'Kelsier' = 1,
  'Elend' = 2,
  'Sazed' = 3,
  'Spook' = 4,
  'Marsh' = 5
}

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
  
];

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
  { altName: 'Prologue', chapter: 38.1, part: 5 }
];

export const books: Book[] = [
  {
    title: 'The Final Empire',
    image: 'https://coppermind.net/w/images/thumb/Mistborn_Final_Empire.jpg/400px-Mistborn_Final_Empire.jpg',
    chapters: theFinalEmpireChapterList
  },
  {
    title: 'The Well of Ascension',
    image: 'https://coppermind.net/w/images/thumb/Mistborn_2.jpg/400px-Mistborn_2.jpg',
    chapters: theFinalEmpireChapterList
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
          1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 23, 24
        ].map(i => (theFinalEmpireChapterList[i]))
      },
      description: `Luthadel is the capital city of the Final Empire on Scadrial.`,
      coppermindLink: 'Luthadel',
      confirmed: true
    },
    {
      title: 'Fellise',
      coordinates: [533.5, 759.5],
      type: 'town',
      appearances: {
        1: [
          8, 9, 16, 17, 18, 19, 20, 22
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
          21
        ].map(i => (theFinalEmpireChapterList[i]))
      },
      description: `The Arguois caverns is a natural system of caves in the Central Dominance of the Final Empire on Scadrial. They can be found north of Luthadel, placed between the city and the Pits of Hathsin.`,
      coppermindLink: 'Arguois_caverns',
      confirmed: false
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
  ]
};