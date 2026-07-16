import type { ReactNode } from 'react';

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  featured: boolean;
  published: boolean;
  Content?: () => ReactNode;
};

function AfricanDevelopersContent() {
  return (
    <div className="space-y-8 text-smoke text-sm leading-relaxed">
      <p className="text-fog text-base leading-relaxed">
        Most Nigerian developers I know are excellent at their craft. They can architect
        APIs, design databases, and ship features under pressure. The code is rarely the problem.
      </p>
      <p>
        The problem is the mental model behind it.
      </p>
      <p>
        When I say mental model, I mean this: the majority of Nigerian software engineers
        think of themselves as executers. Someone brings a problem, they build a solution.
        The better ones do this faster and cleaner. But the fundamental transaction is the
        same — value flows from execution. You build what you are told to build.
      </p>
      <p>
        That is a ceiling. Most developers don't see it until they've hit their head on it
        a few times.
      </p>

      <div className="border-t border-rim pt-8">
        <h2 className="font-display font-light text-fog text-2xl lg:text-3xl mb-5">
          The services trap
        </h2>
        <div className="space-y-4">
          <p>
            Running a web development services business for four years taught me this more
            directly than anything else. I built real things for real clients. Good systems.
            Clients who returned. By most measures, things were going well.
          </p>
          <p>
            But every time I stopped working, the business stopped moving. Every engagement
            started from zero. There was no compounding, no leverage, no asset that kept
            growing while I slept. I was trading time for money at a fixed rate.
          </p>
          <p>
            A services business is structurally incapable of compounding. You can hire more
            people, take on more clients, charge higher rates — but the model doesn't scale
            without your direct, continuous input. You are the product.
          </p>
          <p>
            The trap is that Nigerian culture often celebrates this model. Running your own
            dev agency looks like freedom compared to a 9-to-5. But it isn't freedom — it's
            employment with more admin and less certainty. And it has a hard ceiling.
          </p>
        </div>
      </div>

      <div className="border-t border-rim pt-8">
        <h2 className="font-display font-light text-fog text-2xl lg:text-3xl mb-5">
          The shift nobody teaches
        </h2>
        <div className="space-y-4">
          <p>
            Technical skills are the foundation. Getting good at building things is
            non-negotiable. But there's a shift that happens — or doesn't happen — at a
            certain point in a developer's career, and most never make it.
          </p>
          <p>The shift is from execution to ownership.</p>
          <p>
            It looks like this: instead of asking "what do you want me to build?", you start
            asking "what problem are we solving?" Those questions look similar. They are not.
          </p>
          <p>
            The first makes you a contractor. The second makes you a stakeholder. The first
            leads to a feature list. The second leads to a product.
          </p>
          <p>
            Product thinking is the ability to look at a real problem — experienced by real
            people, in a real context — and trace the structure of a solution all the way from
            the user's friction to a working system, without needing someone else to hand you
            the spec. It means understanding why a problem exists, not just what the fix looks
            like. It means knowing who has this problem, how often, and what they'd pay to
            have it solved.
          </p>
          <p>
            Those are not coding questions. They are product questions. And most developers
            never ask them because nobody told them to.
          </p>
        </div>
      </div>

      <div className="border-t border-rim pt-8">
        <h2 className="font-display font-light text-fog text-2xl lg:text-3xl mb-5">
          What the shift actually feels like
        </h2>
        <div className="space-y-4">
          <p>
            When I dissolved Alprosel Tech in 2024 and came on at App Guts, the change wasn't
            technical. I already knew how to build. The change was about ownership.
          </p>
          <p>
            Building at App Guts meant deciding that the problems we were working on — event
            organisers in Nigeria managing complex operations manually, losing time and money
            to inefficiency, operating completely without data — were ours to solve. Not
            because a client hired us to. Because we could see the gap and we had the skills
            to close it.
          </p>
          <p>
            EventsKona came out of that conviction. A smart event ticketing and discovery
            platform built specifically for the Nigerian market — not adapted from a Western
            product, but built from scratch around how events actually work here.
          </p>
          <p>
            The gap was obvious once I started looking. But I only started looking because
            I'd made the shift from "what's the next brief?" to "what's the next problem
            worth owning?"
          </p>
        </div>
      </div>

      <div className="border-t border-rim pt-8">
        <h2 className="font-display font-light text-fog text-2xl lg:text-3xl mb-5">
          The opportunity is larger than most people realise
        </h2>
        <div className="space-y-4">
          <p>
            Africa has some of the most underserved software markets in the world. Problems
            that have been solved for users in Europe and the United States for over a decade
            remain largely unsolved here — not because the technology doesn't exist, but
            because nobody local has committed to owning the solution.
          </p>
          <p>
            Nigerian developers are walking past these opportunities every day. They see them,
            feel them, complain about them — and then go back to building what a client tells
            them to build.
          </p>
          <p>
            The opportunity isn't to copy what's already built elsewhere and re-skin it for
            Nigeria. That rarely works. The opportunity is to understand the specific shape of
            problems in this market — how they manifest here, why existing solutions don't
            fit — and build for that specificity. That requires product thinking. It requires
            claiming the problem, not just executing the solution.
          </p>
        </div>
      </div>

      <div className="border-t border-rim pt-8">
        <h2 className="font-display font-light text-fog text-2xl lg:text-3xl mb-5">
          This isn't a call to quit your job
        </h2>
        <div className="space-y-4">
          <p>It's a call to change the question you're asking.</p>
          <p>
            You can be employed and still develop the mental model of a product thinker.
            Ship something that solves a real problem for real people. Join an early-stage
            team as a genuine collaborator — someone with stakes in the outcome — not just an
            engineer closing tickets. Start paying attention to why things don't work, not
            only how to fix what you're told to fix.
          </p>
          <p>
            The shift from hired hand to product thinker is the most important move a
            Nigerian software engineer can make. It changes what you build, who you build it
            with, and what you're worth.
          </p>
          <p>
            Most developers never make it. Not because they can't — but because nobody told
            them it was an option.
          </p>
          <p className="text-fog font-medium">Now you know.</p>
        </div>
      </div>
    </div>
  );
}

