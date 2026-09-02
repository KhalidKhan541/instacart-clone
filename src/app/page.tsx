"use client";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

const categories = ["Produce", "Dairy", "Bakery", "Meat", "Snacks", "Beverages"];

const products = [
  { id: "1", name: "Organic Bananas", image: "https://via.placeholder.com/200/4caf50/fff?text=Bananas", price: 1.49, unit: "bunch", category: "Produce" },
  { id: "2", name: "Whole Milk", image: "https://via.placeholder.com/200/2196f3/fff?text=Milk", price: 3.99, unit: "gallon", category: "Dairy" },
  { id: "3", name: "Sourdough Bread", image: "https://via.placeholder.com/200/ff9800/fff?text=Bread", price: 4.49, unit: "loaf", category: "Bakery" },
  { id: "4", name: "Chicken Breast", image: "https://via.placeholder.com/200/f44336/fff?text=Chicken", price: 8.99, unit: "lb", category: "Meat" },
  { id: "5", name: "Greek Yogurt", image: "https://via.placeholder.com/200/9c27b0/fff?text=Yogurt", price: 5.49, unit: "32oz", category: "Dairy" },
  { id: "6", name: "Avocados", image: "https://via.placeholder.com/200/4caf50/fff?text=Avocado", price: 1.99, unit: "each", category: "Produce" },
];

export default function Home() {
  const [cart, setCart] = useState<{id: string; quantity: number}[]>([]);

  const addToCart = (id: string) => {
    setCart(current => {
      const existing = current.find(i => i.id === id);
      if (existing) {
        return current.map(i => i.id === id ? {...i, quantity: i.quantity + 1} : i);
      }
      return [...current, {id, quantity: 1}];
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Grocery delivery</h1>
          <div className="flex gap-4 mt-4">
            <input type="text" placeholder="Enter your address" className="flex-1 border rounded-lg px-4 py-2" />
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold">Search</button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button key={cat} className="px-4 py-2 border rounded-full text-sm whitespace-nowrap hover:bg-green-50 hover:border-green-500">{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <div key={p.id} className="bg-white rounded-lg p-4 text-center hover:shadow-md">
              <img src={p.image} alt={p.name} className="h-24 w-full object-contain mb-2" />
              <h3 className="text-sm font-medium">{p.name}</h3>
              <p className="text-xs text-gray-500">{p.unit}</p>
              <p className="font-bold mt-1"></p>
              <button
                onClick={() => addToCart(p.id)}
                className="mt-2 border border-green-600 text-green-600 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-50"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
