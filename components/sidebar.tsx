"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Palette, Type, Layers, Move, LayoutGrid } from "lucide-react"

const nav = [
  { href: "/", label: "Overview", icon: LayoutGrid },
  { href: "/colors", label: "Colors", icon: Palette },
  { href: "/typography", label: "Typography", icon: Type },
  { href: "/components", label: "Components", icon: Layers },
  { href: "/spacing", label: "Spacing", icon: Move },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-sidebar border-r border-sidebar-border flex flex-col z-40">
      {/* Brand */}
      <div className="px-5 py-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-foreground tracking-wide">CENTAUR</p>
            <p className="text-[10px] text-muted-foreground">Design System</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-sidebar-border">
        <p className="text-[10px] text-muted-foreground">v1.0 · Centaur Portal</p>
      </div>
    </aside>
  )
}
