import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn, userRegistration } from './authSlice';
import { apiSlice } from '../api/apiSlice';

type RegistrationResponse = {
  message: string;
  activationToken: string;
};

type RegistrationData = {};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URI }), // Update the base URL accordingly
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: 'registration',
        method: 'POST',
        body: data,
        credentials: 'include' as const,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.activationToken,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({ activation_token, activation_code }) => ({
        url: 'activate-user',
        method: 'POST',
        body: {
          activation_token,
          activation_code,
        },
      }),
    }),

    login: builder.mutation({
        query:({email, password}) => ({
          url:"login",
          method:"POST",
          body:{
            email,
            password
          },
          credentials: "include" as const,
        }),
        
        async onQueryStarted(arg, { dispatch, queryFulfilled }) {
          try {
            const result = await queryFulfilled;
            dispatch(
              userLoggedIn({
                accessToken: result.data.activationToken,
                user: result.data.user,
              })
            );
          } catch (error) {
            console.log(error);
          }
        },
    }),
  }),
});

export const { useRegisterMutation, useActivationMutation } = authApi;
