import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { add, format } from 'date-fns';

import env from 'environments';
import { Plan, ResPlan, Task } from 'types';

export const planApi = createApi({
  reducerPath: 'planApi',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl,
  }),
  endpoints: (builder) => ({
    getPlans: builder.query<Plan[], void>({
      query: () => ({ url: '/plans' }),
      transformResponse: (response: { data: ResPlan[] }) =>
        response.data.map((plan) => ({
          id: plan.id,
          name: plan.name,
          arrivalAt: plan.arrivalAt,
          arrival: {
            name: plan.arrivalName,
            lat: plan.arrivalLat,
            lng: plan.arrivalLng,
          },
          departureAt: format(
            add(new Date(plan.startAt), {
              minutes: plan.task.reduce((acc, cur) => acc + cur.time, 0),
            }),
            'yyyy-MM-dd HH:mm:ss',
          ),
          departure: {
            name: plan.departureName,
            lat: plan.departureLat,
            lng: plan.departureLng,
          },
          belongings: plan.belongings,
          memo: plan.memo,
          tasks: plan.task.reduce((tasks, cur, idx): Task[] => {
            const startTime =
              tasks.length === 0
                ? plan.startAt
                : format(
                    add(new Date(tasks[idx - 1].startTime), { minutes: tasks[idx - 1].time }),
                    'yyyy-MM-dd HH:mm:ss',
                  );
            const endTime = format(
              add(new Date(startTime), { minutes: cur.time }),
              'yyyy-MM-dd HH:mm:ss',
            );
            return [...tasks, { ...cur, startTime, endTime }];
          }, [] as Task[]),
          startAt: plan.startAt,
        })),
    }),
  }),
});

export const { useGetPlansQuery } = planApi;
