interface MediaPlaceholderProps {
  label: string;
  aspect?: "square" | "landscape" | "video";
  className?: string;
  src?: string;
}

const MediaPlaceholder = ({ label, aspect = "landscape", className = "", src }: MediaPlaceholderProps) => {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "video"
      ? "aspect-video"
      : "aspect-[4/3]";

  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${aspectClass} ${className}`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/30 bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 ${aspectClass} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className="px-4 text-center text-xs font-medium text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
};

export default MediaPlaceholder;
