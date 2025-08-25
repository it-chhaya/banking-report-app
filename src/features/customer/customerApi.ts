import { gatewayApi } from "../api/gatewayApi";
import { CustomerResponse } from "./types";

const endpoint = "/customer-service/api/v1/customers"

export const customerApi = gatewayApi.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query<CustomerResponse[], void>({
            query: () => endpoint
        })
    })
})

export const { useGetCustomersQuery } = customerApi