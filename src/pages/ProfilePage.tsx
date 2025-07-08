
import { useState } from "react";
import { User, Award, Target, TrendingUp, Star, Edit, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RegionSelector from "@/components/RegionSelector";

const ProfilePage = () => {
  const [selectedRegion, setSelectedRegion] = useState("mumbai");

  const regions = [
    { id: "mumbai", name: "Mumbai", type: "city" as const },
    { id: "delhi", name: "Delhi", type: "city" as const },
    { id: "bangalore", name: "Bangalore", type: "city" as const },
    { id: "chennai", name: "Chennai", type: "city" as const },
    { id: "maharashtra", name: "Maharashtra", type: "state" as const },
  ];

  const userData = {
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
    city: "Mumbai",
    totalScans: 127,
    ecoPoints: 2450,
    level: "Eco Champion",
    rank: 15,
    totalUsers: 2847
  };

  const badges = [
    { id: 1, name: "Eco Warrior", icon: "🌿", description: "Scanned 100+ products", earned: true },
    { id: 2, name: "Plastic Saver", icon: "♻️", description: "Avoided 50+ plastic items", earned: true },
    { id: 3, name: "Community Leader", icon: "👥", description: "Shared 25+ actions", earned: true },
    { id: 4, name: "Green Guru", icon: "🧙‍♀️", description: "Maintained 90% eco score", earned: false },
    { id: 5, name: "Sustainability Star", icon: "⭐", description: "Top 10 in leaderboard", earned: false },
    { id: 6, name: "Recycling Hero", icon: "🏆", description: "Recycled 1000+ items", earned: true }
  ];

  const leaderboard = [
    { rank: 1, name: "Arjun Patel", points: 3250, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50" },
    { rank: 2, name: "Sneha Gupta", points: 3100, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50" },
    { rank: 3, name: "Rahul Kumar", points: 2980, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50" },
    { rank: 14, name: "Amit Singh", points: 2500, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50" },
    { rank: 15, name: "Priya Sharma", points: userData.ecoPoints, avatar: userData.photo, isCurrentUser: true },
    { rank: 16, name: "Kavya Reddy", points: 2400, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50" },
  ];

  const achievements = [
    { month: "Jan", scans: 15, points: 300 },
    { month: "Feb", scans: 22, points: 440 },
    { month: "Mar", scans: 18, points: 360 },
    { month: "Apr", scans: 25, points: 500 },
    { month: "May", scans: 28, points: 560 },
    { month: "Jun", scans: 19, points: 290 }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile</h1>
        <p className="text-gray-600">Track your eco journey and see your impact</p>
      </div>

      {/* User Profile Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userData.photo} alt={userData.name} />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
              <div className="flex items-center justify-center md:justify-start mt-1 mb-3">
                <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                <span className="text-gray-600">{userData.city}</span>
              </div>
              <Badge className="bg-green-100 text-green-800 mb-3">
                {userData.level}
              </Badge>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{userData.totalScans}</div>
                  <div className="text-sm text-gray-600">Total Scans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{userData.ecoPoints}</div>
                  <div className="text-sm text-gray-600">Eco Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">#{userData.rank}</div>
                  <div className="text-sm text-gray-600">City Rank</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Badges */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-600" />
            Achievement Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div 
                key={badge.id} 
                className={`p-4 rounded-lg text-center transition-all duration-200 ${
                  badge.earned 
                    ? 'bg-yellow-50 border-2 border-yellow-200 hover:shadow-md' 
                    : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                }`}
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{badge.name}</h4>
                <p className="text-xs text-gray-600">{badge.description}</p>
                {badge.earned && <Star className="h-4 w-4 text-yellow-500 mx-auto mt-2" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Region Selector and Leaderboard */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Change Region</CardTitle>
            </CardHeader>
            <CardContent>
              <RegionSelector
                regions={regions}
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
                placeholder="Select your region"
              />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                {regions.find(r => r.id === selectedRegion)?.name} Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      user.isCurrentUser ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`font-bold text-lg ${
                        user.rank <= 3 ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        #{user.rank}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <span className={`font-medium ${
                        user.isCurrentUser ? 'text-green-800' : 'text-gray-800'
                      }`}>
                        {user.name}
                        {user.isCurrentUser && ' (You)'}
                      </span>
                    </div>
                    <div className="font-bold text-green-600">{user.points} pts</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Monthly Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2 text-blue-600" />
            Monthly Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {achievements.map((month) => (
              <div key={month.month} className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-sm font-medium text-blue-800 mb-1">{month.month}</div>
                <div className="text-lg font-bold text-blue-600">{month.scans}</div>
                <div className="text-xs text-blue-700">scans</div>
                <div className="text-xs text-gray-600 mt-1">{month.points} pts</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
