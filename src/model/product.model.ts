import { Category, type ICategory } from './category.model.js';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: ICategory;
}

export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: Category
    ) { }
}
