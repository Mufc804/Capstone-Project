import { Company } from './model.company';

export class Product {
    _id: number;
    pname: string;
    details: string;
    image: string;
    price: number;
    company: Company = new Company();
    //constructor(public _id: number, public pname: string, public details: string, public image: string, public price: number, public company: number) { }
}