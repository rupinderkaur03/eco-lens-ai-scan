
import { MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Region {
  id: string;
  name: string;
  type: "city" | "state" | "country";
}

interface RegionSelectorProps {
  regions: Region[];
  selectedRegion: string;
  onRegionChange: (regionId: string) => void;
  placeholder?: string;
}

const RegionSelector = ({ 
  regions, 
  selectedRegion, 
  onRegionChange, 
  placeholder = "Select your region" 
}: RegionSelectorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center mb-2">
        <MapPin className="h-4 w-4 text-green-600 mr-2" />
        <span className="text-sm font-medium text-gray-700">Your Region</span>
      </div>
      <Select value={selectedRegion} onValueChange={onRegionChange}>
        <SelectTrigger className="w-full border-green-300 focus:border-green-500">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white border-green-200 z-50">
          {regions.map((region) => (
            <SelectItem key={region.id} value={region.id}>
              <div className="flex items-center">
                <span>{region.name}</span>
                <span className="ml-2 text-xs text-gray-500 capitalize">
                  ({region.type})
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegionSelector;
