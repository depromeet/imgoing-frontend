import { Routine, Location, Plan, Task } from 'types';

export const tasks: Task[] = [
  {
    id: 0,
    name: '아침 식사',
    time: 30,
  },
  {
    id: 1,
    name: '고양이 밥주기',
    time: 5,
  },
  {
    id: 2,
    name: '샤워하기',
    time: 30,
  },
  {
    id: 3,
    name: '서점 들리기',
    time: 60,
  },
  {
    id: 4,
    name: '백화점 들리기',
    time: 90,
  },
  {
    id: 5,
    name: '엄마한테 전화하기',
    time: 10,
  },
  {
    id: 6,
    name: '아빠한테 전화하기',
    time: 15,
  },
  {
    id: 7,
    name: '점심 식사',
    time: 30,
  },
  {
    id: 8,
    name: '저녁 식사',
    time: 30,
  },
];

export const locations: Location[] = [
  {
    name: '홍대입구역 2번 출구',
    lat: 37.5572772,
    lng: 126.9215528,
  },
  {
    name: '건대입구역 5번 출구',
    lat: 37.5398007,
    lng: 127.0696434,
  },
  {
    name: '삼성역 4번 출구',
    lat: 37.5093176,
    lng: 127.0576216,
  },
];

export const PLANS: Plan[] = [
  {
    id: 1,
    name: '유나랑 영풍문고 앞에서 만나서 이번주 작업하기',
    arrivalAt: '2021-10-26 08:40',
    arrival: locations[0],
    departure: locations[2],
    memo: '편의점 들러서 물 사기',
    belongings: '보조 배터리, 고데기',
    tasks: [tasks[0], tasks[1]],
  },
  {
    id: 2,
    name: '건대입구에서 만나서 모각코하기',
    arrivalAt: '2021-10-29 13:40',
    arrival: locations[1],
    departure: locations[0],
    memo: '비타민 챙겨먹고 출발',
    belongings: '충전기, 노트북',
    tasks: [tasks[6], tasks[7]],
  },
  {
    id: 3,
    name: '업무 미팅 가기',
    arrivalAt: '2021-10-28 09:00',
    arrival: locations[2],
    departure: locations[0],
    memo: '다이어리 챙겨가기',
    belongings: '우산, 노트북',
    tasks: [tasks[3], tasks[4], tasks[5]],
  },
];

export const ROUTINES: Routine[] = [
  {
    name: '출근 전',
    routinetasks: tasks.slice(2, 7),
  },
  {
    name: '출근 후',
    routinetasks: tasks.slice(2, 4),
  },
  {
    name: '퇴근 전',
    routinetasks: tasks.slice(0, 3),
  },
  {
    name: '퇴근 후',
    routinetasks: tasks.slice(5),
  },
];
