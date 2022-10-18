import { Book, Chapter, Character, DataBundle, Series } from "../models";

enum CharacterIndex {
  'Vin' = 0,
  'Kelsier' = 1
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
  }
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
  { chapter: 28, part: 2 },
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
  { altName: 'Interlude 7', chapter: 51.1, part: 3 },
  { altName: 'Interlude 8', chapter: 51.2, part: 3 },
  { altName: 'Interlude 9', chapter: 51.3, part: 3 },
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
  color: 'rgb(194,94,73)',
  backgroundColor: 'rgb(1,15,42)',
  books: books,
  characters: characters
};

export const MISTBORN_ERA1_DATA: DataBundle = {
  ...seriesData,
  markers: [
    {
      title: 'Luthadel',
      coordinates: [513, 1363.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Luthadel_by_Ricky_Ho.jpg/1024px-Luthadel_by_Ricky_Ho.jpg',
      appearances: {
        1: [
          theFinalEmpireChapterList[0]
        ]
      },
      description: `Luthadel is the capital city of the Final Empire on Scadrial.`,
      coppermindLink: 'Luthadel',
      confirmed: true
    }
  ],
  paths: [
    {
      character: characters[CharacterIndex.Vin],
      book: books[0],
      chapter: theFinalEmpireChapterList[0],
      confirmed: false,
      coordinates: [
        [0, 0],
        [0, 0]
      ]
    }
  ]
};