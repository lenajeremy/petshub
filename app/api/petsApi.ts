import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../utils/constants';

interface Pets {
    name: string;
    breed: string;
    isLiked: boolean;
}

const petsApi = createApi({
    reducerPath: 'petsApi',
    tagTypes: ['Pets'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL, prepareHeaders: (headers) => {
            headers.set('Authorization', 'API_KEY')
            return headers;
        }
    }),

    endpoints: builder => ({
        getPets: builder.query<Pets[], void>({
            query: () => '/',
            providesTags: [ 'Pets' ]
        }),
    }),
});

export default petsApi;
export const { useGetPetsQuery } = petsApi;