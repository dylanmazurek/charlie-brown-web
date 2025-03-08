import { Duration } from "schema-dts";

export interface Slot {
  id: number;
  name: string;
  time: Date;
}

export interface Show {
  id: number;
  date: Date;
  slot: Slot;
  duration: Duration;
}
