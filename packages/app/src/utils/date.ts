export const getDay = (date: string) => {
  const day = new Date(date).getDay();
  return ['일', '월', '화', '수', '목', '금', '토'][day];
};

export const getMonth = (date: string) => new Date(date).getMonth() + 1;
export const getDate = (date: string) => new Date(date).getDate();
export const getYear = (date: string) => new Date(date).getFullYear();

export const getHours = (date: string) => new Date(date).getHours();
export const getMinutes = (date: string) => new Date(date).getMinutes();

export const getMeridiem = (date: string) => (getHours(date) < 12 ? '오전' : '오후');
