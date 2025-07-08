
import { useState } from "react";
import { Link } from "react-router-dom";
import { Share2, Lightbulb, Recycle, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EcoScoreBar from "@/components/EcoScoreBar";

const ResultPage = () => {
  const [showTips, setShowTips] = useState(false);

  const tips = [
    {
      icon: Recycle,
      title: "Proper Recycling",
      description: "Remove any plastic labels before putting this in your recycling bin"
    },
    {
      icon: Lightbulb,
      title: "Reduce Usage",
      description: "Consider buying in bulk to reduce packaging waste"
    },
    {
      icon: Share2,
      title: "Share & Educate",
      description: "Tell others about sustainable packaging choices"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Scan Results</h1>
        <p className="text-gray-600">Here's what we found about your product packaging</p>
      </div>

      {/* Product Image */}
      <Card className="mb-6 overflow-hidden">
        <CardContent className="p-0">
          <img 
            src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400" 
            alt="Scanned product" 
            className="w-full h-64 object-cover"
          />
        </CardContent>
      </Card>

      {/* Eco Score */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 text-green-600 mr-2" />
            Eco-Safety Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EcoScoreBar score={68} size="lg" className="mb-4" />
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 font-medium">
              This packaging is recyclable but not biodegradable.
            </p>
            <p className="text-yellow-700 text-sm mt-1">
              Made from recyclable materials but will persist in the environment if not properly disposed of.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Impact Breakdown */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Environmental Impact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Recyclability</span>
            <span className="font-semibold text-green-600">85%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Biodegradability</span>
            <span className="font-semibold text-red-600">15%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Carbon Footprint</span>
            <span className="font-semibold text-yellow-600">Medium</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Material Safety</span>
            <span className="font-semibold text-green-600">Safe</span>
          </div>
        </CardContent>
      </Card>

      {/* What You Can Do */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowTips(!showTips)}
          >
            <span className="flex items-center">
              <Lightbulb className="h-5 w-5 text-yellow-600 mr-2" />
              What You Can Do
            </span>
            <ChevronRight className={`h-5 w-5 transition-transform ${showTips ? 'rotate-90' : ''}`} />
          </CardTitle>
        </CardHeader>
        {showTips && (
          <CardContent className="space-y-4">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        )}
      </Card>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Link to="/recommendations">
          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 rounded-xl">
            Find Better Alternatives
          </Button>
        </Link>
        
        <Link to="/share">
          <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50 py-6 rounded-xl">
            <Share2 className="h-4 w-4 mr-2" />
            Share Your Action
          </Button>
        </Link>

        <Link to="/scan">
          <Button variant="ghost" className="w-full text-gray-600 hover:text-green-600 py-6 rounded-xl">
            Scan Another Product
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
