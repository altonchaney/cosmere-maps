import { Book, Chapter, Character, DataBundle, Map, Series } from "../models";
import physicalRealmMap from '../assets/stormlight.webp';
import cognitiveRealmMap from '../assets/shadesmar.webp';

const mapData: Map = {
  image: physicalRealmMap,
  altImage: cognitiveRealmMap,
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
  { altName: 'Epilogue', chapter: 75.1, part: 5 },
];
const oathbringerChapterList: Chapter[] = [
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
  { chapter: 14, part: 1 },
  { chapter: 15, part: 1 },
  { chapter: 16, part: 1 },
  { chapter: 17, part: 1 },
  { chapter: 18, part: 1 },
  { chapter: 19, part: 1 },
  { chapter: 20, part: 1 },
  { chapter: 21, part: 1 },
  { chapter: 22, part: 1 },
  { chapter: 23, part: 1 },
  { chapter: 24, part: 1 },
  { chapter: 25, part: 1 },
  { chapter: 26, part: 1 },
  { chapter: 27, part: 1 },
  { chapter: 28, part: 1 },
  { chapter: 29, part: 1 },
  { chapter: 30, part: 1 },
  { chapter: 31, part: 1 },
  { chapter: 32, part: 1 },
  { altName: 'Interlude 1', chapter: 32.1, part: 1 },
  { altName: 'Interlude 2', chapter: 32.2, part: 1 },
  { altName: 'Interlude 3', chapter: 32.3, part: 1 },
  { chapter: 33, part: 2 },
  { chapter: 34, part: 2 },
  { chapter: 35, part: 2 },
  { chapter: 36, part: 2 },
  { chapter: 37, part: 2 },
  { chapter: 38, part: 2 },
  { chapter: 39, part: 2 },
  { chapter: 40, part: 2 },
  { chapter: 41, part: 2 },
  { chapter: 42, part: 2 },
  { chapter: 43, part: 2 },
  { chapter: 44, part: 2 },
  { chapter: 45, part: 2 },
  { chapter: 46, part: 2 },
  { chapter: 47, part: 2 },
  { chapter: 48, part: 2 },
  { chapter: 49, part: 2 },
  { chapter: 50, part: 2 },
  { chapter: 51, part: 2 },
  { chapter: 52, part: 2 },
  { chapter: 53, part: 2 },
  { chapter: 54, part: 2 },
  { chapter: 55, part: 2 },
  { chapter: 56, part: 2 },
  { chapter: 57, part: 2 },
  { altName: 'Interlude 4', chapter: 57.1, part: 2 },
  { altName: 'Interlude 5', chapter: 57.2, part: 2 },
  { altName: 'Interlude 6', chapter: 57.3, part: 2 },
  { chapter: 58, part: 3 },
  { chapter: 59, part: 3 },
  { chapter: 60, part: 3 },
  { chapter: 61, part: 3 },
  { chapter: 62, part: 3 },
  { chapter: 63, part: 3 },
  { chapter: 64, part: 3 },
  { chapter: 65, part: 3 },
  { chapter: 66, part: 3 },
  { chapter: 67, part: 3 },
  { chapter: 68, part: 3 },
  { chapter: 69, part: 3 },
  { chapter: 70, part: 3 },
  { chapter: 71, part: 3 },
  { chapter: 72, part: 3 },
  { chapter: 73, part: 3 },
  { chapter: 74, part: 3 },
  { chapter: 75, part: 3 },
  { chapter: 76, part: 3 },
  { chapter: 77, part: 3 },
  { chapter: 78, part: 3 },
  { chapter: 79, part: 3 },
  { chapter: 80, part: 3 },
  { chapter: 81, part: 3 },
  { chapter: 82, part: 3 },
  { chapter: 83, part: 3 },
  { chapter: 84, part: 3 },
  { chapter: 85, part: 3 },
  { chapter: 86, part: 3 },
  { chapter: 87, part: 3 },
  { altName: 'Interlude 7', chapter: 87.1, part: 3 },
  { altName: 'Interlude 8', chapter: 87.2, part: 3 },
  { altName: 'Interlude 9', chapter: 87.3, part: 3 },
  { altName: 'Interlude 10', chapter: 87.4, part: 3 },
  { altName: 'Interlude 11', chapter: 87.5, part: 3 },
  { chapter: 88, part: 4 },
  { chapter: 89, part: 4 },
  { chapter: 90, part: 4 },
  { chapter: 91, part: 4 },
  { chapter: 92, part: 4 },
  { chapter: 93, part: 4 },
  { chapter: 94, part: 4 },
  { chapter: 95, part: 4 },
  { chapter: 96, part: 4 },
  { chapter: 97, part: 4 },
  { chapter: 98, part: 4 },
  { chapter: 99, part: 4 },
  { chapter: 100, part: 4 },
  { chapter: 101, part: 4 },
  { chapter: 102, part: 4 },
  { chapter: 103, part: 4 },
  { chapter: 104, part: 4 },
  { chapter: 105, part: 4 },
  { chapter: 106, part: 4 },
  { chapter: 107, part: 4 },
  { chapter: 108, part: 4 },
  { chapter: 109, part: 4 },
  { chapter: 110, part: 4 },
  { chapter: 111, part: 4 },
  { chapter: 112, part: 4 },
  { chapter: 113, part: 4 },
  { altName: 'Interlude 12', chapter: 113.1, part: 4 },
  { altName: 'Interlude 13', chapter: 113.2, part: 4 },
  { altName: 'Interlude 14', chapter: 113.3, part: 4 },
  { chapter: 114, part: 5 },
  { chapter: 115, part: 5 },
  { chapter: 116, part: 5 },
  { chapter: 117, part: 5 },
  { chapter: 118, part: 5 },
  { chapter: 119, part: 5 },
  { chapter: 120, part: 5 },
  { chapter: 121, part: 5 },
  { chapter: 122, part: 5 },
  { altName: 'Epilogue', chapter: 122.1, part: 5 },
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
  { chapter: 52, part: 3 },
  { chapter: 53, part: 3 },
  { chapter: 54, part: 3 },
  { chapter: 55, part: 3 },
  { chapter: 56, part: 3 },
  { chapter: 57, part: 3 },
  { chapter: 58, part: 3 },
  { altName: 'Interlude 9', chapter: 58.1, part: 3 },
  { altName: 'Interlude 10', chapter: 58.2, part: 3 },
  { altName: 'Interlude 11', chapter: 58.3, part: 3 },
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
  { chapter: 70, part: 4 },
  { chapter: 71, part: 4 },
  { chapter: 72, part: 4 },
  { chapter: 73, part: 4 },
  { chapter: 74, part: 4 },
  { chapter: 75, part: 4 },
  { altName: 'Interlude 12', chapter: 75.1, part: 4 },
  { altName: 'Interlude 13', chapter: 75.2, part: 4 },
  { altName: 'Interlude 14', chapter: 75.3, part: 4 },
  { chapter: 76, part: 5 },
  { chapter: 77, part: 5 },
  { chapter: 78, part: 5 },
  { chapter: 79, part: 5 },
  { chapter: 80, part: 5 },
  { chapter: 81, part: 5 },
  { chapter: 82, part: 5 },
  { chapter: 83, part: 5 },
  { chapter: 84, part: 5 },
  { chapter: 85, part: 5 },
  { chapter: 86, part: 5 },
  { chapter: 87, part: 5 },
  { chapter: 88, part: 5 },
  { chapter: 89, part: 5 },
  { altName: 'Epilogue', chapter: 89.1, part: 5 },
];

