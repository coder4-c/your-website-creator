
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const experts = [
  {
    img: "/mauriceedmondson.jpeg",
    name: "Maurice V. Edmondson III",
    role: "Founder & Managing Partner",
    bio: "Maurice Edmondson is a strategic advisor who helps organizations turn strategy into execution. With over 30 years of experience and leadership across $215M+ in enterprise initiatives, he specializes in diagnosing operational breakdowns and building systems that drive accountability, performance, and scalable growth.",
    fullDetails: {
      contact: {
        phone: "(210) 273-7533",
        email: "maurice.edmondson@gmail.com"
      },
      summary: "He brings over 30 years of experience spanning military service, federal leadership, and strategic advisory consulting. Maurice has led and overseen enterprise-level initiatives and portfolios exceeding $215 million. His work focuses on diagnosing operational breakdowns, designing structured systems, and enabling leadership teams to execute consistently at scale.",
      competencies: [
        "Strategic Advisory",
        "Organizational Transformation",
        "Operational Systems Design",
        "Performance and Accountability Frameworks",
        "Healthcare and Hospice Growth Systems",
        "Program and Portfolio Leadership"
      ],
      education: [
        {
          institution: "USC",
          degree: "Doctor of Education (Ed.D.), Organizational Change and Leadership (Will confer 2026)"
        },
        {
          institution: "Webster University",
          degree: "MS, Leadership & Management"
        },
        {
          institution: "Webster University",
          degree: "MS, Acquisition & Procurement"
        },
        {
          institution: "Mount Olive University",
          degree: "BAS, Business Administration & Management"
        },
        {
          institution: "CCAF",
          degree: "AA, Contract Administration"
        }
      ]
    }
  },
  {
    img: "/kelvin.jpeg",
    name: "Kevin Edmondson",
    role: "Senior Operations Consultant",
    bio: "Senior strategic operations advisor with experience in executive leadership on organizational strategy, workforce development, delivering measurable improvements in execution consistency and operational efficiency.",
    fullDetails: {
      contact: {
        phone: "",
        email: "kevin.edmondson@themeridianconsultinggroup.com"
      },
      summary: "Senior strategic operations and leadership advisor with more than 30 years of experience guiding executive leadership on organizational strategy, workforce development, enterprise operations, and international collaboration initiatives.",
      competencies: [
        "Strategic Advisory Services",
        "Organizational Strategy",
        "Enterprise Operations",
        "Workforce Development",
        "Leadership Development",
        "Program and Project Management",
        "Policy Development",
        "International Collaboration"
      ],
      education: [
        {
          institution: "Trident University International",
          degree: "Bachelor of Science in Business Administration"
        },
        {
          institution: "U.S. Army Sergeants Major Academy",
          degree: "Senior Executive Level Leadership Program"
        },
        {
          institution: "Strategic Leader Development Program",
          degree: "Advanced Leadership Development"
        },
        {
          institution: "Senior Leader Development Course",
          degree: "Advanced Leadership Training"
        }
      ]
    }
  },
  {
    img: "/Evans.jpeg",
    name: "Maurice Evans",
    role: "Chief Information Officer & Digital Transformation Leader",
    bio: "Visionary CIO with over 5 years of executive IT leadership, aligning technology strategy with business goals, leading digital transformations, and delivering cost savings through cybersecurity and IT governance.",
    fullDetails: {
      contact: {
        phone: "(210) 834-2495",
        email: "maurice.evans@themeridianconsultinggroup.com"
      },
      summary: "Visionary Chief Information Officer (CIO) and accomplished IT Program Manager with over 5 years of executive IT leadership experience across multiple verticals. Proven track record of aligning technology strategy with business goals, leading digital transformations, and delivering millions of dollars in cost savings. Known for driving innovation, building high-performance teams, and enhancing resilience through robust cybersecurity and IT governance practices.",
      competencies: [
        "IT Strategy & Roadmapping",
        "Cloud & Infrastructure Management",
        "Enterprise Architecture",
        "Budgeting & Cost Optimization",
        "Cybersecurity & Risk Management",
        "Stakeholder & Vendor Management",
        "IT Governance & Compliance",
        "ERP & HR Systems (Oracle, Salesforce)",
        "Agile & DevOps Leadership",
        "DoD Acquisition & Contracting (COR/COTR)",
        "Digital Transformation",
        "PCI DSS Compliance"
      ],
      education: [
        {
          institution: "Air Command & Staff College",
          degree: "2019"
        },
        {
          institution: "Webster University, Alamo Heights, TX",
          degree: "Master of Science in Leadership and Management"
        },
        {
          institution: "University of Notre Dame, South Bend, IN",
          degree: "Leadership & Management Studies"
        },
        {
          institution: "Bellevue University, Bellevue, NE",
          degree: "Bachelor of Science in Information Systems, Minor in Business"
        }
      ]
    }
  },
  {
    img: "/nancy.jpeg",
    name: "Nancy Johnson",
    role: "Senior Organizational Development Consultant",
    bio: "Expert in organizational development, change management, and leadership coaching with a focus on building high-performance teams.",
    fullDetails: {
      contact: {
        phone: "",
        email: "nancy.johnson@themeridianconsultinggroup.com"
      },
      summary: "Nancy Johnson is a senior consultant specializing in organizational development and change management. With over 20 years of experience, she helps organizations navigate complex transformations and build sustainable leadership capabilities.",
      competencies: [
        "Organizational Development",
        "Change Management",
        "Leadership Coaching",
        "Team Building",
        "Performance Management",
        "Strategic Planning",
        "Executive Development"
      ],
      education: [
        {
          institution: "Harvard Business School",
          degree: "MBA"
        },
        {
          institution: "University of Pennsylvania",
          degree: "Bachelor of Arts in Psychology"
        }
      ]
    }
  },
];

