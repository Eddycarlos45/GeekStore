export class CreateUserDTO {
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