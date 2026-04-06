import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { useScrollY } from "@/hooks/useScrollY";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import StatCounter from "@/components/StatCounter";
import {
  Flame, Battery, Wind, Leaf, TrendingDown, Shield, Check,
  Phone, Mail, MapPin, Star, ChevronDown, ChevronUp, ArrowRight,
  ArrowUp, Clock, Package, Zap, Heart, Users, Camera, Play,
  Menu, X, Instagram, MessageCircle, ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PHONE, PHONE_DISPLAY, WA_BASE, EMAIL, INSTA,
  NAV_LINKS, INCLUDES, WHY_CARDS, GUIDE_ITEMS,
  TESTIMONIALS, STEPS, FOR_CARDS, FAQS, TRUST_STATS, GALLERY_SLOTS,
} from "@/lib/constants";

// Image imports
import stoveHero from "@/assets/stove-hero.jpg";
import pelletsCloseup from "@/assets/pellets-closeup.jpg";
import kitchenSetup from "@/assets/kitchen-setup.jpg";
import stoveFlame from "@/assets/stove-flame.jpg";
import happyCustomer from "@/assets/happy-customer.jpg";
import stoveInstalled from "@/assets/stove-installed.jpg";
import missionVillage from "@/assets/mission-village.jpg";
import missionCommunity from "@/assets/mission-community.jpg";

const GALLERY_IMAGES = [stoveHero, stoveFlame, kitchenSetup, pelletsCloseup, stoveInstalled, happyCustomer];

