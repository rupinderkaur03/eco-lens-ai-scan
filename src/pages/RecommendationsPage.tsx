
import { useState } from "react";
import { Search, Filter, Leaf } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";

const RecommendationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "food", name: "Food & Beverages" },
    { id: "personal", name: "Personal Care" },
    { id: "household", name: "Household" },
    { id: "packaging", name: "Packaging Materials" }
  ];

  const products = [
    {
      id: "1",
      name: "Bamboo Fiber Food Container",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      ecoScore: 92,
      price: "$24.99",
      brand: "EcoLife",
      rating: 4.8,
      description: "100% biodegradable bamboo fiber container perfect for food storage"
    },
    {
      id: "2", 
      name: "Recycled Paper Packaging",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400",
      ecoScore: 87,
      price: "$12.99",
      brand: "GreenPack",
      rating: 4.6,
      description: "Made from 100% recycled materials with biodegradable coating"
    },
    {
      id: "3",
      name: "Reusable Glass Bottles",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      ecoScore: 95,
      price: "$18.99",
      brand: "ClearGreen",
      rating: 4.9,
      description: "Durable borosilicate glass bottles with leak-proof caps"
    },
    {
      id: "4",
      name: "Compostable Food Wraps",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      ecoScore: 89,
      price: "$15.99",
      brand: "WrapGreen",
      rating: 4.7,
      description: "Plant-based wraps that decompose in home compost within 90 days"
    },
    {
      id: "5",
      name: "Hemp-Based Shopping Bags",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      ecoScore: 91,
      price: "$8.99",
      brand: "HempCo",
      rating: 4.5,
      description: "Strong, durable hemp bags that last for years of shopping"
    },
    {
      id: "6",
      name: "Biodegradable Soap Packaging",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400",
      ecoScore: 84,
      price: "$6.99",
      brand: "CleanGreen",
      rating: 4.4,
      description: "Soap bars wrapped in plantable seed paper packaging"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           product.name.toLowerCase().includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Eco-Friendly Alternatives</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover sustainable products with better environmental scores and make eco-conscious choices
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Find Products
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for eco-friendly products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "border-green-300 text-green-700 hover:bg-green-50"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} eco-friendly alternatives
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Call to Action */}
      <Card className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-green-700 mb-6">
            Submit a product request and we'll help you find the perfect eco-friendly alternative
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Request Product
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationsPage;
