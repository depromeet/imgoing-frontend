export interface HomeTopContents {
  oncoming: undefined;
  process: undefined;
  toArrival: undefined;
}
export type HomeTopContentsType = keyof HomeTopContents;
export type GuideType = keyof Omit<HomeTopContents, 'process'>;

export type ProcessState = {
  purpose: HomeTopContentsType;
  duration: 1 | 60;
  endTime: string;
};

export type TimeRemainingRefFunc = {
  forceUpdate: (hour: number, minuites: number, seconds: number) => void;
};
export type TimeRemainingRefType = React.ForwardedRef<TimeRemainingRefFunc>;
