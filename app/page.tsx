import Link from "next/link"
import { Palette, Type, Layers, Move } from "lucide-react"

const sections = [
  {
    href: "/colors",
    icon: Palette,
    title: "Colors",
    description: "Design tokens, semantic palette, sidebar colors, and glassmorphism border patterns.",
  },
  {
    href: "/typography",
    icon: Type,
    title: "Typography",
    description: "Inter font family, type scale from 10px to 30px, weights, and rendering settings.",
  },
  {
    href: "/components",
    icon: Layers,
    title: "Components",
    description: "shadcn/ui new-york components: buttons, inputs, badges, tabs, selects, and more.",
  },
  {
    href: "/spacing",
    icon: Move,
    title: "Spacing",
    description: "Border radius scale, spacing conventions, and utility class reference.",
  },
]

const stackItems = [
  { label: "Next.js", version: "16" },
  { label: "React", version: "19" },
  { label: "Tailwind CSS", version: "v4" },
  { label: "shadcn/ui", version: "new-york" },
  { label: "TypeScript", version: "5" },
]

export default function OverviewPage() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          Design System v1.0
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">Centaur Design System</h1>
        <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
          The canonical visual reference for all Centaur web portal projects. Defines design tokens,
          typography, component patterns, and spacing conventions.
        </p>
      </div>

      {/* Stack badges */}
      <div className="mb-12">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Stack</p>
        <div className="flex flex-wrap gap-2">
          {stackItems.map(({ label, version }) => (
            <span
              key={label}
              className="px-3 py-1 rounded-full bg-white border border-input text-xs font-medium text-foreground"
            >
              {label} <span className="text-muted-foreground">{version}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Brand overview */}
      <div className="mb-12 card-glass rounded-2xl p-6">
        <h2 className="text-base font-semibold text-foreground mb-3">Brand Overview</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Primary Color</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary shadow-sm" />
              <div>
                <p className="text-sm font-medium text-foreground">#4f46e5</p>
                <p className="text-xs text-muted-foreground">Indigo 600</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Accent Gradient</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg progress-gradient shadow-sm" />
              <div>
                <p className="text-sm font-medium text-foreground">#403AEA → #381E9E</p>
                <p className="text-xs text-muted-foreground">Indigo to Deep Purple</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Typeface</p>
            <p className="text-sm font-medium text-foreground">Inter</p>
            <p className="text-xs text-muted-foreground">Weights 400–700</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Border Radius</p>
            <p className="text-sm font-medium text-foreground">8px (0.5rem)</p>
            <p className="text-xs text-muted-foreground">Base, matches Figma</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border/40">
          Brand guidelines screenshots pending — brand color confirmation TBD.
        </p>
      </div>

      {/* Section nav cards */}
      <div className="grid grid-cols-2 gap-4">
        {sections.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group card-glass rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 border border-transparent hover:border-primary/20"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon size={18} className="text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
