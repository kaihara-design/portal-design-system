export type ColorToken = {
  name: string
  variable: string
  value: string
  usage: string
  group: string
}

export type RadiusToken = {
  name: string
  variable: string
  computed: string
  px: string
}

export type TypeScale = {
  class: string
  size: string
  lineHeight: string
  usage: string
}

export const colorTokens: ColorToken[] = [
  // Core
  { name: "Background", variable: "--background", value: "#ffffff", usage: "Page background", group: "core" },
  { name: "Foreground", variable: "--foreground", value: "#0a0a0a", usage: "Primary text", group: "core" },

  // Primary
  { name: "Primary", variable: "--primary", value: "#4f46e5", usage: "CTA buttons, active states", group: "primary" },
  { name: "Primary Foreground", variable: "--primary-foreground", value: "#fafafa", usage: "Text on primary bg", group: "primary" },

  // Cards & popovers
  { name: "Card", variable: "--card", value: "#ffffff", usage: "Card surface", group: "surface" },
  { name: "Card Foreground", variable: "--card-foreground", value: "#0a0a0a", usage: "Card text", group: "surface" },
  { name: "Popover", variable: "--popover", value: "#ffffff", usage: "Dropdown / tooltip bg", group: "surface" },
  { name: "Popover Foreground", variable: "--popover-foreground", value: "#0a0a0a", usage: "Popover text", group: "surface" },

  // Secondary
  { name: "Secondary", variable: "--secondary", value: "#f5f5f5", usage: "Secondary elements", group: "secondary" },
  { name: "Secondary Foreground", variable: "--secondary-foreground", value: "#171717", usage: "Text on secondary", group: "secondary" },

  // Muted
  { name: "Muted", variable: "--muted", value: "#f5f5f5", usage: "Disabled / de-emphasized", group: "muted" },
  { name: "Muted Foreground", variable: "--muted-foreground", value: "#737373", usage: "Placeholders, metadata", group: "muted" },

  // Accent
  { name: "Accent", variable: "--accent", value: "#f5f5f5", usage: "Hover state backgrounds", group: "accent" },
  { name: "Accent Foreground", variable: "--accent-foreground", value: "#171717", usage: "Text on accent", group: "accent" },

  // Semantic
  { name: "Destructive", variable: "--destructive", value: "#dc2626", usage: "Delete / error states", group: "semantic" },
  { name: "Destructive Foreground", variable: "--destructive-foreground", value: "#fef2f2", usage: "Text on destructive", group: "semantic" },

  // Borders & inputs
  { name: "Border", variable: "--border", value: "#e5e5e5", usage: "All borders", group: "border" },
  { name: "Input", variable: "--input", value: "#e5e5e5", usage: "Form field borders", group: "border" },
  { name: "Ring", variable: "--ring", value: "#a3a3a3", usage: "Focus outline", group: "border" },
]

export const brandTokens: ColorToken[] = [
  { name: "Primary", variable: "--primary", value: "#4f46e5", usage: "Primary brand color — indigo", group: "brand" },
  { name: "Shadow Grape", variable: "--shadow-grape", value: "#290D4D", usage: "Brand accent — deep purple", group: "brand" },
]

export const gradientTokens = {
  progress: {
    name: "Progress Gradient",
    class: ".progress-gradient",
    css: "linear-gradient(90deg, #403AEA, #381E9E)",
    glow: "rgba(64, 58, 234, 0.4)",
    usage: "Step indicators, progress bars",
  },
}

export const sidebarTokens: ColorToken[] = [
  { name: "Sidebar", variable: "--sidebar", value: "#ffffff", usage: "Sidebar background", group: "sidebar" },
  { name: "Sidebar Foreground", variable: "--sidebar-foreground", value: "#0a0a0a", usage: "Sidebar text", group: "sidebar" },
  { name: "Sidebar Primary", variable: "--sidebar-primary", value: "#4f46e5", usage: "Active nav item background", group: "sidebar" },
  { name: "Sidebar Primary Foreground", variable: "--sidebar-primary-foreground", value: "#fafafa", usage: "Text on active nav", group: "sidebar" },
  { name: "Sidebar Accent", variable: "--sidebar-accent", value: "#f5f5f5", usage: "Hover nav item background", group: "sidebar" },
  { name: "Sidebar Accent Foreground", variable: "--sidebar-accent-foreground", value: "#171717", usage: "Hover nav text", group: "sidebar" },
  { name: "Sidebar Border", variable: "--sidebar-border", value: "#e5e5e5", usage: "Sidebar dividers", group: "sidebar" },
  { name: "Sidebar Ring", variable: "--sidebar-ring", value: "#4f46e5", usage: "Focus ring in sidebar", group: "sidebar" },
]

export const radiusTokens: RadiusToken[] = [
  { name: "sm", variable: "--radius-sm", computed: "calc(var(--radius) - 4px)", px: "10px" },
  { name: "md", variable: "--radius-md", computed: "calc(var(--radius) - 2px)", px: "12px" },
  { name: "lg", variable: "--radius-lg", computed: "var(--radius)", px: "14px (base)" },
  { name: "xl", variable: "--radius-xl", computed: "calc(var(--radius) + 4px)", px: "18px" },
  { name: "2xl", variable: "--radius-2xl", computed: "calc(var(--radius) + 8px)", px: "22px" },
  { name: "3xl", variable: "--radius-3xl", computed: "calc(var(--radius) + 12px)", px: "26px" },
  { name: "4xl", variable: "--radius-4xl", computed: "calc(var(--radius) + 16px)", px: "30px" },
]

export const typeScale: TypeScale[] = [
  { class: "text-[10px]", size: "10px", lineHeight: "16px", usage: "Uppercase labels, badge text" },
  { class: "text-xs", size: "12px", lineHeight: "16px", usage: "Supporting metadata, captions" },
  { class: "text-sm", size: "14px", lineHeight: "20px", usage: "Default UI text, inputs, table cells" },
  { class: "text-base", size: "16px", lineHeight: "24px", usage: "Body paragraphs" },
  { class: "text-lg", size: "18px", lineHeight: "28px", usage: "Section subheadings" },
  { class: "text-xl", size: "20px", lineHeight: "28px", usage: "Card titles, modal headings" },
  { class: "text-2xl", size: "24px", lineHeight: "32px", usage: "Page section headings" },
  { class: "text-3xl", size: "30px", lineHeight: "36px", usage: "Page headings" },
]
