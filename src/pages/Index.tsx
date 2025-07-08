
import { Link } from "react-router-dom";
import { Camera, Leaf, Users, Award, TrendingUp, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Smart Scanning",
      description: "AI-powered packaging analysis in seconds",
      link: "/scan"
    },
    {
      icon: Leaf,
      title: "Eco Scores",
      description: "Understand environmental impact instantly",
      link: "/result"
    },
    {
      icon: Recycle,
      title: "Better Alternatives",
      description: "Discover eco-friendly product options",
      link: "/recommendations"
    },
    {
      icon: Users,
      title: "Community",
      description: "Share your sustainable actions",
      link: "/community"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              EcoLens
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered sustainability platform that helps you understand packaging impact, 
            find better alternatives, and gamify eco-actions
          </p>
          <Link to="/scan">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Camera className="h-5 w-5 mr-2" />
              Start Scanning
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Link key={index} to={feature.link}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/70 backdrop-blur-sm border-green-100">
                <CardContent className="p-6 text-center">
                  <Icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-green-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Making Impact Together
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-600 mb-1">10K+</div>
            <div className="text-gray-600">Products Scanned</div>
          </div>
          <div>
            <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-emerald-600 mb-1">5K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <Award className="h-8 w-8 text-teal-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-teal-600 mb-1">50K+</div>
            <div className="text-gray-600">Eco Points Earned</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
          Ready to Start Your Eco Journey?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of users making sustainable choices every day. 
          Scan, learn, act, and earn rewards for your eco-friendly actions.
        </p>
        <div className="space-x-4">
          <Link to="/scan">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl">
              Start Scanning
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="outline" size="lg" className="border-green-300 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
