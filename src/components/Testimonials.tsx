import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScrollSection from "@/components/ScrollSection";
import TiltCard from "@/components/TiltCard";

const testimonials = [
  {
    name: "Gutti Chutney Restaurant",
    location: "Baner, Pune",
    quote: "We switched from commercial LPG to WE Chulha and our monthly fuel bill dropped by 50%. The kitchen is cleaner, staff is happier, and food quality hasn't changed at all. Best decision we made!",
    rating: 5,
    highlight: "Bill cut by half!",
  },
  {
    name: "Street Food Vendor",
    location: "Pune",
    quote: "No more waiting for cylinder delivery. I buy pellets locally whenever I need. At ₹6 per cooking session, it's unbeatable. My chai stall runs non-stop now.",
    rating: 5,
    highlight: "₹6 per session",
  },
  {
    name: "Catering Business Owner",
    location: "Baner, Pune",
    quote: "The battery-powered fan means I can cook anywhere — even outdoor events with no electricity. Very low smoke, very impressed with the build quality.",
    rating: 5,
    highlight: "Works anywhere",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <ScrollSection>
          <h2 className="mb-4 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-muted-foreground">
            Real businesses, real savings. Here's what WE Chulha users have to say.
          </p>
        </ScrollSection>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollSection key={t.name} delay={i * 0.1}>
              <TiltCard className="h-full">
                <Card className="h-full border-0 glass shadow-lg">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Quote className="h-5 w-5 text-primary/30" />
                    </div>
                    <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {t.highlight}
                    </span>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground italic">
                      "{t.quote}"
                    </p>
                    <div className="border-t border-border/30 pt-3">
                      <p className="font-['Space_Grotesk'] text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </ScrollSection>
          ))}
        </div>

        {/* Instagram Video Embed */}
        <ScrollSection delay={0.2}>
          <div className="mt-14">
            <Card className="overflow-hidden border-0 glass shadow-xl">
              <CardContent className="flex flex-col items-center gap-6 p-8 md:flex-row md:p-10">
                <div className="flex-1 space-y-4">
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-foreground">
                    🔥 Gutti Chutney's WE Chulha Story
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Baner's popular Gutti Chutney restaurant was spending ₹1,896 per commercial LPG cylinder. 
                    After switching to WE Chulha, their monthly cooking fuel cost dropped by <strong className="text-primary">50%</strong>. 
                    Watch how they cook everything — from biryani to chai — on clean biomass pellets.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href="https://www.instagram.com/we.chulha/" target="_blank" rel="noopener noreferrer">
                        Watch on Instagram →
                      </a>
                    </Button>
                  </div>
                </div>
                {/* Video placeholder */}
                <div className="relative aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-muted to-primary/5 ring-1 ring-primary/20">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 ring-2 ring-primary/30">
                      <svg className="ml-1 h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Instagram Video</span>
                    <span className="text-[10px] text-muted-foreground/60">@we.chulha</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};

export default Testimonials;
