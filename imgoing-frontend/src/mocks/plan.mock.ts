import { Location, Plan, TaskType } from 'types/index';

export const tasks: TaskType[] = [
  {
    id: 0,
    name: '아침 식사',
    time: 30,
    isBookmarked: true,
    notification: true,
  },
  {
    id: 1,
    name: '고양이 밥주기',
    time: 5,
    isBookmarked: true,
    notification: true,
  },
  {
    id: 2,
    name: '샤워하기',
    time: 30,
    isBookmarked: true,
    notification: false,
  },
  {
    id: 3,
    name: '서점 들리기',
    time: 60,
    isBookmarked: false,
    notification: true,
  },
  {
    id: 4,
    name: '백화점 들리기',
    time: 90,
    isBookmarked: false,
    notification: true,
  },
  {
    id: 5,
    name: '엄마한테 전화하기',
    time: 10,
    isBookmarked: false,
    notification: true,
  },
  {
    id: 6,
    name: '아빠한테 전화하기',
    time: 15,
    isBookmarked: false,
    notification: true,
  },
  {
    id: 7,
    name: '점심 식사',
    time: 30,
    isBookmarked: true,
    notification: true,
  },
  {
    id: 8,
    name: '저녁 식사',
    time: 30,
    isBookmarked: true,
    notification: true,
  },
];

const destinations: Location[] = [
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

const PLANS: Plan[] = [
  {
    id: 1,
    name: '유나랑 영풍문고 앞에서 만나서 이번주 작업하기',
    arrivalAt: '2021-10-26 08:40',
    arrival: destinations[0],
    departure: destinations[2],
    memo: '편의점 들러서 물 사기',
    items: '보조 배터리, 고데기',
    tasks: [tasks[0], tasks[1]],
    isPinned: true,
  },
  {
    id: 2,
    name: '건대입구에서 만나서 모각코하기',
    arrivalAt: '2021-10-29 13:40',
    arrival: destinations[1],
    departure: destinations[0],
    memo: '비타민 챙겨먹고 출발',
    items: '충전기, 노트북',
    tasks: [tasks[6], tasks[7]],
    isPinned: false,
  },
  {
    id: 3,
    name: '업무 미팅 가기',
    arrivalAt: '2021-10-28 09:00',
    arrival: destinations[2],
    departure: destinations[0],
    memo: '다이어리 챙겨가기',
    items: '우산, 노트북',
    tasks: [tasks[3], tasks[4], tasks[5]],
    isPinned: true,
  },
];

export default PLANS;
