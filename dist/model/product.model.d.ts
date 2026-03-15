import { Category, type ICategory } from './category.model.js';
export interface IProduct {
    id: number;
    name: string;
    price: number;
    category: ICategory;
}
export declare class Product implements IProduct {
    id: number;
    name: string;
    price: number;
    category: Category;
    constructor(id: number, name: string, price: number, category: Category);
}
//# sourceMappingURL=product.model.d.ts.map