import { useMetaPixel, MetaPixelNoscript } from "@/hooks/useMetaPixel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Handshake, Hospital, Heart, GraduationCap, ShieldCheck, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import groupPhoto from "@/assets/group-photo.jpeg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const focalAreas = [
  {
    icon: Heart,
    title: "Psycho-social support in underserved populations",
    desc: "Bridging the gap between mental health care and marginalized communities through structured stabilization models.",
    alt: "community mental health outreach India"
  },
  {
    icon: Hospital,
    title: "Hospital-integrated mental health programs",
    desc: "Integrating psychological care into medical treatment pathways for holistic patient recovery.",
    alt: "hospital mental health program India"
  },
  {
    icon: GraduationCap,
    title: "Oncology counseling expansion",
    desc: "Providing specialized emotional support for oncology patients and their families to build long-term resilience.",
    alt: "oncology counseling India"
  },
  {
    icon: ShieldCheck,
    title: "Preventive psychosocial risk reduction",
    desc: "Implementing early identification systems to mitigate mental health crises before they escalate.",
    alt: "preventive mental health India"
  },
  {
    icon: Handshake,
    title: "Mental hygiene education",
    desc: "Developing awareness and education frameworks to reduce stigma and promote emotional literacy.",
    alt: "mental hygiene education India"
  }
];

