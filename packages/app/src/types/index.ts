export type Task = {
  id: number;
  name: string;
  time: number;
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
  belongings: string;
  memo: string;
  tasks: Task[];
};
