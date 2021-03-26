export class ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    address: IAddress;
}

export interface IAddress {
    street: string
    number: string
    neighborhood: string
}