const edgedancerChapterList: Chapter[] = [
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
];

// const oathbringerChapterList: Chapter[] = [
//   { altName: 'Prologue', chapter: 0, part: 0 },
//   { chapter: 1, part: 1 },
//   { chapter: 2, part: 1 },
//   { chapter: 3, part: 1 },
//   { chapter: 4, part: 1 },
//   { chapter: 5, part: 1 },
//   { chapter: 6, part: 1 },
//   { chapter: 7, part: 1 },
//   { chapter: 8, part: 1 },
//   { chapter: 9, part: 1 },
//   { chapter: 10, part: 1 },
//   { chapter: 11, part: 1 },
//   { chapter: 12, part: 1 },
//   { chapter: 13, part: 1 },
//   { chapter: 14, part: 1 },
//   { chapter: 15, part: 1 },
//   { chapter: 16, part: 1 },
//   { chapter: 17, part: 1 },
//   { chapter: 18, part: 1 },
//   { chapter: 19, part: 1 },
//   { chapter: 20, part: 1 },
//   { chapter: 21, part: 1 },
//   { chapter: 22, part: 1 },
//   { chapter: 23, part: 1 },
//   { chapter: 24, part: 1 },
//   { chapter: 25, part: 1 },
//   { chapter: 26, part: 1 },
//   { chapter: 27, part: 1 },
//   { chapter: 28, part: 1 },
//   { chapter: 29, part: 1 },
//   { chapter: 30, part: 1 },
//   { chapter: 31, part: 1 },
//   { chapter: 32, part: 1 },
//   { altName: 'Interlude 1', chapter: 32.1, part: 1 },
//   { altName: 'Interlude 2', chapter: 32.2, part: 1 },
//   { altName: 'Interlude 3', chapter: 32.3, part: 1 },
//   { chapter: 33, part: 2 },
//   { chapter: 34, part: 2 },
//   { chapter: 35, part: 2 },
//   { chapter: 36, part: 2 },
//   { chapter: 37, part: 2 },
//   { chapter: 38, part: 2 },
//   { chapter: 39, part: 2 },
//   { chapter: 40, part: 2 },
//   { chapter: 41, part: 2 },
//   { chapter: 42, part: 2 },
//   { chapter: 43, part: 2 },
//   { chapter: 44, part: 2 },
//   { chapter: 45, part: 2 },
//   { chapter: 46, part: 2 },
//   { chapter: 47, part: 2 },
//   { chapter: 48, part: 2 },
//   { chapter: 49, part: 2 },
//   { chapter: 50, part: 2 },
//   { chapter: 51, part: 2 },
//   { chapter: 52, part: 2 },
//   { chapter: 53, part: 2 },
//   { chapter: 54, part: 2 },
//   { chapter: 55, part: 2 },
//   { chapter: 56, part: 2 },
//   { chapter: 57, part: 2 },
//   { altName: 'Interlude 4', chapter: 57.1, part: 2 },
//   { altName: 'Interlude 5', chapter: 57.2, part: 2 },
//   { altName: 'Interlude 6', chapter: 57.3, part: 2 },
//   { chapter: 58, part: 3 },
//   { chapter: 59, part: 3 },
//   { chapter: 60, part: 3 },
//   { chapter: 61, part: 3 },
//   { chapter: 62, part: 3 },
//   { chapter: 63, part: 3 },
//   { chapter: 64, part: 3 },
//   { chapter: 65, part: 3 },
//   { chapter: 66, part: 3 },
//   { chapter: 67, part: 3 },
//   { chapter: 68, part: 3 },
//   { chapter: 69, part: 3 },
//   { chapter: 70, part: 3 },
//   { chapter: 71, part: 3 },
//   { chapter: 72, part: 3 },
//   { chapter: 73, part: 3 },
//   { chapter: 74, part: 3 },
//   { chapter: 75, part: 3 },
//   { chapter: 76, part: 3 },
//   { chapter: 77, part: 3 },
//   { chapter: 78, part: 3 },
//   { chapter: 79, part: 3 },
//   { chapter: 80, part: 3 },
//   { chapter: 81, part: 3 },
//   { chapter: 82, part: 3 },
//   { chapter: 83, part: 3 },
//   { chapter: 84, part: 3 },
//   { chapter: 85, part: 3 },
//   { chapter: 86, part: 3 },
//   { chapter: 87, part: 3 },
//   { altName: 'Interlude 7', chapter: 87.1, part: 3 },
//   { altName: 'Interlude 8', chapter: 87.2, part: 3 },
//   { altName: 'Interlude 9', chapter: 87.3, part: 3 },
//   { altName: 'Interlude 10', chapter: 87.4, part: 3 },
//   { altName: 'Interlude 11', chapter: 87.5, part: 3 },
//   { chapter: 88, part: 4 },
//   { chapter: 89, part: 4 },
//   { chapter: 90, part: 4 },
//   { chapter: 91, part: 4 },
//   { chapter: 92, part: 4 },
//   { chapter: 93, part: 4 },
//   { chapter: 94, part: 4 },
//   { chapter: 95, part: 4 },
//   { chapter: 96, part: 4 },
//   { chapter: 97, part: 4 },
//   { chapter: 98, part: 4 },
//   { chapter: 99, part: 4 },
//   { chapter: 100, part: 4 },
//   { chapter: 101, part: 4 },
//   { chapter: 102, part: 4 },
//   { chapter: 103, part: 4 },
//   { chapter: 104, part: 4 },
//   { chapter: 105, part: 4 },
//   { chapter: 106, part: 4 },
//   { chapter: 107, part: 4 },
//   { chapter: 108, part: 4 },
//   { chapter: 109, part: 4 },
//   { chapter: 110, part: 4 },
//   { chapter: 111, part: 4 },
//   { chapter: 112, part: 4 },
//   { chapter: 113, part: 4 },
//   { altName: 'Interlude 12', chapter: 113.1, part: 4 },
//   { altName: 'Interlude 13', chapter: 113.2, part: 4 },
//   { altName: 'Interlude 14', chapter: 113.3, part: 4 },
//   { chapter: 114, part: 5 },
//   { chapter: 115, part: 5 },
//   { chapter: 116, part: 5 },
//   { chapter: 117, part: 5 },
//   { chapter: 118, part: 5 },
//   { chapter: 119, part: 5 },
//   { chapter: 120, part: 5 },
//   { chapter: 121, part: 5 },
//   { chapter: 122, part: 5 },
//   { altName: 'Epilogue', chapter: 122.1, part: 5 },
// ];

