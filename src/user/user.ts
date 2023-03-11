export interface User {
    email: string
    type: Type[]
    matricNo:string;
    university:string; //to be upgraded
    name?: string;
    surname?: string;
    phone?: string;
    invoiceData?: string;
}

export enum Type {
    CLIENT = 'USER',
    ADMIN = 'ADMIN'
}
