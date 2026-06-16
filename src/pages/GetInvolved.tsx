import { useMetaPixel, MetaPixelNoscript } from "@/hooks/useMetaPixel";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Handshake,
  Heart,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Phone,
  Hospital,
  Users
} from "lucide-react";
import teamOutdoor from "@/assets/team-bg.jpeg";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  {
    icon: Hospital,
    title: "Hospital-Integrated Mental Health Programs",
    desc: "We collaborate with healthcare institutions to implement:",
    items: [
      "Oncology counseling services",
      "Cancer survivorship mental health support",
      "Chronic illness adjustment programs",
      "Caregiver burnout assessment frameworks",
      "Reintegration readiness planning",
    ],
    footer: "Our hospital mental health programs are designed for measurable patient stabilization and structured reporting.",
    cta: "Partner with us",
    link :"http://docs.google.com/forms/d/15Uoxubu-18SWvaXCJ-x-f-cSVV8wcsXrXfElopvE6ks/edit"
  },
  {
    icon: Users,
    title: "Community Mental Health Outreach in India",
    desc: "We extend psycho-social support into underserved populations through:",
    items: [
      "Door-to-door counseling services",
      "Early-risk identification",
      "Mental hygiene awareness programs",
      "Household-level psychosocial screening",
      "Referral and escalation coordination",
    ],
    footer: "Community outreach strengthens preventive care and reduces systemic burden on hospitals.",
    cta: "Reach out to us",
    link:"https://docs.google.com/forms/d/1RHVrheuiFK-t71qGFkoyGi36MQCTzOOlFxH_pE7KKAc/edit"
  },
  {
    icon: Heart,
    title: "Caregiver Support Programs",
    desc: "Caregiver burnout significantly impacts patient recovery outcomes. Calmora provides:",
    items: [
      "Caregiver stress assessment",
      "Emotional resilience education",
      "Family adjustment guidance",
      "Structured stabilization protocols",
    ],
    footer: "Supporting caregivers strengthens holistic treatment success.",
    cta: "Connect with us",
    link:"https://docs.google.com/forms/d/180MVNit5Gi-VBNHLpBbYzFbXsPUcuUHsPS9Keovmywk/edit"
  },
  {
    icon: GraduationCap,
    title: "Internship Program",
    desc: "Kickstart your journey with a mental health internship in India at Calmora designed to build real-world skills in psychology, counselling, and community impact:",
    items: [
      "Hands-on experience in mental health programs, workshops & outreach",
      "Training in emotional intelligence, communication & counselling basics",
      "Mentorship from experienced psychologists & industry professionals",
      "Practical exposure to client interaction, engagement & program execution",
    ],
    footer: "Join us to build a more resilient mental health ecosystem.",
    cta: "Join us",
    link:"http://docs.google.com/forms/d/1_A5-SuvNYZFrMeD237fEd4SSGOE372KWGxis85NONNA/edit"
  }
];

const GetInvolved = () => {
  useMetaPixel();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // 🔥 wait for page render
    }
  }, [location]);

  return (
    <main className="pt-16">
      <section className="relative w-full overflow-hidden bg-foreground">
        <div className="relative w-full">
          <img
            src={teamOutdoor}
            alt="Psycho-Social Support Services in India"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40 pointer-events-none" />
        </div>
      </section>

      {/* Ways to contribute */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Psycho-Social Support Services in India
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl leading-relaxed my-4">
              Calmora Foundation delivers structured psycho-social support services through institutional partnerships and community outreach programs.
            </p>
          </motion.div>
        </div>
         
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 shadow-card border border-border flex flex-col hover:shadow-soft transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="text-primary group-hover:text-primary-foreground" size={28} />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <CheckCircle
                        size={16}
                        className="text-primary flex-shrink-0 mt-0.5"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border space-y-4">
                   <p className="text-xs font-medium text-primary leading-relaxed">
                    {service.footer}
                   </p>
                   <a 
                     href={service.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity w-full justify-center shadow-sm"
                   >
                     {service.cta} <ArrowRight size={16} />
                   </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30" id="donate">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Support Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Donate Now
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Your contribution helps us provide accessible mental health
              support and community programs.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto items-center">
            {/* QR CODE */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border text-center">
              <img
                src="/donate/qr.jpeg" // 🔥 put your QR image in public folder
                alt="Donate QR Code"
                className="w-70 h-70 object-cover mx-auto"
              />
            </div>

            {/* BANK DETAILS */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="font-display text-xl font-semibold mb-6">
                Bank Transfer
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Account Name</p>
                  <p className="font-semibold text-foreground">
                    CALMORA FOUNDATION
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">Account Number</p>
                  <p className="font-semibold text-foreground">
                    006988700000695
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground">IFSC Code</p>
                  <p className="font-semibold text-foreground">YESB00000</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Please mention your name while transferring for acknowledgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why invest */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Invest in Calmora?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
              {[
                "Led by RCI Licensed professional",
                "Demonstrated grassroots impact (500+ reached)",
                "Preventive, scalable model",
                "Fully compliant legal structure (12A, 80G)",
                "Focus on measurable outcomes",
                "Not starting from zero — scaling proven work",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-card"
                >
                  <CheckCircle
                    size={18}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <Link
              to="/contact#contact-form"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default GetInvolved;