const dawnshardChapterList: Chapter[] = [
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
  { altName: 'Epilogue', chapter: 19.1 },
];

const rhythmOfWarChapterList: Chapter[] = [
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
  { chapter: 14, part: 1 },
  { chapter: 15, part: 1 },
  { chapter: 16, part: 1 },
  { chapter: 17, part: 1 },
  { chapter: 18, part: 1 },
  { chapter: 19, part: 1 },
  { altName: 'Interlude 1', chapter: 19.1, part: 1 },
  { altName: 'Interlude 2', chapter: 19.2, part: 1 },
  { altName: 'Interlude 3', chapter: 19.3, part: 1 },
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
  { chapter: 35, part: 2 },
  { chapter: 36, part: 2 },
  { chapter: 37, part: 2 },
  { chapter: 38, part: 2 },
  { chapter: 39, part: 2 },
  { chapter: 40, part: 2 },
  { chapter: 41, part: 2 },
  { chapter: 42, part: 2 },
  { chapter: 43, part: 2 },
  { altName: 'Interlude 4', chapter: 43.1, part: 2 },
  { altName: 'Interlude 5', chapter: 43.2, part: 2 },
  { altName: 'Interlude 6', chapter: 43.3, part: 2 },
  { chapter: 44, part: 3 },
  { chapter: 45, part: 3 },
  { chapter: 46, part: 3 },
  { chapter: 47, part: 3 },
  { chapter: 48, part: 3 },
  { chapter: 49, part: 3 },
  { chapter: 50, part: 3 },
  { chapter: 51, part: 3 },
  { chapter: 52, part: 3 },
  { chapter: 53, part: 3 },
  { chapter: 54, part: 3 },
  { chapter: 55, part: 3 },
  { chapter: 56, part: 3 },
  { chapter: 57, part: 3 },
  { chapter: 58, part: 3 },
  { chapter: 59, part: 3 },
  { chapter: 60, part: 3 },
  { chapter: 61, part: 3 },
  { chapter: 62, part: 3 },
  { chapter: 63, part: 3 },
  { chapter: 64, part: 3 },
  { chapter: 65, part: 3 },
  { chapter: 66, part: 3 },
  { chapter: 67, part: 3 },
  { chapter: 68, part: 3 },
  { chapter: 69, part: 3 },
  { chapter: 70, part: 3 },
  { chapter: 71, part: 3 },
  { chapter: 72, part: 3 },
  { altName: 'Interlude 7', chapter: 72.1, part: 3 },
  { altName: 'Interlude 8', chapter: 72.2, part: 3 },
  { altName: 'Interlude 9', chapter: 72.3, part: 3 },
  { chapter: 73, part: 4 },
  { chapter: 74, part: 4 },
  { chapter: 75, part: 4 },
  { chapter: 76, part: 4 },
  { chapter: 77, part: 4 },
  { chapter: 78, part: 4 },
  { chapter: 79, part: 4 },
  { chapter: 80, part: 4 },
  { chapter: 81, part: 4 },
  { chapter: 82, part: 4 },
  { chapter: 83, part: 4 },
  { chapter: 84, part: 4 },
  { chapter: 85, part: 4 },
  { chapter: 86, part: 4 },
  { chapter: 87, part: 4 },
  { chapter: 88, part: 4 },
  { chapter: 89, part: 4 },
  { chapter: 90, part: 4 },
  { chapter: 91, part: 4 },
  { chapter: 92, part: 4 },
  { chapter: 93, part: 4 },
  { chapter: 94, part: 4 },
  { chapter: 95, part: 4 },
  { chapter: 96, part: 4 },
  { chapter: 97, part: 4 },
  { altName: 'Interlude 10', chapter: 97.1, part: 4 },
  { altName: 'Interlude 11', chapter: 97.2, part: 4 },
  { altName: 'Interlude 12', chapter: 97.3, part: 4 },
  { chapter: 98, part: 5 },
  { chapter: 99, part: 5 },
  { chapter: 100, part: 5 },
  { chapter: 101, part: 5 },
  { chapter: 102, part: 5 },
  { chapter: 103, part: 5 },
  { chapter: 104, part: 5 },
  { chapter: 105, part: 5 },
  { chapter: 106, part: 5 },
  { chapter: 107, part: 5 },
  { chapter: 108, part: 5 },
  { chapter: 109, part: 5 },
  { chapter: 110, part: 5 },
  { chapter: 111, part: 5 },
  { chapter: 112, part: 5 },
  { chapter: 113, part: 5 },
  { chapter: 114, part: 5 },
  { chapter: 115, part: 5 },
  { chapter: 116, part: 5 },
  { chapter: 117, part: 5 },
  { altName: 'Epilogue', chapter: 117.1, part: 5 },
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
    name: 'Szeth',
    image: 'https://coppermind.net/w/images/Szeth.jpg',
    color: 'rgb(230,230,230)',
    coppermindLink: 'Szeth'
  },
  {
    name: 'Dalinar',
    image: 'https://coppermind.net/w/images/thumb/Dalinar.jpg/400px-Dalinar.jpg',
    color: 'rgb(11,35,63)',
    coppermindLink: 'Dalinar_Kholin',
    firstAppearance: { 1: theWayOfKingsChapterList[16] }
  },
  {
    name: 'Jasnah',
    image: 'https://coppermind.net/w/images/thumb/Jasnah_Shuravf.jpg/400px-Jasnah_Shuravf.jpg',
    color: 'rgb(106,57,156)',
    coppermindLink: 'Jasnah_Kholin',
    firstAppearance: { 1: theWayOfKingsChapterList[6] }
  },
  {
    name: 'Adolin',
    image: 'https://coppermind.net/w/images/thumb/Adolin.jpg/400px-Adolin.jpg',
    color: 'rgb(100,150,200)',
    coppermindLink: 'Adolin_Kholin',
    firstAppearance: { 1: theWayOfKingsChapterList[16] }
  },
  {
    name: 'Moash',
    image: 'https://coppermind.net/w/images/thumb/Moash_Shuravf.jpg/400px-Moash_Shuravf.jpg',
    color: 'rgb(216,57,71)',
    coppermindLink: 'Moash',
    firstAppearance: { 1: theWayOfKingsChapterList[18] }
  },
  {
    name: 'Taravangian',
    image: 'https://coppermind.net/w/images/thumb/Taravangian_Portrait_by_Marie_Seeberger.jpg/400px-Taravangian_Portrait_by_Marie_Seeberger.jpg',
    color: 'rgb(154,56,13)',
    coppermindLink: 'Taravangian',
    firstAppearance: { 1: theWayOfKingsChapterList[6] }
  },
  {
    name: 'Navani',
    image: 'https://coppermind.net/w/images/Navani.jpg',
    color: 'rgb(80,27,76)',
    coppermindLink: 'Navani_Kholin',
    firstAppearance: { 1: theWayOfKingsChapterList[26] }
  },
  {
    name: 'Lopen',
    image: 'https://coppermind.net/w/images/thumb/Lopen_Shuravf.png/400px-Lopen_Shuravf.png',
    color: 'rgb(77,62,55)',
    coppermindLink: 'Lopen',
    firstAppearance: { 1: theWayOfKingsChapterList[39] }
  },
  {
    name: 'Rysn',
    image: 'https://coppermind.net/w/images/thumb/Rysn_by_paintweaver.jpg/400px-Rysn_by_paintweaver.jpg',
    color: 'rgb(21,49,12)',
    coppermindLink: 'Rysn_Ftori',
    firstAppearance: { 1: theWayOfKingsChapterList[33] }
  },
  {
    name: 'Eshonai',
    image: 'https://coppermind.net/w/images/thumb/Eshonai_portrait_large.png/400px-Eshonai_portrait_large.png',
    color: 'rgb(200,86,85)',
    coppermindLink: 'Eshonai',
    firstAppearance: { 1: theWayOfKingsChapterList[78] }
  },
  {
    name: 'Venli',
    image: 'https://coppermind.net/w/images/thumb/Venli.png/400px-Venli.png',
    color: 'rgb(232,150,125)',
    coppermindLink: 'Venli',
    firstAppearance: { 2: wordsOfRadianceChapterList[13] }
  },
  {
    name: 'Lift',
    image: 'https://coppermind.net/w/images/thumb/Lift_by_Katie_Payne.jpg/400px-Lift_by_Katie_Payne.jpg',
    color: 'rgb(129,180,184)',
    coppermindLink: 'Lift',
    firstAppearance: { 2: wordsOfRadianceChapterList[67] }
  },
];

