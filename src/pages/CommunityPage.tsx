
import { useState } from "react";
import { Users, TrendingUp, Filter, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeedCard from "@/components/FeedCard";

const CommunityPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("recent");

  const filters = [
    { id: "recent", name: "Most Recent" },
    { id: "popular", name: "Most Popular" },
    { id: "points", name: "Highest Points" }
  ];

  const feedPosts = [
    {
      id: "1",
      username: "Rahul Kumar",
      userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50",
      actionText: "Separated the plastic cap from this glass jar and put it in recycling. Now using the jar to store my homemade granola! Zero waste achieved! 🌱",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=400",
      date: "2024-01-15T10:30:00Z",
      pointsEarned: 25,
      likes: 12,
      comments: 3,
      isLiked: false
    },
    {
      id: "2", 
      username: "Priya Sharma",
      userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50",
      actionText: "Found this eco-friendly alternative at my local store! The packaging is 100% biodegradable and the product works even better than conventional ones. Highly recommended! ♻️",
      date: "2024-01-15T08:15:00Z",
      pointsEarned: 20,
      likes: 18,
      comments: 7,
      isLiked: true
    },
    {
      id: "3",
      username: "Amit Singh", 
      userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50",
      actionText: "Taught my neighbor how to properly separate recyclables after scanning this product. She's now using EcoLens too! Community action is the best action 👥✨",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      date: "2024-01-14T16:45:00Z",
      pointsEarned: 30,
      likes: 25,
      comments: 12,
      isLiked: true
    },
    {
      id: "4",
      username: "Sneha Gupta",
      userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50", 
      actionText: "Made this beautiful planter from the plastic container I scanned yesterday. Who says plastic waste can't be turned into something beautiful? 🌿🎨",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      date: "2024-01-14T11:20:00Z",
      pointsEarned: 35,
      likes: 31,
      comments: 8,
      isLiked: false
    },
    {
      id: "5",
      username: "Kavya Reddy",
      userAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50",
      actionText: "Discovered that my city has a new e-waste collection point through the schemes section. Took all my old electronics there and got eco points! Knowledge is power 💡",
      date: "2024-01-13T14:30:00Z", 
      pointsEarned: 15,
      likes: 9,
      comments: 2,
      isLiked: false
    }
  ];

  const communityStats = [
    { label: "Active Members", value: "5.2K", icon: Users },
    { label: "Actions Shared", value: "12.8K", icon: Plus },
    { label: "Points Earned", value: "245K", icon: TrendingUp }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Community Feed</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how others are making a difference and get inspired by their eco-friendly actions
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {communityStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-800 mb-1">{stat.value}</div>
                <div className="text-sm text-purple-700">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Action Button */}
      <div className="text-center mb-8">
        <Link to="/share">
          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl">
            <Plus className="h-5 w-5 mr-2" />
            Share Your Action
          </Button>
        </Link>
      </div>

      {/* Feed Section */}
      <Tabs defaultValue="feed" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="feed">Community Feed</TabsTrigger>
          <TabsTrigger value="trending">Trending Actions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="feed" className="space-y-6">
          {/* Filter Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Sort By
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter.id)}
                    className={selectedFilter === filter.id 
                      ? "bg-purple-600 hover:bg-purple-700" 
                      : "border-purple-300 text-purple-700 hover:bg-purple-50"
                    }
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Feed Posts */}
          <div className="space-y-6">
            {feedPosts.map((post) => (
              <FeedCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          <div className="text-center py-12">
            <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Trending Actions</h3>
            <p className="text-gray-500 mb-6">
              This week's most impactful eco-actions from our community
            </p>
            {/* Show top trending posts */}
            <div className="space-y-6">
              {feedPosts.slice(0, 3).map((post) => (
                <FeedCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Ready to make an impact?
          </h3>
          <p className="text-green-700 mb-6">
            Start scanning products, learn about their environmental impact, and share your eco-actions with the community!
          </p>
          <div className="space-x-4">
            <Link to="/scan">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Start Scanning
              </Button>
            </Link>
            <Link to="/share">
              <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                Share Action
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityPage;
