"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Trash2, Send, Plus } from "lucide-react"

function DemoBlock({ title, description, children }: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-foreground mb-1">{title}</h2>
      {description && <p className="text-sm text-muted-foreground mb-5">{description}</p>}
      {!description && <div className="mb-5" />}
      <div className="card-glass rounded-2xl p-6">
        {children}
      </div>
    </div>
  )
}

const statusMap = [
  { label: "Open", bg: "bg-blue-50", text: "text-blue-700" },
  { label: "Pending", bg: "bg-amber-50", text: "text-amber-700" },
  { label: "Paused", bg: "bg-gray-100", text: "text-gray-600" },
  { label: "Closed", bg: "bg-gray-200", text: "text-gray-700" },
  { label: "Confirmed", bg: "bg-emerald-50", text: "text-emerald-700" },
  { label: "Invited", bg: "bg-blue-50", text: "text-blue-600" },
  { label: "Removed", bg: "bg-red-50", text: "text-red-600" },
]

export default function ComponentsPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground mb-2">Components</h1>
        <p className="text-base text-muted-foreground">
          shadcn/ui <span className="font-medium">new-york</span> style components with Centaur design token overrides.
          All components use CSS variables for theming.
        </p>
      </div>

      {/* Button */}
      <DemoBlock title="Button" description="Primary actions use default variant. Destructive for irreversible actions.">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Variants</p>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <Separator />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Sizes</p>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="lg">Large</Button>
              <Button>Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon"><Plus size={16} /></Button>
            </div>
          </div>
          <Separator />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">With Icon + Shadow</p>
            <div className="flex gap-2">
              <Button className="btn-shadow"><Send size={14} className="mr-2" />Send Invite</Button>
              <Button variant="outline"><Upload size={14} className="mr-2" />Upload File</Button>
              <Button variant="destructive"><Trash2 size={14} className="mr-2" />Remove</Button>
            </div>
          </div>
        </div>
      </DemoBlock>

      {/* Badge */}
      <DemoBlock title="Badge" description="shadcn/ui Badge variants + semantic StatusBadge color map.">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">shadcn variants</p>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>
          <Separator />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Semantic status map (StatusBadge pattern)</p>
            <div className="flex flex-wrap gap-2">
              {statusMap.map(({ label, bg, text }) => (
                <span
                  key={label}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bg} ${text}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DemoBlock>

      {/* Input & Label */}
      <DemoBlock title="Input & Label" description="Form elements with ring-primary focus state and border-input borders.">
        <div className="space-y-4 max-w-sm">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@centaur.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" type="text" placeholder="Jane Smith" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" type="text" placeholder="Not editable" disabled />
          </div>
        </div>
      </DemoBlock>

      {/* Select */}
      <DemoBlock title="Select" description="Radix-based dropdown with Centaur border radius and tokens.">
        <div className="max-w-xs">
          <Label className="mb-2 block">Specialty</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a specialty..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="oncology">Oncology</SelectItem>
              <SelectItem value="radiology">Radiology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DemoBlock>

      {/* Tabs */}
      <DemoBlock title="Tabs" description="Used for view switching in task onboarding and portal navigation.">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <p className="text-sm text-muted-foreground">Overview tab content</p>
          </TabsContent>
          <TabsContent value="tasks" className="mt-4">
            <p className="text-sm text-muted-foreground">Tasks tab content</p>
          </TabsContent>
          <TabsContent value="documents" className="mt-4">
            <p className="text-sm text-muted-foreground">Documents tab content</p>
          </TabsContent>
        </Tabs>
      </DemoBlock>

      {/* Separator */}
      <DemoBlock title="Separator" description="Visual divider for sections and form groups.">
        <div className="space-y-3">
          <p className="text-sm text-foreground">Section above</p>
          <Separator />
          <p className="text-sm text-foreground">Section below</p>
        </div>
      </DemoBlock>

      {/* Progress gradient */}
      <DemoBlock title="Progress Bar (.progress-gradient)" description="Indigo→purple gradient with glow — used in signup step indicator.">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step 2 of 4</span>
              <span>50%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/2 progress-gradient rounded-full" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step 4 of 4</span>
              <span>100%</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full progress-gradient rounded-full" />
            </div>
          </div>
        </div>
      </DemoBlock>
    </div>
  )
}
