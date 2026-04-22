import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";

const articles = {
  "misaligned-leadership-teams": {
    tag: "Leadership",
    title: "The hidden cost of misaligned leadership teams",
    excerpt: "When the top of the house disagrees quietly, the rest of the organization pays loudly.",
    date: "Mar 2026",
    content: `The most expensive problems in an organization are rarely the ones leaders talk about in meetings. They're the silent gaps between what the CEO says, what the CFO does, and what the COO actually delivers.

Misaligned leadership teams don't announce themselves with conflict. They announce themselves with margin erosion, employee turnover, and strategic drift. Here's what we've learned working with boards and executive teams across military, healthcare, and enterprise technology.

## The Quiet Disagree

In our experience, the most dangerous dynamic isn't overt conflict. It's the polite agreement that hides fundamental disagreement. Leaders nod in the boardroom, then execute in completely different directions.

This shows up as:
- Competing OKRs that cancel each other out
- Cross-functional initiatives that die in the gap between departments
- Mid-level leaders who learned to "read the room" and play politics

## The Fix Isn't More Alignment Workshops

We've sat through countless leadership offsites focused on "building alignment." The problem is that misalignment at the top isn't a culture problem. It's a structural one.

The fix requires:
1. **Clear decision rights**. Who actually decides what?
2. **Visible operating model**. How does work actually flow?
3. **Committed accountability**. What happens when commitments break?

## What Works

In our engagements, the teams that sustain performance are those who build explicit operating rhythms. Not cultural ones. They make the invisible visible.

Start with a simple question: "What would have to be true for this strategy to work?" Then build backward from there.

The cost of misaligned leadership isn't measured in meetings. It's measured in the opportunity cost of what could have been.`,
  },
  "ai-pilots-stall": {
    tag: "AI Strategy",
    title: "Why most AI pilots stall before they scale",
    excerpt: "The technology was never the problem. The operating model was.",
    date: "Feb 2026",
    content: `Every major organization we've worked with in the past two years has run at least one AI pilot. Most of them stalled somewhere between proof of concept and production.

The common story is familiar: a promising pilot, executive excitement, then a slow motion fade as the reality of operating at scale sets in.

## What's Actually Breaking

The technology works. The models are capable. The data exists somewhere.

What breaks is almost always operational:
- No clear ownership between IT, data science, and the business
- Governance frameworks designed for pre-AI era compliance
- Success metrics that don't map to business outcomes
- Hand-off cycles that add weeks to every deployment

## The Pattern We See

Here's the recurring pattern:

**Phase 1: Excitement**. Executive sponsors a pilot with fanfare. Data science builds something impressive. Leadership marvels at the demo.

**Phase 2: The Gap**. The pilot works in isolation. Integrating it into actual workflows reveals a dozen dependency problems.

**Phase 3: Stall**. The pilot lives in the demo environment. Nobody knows how to deploy it. The sponsor moves to the next priority.

## The Fix Starts With Operating Model

AI at scale isn't a technology problem. It's an operating model problem.

Before you launch another pilot, ask:
- Who owns deployment end-to-end?
- What's the production path from day one?
- How do we measure actual business impact?

The teams that succeed with AI aren't the ones with the best models. They're the ones who built the operating model first.`,
  },
  "redesigning-care-delivery": {
    tag: "Healthcare",
    title: "Redesigning care delivery without breaking the team",
    excerpt: "A practical sequence for systems change inside fragile clinical environments.",
    date: "Jan 2026",
    content: `Healthcare systems are among the most resistant to change, and for good reason. When you redesign how care is delivered, you're not just changing workflows. You're changing the muscle memory that keeps patients safe.

We've worked with health systems across operational redesign, care delivery optimization, and compliance alignment. Here's the sequence that's actually worked.

## The Trap to Avoid

The common mistake is the "big bang" redesign. A comprehensive overhaul that sounds brilliant in a planning document and creates chaos in practice.

Clinical teams have developed workarounds because the official process didn't work. When you replace the official process, you don't just replace a workflow. You replace years of learned adaptation.

## A Better Sequence

### Phase 1: Map the Work, Not the Process

Start by observing what's actually happening. Not what's supposed to happen. What's actually happening.

Clinical staff know where the bottlenecks are. They have workarounds that work. Your job is to understand why those workarounds exist, then design from there.

### Phase 2: Design Small, Test Fast

Pick one workflow. Design a change. Test it with one team. Measure the impact. Then and only then, scale.

The goal isn't a perfect design. The goal is a design that survives contact with clinical reality.

### Phase 3: Build the Feedback Loop

The redesigned process will need adjustment. Build the feedback mechanism into the deployment. Not as an afterthought.

This means:
- Clear channels for staff to report issues
- Regular check-ins with clinical leadership
- A willingness to iterate based on what actually happens

## What Makes This Work

The teams that succeed with care delivery redesign are the ones who approach clinical staff as partners. Not as obstacles to overcome.

The expertise is in the room. Your job is to design systems that let that expertise work.`,
  },
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/#insights" className="text-accent hover:underline flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container">
        <Link to="/#insights" className="text-sm font-medium text-muted-foreground hover:text-accent transition-smooth inline-flex items-center gap-2 mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Insights
        </Link>

        <article className="max-w-3xl">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="flex items-center gap-2 text-accent font-semibold uppercase tracking-widest">
                <Tag className="h-4 w-4" /> {article.tag}
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" /> {article.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            {article.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-primary mt-12 mb-4">{line.replace("## ", "")}</h2>;
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="ml-4 list-disc ml-6 mb-2">{line.replace("- ", "")}</li>;
              }
              if (line.startsWith("**")) {
                return <p key={i} className="font-semibold text-primary my-4">{line.replace(/\*\*/g, "")}</p>;
              }
              if (line.trim()) {
                return <p key={i} className="mb-4 leading-relaxed">{line}</p>;
              }
              return null;
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/#contact" className="inline-flex items-center gap-2 text-accent hover:underline font-medium">
              Need help with a similar challenge? <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;