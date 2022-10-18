import { AvailableSeries, DataBundle } from "../models";
import { MISTBORN_ERA1_DATA } from "./mistborn";
import { STORMLIGHT_DATA } from "./stormlight";

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  stormlight: STORMLIGHT_DATA,
  mistborn: MISTBORN_ERA1_DATA
}