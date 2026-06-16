import { Check, Shield, Heart, Users, BookOpen, Star, ExternalLink, ArrowRight, Quote } from "lucide-react";
import { useEffect } from "react";
import styles from "./StudentLanding.module.css";

const GOOGLE_FORM_URL = "https://forms.gle/xesXuA13XaNzPURR9";

const META_PIXEL_ID = "1324436552960880";

const services = [
  {
    icon: Heart,
    title: "Individual Therapy",
    desc: "For anxiety, stress, overthinking, emotional regulation, self-esteem, trauma, and personal growth.",
    color: "#e879a0",
  },
  {
    icon: Users,
    title: "Relationship & Couple Counselling",
    desc: "Improve communication, resolve conflicts, rebuild emotional connection, and navigate difficult phases.",
    color: "#60a5fa",
  },
  {
    icon: BookOpen,
    title: "Student & Youth Counselling",
    desc: "Academic pressure, career confusion, emotional overwhelm, social anxiety, and self-confidence support.",
    color: "#34d399",
  },
  {
    icon: Shield,
    title: "Workplace Stress & Burnout",
    desc: "For professionals dealing with exhaustion, pressure, work-life imbalance, and emotional fatigue.",
    color: "#a78bfa",
  },
];

const perks = [
  "Therapy sessions at highly reasonable prices",
  "Qualified mental health professionals",
  "Safe, confidential, and non-judgmental space",
  "Online and offline sessions available",
  "Personalized support instead of generic advice",
  "Easy booking process",
  "Support designed for real people with real struggles",
];

const struggles = [
  "Constant overthinking",
  "Anxiety and panic attacks",
  "Mood swings and emotional exhaustion",
  "Toxic relationship patterns",
  "Burnout and stress",
  "Low motivation and numbness",
  "Feeling emotionally stuck",
  "Disturbed sleep and appetite",
  "Difficulty handling pressure",
  "Feeling alone despite being surrounded by people",
];

const steps = [
  { num: "01", label: "Fill out the quick enquiry form." },
  { num: "02", label: "Our team matches you with the right therapist." },
  { num: "03", label: "Book your session at a comfortable time." },
  { num: "04", label: "Start your journey in a safe, supportive space." },
];

const testimonials = [
  {
    quote: "I thought therapy was unnecessary until I realized how much stress was silently controlling my life. Calmora changed that.",
    name: "Ayesha R.",
    role: "University Student",
    initials: "AR",
    color: "#e879a0",
  },
  {
    quote: "Having a safe space to talk changed the way I handle my emotions and relationships. I finally feel like myself again.",
    name: "Rahul M.",
    role: "Working Professional",
    initials: "RM",
    color: "#60a5fa",
  },
  {
    quote: "Affordable therapy made it possible for me to finally prioritize my mental health without the guilt of cost.",
    name: "Sana K.",
    role: "Freelancer",
    initials: "SK",
    color: "#34d399",
  },
];

