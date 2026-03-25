import { Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollSection from "@/components/ScrollSection";
import TiltCard from "@/components/TiltCard";

const gallerySlots = [
  { label: "WE Chulha — Front View", aspect: "aspect-[4/3]" },
  { label: "Stove in Action — Flame", aspect: "aspect-square" },
  { label: "Kitchen Setup", aspect: "aspect-square" },
  { label: "Pellet Fuel Close-up", aspect: "aspect-[4/3]" },
  { label: "Restaurant Installation", aspect: "aspect-[4/3]" },
  { label: "Happy Customer", aspect: "aspect-[4/3]" },
];

const ProductGallery = () => {
  return (
    <section id="gallery" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollSection>
          <h2 className="mb-14 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            See <span className="text-primary">WE Chulha</span> Up Close
          </h2>
        </ScrollSection>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {gallerySlots.map((slot, i) => (
            <ScrollSection key={slot.label} delay={i * 0.08}>
              <TiltCard className="h-full">
                <Card className={`group relative overflow-hidden border-0 glass ${slot.aspect}`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 transition-all group-hover:from-primary/20 group-hover:to-primary/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <span className="px-3 text-center text-xs font-medium text-muted-foreground">
                      {slot.label}
                    </span>
                  </div>
                </Card>
              </TiltCard>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
