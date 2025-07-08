
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Camera, Home, Award, Users, User, Recycle, Leaf, TreePine, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Camera, label: "Scan", path: "/scan" },
    { icon: Award, label: "Schemes", path: "/schemes" },
    { icon: Recycle, label: "Recommendations", path: "/recommendations" },
    { icon: Users, label: "Community", path: "/community" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <>
      {/* Top Navigation for Desktop */}
      <nav className="hidden md:block bg-white/80 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Enhanced Logo Design */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-600 transform group-hover:rotate-12 transition-transform duration-300" />
                  <TreePine className="h-5 w-5 text-emerald-700 absolute -top-1 -right-1" />
                  <Sparkles className="h-3 w-3 text-green-500 absolute -bottom-1 -left-1 animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  EcoLens
                </span>
                <span className="text-xs text-green-600/70 font-medium -mt-1">AI Sustainability</span>
              </div>
            </Link>
            
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-green-100/80 text-green-700 shadow-sm"
                        : "text-gray-600 hover:text-green-600 hover:bg-green-50/80"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-green-200/50 z-50 shadow-lg">
        <div className="grid grid-cols-6 gap-1 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-lg text-xs font-medium transition-all duration-200",
                  isActive
                    ? "bg-green-100/80 text-green-700 shadow-sm"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50/80"
                )}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
