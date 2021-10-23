// 이름 -> 출발지 -> 목적지 -> 도착 시간 -> 필수품 -> 일정 상세 -> 준비 항목
import { AddingPlanStepsType, PlanStepInfo } from 'types/index';

export const PLAN_STEP_TITLES: {
  [key: string]: keyof AddingPlanStepsType;
} = {
  SET_TITLE: 'setTitle',
  SET_DEPARTURE: 'setDeparture',
  SET_ARRIVAL: 'setArrival',
  SET_ARRIVALTIME: 'setArrivalTime',
  SET_ITEM: 'setItem',
  SET_DETAILS: 'setDetails',
  SET_TASK: 'setTask',
};

export type addingPlanStepKeys =
  | 'setTitle'
  | 'setDeparture'
  | 'setArrival'
  | 'setArrivalTime'
  | 'setItem'
  | 'setDetails'
  | 'setTask';

export const planStepInfo: PlanStepInfo = {
  setTitle: {
    prevStep: null,
    nextStep: PLAN_STEP_TITLES.SET_DEPARTURE,
    title: '스케줄 등록',
    percentage: 0,
  },
  setDeparture: {
    prevStep: PLAN_STEP_TITLES.SET_TITLE,
    nextStep: PLAN_STEP_TITLES.SET_ARRIVAL,
    title: '출발지 입력',
    percentage: 42,
  },
  setArrival: {
    prevStep: PLAN_STEP_TITLES.SET_DEPARTURE,
    nextStep: PLAN_STEP_TITLES.SET_ARRIVALTIME,
    title: '목적지 입력',
    percentage: 42,
  },
  setArrivalTime: {
    prevStep: PLAN_STEP_TITLES.SET_ARRIVAL,
    nextStep: PLAN_STEP_TITLES.SET_ITEM,
    title: '도착 시간 입력',
    percentage: 54,
  },
  setItem: {
    prevStep: PLAN_STEP_TITLES.SET_ARRIVALTIME,
    nextStep: PLAN_STEP_TITLES.SET_DETAILS,
    title: '필수품 등록',
    percentage: 62,
  },
  setDetails: {
    prevStep: PLAN_STEP_TITLES.SET_ITEM,
    nextStep: PLAN_STEP_TITLES.SET_TASK,
    title: '일정 상세',
    percentage: 78,
  },
  setTask: {
    prevStep: PLAN_STEP_TITLES.SET_DETAILS,
    nextStep: null,
    title: '준비 항목 등록',
    percentage: 87,
  },
};

export const firstStep = PLAN_STEP_TITLES.SET_TITLE as keyof AddingPlanStepsType | null;
