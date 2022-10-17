import { AvailableSeries, DataBundle } from "../models";
import { STORMLIGHT_DATA } from "./stormlight";

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
  stormlight: STORMLIGHT_DATA
}