// ============================================================================
// NAV
// ============================================================================
function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const isScrolled = scrollY > 50;

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg" : "bg-transparent"}`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground">
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Flame className="h-7 w-7 text-primary" />
          <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-foreground">WE Chulha</span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-primary">{link.label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
            <a href={`tel:${PHONE}`}><Phone className="h-4 w-4" />{PHONE_DISPLAY}</a>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1ebe5b] gap-2">
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          </Button>
        </div>

        <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="glass border-t border-border/30 px-4 py-6 md:hidden animate-in slide-in-from-top">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-4 py-3 text-foreground transition hover:bg-muted">{link.label}</a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-border/30 pt-4">
            <Button asChild variant="outline" className="w-full gap-2">
              <a href={`tel:${PHONE}`}><Phone className="h-4 w-4" />Call: {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#1ebe5b]">
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================================
// HERO
// ============================================================================
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated bg circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 glass-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
            <Zap className="inline h-3 w-3 mr-1 text-primary" />Now Available Pan India
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Cook for <span className="text-primary">₹6</span>. LPG costs <span className="text-muted-foreground line-through">₹10</span>.
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Save 60% on cooking fuel with WE Chulha's eco-friendly pellet stove
          </p>
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mb-5 max-w-xl text-sm text-muted-foreground">
            Join 500+ households and businesses across India. Premium quality, zero smoke, maximum savings.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90 glow-primary">
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer">Order Now</a>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-[#25D366] px-8 text-lg font-bold text-white shadow-lg hover:bg-[#1ebe5b] gap-2">
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />WhatsApp</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-border/50 px-8 text-lg text-foreground hover:bg-muted glass-light">
              <a href="#savings">See Savings</a>
            </Button>
          </div>
        </Reveal>

        {/* Hero product placeholder */}
        <Reveal delay={400}>
          <div className="mt-12 mx-auto max-w-md">
            <MediaPlaceholder label="WE Chulha — Hero Product Image" aspect="square" src={stoveHero} className="shadow-2xl shadow-primary/10" />
          </div>
        </Reveal>

        {/* Mini stats */}
        <Reveal delay={500}>
          <div className="mt-10 mx-auto flex max-w-lg items-center justify-center gap-6 rounded-2xl glass p-5">
            <div className="flex flex-col items-center">
              <Flame className="h-5 w-5 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Cost per cook</span>
              <span className="font-['Space_Grotesk'] text-lg font-bold text-primary">₹6</span>
            </div>
            <div className="h-8 w-px bg-border/30" />
            <div className="flex flex-col items-center">
              <TrendingDown className="h-5 w-5 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Savings vs LPG</span>
              <span className="font-['Space_Grotesk'] text-lg font-bold text-primary">60%</span>
            </div>
            <div className="h-8 w-px bg-border/30" />
            <div className="flex flex-col items-center">
              <Shield className="h-5 w-5 text-primary mb-1" />
              <span className="text-xs text-muted-foreground">Warranty</span>
              <span className="font-['Space_Grotesk'] text-lg font-bold text-primary">3 Years</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================================
// ECO STRIP
// ============================================================================
function EcoStrip() {
  const benefits = ["Zero Smoke", "Renewable Fuel", "Carbon Neutral", "No Harmful Emissions", "Sustainable Cooking", "Bio-Degradable Pellets"];
  const repeated = [...benefits, ...benefits];

  return (
    <div className="overflow-hidden bg-primary/10 py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((b, i) => (
          <span key={i} className="mx-6 flex items-center gap-2 text-sm font-medium text-primary">
            <Leaf className="h-4 w-4" />{b}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// TRUST BAR
// ============================================================================
function TrustBar() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Why customers trust WE Chulha
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {TRUST_STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 100}>
              <div className="flex flex-col items-center gap-1 rounded-2xl glass p-6 text-center">
                <StatCounter value={stat.value} suffix={stat.suffix} className="text-3xl text-primary" />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SAVINGS CALCULATOR
// ============================================================================
function SavingsCalc() {
  const [sessions, setSessions] = useState(2);

  const savings = useMemo(() => {
    const we = sessions * 6;
    const lpg = sessions * 10;
    const diff = lpg - we;
    return {
      daily: { we, lpg, diff },
      monthly: { we: we * 30, lpg: lpg * 30, diff: diff * 30 },
      yearly: { we: we * 365, lpg: lpg * 365, diff: diff * 365, roi: ((diff * 365 - 9000) / 9000 * 100) },
    };
  }, [sessions]);

  return (
    <section id="savings" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>Savings Calculator</SectionLabel>
          <h2 className="mb-6 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            See Your <span className="text-primary">Potential Savings</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <Card className="border-0 glass shadow-xl overflow-hidden">
            <CardContent className="p-6 md:p-10">
              {/* Slider */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-muted-foreground mb-3">Cooking sessions per day</label>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">1</span>
                  <input
                    type="range" min={1} max={10} value={sessions}
                    onChange={(e) => setSessions(Number(e.target.value))}
                    className="flex-1 h-2 rounded-full bg-muted accent-primary cursor-pointer"
                    aria-label="Select cooking sessions per day"
                  />
                  <span className="text-sm text-muted-foreground">10</span>
                </div>
                <p className="mt-2 text-center text-2xl font-bold text-primary font-['Space_Grotesk']">{sessions} sessions</p>
              </div>

              {/* Comparison */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Daily */}
                <div className="rounded-xl glass-light p-5">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-4">Daily Cost</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">WE Chulha</p>
                      <div className="h-6 rounded-full bg-primary/20 overflow-hidden">
                        <div className="h-full rounded-full bg-primary flex items-center justify-end px-2 text-xs font-bold text-primary-foreground transition-all duration-500" style={{ width: `${(savings.daily.we / savings.daily.lpg) * 100}%` }}>
                          ₹{savings.daily.we}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">LPG</p>
                      <div className="h-6 rounded-full bg-destructive/20 overflow-hidden">
                        <div className="h-full rounded-full bg-destructive/60 flex items-center justify-end px-2 text-xs font-bold text-foreground" style={{ width: "100%" }}>
                          ₹{savings.daily.lpg}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
                    <Check className="h-4 w-4" />Save ₹{savings.daily.diff}/day
                  </p>
                </div>

                {/* Monthly */}
                <div className="rounded-xl glass-light p-5">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-4">Monthly Cost</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">WE Chulha</p>
                      <div className="h-6 rounded-full bg-primary/20 overflow-hidden">
                        <div className="h-full rounded-full bg-primary flex items-center justify-end px-2 text-xs font-bold text-primary-foreground transition-all duration-500" style={{ width: `${(savings.monthly.we / savings.monthly.lpg) * 100}%` }}>
                          ₹{savings.monthly.we}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">LPG</p>
                      <div className="h-6 rounded-full bg-destructive/20 overflow-hidden">
                        <div className="h-full rounded-full bg-destructive/60 flex items-center justify-end px-2 text-xs font-bold text-foreground" style={{ width: "100%" }}>
                          ₹{savings.monthly.lpg}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary">
                    <Check className="h-4 w-4" />Save ₹{savings.monthly.diff}/month
                  </p>
                </div>

                {/* Yearly */}
                <div className="rounded-xl glass-light p-5">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-4">Yearly Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">WE Chulha</span>
                      <span className="font-bold text-foreground">₹{savings.yearly.we}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">LPG</span>
                      <span className="font-bold text-foreground">₹{savings.yearly.lpg}</span>
                    </div>
                    <div className="border-t border-border/30 pt-2 mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Savings</span>
                        <span className="text-xl font-bold text-primary">₹{savings.yearly.diff}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-muted-foreground">ROI (after ₹9,000)</span>
                        <span className="font-bold text-primary">{savings.yearly.roi.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================================
// PACKAGE
// ============================================================================
function PackageSection() {
  return (
    <section id="package" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Starter Kit</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <Card className="overflow-hidden border border-primary/20 glass shadow-2xl">
            <div className="bg-gradient-to-r from-primary/90 to-primary/60 px-6 py-6 text-center">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-primary-foreground md:text-4xl">
                Complete Starter Kit
              </h2>
              <div className="mt-3">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-primary-foreground">₹9,000</span>
                <span className="ml-2 text-primary-foreground/80">One-time investment</span>
              </div>
            </div>
            <CardContent className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground mb-3">What's Included</h3>
                  <ul className="space-y-3 text-foreground">
                    {INCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground mb-3">Warranty Coverage</h3>
                  <div className="flex gap-4">
                    <div className="flex-1 rounded-lg glass-light p-3 text-center">
                      <p className="text-lg font-bold text-primary">1 Year</p>
                      <p className="text-xs text-muted-foreground">Full Replacement</p>
                    </div>
                    <div className="flex-1 rounded-lg glass-light p-3 text-center">
                      <p className="text-lg font-bold text-primary">2 Years</p>
                      <p className="text-xs text-muted-foreground">Free Repairs</p>
                    </div>
                    <div className="flex-1 rounded-lg glass-light p-3 text-center">
                      <p className="text-lg font-bold text-primary">3 Years</p>
                      <p className="text-xs text-muted-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg glass-light p-4 text-center">
                    <p className="text-2xl font-bold text-primary font-['Space_Grotesk']">500+</p>
                    <p className="text-xs text-muted-foreground">Happy Customers</p>
                  </div>
                  <div className="rounded-lg glass-light p-4 text-center">
                    <p className="text-2xl font-bold text-primary font-['Space_Grotesk']">60%</p>
                    <p className="text-xs text-muted-foreground">Average Savings</p>
                  </div>
                  <div className="rounded-lg glass-light p-4 text-center">
                    <p className="text-2xl font-bold text-primary font-['Space_Grotesk']">Pan India</p>
                    <p className="text-xs text-muted-foreground">Delivery</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90 glow-primary">
                    <a href={WA_BASE} target="_blank" rel="noopener noreferrer">Order Now</a>
                  </Button>
                  <Button asChild size="lg" className="w-full rounded-full bg-[#25D366] text-lg font-bold text-white hover:bg-[#1ebe5b] gap-2">
                    <a href={WA_BASE} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />WhatsApp</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================================
// GALLERY
// ============================================================================
function Gallery() {
  return (
    <section id="gallery" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            See <span className="text-primary">WE Chulha</span> in Action
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY_SLOTS.map((slot, i) => (
            <Reveal key={slot.label} delay={i * 80}>
              <MediaPlaceholder label={slot.label} aspect={slot.aspect as "square" | "landscape"} src={GALLERY_IMAGES[i]} className="shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-shadow" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// VIDEO DEMO
// ============================================================================
function VideoDemo() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
                Watch How It <span className="text-primary">Works</span>
              </h2>
              <div className="space-y-3">
                {["10-second ignition", "Zero smoke emission", "100% bio-fuel", "Safety certified"].map((item, i) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded-2xl aspect-video shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="WE Chulha Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHY US
// ============================================================================
function WhyUs() {
  const iconMap: Record<string, React.ReactNode> = {
    bolt: <Battery className="h-7 w-7 text-primary" />,
    wind: <Wind className="h-7 w-7 text-primary" />,
    leaf: <Leaf className="h-7 w-7 text-primary" />,
    trending_down: <TrendingDown className="h-7 w-7 text-primary" />,
    shield: <Shield className="h-7 w-7 text-primary" />,
    check: <Check className="h-7 w-7 text-primary" />,
  };

  return (
    <section id="why" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            Six Reasons to <span className="text-primary">Switch Today</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 80}>
              <Card className="h-full border-0 glass shadow-lg transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    {iconMap[card.icon] || <Flame className="h-7 w-7 text-primary" />}
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHO IT'S FOR
// ============================================================================
function WhoItsFor() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Use Cases</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            Who Can <span className="text-primary">Benefit?</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {FOR_CARDS.map((card, idx) => (
            <Reveal key={card.title} delay={idx * 100}>
              <Card className="h-full border-0 glass shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <MediaPlaceholder label={card.title} aspect="landscape" src={[kitchenSetup, stoveFlame, stoveHero, stoveInstalled][idx]} className="mb-4" />
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MISSION
// ============================================================================
function Mission() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-1.5 text-xs font-semibold text-accent-foreground">
                <Heart className="h-3 w-3 text-primary" />Our Mission
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
                Bringing Clean Cooking to <span className="text-primary">Remote Villages</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For every 10 stoves sold, we donate one to a remote village. Our mission is to make sustainable, affordable cooking accessible to everyone in India.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Leaf className="h-5 w-5 text-primary" />, title: "Environmental Impact", desc: "Reducing carbon emissions and deforestation" },
                  { icon: <Heart className="h-5 w-5 text-primary" />, title: "Health & Safety", desc: "Eliminating harmful indoor air pollution" },
                  { icon: <Users className="h-5 w-5 text-primary" />, title: "Economic Empowerment", desc: "Saving money for vulnerable communities" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    {item.icon}
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="space-y-4">
              <MediaPlaceholder label="Mission — Village Impact" aspect="landscape" src={missionVillage} className="shadow-xl" />
              <MediaPlaceholder label="Mission — Community" aspect="landscape" src={missionCommunity} className="shadow-xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HOW IT WORKS
// ============================================================================
function HowItWorks() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Getting Started</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            Get Started in <span className="text-primary">5 Steps</span>
          </h2>
        </Reveal>
        <div className="flex flex-col md:flex-row items-start gap-4">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.title}>
              <Reveal delay={idx * 100} className="flex-1">
                <div className="flex flex-col items-center text-center gap-3 rounded-2xl glass p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{idx + 1}</span>
                  <h3 className="font-['Space_Grotesk'] font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
              {idx < STEPS.length - 1 && (
                <div className="hidden md:flex items-center justify-center pt-10">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// USAGE GUIDE
// ============================================================================
function UsageGuide() {
  return (
    <section id="guide" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>Usage Guide</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            How to Use <span className="text-primary">Our Pellets</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {GUIDE_ITEMS.map((g, i) => (
            <Reveal key={g.title} delay={i * 120}>
              <Card className="h-full border-0 glass text-center shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-4 p-8">
                  <Flame className="h-8 w-8 text-primary" />
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">{g.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Package className="h-4 w-4" />{g.weight}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{g.duration}</span>
                  </div>
                  <p className="font-medium text-foreground">{g.use}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// TESTIMONIALS
// ============================================================================
function TestimonialsSection() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.author} delay={idx * 100}>
              <Card className={`h-full border-0 glass shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${idx === 3 ? "sm:col-span-2 lg:col-span-1 border border-primary/20" : ""}`}>
                <CardContent className="flex flex-col gap-3 p-6">
                  <MediaPlaceholder label={t.author} aspect="square" src={[kitchenSetup, happyCustomer, stoveInstalled, stoveHero][idx]} className="mb-2" />
                  <span className="inline-block self-start rounded-full bg-primary/20 px-3 py-0.5 text-xs font-semibold text-primary">{t.badge}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground italic">"{t.quote}"</p>
                  <p className="text-sm font-semibold text-foreground mt-auto">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ
// ============================================================================
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mb-5 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </Reveal>
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 60}>
              <div className="rounded-xl glass overflow-hidden">
                <button
                  onClick={() => setOpen(open === idx ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-foreground font-medium hover:bg-muted/20 transition"
                >
                  {faq.question}
                  {open === idx ? <ChevronUp className="h-5 w-5 text-primary shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />}
                </button>
                {open === idx && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTACT
// ============================================================================
function Contact() {
  return (
    <section id="contact" className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="mb-6 font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl">
            Contact Us <span className="text-primary">Today</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <a href={`tel:${PHONE}`} className="flex flex-col items-center gap-3 rounded-xl glass p-6 transition hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <Phone className="h-6 w-6 text-primary" />
              <p className="text-sm font-semibold text-foreground">Call Us</p>
              <p className="text-xs text-muted-foreground">Available 9 AM - 6 PM</p>
              <span className="text-sm font-medium text-primary">{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex flex-col items-center gap-3 rounded-xl glass p-6 transition hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
              <Mail className="h-6 w-6 text-primary" />
              <p className="text-sm font-semibold text-foreground">Email</p>
              <p className="text-xs text-muted-foreground">Response within 24 hours</p>
              <span className="text-sm font-medium text-primary">{EMAIL}</span>
            </a>
            <div className="flex flex-col items-center gap-3 rounded-xl glass p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-sm font-semibold text-foreground">Visit</p>
              <p className="text-xs text-muted-foreground">S. No. 81, Vitthal Vista Bldg.</p>
              <span className="text-sm font-medium text-foreground">Baner, Pune — 411045</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Card className="border-0 glass overflow-hidden shadow-xl">
            <CardContent className="flex flex-col items-center gap-4 p-8">
              <h3 className="font-['Space_Grotesk'] text-xl font-bold text-foreground">Ready to Save 60% on Fuel?</h3>
              <p className="text-sm text-muted-foreground">Join 500+ customers making the switch to sustainable cooking</p>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] px-10 text-lg font-bold text-white hover:bg-[#1ebe5b] gap-2">
                <a href={WA_BASE} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" />WhatsApp Us</a>
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 glass px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-3 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="h-6 w-6 text-primary" />
              <span className="font-['Space_Grotesk'] text-lg font-bold text-foreground">WE Chulha</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Sustainable cooking for a better tomorrow</p>
            <div className="flex gap-3">
              <a href={INSTA} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full glass-light text-muted-foreground hover:text-primary transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full glass-light text-muted-foreground hover:text-primary transition">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Quick Links</p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition">{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground mb-3">Contact</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Phone: <a href={`tel:${PHONE}`} className="text-primary hover:underline">{PHONE_DISPLAY}</a></p>
              <p>Email: <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a></p>
              <p>Blessed Distributors & Traders LLP</p>
              <p>Baner, Pune — 411045</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {year} WE Chulha — Blessed Distributors & Traders LLP. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// FLOATING CTA
// ============================================================================
function FloatCTA() {
  const scrollY = useScrollY();
  const showTop = scrollY > 500;

  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href={WA_BASE}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#1ebe5b] hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" fill="white" stroke="white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-[#25D366]" />
        </span>
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground hover:text-primary transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 p-3 glass border-t border-border/30 md:hidden">
        <Button asChild className="flex-1 bg-primary text-primary-foreground font-bold hover:bg-primary/90">
          <a href={WA_BASE} target="_blank" rel="noopener noreferrer">Order Now</a>
        </Button>
        <Button asChild variant="outline" className="gap-2">
          <a href={`tel:${PHONE}`}><Phone className="h-4 w-4" />Call</a>
        </Button>
      </div>
    </>
  );
}

// ============================================================================
// STRUCTURED DATA
// ============================================================================
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WE Chulha",
    description: "Sustainable, eco-friendly pellet stove for cooking. Save 60% on fuel costs with zero smoke emissions.",
    url: "https://we-chulha-magic.lovable.app",
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "S. No. 81, Vitthal Vista Bldg.",
      addressLocality: "Baner, Pune",
      postalCode: "411045",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    sameAs: [INSTA, WA_BASE],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "500" },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

// ============================================================================
// MAIN
// ============================================================================
export default function Index() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main id="main-content">
        <Hero />
        <EcoStrip />
        <TrustBar />
        <SavingsCalc />
        <PackageSection />
        <Gallery />
        <VideoDemo />
        <WhyUs />
        <WhoItsFor />
        <Mission />
        <HowItWorks />
        <UsageGuide />
        <TestimonialsSection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatCTA />
    </>
  );
}
