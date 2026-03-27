import { radiusTokens } from "@/lib/tokens"

function UtilityDemo({ name, className, description, children }: {
  name: string
  className: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="card-glass rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs font-semibold text-foreground">{name}</p>
          <code className="text-[10px] font-mono text-primary">.{className}</code>
        </div>
        <p className="text-[10px] text-muted-foreground text-right max-w-[180px]">{description}</p>
      </div>
      {children}
    </div>
  )
}

const spacingItems = [
  { label: "px-2", px: "8px", use: "Tight padding" },
  { label: "px-3", px: "12px", use: "Compact elements" },
  { label: "px-4", px: "16px", use: "Default padding" },
  { label: "px-5", px: "20px", use: "Cards, sections" },
  { label: "px-6", px: "24px", use: "Modal / dialog" },
  { label: "px-8", px: "32px", use: "Page layout" },
]

const heightItems = [
  { label: "h-8", px: "32px", use: "Small buttons / inputs" },
  { label: "h-9", px: "36px", use: "Default inputs" },
  { label: "h-10", px: "40px", use: "Large buttons" },
  { label: "h-12", px: "48px", use: "Hero buttons" },
  { label: "h-14", px: "56px", use: "Table rows" },
]

export default function SpacingPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Spacing</h1>
        <p className="text-base text-muted-foreground">
          Border radius scale, common padding and height conventions, and custom utility class reference.
        </p>
      </div>

      {/* Border radius */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-1">Border Radius</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Base: <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded-md">--radius: 0.875rem</code> (14px). All variants computed from this base.
        </p>
        <div className="grid grid-cols-4 gap-3">
          {radiusTokens.map(({ name, variable, computed, px }) => (
            <div key={name} className="card-glass rounded-xl p-4 text-center">
              <div
                className="w-10 h-10 bg-primary/20 border-2 border-primary/40 mx-auto mb-3"
                style={{ borderRadius: `var(${variable})` }}
              />
              <p className="text-xs font-semibold text-foreground">rounded-{name}</p>
              <p className="text-[10px] font-mono text-muted-foreground mt-0.5">{px}</p>
              <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">{computed}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Padding scale */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-5">Common Horizontal Padding</h2>
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-5 py-3 border-b border-border/40">
            <span>Class</span>
            <span>Size</span>
            <span>Use Case</span>
          </div>
          {spacingItems.map(({ label, px, use }, i) => (
            <div
              key={label}
              className={`grid grid-cols-3 px-5 py-3 items-center border-b border-border/30 last:border-0 ${i % 2 === 0 ? "" : "bg-white/30"}`}
            >
              <code className="text-xs font-mono text-primary">{label}</code>
              <span className="text-xs text-muted-foreground">{px}</span>
              <span className="text-xs text-muted-foreground">{use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Height scale */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-5">Common Component Heights</h2>
        <div className="card-glass rounded-2xl p-5 space-y-3">
          {heightItems.map(({ label, px, use }) => (
            <div key={label} className="flex items-center gap-4">
              <code className="w-16 text-xs font-mono text-primary shrink-0">{label}</code>
              <div
                className="bg-primary/20 border border-primary/30 rounded-md flex items-center px-3"
                style={{ height: px, minWidth: "120px" }}
              >
                <span className="text-[10px] text-primary font-medium">{px}</span>
              </div>
              <span className="text-xs text-muted-foreground">{use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Utility classes */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-5">Utility Classes</h2>
        <div className="grid grid-cols-1 gap-4">

          <UtilityDemo
            name="Card Glassmorphism"
            className="card-glass"
            description="rgba(255,255,255,0.8) + backdrop-filter: blur(12px) + semi-transparent border"
          >
            <div className="card-glass rounded-xl p-4">
              <p className="text-sm font-medium text-foreground">Glass surface</p>
              <p className="text-xs text-muted-foreground">Best on the #f0f4f8 page background</p>
            </div>
          </UtilityDemo>

          <UtilityDemo
            name="Button Shadow"
            className="btn-shadow"
            description="box-shadow: 0px 4px 8px rgba(79,70,229,0.18) — subtle depth on primary buttons"
          >
            <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-[8px] btn-shadow">
              Primary Action
            </button>
          </UtilityDemo>

          <UtilityDemo
            name="Fade In"
            className="animate-fade-in"
            description="opacity 0→1, translateY 8px→0, 0.25s ease-out — applied to page wrappers"
          >
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span>Applied to all page</span>
              <code className="font-mono text-primary">{"<div>"}</code>
              <span>wrappers on this site</span>
            </div>
          </UtilityDemo>

          <UtilityDemo
            name="Progress Gradient"
            className="progress-gradient"
            description="linear-gradient(90deg, #4f46e5, #ad46ff) + glow box-shadow"
          >
            <div className="h-3 rounded-full progress-gradient w-3/4" />
          </UtilityDemo>

        </div>
      </section>
    </div>
  )
}
