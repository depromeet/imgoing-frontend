export interface Plan {
  name: string;
  arrival_at: string;
  destination: Destination;
  memo: string;
  items: string;
  tasks: Task[];
}

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
