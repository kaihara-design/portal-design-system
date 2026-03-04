import { colorTokens, sidebarTokens, brandTokens, gradientTokens } from "@/lib/tokens"

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

      <Section title="Borders & Interactive">
        <div className="grid grid-cols-3 gap-3">
          {[...borderGroup, ...semanticGroup].map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      <Section title="Brand Colors" description="Primary brand color and named accent colors.">
        <div className="grid grid-cols-3 gap-3">
          {brandTokens.map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      <Section title="Sidebar Tokens" description="Dedicated tokens scoped to sidebar navigation.">
        <div className="grid grid-cols-3 gap-3">
          {sidebarTokens.map(t => <ColorSwatch key={t.variable} {...t} />)}
        </div>
      </Section>

      {/* Gradient */}
      <Section title="Accent Gradient" description="Used in progress bars and highlighted UI elements.">
        <div className="rounded-xl overflow-hidden border border-border">
          <div className="h-16 w-full progress-gradient" />
          <div className="p-4 space-y-1 bg-white">
            <p className="text-xs font-semibold text-foreground">{gradientTokens.progress.name}</p>
            <p className="text-[10px] font-mono text-muted-foreground">{gradientTokens.progress.class}</p>
            <p className="text-[10px] font-mono text-muted-foreground">{gradientTokens.progress.css}</p>
            <p className="text-[10px] font-mono text-muted-foreground">box-shadow: 0 0 12px {gradientTokens.progress.glow}</p>
          </div>
        </div>
      </Section>
    </div>
  )
}
