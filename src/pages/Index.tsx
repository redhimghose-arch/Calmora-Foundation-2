import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Users, BookOpen, Shield, ArrowRight, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useMetaPixel, MetaPixelNoscript } from "@/hooks/useMetaPixel";
import groupPhoto from "@/assets/group-photo.jpeg";
import classroom from "@/assets/change1.jpeg";
import teamOutdoor from "@/assets/team-outdoor.jpeg";
import counseling from "@/assets/counseling.jpeg";
import award from "@/assets/award.jpeg";
import dignitaries from "@/assets/dignitaries.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stats = [
  { value: "500+", label: "Lives Touched" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Workshops" },
  { value: "12A/80G", label: "Certified" },
];

const risks = [
  { icon: Shield, label: "Treatment non-adherence" },
  { icon: Heart, label: "Relapse anxiety" },
  { icon: Users, label: "Emotional instability" },
  { icon: BookOpen, label: "Caregiver burnout" },
  { icon: Shield, label: "Community stress escalation" },
];

const founders = {
  sadaf: {
    name: "Ms. Sadaf Saeed",
    role: "Founder & Director",
    img: dignitaries,
    imgAlt: "Ms. Sadaf Saeed, Founder of Calmora Foundation",
    bio: "RCI Licensed Psychologist with 10+ years of practice. Recognized for conducting extensive workshops for underprivileged communities.",
    points: [
      "Collaborated with Dr. M. Wali (Padma Shri Awardee)",
      "Awarded Global Mental Health Leadership 2024 by World Health Congress",
      "Ensures clinical credibility, ethical standards, and structured program design",
    ],
  },
  seema: {
    name: "Seema Raturi",
    role: "Co-Founder & Director",
    img: "/team/SeemaRaturi.jpeg",
    imgAlt: "Seema Raturi, Co-Founder of Calmora Foundation",
    bio: "Co-Founder of Calmora Foundation with over 15 years of experience in Human Resource leadership. Brings a deep understanding of people, systems, and organisational behaviour.",
    points: [
      "Bridges psychological insight with practical community engagement",
      "Driven by belief that mental health care should be accessible and stigma-free",
      "Creates sustainable mental health ecosystems for families and institutions",
    ],
  },
};

