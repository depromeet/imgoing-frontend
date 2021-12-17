export interface HomeTopContents {
  oncoming: undefined;
  process: undefined;
  toArrival: undefined;
}
export type HomeTopContentsType = keyof HomeTopContents;
export type GuideType = keyof Omit<HomeTopContents, 'process'>;
