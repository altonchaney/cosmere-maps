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
        4: [
          84, 85, 86, 87, 88, 89, 90, 91, 93,
      ].map(i => oathbringerChapterList[i])
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
        4: [
          39, 52, 66, 67, 68, 69, 73, 74, 75, 76,
          78, 79, 80, 83, 84, 85, 86, 87, 88, 89,
          90, 91, 93, 98, 99, 105, 116, 135, 137
        ].map(i => oathbringerChapterList[i]),
        6: [
          11, 14, 21, 47
        ].map(i => rhythmOfWarChapterList[i])
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
        ].map(i => theWayOfKingsChapterList[i]),
        4: [
          136
        ].map(i => oathbringerChapterList[i])
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
          35, 63, 94
        ].map(i => oathbringerChapterList[i]),
        6: [
          2, 4, 5, 6, 7, 8, 9
        ].map(i => rhythmOfWarChapterList[i])
      },
      description: `The Shattered Plains are a region of Roshar located on the border of the Frostlands and Unclaimed Hills, in the former territory of the Silver Kingdom of Natanatan. They are named for their topography, consisting of a huge number of plateaus of various sizes surrounded on all sides by deep chasms.`,
      confirmed: true
    },
    {
      title: 'Narak',
      coordinates: [259.5, 1429],
      type: 'city',
      image: 'https://coppermind.net/w/images/Narak_by_Connor_Chamberlain.jpg',
      appearances: {
        2: [
          13, 16, 39, 42, 69, 88, 97, 98, 99,
          100, 101
        ].map(i => wordsOfRadianceChapterList[i]),
        4: [
          49, 58
        ].map(i => oathbringerChapterList[i]),
        6: [
          9, 10, 18
        ].map(i => rhythmOfWarChapterList[i])
      },
      description: `Narak, also known historically as Stormseat, was the capital city of the historic Silver Kingdom of Natanatan on Roshar. During the War of Reckoning it serves as the home of the listeners.`,
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
        ].map(i => oathbringerChapterList[i]),
        6: [
          1, 2, 3, 5, 6, 7, 8
        ].map(i => rhythmOfWarChapterList[i])
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
          89, 111
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
        4: [61].map(i => oathbringerChapterList[i]),
        5: [13, 14, 15, 16, 17, 18, 19].map(i => dawnshardChapterList[i])
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
        ].map(i => edgedancerChapterList[i]),
        4: [
          71, 
        ].map(i => oathbringerChapterList[i])
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
          36, 37, 38, 41, 42, 43, 44, 45, 47,
          49, 50, 53, 54, 56, 59, 60, 62, 64,
          71, 92, 95, 107, 111, 114, 115, 118,
          120, 122, 127, 129, 132, 133, 136
        ].map(i => oathbringerChapterList[i]),
        5: [
          2, 3
        ].map(i => dawnshardChapterList[i]),
        6: [
          12, 13, 15, 16, 17, 19, 20, 22, 23,
          24, 25, 26, 28, 30, 31, 36, 40, 41,
          42, 43, 44, 45, 46, 48
        ].map(i => rhythmOfWarChapterList[i])
      },
      description: `Urithiru is a tower-city on Roshar that functioned as the home of the Knights Radiant and the central point of the Silver Kingdoms during the Heraldic Epochs.`,
      confirmed: true
    },
    {
      title: 'Thaylen City',
      coordinates: [138, 1049],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Thaylen_City_by_Connor_Chamberlain.jpg/400px-Thaylen_City_by_Connor_Chamberlain.jpg',
      appearances: {
        4: [
          64, 65, 122, 124, 126, 129, 130, 131,
          132, 133, 134, 135
        ].map(i => oathbringerChapterList[i]),
        5: [
          1, 20
        ].map(i => dawnshardChapterList[i])
      },
      description: `Thaylen City is located on the northwestern coast of the largest of the islands forming Thaylenah. It sits on the shores of Longbrow's Straits, a strip of ocean dividing Thaylenah from the Rosharan mainland. The city was built inside a massive natural lait to protect it from highstorms.`,
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
          11, 77, 81, 82
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
          31, 48
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
    {
      title: 'Herdaz',
      coordinates: [663, 1259],
      type: 'region',
      image: 'https://coppermind.net/w/images/thumb/Rathalas_by_Connor_Chamberlain.jpg/400px-Rathalas_by_Connor_Chamberlain.jpg',
      appearances: {
        4: [
          97
        ].map(i => oathbringerChapterList[i])
      },
      description: `Herdaz is a coastal nation in the north-east of Roshar, covering approximately one million square kilometres of land. Most of its jagged coastline lies on the Reshi Sea, while a small part of it faces Steamwater Ocean and the Bay of Elibath.`,
      coppermindLink: 'Herdaz',
      confirmed: true
    },
    {
      title: 'Sea of Lost Lights',
      coordinates: [469, 1237],
      type: 'region',
      image: 'https://coppermind.net/w/images/thumb/Sea_of_Lost_Lights.jpg/400px-Sea_of_Lost_Lights.jpg',
      appearances: {
        4: [
          93, 100, 102, 104
        ].map(i => oathbringerChapterList[i])
      },
      coppermindLink: 'Sea_of_Lost_Lights',
      description: `The Sea of Lost Lights lies in the region of Shadesmar corresponding to the Physical nations of Alethkar, Jah Keved, and Herdaz, as well as the Frostlands, Unclaimed Hills, and Thaylenah.`,
      confirmed: true
    },
    {
      title: 'Skybreaker Fortress',
      coordinates: [538, 797],
      type: 'point of interest',
      appearances: {
        4: [
          101, 103, 109
        ].map(i => oathbringerChapterList[i])
      },
      coppermindLink: 'Order_of_Skybreakers',
      description: `A small fortress in Marabethia that overlooks the Purelake. Hopefuls are brought to the fortress for testing, and squires and Masters reside there while training (unless they are away on a mission).`,
      confirmed: true
    },
    {
      title: `Riino's Lighthouse`,
      coordinates: [493.5, 1346.5],
      type: 'point of interest',
      image: 'https://coppermind.net/w/images/thumb/Shadesmar_Travel_by_LittleGreyDragon.jpeg/400px-Shadesmar_Travel_by_LittleGreyDragon.jpeg',
      appearances: {
        4: [
          106, 108
        ].map(i => oathbringerChapterList[i])
      },
      coppermindLink: 'Riino%27s_lighthouse',
      description: `The lighthouse functions as a waypoint in which passing ships can restock their supplies, as well as signalling that there is land nearby. The dwelling is also used by Riino to conduct readings of the future for passing travellers.`,
      confirmed: false
    },
    {
      title: `Celebrant`,
      coordinates: [355, 1298],
      type: 'city',
      image: 'https://coppermind.net/w/images/Celebrant.png',
      appearances: {
        4: [
          112, 113
        ].map(i => oathbringerChapterList[i])
      },
      coppermindLink: 'Celebrant',
      description: `Celebrant is a city in the Sea of Lost Lights in Roshar's subastral of the Cognitive Realm. Celebrant is a prominent population center and major trading port.`,
      confirmed: true
    },
    {
      title: `Marat`,
      coordinates: [235, 791],
      type: 'region',
      appearances: {
        4: [
          117
        ].map(i => oathbringerChapterList[i])
      },
      coppermindLink: 'Marat',
      description: `Marat is a small kingdom in southern Roshar. It is part of the Makabaki region.`,
      confirmed: true
    },
    {
      title: `The Valley`,
      coordinates: [333.5, 797.5],
      type: 'point of interest',
      appearances: {
        4: [
          128
        ].map(i => oathbringerChapterList[i])
      },
      coppermindLink: 'Valley',
      description: `The Valley is the home of the Nightwatcher on Roshar. It is located in the mountains of Ur, near Urithiru itself. The area nearby is devoid of rockbuds, and the ground is covered in wrinkles about two or three inches deep.`,
      confirmed: true
    },
    {
      title: 'Sea of Souls',
      coordinates: [367, 863],
      type: 'region',
      image: 'https://coppermind.net/w/images/Sea_of_Souls.jpg',
      appearances: {
        6: [
          25
        ].map(i => rhythmOfWarChapterList[i])
      },
      coppermindLink: 'Sea_of_Souls',
      description: `The Sea of Souls is a large sea on Roshar's subastral of the Cognitive Realm. The origin of its name is unknown. It contains the honorspren capital of Lasting Integrity.`,
      confirmed: true
    },
    {
      title: 'Nameless',
      coordinates: [214, 738.5],
      type: 'town',
      image: 'https://coppermind.net/w/images/Nameless_Sea_of_Souls_map_crop.jpg',
      appearances: {
        6: [
          32, 33
        ].map(i => rhythmOfWarChapterList[i])
      },
      coppermindLink: 'Nameless',
      description: `The town is located in the southern portion of the Sea of Souls in Shadesmar. It sits on the edge of the Radiant Depths and is near the peninsula that leads to Abiding Light. Nameless resides on free lands that are not owned or controlled by the Fused or the honorspren. The town sits on a barren obsidian field that is sparse in vegetation. A small cluster of crystalline plants can occasionally be seen.`,
      confirmed: true
    },
    {
      title: 'Lasting Integrity',
      coordinates: [198.5, 629],
      type: 'city',
      image: 'https://coppermind.net/w/images/thumb/Lasting_Integrity_Interior.jpeg/400px-Lasting_Integrity_Interior.jpeg',
      appearances: {
        6: [
          39
        ].map(i => rhythmOfWarChapterList[i])
      },
      coppermindLink: 'Lasting_Integrity',
      description: `Lasting Integrity is the honorspren capital in Shadesmar. The fortress is located in the southern section of the Sea of Souls, nearby to the Nexus of Imagination, the Expanse of Vibrance, and Brilliance Eternal. There is a known caravan path that runs from Nameless, past Lasting Integrity, and onwards towards the Expanse of Vibrance.`,
      confirmed: true
    },
    {
      title: 'Emul',
      coordinates: [310, 697.5],
      type: 'region',
      appearances: {
        6: [
          22, 49
        ].map(i => rhythmOfWarChapterList[i])
      },
      coppermindLink: 'Emul',
      description: `Emul is a Makabaki kingdom located in southwestern Roshar during the Era of Solitude. The citizens of Emul are referred to as Emuli. Traditionally a rather independent kingdom, the Desolation and war with Tukar has greatly weakened Emul and left it dependent on others for aid.`,
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
    {
      character: characters[CharacterIndex.Moash],
      book: books[3],
      chapter: oathbringerChapterList[48],
      confirmed: true,
      coordinates: [
        [251.5, 1385.5],
        [266, 1370],
        [282, 1364],
        [301, 1365],
        [318, 1365],
        [339, 1370],
        [363, 1370],
        [388, 1373],
        [407, 1377],
        [428, 1372],
        [446, 1369],
        [468, 1358],
        [482, 1351],
        [496, 1342],
        [524, 1324],
        [547, 1324],
        [566, 1321],
        [566.5, 1320.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[49],
      confirmed: true,
      coordinates: [
        [362, 802],
        [259.5, 1429]
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[3],
      chapter: oathbringerChapterList[51],
      confirmed: true,
      coordinates: [
        [566.5, 1320.5],
        [558, 1328],
        // [553, 1333],
        // [547, 1338],
        // [542, 1342.5],
        // [537, 1347.5],
        // [529.5, 1353],
        // [522.5, 1357],
        // [520, 1358.5],
        // [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[53],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[3],
      chapter: oathbringerChapterList[54],
      confirmed: true,
      coordinates: [
        // [566.5, 1320.5],
        [558, 1328],
        [553, 1333],
        // [547, 1338],
        // [542, 1342.5],
        // [537, 1347.5],
        // [529.5, 1353],
        // [522.5, 1357],
        // [520, 1358.5],
        // [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[55],
      confirmed: false,
      coordinates: [
        [513, 1363.5],
        [534, 1362],
        [557, 1363],
        [587, 1359],
        [615, 1342],
        [643, 1314],
        [644, 1284],
        [637, 1267],
        [628, 1250],
        [605, 1235],
        [575, 1218],
        [535, 1203],
        [504, 1189],
        [482, 1180],
        [452, 1176],
        [424, 1172],
        [401, 1166],
        [380, 1172],
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[3],
      chapter: oathbringerChapterList[57],
      confirmed: true,
      coordinates: [
        // [566.5, 1320.5],
        // [558, 1328],
        [553, 1333],
        [547, 1338],
        [542, 1342.5],
        [537, 1347.5],
        // [529.5, 1353],
        // [522.5, 1357],
        // [520, 1358.5],
        // [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[58],
      confirmed: true,
      coordinates: [
        [362, 802],
        [259.5, 1429],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: false,
      coordinates: [
        [259.5, 1429],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: false,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: false,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Taravangian],
      book: books[3],
      chapter: oathbringerChapterList[64],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[66],
      confirmed: false,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[66],
      confirmed: false,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[66],
      confirmed: false,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[66],
      confirmed: true,
      coordinates: [
        [259.5, 1423],
        [271, 1414],
        [280, 1405.5],
        [290.5, 1397.5],
        [303.5, 1390.5],
        [315, 1384],
        [345.5, 1372.5],
        [367, 1370],
        [390.5, 1368],
        [413, 1369.5],
        [430, 1372],
        [453.5, 1376],
        [470, 1373.5],
        [479.5, 1371],
        [498.5, 1367.5],
        [513, 1363.5],
        [498.5, 1367.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[66],
      confirmed: true,
      coordinates: [
        [259.5, 1423],
        [271, 1414],
        [280, 1405.5],
        [290.5, 1397.5],
        [303.5, 1390.5],
        [315, 1384],
        [345.5, 1372.5],
        [367, 1370],
        [390.5, 1368],
        [413, 1369.5],
        [430, 1372],
        [453.5, 1376],
        [470, 1373.5],
        [479.5, 1371],
        [498.5, 1367.5],
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[66],
      confirmed: true,
      coordinates: [
        [259.5, 1423],
        [271, 1414],
        [280, 1405.5],
        [290.5, 1397.5],
        [303.5, 1390.5],
        [315, 1384],
        [345.5, 1372.5],
        [367, 1370],
        [390.5, 1368],
        [413, 1369.5],
        [430, 1372],
        [453.5, 1376],
        [470, 1373.5],
        [479.5, 1371],
        [498.5, 1367.5],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[67],
      confirmed: true,
      coordinates: [
        [498.5, 1367.5],
        [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[67],
      confirmed: true,
      coordinates: [
        [498.5, 1367.5],
        [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[67],
      confirmed: true,
      coordinates: [
        [498.5, 1367.5],
        [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[70],
      confirmed: false,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[3],
      chapter: oathbringerChapterList[70],
      confirmed: false,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[71],
      confirmed: true,
      coordinates: [
        [362, 802],
        [332.5, 643],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[72],
      confirmed: false,
      coordinates: [
        [380, 1172],
        [369, 1162],
        [372, 1139.5],
        [379.5, 1116],
        [399.5, 1104],
        [419.5, 1112],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[77],
      confirmed: false,
      coordinates: [
        [419.5, 1112],
        [408, 1117],
        [404.5, 1125],
        [399, 1140],
        [398, 1157.5],
        [395, 1177.5],
        [394.5, 1200],
        [395, 1219],
        [395, 1234.5],
        [395, 1255],
        [395, 1272],
        [392, 1284.5],
        [391.5, 1292.5],
        [390.5, 1307.5],
        [389.5, 1321],
        [389.5, 1328.5],
        [392, 1337.5]
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[3],
      chapter: oathbringerChapterList[84],
      confirmed: true,
      coordinates: [
        // [566.5, 1320.5],
        // [558, 1328],
        // [553, 1333],
        // [547, 1338],
        // [542, 1342.5],
        [537, 1347.5],
        [529.5, 1353],
        [522.5, 1357],
        [520, 1358.5],
        [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Venli],
      book: books[3],
      chapter: oathbringerChapterList[96],
      confirmed: true,
      coordinates: [
        [259.5, 1423],
        [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[99],
      confirmed: false,
      coordinates: [
        [392, 1337.5],
        [513, 1363.5]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[3],
      chapter: oathbringerChapterList[101],
      confirmed: false,
      coordinates: [
        [318, 611],
        [338, 610],
        [369, 610],
        [403, 616],
        [429, 617],
        [459, 628],
        [490, 632],
        [513, 640],
        [536, 642],
        [551, 652],
        [557, 673],
        [555, 696],
        [552, 722],
        [556, 739],
        [559, 753],
        [562, 774],
        [551, 790],
        [538, 797],
      ]
    },

    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[106],
      confirmed: true,
      coordinates: [
        [513, 1363.5],
        [509.5, 1354.5],
        [506, 1352],
        [501, 1351],
        [493.5, 1346.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[106],
      confirmed: true,
      coordinates: [
        [513, 1363.5],
        [509.5, 1354.5],
        [506, 1352],
        [501, 1351],
        [493.5, 1346.5],
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[106],
      confirmed: true,
      coordinates: [
        [513, 1363.5],
        [509.5, 1354.5],
        [506, 1352],
        [501, 1351],
        [493.5, 1346.5],
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[3],
      chapter: oathbringerChapterList[107],
      confirmed: true,
      coordinates: [
        [332.5, 643],
        [327.5, 657],
        [325.5, 673.5],
        [330.5, 690.5],
        [335.5, 708.5],
        [341, 721],
        [349.5, 737.5],
        [356, 747],
        [363.5, 760],
        [363.5, 767.5],
        [363.5, 781.5],
        [362, 788.5],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[110],
      confirmed: true,
      coordinates: [
        [493.5, 1346.5],
        [488.5, 1341.5],
        [483, 1337],
        [479, 1331.5],
        [473.5, 1321.5],
        [470, 1310.5],
        [465.5, 1300.5],
        [460.5, 1290],
        [454, 1280.5],
        [450.5, 1276.5],
        // [441, 1275],
        // [432.5, 1274.5],
        // [423, 1275],
        // [413.5, 1281.5],
        // [406, 1286],
        // [401.5, 1293.5],
        // [393.5, 1295.5],
        // [384, 1295.5],
        // [375.5, 1296.5],
        // [366.5, 1297.5],
        // [355, 1298]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[110],
      confirmed: true,
      coordinates: [
        [493.5, 1346.5],
        [488.5, 1341.5],
        [483, 1337],
        [479, 1331.5],
        [473.5, 1321.5],
        [470, 1310.5],
        [465.5, 1300.5],
        [460.5, 1290],
        [454, 1280.5],
        [450.5, 1276.5],
        // [441, 1275],
        // [432.5, 1274.5],
        // [423, 1275],
        // [413.5, 1281.5],
        // [406, 1286],
        // [401.5, 1293.5],
        // [393.5, 1295.5],
        // [384, 1295.5],
        // [375.5, 1296.5],
        // [366.5, 1297.5],
        // [355, 1298]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[110],
      confirmed: true,
      coordinates: [
        [493.5, 1346.5],
        [488.5, 1341.5],
        [483, 1337],
        [479, 1331.5],
        [473.5, 1321.5],
        [470, 1310.5],
        [465.5, 1300.5],
        [460.5, 1290],
        [454, 1280.5],
        [450.5, 1276.5],
        // [441, 1275],
        // [432.5, 1274.5],
        // [423, 1275],
        // [413.5, 1281.5],
        // [406, 1286],
        // [401.5, 1293.5],
        // [393.5, 1295.5],
        // [384, 1295.5],
        // [375.5, 1296.5],
        // [366.5, 1297.5],
        // [355, 1298]
      ]
    },

    {
      character: characters[CharacterIndex.Navani],
      book: books[3],
      chapter: oathbringerChapterList[111],
      confirmed: true,
      coordinates: [
        [362, 802],
        [326, 1076.5],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[111],
      confirmed: true,
      coordinates: [
        [362, 802],
        [326, 1076.5],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Taravangian],
      book: books[3],
      chapter: oathbringerChapterList[111],
      confirmed: true,
      coordinates: [
        [362, 802],
        [326, 1076.5],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[112],
      confirmed: true,
      coordinates: [
        // [493.5, 1346.5],
        // [488.5, 1341.5],
        // [483, 1337],
        // [479, 1331.5],
        // [473.5, 1321.5],
        // [470, 1310.5],
        // [465.5, 1300.5],
        // [460.5, 1290],
        // [454, 1280.5],
        [450.5, 1276.5],
        [441, 1275],
        [432.5, 1274.5],
        [423, 1275],
        [413.5, 1281.5],
        [406, 1286],
        [401.5, 1293.5],
        [393.5, 1295.5],
        [384, 1295.5],
        [375.5, 1296.5],
        [366.5, 1297.5],
        [355, 1298]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[112],
      confirmed: true,
      coordinates: [
        // [493.5, 1346.5],
        // [488.5, 1341.5],
        // [483, 1337],
        // [479, 1331.5],
        // [473.5, 1321.5],
        // [470, 1310.5],
        // [465.5, 1300.5],
        // [460.5, 1290],
        // [454, 1280.5],
        [450.5, 1276.5],
        [441, 1275],
        [432.5, 1274.5],
        [423, 1275],
        [413.5, 1281.5],
        [406, 1286],
        [401.5, 1293.5],
        [393.5, 1295.5],
        [384, 1295.5],
        [375.5, 1296.5],
        [366.5, 1297.5],
        [355, 1298]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[112],
      confirmed: true,
      coordinates: [
        // [493.5, 1346.5],
        // [488.5, 1341.5],
        // [483, 1337],
        // [479, 1331.5],
        // [473.5, 1321.5],
        // [470, 1310.5],
        // [465.5, 1300.5],
        // [460.5, 1290],
        // [454, 1280.5],
        [450.5, 1276.5],
        [441, 1275],
        [432.5, 1274.5],
        [423, 1275],
        [413.5, 1281.5],
        [406, 1286],
        [401.5, 1293.5],
        [393.5, 1295.5],
        [384, 1295.5],
        [375.5, 1296.5],
        [366.5, 1297.5],
        [355, 1298]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[3],
      chapter: oathbringerChapterList[117],
      confirmed: false,
      coordinates: [
        [538, 797],
        [516, 784],
        [487, 767],
        [454, 762],
        [428, 752],
        [396, 748],
        [361, 747],
        [325, 749],
        [285, 762],
        [263, 775],
        [235, 791],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[119],
      confirmed: true,
      coordinates: [
        [355, 1298],
        [369.5, 1292.5],
        [377.5, 1285.5],
        [374, 1275],
        [357.5, 1264],
        [342, 1262],
        [321.5, 1257],
        [307.5, 1244],
        [297.5, 1235],
        [289, 1222.5],
        [277, 1217],
        [266.5, 1221.5],
        [257.5, 1227],
        [248.5, 1227.5],
        [241, 1224.5],
        [226.5, 1214.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[119],
      confirmed: true,
      coordinates: [
        [355, 1298],
        [369.5, 1292.5],
        [377.5, 1285.5],
        [374, 1275],
        [357.5, 1264],
        [342, 1262],
        [321.5, 1257],
        [307.5, 1244],
        [297.5, 1235],
        [289, 1222.5],
        [277, 1217],
        [266.5, 1221.5],
        [257.5, 1227],
        [248.5, 1227.5],
        [241, 1224.5],
        [226.5, 1214.5],
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[119],
      confirmed: true,
      coordinates: [
        [355, 1298],
        [369.5, 1292.5],
        [377.5, 1285.5],
        [374, 1275],
        [357.5, 1264],
        [342, 1262],
        [321.5, 1257],
        [307.5, 1244],
        [297.5, 1235],
        [289, 1222.5],
        [277, 1217],
        [266.5, 1221.5],
        [257.5, 1227],
        [248.5, 1227.5],
        [241, 1224.5],
        [226.5, 1214.5],
      ]
    },
    {
      character: characters[CharacterIndex.Venli],
      book: books[3],
      chapter: oathbringerChapterList[120],
      confirmed: false,
      coordinates: [
        [513, 1363.5],
        [519, 1335],
        [519, 1304],
        [513, 1277],
        [503, 1234],
        [486, 1204],
        [463, 1182],
        [430, 1171],
        [388, 1151],
        [378, 1117],
        [369, 1081],
        [353, 1058],
        [343, 1036],
        [331, 987],
        [330, 961],
        [321, 933],
        [294, 891],
        [273, 864],
        [250, 844],
        [214, 846],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[121],
      confirmed: true,
      coordinates: [
        [226.5, 1214.5],
        [219.5, 1205],
        [213.5, 1194.5],
        [208, 1177],
        [205, 1158.5],
        [201.5, 1134],
        [195.5, 1106.5],
        [188.5, 1084],
        [184.5, 1077.5],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[121],
      confirmed: true,
      coordinates: [
        [226.5, 1214.5],
        [219.5, 1205],
        [213.5, 1194.5],
        [208, 1177],
        [205, 1158.5],
        [201.5, 1134],
        [195.5, 1106.5],
        [188.5, 1084],
        [184.5, 1077.5],
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[121],
      confirmed: true,
      coordinates: [
        [226.5, 1214.5],
        [219.5, 1205],
        [213.5, 1194.5],
        [208, 1177],
        [205, 1158.5],
        [201.5, 1134],
        [195.5, 1106.5],
        [188.5, 1084],
        [184.5, 1077.5],
      ]
    },

    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[122],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[3],
      chapter: oathbringerChapterList[122],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[3],
      chapter: oathbringerChapterList[122],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Taravangian],
      book: books[3],
      chapter: oathbringerChapterList[122],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[3],
      chapter: oathbringerChapterList[122],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049]
      ]
    },

    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[123],
      confirmed: true,
      coordinates: [
        [184.5, 1077.5],
        [174.5, 1075],
        [162.5, 1070],
        [156, 1066],
        [149, 1059],
        [144, 1054],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[123],
      confirmed: true,
      coordinates: [
        [184.5, 1077.5],
        [174.5, 1075],
        [162.5, 1070],
        [156, 1066],
        [149, 1059],
        [144, 1054],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[123],
      confirmed: true,
      coordinates: [
        [184.5, 1077.5],
        [174.5, 1075],
        [162.5, 1070],
        [156, 1066],
        [149, 1059],
        [144, 1054],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[3],
      chapter: oathbringerChapterList[124],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[128],
      confirmed: false,
      coordinates: [
        [513, 1363.5],
        [520, 1322],
        [519, 1281],
        [508, 1241],
        [493, 1204],
        [474, 1186],
        [444, 1180],
        [416, 1176],
        [388, 1150],
        [374, 1106],
        [367, 1079],
        [355, 1055],
        [344, 1013],
        [345, 969],
        [339, 923],
        [336, 876],
        [338, 842],
        [338, 822],
        [333.5, 797.5]
      ]
    },
    {
      character: characters[CharacterIndex.Venli],
      book: books[3],
      chapter: oathbringerChapterList[129],
      confirmed: true,
      coordinates: [
        [214, 846],
        [210, 855],
        [209.5, 865.5],
        [207.5, 882.5],
        [206, 897.5],
        [203, 912],
        [200, 927],
        [194.5, 945.5],
        [187.5, 969],
        [181.5, 983],
        [175.5, 993.5],
        [169, 1012],
        [164, 1026],
        [161, 1038],
        [157.5, 1045.5],
        [151, 1050],
        [145.5, 1050],
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[3],
      chapter: oathbringerChapterList[130],
      confirmed: true,
      coordinates: [
        [362, 802],
        [345, 806.5],
        [334.5, 810.5],
        [327.5, 821.5],
        [323, 833],
        [320, 849],
        [317.5, 872.5],
        [315.5, 884.5],
        [310, 907],
        [307, 922.5],
        [305.5, 937],
        [299, 948],
        [283, 959],
        [266.5, 967.5],
        [249, 969.5],
        [232.5, 974],
        [215, 981],
        [204, 989.5],
        [193, 1003],
        [185, 1021.5],
        [177, 1035.5],
        [162.5, 1046.5],
        [153, 1050.5],
        [146, 1050.5],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[3],
      chapter: oathbringerChapterList[130],
      confirmed: true,
      coordinates: [
        [225, 796.5],
        [212, 808.5],
        [200.5, 836],
        [195, 861],
        [185, 892],
        [175.5, 923],
        [171.5, 945.5],
        [162, 986.5],
        [153.5, 1013],
        [143, 1035],
        [138, 1049]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[3],
      chapter: oathbringerChapterList[134],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: false,
      coordinates: [
        [138, 1049],
        [160, 1065],
        [194, 1082],
        [221, 1105],
        [251, 1116],
        [283, 1135],
        [301, 1155],
        [322, 1178],
        [346, 1206],
        [373, 1239],
        [386, 1259],
        [394, 1284],
        [405, 1302],
        [417, 1317],
      ]
    },
    {
      character: characters[CharacterIndex.Taravangian],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [159, 1055],
        [173, 1044],
        [181, 1020],
        [189, 1001],
        [205, 991],
        [225, 988],
        [238, 989],
        [235.5, 1006.5]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Szeth],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[3],
      chapter: oathbringerChapterList[136],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[2],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[4],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[4],
      confirmed: true,
      coordinates: [
        [362, 802],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[5],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [142, 1027],
        [142, 1010],
        [146, 991],
        [159, 982],
        [178, 970],
        [191, 949],
        [198, 917],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[5],
      confirmed: true,
      coordinates: [
        [138, 1049],
        [142, 1027],
        [142, 1010],
        [146, 991],
        [159, 982],
        [178, 970],
        [191, 949],
        [198, 917],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[6],
      confirmed: true,
      coordinates: [
        [198, 917],

        [196, 893],
        [194, 872],
        [188, 843],
        [180, 804],
        [177, 779],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[6],
      confirmed: true,
      coordinates: [
        [198, 917],

        [196, 893],
        [194, 872],
        [188, 843],
        [180, 804],
        [177, 779],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[7],
      confirmed: true,
      coordinates: [
        [177, 779],

        [177, 746],
        [177, 717],
        [177, 678],
        [177, 650],
        [174, 614],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[7],
      confirmed: true,
      coordinates: [
        [177, 779],

        [177, 746],
        [177, 717],
        [177, 678],
        [177, 650],
        [174, 614],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[8],
      confirmed: true,
      coordinates: [
        [174, 614],

        [173, 574],
        [173, 541],
        [174, 507],
        [176, 474],
        [177, 435],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[8],
      confirmed: true,
      coordinates: [
        [174, 614],

        [173, 574],
        [173, 541],
        [174, 507],
        [176, 474],
        [177, 435],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[9],
      confirmed: true,
      coordinates: [
        [177, 435],

        [184, 395],
        [189, 371],
        [194, 346],
        [199, 330],
        [214, 313],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[9],
      confirmed: true,
      coordinates: [
        [177, 435],

        [184, 395],
        [189, 371],
        [194, 346],
        [199, 330],
        [214, 313],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[10],
      confirmed: true,
      coordinates: [
        [214, 313],

        [230, 311],
        [265, 304],
        [289, 301],
        [316, 294],
        [339, 287],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[10],
      confirmed: true,
      coordinates: [
        [214, 313],

        [230, 311],
        [265, 304],
        [289, 301],
        [316, 294],
        [339, 287],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[11],
      confirmed: true,
      coordinates: [
        [339, 287],

        [359, 277],
        [382, 266],
        [399, 261],
        [415, 251],
        [437, 235],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[11],
      confirmed: true,
      coordinates: [
        [339, 287],

        [359, 277],
        [382, 266],
        [399, 261],
        [415, 251],
        [437, 235],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[12],
      confirmed: true,
      coordinates: [
        [437, 235],

        [458, 219],
        [473, 208],
        [483, 199],
        [496, 186],
        [500, 171],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[12],
      confirmed: true,
      coordinates: [
        [437, 235],

        [458, 219],
        [473, 208],
        [483, 199],
        [496, 186],
        [500, 171],
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[13],
      confirmed: true,
      coordinates: [
        [500, 171],
        [501, 157],
        [501, 139],
        [501, 129],
        [499, 120],
        [498.5, 104.5]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[13],
      confirmed: true,
      coordinates: [
        [500, 171],
        [501, 157],
        [501, 139],
        [501, 129],
        [499, 120],
        [498.5, 104.5]
      ]
    },
    {
      character: characters[CharacterIndex.Rysn],
      book: books[4],
      chapter: dawnshardChapterList[20],
      confirmed: true,
      coordinates: [
        [498.5, 104.5],
        [498, 125],
        [501, 168],
        [498, 206],
        [490, 237],
        [465, 258],
        [429, 280],
        [392, 302],
        [357, 317],
        [314, 330],
        [287, 334],
        [263, 350],
        [254, 370],
        [236, 402],
        [224, 431],
        [206, 434],
        [188, 442],
        [179, 465],
        [173, 508],
        [173, 550],
        [173, 580],
        [173, 614],
        [170, 643],
        [178, 693],
        [180, 725],
        [178, 759],
        [173, 787],
        [163, 819],
        [149, 867],
        [139, 897],
        [137, 922],
        [139, 940],
        [146, 955],
        [153, 966],
        [152, 985],
        [145, 1003],
        [141, 1017],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[20],
      confirmed: true,
      coordinates: [
        [498.5, 104.5],
        [498, 125],
        [501, 168],
        [498, 206],
        [490, 237],
        [465, 258],
        [429, 280],
        [392, 302],
        [357, 317],
        [314, 330],
        [287, 334],
        [263, 350],
        [254, 370],
        [236, 402],
        [224, 431],
        [206, 434],
        [188, 442],
        [179, 465],
        [173, 508],
        [173, 550],
        [173, 580],
        [173, 614],
        [170, 643],
        [178, 693],
        [180, 725],
        [178, 759],
        [173, 787],
        [163, 819],
        [149, 867],
        [139, 897],
        [137, 922],
        [139, 940],
        [146, 955],
        [153, 966],
        [152, 985],
        [145, 1003],
        [141, 1017],
        [138, 1049],
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[4],
      chapter: dawnshardChapterList[20],
      confirmed: false,
      coordinates: [
        [138, 1049],
        [362, 802],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[5],
      chapter: rhythmOfWarChapterList[1],
      confirmed: false,
      coordinates: [
        [417, 1317],
        [424.5, 1314],
        [440, 1309.5],
        [469, 1302],
        [491, 1298],
        [523.5, 1294.5],
        [555, 1288],
        [593, 1285],
        [630.5, 1284.5],
        [649, 1289.5],
        [664, 1306.5],
        [669.5, 1336],
        [657.5, 1345.5],
        [648, 1348],
        [639, 1349.5],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[2],
      confirmed: false,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[5],
      chapter: rhythmOfWarChapterList[3],
      confirmed: true,
      coordinates: [
        [362, 802],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[5],
      chapter: rhythmOfWarChapterList[3],
      confirmed: true,
      coordinates: [
        [362, 802],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[5],
      chapter: rhythmOfWarChapterList[3],
      confirmed: true,
      coordinates: [
        [362, 802],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[5],
      chapter: rhythmOfWarChapterList[3],
      confirmed: true,
      coordinates: [
        [362, 802],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[6],
      confirmed: false,
      coordinates: [
        [362, 802],
        [259.5, 1423]
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[5],
      chapter: rhythmOfWarChapterList[6],
      confirmed: false,
      coordinates: [
        [513, 1363.5],
        [526.5, 1368],
        [535, 1367.5],
        [553, 1369.5],
        [564, 1374.5],
        [582, 1374.5],
        [602.5, 1369],
        [617, 1362],
        [622, 1358.5],
        [628.5, 1351.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[5],
      chapter: rhythmOfWarChapterList[9],
      confirmed: true,
      coordinates: [
        [628.5, 1351.5],
        [609, 1372],
        [589, 1386],
        [556, 1401],
        [517, 1409],
        [478, 1414],
        [437, 1418],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[5],
      chapter: rhythmOfWarChapterList[9],
      confirmed: true,
      coordinates: [
        [628.5, 1351.5],
        [609, 1372],
        [589, 1386],
        [556, 1401],
        [517, 1409],
        [478, 1414],
        [437, 1418],
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[5],
      chapter: rhythmOfWarChapterList[9],
      confirmed: true,
      coordinates: [
        [628.5, 1351.5],
        [609, 1372],
        [589, 1386],
        [556, 1401],
        [517, 1409],
        [478, 1414],
        [437, 1418],
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[5],
      chapter: rhythmOfWarChapterList[9],
      confirmed: true,
      coordinates: [
        [628.5, 1351.5],
        [609, 1372],
        [589, 1386],
        [556, 1401],
        [517, 1409],
        [478, 1414],
        [437, 1418],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[5],
      chapter: rhythmOfWarChapterList[10],
      confirmed: true,
      coordinates: [
        [437, 1418],
        [403, 1421],
        [366, 1425],
        [334, 1425],
        [309, 1425],
        [282, 1424],
        [259.5, 1429]
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[5],
      chapter: rhythmOfWarChapterList[10],
      confirmed: true,
      coordinates: [
        [437, 1418],
        [403, 1421],
        [366, 1425],
        [334, 1425],
        [309, 1425],
        [282, 1424],
        [259.5, 1429]
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[5],
      chapter: rhythmOfWarChapterList[10],
      confirmed: true,
      coordinates: [
        [437, 1418],
        [403, 1421],
        [366, 1425],
        [334, 1425],
        [309, 1425],
        [282, 1424],
        [259.5, 1429]
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[5],
      chapter: rhythmOfWarChapterList[10],
      confirmed: true,
      coordinates: [
        [437, 1418],
        [403, 1421],
        [366, 1425],
        [334, 1425],
        [309, 1425],
        [282, 1424],
        [259.5, 1429]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[5],
      chapter: rhythmOfWarChapterList[10],
      confirmed: true,
      coordinates: [
        [437, 1418],
        [403, 1421],
        [366, 1425],
        [334, 1425],
        [309, 1425],
        [282, 1424],
        [259.5, 1429]
      ]
    },
    {
      character: characters[CharacterIndex.Venli],
      book: books[5],
      chapter: rhythmOfWarChapterList[11],
      confirmed: false,
      coordinates: [
        [145.5, 1050],
        [156, 1059],
        [186, 1082],
        [204, 1113],
        [234, 1143],
        [245, 1170],
        [271, 1200],
        [301, 1229],
        [333, 1256],
        [366, 1278],
        [391, 1302],
        [420, 1324],
        [446, 1343],
        [471, 1352],
        [490, 1359],
        [513, 1363.5]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[5],
      chapter: rhythmOfWarChapterList[12],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[12],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[12],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Lopen],
      book: books[5],
      chapter: rhythmOfWarChapterList[12],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Moash],
      book: books[5],
      chapter: rhythmOfWarChapterList[14],
      confirmed: false,
      coordinates: [
        [628.5, 1351.5],
        [622, 1358.5],
        [617, 1362],
        [602.5, 1369],
        [582, 1374.5],
        [564, 1374.5],
        [553, 1369.5],
        [535, 1367.5],
        [526.5, 1368],
        [513, 1363.5],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[5],
      chapter: rhythmOfWarChapterList[15],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Navani],
      book: books[5],
      chapter: rhythmOfWarChapterList[15],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Lift],
      book: books[5],
      chapter: rhythmOfWarChapterList[15],
      confirmed: true,
      coordinates: [
        [259.5, 1429],
        [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[5],
      chapter: rhythmOfWarChapterList[18],
      confirmed: true,
      coordinates: [
        [362, 802],
        [259.5, 1429],
      ]
    },
    {
      character: characters[CharacterIndex.Kaladin],
      book: books[5],
      chapter: rhythmOfWarChapterList[20],
      confirmed: false,
      coordinates: [
        [259.5, 1429],
        [362, 802],
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[27],
      confirmed: true,
      coordinates: [
        [362, 802],
        [347.5, 791],
        [339.5, 785.5],
        [323.5, 775.5], // pt1
        // [310.5, 768],
        // [292.5, 760.5],
        // [279, 756],
        // [270, 752.5],
        // [260, 746.5], // pt2
        // [251.5, 741.5],
        // [237, 740.5],
        // [224, 739.5],
        // [214, 738.5], // nameless
        // [203.5, 734.5],
        // [198, 728.5],
        // [191.5, 717.5],
        // [188.5, 698.5],
        // [190, 683],
        // [189, 671.5],
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[27],
      confirmed: true,
      coordinates: [
        [362, 802],
        [347.5, 791],
        [339.5, 785.5],
        [323.5, 775.5], // pt1
        // [310.5, 768],
        // [292.5, 760.5],
        // [279, 756],
        // [270, 752.5],
        // [260, 746.5], // pt2
        // [251.5, 741.5],
        // [237, 740.5],
        // [224, 739.5],
        // [214, 738.5], // nameless
        // [203.5, 734.5],
        // [198, 728.5],
        // [191.5, 717.5],
        // [188.5, 698.5],
        // [190, 683],
        // [189, 671.5],
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[29],
      confirmed: true,
      coordinates: [
        [323.5, 775.5], // pt1
        [310.5, 768],
        [292.5, 760.5],
        [279, 756],
        [270, 752.5],
        [260, 746.5], // pt2
        // [251.5, 741.5],
        // [237, 740.5],
        // [224, 739.5],
        // [214, 738.5], // nameless
        // [203.5, 734.5],
        // [198, 728.5],
        // [191.5, 717.5],
        // [188.5, 698.5],
        // [190, 683],
        // [189, 671.5],
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[29],
      confirmed: true,
      coordinates: [
        [323.5, 775.5], // pt1
        [310.5, 768],
        [292.5, 760.5],
        [279, 756],
        [270, 752.5],
        [260, 746.5], // pt2
        // [251.5, 741.5],
        // [237, 740.5],
        // [224, 739.5],
        // [214, 738.5], // nameless
        // [203.5, 734.5],
        // [198, 728.5],
        // [191.5, 717.5],
        // [188.5, 698.5],
        // [190, 683],
        // [189, 671.5],
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[32],
      confirmed: true,
      coordinates: [
        [260, 746.5], // pt2
        [251.5, 741.5],
        [237, 740.5],
        [224, 739.5],
        [214, 738.5], // nameless
        // [203.5, 734.5],
        // [198, 728.5], // 35
        // [191.5, 717.5],
        // [188.5, 698.5], //37
        // [190, 683],
        // [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[32],
      confirmed: true,
      coordinates: [
        [260, 746.5], // pt2
        [251.5, 741.5],
        [237, 740.5],
        [224, 739.5],
        [214, 738.5], // nameless
        // [203.5, 734.5],
        // [198, 728.5], // 35
        // [191.5, 717.5],
        // [188.5, 698.5], //37
        // [190, 683],
        // [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[35],
      confirmed: true,
      coordinates: [
        [214, 738.5], // nameless
        [203.5, 734.5],
        [198, 728.5], // 35
        // [191.5, 717.5],
        // [188.5, 698.5], //37
        // [190, 683],
        // [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[35],
      confirmed: true,
      coordinates: [
        [214, 738.5], // nameless
        [203.5, 734.5],
        [198, 728.5], // 35
        // [191.5, 717.5],
        // [188.5, 698.5], //37
        // [190, 683],
        // [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[37],
      confirmed: true,
      coordinates: [
        [198, 728.5], // 35
        [191.5, 717.5],
        [188.5, 698.5], //37
        // [190, 683],
        // [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[37],
      confirmed: true,
      coordinates: [
        [198, 728.5], // 35
        [191.5, 717.5],
        [188.5, 698.5], //37
        // [190, 683],
        // [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[38],
      confirmed: true,
      coordinates: [
        [188.5, 698.5], //37
        [190, 683],
        [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[38],
      confirmed: true,
      coordinates: [
        [188.5, 698.5], //37
        [190, 683],
        [189, 671.5], //38
        // [187.5, 658],
        // [190.5, 638.5],
        // [198.5, 629], // lasting integrity / 39
      ]
    },

    {
      character: characters[CharacterIndex.Shallan],
      book: books[5],
      chapter: rhythmOfWarChapterList[39],
      confirmed: true,
      coordinates: [
        [189, 671.5], //38
        [187.5, 658],
        [190.5, 638.5],
        [198.5, 629], // lasting integrity / 39
      ]
    },
    {
      character: characters[CharacterIndex.Adolin],
      book: books[5],
      chapter: rhythmOfWarChapterList[39],
      confirmed: true,
      coordinates: [
        [189, 671.5], //38
        [187.5, 658],
        [190.5, 638.5],
        [198.5, 629], // lasting integrity / 39
      ]
    },

    {
      character: characters[CharacterIndex.Venli],
      book: books[5],
      chapter: rhythmOfWarChapterList[34],
      confirmed: false,
      coordinates: [
        [513, 1363.5],
        [518, 1332],
        [519, 1309],
        [524, 1276],
        [532, 1247],
        [546, 1225],
        [568, 1201],
        [582, 1178],
        [580, 1149],
        [556, 1119],
        [535, 1100],
        [519, 1075],
        [489, 1040],
        [474, 1008],
        [463, 970],
        [452, 932],
        [432, 889],
        [421, 859],
        [424, 834],
        [413, 819],// 34
        // [400, 810],
        // [382, 805],
        // [362, 802]
      ]
    },
    {
      character: characters[CharacterIndex.Venli],
      book: books[5],
      chapter: rhythmOfWarChapterList[40],
      confirmed: true,
      coordinates: [
        [413, 819],// 34
        [400, 810],
        [382, 805],
        [362, 802]
      ]
    },

    {
      character: characters[CharacterIndex.Taravangian],
      book: books[5],
      chapter: rhythmOfWarChapterList[22],
      confirmed: false,
      coordinates: [
        [362, 802],
        [361, 784],
        [360, 775],
        [355, 764],
        [346, 751],
        [335, 740],
        [327, 729],
        [318, 713],
        [310, 697.5],
      ]
    },
    {
      character: characters[CharacterIndex.Dalinar],
      book: books[5],
      chapter: rhythmOfWarChapterList[22],
      confirmed: false,
      coordinates: [
        [362, 802],
        [361, 784],
        [360, 775],
        [355, 764],
        [346, 751],
        [335, 740],
        [327, 729],
        [318, 713],
        [310, 697.5],
      ]
    },
    {
      character: characters[CharacterIndex.Jasnah],
      book: books[5],
      chapter: rhythmOfWarChapterList[22],
      confirmed: false,
      coordinates: [
        [362, 802],
        [361, 784],
        [360, 775],
        [355, 764],
        [346, 751],
        [335, 740],
        [327, 729],
        [318, 713],
        [310, 697.5],
      ]
    },
  ]
};

// done up to rhythm of war chapter 44

        