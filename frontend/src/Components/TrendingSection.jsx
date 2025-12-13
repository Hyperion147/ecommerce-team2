import { useState } from "react";
import products from "../Data/products.json";
import ProductCard from "./ProductCard";

export default function TrendingSection() {
  // Get trending products (top rated products)
  const trendingProducts = products
    .filter(product => product.star >= 8.0)
    .slice(0, 8);

  const [showAll, setShowAll] = useState(false);
  const displayProducts = showAll ? trendingProducts : trendingProducts.slice(0, 4);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trending <span className="text-blue-500">Now</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover our most popular items loved by fashion enthusiasts worldwide
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {trendingProducts.length > 4 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300"
          >
            {showAll ? "Show Less" : `View All ${trendingProducts.length} Products`}
          </button>
        </div>
      )}

      {/* Categories Preview */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center mb-8">Shop by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80", count: "8 items" },
            { name: "Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80", count: "5 items" },
            { name: "T-Shirts", image: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=400&q=80", count: "4 items" },
            { name: "Jeans", image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&q=80", count: "3 items" }
          ].map((category, index) => (
            <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white font-semibold">{category.name}</h4>
                <p className="text-gray-300 text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}