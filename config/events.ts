import { Show, Slot } from "@/types/events";

export const slots: Slot[] = [
  { id: 1, name: "Morning", time: new Date("2000-01-01T10:00:00") },
  { id: 2, name: "Midday", time: new Date("2000-01-01T12:00:00") },
  { id: 3, name: "Afternoon", time: new Date("2000-01-01T14:00:00") },
  { id: 4, name: "Evening", time: new Date("2000-01-01T19:30:00") },
];

export const shows: Show[] = [
  { id: 1, date: new Date("2025-04-08"), slot: slots[0], duration: "P50M", showBookingId: 5214399 },
  { id: 2, date:  new Date("2025-04-08"), slot: slots[1], duration: "P50M", showBookingId: 5369630 },
  { id: 3, date:  new Date("2025-04-09"), slot: slots[0], duration: "P50M", showBookingId: 5217676 },
  { id: 4, date:  new Date("2025-04-09"), slot: slots[1], duration: "P50M", showBookingId: 5369631 },
  { id: 5, date:  new Date("2025-04-10"), slot: slots[0], duration: "P50M", showBookingId:5217677  },
  { id: 6, date:  new Date("2025-04-10"), slot: slots[1], duration: "P50M", showBookingId: 5369632 },
  { id: 7, date:  new Date("2025-04-11"), slot: slots[0], duration: "P50M", showBookingId: 5217678 },
  { id: 8, date:  new Date("2025-04-11"), slot: slots[1], duration: "P50M", showBookingId: 5369633 },
  { id: 9, date:  new Date("2025-04-11"), slot: slots[3], duration: "P50M", showBookingId: 5217533 },
  { id: 10, date:  new Date("2025-04-12"), slot: slots[2], duration: "P50M", showBookingId: 5217529 },
  { id: 11, date:  new Date("2025-04-12"), slot: slots[3], duration: "P50M", showBookingId: 5217534 },
  { id: 12, date:  new Date("2025-04-13"), slot: slots[2], duration: "P50M", showBookingId: 5217530 },
];