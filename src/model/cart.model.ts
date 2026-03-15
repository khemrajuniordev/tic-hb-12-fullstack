import { Product } from './product.model.js';

export interface CartItem {
    product: Product;
    quantity: number;
}

export class Cart {
    private items: CartItem[] = [];

    addItem(product: Product, quantity: number): void {
        const itemExists = this.items.some(item => item.product.id === product.id);

        if (itemExists) {
            this.items = this.items.map(item => {
                if (item.product.id === product.id) {
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
        } else {
            this.items.push({ product, quantity });
        }
    }

    getTotalItems(): number {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getFinalPrice(): number {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    getItems(): CartItem[] {
        return this.items;
    }
}