const StudentLanding = () => {
  // Meta Pixel (Facebook) — inject on mount, clean up on unmount
  useEffect(() => {
    // Avoid double-init if already loaded
    if ((window as any).fbq) return;

    const fbq: any = function (...args: any[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    (window as any).fbq = fbq;
    (window as any)._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    fbq("init", META_PIXEL_ID);
    fbq("track", "PageView");

    return () => {
      // Clean up on unmount
      script.remove();
    };
  }, []);

  return (
    <div className={styles.landingPage}>

      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* VIDEO SHOWCASE */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>See What We Do</div>
          <h2 className={styles.sectionHeading}>
            A Glimpse Into<br /><span className={styles.headlineGradient}>Your Safe Space</span>
          </h2>
          <p className={styles.videoSubtext}>
            Watch how Calmora Foundation creates a welcoming, professional environment where real healing begins.
          </p>
          <div className={styles.videoWrapper}>
            <div className={styles.videoGlow} />
            <video
              className={styles.videoPlayer}
              src="/Therapy.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.container}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Calmora Foundation · Mental Health Support
          </div>
          <h1 className={styles.headline}>
            Therapy Shouldn't Feel<br />
            <span className={styles.headlineGradient}>Like A Luxury.</span>
          </h1>
          <p className={styles.subheadline}>
            Professional mental health support at prices that actually make sense.
            Anxiety, stress, burnout — you don't have to carry it alone anymore.
          </p>
          <div className={styles.ctaGroup}>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Book Your Session <ArrowRight size={18} />
            </a>
          </div>
          <div className={styles.trustPills}>
            {["Confidential", "Judgment-Free", "Affordable", "Online & Offline"].map((t) => (
              <span key={t} className={styles.trustPill}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className={styles.problem}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The Reality</div>
          <h2 className={styles.sectionHeading}>
            Most People Avoid Therapy<br />
            <span className={styles.headlineGradient}>Not Because They Don't Need It.</span>
          </h2>
          <div className={styles.problemGrid}>
            <div className={styles.problemStat}>
              <div className={styles.statNum}>73%</div>
              <div className={styles.statDesc}>of people delay seeking help due to cost concerns</div>
            </div>
            <div className={styles.problemStat}>
              <div className={styles.statNum}>6mo+</div>
              <div className={styles.statDesc}>average time people wait before reaching out</div>
            </div>
            <div className={styles.problemStat}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statDesc}>of struggles worsen when left unaddressed</div>
            </div>
          </div>
          <div className={styles.problemText}>
            <p>People spend months silently struggling — while convincing themselves they'll "handle it somehow." But untreated mental health struggles don't disappear. They slowly affect your sleep, relationships, work, confidence, and daily life.</p>
            <p>At Calmora Foundation, we believe mental health support should be <strong>accessible</strong> — not reserved only for those who can afford premium clinic prices.</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.offering}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>What We Offer</div>
          <h2 className={styles.sectionHeading}>Therapy Sessions That<br /><span className={styles.headlineGradient}>Actually Help</span></h2>
          <div className={styles.grid}>
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className={styles.card}>
                <div className={styles.cardIconWrap} style={{ "--card-color": color } as React.CSSProperties}>
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className={styles.cardArrow}><ArrowRight size={16} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CALMORA */}
      <section className={styles.whyUs}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyLeft}>
              <div className={styles.sectionLabel}>Why Choose Us</div>
              <h2 className={styles.sectionHeading} style={{ textAlign: "left" }}>
                Built For People<br /><span className={styles.headlineGradient}>With Real Struggles</span>
              </h2>
              <p className={styles.whyDesc}>
                We're not a premium clinic with a waiting list and four-figure fees. We're a foundation — and every decision we make puts your wellbeing first.
              </p>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{ display: "inline-flex", marginTop: "2rem" }}>
                Get Started <ArrowRight size={18} />
              </a>
            </div>
            <ul className={styles.pointsList}>
              {perks.map((p) => (
                <li key={p}>
                  <span className={styles.checkWrap}><Check size={16} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STRUGGLES */}
      <section className={styles.struggles}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Sound Familiar?</div>
          <h2 className={styles.sectionHeading}>If Any Of This Resonates,<br /><span className={styles.headlineGradient}>It's Time To Reach Out.</span></h2>
          <div className={styles.strugglesGrid}>
            {struggles.map((s) => (
              <div key={s} className={styles.struggleTag}>
                <span className={styles.struggleDot} /> {s}
              </div>
            ))}
          </div>
          <p className={styles.closingLine}>You don't need to wait for things to get worse before asking for help.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>The Process</div>
          <h2 className={styles.sectionHeading}>Getting Started<br /><span className={styles.headlineGradient}>Is Simple</span></h2>
          <div className={styles.stepsGrid}>
            {steps.map(({ num, label }, i) => (
              <div key={num} className={styles.step}>
                <div className={styles.stepNumber}>{num}</div>
                {i < steps.length - 1 && <div className={styles.stepConnector} />}
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>Real Stories</div>
          <h2 className={styles.sectionHeading}>What People Realize<br /><span className={styles.headlineGradient}>After Starting Therapy</span></h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map(({ quote, name, role, initials, color }) => (
              <div key={name} className={styles.testimonialCard}>
                <Quote className={styles.quoteIcon} size={32} />
                <p>{quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.avatar} style={{ "--avatar-color": color } as React.CSSProperties}>
                    {initials}
                  </div>
                  <div>
                    <div className={styles.authorName}>{name}</div>
                    <div className={styles.authorRole}>{role}</div>
                  </div>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandOrb1} />
        <div className={styles.ctaBandOrb2} />
        <div className={styles.container}>
          <h2 className={styles.ctaBandHeading}>Stop Delaying Your Mental Health.</h2>
          <p className={styles.ctaBandSub}>
            Support is available, accessible, and closer than you think. Take the first step today.
          </p>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnLight}>
            Book A Session Now <ExternalLink size={18} />
          </a>
          <p className={styles.finalLine}>Your mental health deserves attention before it becomes a crisis.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <p>Calmora Foundation — Making Mental Health Support Accessible, Affordable, and Human.</p>
      </footer>
    </div>
  );
};

export default StudentLanding;
