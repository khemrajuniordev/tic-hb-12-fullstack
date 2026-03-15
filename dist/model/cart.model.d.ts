import { Product } from './product.model.js';
export interface CartItem {
    product: Product;
    quantity: number;
}
export declare class Cart {
    private items;
    addItem(product: Product, quantity: number): void;
    getTotalItems(): number;
    getFinalPrice(): number;
    getItems(): CartItem[];
}
//# sourceMappingURL=cart.model.d.ts.map