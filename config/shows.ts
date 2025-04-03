import { Period, Session, ShowEvent, TicketGroup } from "@/types/events";

const periods: Period[] = [
  { description: "Morning", startTime: "10:00:00", endTime: "11:59:59" },
  { description: "Midday", startTime: "12:00:00", endTime: "13:59:59" },
  { description: "Afternoon", startTime: "14:00:00", endTime: "15:59:59" },
  { description: "Evening", startTime: "18:00:00", endTime: "19:59:59" },
];

export function getPeriod(date: Date): string {
  const time = date.toTimeString().slice(0, 8);
  let period = periods.find((period) => period.startTime <= time && period.endTime >= time);
  
  return period?.description || "Unknown";
}

const ticketGroups: TicketGroup[] = [
  { description: "Adult", price: 29.50, validFrom: new Date("2025-04-01T00:00:00+10:00") },
  { description: "Concession", price: 25.50, validFrom: new Date("2025-04-01T00:00:00+10:00") },
  { description: "Group (6+)", price: 25.50, validFrom: new Date("2025-04-01T00:00:00+10:00") },
];

const sessions: Session[] = [
  { id: "5214399", date: new Date("2025-04-08T10:00:00+10:00"), duration: "P50M"  },
  { id: "5369630", date: new Date("2025-04-08T12:00:00+10:00"), duration: "P50M" },
  { id: "5217676", date: new Date("2025-04-09T10:00:00+10:00"), duration: "P50M" },
  { id: "5369631", date: new Date("2025-04-09T12:00:00+10:00"), duration: "P50M" },
  { id: "5217677", date: new Date("2025-04-10T10:00:00+10:00"), duration: "P50M"  },
  { id: "5369632", date: new Date("2025-04-10T12:00:00+10:00"), duration: "P50M" },
  { id: "5217678", date: new Date("2025-04-11T10:00:00+10:00"), duration: "P50M" },
  { id: "5369633", date: new Date("2025-04-11T12:00:00+10:00"), duration: "P50M" },
  { id: "5217533", date: new Date("2025-04-11T19:30:00+10:00"), duration: "P50M" },
  { id: "5217529", date: new Date("2025-04-12T14:00:00+10:00"), duration: "P50M"  },
  { id: "5217534", date: new Date("2025-04-12T19:30:00+10:00"), duration: "P50M"  },
  { id: "5217530", date: new Date("2025-04-13T14:00:00+10:00"), duration: "P50M"  },
];

export function getSeasonPeriod(): string {
  var startDate = sessions[0].date;
  var endDate = sessions[sessions.length - 1].date;

  var startDay = startDate.toLocaleDateString("en-AU", { day: "numeric" });
  var endDay = endDate.toLocaleDateString("en-AU", { day: "numeric" });

  if (startDate.getMonth() === endDate.getMonth()) {
    endDay = `${endDay} ${endDate.toLocaleDateString("en-AU", { month: "long" })}`;
  }

  return `${startDay} - ${endDay}, ${endDate.getFullYear()}`;
}

export const event: ShowEvent = {
  id: "1320175",
  ticketGroups: ticketGroups,
  sessions: sessions,
}