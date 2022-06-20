import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY, API_URL } from '../utils/constants';

export interface Pets {
    id: number | string;
    name: string;
    imageUrl: string;
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
        getPets: builder.query<Pets[], number>({
            query: (page) => ({
                // add the page to the url params
                url: `/?limit=20&page=${page}`,
            }),
            providesTags: ['Pets'],
            transformResponse: (response: any[]) => response.map(pet => ({ id: pet.id, name: pet.name, imageUrl: pet.image.url }))
        }),
    }),
});

export default petsApi;
export const { useLazyGetPetsQuery, useGetPetsQuery } = petsApi;