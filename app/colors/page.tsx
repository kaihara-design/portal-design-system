import { colorTokens, sidebarTokens } from "@/lib/tokens"

function ColorSwatch({ name, variable, value, usage }: {
  name: string
  variable: string
  value: string
  usage: string
}) {
  const isRgba = value.startsWith("rgba") || value.startsWith("oklch")
  const swatchStyle = isRgba ? { background: value } : { backgroundColor: value }

  return (
    <div className="card-glass rounded-xl overflow-hidden">
      <div className="h-16 w-full" style={swatchStyle} />
      <div className="p-3">
        <p className="text-xs font-semibold text-foreground">{name}</p>
        <p className="text-[10px] text-muted-foreground font-mono mt-0.5">{variable}</p>
        <p className="text-[10px] text-muted-foreground font-mono">{value}</p>
        <p className="text-[10px] text-muted-foreground mt-1.5 border-t border-border/40 pt-1.5">{usage}</p>
      </div>
    </div>
  )
}

function Section({ title, description, children }: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="text-lg font-semibold text-foreground mb-1">{title}</h2>
      {description && <p className="text-sm text-muted-foreground mb-5">{description}</p>}
      {!description && <div className="mb-5" />}
      {children}
    </section>
  )
}

export default function ColorsPage() {
  const coreGroup = colorTokens.filter(t => ["core", "primary"].includes(t.group))
  const surfaceGroup = colorTokens.filter(t => t.group === "surface")
  const mutedGroup = colorTokens.filter(t => ["secondary", "muted", "accent"].includes(t.group))
  const borderGroup = colorTokens.filter(t => t.group === "border")
  const semanticGroup = colorTokens.filter(t => t.group === "semantic")

  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Colors</h1>
        <p className="text-base text-muted-foreground">
          All design tokens are CSS custom properties defined in <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">globals.css</code> and mapped to Tailwind classes via <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">@theme inline</code>.
        </p>
      </div>

      <Section title="Core Palette" description="Foundation tokens used across all surface and interactive elements.">
        <div className="grid grid-cols-3 gap-3">
          {coreGroup.map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      <Section title="Surface Tokens" description="Card and popover backgrounds — glassmorphism cards use rgba opacity.">
        <div className="grid grid-cols-3 gap-3">
          {surfaceGroup.map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      <Section title="Secondary, Muted & Accent">
        <div className="grid grid-cols-3 gap-3">
          {mutedGroup.map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      <Section title="Borders & Interactive" description="Border uses rgba for glassmorphism. Input uses a solid value for form fields.">
        <div className="grid grid-cols-3 gap-3">
          {[...borderGroup, ...semanticGroup].map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      <Section title="Sidebar Tokens" description="Dedicated tokens scoped to sidebar navigation.">
        <div className="grid grid-cols-3 gap-3">
          {sidebarTokens.map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      {/* Gradient */}
      <Section title="Accent Gradient" description="Used in progress bars and highlighted UI elements.">
        <div className="card-glass rounded-xl overflow-hidden">
          <div className="h-16 w-full progress-gradient" />
          <div className="p-4 space-y-1">
            <p className="text-xs font-semibold text-foreground">Progress Gradient</p>
            <p className="text-[10px] font-mono text-muted-foreground">.progress-gradient</p>
            <p className="text-[10px] font-mono text-muted-foreground">linear-gradient(90deg, #4f46e5, #ad46ff)</p>
            <p className="text-[10px] font-mono text-muted-foreground">box-shadow: 0 0 12px rgba(97,95,255,0.4)</p>
          </div>
        </div>
      </Section>

      {/* Glassmorphism comparison */}
      <Section title="Glassmorphism Pattern" description="Cards use a frosted-glass effect vs a plain white card.">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">.card-glass (current)</p>
            <div className="card-glass rounded-2xl p-5">
              <p className="text-sm font-medium text-foreground">Glass card</p>
              <p className="text-xs text-muted-foreground">rgba(255,255,255,0.8) + blur(12px)</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-2">Plain white (reference)</p>
            <div className="bg-white rounded-2xl p-5 border border-[#e2e8f0]">
              <p className="text-sm font-medium text-foreground">Plain card</p>
              <p className="text-xs text-muted-foreground">bg-white + solid border</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
