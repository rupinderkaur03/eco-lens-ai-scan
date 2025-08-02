
import { cn } from "@/lib/utils";

interface EcoScoreBarProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const EcoScoreBar = ({ 
  score, 
  maxScore = 100, 
  size = "md", 
  showLabel = true,
  className 
}: EcoScoreBarProps) => {
  const percentage = Math.min((score / maxScore) * 100, 100);
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Poor";
  };

  const sizeClasses = {
    sm: "h-2",
    md: "h-4",
    lg: "h-6"
  };

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Eco Score: {getScoreLabel(score)}
          </span>
          <span className="text-sm font-bold text-gray-800">
            {score}/{maxScore}
          </span>
        </div>
      )}
      <div className={cn("w-full bg-gray-200 rounded-full overflow-hidden", sizeClasses[size])}>
        <div 
          className={cn(
          "h-full rounded-full transition-all duration-500 ease-out",
            getScoreColor(score)
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default EcoScoreBar;
