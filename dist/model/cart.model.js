import { Product } from './product.model.js';
export class Cart {
    items = [];
    addItem(product, quantity) {
        const itemExists = this.items.some(item => item.product.id === product.id);
        if (itemExists) {
            this.items = this.items.map(item => {
                if (item.product.id === product.id) {
                    return { ...item, quantity: item.quantity + quantity };
                }
                return item;
            });
        }
        else {
            this.items.push({ product, quantity });
        }
    }
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    getFinalPrice() {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
    getItems() {
        return this.items;
    }
}
//# sourceMappingURL=cart.model.js.map