
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Send, Award, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const ShareActionPage = () => {
  const [actionText, setActionText] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [shareToFeed, setShareToFeed] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pointsEarned, setPointsEarned] = useState(0);
  const navigate = useNavigate();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        toast({
          title: "Image uploaded!",
          description: "Your action photo has been added."
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitAction = () => {
    if (!actionText.trim()) {
      toast({
        title: "Action required",
        description: "Please describe how you recycled the product.",
        variant: "destructive"
      });
      return;
    }

    // Calculate points based on action
    let earnedPoints = 15; // Base points
    if (selectedImage) earnedPoints += 5; // Bonus for photo
    if (actionText.length > 100) earnedPoints += 5; // Bonus for detailed description

    setPointsEarned(earnedPoints);
    setIsSubmitted(true);

    toast({
      title: "Action submitted successfully!",
      description: `You earned ${earnedPoints} Eco Points! 🎉`
    });
  };

  const handleShareToCommunity = () => {
    navigate("/community");
    toast({
      title: "Shared to community!",
      description: "Your eco action is now visible to other users."
    });
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="text-center">
          <CardContent className="p-8">
            <div className="mb-6">
              <Check className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-2">Action Submitted!</h2>
              <p className="text-gray-600">Thank you for sharing your eco-friendly action</p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">+{pointsEarned} Eco Points</div>
              <p className="text-green-700">Added to your profile!</p>
            </div>

            <div className="space-y-4">
              {shareToFeed && (
                <Button 
                  onClick={handleShareToCommunity}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 rounded-xl"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  View in Community Feed
                </Button>
              )}
              
              <Button 
                onClick={() => navigate("/scan")}
                variant="outline" 
                className="w-full border-green-300 text-green-700 hover:bg-green-50 py-6 rounded-xl"
              >
                Scan Another Product
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <Share2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Share Your Action</h1>
        <p className="text-gray-600">
          Tell the community how you recycled your scanned product and earn Eco Points!
        </p>
      </div>

      {/* Action Form */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>How did you recycle it?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Text Input */}
          <div>
            <Textarea
              placeholder="Describe your eco-friendly action... 
Example: 'I removed the plastic label and put the glass jar in my recycling bin. Then I reused the plastic cap as a plant pot for my herbs!'"
              value={actionText}
              onChange={(e) => setActionText(e.target.value)}
              className="min-h-32 resize-none"
            />
            <div className="text-right text-sm text-gray-500 mt-2">
              {actionText.length}/500 characters
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add a photo (optional)
            </label>
            {selectedImage ? (
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Action photo" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-white/90"
                >
                  Remove
                </Button>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="action-photo"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-300 transition-colors">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Click to upload a photo of your action</p>
                  <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>
            )}
          </div>

          {/* Share to Community */}
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="share-community"
              checked={shareToFeed}
              onCheckedChange={(checked) => setShareToFeed(checked as boolean)}
            />
            <label htmlFor="share-community" className="text-sm font-medium text-gray-700 cursor-pointer">
              Share to Community Feed
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Points Preview */}
      <Card className="mb-6 bg-green-50 border-green-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-green-800">Eco Points You'll Earn:</h3>
              <div className="text-sm text-green-700 space-y-1 mt-2">
                <div>• Base reward: 15 points</div>
                {selectedImage && <div>• Photo bonus: +5 points</div>}
                {actionText.length > 100 && <div>• Detailed description: +5 points</div>}
              </div>
            </div>
            <div className="text-right">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-1" />
              <div className="text-2xl font-bold text-green-600">
                +{15 + (selectedImage ? 5 : 0) + (actionText.length > 100 ? 5 : 0)} pts
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button 
        onClick={handleSubmitAction}
        disabled={!actionText.trim()}
        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg rounded-xl"
      >
        <Send className="h-5 w-5 mr-2" />
        Submit Action
      </Button>

      {/* Tips */}
      <Card className="mt-8 bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-800 mb-3">💡 Tips for earning more points:</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Be specific about your recycling method</li>
            <li>• Include creative reuse ideas</li>
            <li>• Add a photo showing your action</li>
            <li>• Share tips that others can follow</li>
            <li>• Mention any challenges you overcame</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShareActionPage;
