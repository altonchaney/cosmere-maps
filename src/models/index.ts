// DATA TYPES
export enum AvailableSeries {
  stormlight = 'stormlight'
};

export type Series = {
  title: string;
  stub: string;
  image: string;
  color: string;
  backgroundColor: string;
  books: Book[];
};

export type Book = {
  title: string;
  image: string;
  chapters: Chapter[];
};

export type Chapter = {
  chapter: number;
  altName?: string;
  part?: number;
};

export type Character = {
  name: string;
  image: string;
  color: string;
  coppermindLink?: string;
};

// MAP TYPES

export type Marker = {
  title: string;
  coordinates: L.LatLngTuple;
  type: 'region' | 'city' | 'town' | 'event' | 'battle' | 'point of interest';
  image?: string;
  chapters: Chapter[];
  description?: string;
  coppermindLink?: string;
  confirmed: boolean;
};

export type Path = {
  character: Character;
  book: Book;
  chapter: Chapter;
  confirmed: boolean;
  coordinates: L.LatLngTuple[];
};

export type DataBundle = Series & {
  markers: Marker[],
  paths: Path[]
}
