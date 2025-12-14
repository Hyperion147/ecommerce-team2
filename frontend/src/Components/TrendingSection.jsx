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


    </section>
  );
}