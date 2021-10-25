import { Destination, Plan, TaskType } from 'types/index';

export const tasks: TaskType[] = [
  {
    name: '아침 식사',
    duration: 30,
    isBookmarked: true,
    notification: true,
  },
  {
    name: '고양이 밥주기',
    duration: 5,
    isBookmarked: true,
    notification: true,
  },
  {
    name: '샤워하기',
    duration: 30,
    isBookmarked: true,
    notification: false,
  },
  {
    name: '서점 들리기',
    duration: 60,
    isBookmarked: false,
    notification: true,
  },
  {
    name: '백화점 들리기',
    duration: 90,
    isBookmarked: false,
    notification: true,
  },
  {
    name: '엄마한테 전화하기',
    duration: 10,
    isBookmarked: false,
    notification: true,
  },
  {
    name: '아빠한테 전화하기',
    duration: 15,
    isBookmarked: false,
    notification: true,
  },
  {
    name: '점심 식사',
    duration: 30,
    isBookmarked: true,
    notification: true,
  },
  {
    name: '저녁 식사',
    duration: 30,
    isBookmarked: true,
    notification: true,
  },
];

const destinations: Destination[] = [
  {
    dest_name: '홍대입구역 2번 출구',
    dest_lat: 37.5572772,
    dest_lng: 126.9215528,
  },
  {
    dest_name: '건대입구역 5번 출구',
    dest_lat: 37.5398007,
    dest_lng: 127.0696434,
  },
  {
    dest_name: '삼성역 4번 출구',
    dest_lat: 37.5093176,
    dest_lng: 127.0576216,
  },
];

const PLANS: Plan[] = [
  {
    id: 1,
    name: '유나랑 영풍문고 앞에서 만나서 이번주 작업하기',
    arrival_at: '2021-10-26 08:40',
    destination: destinations[0],
    memo: '편의점 들러서 물 사기',
    items: '보조 배터리, 고데기',
    tasks: [tasks[0], tasks[1]],
    isPinned: true,
  },
  {
    id: 2,
    name: '건대입구에서 만나서 모각코하기',
    arrival_at: '2021-10-25 13:40',
    destination: destinations[1],
    memo: '비타민 챙겨먹고 출발',
    items: '충전기, 노트북',
    tasks: [tasks[6], tasks[7]],
    isPinned: false,
  },
  {
    id: 3,
    name: '업무 미팅 가기',
    arrival_at: '2021-10-22 09:00',
    destination: destinations[2],
    memo: '다이어리 챙겨가기',
    items: '우산, 노트북',
    tasks: [tasks[3], tasks[4], tasks[5]],
    isPinned: true,
  },
];

export default PLANS;
