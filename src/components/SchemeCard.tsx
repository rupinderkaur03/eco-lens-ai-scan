
import { ExternalLink, Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SchemeCardProps {
  scheme: {
    id: string;
    name: string;
    organization: string;
    description: string;
    type: "government" | "brand" | "ngo";
    location?: string;
    link: string;
    benefits: string[];
    status: "active" | "upcoming" | "ended";
  };
}

const SchemeCard = ({ scheme }: SchemeCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "government": return "bg-blue-100 text-blue-800";
      case "brand": return "bg-purple-100 text-purple-800";
      case "ngo": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "upcoming": return "bg-yellow-100 text-yellow-800";
      case "ended": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-green-100">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge className={getTypeColor(scheme.type)}>
            {scheme.type.charAt(0).toUpperCase() + scheme.type.slice(1)}
          </Badge>
          <Badge className={getStatusColor(scheme.status)}>
            {scheme.status.charAt(0).toUpperCase() + scheme.status.slice(1)}
          </Badge>
        </div>
        <CardTitle className="text-lg line-clamp-2">{scheme.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-600">
            <Building className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="font-medium">{scheme.organization}</span>
          </div>
          
          {scheme.location && (
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span>{scheme.location}</span>
            </div>
          )}
          
          <p className="text-gray-700 text-sm line-clamp-3">{scheme.description}</p>
          
          {scheme.benefits.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-800 text-sm mb-2">Benefits:</h4>
              <ul className="space-y-1">
                {scheme.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="text-xs text-gray-600 flex items-start">
                    <span className="text-green-600 mr-1">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl"
        >
          <a href={scheme.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Learn More
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchemeCard;
