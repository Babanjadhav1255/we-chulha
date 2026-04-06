import { Camera } from "lucide-react";

interface MediaPlaceholderProps {
  label: string;
  aspect?: "square" | "landscape" | "video";
  className?: string;
}

const MediaPlaceholder = ({ label, aspect = "landscape", className = "" }: MediaPlaceholderProps) => {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "video"
      ? "aspect-video"
      : "aspect-[4/3]";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 ${aspectClass} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
          <Camera className="h-7 w-7 text-primary" />
        </div>
        <span className="px-4 text-center text-xs font-medium text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MediaPlaceholder;
