import { useMetaPixel, MetaPixelNoscript } from "@/hooks/useMetaPixel";
import { motion } from "framer-motion";
import { Brain, Eye, School, Users, Briefcase, Heart, BookOpen } from "lucide-react";
const skillTraining = "/skill-training.jpeg";
import classroom from "@/assets/classroom.jpeg";
import workshop from "@/assets/workshop.jpeg";
import counseling from "@/assets/change2.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const programs = [
  {
    img: "/programs/Schools.webp",
    title: "School Mental Health Systems",
    items: [
      "Emotional literacy curriculum",
      "Risk screening & early identification",
      "Teacher sensitization training",
      "Student resilience workshops",
    ],
  },
  {
    img: "/programs/workshop.jpeg",
    title: "Community Mental Health Outreach",
    items: [
      "Group interventions",
      "Awareness campaigns",
      "Psychological first-aid workshops",
    ],
  },
  {
    img: "/programs/women.jpg",
    title: "Women & Men Support Circles",
    items: [
      "Trauma-informed sessions",
      "Stress & burnout management",
      "Emotional regulation frameworks",
    ],
  },
  {
    img: "/programs/professionals.jpg",
    title: "Youth & Professional Programs",
    items: [
      "Career anxiety management",
      "Confidence and coping skill training",
      "Structured therapy access pathways",
    ],
  },
];

const audiences = [
  {
    img: "/audiences/new.jpeg",
    label: "Schools & Universities",
    desc: "Students, teachers, and educational institutions",
  },
  {
    img: "/audiences/unserved.jpeg",
    label: "Underserved Communities",
    desc: "Marginalized groups with limited mental health access",
  },
  {
    img: "/audiences/cancer1.jpg",
    label: "Cancer & Abuse Survivors",
    desc: "Care for cancer survivors and individuals affected by childhood abuse.",
  },
  {
    img: "/audiences/women1.jpeg",
    label: "Women & Youth",
    desc: "Empowerment through emotional resilience",
  },
  {
    img: "/audiences/women.jpeg",
    label: "Coorporate wellness programs",
    desc: "Burnout prevention and stress management",
  },
];

const advisory = [
  {
    img: "/advisory/advisor1.jpg",
    name: "Dr. Amandeep Singh",
    role: "Senior Clinical Psychologist",
  },
  {
    img: "/advisory/advisor2.jpg",
    name: "Dr. Mohsin Wali",
    role: "Mental Health Policy Advisor",
  },
  {
    img: "/advisory/advisor3.jpg",
    name: "Dr. Krish Mehdi",
    role: "Community Mental Health Specialist",
  },
  {
    img: "/advisory/advisor4.jpg",
    name: "Anita Kapoor",
    role: "Youth Development Strategist",
  },
];

const team = [
  { name: "Sadaf Saeed", role: "Founder & Director", img: "/team/Sadaf1.jpeg" },
  { name: "Seema Raturi", role: "Cofounder & Director", img: "/team/Seema.jpeg" },
  { name: "Manya Sethi", role: "Vice President", img: "/team/Manya1.jpeg" },
  {
    name: "Jyotika Das",
    role: "Counselling Psychologist",
    img: "/team/Jyotika.jpeg",
  },
  {
    name: "Anam Mushtaq",
    role: "Applied Research Psychologist",
    img: "/team/Anam.jpeg",
  },
  {
    name: "Raj Manya",
    role: "Counselling Psychologist",
    img: "/team/Raj.jpeg",
  },
];

