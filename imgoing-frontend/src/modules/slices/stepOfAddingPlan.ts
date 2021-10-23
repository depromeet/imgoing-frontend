import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddingPlanStepsType, AddingPlanSteps } from 'types/index';
import { firstStep, planStepInfo } from 'constant/plan';

type AddingPlanType = {
  step: keyof AddingPlanStepsType | null;
  userInputs: AddingPlanSteps;
};

type payloadType = {
  type: 'next' | 'prev';
  userInput: object; // 해결 불가...
};

const addingPlanState: AddingPlanType = {
  step: firstStep,
  userInputs: {
    setTitle: {
      title: '',
    },
    setDeparture: {
      name: '',
      address: '',
      coordinate: {
        lat: undefined,
        lng: undefined,
      },
    },
    setArrival: {
      name: '',
      address: '',
      coordinate: {
        lat: undefined,
        lng: undefined,
      },
    },
    setArrivalTime: {
      date: '',
    },
    setItem: {
      items: '',
    },
    setDetails: {
      contents: '',
    },
    setTask: {
      tasks: [],
    },
  },
};

export const stepOfAddingPlan = createSlice({
  name: 'stepOfAddingPlan',
  initialState: addingPlanState,
  reducers: {
    setStep: (state, action: PayloadAction<payloadType>) => {
      if (!state.step) return;

      let nextStep: keyof AddingPlanStepsType | null = state.step;
      if (action.payload.type === 'next') {
        const next = planStepInfo[state.step].nextStep;
        if (!next) {
          // TODO : reset State + 일정 등록 완료 + 등록 API 호출
        }
        nextStep = next;
      } else {
        const prev = planStepInfo[state.step].prevStep;
        if (!prev) {
          // TODO : reset State + Stack창 닫기
        }
        nextStep = prev;
      }

      const nextState = {
        step: nextStep,
        userInputs: {
          ...state.userInputs,
          ...action.payload.userInput,
        },
      };

      return nextState;
    },
    resetStep: () => {
      return addingPlanState;
    },
  },
});

export const { setStep, resetStep } = stepOfAddingPlan.actions;
export default stepOfAddingPlan.reducer;
