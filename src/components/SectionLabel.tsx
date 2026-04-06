import { Flame } from "lucide-react";

interface SectionLabelProps {
  children: string;
}

const SectionLabel = ({ children }: SectionLabelProps) => (
  <div className="mb-4 flex items-center justify-center gap-2">
    <Flame className="h-4 w-4 text-primary" />
    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
      {children}
    </span>
  </div>
);

export default SectionLabel;
