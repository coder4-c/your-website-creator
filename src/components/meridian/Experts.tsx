
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const experts = [
  {
    img: "/mauriceedmondson.jpeg",
    name: "Maurice V. Edmondson III",
    role: "Founder & Managing Partner",
    bio: "Founder of Meridian Consulting Group, visionary leader with extensive experience in strategic consulting and organizational transformation.",
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
    role: "Senior Healthcare Operations Consultant",
    bio: "Healthcare executive & nurse leader with over 20 years of experience driving clinical operations, patient safety, and quality management.",
    fullDetails: {
      contact: {
        phone: "",
        email: "nancy.johnson@themeridianconsultinggroup.com"
      },
      summary: "Healthcare executive & nurse leader with over 20 years of experience driving clinical operations, patient safety, quality management & organizational high-reliability performance across complex healthcare systems. Expertise in process improvement, workforce development, infection control & prevention & healthcare delivery optimization. Proven ability to lead cross-functional, multi-disciplinary teams, implement system-wide initiatives, & advise leadership on strategic & operational improvements.",
      competencies: [
        "Healthcare Operations & Performance Improvement",
        "Process Optimization (Lean / Workflow Redesign)",
        "Patient Safety & Quality Improvement Initiatives",
        "Change Management & Organizational Transformation",
        "Clinical Program Development & Evaluation",
        "Infection Prevention & Regulatory Compliance",
        "Executive Leadership & Stakeholder Engagement",
        "Data-Driven Decision Making"
      ],
      education: [
        {
          institution: "Chamberlain University",
          degree: "Doctor of Nursing Practice (DNP), Health Systems Leadership"
        },
        {
          institution: "University of Phoenix",
          degree: "Master of Science in Nursing & Master of Business Administration – Healthcare Management"
        },
        {
          institution: "Rhode Island College",
          degree: "Bachelor of Science in Nursing"
        }
      ],
      certifications: [
        "Registered Nurse (Multi-State License)",
        "Certified in Executive Nursing Practice",
        "(soon) Certified Professional in Healthcare Quality"
      ],
      affiliations: [
        "American Organization for Nursing Leadership",
        "American Nurses Association",
        "Academy of Medical-Surgical Nurses",
        "Sigma Theta Tau International Honor Society"
      ],
      professionalExperience: [
        {
          title: "Chief Nurse / Senior Healthcare Leader, Air Force Inpatient & Outpatient facilities",
          period: "2016 – Present",
          bullets: [
            "Led enterprise-level nursing operations supporting a large, multidisciplinary healthcare organization",
            "Advised senior leadership on clinical performance, staffing models, and patient safety initiatives",
            "Designed and implemented process improvements to enhance care delivery and operational efficiency",
            "Directed workforce development programs, improving staff retention and clinical readiness",
            "Collaborated across departments to standardize care practices and improve outcomes"
          ]
        },
        {
          title: "Nurse Manager/Surgical Services Operations Lead, DoD Level I Trauma/Burn Center",
          period: "2013 – 2016",
          bullets: [
            "Managed high-volume inpatient surgical unit with responsibility for staffing, workflow, and quality outcomes",
            "Led operational improvements to increase efficiency and reduce care delays",
            "Coordinated interdisciplinary teams to optimize patient throughput and surgical care delivery",
            "Provided leadership in performance improvement and patient safety initiatives"
          ]
        },
        {
          title: "Clinical Education & Workforce Development Leader",
          period: "2009 – 2013",
          bullets: [
            "Directed nurse transition and training programs to improve workforce capability and readiness",
            "Developed standardized onboarding and competency frameworks",
            "Increased staff performance and retention through structured education programs"
          ]
        },
        {
          title: "Clinical Operations & Infection Control Prevention & Control Leader",
          period: "2004 – 2009",
          bullets: [
            "Led infection prevention and control program, ensuring compliance with healthcare standards",
            "Implemented system-wide quality improvements to reduce infection risks",
            "Supervised inpatient care operations and multidisciplinary teams"
          ]
        }
      ],
      achievements: [
        "Led clinical teams across multiple facilities and care settings",
        "Improved patient safety and infection control compliance across organizations",
        "Developed and implemented workforce training programs affecting large nursing populations",
        "Recognized multiple times for leadership excellence and clinical performance"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((p, index) => (
            <article key={p.name} className="group bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="h-[380px] overflow-hidden rounded-xl mb-6 bg-secondary border-2 border-border group-hover:border-primary/20 transition-colors">
                 <img
                   src={p.img}
                   alt={p.name}
                   loading="lazy"
                   width={800}
                   height={1000}
                   className="w-full h-full object-cover object-top"
                   style={
                     p.name === "Maurice Evans"
                       ? { width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block", transform: "none" }
                       : p.name === "Maurice V. Edmondson III"
                       ? { objectPosition: "center 20%" }
                       : p.name === "Nancy Johnson"
                       ? { objectPosition: "center 20%" }
                       : {}
                   }
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
                            <div className="flex flex-col gap-2">
                              {p.fullDetails.contact.phone && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-sm truncate">
                                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                                  {p.fullDetails.contact.phone}
                                </span>
                              )}
                              {p.fullDetails.contact.email && (
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent text-accent text-sm truncate">
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
                       {p.fullDetails.professionalExperience && p.fullDetails.professionalExperience.length > 0 && (
                         <>
                           <hr className="border-border" />
                           <div>
                             <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Professional Experience</p>
                             <div className="space-y-6">
                               {p.fullDetails.professionalExperience.map((exp, idx) => (
                                 <div key={idx} className="border-l-2 border-accent/50 pl-4">
                                   <p className="font-bold text-primary">{exp.title}</p>
                                   <p className="text-muted-foreground text-sm mb-2">{exp.period}</p>
                                   <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                     {exp.bullets.map((bullet, bulletIdx) => <li key={bulletIdx}>{bullet}</li>)}
                                   </ul>
                                 </div>
                               ))}
                             </div>
                           </div>
                         </>
                       )}
                       {p.fullDetails.achievements && p.fullDetails.achievements.length > 0 && (
                         <>
                           <hr className="border-border" />
                           <div>
                             <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Selected Impact & Achievements</p>
                             <ul className="space-y-1 text-muted-foreground text-sm">
                               {p.fullDetails.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
                             </ul>
                           </div>
                         </>
                       )}
                       {p.fullDetails.certifications && p.fullDetails.certifications.length > 0 && (
                         <>
                           <hr className="border-border" />
                           <div>
                             <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Certifications & License</p>
                             <div className="flex flex-wrap gap-2">
                               {p.fullDetails.certifications.map((cert, idx) => (
                                 <span key={idx} className="inline-block px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground text-xs">
                                   {cert}
                                 </span>
                               ))}
                             </div>
                           </div>
                         </>
                       )}
                       {p.fullDetails.affiliations && p.fullDetails.affiliations.length > 0 && (
                         <>
                           <hr className="border-border" />
                           <div>
                             <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Professional Affiliations</p>
                             <div className="flex flex-wrap gap-2">
                               {p.fullDetails.affiliations.map((aff, idx) => (
                                 <span key={idx} className="inline-block px-2 py-1 rounded-md bg-muted border border-border text-muted-foreground text-xs">
                                   {aff}
                                 </span>
                               ))}
                             </div>
                           </div>
                         </>
                       )}
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