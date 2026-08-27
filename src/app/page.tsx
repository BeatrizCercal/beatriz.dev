import { Globe, Mail } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { DiscordOnlineDot } from "@/components/activity-section";
import { DISCORD_USER_ID } from "@/lib/discord";
import { CommandMenu } from "@/components/command-menu";

// ── Brand SVG icons ───────────────────────────────────────────────────────────
function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const PERSON = {
  name: "Beatriz Cercal Cachoeira",
  title: " Systems Development Technician / Software Engineer Student",
  location: "Joinville, SC, Brazil",
  avatar: "https://github.com/beatrizcercal.png", // Att profile icon
  social: [
    { label: "Email", href: "mailto:contact.biaccachoeira@gmail.com", icon: <Mail size={16} /> },
    { label: "GitHub", href: "https://github.com/beatrizcercal", icon: <GithubIcon size={16} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/beatriz-cercal-cachoeira-41843636b/", icon: <LinkedinIcon size={16} /> },
  ],
};

const WORK_EXPERIENCE = [
  {
    company: "Bia Fashion Kids",
    companyUrl: "https://www.instagram.com/biafashionkidsjoinville/",
    role: "IT Administrative assistant",
    period: "Jan 2026 - Present",
    tags: ["On Site", "ERP"],
    bullets: [
      "Responsible for organizing products that will later be sold, carrying out essential steps for the proper functioning of the company,",
      "through the system implemented in the parts registration/receipt/distribution department.",
    ],
  },
];

const FORMATION = [
  {
    company: "Systems Development Technician",
    companyUrl: "SENAI/SC",
    role: "Insira seu texto aqui",
    period: " Jan 2023- Dec 2025",
    tags: ["Insira seu texto aqui"],
    bullets: [
      "Insira seu texto aqui",
    ],
  },
];

const PROJECTS = [
  {
    title: "Insira seu texto aqui",
    description: "Insira seu texto aqui",
    tags: ["Insira seu texto aqui"],
    href: "",
  },
];

const SKILLS = [
  "HTML", "CSS", "React",
  "C", "Node", "Python", "MySQL",
  "GitHub", "Docker", "Figma", "VS Code", "Bootstrap", "Jupyter Notebook",
  "Proatividade", "Comunicação", "Organização", "Adaptabilidade", "Gestão de tempo", "Resolução de problemas",
  "Java", "JavaScript",
];

const CERTIFICATIONS = [
  {
    title: "Certificação Fábrica de Software",
    issuer: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
    certificationImage: "https://media.licdn.com/dms/image/v2/D4D0BAQHsgalvnPa8RA/company-logo_100_100/B4DZygYXO8JkAU-/0/1772217267853/senai_sc_logo?e=1789603200&v=beta&t=svtAWgRwjFCPlYFWftPk8L7ez8k9Tq9-OW8fF7d_Rrw",
    date: "Dez 2025",
    href: "",
  },
  {
    title: "Certificação Lógica de Desenvolvimento de Sistemas",
    issuer: "SENAI/SC - Serviço Nacional de Aprendizagem Industrial",
    certificationImage: "https://media.licdn.com/dms/image/v2/D4D0BAQHsgalvnPa8RA/company-logo_100_100/B4DZygYXO8JkAU-/0/1772217267853/senai_sc_logo?e=1789603200&v=beta&t=svtAWgRwjFCPlYFWftPk8L7ez8k9Tq9-OW8fF7d_Rrw",
    date: "Set 2023",
    href: "",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function SocialButton({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-md transition-colors hover:bg-accent"
      style={{
        width: 32, height: 32, flexShrink: 0,
        border: "1px solid hsl(var(--input))",
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function SecondaryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", borderRadius: 6,
      border: "1px solid transparent", padding: "2px 8px",
      fontWeight: 600, fontFamily: "ui-monospace, monospace", fontSize: 12,
      backgroundColor: "hsl(var(--secondary))", color: "hsl(var(--secondary-foreground))",
      whiteSpace: "nowrap", verticalAlign: "middle",
    }}>
      {children}
    </span>
  );
}

function DarkBadge({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", borderRadius: 6,
      border: "1px solid transparent", padding: "2px 8px",
      fontWeight: 600, fontFamily: "ui-monospace, monospace", fontSize: 12,
      backgroundColor: "rgba(17, 24, 39, 0.8)", color: "hsl(var(--primary-foreground))",
    }}>
      {children}
    </span>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const blogPosts = getAllPosts();

  return (
    <>
      <main
        style={{ maxWidth: "1400px" }}
        className="relative mx-auto scroll-my-12 overflow-auto p-4 pb-14 md:p-16 print:p-11"
      >
        <div className="mx-auto w-full max-w-2xl space-y-8 print:space-y-4" style={{ backgroundColor: "#fff" }}>

          {/* ── Header ── */}
          <header className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-x-2">
                <h1 className="text-2xl font-bold">
                  {PERSON.name}{" "}
                  <DiscordOnlineDot discordUserId={DISCORD_USER_ID} />
                </h1>
              </div>
              <p className="max-w-md text-pretty font-mono text-sm" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
                {PERSON.title}
              </p>
              <p className="max-w-md items-center text-pretty font-mono text-xs" style={{ color: "hsl(var(--foreground))" }}>
                <span className="inline-flex gap-x-1.5 align-baseline leading-none">
                  <Globe size={12} />
                  {PERSON.location}
                </span>
              </p>
              <div className="flex gap-x-1 pt-1 font-mono text-sm print:hidden">
                {PERSON.social.map((s) => (
                  <SocialButton key={s.label} href={s.href} label={s.label}>
                    {s.icon}
                  </SocialButton>
                ))}
              </div>
            </div>
            <a href="/" style={{ position: "relative", display: "flex", flexShrink: 0, overflow: "hidden", borderRadius: 12, width: 112, height: 112 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img style={{ aspectRatio: "1/1", height: "100%", width: "100%", objectFit: "cover" }} src={PERSON.avatar} alt={PERSON.name} />
            </a>
          </header>

          {/* ── About ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">About</h2>
            <p className="font-mono text-sm text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>
              Insira seu texto aqui
            </p>
          </section>

          {/* ── Work Experience ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <div className="flex flex-col gap-y-4">
              {WORK_EXPERIENCE.map((job) => (
                <div key={job.company} className="rounded-lg py-1 print:py-0" style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))" }}>
                  <div className="flex flex-col space-y-1.5 print:space-y-1">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none flex-wrap gap-y-1">
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.company}</a>
                        <ul className="list-none p-0 hidden gap-x-1 sm:inline-flex">
                          {job.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                        </ul>
                      </h3>
                      <div className="text-sm tabular-nums shrink-0" style={{ color: "#6b7280" }}>{job.period}</div>
                    </div>
                    <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">{job.role}</h4>
                  </div>
                  <div className="mt-2 text-xs font-medium print:mt-1 print:text-[10px] text-pretty" style={{ color: "hsl(var(--foreground))" }}>
                    <ul className="list-inside list-disc space-y-1">
                      {job.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  </div>
                  <div className="mt-2 sm:hidden">
                    <ul className="inline-flex list-none p-0 -mx-2 flex-wrap gap-1">
                      {job.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Formation ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Formation</h2>
            <div className="flex flex-col gap-y-4">
              {FORMATION.map((education) => (
                <div key={education.company} className="rounded-lg py-1 print:py-0" style={{ backgroundColor: "hsl(var(--card))", color: "hsl(var(--card-foreground))" }}>
                  <div className="flex flex-col space-y-1.5 print:space-y-1">
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none flex-wrap gap-y-1">
                        <a href={education.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{education.company}</a>
                        <ul className="list-none p-0 hidden gap-x-1 sm:inline-flex">
                          {education.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                        </ul>
                      </h3>
                      <div className="text-sm tabular-nums shrink-0" style={{ color: "#6b7280" }}>{education.period}</div>
                    </div>
                    <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">{education.role}</h4>
                  </div>
                  <div className="mt-2 text-xs font-medium print:mt-1 print:text-[10px] text-pretty" style={{ color: "hsl(var(--foreground))" }}>
                    <ul className="list-inside list-disc space-y-1">
                      {education.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                    </ul>
                  </div>
                  <div className="mt-2 sm:hidden">
                    <ul className="inline-flex list-none p-0 -mx-2 flex-wrap gap-1">
                      {education.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Projects ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Projects</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <div key={project.title} className="rounded-lg border flex h-full flex-col overflow-hidden p-3" style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }} role="article">
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-semibold tracking-tight text-base">
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
                      ) : project.title}
                    </h3>
                    <p className="font-mono text-xs text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{project.description}</p>
                  </div>
                  <div className="mt-auto pt-3">
                    <ul className="flex list-none flex-wrap gap-1 p-0">
                      {project.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Skills ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Skills</h2>
            <ul className="flex list-none flex-wrap gap-1 p-0">
              {SKILLS.map((skill) => <li key={skill}><DarkBadge>{skill}</DarkBadge></li>)}
            </ul>
          </section>

          {/* ── Blog ── */}
          <section className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Blog</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="hover:no-underline" style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    className="rounded-lg border flex h-full flex-col overflow-hidden p-3 transition-colors hover:bg-accent"
                    style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
                    role="article"
                  >
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-semibold tracking-tight text-base">{post.title}</h3>
                      <p className="font-mono text-xs text-pretty" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{post.description}</p>
                    </div>
                    <div className="mt-auto pt-3 flex items-end justify-between gap-2">
                      <ul className="flex list-none flex-wrap gap-1 p-0">
                        {post.tags.map((tag) => <li key={tag}><SecondaryBadge>{tag}</SecondaryBadge></li>)}
                      </ul>
                      <span className="font-mono text-xs tabular-nums shrink-0" style={{ color: "hsl(var(--muted-foreground))" }}>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Certifications ── */}
          <section id="certifications" className="flex min-h-0 flex-col gap-y-3 print:gap-y-1">
            <h2 className="text-xl font-bold">Certifications</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {CERTIFICATIONS.map((cert) => {
                const card = (
                  <div
                    className="rounded-lg border flex h-full items-center gap-x-3 overflow-hidden p-3 transition-colors hover:bg-accent"
                    style={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))" }}
                    role="article"
                  >
                    {cert.certificationImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cert.certificationImage}
                        alt={cert.title}
                        className="shrink-0 rounded-md"
                        style={{ width: 48, height: 48, objectFit: "contain" }}
                      />
                    )}
                    <div className="flex min-w-0 flex-col space-y-1">
                      <h3 className="truncate text-sm font-semibold leading-tight tracking-tight">{cert.title}</h3>
                      <p className="truncate font-mono text-xs" style={{ color: "hsl(var(--foreground) / 0.8)" }}>{cert.issuer}</p>
                      <p className="font-mono text-xs tabular-nums" style={{ color: "hsl(var(--muted-foreground))" }}>{cert.date}</p>
                    </div>
                  </div>
                );
                return cert.href ? (
                  <a key={cert.title} href={cert.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                    {card}
                  </a>
                ) : (
                  <div key={cert.title}>{card}</div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      <CommandMenu socialLinks={PERSON.social.filter((s) => s.label !== "Folio")} />
    </>
  );
}
