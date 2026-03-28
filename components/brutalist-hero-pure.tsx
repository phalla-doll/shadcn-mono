"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Reuse grid constants from components page
const GRID_COLUMNS = 2

function getGridCoordinate(rowIndex: number): string {
    const col = rowIndex % GRID_COLUMNS
    const colLetter = String.fromCharCode(65 + col) // A, B
    const cellNum = Math.floor(rowIndex / GRID_COLUMNS) + 1
    return `${colLetter}${cellNum}`
}

function SectionHeader({
    title,
    id,
    index,
}: {
    title: string
    id: string
    index: number
}) {
    const sectionCode = String(index + 1).padStart(2, "0")
    return (
        <div
            id={id}
            className="relative col-span-full mb-0 border-y-2 border-foreground bg-foreground py-4 pr-4 pl-12"
        >
            <div className="absolute top-0 left-0 flex h-full w-8 items-center justify-center border-r-2 border-background/20 bg-background/10">
                <span className="-rotate-90 font-mono text-[10px] font-bold whitespace-nowrap text-background">
                    SEC {sectionCode}
                </span>
            </div>
            <div className="flex items-center justify-between font-mono">
                <h2 className="flex items-center gap-3 text-sm font-bold tracking-widest text-background uppercase">
                    <span className="text-xs opacity-60">[</span>
                    <span>{title}</span>
                    <span className="text-xs opacity-60">]</span>
                </h2>
                <span className="text-[10px] tracking-wider text-background/60 uppercase">
                    {id}
                </span>
            </div>
        </div>
    )
}

