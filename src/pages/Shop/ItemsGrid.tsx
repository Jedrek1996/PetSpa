// ItemsGrid.tsx
import React from "react";

export interface Product {
  category: string;
  animal: string;
  name: string;
  price: number;
  available: boolean;
  description: string;
  ingredients: string;
  allergens: string;
  createdBy: string; // Assuming createdBy is a string for the purpose of this example
}

// Sample hardcoded products
const products: Product[] = [
  {
    category: "Pet Food",
    animal: "Dog",
    name: "Premium Dog Food",
    price: 29.99,
    available: true,
    description:
      "High-quality premium dog food enriched with essential nutrients.",
    ingredients: "Chicken, Brown Rice, Peas, Carrots, Flaxseed",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Toys",
    animal: "Cat",
    name: "Interactive Cat Toy",
    price: 14.99,
    available: true,
    description:
      "Interactive toy for cats to stimulate mental and physical activity.",
    ingredients: "Plastic, Feathers",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Accessories",
    animal: "Bird",
    name: "Bird Cage",
    price: 49.99,
    available: true,
    description: "Spacious bird cage suitable for small to medium-sized birds.",
    ingredients: "Metal, Plastic",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
  // Add more products to make a 3x3 grid
  {
    category: "Pet Food",
    animal: "Cat",
    name: "Organic Cat Food",
    price: 24.99,
    available: true,
    description: "Organic cat food made from natural ingredients.",
    ingredients: "Fish, Rice, Vegetables",
    allergens: "Fish",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Toys",
    animal: "Dog",
    name: "Chew Toy",
    price: 9.99,
    available: true,
    description: "Durable chew toy for dogs of all sizes.",
    ingredients: "Rubber",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Accessories",
    animal: "Fish",
    name: "Aquarium",
    price: 79.99,
    available: true,
    description: "Large aquarium suitable for all types of fish.",
    ingredients: "Glass, Plastic",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Pet Food",
    animal: "Bird",
    name: "Bird Seed Mix",
    price: 12.99,
    available: true,
    description: "Healthy mix of seeds for all types of birds.",
    ingredients: "Seeds, Nuts",
    allergens: "Nuts",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Toys",
    animal: "Rabbit",
    name: "Rabbit Tunnel",
    price: 19.99,
    available: true,
    description: "Fun and engaging tunnel for rabbits.",
    ingredients: "Fabric",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
  {
    category: "Accessories",
    animal: "Dog",
    name: "Dog Bed",
    price: 39.99,
    available: true,
    description: "Comfortable bed for dogs of all sizes.",
    ingredients: "Fabric, Foam",
    allergens: "None",
    createdBy: "60c9821c110aa742e46b275f",
  },
];

const ItemsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 text-center"
        >
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Animal:</strong> {product.animal}
          </p>
          <p>
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong>Available:</strong> {product.available ? "Yes" : "No"}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Ingredients:</strong> {product.ingredients}
          </p>
          <p>
            <strong>Allergens:</strong> {product.allergens}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemsGrid;