enum CharacterIndex {
  'Kaladin' = 0,
  'Shallan' = 1,
  'Szeth' = 2,

  'Dalinar' = 3, // ch12
  'Jasnah' = 4, // bk1 ch5
  'Adolin' = 5, // ch12

  'Moash' = 6, // bk1 ch14
  'Taravangian' = 7, // bk1 ch5
  'Navani' = 8, // bk1 ch22

  'Lopen' = 9, // bk1 ch32
  'Rysn' = 10, // bk1 int4

  'Eshonai' = 11, // bk1 ch68
  'Venli' = 12, //bk2 int1
  'Lift' = 13, // bk2 int9
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
  },
  {
    title: 'Edgedancer',
    image: 'https://coppermind.net/w/images/thumb/Edgedancer_Cover.jpg/400px-Edgedancer_Cover.jpg',
    chapters: edgedancerChapterList
  },
  {
    title: 'Oathbringer',
    image: 'https://coppermind.net/w/images/thumb/Oathbringer_US_Hardcover.jpg/400px-Oathbringer_US_Hardcover.jpg',
    chapters: oathbringerChapterList
  },
  {
    title: 'Dawnshard',
    image: 'https://coppermind.net/w/images/Dawnshard_cover.jpg',
    chapters: dawnshardChapterList
  },
  {
    title: 'Rhythm of War',
    image: 'https://coppermind.net/w/images/thumb/RoW_US_cover.jpg/400px-RoW_US_cover.jpg',
    chapters: rhythmOfWarChapterList
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
      title: 'Assassination of Gavilar',
      coordinates: [513, 1369],
      type: 'event',
      image: 'https://coppermind.net/w/images/thumb/Reluctant_Villain_by_Art_Dem.jpg/400px-Reluctant_Villain_by_Art_Dem.jpg',
      appearances: {
        1: [1].map(i => theWayOfKingsChapterList[i]),
        2: [0].map(i => wordsOfRadianceChapterList[i]),
        4: [0].map(i => oathbringerChapterList[i]),
        6: [0].map(i => rhythmOfWarChapterList[i])
      },
      description: `The Assassination of Gavilar was an assassination performed by Szeth-son-son-Vallano on orders from the Parshendi. It was a major turning point in Alethkar's history, leading to the War of Reckoning and most of the events in the Stormlight Archive.`,
      coppermindLink: 'Assassination_of_Gavilar',
      confirmed: true
    },
    {
      title: 'Battle of Narak',
      coordinates: [259.5, 1441],
      type: 'battle',
      image: 'https://coppermind.net/w/images/thumb/WoR_BG_cover_art.jpg/800px-WoR_BG_cover_art.jpg',
      appearances: {
        2: [95, 96, 97, 98, 99, 100, 101].map(i => wordsOfRadianceChapterList[i])
      },
      description: `The Battle of Narak is a major event during the War of Reckoning on Roshar. The battle ended the war and ushered in the True Desolation.`,
      coppermindLink: 'Battle_of_Narak',
      confirmed: true
    },
    {
      title: 'Battle of Thaylen Field',
      coordinates: [138, 1055],
      type: 'battle',
      image: 'https://coppermind.net/w/images/thumb/Dalinar_Perpendicularity.png/420px-Dalinar_Perpendicularity.png',
      appearances: {
        4: [129, 130, 131, 132, 133, 134].map(i => oathbringerChapterList[i])
      },
      description: `The Battle of Thaylen Field is one of the first major engagements in the True Desolation. It's fought between the human armies, led by Dalinar Kholin, and the Voidbringers, mainly Fused, under direct command of Odium.`,
      coppermindLink: 'Battle_of_Thaylen_Field',
      confirmed: true
    },
    {
      title: 'Battle of the Tower',
      coordinates: [259.5, 1435],
      type: 'battle',
      image: 'https://coppermind.net/w/images/thumb/The_Leap_by_Grant_Hansen.jpg/600px-The_Leap_by_Grant_Hansen.jpg',
      appearances: {
        1: [75, 76, 77, 78].map(i => theWayOfKingsChapterList[i])
      },
      description: `The Battle of the Tower is a major engagement during the War of Reckoning fought by the combined armies of the Alethi Highprinces Dalinar Kholin and Torol Sadeas against the Parshendi forces led by Eshonai.`,
      coppermindLink: 'Battle_of_the_Tower',
      confirmed: true
    },
    {
      title: 'Expedition to Akinah',
      coordinates: [138, 1061],
      type: 'event',
      image: 'https://coppermind.net/w/images/thumb/Aboard_the_Wandersail.jpg/400px-Aboard_the_Wandersail.jpg',
      appearances: {
        5: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(i => dawnshardChapterList[i])
      },
      description: `The Wandersail's expedition to Akinah in late 1174 led to the discovery of a Dawnshard, several Soulcasters, and Shardplate.`,
      coppermindLink: 'Expedition_to_Akinah',
      confirmed: true
    },
    {
      title: 'Siege of Kholinar',
      coordinates: [513, 1375],
      type: 'battle',
      image: 'https://coppermind.net/w/images/thumb/Attack_on_Roshar_by_Connor_Chamberlain.jpg/400px-Attack_on_Roshar_by_Connor_Chamberlain.jpg',
      appearances: {
        4: [89, 90, 91, 93].map(i => oathbringerChapterList[i])
      },
      description: `The Siege of Kholinar, and the ensuing battle inside Kholinar Palace, is a major event that occurs during the True Desolation. The battle resulted in a Voidbringer victory and occupation of the city, the death of King Elhokar, and several of the modern Knights Radiant being transported to the Cognitive Realm.`,
      coppermindLink: 'Siege_of_Kholinar',
      confirmed: true
    },
    {
      title: 'Kholinar',
      coordinates: [513, 1363.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Kholinar.jpg',
      appearances: {
        1: [
          1, 86
        ].map(i => theWayOfKingsChapterList[i]),
        2: [
          0, 87, 
        ].map(i => wordsOfRadianceChapterList[i]),
        4: [39].map(i => oathbringerChapterList[i])
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
          theWayOfKingsChapterList[2],
          theWayOfKingsChapterList[54],
          theWayOfKingsChapterList[58]
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
          4, 6, 8, 9, 36, 40, 43, 46, 49,
          52, 55, 57, 80, 81, 82, 84
        ].map(i => theWayOfKingsChapterList[i])
      },
      description: `Kharbranth, the City of Bells, is an independent city-state on Roshar, ruled by Queen Savrahalidem. It is one of the five Vorin nations and home to the Palanaeum, the largest library on Roshar. Kharbranth is known for the quality of its hospitals, and people come from all over the world to study medicine from Kharbranth's surgeons.`,
      confirmed: true
    },
    {
      title: 'Shattered Plains',
      coordinates: [259.5, 1423],
      type: 'region',
      image: 'https://coppermind.net/w/images/Shattered_Plains_by_Noah_Bradley.jpg',
      appearances: {
        1: [
          7, 10, 12, 16, 17, 18, 19,
          21, 22, 23, 25, 26, 27, 28, 30,
          31, 32, 37, 39, 41, 42, 45, 47,
          50, 53, 56, 62, 63, 64, 65, 66,
          67, 68, 69, 70, 71, 72, 73, 74,
          75, 76, 77, 78, 79, 83, 85
        ].map(i => theWayOfKingsChapterList[i]),
        2: [
          2, 4, 5, 8, 9, 12, 13, 18, 20, 22,
          26, 27, 29, 30, 33, 35, 36, 37, 40,
          41, 43, 44, 45, 46, 48, 49, 50, 51,
          52, 54, 55, 57, 58, 59, 60, 61, 62,
          63, 64, 65, 66, 70, 71, 73, 74, 75,
          77, 78, 79, 80, 81, 82, 83, 85, 86,
          90, 91, 92, 93, 94, 95, 96, 97, 98,
          99, 100, 101, 102
        ].map(i => wordsOfRadianceChapterList[i]),
        4: [
          35
        ].map(i => oathbringerChapterList[i])
      },
      description: `The Shattered Plains are a region of Roshar located on the border of the Frostlands and Unclaimed Hills, in the former territory of the Silver Kingdom of Natanatan. They are named for their topography, consisting of a huge number of plateaus of various sizes surrounded on all sides by deep chasms.`,
      confirmed: true
    },
    {
      title: 'Stormseat',
      coordinates: [259.5, 1429],
      type: 'city',
      image: 'https://coppermind.net/w/images/Narak_by_Connor_Chamberlain.jpg',
      appearances: {
        2: [
          13, 16, 39, 42, 69, 88, 97, 98, 99,
          100, 101
        ].map(i => wordsOfRadianceChapterList[i])
      },
      description: `Stormseat was the capital city of the historic Silver Kingdom of Natanatan on Roshar. During the War of Reckoning, it's called Narak, or Exile, and serves as the home of the listeners.`,
      confirmed: true
    },
    {
      title: 'Hearthstone',
      coordinates: [628.5, 1351.5],
      type: 'town',
      image: 'https://coppermind.net/w/images/Watcher_at_the_Rim_by_Marie_Seeberger.jpg',
      appearances: {
        1: [
          11, 20, 24, 29, 38, 44, 48, 51,

        ].map(i => theWayOfKingsChapterList[i]),
        4: [
          5, 6, 7, 
        ].map(i => oathbringerChapterList[i])
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
        ],
        2: [
          10, 23, 31, 47, 53, 56, 72, 76, 84
        ].map(i => wordsOfRadianceChapterList[i])
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
    {
      title: 'Shinovar',
      coordinates: [498, 381],
      type: 'region',
      image: 'https://coppermind.net/w/images/Farmer_by_Adam_J_Marin.png',
      appearances: {
        1: [
          theWayOfKingsChapterList[33]
        ]
      },
      description: `Shinovar is a nation on the western mainland of Roshar. Due to the mountains separating it from the rest of the continent, Shinovar is distinct both ecologically and culturally from the rest of Roshar. Shinovar natives are known as the Shin.`,
      confirmed: true
    },
    {
      title: 'Kasitor',
      coordinates: [725, 442.5],
      type: 'city',
      appearances: {
        1: [
          theWayOfKingsChapterList[34]
        ]
      },
      description: `Kasitor is a coastal city in Iri on Roshar and the home of a notable spren known as Cusicesh, the Protector.`,
      confirmed: true
    },
    {
      title: 'Bornwater',
      coordinates: [437.5, 1000],
      type: 'town',
      appearances: {
        1: [
          theWayOfKingsChapterList[35]
        ]
      },
      description: `It is the largest town in its immediate area, although it could still be considered a "backwater". Outside of the city, there are plains where wild horses run free.`,
      confirmed: false
    },
    {
      title: 'Sesemalex Dar',
      coordinates: [264, 615.5],
      type: 'city',
      appearances: {
        1: [
          59
        ].map(i => theWayOfKingsChapterList[i])
      },
      description: `Sesemalex Dar is the capital of the kingdom of Emul on Roshar during the Era of Solitude.`,
      confirmed: true
    },
    {
      title: 'Reshi Isles',
      coordinates: [860, 932],
      type: 'region',
      appearances: {
        1: [
          60
        ].map(i => theWayOfKingsChapterList[i])
      },
      description: `The Reshi Isles are a collection of islands on the northern edge of Roshar in the Reshi Sea. People from the Reshi Isles are called Reshi.`,
      confirmed: true
    },
    {
      title: 'Vedenar',
      coordinates: [326, 1076.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Vedenar_city_map.jpg',
      appearances: {
        1: [
          61
        ].map(i => theWayOfKingsChapterList[i]),
        2: [
          89
        ].map(i => wordsOfRadianceChapterList[i])
      },
      description: `Vedenar is the capital city of Jah Keved on Roshar. Vedenar lies on the southern edge of Jah Keved, on the cliffs facing Tarat Sea. The sound of the waves crashing against the stone can be heard across the entire city.`,
      confirmed: true
    },
    {
      title: 'Feverstone Keep',
      coordinates: [795.5, 520.5],
      type: 'point of interest',
      appearances: {
        1: [
          62
        ].map(i => theWayOfKingsChapterList[i])
      },
      description: `Feverstone Keep is a fortress on ancient Roshar, in use during the False Desolation and Recreance.`,
      confirmed: false
    },
    {
      title: 'Akinah',
      coordinates: [498.5, 104.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/Akinah_city_map.jpg',
      appearances: {
        5: [12, 13, 14, 15, 16, 17, 18, 19].map(i => dawnshardChapterList[i])
      },
      description: `Akinah is the ancient capital of the Silver Kingdom of Aimia on Roshar. In more modern times, it is also known as The Rock of Secrets and The Void's Playground. The city itself was destroyed long ago, and during the Era of Solitude it exists only as a ruin. It is the location of an apparently functional Oathgate and its underwater caverns formerly contained a Dawnshard.`,
      coppermindLink: 'Akinah',
      confirmed: true
    },
    {
      title: 'Iri',
      coordinates: [672, 469],
      type: 'region',
      appearances: {
        2: [14].map(i => wordsOfRadianceChapterList[i])
      },
      description: `Iri is a kingdom in northwestern Roshar. Prior to the Recreance, it was one of the Silver Kingdoms. People from Iri are called Iriali. Iri is ruled by three monarchs, currently two kings and a queen. The Iriali queen has authority over foreign policy.`,
      coppermindLink: 'Iri',
      confirmed: true
    },
    {
      title: 'Relu-na',
      coordinates: [739, 843],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Tan-na_by_Marie_Seeberger.jpg/600px-Tan-na_by_Marie_Seeberger.jpg',
      appearances: {
        2: [15].map(i => wordsOfRadianceChapterList[i])
      },
      description: `Relu-na is a Tai-na in the Reshi Sea on Roshar. A greatshell the size of an island, she is worshiped as a god by her inhabitants.`,
      coppermindLink: 'Relu-na',
      confirmed: false
    },
    {
      title: 'Azimir',
      coordinates: [332.5, 643],
      type: 'city',
      appearances: {
        2: [
          67
        ].map(i => wordsOfRadianceChapterList[i]),
        3: [
          0, 
        ].map(i => edgedancerChapterList[i])
      },
      description: `Azimir is the capital city of Azir, and the seat of the Prime Aqasix, the leader of the Azish Empire.`,
      confirmed: true
    },
    {
      title: 'Urithiru',
      coordinates: [362, 802],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Urithiru3_by_Jacobo_Montoya.jpg/889px-Urithiru3_by_Jacobo_Montoya.jpg',
      appearances: {
        2: [
          68, 100, 101, 102, 103
        ].map(i => wordsOfRadianceChapterList[i]),
        4: [
          1, 2, 4, 8, 9, 10, 12, 13, 15, 16,
          18, 21, 22, 24, 25, 27, 28, 29, 30,
          36, 37, 38, 41, 42, 43, 44
        ].map(i => oathbringerChapterList[i])
      },
      description: `Urithiru is a tower-city on Roshar that functioned as the home of the Knights Radiant and the central point of the Silver Kingdoms during the Heraldic Epochs.`,
      confirmed: true
    },
    {
      title: 'Yeddaw',
      coordinates: [318, 611],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Yeddaw.png/400px-Yeddaw.png',
      appearances: {
        3: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
          13, 14, 15, 16, 17, 18, 19, 20
        ].map(i => edgedancerChapterList[i])
      },
      description: `Yeddaw's shape and appearance is very unusual because it is composed of hundreds of trenches cut into the ground by hired Shardblades, the Imperial Shardblades of Azir. All inhabitants live inside of the trenches, but farming is done above the city in the spaces between trenches.`,
      confirmed: true
    },
    {
      title: 'Alethkar',
      coordinates: [449, 1325],
      type: 'region',
      image: 'https://coppermind.net/w/images/thumb/Alethkar_Color.jpg/500px-Alethkar_Color.jpg',
      appearances: {
        4: [
          3 
        ].map(i => oathbringerChapterList[i])
      },
      description: `Alethkar is the largest and most prominent of the five Vorin nations on Roshar. People from Alethkar are known as Alethi, and their royal colors are blue and gold. The singers name for Alethkar is Avendla, meaning Land of the Second Advance. Prior to the True Desolation, they were engaged in the War of Reckoning against the listeners.`,
      confirmed: true
    },
    {
      title: 'Hornhollow',
      coordinates: [625, 1321],
      type: 'town',
      appearances: {
        4: [
          10, 14, 
        ].map(i => oathbringerChapterList[i])
      },
      description: `Hornhollow is a village in Sadeas princedom close to Hearthstone. It is part of the Akanny region - a prized farming area that supplies grain, meat and other provisions for large portions of Alethkar.`,
      confirmed: false
    },
    {
      title: 'Rathalas',
      coordinates: [392, 1337.5],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Rathalas_by_Connor_Chamberlain.jpg/400px-Rathalas_by_Connor_Chamberlain.jpg',
      appearances: {
        4: [
          11
        ].map(i => oathbringerChapterList[i])
      },
      description: `Rathalas, also known as the Rift, was a city in in the northern part of the Eastern Crownlands near central Alethkar. The city was burnt to the ground in 1163 and has not since been rebuilt.`,
      confirmed: true
    },
    {
      title: 'Revolar',
      coordinates: [566.5, 1320.5],
      type: 'city',
      appearances: {
        4: [
          31
        ].map(i => oathbringerChapterList[i])
      },
      description: `Revolar is a city in Vamah princedom and one of the larger cities in the region. It is located close to a tributary of the Windrunner River which forms the eastern border between Vamah princedom and Ruthar princedom.`,
      confirmed: true
    },
    {
      title: `Dawn's Shadow`,
      coordinates: [380, 1533],
      type: 'town',
      appearances: {
        4: [
          33
        ].map(i => oathbringerChapterList[i])
      },
      description: `Dawn's Shadow is a location, presumably a settlement, on the coast of far eastern Roshar. It is located east of the Unclaimed Hills, on a sea connected to the Ocean of Origins.`,
      confirmed: true
    },
    {
      title: `Jokasha Monastery`,
      coordinates: [459.5, 1129],
      type: 'point of interest',
      appearances: {
        4: [
          34
        ].map(i => oathbringerChapterList[i])
      },
      description: `Jokasha Monastery, sometimes referred to simply as Jokasha, is the home of the Devotary of the Mind, a scholarly group of ardents on Roshar. It is considered a peaceful and desirable location, with many ardents spending half their lives trying to get transferred there.`,
      confirmed: false
    },
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
    {
      character: characters[CharacterIndex.Szeth],
      book: books[0],
      chapter: theWayOfKingsChapterList[35],
      confirmed: false,
      coordinates: [
        [433.5, 1032.5],
        [437.5, 1000]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[0],
      chapter: theWayOfKingsChapterList[61],
      confirmed: false,
      coordinates: [
        [437.5, 1000],
        [431, 1016.5],
        [423.5, 1035.5],
        [416, 1049.5],
        [408.5, 1062.5],
        [395.5, 1071],
        [375, 1077],
        [355, 1078],
        [344, 1079.5],
        [326, 1076.5],
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[0],
      chapter: theWayOfKingsChapterList[81],
      confirmed: false,
      coordinates: [
        [326, 1076.5],
        [312.5, 1074.5],
        [304, 1071],
        [298, 1063.5],
        [290.5, 1051.5],
        [285.5, 1041],
        [280.5, 1026],
        [278.5, 1009],
        [276, 1000.5],
        [271.5, 995],
        [260, 992],
        [247, 992.5],
        [240, 998.5],
        [235.5, 1006.5]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[1],
      confirmed: false,
      coordinates: [
        [235.5, 1006], // kharbranth
        [243, 993.5],
        [234.5, 986],
        [217, 986.5],
        [204, 991],
        [195, 1002],
        [186, 1019.5],
        [182.5, 1029.5],
        [178, 1042.5],
        [175, 1056.5],
        [176, 1068.5],
        [176.5, 1080.5],
        [171.5, 1094.5], // ch 1
        [165.5, 1106], 
        [160, 1119.5],
        [154.5, 1136],
        [104.5, 1214.5], // shipwreck ch 11
        [98, 1214.5],
        [93.5, 1209.5],
        [90.5, 1209],
        [86.5, 1210.5],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[1],
      chapter: wordsOfRadianceChapterList[1],
      confirmed: false,
      coordinates: [
        [235.5, 1006], // kharbranth
        [243, 993.5],
        [234.5, 986],
        [217, 986.5],
        [204, 991],
        [195, 1002],
        [186, 1019.5],
        [182.5, 1029.5],
        [178, 1042.5],
        [175, 1056.5],
        [176, 1068.5],
        [176.5, 1080.5],
        [171.5, 1094.5], // ch 1
        [165.5, 1106], 
        [160, 1119.5],
        [154.5, 1136],
        [104.5, 1214.5], // shipwreck ch 11
        [98, 1214.5],
        [93.5, 1209.5],
        [90.5, 1209],
        [86.5, 1210.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[3],
      confirmed: true,
      coordinates: [
        [86.5, 1210.5],
        [80, 1214.5],
        [78.5, 1220.5],
        [79, 1238.5],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[1],
      chapter: wordsOfRadianceChapterList[3],
      confirmed: true,
      coordinates: [
        [86.5, 1210.5],
        [80, 1214.5],
        [78.5, 1220.5],
        [79, 1238.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[6],
      confirmed: true,
      coordinates: [
        [79, 1238.5],
        [83, 1260.5],
        [86, 1280],
        [88.5, 1299],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[1],
      chapter: wordsOfRadianceChapterList[6],
      confirmed: true,
      coordinates: [
        [79, 1238.5],
        [83, 1260.5],
        [86, 1280],
        [88.5, 1299],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[7],
      confirmed: true,
      coordinates: [
        [88.5, 1299],
        [92.5, 1316.5],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[1],
      chapter: wordsOfRadianceChapterList[7],
      confirmed: true,
      coordinates: [
        [88.5, 1299],
        [92.5, 1316.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[11],
      confirmed: true,
      coordinates: [
        [92.5, 1316.5],
        [106, 1354],
        [118, 1358.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[17],
      confirmed: true,
      coordinates: [
        [118, 1358.5],
        [129.5, 1360],
        [138, 1361],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[19],
      confirmed: true,
      coordinates: [
        [138, 1361],
        [156.5, 1365],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[21],
      confirmed: true,
      coordinates: [
        [156.5, 1365],
        [165, 1369],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[24],
      confirmed: true,
      coordinates: [
        [165, 1369],
        [177.5, 1374.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[28],
      confirmed: true,
      coordinates: [
        [177.5, 1374.5],
        [189.5, 1383.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[32],
      confirmed: true,
      coordinates: [
        [189.5, 1383.5],
        [200, 1389],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[34],
      confirmed: true,
      coordinates: [
        [200, 1389],
        [211.5, 1398],
        [222, 1409],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[1],
      chapter: wordsOfRadianceChapterList[34],
      confirmed: true,
      coordinates: [
        [253.5, 1408],
        [242, 1404],
        [222, 1409],
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[1],
      chapter: wordsOfRadianceChapterList[34],
      confirmed: true,
      coordinates: [
        [253.5, 1408],
        [242, 1404],
        [222, 1409],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[35],
      confirmed: true,
      coordinates: [
        [222, 1409],
        [235.5, 1413],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[1],
      chapter: wordsOfRadianceChapterList[35],
      confirmed: true,
      coordinates: [
        [222, 1409],
        [253.5, 1408],
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[1],
      chapter: wordsOfRadianceChapterList[35],
      confirmed: true,
      coordinates: [
        [222, 1409],
        [253.5, 1408],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[44],
      confirmed: true,
      coordinates: [
        [235.5, 1413],
        [253.5, 1408],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[62],
      confirmed: true,
      coordinates: [
        [253.5, 1408],
        [259, 1396.5],
        [265.5, 1383.5],
        [274.5, 1389],
        [282.5, 1390.5],
        [274.5, 1389],
        [265.5, 1383.5],
        [259, 1396.5],
        [253.5, 1408],
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[1],
      chapter: wordsOfRadianceChapterList[36],
      confirmed: false,
      coordinates: [
        [235.5, 1006.5],
        [220, 1028],
        [213, 1049],
        [211, 1072],
        [210, 1104],
        [210, 1125],
        [211, 1142],
        [214, 1163],
        [219, 1188],
        [223, 1214],
        [226, 1232],
        [228, 1252],
        [225, 1266],
        [221, 1285],
        [225, 1298],
        [237, 1311],
        [242, 1330],
        [245, 1350],
        [245, 1369],
        [245, 1381],
        [248, 1397],
        [253.5, 1408],
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[1],
      chapter: wordsOfRadianceChapterList[68],
      confirmed: false,
      coordinates: [
        [253.5, 1408],
        [252, 1393],
        [257, 1375],
        [264, 1350],
        [271, 1339],
        [282, 1324],
        [292, 1302],
        [303, 1279],
        [315, 1253],
        [322, 1230],
        [330, 1195],
        [327, 1172],
        [327, 1150],
        [325, 1136],
        [327, 1124],
        [332, 1113],
        [332, 1100],
        [330, 1088],
        [325, 1065],
        [325, 1044],
        [326, 1017],
        [329, 996],
        [334, 978],
        [334, 964],
        [335, 943],
        [338, 922],
        [342, 902],
        [348, 878],
        [356, 854],
        [359, 839],
        [361, 821],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Taravangian],
      book: books[1],
      chapter: wordsOfRadianceChapterList[89],
      confirmed: true,
      coordinates: [
        [235.5, 1006.5],
        [247.5, 997],
        [263, 995.5],
        [276.5, 1001.5],
        [281.5, 1016.5],
        [285, 1036],
        [296, 1056.5],
        [306.5, 1067],
        [312, 1070],
        [326, 1076.5]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[1],
      chapter: wordsOfRadianceChapterList[89],
      confirmed: false,
      coordinates: [
        [362, 802],
        [350, 815],
        [338, 834],
        [332, 860],
        [327, 881],
        [320, 910],
        [318, 933],
        [321, 959],
        [324, 975],
        [323, 989],
        [319, 1012],
        [319, 1039],
        [323, 1063],
        [326, 1076.5]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[1],
      chapter: wordsOfRadianceChapterList[100],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[1],
      chapter: wordsOfRadianceChapterList[100],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[1],
      chapter: wordsOfRadianceChapterList[100],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[1],
      chapter: wordsOfRadianceChapterList[101],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[1],
      chapter: wordsOfRadianceChapterList[101],
      confirmed: true,
      coordinates: [
        [253.5, 1408],
        [251.5, 1400],
        [251, 1392],
        [251.5, 1385.5],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[1],
      chapter: wordsOfRadianceChapterList[104],
      confirmed: false,
      coordinates: [
        [92.5, 1316.5],
        [111.5, 1316.5],
        [123.5, 1314.5],
        [130.5, 1311.5]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[1],
      chapter: wordsOfRadianceChapterList[98],
      confirmed: false,
      coordinates: [
        [326, 1076.5],
        [319, 1109.5],
        [324, 1119.5],
        [327, 1135],
        [328.5, 1160],
        [322, 1179],
        [315.5, 1194.5],
        [307, 1207.5],
        [297.5, 1224.5],
        [286.5, 1242],
        [275, 1254.5],
        [268.5, 1280.5],
        [261.5, 1307],
        [258, 1333.5],
        [253, 1365],
        [252, 1385.5],
        [253.5, 1408]
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[2],
      chapter: edgedancerChapterList[1],
      confirmed: true,
      coordinates: [
        [332.5, 643],
        [326, 626.5]
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[2],
      chapter: edgedancerChapterList[2],
      confirmed: true,
      coordinates: [
        [326, 626.5],
        [318, 611]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[2],
      chapter: edgedancerChapterList[9],
      confirmed: false,
      coordinates: [
        [253.5, 1408],
        [256, 1388],
        [269, 1364],
        [277, 1336],
        [287, 1308],
        [292, 1271],
        [301, 1238],
        [308, 1206],
        [319, 1182],
        [329, 1156],
        [338, 1123],
        [340, 1100],
        [348, 1059],
        [348, 1022],
        [347, 980],
        [343, 942],
        [334, 907],
        [328, 874],
        [310, 849],
        [299, 830],
        [288, 811],
        [276, 791],
        [271, 773],
        [271, 752],
        [273, 723],
        [281, 690],
        [290, 658],
        [300, 636],
        [308, 621],
        [318, 611],
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[2],
      chapter: edgedancerChapterList[20],
      confirmed: true,
      coordinates: [
        [318, 611],
        [326, 626.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[5],
      confirmed: true,
      coordinates: [
        [362, 802],
        [383, 819],
        [401, 841],
        [434, 875],
        [451, 906],
        [474, 940],
        [501, 972],
        [531, 1008],
        [548, 1045],
        [579, 1087],
        [599, 1134],
        [619, 1172],
        [625, 1209],
        [636, 1259],
        [639, 1292],
        [638, 1324],
        [635, 1336],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[10],
      confirmed: true,
      coordinates: [
        [628.5, 1351.5],
        [625, 1321]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[11],
      confirmed: false,
      coordinates: [
        [449, 1325],
        [392, 1337.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[17],
      confirmed: true,
      coordinates: [
        [625, 1321],
        [615.5, 1317.5],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[19],
      confirmed: false,
      coordinates: [
        [392, 1337.5],
        [402.5, 1351],
        [417.5, 1359],
        [479, 1379.5],
        [501.5, 1371],
        [525.5, 1351.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[20],
      confirmed: true,
      coordinates: [
        [615.5, 1317.5],
        [611.5, 1316],
        [607, 1315.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[23],
      confirmed: true,
      coordinates: [
        [607, 1315.5],
        [601.5, 1315.5],
        [596, 1315.5],
        [589, 1316],
      ]
    },
    {
      character: characters[CharacterIndex.Taravangian],
      book: books[3],
      chapter: oathbringerChapterList[24],
      confirmed: true,
      coordinates: [
        [235.5, 1006.5],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[26],
      confirmed: false,
      coordinates: [
        [525.5, 1351.5],
        [552.5, 1328.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[31],
      confirmed: true,
      coordinates: [
        [589, 1316],
        [583, 1316],
        [570.5, 1319],
        [566.5, 1320],
        [566.5, 1320.5],
        [544, 1270],
        [521, 1201],
        [497, 1129],
        // [471, 1067],
        // [450, 1014],
        // [427, 951],
        // [403, 890],
        // [382, 842],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[32],
      confirmed: true,
      coordinates: [
        [497, 1129],
        [471, 1067],
        [450, 1014],
        [427, 951],
        [403, 890],
        [382, 842],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[3],
      chapter: oathbringerChapterList[32],
      confirmed: false,
      coordinates: [
        [130.5, 1311.5],
        [150, 1300],
        [166, 1300],
        [186, 1306],
        [213, 1301],
        [230, 1280],
        [248, 1264],
        [264, 1249],
        [278, 1231],
        [287, 1217],
        [298, 1196],
        [312, 1166],
        [319, 1150],
        [325, 1130],
        [326, 1104],
        [324, 1093],
        [326, 1058],
        [327, 1020],
        [329, 982],
        [330, 956],
        [331, 922],
        [336, 895],
        [341, 870],
        [344, 848],
        [350, 831],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[39],
      confirmed: false,
      coordinates: [
        [552.5, 1328.5],
        [513, 1363.5]
      ]
    },

    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[40],
      confirmed: true,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[3],
      chapter: oathbringerChapterList[40],
      confirmed: true,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[42],
      confirmed: true,
      coordinates: [
        [259.5, 1423],
        [362, 802],
      ]
    },
  ]
};

// done up to oathbringer ch 42