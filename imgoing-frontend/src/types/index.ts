export interface Task {
  name: string;
  duration: number;
  isBookmarked: boolean;
  notification: boolean;
}

export interface Destination {
  dest_name: string;
  dest_lat: number;
  dest_lng: number;
}

export interface Plan {
  id: number;
  name: string;
  arrival_at: string;
  destination: Destination;
  memo: string;
  items: string;
  tasks: Task[];
  isPinned: boolean;
}

type setTitleType = {
  title: string;
};
type setDepartureType = {
  name: string;
  address: string;
  coordinate: {
    lat: number | undefined;
    lng: number | undefined;
  };
};
type setArrivalType = {
  name: string;
  address: string;
  coordinate: {
    lat: number | undefined;
    lng: number | undefined;
  };
};
type setArrivalTimeType = {
  date: string;
};
type setItemType = {
  items: string;
};
type setDetailsType = {
  contents: string;
};
type setTaskType = {
  tasks: Task[];
};
export interface AddingPlanSteps {
  setTitle: setTitleType;
  setDeparture: setDepartureType;
  setArrival: setArrivalType;
  setArrivalTime: setArrivalTimeType;
  setItem: setItemType;
  setDetails: setDetailsType;
  setTask: setTaskType;
}
export interface AddingPlanStepsType {
  setTitle: undefined;
  setDeparture: undefined;
  setArrival: undefined;
  setArrivalTime: undefined;
  setItem: undefined;
  setDetails: undefined;
  setTask: undefined;
}

export type PlanStepInfo = {
  [key in keyof AddingPlanStepsType]: {
    nextStep: keyof AddingPlanStepsType | null;
    prevStep: keyof AddingPlanStepsType | null;
    title: string;
    percentage: number;
  };
};
