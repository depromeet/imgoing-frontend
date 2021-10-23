// 이름 -> 출발지 -> 목적지 -> 도착 시간 -> 필수품 -> 일정 상세 -> 준비 항목
import { AddingPlanStepsType, PlanStepInfo } from 'types/index';

export const planStepInfo: PlanStepInfo = {
  setTitle: {
    prevStep: null,
    nextStep: 'setDeparture',
    title: '스케줄 등록',
    percentage: 0,
  },
  setDeparture: {
    prevStep: 'setTitle',
    nextStep: 'setArrival',
    title: '출발지 입력',
    percentage: 42,
  },
  setArrival: {
    prevStep: 'setDeparture',
    nextStep: 'setArrivalTime',
    title: '목적지 입력',
    percentage: 42,
  },
  setArrivalTime: {
    prevStep: 'setArrival',
    nextStep: 'setItem',
    title: '도착 시간 입력',
    percentage: 54,
  },
  setItem: {
    prevStep: 'setArrivalTime',
    nextStep: 'setDetails',
    title: '필수품 등록',
    percentage: 62,
  },
  setDetails: {
    prevStep: 'setItem',
    nextStep: 'setTask',
    title: '일정 상세',
    percentage: 78,
  },
  setTask: {
    prevStep: 'setDetails',
    nextStep: null,
    title: '준비 항목 등록',
    percentage: 87,
  },
};

export const firstStep = 'setTitle' as keyof AddingPlanStepsType | null;
