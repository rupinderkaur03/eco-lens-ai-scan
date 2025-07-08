
import { useState } from "react";
import { Search, Filter, Award, Building } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SchemeCard from "@/components/SchemeCard";
import RegionSelector from "@/components/RegionSelector";

const SchemesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const regions = [
    { id: "all", name: "All Regions", type: "country" as const },
    { id: "delhi", name: "Delhi", type: "city" as const },
    { id: "mumbai", name: "Mumbai", type: "city" as const },
    { id: "bangalore", name: "Bangalore", type: "city" as const },
    { id: "chennai", name: "Chennai", type: "city" as const },
    { id: "kolkata", name: "Kolkata", type: "city" as const },
    { id: "maharashtra", name: "Maharashtra", type: "state" as const },
    { id: "karnataka", name: "Karnataka", type: "state" as const },
  ];

  const types = [
    { id: "all", name: "All Programs" },
    { id: "government", name: "Government" },
    { id: "brand", name: "Brand" },
    { id: "ngo", name: "NGO" }
  ];

  const schemes = [
    {
      id: "1",
      name: "Plastic Waste Management Scheme",
      organization: "Ministry of Environment (MoEFCC)",
      description: "National program for plastic waste collection, segregation, and recycling. Provides incentives for proper disposal and supports recycling infrastructure development.",
      type: "government" as const,
      location: "Pan India",
      link: "https://moef.gov.in",
      benefits: [
        "Cash rewards for plastic collection",
        "Free pickup service",
        "Environmental impact tracking"
      ],
      status: "active" as const
    },
    {
      id: "2",
      name: "Unilever Take-Back Program",
      organization: "Hindustan Unilever Limited",
      description: "Return empty personal care and household product containers for recycling. Part of Unilever's commitment to sustainable packaging and circular economy.",
      type: "brand" as const,
      location: "Major Cities",
      link: "https://unilever.com",
      benefits: [
        "Product discounts on return",
        "Loyalty points system",
        "Environmental certificate"
      ],
      status: "active" as const
    },
    {
      id: "3",
      name: "Extended Producer Responsibility (EPR)",
      organization: "Central Pollution Control Board",
      description: "Mandatory program requiring manufacturers to take responsibility for their packaging waste throughout the product lifecycle.",
      type: "government" as const,
      location: "Pan India",
      link: "https://cpcb.nic.in",
      benefits: [
        "Compliance certification",
        "Reduced environmental impact",
        "Industry recognition"
      ],
      status: "active" as const
    },
    {
      id: "4",
      name: "Green Packaging Initiative",
      organization: "Tata Consumer Products",
      description: "Sustainable packaging solution program focusing on biodegradable and recyclable materials for food and beverage products.",
      type: "brand" as const,
      location: "Mumbai, Delhi, Bangalore",
      link: "https://tataproducts.com",
      benefits: [
        "Eco-friendly packaging",
        "Consumer awareness programs",
        "Waste reduction incentives"
      ],
      status: "active" as const
    },
    {
      id: "5",
      name: "Zero Waste Chennai",
      organization: "Environmentalist Foundation of India",
      description: "Community-driven waste management program focusing on waste segregation, composting, and recycling in Chennai city.",
      type: "ngo" as const,
      location: "Chennai",
      link: "https://efi.org.in",
      benefits: [
        "Community composting facilities",
        "Waste collection services",
        "Environmental education"
      ],
      status: "active" as const
    },
    {
      id: "6",
      name: "Swachh Packaging Mission",
      organization: "Ministry of Consumer Affairs",
      description: "Upcoming national initiative to promote sustainable packaging practices across all consumer product categories.",
      type: "government" as const,
      location: "Pan India",
      link: "https://consumeraffairs.nic.in",
      benefits: [
        "Industry guidelines",
        "Financial incentives",
        "Technology support"
      ],
      status: "upcoming" as const
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || scheme.type === selectedType;
    const matchesRegion = selectedRegion === "all" || 
                         scheme.location?.toLowerCase().includes(selectedRegion.toLowerCase());
    return matchesSearch && matchesType && matchesRegion;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Schemes & Take-back Programs</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover government initiatives and brand programs that support sustainable packaging and waste management
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="h-5 w-5 mr-2" />
            Find Programs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for schemes and programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Region Selector */}
            <RegionSelector
              regions={regions}
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              placeholder="Select region"
            />

            {/* Type Filter */}
            <div>
              <div className="flex items-center mb-2">
                <Building className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Program Type</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedType === type.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.id)}
                    className={selectedType === type.id 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "border-blue-300 text-blue-700 hover:bg-blue-50"
                    }
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredSchemes.length} programs and schemes
        </p>
      </div>

      {/* Schemes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>

      {/* No Results */}
      {filteredSchemes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No programs found</h3>
          <p className="text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Call to Action */}
      <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-blue-800 mb-4">
            Know of a program we're missing?
          </h3>
          <p className="text-blue-700 mb-6">
            Help us expand our database by suggesting new schemes and take-back programs
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Suggest Program
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemesPage;
