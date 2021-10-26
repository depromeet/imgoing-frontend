export interface TaskType {
  name: string;
  duration: number;
  isBookmarked: boolean;
  notification: boolean;
}

export interface BookmarkType {
  name: string;
  duration: number;
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
  tasks: TaskType[];
  isPinned: boolean;
}

export type setTitleType = {
  title: string;
};

export type setLocationType = {
  name: string;
  address: string;
  coordinate: {
    lat: number | undefined;
    lng: number | undefined;
  };
};
export type setArrivalTimeType = {
  date: string;
};
export type setItemType = {
  items: string;
};
export type setDetailsType = {
  details: string;
};
export type setTaskType = {
  tasks: TaskType[];
};
export type AddPlanContentsType =
  | setTitleType
  | setLocationType
  | setArrivalTimeType
  | setItemType
  | setDetailsType
  | setTaskType;
export interface AddingPlanSteps {
  setTitle: setTitleType;
  setDeparture: setLocationType;
  setArrival: setLocationType;
  setArrivalTime: setArrivalTimeType;
  setItem: setItemType;
  setDetails: setDetailsType;
  setTask: setTaskType;
}

export type AddingPlanUserInputsType = {
  title?: string;
  departure?: {
    name: string;
    address: string;
    coordinate: {
      lat: number | undefined;
      lng: number | undefined;
    };
  };
  arrival?: {
    name: string;
    address: string;
    coordinate: {
      lat: number | undefined;
      lng: number | undefined;
    };
  };
  arrivalDateTime?: string;
  items?: string;
  details?: string;
  tasks?: TaskType[];
};

export type AddingPlanStateType = {
  step: keyof AddingPlanSteps | null;
  userInputs: AddingPlanUserInputsType;
};

export type PlanStepInfo = {
  [key in keyof AddingPlanSteps]: {
    nextStep: keyof AddingPlanSteps | null;
    prevStep: keyof AddingPlanSteps | null;
    title: string;
    progressbar: {
      sentence: string;
      percentage: number;
    };
  };
};