function ComponentBox({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <div className="relative flex h-full flex-col">
            {/* Title bar */}
            <div className="border-b-2 border-foreground bg-muted px-3 py-2">
                <div className="flex items-center justify-between">
                    <h4 className="font-mono text-[11px] font-bold tracking-wider text-foreground uppercase">
                        {title}
                    </h4>
                    <div className="flex gap-1">
                        <div className="h-2 w-2 border border-foreground bg-background" />
                        <div className="h-2 w-2 border border-foreground bg-muted-foreground/30" />
                    </div>
                </div>
            </div>

            {/* Content area */}
            <div className="flex flex-1 flex-wrap items-center justify-center gap-3 p-4">
                {children}
            </div>

            {/* Grid line decoration */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 h-full w-px bg-border/50" />
                <div className="absolute top-0 left-1/2 h-full w-px bg-border/50" />
                <div className="absolute top-0 left-3/4 h-full w-px bg-border/50" />
            </div>
        </div>
    )
}

export function BrutalistHero() {
    // Calculate actual row count based on content:
    // - 4 sections (each has SectionHeader = 1 row + 2 content boxes = 2 rows) = 4 * 3 = 12 rows
    // - 2 end marker cells = 1 row
    // Total = 13 rows
    const GRID_ROWS = 13

    return (
        <div className="min-h-screen bg-background font-mono text-foreground">
            {/* Top grid bar */}
            <div className="sticky top-0 z-50 border-b-2 border-foreground bg-background">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest text-foreground uppercase">
                            {"// COMPONENT GRID"}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                            v2.0.0
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                        <span>COLUMNS: 2</span>
                        <span>|</span>
                        <span>GAP: 0</span>
                        <span>|</span>
                        <span>BORDER: 2px</span>
                    </div>
                </div>
            </div>

            {/* Column headers */}
            <div className="mx-auto max-w-7xl">
                <div className="flex border-b-2 border-foreground bg-muted">
                    <div className="w-8 border-r-2 border-foreground" />
                    <div className="flex-1 border-r-2 border-foreground py-2 text-center font-mono text-[10px] font-bold tracking-widest text-foreground uppercase">
                        COL A
                    </div>
                    <div className="flex-1 py-2 text-center font-mono text-[10px] font-bold tracking-widest text-foreground uppercase">
                        COL B
                    </div>
                </div>
            </div>

            {/* Main grid container */}
            <div className="mx-auto max-w-7xl pb-16">
                <div className="relative grid grid-cols-1 border-x-2 border-foreground md:grid-cols-2">
                    {/* Row numbers - left side */}
                    <div className="absolute top-0 -left-8 flex h-full w-6 flex-col border-r border-border bg-muted/50">
                        {Array.from({ length: GRID_ROWS }).map((_, i) => (
                            <div
                                key={`row-num-${String(i + 1).padStart(2, "0")}`}
                                className="flex flex-1 items-start justify-center border-b border-border pt-1 font-mono text-[9px] text-muted-foreground last:border-b-0"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </div>
                        ))}
                    </div>

                    {/* SECTION 1: HERO HEADER */}
                    <SectionHeader title="System Header" id="hero" index={0} />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Main Title">
                            <div className="text-center">
                                <h1 className="mb-4 font-mono text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                                    SHADCN
                                </h1>
                                <h1 className="font-mono text-4xl font-bold tracking-tighter text-muted-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                                    MONO
                                </h1>
                                <div className="mx-auto my-6 h-px w-32 bg-foreground" />
                                <Badge className="rounded-none border-2 border-foreground bg-foreground font-mono text-xs text-background">
                                    UI COMPONENT LIBRARY
                                </Badge>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="System Description">
                            <div className="space-y-4 text-center">
                                <p className="font-mono text-sm text-muted-foreground">
                                    49 meticulously crafted components.
                                </p>
                                <p className="font-mono text-sm text-muted-foreground">
                                    Monochrome precision. Zero compromises.
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        REACT
                                    </Badge>
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        NEXT.JS
                                    </Badge>
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        TAILWIND
                                    </Badge>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* SECTION 2: STARK INDUSTRIES INTEL */}
                    <SectionHeader
                        title="Stark Industries Intel"
                        id="intel"
                        index={1}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Arc Reactor">
                            <div className="space-y-3 text-center">
                                <p className="font-mono text-xs text-muted-foreground">
                                    Clean energy source powering the entire
                                    system.
                                </p>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground bg-background">
                                    <span className="text-lg">⚡</span>
                                </div>
                                <p className="font-mono text-[10px] text-muted-foreground">
                                    3.2 GJ OUTPUT CAPACITY
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="J.A.R.V.I.S.">
                            <div className="space-y-3 text-center">
                                <p className="font-mono text-xs text-muted-foreground">
                                    Just A Rather Very Intelligent System
                                </p>
                                <p className="font-mono text-[10px] text-muted-foreground">
                                    AI assistant managing component allocation
                                </p>
                                <div className="mx-auto flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground">
                                    <span className="text-background">🤖</span>
                                </div>
                                <p className="font-mono text-[10px] text-muted-foreground">
                                    SYSTEMS ONLINE
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* SECTION 3: CALL TO ACTION */}
                    <SectionHeader
                        title="Action Commands"
                        id="action"
                        index={2}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Primary Directive">
                            <div className="space-y-4 text-center">
                                <p className="font-mono text-xs text-muted-foreground">
                                    Initialize component exploration sequence
                                </p>
                                <Link
                                    href="/components"
                                    className="inline-flex items-center justify-center border-2 border-foreground bg-foreground px-8 py-3 font-mono text-sm tracking-widest text-background uppercase transition-all hover:bg-background hover:text-foreground"
                                >
                                    EXPLORE COMPONENTS
                                </Link>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Secondary Protocol">
                            <div className="space-y-4 text-center">
                                <p className="font-mono text-xs text-muted-foreground">
                                    Access source repository
                                </p>
                                <a
                                    href="https://github.com/phalla-doll/shadcn-mono"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center border-2 border-foreground bg-background px-8 py-3 font-mono text-sm tracking-widest text-foreground uppercase transition-all hover:border-foreground hover:bg-foreground/5"
                                >
                                    VIEW SOURCE
                                </a>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* SECTION 4: TECHNICAL SPECIFICATIONS */}
                    <SectionHeader
                        title="Technical Specs"
                        id="specs"
                        index={3}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="System Requirements">
                            <div className="space-y-2 text-center">
                                <div className="flex flex-wrap justify-center gap-2">
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        REACT 18+
                                    </Badge>
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        NEXT.JS 14
                                    </Badge>
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        TYPESCRIPT
                                    </Badge>
                                    <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                        TAILWIND CSS
                                    </Badge>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Version Info">
                            <div className="space-y-2 text-center">
                                <p className="font-mono text-xs text-muted-foreground">
                                    Library Version: 2.0.0
                                </p>
                                <p className="font-mono text-xs text-muted-foreground">
                                    Components: 49
                                </p>
                                <p className="font-mono text-xs text-muted-foreground">
                                    License: MIT
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* Final grid cell markers */}
                    <div className="relative flex items-center justify-center border-b-2 border-foreground p-8 md:border-r-2 md:border-foreground">
                        <div className="text-center font-mono">
                            <div className="text-2xl font-bold text-border">
                                ▪
                            </div>
                            <p className="mt-2 text-[10px] tracking-wider text-muted-foreground uppercase">
                                End of Grid
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center border-b-2 border-foreground p-8">
                        <div className="text-center font-mono">
                            <div className="text-2xl font-bold text-border">
                                ▪
                            </div>
                            <p className="mt-2 text-[10px] tracking-wider text-muted-foreground uppercase">
                                End of Grid
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom grid info bar */}
            <div className="border-t-2 border-foreground bg-muted">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 font-mono text-[10px] text-muted-foreground">
                    <span>TOTAL SECTIONS: 4</span>
                    <span>|</span>
                    <span>GRID: 2x{GRID_ROWS}</span>
                    <span>|</span>
                    <span>SWISS DESIGN SYSTEM</span>
                    <span>|</span>
                    <span>NEO-BRUTALIST UI</span>
                </div>
            </div>
        </div>
    )
}