const Grants = () => {
  useMetaPixel();
  return (
    <main className="pt-16">
      {/* SEO Optimized Header */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={groupPhoto} 
            alt="community mental health outreach India" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl "
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 mt-10 md:mt-0">
              Grant Partnerships
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Grants for Community and Hospital Mental Health Programs
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed">
              Calmora Foundation delivers structured psycho-social support, oncology counseling, caregiver programs, and community mental health outreach in India through hospital-integrated and preventive stabilization frameworks.
            </p>
            <div className="flex flex-wrap gap-4  mb-10 md:mb-0">
              <Link
                to="/contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
              >
                Inquire for Grants <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empowering Communities Through Strategic Funding
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Calmora Foundation seeks institutional grant partnerships to expand structured psycho-social stabilization models across India. We believe in building sustainable ecosystems where mental health care is an integrated part of hospital and community infrastructures.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focalAreas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card p-8 rounded-2xl shadow-card border border-border hover:shadow-soft hover:border-primary/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 leading-tight">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {area.desc}
                </p>
                {/* Hidden image alt optimization hint */}
                <span className="sr-only">{area.alt}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Linking / CSR Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Collaborative Impact Pathways
                </h2>
                <p className="text-muted-foreground mb-8">
                  We are open to funding collaborations that align with our core missions. Explore our other verticals to see how we can create a multifaceted impact.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link 
                    to="/get-involved" 
                    className="flex items-center gap-2 p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:text-primary transition-all text-sm font-medium"
                  >
                    Explore our Services <ExternalLink size={16} />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:text-primary transition-all text-sm font-medium"
                  >
                    CSR Collaborations <ExternalLink size={16} />
                  </Link>
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 p-4 rounded-xl bg-background border border-border hover:border-primary/40 hover:text-primary transition-all text-sm font-medium"
                  >
                    Project Hosla <ExternalLink size={16} />
                  </Link>
                  <Link 
                    to="/grants" 
                    className="flex items-center gap-2 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all text-sm font-medium"
                  >
                    Grant Inquiries <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <blockquote className="border-l-4 border-primary pl-8 py-2">
                  <p className="text-xl font-display italic text-foreground leading-relaxed mb-4">
                    "Sustainable mental health support isn't just about crisis management; it's about building a foundation of resilience through institutional collaboration."
                  </p>
                  <footer className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Calmora Foundation Vision
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Publications (Knowledge Hub) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Knowledge Hub
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Insights & Publications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto pb-16">
            {blogPosts.map((post, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <motion.div
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group cursor-pointer"
                  >
                    <div className="bg-card rounded-2xl p-8 h-full border border-border shadow-card hover:shadow-soft transition-all flex flex-col hover:border-primary/20">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <BookOpen className="text-primary group-hover:text-primary-foreground" size={24} />
                        </div>
                       
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-grow line-clamp-4">
                        {post.excerpt}
                      </p>
                      <div className="mt-8 flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Read Full Publication <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden border-none shadow-2xl">
                  <DialogHeader className="p-8 border-b bg-card">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                         Expert Insight
                       </span>
                    </div>
                    <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight text-left">
                      {post.title}
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[calc(90vh-180px)] p-8">
                    <div className="prose prose-stone max-w-none">
                       {post.content.split('\n').map((para, idx) => (
                         para.trim() && (
                           <p key={idx} className="text-muted-foreground leading-relaxed mb-6 text-lg">
                             {para.trim()}
                           </p>
                         )
                       ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const blogPosts = [
  {
    title: "The Importance of Psycho-Social Support in Hospitals & Community Outreach in India",
    excerpt: "A comprehensive publication covering the critical need for psycho-social integration in hospital care and the transformative impact of door-to-door community mental health outreach.",
    content: `The Importance of Psycho-Social Support in Hospitals in India
The primary focus of hospitals when people enter their facilities is to treat patients who have medically serious conditions. Medical professionals need to perform their work through assessment tests and treatment methods which include medicine and surgical operations while they watch the patient throughout their entire health progress. Healthcare systems have achieved major advancements through their development of efficient procedures which enable them to identify and treat physical health problems. Medical treatment functions as only one element of the process through which people achieve recovery. Hospitals continue to neglect an essential aspect of patient care which includes understanding how patients feel and think during their time in medical facilities. 

Life-threatening medical conditions impact people through two main dimensions which include their physical health and their individual social status which includes their confidence and personal bonds. People experience sudden changes which bring them into states of fear and uncertain situations that require them to adjust to new ways of living. Health facilities and rehabilitation centers now acknowledge psycho-social support as crucial component which they need to implement for patient treatment and recovery process.

Psycho-social support describes a type of medical treatment which helps patients with their psychological problems and their social difficulties which occur during their medical treatment. A serious diagnosis can bring several emotional pressures at the same time. Patients experience three different types of fears which include fear about their future diagnosis and fear about treatment results and fear about their daily life changes. Many people experience two types of challenges which include financial difficulties and the effects of their illness on their family members. Personal connections between individuals and their illness create deep impact which affects their methods of managing their health problem. Psycho-social care helps patients process these emotions and develop healthier ways of responding to them. Patients can acquire skills to handle uncertainty and minimize stress while receiving medical care through their interactions with supportive people who provide counseling and guidance. For many people, the emotional burden of illness can be just as overwhelming as the physical symptoms they are experiencing.

The process of hospitalization creates challenges that make it hard for people to cope with their situation. The combination of being taken from their everyday activities and entering new medical spaces while they face health uncertainties leads people to experience feelings of unprotectedness. Many patients report feeling a loss of control over their lives, fear of medical procedures, isolation from their usual social support systems, concern about their families, and anxiety about long-term health. People who receive treatment for serious or chronic conditions like cancer, cardiovascular disease, and kidney disorders experience these particular emotions more frequently than others. Emotional distress extends its impact beyond the hospital stay period because it affects people until they reach their last moment. The absence of proper psychological assistance leads to the development of treatment-related experiences which eventually result in anxiety and depression plus people refusing to seek essential medical help.

Hospitals used to concentrate their efforts on physical healing while they treated mental health issues through less formal methods. Mental health services are sometimes limited to occasional counseling sessions or referrals to psychiatrists when symptoms become severe. Psychological health research shows that healthcare results depend on psychological health status according to current studies in medical research. Patients who feel emotional support through their treatment process will show better compliance with their treatment schedule and their appointment attendance and their long-term recovery process. They also tend to report better overall quality of life. The healthcare system needs to adopt a bio-psycho-social treatment model according to current scientific knowledge. The model establishes a connection between physical health and mental health and social conditions which need to be treated as interlinked aspects of treatment.

The implementation of effective psycho-social support in hospitals requires multiple essential components. The first emotional screening assessment enables healthcare professionals to detect patient distress and anxiety and depressive symptoms through their initial treatment stage. Professionals who recognize these problems at an early stage can deliver immediate assistance to patients before their emotional problems reach more critical levels. The system requires psychological counseling as its primary element. Through counseling, patients are able to express fears, process their experiences, and develop coping strategies that help them navigate treatment more confidently. Families and caregivers require guidance and emotional support to assist their loved ones who face mental health challenges. Illness creates challenges that extend beyond the patient because family members must deal with their own emotional reactions while providing care. The health of the entire support network for the patient improves when caregivers receives assistance. The process of post-hospitalization life adjustment requires recovery planning to assist individuals in preparing for their next life stage. Psychological support offers essential assistance to individuals who face challenges when returning to work and rebuilding their routines and adjusting to their physical constraints.

The work of clinical psychologists enables them to assist patients in their coping process for these particular situations. Their research examines the impact of illness on emotional and cognitive and relational functioning. They help patients cope with the psychological impact of diagnosis, manage stress related to treatment, and reduce symptoms such as anxiety or depression. Psychologists assist patients in developing resilience while they enhance their family communication skills. The doctors handle emotional needs through their work, which also provides medical treatment to create a system that treats patients as entire beings instead of focusing on their medical issues.

The world needs to understand that healthcare requires humanitarian treatment, which extends beyond medical skills. The patients who experience severe medical conditions require both medical treatment and the capability to understand and receive emotional support during their recovery process. The healthcare facility transforms into an environment that meets patient requirements when hospitals implement psycho-social support as part of their operations. Recovery requires people to achieve physical healing and regain their self-confidence and emotional stability and optimistic outlook. The process of true healing requires treatment for both mental and physical conditions.

As awareness about mental health continues to grow in India, hospitals and healthcare providers have an opportunity to transform patient care by integrating structured psycho-social programs into medical services. The implementation of such integrated programs will lead to better treatment results and increased patient confidence and family assistance during difficult health situations. The connection between mental health and physical health needs to be understood as a fundamental element of our existence. The healing process needs mental health treatment because it functions as an essential component of contemporary medical practice.

Community Mental Health Outreach in India: Why Door-to-Door Counseling Matters
India has always directed its mental health services through its system of hospitals and clinics. The institutions provide critical services for treatment and rehabilitation however they only serve a small fraction of the total population. The majority of people who face psychological distress stay away from formal healthcare because of three main reasons which include social stigma and their inability to pay for treatment and their restricted access to medical facilities. People with mental health issues tend to stay invisible until their condition develops into major medical issues. The growing need for community mental health outreach programs in India. The implementation of door-to-door counseling along with organized outreach programs will bring mental health support into communities which enables them to detect issues at an early stage and deliver assistance before the situation worsens.

The psychological distress in many underserved communities’ manifests through their mental health symptoms. People most often describe their experiences with mental health issues as anxiety and depression and emotional distress. The common social and behavior problems which people experience serve as the main way to identify their difficulties. Families may experience ongoing problems at home and children may leave school and adults may develop addiction issues and people may struggle to choose between two major spending choices. People show deep emotional distress through their social withdrawal and their unexplainable rage and their constant state of annoyance. Because these issues are often interpreted as social, behavioral, or moral problems rather than mental health concerns, individuals may never receive the psychological support they need. The community outreach program serves an essential function to identify these trends which lead to appropriate treatment for individuals who need care.

The hospital-based mental health services provide crucial support to people who need treatment but not everyone who needs help can access these services. Multiple obstacles exist which stop people from obtaining professional assistance. Mental health stigma continues to discourage many people from openly discussing emotional difficulties. People tend to avoid seeking assistance because they do not know about psychological services that exist. People hesitate to visit clinics or hospitals because they face financial difficulties and must travel long distances and they fear judgment from others. People only approach help during emergencies which include severe emotional breakdown and family conflict and substance dependence. Community mental health outreach works to prevent problems by providing early support which helps people before they develop serious difficulties.

The best method for community mental health work establishes door-to-door counseling as its primary service delivery method. The presence of trained professionals who directly visit communities establishes conditions which make it possible to conduct dialogues that would not occur in clinical environments. The practice of meeting people at their home base establishes trust relationships while decreasing the anxiety which inhibits many people from entering hospitals and mental health treatment facilities. The method enables counselors to understand how families operate their household systems while they navigate their social environment and receive customized solutions based on their family needs. Door-to-door programs enable the detection of initial psychological dangers which they handle by delivering emotional assistance to families while teaching individuals about mental health and linking them to needed professional services. The development of mental health dialogue within community spaces leads to reduced social stigma about mental health through these community interactions.

The outreach program needs to organize its outreach activities because informal outreach methods do not create effective community outreach programs. Organizations need to establish permanent presence through their activities because their temporary work will not create effective results. Successful programs require organizations to use systematic methods which start with household screening through basic tools that detect individuals experiencing distress or vulnerability. The intervention pathways establish clear guidelines which counselors must follow to decide between offering brief emotional assistance or performing family counseling or sending clients to mental health experts. The escalation protocols provide emergency response systems which activate professional assistance during critical situations that involve severe depression and violent behavior and dangerous substance use. The initiatives gain strength through their partnerships with local healthcare providers and social workers and community leaders who work together to create continuous patient support. People need preventive psychoeducation because it teaches them how to build coping skills and emotional understanding and develop better ways of communicating. Outreach programs achieve better results when they implement structured frameworks because these frameworks create predictable outcomes which follow ethical standards. The outreach program needs organized outreach activities because informal outreach methods create challenges for establishing effective community outreach programs. The organization needs to establish permanent presence through its activities because temporary operations will not create effective results. The organization requires systematic methods which start with household screening through basic tools that detect individuals experiencing distress or vulnerability because this approach enables successful programs.

Mental hygiene functions as a preventive healthcare method because it helps people to manage their health problems through early intervention instead of waiting until their health issues reach critical levels. The entire healthcare system benefits from community mental health outreach programs. Early detection of psychological problems enables hospitals to handle fewer emergency cases which involve mental health emergencies. Families experience less prolonged stress, children remain engaged in education, and communities become more resilient in handling challenges. The wellbeing of individuals, families, and healthcare systems becomes interconnected. The process of community stabilization leads to better hospital results because it shows that local mental health programs function as vital components of formal healthcare systems.

India's mental health situation is undergoing gradual changes. The growth of hospitals and clinics is accompanied by a rising need to provide mental health services to people in their home communities. The implementation of door-to-door counseling services which include community awareness initiatives and structured outreach programs will change the delivery of psychological support throughout the country. The implementation of prevention measures together with educational programs and early intervention strategies will enable communities to build their strength while achieving better health outcomes to assist their community members. People should initiate mental health services at home and in their communities through informal dialogue that provides them a secure space to ask for assistance.`
  },
  {
    title: "Project HAUSLA: Hospital-Integrated Psycho-Social Stabilization Framework",
    excerpt: "A system-driven model designed to complement medical treatment pathways through structured hospital-integrated psycho-social stabilization protocols.",
    content: `CALMORA FOUNDATION

Project HAUSLA

Hospital-Integrated Psycho-Social Stabilization Framework
Psychological Risk Thoughtfully Delivered

Positioning Summary: 
Kalmora Foundation is developing Project HAUSLA as a structured hospital-integrated psycho-social stabilization framework designed to complement medical treatment pathways within institutional healthcare environments.

The initiative is not a general counseling service. It is a system-driven model focused on measurable psychological adjustment outcomes for high-risk medical patients and their caregivers.

Core Focus Areas:
Project HAUSLA is designed to support:
	•	Oncology patients (post-treatment stabilization)
	•	Chronic illness patients (cardiac, renal, long-term care cases)
	•	Acute diagnosis adjustment cases
	•	Caregiver burnout and family stabilization

Each category operates under a structured, protocol-based psycho-social intervention model.

What Makes HAUSLA Different:
Unlike conventional therapy services, HAUSLA offers:
	•	Standardized intake and distress scoring
	•	Defined session protocols
	•	Reintegration readiness assessment
	•	Structured documentation and anonymized reporting
	•	Clear referral-based integration within hospital workflows

The objective is to enhance patient adjustment, improve survivorship engagement, and support holistic care delivery.

Proposed Pilot Structure (Illustrative)
	•	6-month institutional pilot
	•	200–300 referred patients
	•	Multi-condition psycho-social stabilization tracks
	•	Measurable pre- and post-intervention scoring

Quarterly outcome summary:
The framework is designed to operate in coordination with hospital clinical and administrative systems.
	•	Strategic Value for Hospital Ecosystem
	•	Strengthens holistic care positioning
	•	Enhances patient experience metrics
	•	Supports accreditation and quality narratives
	•	Improves long-term patient engagement
	•	Creates structured psycho-social outcome documentation
	•	Enables potential research and impact publication

Next Step:
We seek an exploratory discussion with relevant hospital leadership to assess alignment, feasibility, and potential pathways for a structured pilot implementation under Project HAUSLA.`
  }
];

export default Grants;
