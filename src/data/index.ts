import { DataBundle } from "character-journey-map/models";
import { MISTBORN_ERA1_DATA } from "./mistborn";
import { MISTBORN_ERA2_DATA } from "./mistborn2";
import { STORMLIGHT_DATA } from "./stormlight";

export enum AvailableSeries {
  stormlight = 'stormlight',
  mistborn = 'mistborn',
  mistborn2 = 'mistborn2'
}

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  stormlight: STORMLIGHT_DATA,
  mistborn: MISTBORN_ERA1_DATA,
  mistborn2: MISTBORN_ERA2_DATA
}