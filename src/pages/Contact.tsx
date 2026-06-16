import { useMetaPixel, MetaPixelNoscript } from "@/hooks/useMetaPixel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from "lucide-react";
import award from "@/assets/award.jpeg";
import { useLocation } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const faqs = [
  {
    q: "What is Calmora Foundation?",
    a: "Calmora Foundation is a registered mental health organization focused on preventive, community-based psychological care across schools, institutions, and underserved populations.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. Calmora Foundation is 80G compliant, which means your donations are eligible for tax exemption under Section 80G of the Income Tax Act.",
  },
  {
    q: "How can I volunteer or intern?",
    a: "We welcome psychology students and mental health enthusiasts. Fill out the contact form or reach us via phone to learn about current internship openings.",
  },
  {
    q: "Where does Calmora operate?",
    a: "We are based in New Delhi and operate across schools, universities, and community centers in the Delhi-NCR region, with plans to expand nationally.",
  },
  {
    q: "Can my organization partner with Calmora?",
    a: "Absolutely! We collaborate with universities, corporates, NGOs, and government bodies. Contact us to discuss partnership opportunities.",
  },
];

const Contact = () => {
  useMetaPixel();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", phone: "" });
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
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone: string) => {
    return /^[6-9]\d{9}$/.test(phone); // ⭐ Indian 10-digit mobile
  };

  const API =
    "https://script.google.com/macros/s/AKfycbx1BpnnIzyRt6QL63L1W3uliWu1oqdWehyzhYjS-AjSlrUBLYSgWG9jTi_5m2fXTJvrCA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { email: "", phone: "" };

    if (!isValidEmail(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (form.phone && !isValidPhone(form.phone)) {
      newErrors.phone = "Enter valid 10-digit Indian number";
    }

    setErrors(newErrors);

    // ❌ Stop if any error
    if (newErrors.email || newErrors.phone) return;

    setLoading(true);

    await fetch(API, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={award}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Reach Out
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Project Hosla{" "}
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-lg">
              For hospital partnerships, CSR collaborations, grants, or
              community implementation of Project Hosla, please fill out the
              form below and our team will connect with you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project Hosla
            </h1>
            <p className="text-lg text-muted-foreground">
              Integrated Psycho-Social Stabilization Framework designed to
              support hospitals, caregivers, and communities through structured
              mental health interventions.
            </p>
          </div>

          {/* What Hosla Addresses */}
          <div className="mb-20">
            <h2 className="font-display text-2xl font-bold text-center mb-10">
              What Hosla Addresses
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Oncology survivorship mental health",
                "Chronic illness psychological adjustment",
                "Community-level distress stabilization",
                "Mental hygiene education",
                "Caregiver resilience development",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card p-8 rounded-xl shadow-card"
                >
                  <p className="text-md text-foreground font-medium leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How Hosla Works */}
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-center mb-10">
              How Hosla Works
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Structured Psychological Risk Assessment",
                "Protocol-Based Psycho-Social Intervention",
                "Reintegration Planning",
                "Measurable Outcome Tracking",
                "Community Reinforcement Systems",
              ].map((step, i) => (
                <motion.div
                  key={step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-card rounded-xl p-8 shadow-card"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white text-md font-bold">
                    {i + 1}
                  </div>
                  <p className="text-md text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
              The objective is long-term psychosocial resilience — not
              short-term counseling.
            </p>
          </div>
        </div>
      </section>

      {/* CSR Partnership Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 text-center">
              Corporate Social Responsibility
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              CSR Healthcare Partnerships in India
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Calmora Foundation partners with corporate CSR programs to implement structured psycho-social stabilization initiatives across healthcare and underserved communities.
            </p>
            <p className="text-md text-primary font-medium mt-4">
              We align with Schedule VII CSR mandates under healthcare, preventive care, and community development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* CSR Impact Areas */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-10 shadow-card border border-border"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-left">
                CSR Impact Areas
              </h2>
              <ul className="space-y-4">
                {[
                  "Hospital mental health program sponsorship",
                  "Oncology counseling service support",
                  "Community mental health outreach initiatives",
                  "Mental hygiene awareness campaigns",
                  "Caregiver support frameworks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-foreground leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Measurable CSR Impact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-10 shadow-card border border-border"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-left">
                Measurable CSR Impact
              </h2>
              <p className="text-muted-foreground mb-8 text-sm">CSR partners receive:</p>
              <div className="grid gap-6">
                {[
                  "Structured beneficiary reporting",
                  "Psycho-social risk reduction metrics",
                  "Quarterly outcome dashboards",
                  "Transparent financial compliance",
                ].map((metric) => (
                  <div key={metric} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-background" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="bg-accent/10 border border-accent rounded-xl p-8 text-center">
                  <MessageCircle
                    className="mx-auto text-accent mb-4"
                    size={40}
                  />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We've received your message and will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      Message / Query
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      "Submitting..."
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6 mb-10">
                <a
                  href="tel:+919953585256"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">
                      +91-9953585256
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@calmorafoundation.org"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">
                      info@calmorafoundation.org
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-foreground">
                      98-B, Third Floor, Namberdar Estate, Taimoor Nagar, New
                      Friends Colony, New Delhi - 110065
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="bg-secondary rounded-xl p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Website:</strong>{" "}
                  <a
                    href="https://www.calmorafoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.calmorafoundation.org
                  </a>
                </p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 shadow-card group"
              >
                <summary className="font-display font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-xl">
                    +
                  </span>
                </summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
