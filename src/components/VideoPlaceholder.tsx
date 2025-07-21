import { Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoPlaceholderProps {
  title?: string;
  description?: string;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  size?: "sm" | "md" | "lg" | "xl";
  showControls?: boolean;
}

export function VideoPlaceholder({ 
  title = "Video Placeholder", 
  description = "This is where your video content will be displayed",
  aspectRatio = "16:9",
  size = "md",
  showControls = true 
}: VideoPlaceholderProps) {
  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square"
  };

  const sizeClasses = {
    sm: "h-32",
    md: "h-48",
    lg: "h-64",
    xl: "h-80"
  };

  return (
    <div className={`video-placeholder ${aspectClasses[aspectRatio]} ${sizeClasses[size]} w-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-primary/30`}>
      <div className="animate-float mb-4">
        <Film className="w-12 h-12 text-primary/60" />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 max-w-xs">{description}</p>
      
      {showControls && (
        <Button variant="outline" size="sm" className="gap-2">
          <Play className="w-4 h-4" />
          Play Video
        </Button>
      )}
      
      <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">
        Video Placeholder
      </div>
    </div>
  );
}