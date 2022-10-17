import { Book, Chapter, Character, DataBundle, Series } from "../models";

export const characters: Character[] =[
  {
    name: 'Szeth',
    image: 'https://coppermind.net/w/images/Szeth.jpg',
    color: 'rgb(255,255,255)',
    coppermindLink: 'Szeth'
  },
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
  }
];

const theWayOfKingsChapterList: Chapter[] = [
  {
    chapter: 0,
    altName: 'Prelude',
    part: 1
  },
  {
    chapter: 0.1,
    altName: 'Prologue',
    part: 1
  },
  {
    chapter: 1,
    part: 1
  }
];

export const books: Book[] = [
  {
    title: 'The Way of Kings',
    image: 'https://coppermind.net/w/images/TWoK_US_Cover_art.jpg',
    chapters: theWayOfKingsChapterList
  },
  {
    title: 'Words of Radiance',
    image: 'https://coppermind.net/w/images/TWoK_US_Cover_art.jpg',
    chapters: theWayOfKingsChapterList
  }
];

export const seriesData: Series = {
  title: 'The Stormlight Archive',
  stub: 'stormlight',
  image: 'https://coppermind.net/w/images/TWoK_US_Cover_art.jpg',
  color: 'rgb(194,94,73)',
  backgroundColor: 'rgb(1,15,42)',
  books: books
};

export const STORMLIGHT_DATA: DataBundle = {
  ...seriesData,
  markers: [
    {
      title: 'Kholinar',
      coordinates: [0.0, 0.0],
      type: 'city',
      image: 'https://coppermind.net/w/images/Kholinar.jpg',
      chapters: [
        theWayOfKingsChapterList[0]
      ],
      description: `Kholinar is the capital city of the Kholin princedom in Alethkar, Roshar. It's symmetrical in shape, built around enormous stone formations known as the windblades for their unmistakable shape.`,
      coppermindLink: 'Kholinar',
      confirmed: true
    }
  ],
  paths: [
    {
      character: characters[0],
      book: books[0],
      chapter: theWayOfKingsChapterList[0],
      confirmed: true,
      coordinates: [
        [0.0, 0.0],
        [100.0, 100.0],
        [200.0, 100.0],
        [300.0, 300.0],
        [2000.0, 2000.0]
      ]
    }
  ]
};