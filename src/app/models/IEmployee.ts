import { IAddress } from './IAddress';

export interface IEmployee {
    id: number;
    name: string;
    phone: string;
    address: IAddress;
}
