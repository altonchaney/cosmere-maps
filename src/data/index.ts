import { AvailableSeries, DataBundle } from "../models";
import { MISTBORN_ERA1_DATA } from "./mistborn";
import { MISTBORN_ERA2_DATA } from "./mistborn2";
import { STORMLIGHT_DATA } from "./stormlight";

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  stormlight: STORMLIGHT_DATA,
  mistborn: MISTBORN_ERA1_DATA,
  mistborn2: MISTBORN_ERA2_DATA
}