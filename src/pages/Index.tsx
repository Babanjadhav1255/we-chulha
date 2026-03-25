import { Flame, Battery, Wind, Leaf, Package, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }
  }),
};

const stats = [
  { value: "375", label: "cooking sessions from 150 kg" },
  { value: "~3.5", label: "LPG cylinders (energy equivalent)" },
  { value: "₹6", label: "per session (vs ₹9–10 LPG)" },
  { value: "₹1,312", label: "saved vs LPG for same sessions" },
  { value: "₹6,750", label: "effective stove cost after pellets" },
];

const features = [
  { icon: Battery, title: "Works Without Electricity", desc: "Battery-powered fan keeps cooking even during power cuts. No interruption to your business." },
  { icon: Wind, title: "Very Low Smoke", desc: "Forced airflow combustion. Healthier for staff and customers. Ideal for indoor use." },
  { icon: Leaf, title: "Carbon Neutral", desc: "Biomass pellets are a renewable fuel. Reduce your carbon footprint vs LPG." },
  { icon: Package, title: "Fuel Always Available", desc: "No cylinder booking, no wait times. Pellets at ₹12–15/kg from local vendors." },
];

const pelletGuide = [
  { amount: "150g", time: "~15 minutes", items: "Chai · Eggs · Snacks" },
  { amount: "400g", time: "~30–40 minutes", items: "Dal · Sabzi · Rice" },
  { amount: "700g", time: "~70 minutes", items: "Biryani · Large Orders" },
];

const Index = () => {
  const whatsappLink = "https://wa.me/919503903366?text=Hi%2C%20I%27m%20interested%20in%20WE%20Chulha.%20Please%20share%20details.";
  const phoneNumber = "+919503903366";

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Flame className="h-7 w-7 text-primary" />
            <span className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-foreground">
              WE Chulha
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#package" className="transition hover:text-primary">Package</a>
            <a href="#why" className="transition hover:text-primary">Why Us</a>
            <a href="#guide" className="transition hover:text-primary">Usage Guide</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </div>
          <Button asChild size="sm" className="rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Get Demo</a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-background" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
              Clean · Smart · Affordable
            </span>
          </motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="mb-6 font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Biomass Pellet Stove for{" "}
            <span className="text-primary">Commercial Kitchens</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Switch from LPG. Save more. Never stop cooking.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="rounded-full bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Book Free Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg">
              <a href="#package">View Package ↓</a>
            </Button>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}
            className="mt-12 flex animate-bounce justify-center"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Starter Package */}
      <section id="package" className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Card className="overflow-hidden border-2 border-primary/20 bg-card shadow-2xl">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 text-center">
                <h2 className="font-['Space_Grotesk'] text-2xl font-bold text-primary-foreground md:text-3xl">
                  Starter Package — ₹9,000
                </h2>
              </div>
              <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
                <div className="space-y-4">
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">What's Included</h3>
                  <ul className="space-y-3 text-foreground">
                    {[
                      "WE Chulha stove (1 yr warranty)",
                      "150 kg biomass pellets (₹2,250 value)",
                      "6V 5Ah battery (3 yr warranty)",
                      "Battery charger included",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">By the Numbers</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {stats.map((s) => (
                      <div key={s.value} className="flex items-baseline gap-3">
                        <span className="font-['Space_Grotesk'] text-2xl font-bold text-primary">{s.value}</span>
                        <span className="text-sm text-muted-foreground">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why WE Chulha */}
      <section id="why" className="bg-muted/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl"
          >
            Why WE Chulha?
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="h-full border-0 bg-card shadow-md transition-shadow hover:shadow-lg">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-['Space_Grotesk'] text-lg font-semibold text-foreground">{f.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pellet Usage Guide */}
      <section id="guide" className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12 text-center font-['Space_Grotesk'] text-3xl font-bold text-foreground md:text-4xl"
          >
            Pellet Usage Guide
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {pelletGuide.map((g, i) => (
              <motion.div key={g.amount} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="h-full border-0 bg-card text-center shadow-md">
                  <CardContent className="flex flex-col items-center gap-3 p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                      <span className="font-['Space_Grotesk'] text-xl font-bold text-primary">{g.amount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {g.time}
                    </div>
                    <p className="font-medium text-foreground">{g.items}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <Card className="border-0 bg-gradient-to-r from-primary/10 via-accent to-primary/10 shadow-md">
              <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                <p className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">
                  🔥 See WE Chulha in action!
                </p>
                <p className="text-sm text-muted-foreground">
                  Baner's Gutti Chutney restaurant switched to WE Chulha — bill cut by half!
                </p>
                <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="https://www.instagram.com/we.chulha/" target="_blank" rel="noopener noreferrer">
                    Follow @we.chulha on Instagram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-foreground px-4 py-16 text-background md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-2 font-['Space_Grotesk'] text-3xl font-bold md:text-4xl"
          >
            Order Now — Contact Us
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="mb-10 text-lg opacity-70"
          >
            Blessed Distributors & Traders LLP
          </motion.p>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="mb-10 grid gap-6 sm:grid-cols-3"
          >
            <a href={`tel:${phoneNumber}`} className="flex flex-col items-center gap-2 rounded-xl bg-background/10 p-6 transition hover:bg-background/20">
              <Phone className="h-6 w-6" />
              <span className="text-sm font-medium">+91 9503903366</span>
            </a>
            <a href="mailto:blessedtraders04@gmail.com" className="flex flex-col items-center gap-2 rounded-xl bg-background/10 p-6 transition hover:bg-background/20">
              <Mail className="h-6 w-6" />
              <span className="text-sm font-medium">blessedtraders04@gmail.com</span>
            </a>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-background/10 p-6">
              <MapPin className="h-6 w-6" />
              <span className="text-sm font-medium">S. No. 81, Vitthal Vista Bldg., Baner, Pune — 411045</span>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="rounded-full bg-primary px-10 text-lg font-bold text-primary-foreground shadow-lg hover:bg-primary/90">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-background/30 px-10 text-lg text-background hover:bg-background/10">
              <a href={`tel:${phoneNumber}`}>Call Now</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background px-4 py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Blessed Distributors & Traders LLP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