const WhatWeDo = () => {
  useMetaPixel();
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={skillTraining}
            alt="Our work"
            className="w-full h-full object-cover object-top"
          />
          {/* Bottom gradient only — fades image into text area without darkening faces */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container mx-auto px-4 pb-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                Our Work
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                About Calmora Foundation
              </h1>
              <p className="text-white/75 text-lg max-w-4xl">
                Calmora Foundation is a New Delhi-based non-profit organization
                focused on structured psycho-social stabilization and mental
                health system integration in India. Our work bridges hospital-based
                psychological support and community-level mental hygiene outreach to
                reduce long-term psychosocial risk.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

     <section className="py-24 bg-background">
  <div className="container mx-auto px-4">
    
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

      {/* Mission */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="bg-card rounded-2xl p-8 shadow-card text-center"
      >
        <Brain className="mx-auto text-primary mb-4" size={36} />
        <h2 className="font-display text-4xl font-bold text-foreground mb-4">
          Our Mission
        </h2>
        <p className="text-muted-foreground leading-relaxed text-md">
          To design and implement scalable psycho-social support systems that
          strengthen oncology counseling, chronic illness mental health care,
          and underserved community outreach programs.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="bg-card rounded-2xl p-8 shadow-card text-center"
      >
        <Eye className="mx-auto text-accent mb-4" size={36} />
        <h2 className="font-display text-4xl font-bold text-foreground mb-4">
          Our Vision
        </h2>
        <p className="text-muted-foreground leading-relaxed text-md">
          An integrated healthcare ecosystem where psychological risk management
          operates alongside medical treatment pathways across hospitals and
          communities.
        </p>
      </motion.div>

    </div>

  </div>
</section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Leadership & Guidance
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Advisory Board
            </h2>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisory.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow"
              >
                {/* Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />

                {/* Info */}
                <div className="p-6 text-center">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  {/* <p className="text-sm text-muted-foreground">{member.role}</p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our People
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Core Team
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
              Our team combines clinical expertise, operational management, and
              community outreach experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center shadow-card border border-border"
              >
                {/* TEAM IMAGE */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-2 border-primary"
                />

                <h4 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Programs */}
      {/* <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Program Verticals
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-shadow"
              >
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-80 object-cover"
                />

                <div className="p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {prog.title}
                  </h3>

                  <ul className="space-y-2">
                    {prog.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Our Impact
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Work in Action
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[classroom, counseling, workshop, skillTraining].map((img, i) => (
              <motion.img
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                src={img}
                alt="Calmora work"
                className="rounded-xl w-full h-52 object-cover shadow-card hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Who We Serve
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Target Audience
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <motion.div
                key={a.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-card"
              >
                {/* IMAGE */}
                <img
                  src={a.img}
                  alt={a.label}
                  className="w-full h-80 object-cover"
                />

                {/* INFO */}
                <div className="p-6 text-center">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {a.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-background max-w-md mx-auto">
                <img 
                  src="/team/SeemaRaturi.jpeg" 
                  alt="Seema Raturi" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="font-display font-bold text-xl">Seema Raturi</p>
                <p className="text-sm opacity-90">Co-Founder & Author</p>
              </div>
            </motion.div>

            {/* Bio Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                Meet the Founder
              </p> */}
              <h2 className="font-display text-4xl font-bold text-foreground mb-8 leading-tight">
                A Vision of Compassion Care
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-foreground font-semibold">Seema Raturi</span> is the Co-Founder of Calmora Foundation, a purpose-driven initiative dedicated to strengthening mental health support and psychosocial well-being across communities.
                </p>
                <p>
                  With over 15 years of experience in Human Resource leadership, she brings a deep understanding of people, systems, and organizational behaviour. Her professional journey in HR has allowed her to work closely with individuals across diverse environments, giving her firsthand insight into the growing emotional and psychological challenges faced in today’s fast-paced world.
                </p>
                <p>
                  Driven by a strong belief that mental health care should be accessible, compassionate, and stigma-free, Seema established Calmora Foundation to bridge the gap between psychological support and underserved communities.
                </p>
                <p>
                  Her work integrates psychological insight with practical community engagement, creating sustainable mental health ecosystems that support individuals, families, and institutions.
                </p>
                <p>
                  Through Calmora Foundation, she continues to work towards building a society where mental health is recognized, respected, and supported as an essential part of overall well-being.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-primary/10 blur-2xl rounded-3xl" />
            <a 
              href="https://www.amazon.in/Art-Being-Unshakable-Confident-Chaotic/dp/9371640383"
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/book/book.jpeg" // put your book image in public/book/
                alt="The Art of Being Unshakable"
                className="relative w-80 md:w-96 rounded-2xl shadow-2xl"
              />
            </a>
          </div>

          <div className="max-w-xl">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Featured Publication
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Art of Being Unshakable
            </h2>

            <p className="text-muted-foreground mb-6">By Seema Raturi</p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              What if calm wasn’t something you found, but something you built?
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              In a world that rewards urgency, noise, and constant reaction,
              staying steady can feel impossible. But unshakable people are not
              born different — they practice differently.
            </p>

            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li>• A mind that questions fear instead of obeying it</li>
              <li>• A heart that feels deeply without collapsing</li>
              <li>• A presence that remains grounded when everything shifts</li>
              <li>• Confidence built on self-trust, not validation</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Because the world may remain chaotic — but you can become steady.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default WhatWeDo;
