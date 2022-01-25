export const ONE_MINUTES_BY_SECONDS = 60;
export const ONE_HOUR_BY_SECONDS = ONE_MINUTES_BY_SECONDS * 60;

export const calcRemainingTime = (remainingSeconds: number) => {
  const remianingMinuites = Math.floor(remainingSeconds / ONE_MINUTES_BY_SECONDS);
  return [
    Math.floor(remianingMinuites / ONE_MINUTES_BY_SECONDS),
    remianingMinuites % ONE_MINUTES_BY_SECONDS,
    remainingSeconds % ONE_MINUTES_BY_SECONDS,
  ];
};
