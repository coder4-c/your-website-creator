import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { experts } from "@/data/experts";

const Profile = () => {
  const { name } = useParams<{ name: string }>();
  const expert = experts.find(e => e.slug === name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!expert) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Expert Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const elaborations: Record<string, string> = {
    "Maurice V. Edmondson III": "Maurice brings over three decades of leadership experience across military, federal, and consulting sectors. His expertise in operational systems design and performance frameworks has driven multi-million dollar initiatives to successful completion. He specializes in diagnosing organizational breakdowns and implementing sustainable solutions that align strategy with execution.",
    "Kevin B. Edmondson": "With a proven track record in high-stakes environments, Kevin brings deep expertise in transforming complex organizations through strategic initiatives and operational excellence. His military and consulting background equips him to deliver sustainable results across diverse sectors. Kevin specializes in workforce optimization and international partnerships that drive measurable performance improvements.",
    "Maurice Evans": "As a visionary CIO, Maurice combines 5 years of executive IT leadership with deep technical expertise to align technology strategies with business objectives. His track record includes delivering millions in cost savings through innovative cybersecurity and digital transformation initiatives. He excels at building high-performance teams and enhancing organizational resilience.",
    "Nancy Johnson": "Nancy's extensive experience in healthcare operations and nursing leadership positions her as a key advisor for organizations seeking to optimize clinical processes and improve patient outcomes. Her background in military healthcare and quality improvement initiatives provides unique insights into high-reliability systems. She excels in change management and workforce development to build resilient healthcare teams."
  };

  const competencyGroups: Record<string, Record<string, string[]>> = {
    "Kevin B. Edmondson": {
      "Strategic & Advisory": ["Strategic Advisory Services", "Organizational Strategy", "Strategic Planning & Operational Execution", "Executive Decision Support & Briefing", "International Collaboration"],
      "Operational & Performance": ["Enterprise Operations", "Organizational Resilience & Performance Optimization", "Program and Project Management", "Policy Development"],
      "Leadership & Development": ["Workforce Development", "Leadership Development"]
    },
    "Nancy Johnson": {
      "Healthcare Operations": ["Healthcare Operations & Performance Improvement", "Process Optimization (Lean / Workflow Redesign)", "Patient Safety & Quality Improvement Initiatives", "Clinical Program Development & Evaluation", "Infection Prevention & Regulatory Compliance"],
      "Leadership & Change": ["Change Management & Organizational Transformation", "Executive Leadership & Stakeholder Engagement", "Data-Driven Decision Making"],
      "Development": ["Leadership Coaching", "Team Building", "Performance Management", "Strategic Planning"]
    },
    "Maurice Evans": {
      "IT Strategy & Leadership": ["IT Strategy & Roadmapping", "Cloud & Infrastructure Management", "Enterprise Architecture", "Digital Transformation", "Agile & DevOps Leadership"],
      "Security & Compliance": ["Cybersecurity & Risk Management", "IT Governance & Compliance", "PCI DSS Compliance"],
      "Operations": ["Budgeting & Cost Optimization", "Stakeholder & Vendor Management", "ERP & HR Systems (Oracle, Salesforce)", "DoD Acquisition & Contracting (COR/COTR)"]
    },
    "Maurice V. Edmondson III": {
      "Strategic Leadership": ["Strategic Advisory", "Organizational Transformation", "Program and Portfolio Leadership"],
      "Operational Excellence": ["Operational Systems Design", "Performance and Accountability Frameworks"],
      "Healthcare Focus": ["Healthcare and Hospice Growth Systems"]
    }
  };

  const elaboration = elaborations[expert.name] || "This expert brings extensive experience and specialized knowledge to deliver transformative results for organizations.";

  return (
    <div className="min-h-screen bg-background">
      <section className="py-24">
        <div className="container max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <main className="lg:w-11/16">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-48 h-48 rounded-xl object-cover shadow-lg"
                />
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    {expert.name}
                  </h1>
                  <p className="text-xl text-accent mb-6">{expert.role}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {expert.bio}
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-3xl font-bold text-primary mb-4">Professional Summary</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {elaboration}
                  </p>
                </div>

                {expert.fullDetails.professionalExperience && expert.fullDetails.professionalExperience.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">Professional Experience</h2>
                    <div className="space-y-8">
                      {expert.fullDetails.professionalExperience.map((exp, idx) => {
                        const [role, organization] = exp.title.split(' – ');
                        return (
                          <div key={idx} className="border-l-[3px] border-amber-600 pl-6 py-4">
                            <h3 className="text-xl font-bold text-primary mb-1">{role}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{organization}</p>
                            <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                              {exp.bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx} className="leading-relaxed">{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {expert.fullDetails.achievements && expert.fullDetails.achievements.length > 0 && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-3xl font-bold text-primary mb-4">Selected Impact & Achievements</h2>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {expert.fullDetails.achievements.map((ach, idx) => (
                        <li key={idx} className="leading-relaxed">{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
                  <div className="space-y-6 mb-8">
                    {expert.fullDetails.education.map((edu, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-6">
                        <h3 className="text-lg font-bold text-primary">{edu.institution}</h3>
                        <p className="text-amber-600 font-semibold">{edu.degree}</p>
                        {edu.description && (
                          <p className="text-muted-foreground mt-2">{edu.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  {expert.fullDetails.certifications && expert.fullDetails.certifications.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4">Certifications & License</h3>
                      <div className="flex flex-wrap gap-2">
                        {expert.fullDetails.certifications.map((cert, idx) => (
                          <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {expert.fullDetails.affiliations && expert.fullDetails.affiliations.length > 0 && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-3xl font-bold text-primary mb-4">Professional Affiliations</h2>
                    <div className="flex flex-wrap gap-3">
                      {expert.fullDetails.affiliations.map((aff, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-2 rounded-lg bg-amber-50 text-amber-700 text-sm font-medium"
                        >
                          {aff}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </main>

            <aside className="lg:w-4/16 lg:sticky lg:top-24 lg:self-start">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <p className="text-sm mb-4">{expert.fullDetails.contact?.email}</p>
                <a
                  href={`mailto:${expert.fullDetails.contact?.email}`}
                  className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors w-full justify-center mb-6"
                >
                  Request a Consultation
                </a>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Core Competencies</h3>
                  <div className="space-y-4">
                    {competencyGroups[expert.name] ? (
                      Object.entries(competencyGroups[expert.name]).map(([category, comps]) => (
                        <div key={category}>
                          <p className="text-sm font-medium text-gray-600 mb-2">{category}</p>
                          <div className="flex flex-wrap gap-2">
                            {comps.map((comp, idx) => (
                              <span key={idx} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                                {comp}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {expert.fullDetails.competencies.map((comp, idx) => (
                          <span key={idx} className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm">
                            {comp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;