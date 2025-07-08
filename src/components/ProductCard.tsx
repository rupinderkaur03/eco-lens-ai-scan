
import { Link } from "react-router-dom";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import EcoScoreBar from "./EcoScoreBar";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    ecoScore: number;
    price?: string;
    brand: string;
    rating?: number;
    description: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-green-100">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.ecoScore >= 80 && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Eco Friendly
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
          </div>

          {product.rating && (
            <div className="flex items-center mb-2">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
          )}

          <EcoScoreBar score={product.ecoScore} size="sm" className="mb-3" />
          
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>
          
          {product.price && (
            <div className="text-lg font-bold text-green-600 mb-3">{product.price}</div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          asChild
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl"
        >
          <Link to={`/product/${product.id}`}>
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