/* ── Founders section - Both founders displayed side by side ── */
const FoundersSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Leadership
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            The Founders Behind{" "}
            <span className="text-gradient">Calmora</span>
          </h2>
        </motion.div>

        {/* Both Founders Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Sadaf Saeed Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-soft transition-all"
          >
            <div className="relative h-[520px]">
              <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-3xl" />
              <img
                src={founders.sadaf.img}
                alt={founders.sadaf.imgAlt}
                className="relative w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                {founders.sadaf.name}
              </h3>
              <p className="text-primary text-sm font-semibold mb-4">{founders.sadaf.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founders.sadaf.bio}</p>
              <ul className="space-y-3">
                {founders.sadaf.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Seema Raturi Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-soft transition-all"
          >
            <div className="relative h-[520px]">
              <div className="absolute -inset-2 bg-accent/10 blur-xl rounded-3xl" />
              <img
                src={founders.seema.img}
                alt={founders.seema.imgAlt}
                className="relative w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                {founders.seema.name}
              </h3>
              <p className="text-primary text-sm font-semibold mb-4">{founders.seema.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founders.seema.bio}</p>
              <ul className="space-y-3">
                {founders.seema.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Main page ── */
const Index = () => {
  useMetaPixel();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="pt-16">
      <MetaPixelNoscript />

      {/* ── Intro Banner ── */}
      <section className="relative w-full overflow-hidden">
        <style>{`
          @keyframes float1 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-40px) translateX(15px); } }
          @keyframes float2 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(50px) translateX(-20px); } }
          @keyframes float3 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(35px) translateX(25px); } }
          @keyframes float4 { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-45px) translateX(-18px); } }
          .float-1 { animation: float1 5s ease-in-out infinite; }
          .float-2 { animation: float2 6.5s ease-in-out infinite 0.5s; }
          .float-3 { animation: float3 5.5s ease-in-out infinite 1s; }
          .float-4 { animation: float4 7s ease-in-out infinite 1.5s; }
        `}</style>

        <div className="absolute top-1/4 left-8 w-20 h-20 rounded-full bg-primary/50 blur-2xl float-1 pointer-events-none z-20" />
        <div className="absolute top-1/3 right-12 w-32 h-32 rounded-full bg-accent/40 blur-3xl float-2 pointer-events-none z-20" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-primary/40 blur-2xl float-3 pointer-events-none z-20" />
        <div className="absolute top-1/2 right-1/4 w-28 h-28 rounded-full bg-accent/30 blur-3xl float-4 pointer-events-none z-20" />

        <motion.img
          src="/Untitled_design.png"
          alt="Calmora Foundation"
          className="relative w-full h-auto object-cover"
          style={{ objectPosition: "center 35%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </section>

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-background pb-20"
      >
        {/* Parallax atmosphere */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="relative"
          >
            <div className="absolute -left-6 top-2 w-1 h-24 bg-primary rounded-full hidden md:block" />

            {/* Credential badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-wide">
                12A Certified · 80G Compliant · CSR-1 Registered
              </span>
            </motion.div>

            <h1 className="font-display text-2xl md:text-5xl mt-2 lg:mt-0 font-bold text-foreground leading-tight mb-8">
              Psychological Risk,
              <br />
              <span className="text-gradient">Thoughtfully Delivered</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Calmora Foundation is a structured psycho-social risk stabilization
              organization in India, working across hospital-integrated mental
              health programs and community-based outreach systems.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10 max-w-xl">
              We design measurable psycho-social support frameworks that
              complement medical treatment pathways and strengthen holistic human
              health outcomes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/get-involved"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
              >
                Support Our Mission
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-xl font-semibold hover:bg-muted hover:border-primary/30 transition-all duration-200"
              >
                Our Programs
                <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — Impact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl" />
            <div className="relative bg-card border border-border rounded-3xl p-10 shadow-2xl">
              <h3 className="font-display text-xl font-bold mb-6">
                Integrated Psycho-Social Support for Hospitals and Communities
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                {[
                  "Hospital mental health programs",
                  "Oncology counseling services",
                  "Chronic illness psychological support",
                  "Caregiver support systems",
                  "Community mental health outreach in India",
                  "Mental hygiene awareness initiatives",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-primary mt-6 font-medium leading-relaxed">
                Our model ensures that psychological stabilization continues
                beyond discharge and extends into household environments.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10 text-center">
                {[
                  { v: "10K+", l: "Lives Reached" },
                  { v: "50+", l: "Programs" },
                  { v: "20+", l: "Partners" },
                ].map((s) => (
                  <div key={s.l} className="group cursor-default">
                    <p className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                      {s.v}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center text-primary-foreground group cursor-default"
              >
                <p className="font-display text-3xl md:text-4xl font-bold group-hover:scale-110 transition-transform duration-200">
                  {stat.value}
                </p>
                <p className="text-sm mt-1 text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Stabilization Matters ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                Strategic Impact
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Psycho-Social{" "}
                <span className="text-gradient">Stabilization Matters</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Medical recovery does not automatically resolve psychological
                distress. Unmanaged psycho-social risk can lead to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {risks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 group hover:bg-secondary hover:shadow-card transition-all duration-200 cursor-default"
                  >
                    <item.icon
                      size={18}
                      className="text-primary group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                Calmora Foundation addresses these gaps through structured
                intervention protocols and measurable outcomes.
              </p>
            </motion.div>

            {/* Staggered photo grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { src: classroom, alt: "Classroom session", mt: "" },
                { src: counseling, alt: "Counseling session", mt: "mt-8" },
                { src: award, alt: "Award ceremony", mt: "" },
                { src: teamOutdoor, alt: "Team outdoor", mt: "mt-8" },
              ].map((img, i) => (
                <motion.img
                  key={img.alt}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  src={img.src}
                  alt={img.alt}
                  className={`rounded-xl shadow-card w-full h-48 object-cover ${img.mt} hover:scale-105 hover:shadow-soft transition-all duration-300`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Founders ── */}
      <FoundersSection />

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Invest in Prevention. Invest in Hope.
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Partner with Calmora Foundation to build emotionally resilient
              communities through sustainable mental health systems.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-card text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Get In Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