export const articles: Article[] = [
  {
    slug: 'african-developers-products-not-code',
    category: 'Product',
    title: 'Why African developers need to think in products, not just code',
    excerpt:
      'The shift from hired hand to product thinker is the most important move a Nigerian software engineer can make — and most never make it.',
    date: 'June 12, 2025',
    readTime: '6 min',
    featured: true,
    published: true,
    Content: AfricanDevelopersContent,
  },
  {
    slug: 'what-building-app-guts-taught-me',
    category: 'Startups',
    title: 'What building App Guts actually taught me',
    excerpt:
      'Running a software company in Port Harcourt taught me more about communication, resilience, and real customer problems than any course ever could.',
    date: 'May 28, 2025',
    readTime: '8 min',
    featured: false,
    published: false,
  },
  {
    slug: 'engineer-and-artist-without-apology',
    category: 'Creativity',
    title: 'On being an engineer and an artist without apology',
    excerpt:
      "People are often surprised that I write code and play saxophone at a high level. I've stopped explaining it. Here's why that surprised look is the problem.",
    date: 'April 15, 2025',
    readTime: '5 min',
    featured: false,
    published: false,
  },
  {
    slug: 'hardest-part-of-building-a-team',
    category: 'Leadership',
    title: "The hardest part of building a team isn't hiring",
    excerpt:
      "As a founder who started solo, delegating technical decisions was one of the most uncomfortable — and necessary — growth experiences I've had.",
    date: 'March 3, 2025',
    readTime: '7 min',
    featured: false,
    published: false,
  },
  {
    slug: 'eventskona-why-i-built-it',
    category: 'Startups',
    title: 'EventsKona: why I built a product nobody asked me to build',
    excerpt:
      "The best products solve problems you've personally experienced. EventsKona started as a rant and became a company.",
    date: 'February 19, 2025',
    readTime: '9 min',
    featured: false,
    published: false,
  },
  {
    slug: 'what-jazz-taught-me-about-software',
    category: 'Systems',
    title: 'What jazz taught me about building software',
    excerpt:
      'Improvisation and architecture have more in common than most engineers want to admit. Both require structure, intuition, and the courage to commit.',
    date: 'January 7, 2025',
    readTime: '6 min',
    featured: false,
    published: false,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
