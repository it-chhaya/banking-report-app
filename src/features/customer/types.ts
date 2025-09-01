export type CustomerResponse = {
    customerNo: string,
    firstName: string,
    lastName: string,
    email: string,
    segment: string
}

export type CreateCustomerRequest = {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    dateOfBirth: Date
}