export const Experts = () => (
   <section id="experts" className="pt-20 pb-24" style={{ backgroundColor: '#f7f6f3' }}>
    <div className="container">
      <div className="max-w-2xl mb-6">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-4">Our experts</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Senior practitioners.</h2>
        <p className="text-base text-muted-foreground">
          Every Meridian engagement is led by a partner with operational experience inside the industry we serve.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((p, index) => (
            <article key={p.name} className="group bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="h-[480px] overflow-hidden rounded-xl mb-6 bg-secondary border-2 border-border group-hover:border-primary/20 transition-colors">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover object-top"
                  style={p.name === "Maurice Evans" ? { objectPosition: "50% 5%" } : {}}
                />
              </div>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent font-bold text-lg">
                  {p.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">{p.name}</h3>
              </div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-1 mb-3">{p.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-4 min-h-[72px]">{p.bio}</p>
              {p.fullDetails && (
                <Accordion type="single" collapsible className="border-t pt-4">
                  <AccordionItem value="full-profile" className="border-none">
                    <AccordionTrigger className="text-primary hover:text-primary/80 font-semibold">View Full Profile</AccordionTrigger>
                    <AccordionContent className="pt-2 space-y-6">
                      {p.fullDetails.contact && (
                        <>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Contact</p>
                            <div className="flex gap-2">
                              {p.fullDetails.contact.phone && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-sm">
                                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                                  {p.fullDetails.contact.phone}
                                </span>
                              )}
                              {p.fullDetails.contact.email && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-sm">
                                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                                  {p.fullDetails.contact.email}
                                </span>
                              )}
                            </div>
                          </div>
                          <hr className="border-border" />
                        </>
                      )}
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Summary</p>
                        <p className="text-muted-foreground leading-relaxed line-clamp-3">{p.fullDetails.summary}</p>
                      </div>
                      <hr className="border-border" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Core Competencies</p>
                        <div className="flex flex-wrap gap-2">
                          {p.fullDetails.competencies.map((comp, idx) => (
                            <span key={idx} className="inline-block px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground text-xs">
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                      <hr className="border-border" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Education</p>
                        <div className="space-y-4">
                          {p.fullDetails.education.map((edu, idx) => (
                            <div key={idx} className="border-l-2 border-accent/50 pl-4">
                              <p className="font-bold text-primary">{edu.institution}</p>
                              <p className="text-muted-foreground text-sm mb-1">{edu.degree}</p>
                              {edu.description && <p className="text-muted-foreground text-sm">{edu.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </article>
          ))}
        </div>
    </div>
  </section>
);