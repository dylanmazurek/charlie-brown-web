import { Duration, Time } from "schema-dts";

export interface ShowEvent {
  id: string;
  sessions: Session[];
  ticketGroups: TicketGroup[];
}

export interface Session {
  id: string;
  date: Date;
  duration: Duration;
}

export interface Period {
  startTime: Time;
  endTime: Time;
  description: string;
}

export interface TicketGroup {
  description: string;
  price: number;
}