import { Sparkles, Zap, Target, Clock, Globe, Plug } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimationPlaceholderProps {
  type?: "sparkles" | "zap" | "target" | "pulse" | "plug-disconnect" | "clock-tick" | "globe-rotate";
  title?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  scrollAnimation?: "fade-up" | "bounce-in-bottom" | "slide-in-right";
}

export function AnimationPlaceholder({ 
  type = "sparkles",
  title = "Animation Placeholder", 
  description = "Interactive animation will be displayed here",
  size = "md",
  className,
  scrollAnimation
}: AnimationPlaceholderProps) {
  const iconMap = {
    sparkles: Sparkles,
    zap: Zap,
    target: Target,
    pulse: Sparkles,
    "plug-disconnect": Plug,
    "clock-tick": Clock,
    "globe-rotate": Globe
  };

  const sizeClasses = {
    sm: "h-24 w-24",
    md: "h-32 w-32", 
    lg: "h-40 w-40"
  };

  const Icon = iconMap[type] || Sparkles;

  const getAnimation = () => {
    switch (type) {
      case "pulse":
        return "animate-gentle-pulse";
      case "zap":
        return "animate-electric";
      case "target":
        return "animate-target-pulse";
      case "sparkles":
        return "animate-sparkle";
      case "plug-disconnect":
        return "hover:animate-plug-disconnect";
      case "clock-tick":
        return "hover:animate-clock-tick";
      case "globe-rotate":
        return "hover:animate-globe-rotate";
      default:
        return "animate-float";
    }
  };

  return (
    <div className={cn(
      "animation-placeholder flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-primary/30 rounded-lg",
      sizeClasses[size],
      scrollAnimation && `animate-${scrollAnimation}`,
      className
    )}>
      <div className={`${getAnimation()} mb-3`}>
        <Icon className="w-8 h-8 text-primary/60" />
      </div>
      
      <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
      
      <div className="absolute top-1 right-1 bg-primary/10 backdrop-blur-sm rounded px-1.5 py-0.5 text-xs text-primary font-mono">
        {type.toUpperCase()}
      </div>
    </div>
  );
}