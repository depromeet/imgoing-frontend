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
