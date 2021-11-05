import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  AddingPlanStateType,
  AddingPlanSteps,
  AddingPlanUserInputsType,
  TaskType,
} from 'types/index';
import { firstStep, planStepInfo } from 'constant/plan';

type payloadType = {
  type: 'next' | 'prev' | null;
  userInput: AddingPlanUserInputsType;
};

const addingPlanState: AddingPlanStateType = {
  step: firstStep,
  userInputs: {
    title: '',
    departure: {
      name: '',
      address: '',
      coordinate: {
        lat: undefined,
        lng: undefined,
      },
    },
    arrival: {
      name: '',
      address: '',
      coordinate: {
        lat: undefined,
        lng: undefined,
      },
    },
    arrivalDateTime: '',
    items: '',
    details: '',
    tasks: [],
  },
};

export const stepOfAddingPlan = createSlice({
  name: 'stepOfAddingPlan',
  initialState: addingPlanState,
  reducers: {
    setStep: (state, action: PayloadAction<payloadType>) => {
      if (!state.step) return;

      let nextStep: keyof AddingPlanSteps | null = state.step;
      if (action.payload.type === 'next') {
        const next = planStepInfo[state.step].nextStep;
        if (!next) {
          // TODO : reset State + 일정 등록 완료 + 등록 API 호출
        }
        nextStep = next;
      } else if (action.payload.type === 'prev') {
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
    resetStep: () => addingPlanState,
    setTask: (state, { payload }: PayloadAction<TaskType[]>) => ({
      ...state,
      userInputs: {
        ...state.userInputs,
        tasks: payload,
      },
    }),
    removeTask: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      userInputs: {
        ...state.userInputs,
        tasks: state.userInputs.tasks && [
          ...state.userInputs.tasks.filter((task) => task.id !== payload),
        ],
      },
    }),
    setBookmark: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      userInputs: {
        ...state.userInputs,
        tasks:
          state.userInputs.tasks &&
          state.userInputs.tasks.map((task) =>
            task.id === payload
              ? {
                  ...task,
                  isBookmarked: true,
                }
              : task,
          ),
      },
    }),
  },
});

export const { setStep, resetStep, setTask, removeTask, setBookmark } = stepOfAddingPlan.actions;
export default stepOfAddingPlan.reducer;
