interface AddingPlanSteps {
  setName: undefined;
  setArrival: undefined;
  setArrivalTime: undefined;
  setItem: undefined;
  setDetails: undefined;
  setTask: undefined;
}

type PlanStepInfo = {
  [key in keyof AddingPlanSteps]: {
    nextStep: keyof AddingPlanSteps | null;
    title: string;
  };
};

const PlanStepInfo: PlanStepInfo = {
  setName: { nextStep: 'setArrival', title: '스케줄 등록' },
  setArrival: { nextStep: 'setArrivalTime', title: '목적지 입력' },
  setArrivalTime: { nextStep: 'setItem', title: '도착 시간 입력' },
  setItem: { nextStep: 'setDetails', title: '필수품 등록' },
  setDetails: { nextStep: 'setTask', title: '일정 상세' },
  setTask: { nextStep: null, title: '준비 항목 등록' },
};

export { PlanStepInfo };
