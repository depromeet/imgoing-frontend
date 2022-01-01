import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import env from 'environments';
import { Plan, ResPlan } from 'types';

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
          departure: {
            name: plan.departureName,
            lat: plan.departureLat,
            lng: plan.departureLng,
          },
          belongings: plan.belongings,
          memo: plan.memo,
          tasks: plan.task,
          startAt: plan.startAt,
        })),
    }),
  }),
});

export const { useGetPlansQuery } = planApi;
