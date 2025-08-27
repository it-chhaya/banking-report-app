export type CustomerResponse = {
    customerNo: string,
    firstName: string,
    lastName: string,
    email: string
}

export type CreateCustomerRequest = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    dateOfBirth: Date
}