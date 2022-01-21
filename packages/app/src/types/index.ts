export type Task = {
  id: number;
  name: string;
  time: number;
  startTime: string;
};

export type Routine = {
  name: string;
  routinetasks: Task[];
};

export type ResPlan = {
  id: number;
  name: string;
  arrivalAt: string;
  arrivalLat: number;
  arrivalLng: number;
  arrivalName: string;
  departureLat: number;
  departureLng: number;
  departureName: string;
  belongings: string;
  memo: string;
  task: Task[];
  startAt: string;
};

export interface Location {
  name: string;
  lat: number;
  lng: number;
}

export type Plan = {
  id: number;
  name: string;
  arrivalAt: string;
  arrival: Location;
  departure: Location;
  departureAt: string;
  belongings: string;
  memo: string;
  tasks: Task[];
  startAt: string;
};
