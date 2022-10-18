import { Book, Chapter, Character, DataBundle, Series } from "../models";

enum CharacterIndex {
  'Kaladin' = 0,
  'Shallan' = 1,
  'Dalinar' = 2,
  'Szeth' = 3
}

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
    coppermindLink: 'Dalinar_Kholin'
  },
  {
    name: 'Szeth',
    image: 'https://coppermind.net/w/images/Szeth.jpg',
    color: 'rgb(230,230,230)',
    coppermindLink: 'Szeth'
  },
];

const theWayOfKingsChapterList: Chapter[] = [
  { altName: 'Prelude', chapter: 0, part: 1 },
  { altName: 'Prologue', chapter: 0.1, part: 1 },
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
  { altName: 'Interlude 1', chapter: 11.1, part: 1 },
  { altName: 'Interlude 2', chapter: 11.2, part: 1 },
  { altName: 'Interlude 3', chapter: 11.3, part: 1 },
  { chapter: 12, part: 2 },
  { chapter: 13, part: 2 },
  { chapter: 14, part: 2 },
];

export const books: Book[] = [
  {
    title: 'The Way of Kings',
    image: 'https://coppermind.net/w/images/thumb/TheWayOfKings.png/400px-TheWayOfKings.png',
    chapters: theWayOfKingsChapterList
  },
  {
    title: 'Words of Radiance',
    image: 'https://coppermind.net/w/images/thumb/Words_of_Radiance.jpg/400px-Words_of_Radiance.jpg',
    chapters: []
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
      coordinates: [513, 1363.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Kholinar.jpg',
      chapters: [
        theWayOfKingsChapterList[1]
      ],
      description: `Kholinar is the capital city of the Kholin princedom in Alethkar, Roshar. It's symmetrical in shape, built around enormous stone formations known as the windblades for their unmistakable shape.`,
      coppermindLink: 'Kholinar',
      confirmed: true
    },
    {
      title: `Amaram's Border Skirmish`,
      coordinates: [621, 1323],
      type: 'battle',
      chapters: [
        theWayOfKingsChapterList[2]
      ],
      description: `A border skirmish between Amaram's princedom and one of its neighboring princedoms. Kaladin participated in this particular battle.`,
      confirmed: false
    },
    {
      title: 'Kharbranth',
      coordinates: [235.5, 1006.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Kharbranth.jpg',
      chapters: [
        theWayOfKingsChapterList[4],
        theWayOfKingsChapterList[6],
        theWayOfKingsChapterList[8],
        theWayOfKingsChapterList[9],
      ],
      description: `Kharbranth, the City of Bells, is an independent city-state on Roshar, ruled by Queen Savrahalidem. It is one of the five Vorin nations and home to the Palanaeum, the largest library on Roshar. Kharbranth is known for the quality of its hospitals, and people come from all over the world to study medicine from Kharbranth's surgeons.`,
      confirmed: true
    },
    {
      title: 'Shattered Plains',
      coordinates: [259.5, 1429],
      type: 'point of interest',
      image: 'https://coppermind.net/w/images/Shattered_Plains_by_Noah_Bradley.jpg',
      chapters: [
        theWayOfKingsChapterList[7],
        theWayOfKingsChapterList[10],
        theWayOfKingsChapterList[12]
      ],
      description: `The Shattered Plains are a region of Roshar located on the border of the Frostlands and Unclaimed Hills, in the former territory of the Silver Kingdom of Natanatan.[1][2] They are named for their topography, consisting of a huge number of plateaus of various sizes surrounded on all sides by deep chasms.`,
      confirmed: true
    },
    {
      title: 'Hearthstone',
      coordinates: [628.5, 1351.5],
      type: 'town',
      image: 'https://coppermind.net/w/images/Watcher_at_the_Rim_by_Marie_Seeberger.jpg',
      chapters: [
        theWayOfKingsChapterList[11]
      ],
      description: `Hearthstone is a large but remote town near the eastern border of the Sadeas princedom in Alethkar. The town serves as a focal point for the various farming communities in the region.`,
      confirmed: true
    },
  ],
  paths: [
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[0],
      chapter: theWayOfKingsChapterList[3],
      confirmed: false,
      coordinates: [
        [621, 1323],
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
  ]
};