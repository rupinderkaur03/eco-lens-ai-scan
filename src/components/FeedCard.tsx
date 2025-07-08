
import { Heart, MessageCircle, Share2, User, Award } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface FeedCardProps {
  post: {
    id: string;
    username: string;
    userAvatar?: string;
    actionText: string;
    image?: string;
    date: string;
    pointsEarned: number;
    likes: number;
    comments: number;
    isLiked?: boolean;
  };
}

const FeedCard = ({ post }: FeedCardProps) => {
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "1 day ago";
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200 bg-white">
      <CardContent className="p-6">
        {/* User Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.userAvatar} alt={post.username} />
              <AvatarFallback>
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-800">{post.username}</h3>
              <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800">
            <Award className="h-3 w-3 mr-1" />
            +{post.pointsEarned} pts
          </Badge>
        </div>

        {/* Action Text */}
        <p className="text-gray-700 mb-4 leading-relaxed">{post.actionText}</p>

        {/* Image */}
        {post.image && (
          <div className="mb-4">
            <img 
              src={post.image} 
              alt="User action" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`hover:bg-red-50 ${isLiked ? 'text-red-600' : 'text-gray-600'}`}
            >
              <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
              {likesCount}
            </Button>
            
            <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50">
              <MessageCircle className="h-4 w-4 mr-1" />
              {post.comments}
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-green-50">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
