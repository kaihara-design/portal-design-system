import { typeScale } from "@/lib/tokens"

const fontWeights = [
  { weight: "400", label: "Regular", sample: "The quick brown fox jumps over the lazy dog" },
  { weight: "500", label: "Medium", sample: "The quick brown fox jumps over the lazy dog" },
  { weight: "600", label: "Semibold", sample: "The quick brown fox jumps over the lazy dog" },
  { weight: "700", label: "Bold", sample: "The quick brown fox jumps over the lazy dog" },
]

export default function TypographyPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Typography</h1>
        <p className="text-base text-muted-foreground">
          Inter is the canonical typeface for all Centaur web portal interfaces, loaded via <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">next/font/google</code>.
        </p>
      </div>

      {/* Font family */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-5">Font Family</h2>
        <div className="card-glass rounded-2xl p-6">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-5xl font-bold text-foreground">Aa</span>
            <div>
              <p className="text-base font-semibold text-foreground">Inter</p>
              <p className="text-xs text-muted-foreground">CSS variable: <code className="font-mono">var(--font-inter)</code></p>
              <p className="text-xs text-muted-foreground">Tailwind: <code className="font-mono">font-sans</code></p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground border-t border-border/40 pt-4">
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
            0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) — , . : ;
          </p>
        </div>
      </section>

      {/* Type scale */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-5">Type Scale</h2>
        <div className="card-glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[120px_60px_70px_1fr] gap-0 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground px-5 py-3 border-b border-border/40">
            <span>Class</span>
            <span>Size</span>
            <span>Line Ht.</span>
            <span>Usage</span>
          </div>
          {typeScale.map((t, i) => (
            <div
              key={t.class}
              className={`px-5 py-4 border-b border-border/30 last:border-0 ${i % 2 === 0 ? "" : "bg-white/30"}`}
            >
              <div className="grid grid-cols-[120px_60px_70px_1fr] gap-0 items-center mb-2">
                <code className="text-[10px] font-mono text-primary">{t.class}</code>
                <span className="text-[10px] text-muted-foreground">{t.size}</span>
                <span className="text-[10px] text-muted-foreground">{t.lineHeight}</span>
                <span className="text-[10px] text-muted-foreground">{t.usage}</span>
              </div>
              <p
                className={`${t.class} text-foreground font-medium leading-tight`}
                style={{ fontSize: t.size }}
              >
                Centaur Web Portal
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font weights */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-5">Font Weights</h2>
        <div className="space-y-3">
          {fontWeights.map(({ weight, label, sample }) => (
            <div key={weight} className="card-glass rounded-xl p-4 flex items-baseline gap-6">
              <div className="w-24 shrink-0">
                <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                <p className="text-[10px] font-mono text-muted-foreground">font-{weight === "400" ? "normal" : weight === "500" ? "medium" : weight === "600" ? "semibold" : "bold"}</p>
              </div>
              <p className="text-base text-foreground" style={{ fontWeight: weight }}>
                {sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Rendering */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-5">Rendering Settings</h2>
        <div className="card-glass rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-3">
            <code className="text-xs font-mono bg-muted px-2 py-1 rounded-md">-webkit-font-smoothing: antialiased</code>
            <span className="text-xs text-muted-foreground">Smooth subpixel rendering on macOS/iOS</span>
          </div>
          <div className="flex items-center gap-3">
            <code className="text-xs font-mono bg-muted px-2 py-1 rounded-md">font-feature-settings: default</code>
            <span className="text-xs text-muted-foreground">Inter handles ligatures natively</span>
          </div>
        </div>
      </section>
    </div>
  )
}
