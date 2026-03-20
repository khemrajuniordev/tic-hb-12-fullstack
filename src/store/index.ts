import { reactive } from 'vue';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { Cart } from '../model/cart.model';

const electronics = new Category(1, "Electronics");
const clothing = new Category(2, "Clothing");
const food = new Category(3, "Food");

export const store = reactive({
  products: [
    new Product(1, "Laptop XYZ", 3500, electronics),
    new Product(2, "Smartphone 12", 2000, electronics),
    new Product(3, "T-Shirt Basic", 50, clothing),
    new Product(4, "Headphones", 300, electronics),
    new Product(5, "Batata Recheada", 25, food),
  ] as Product[],
  cart: new Cart(),
  auth: {
    isAuthenticated: false,
    role: 'USER' as 'USER' | 'ADMIN'
  },
  
  addToCart(product: Product) {
    console.log("Adding product to cart:", product.name);
    this.cart.addItem(product, 1);
    
    // Explicitly clone to ensure Vue reactivity triggers
    const clonedCart = new Cart();
    clonedCart.items = [...this.cart.items];
    this.cart = clonedCart;
  },
  removeFromCart(productId: number) {
    this.cart.removeItem(productId);
    const clonedCart = new Cart();
    clonedCart.items = [...this.cart.items];
    this.cart = clonedCart;
  },
  deleteFromCart(productId: number) {
    this.cart.deleteItem(productId);
    const clonedCart = new Cart();
    clonedCart.items = [...this.cart.items];
    this.cart = clonedCart;
  },
  updateCartQuantity(productId: number, quantity: number) {
    this.cart.updateItemQuantity(productId, quantity);
    const clonedCart = new Cart();
    clonedCart.items = [...this.cart.items];
    this.cart = clonedCart;
  },
  loginAs(role: 'USER' | 'ADMIN') {
    this.auth.isAuthenticated = true;
    this.auth.role = role;
  },
  logout() {
    this.auth.isAuthenticated = false;
    this.auth.role = 'USER';
  }
});
