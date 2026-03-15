import { Category } from './model/category.model.js';
import { Product } from './model/product.model.js';
import { User, Role } from './model/user.model.js';
import { Cart } from './model/cart.model.js';

// 1. Creation of Categories
const electronicsCategory = new Category(1, "Electronics");
const clothingCategory = new Category(2, "Clothing");

// 2. Creation of Products
const laptop = new Product(1, "Laptop XYZ", 3500, electronicsCategory);
const smartphone = new Product(2, "Smartphone 12", 2000, electronicsCategory);
const tshirt = new Product(3, "T-Shirt Basic", 50, clothingCategory);

// 3. Creation of Users
const adminUser = new User(1, "admin123", "admin@store.com", Role.ADMIN);
const customerUser = new User(2, "john_doe", "john@email.com", Role.CUSTOMER);

// Display user info
console.log("=== USERS ===");
console.log(`Admin User: ${adminUser.username} | Role: ${adminUser.role}`);
console.log(`Customer User: ${customerUser.username} | Role: ${customerUser.role}`);

// 4. Cart Logic Demonstration
const myCart = new Cart();

console.log("\n=== ADDING ITEMS TO CART ===");

// Add products
myCart.addItem(laptop, 1);
myCart.addItem(smartphone, 2);
myCart.addItem(tshirt, 3);
console.log("Cart items after first additions:", myCart.getItems());

// Add item that already exists to test accumulation
console.log("\nAdding 1 more Laptop...");
myCart.addItem(laptop, 1);
console.log("Cart items after adding existing item:", myCart.getItems());

// Test the HOFs
console.log("\n=== CART SUMMARY ===");
console.log(`Total Unit Items (using reduce): ${myCart.getTotalItems()}`);
console.log(`Final Price (using reduce): R$ ${myCart.getFinalPrice().toFixed(2)}`);
