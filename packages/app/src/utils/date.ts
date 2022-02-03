import { toDate } from 'date-fns-tz';

export const toSeoulDate = (date: Date | string | number) =>
  toDate(date, { timeZone: 'Asia/Seoul' });

export const getDay = (date: string) => {
  const day = toSeoulDate(date).getDay();
  return ['일', '월', '화', '수', '목', '금', '토'][day];
};

export const getMonth = (date: string) => toSeoulDate(date).getMonth() + 1;
export const getDate = (date: string) => toSeoulDate(date).getDate();
export const getYear = (date: string) => toSeoulDate(date).getFullYear();

export const getHours = (date: string) => toSeoulDate(date).getHours();
export const getMinutes = (date: string) => toSeoulDate(date).getMinutes();

export const getMeridiem = (date: string) => (getHours(date) < 12 ? '오전' : '오후');

export const timeText = (strings: TemplateStringsArray, ...exp: (boolean | string | number)[]) => {
  return strings.reduce((prev, cur, idx) => {
    const result = prev.concat(cur);
    return exp[idx] ? result.concat(exp[idx].toString()) : result;
  }, '');
};
