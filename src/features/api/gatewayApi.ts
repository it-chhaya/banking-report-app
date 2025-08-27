import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gatewayApi = createApi({
    reducerPath: "gatewayApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.GATEWAY_BASE_URL
    }),
    tagTypes: ["CustomerResponse"],
    endpoints: () => ({})
})