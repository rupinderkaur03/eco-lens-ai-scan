
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Upload, Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const ScanPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        toast({
          title: "Image uploaded successfully!",
          description: "Click 'Analyze Packaging' to get your eco score."
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate camera scanning
    setTimeout(() => {
      setSelectedImage("https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400");
      setIsScanning(false);
      toast({
        title: "Package detected!",
        description: "Click 'Analyze Packaging' to get your eco score."
      });
    }, 2000);
  };

  const handleAnalyze = () => {
    if (selectedImage) {
      toast({
        title: "Analyzing packaging...",
        description: "This may take a few seconds."
      });
      setTimeout(() => {
        navigate("/result");
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center mb-8">
        <Scan className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Package Scanner</h1>
        <p className="text-gray-600">
          Scan or upload a photo of product packaging to get an instant eco-safety score
        </p>
      </div>

      {/* Camera Frame */}
      <Card className="mb-6 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
            {selectedImage ? (
              <img 
                src={selectedImage} 
                alt="Scanned package" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                {isScanning ? (
                  <div className="animate-pulse">
                    <Camera className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600">Scanning...</p>
                  </div>
                ) : (
                  <>
                    <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Camera preview will appear here</p>
                  </>
                )}
              </div>
            )}
            
            {/* Scanning overlay */}
            {isScanning && (
              <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-green-500 rounded-lg animate-pulse" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-4 mb-8">
        <Button 
          onClick={handleStartScan}
          disabled={isScanning}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg rounded-xl"
        >
          <Camera className="h-5 w-5 mr-2" />
          {isScanning ? "Scanning..." : "Start Camera Scan"}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 text-gray-500">
              or
            </span>
          </div>
        </div>

        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            id="file-upload"
          />
          <Button 
            variant="outline" 
            className="w-full border-green-300 text-green-700 hover:bg-green-50 py-6 text-lg rounded-xl"
            asChild
          >
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-5 w-5 mr-2" />
              Upload Image
            </label>
          </Button>
        </div>
      </div>

      {/* Analyze Button */}
      {selectedImage && (
        <Button 
          onClick={handleAnalyze}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl animate-fade-in"
        >
          <Scan className="h-5 w-5 mr-2" />
          Analyze Packaging
        </Button>
      )}

      {/* Tips */}
      <Card className="mt-8 bg-green-50 border-green-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-green-800 mb-3">Tips for better scanning:</h3>
          <ul className="space-y-2 text-sm text-green-700">
            <li>• Ensure good lighting</li>
            <li>• Keep the package flat and centered</li>
            <li>• Make sure labels are clearly visible</li>
            <li>• Avoid shadows and reflections</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScanPage;
