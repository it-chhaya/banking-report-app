import { gatewayApi } from "../api/gatewayApi";
import { CreateCustomerRequest, CustomerResponse } from "./types";

const endpoint = "/customer-service/api/v1/customers"

export const customerApi = gatewayApi.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query<CustomerResponse[], void>({
            query: () => endpoint,
            providesTags: ["CustomerResponse"]
        }),
        createCustomer: builder.mutation<CustomerResponse, CreateCustomerRequest>({
            query: (createCustomerRequest) => ({
                url: endpoint,
                method: "POST",
                body: createCustomerRequest,
            }),
            invalidatesTags: ["CustomerResponse"]
        })
    })
})

export const {
     useGetCustomersQuery,
     useCreateCustomerMutation
} = customerApi