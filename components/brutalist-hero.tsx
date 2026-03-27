"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"

interface GridCell {
    id: number
    x: number
    y: number
    intensity: number
}

const COLS = 24
const ROWS = 16
const INFLUENCE_RADIUS = 200

function createInitialGrid(): GridCell[] {
    const cells: GridCell[] = []
    for (let i = 0; i < COLS * ROWS; i++) {
        cells.push({
            id: i,
            x: (i % COLS) * (100 / COLS),
            y: Math.floor(i / COLS) * (100 / ROWS),
            intensity: 0,
        })
    }
    return cells
}

export function BrutalistHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [gridCells, setGridCells] = useState<GridCell[]>(createInitialGrid)
    const [isLoaded, setIsLoaded] = useState(false)
    const animationFrameRef = useRef<number | undefined>(undefined)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            setMousePos({ x, y })
        },
        []
    )

    useEffect(() => {
        const updateGridIntensity = () => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()

            setGridCells((prev) =>
                prev.map((cell) => {
                    const cellX = (cell.x / 100) * rect.width
                    const cellY = (cell.y / 100) * rect.height
                    const distance = Math.sqrt(
                        Math.pow(mousePos.x - cellX, 2) +
                            Math.pow(mousePos.y - cellY, 2)
                    )
                    const intensity = Math.max(
                        0,
                        1 - distance / INFLUENCE_RADIUS
                    )
                    return { ...cell, intensity }
                })
            )

            animationFrameRef.current =
                requestAnimationFrame(updateGridIntensity)
        }

        animationFrameRef.current = requestAnimationFrame(updateGridIntensity)

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [mousePos])

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
        >
            {/* Interactive Grid Background */}
            <div className="pointer-events-none absolute inset-0">
                {gridCells.map((cell) => (
                    <div
                        key={cell.id}
                        className="absolute border border-border/30 transition-opacity duration-150"
                        style={{
                            left: `${cell.x}%`,
                            top: `${cell.y}%`,
                            width: `${100 / COLS}%`,
                            height: `${100 / ROWS}%`,
                            opacity: 0.15 + cell.intensity * 0.35,
                            backgroundColor: `oklch(0.5 0 0 / ${cell.intensity * 0.08})`,
                        }}
                    />
                ))}
            </div>

            {/* Diagonal Lines - Brutalist Element */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className={`absolute top-0 -left-20 h-px bg-foreground/20 transition-all delay-300 duration-1000 ${
                        isLoaded ? "w-[150%] opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                        transform: "rotate(-12deg)",
                        transformOrigin: "top left",
                    }}
                />
                <div
                    className={`absolute top-1/4 -right-20 h-px bg-foreground/10 transition-all delay-500 duration-1000 ${
                        isLoaded ? "w-[150%] opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                        transform: "rotate(8deg)",
                        transformOrigin: "top right",
                    }}
                />
                <div
                    className={`absolute bottom-1/4 -left-20 h-px bg-foreground/15 transition-all delay-700 duration-1000 ${
                        isLoaded ? "w-[150%] opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{
                        transform: "rotate(6deg)",
                        transformOrigin: "bottom left",
                    }}
                />
            </div>

            {/* Corner Registration Marks */}
            <div className="absolute top-6 left-6 h-8 w-8 border-t-2 border-l-2 border-foreground/40 transition-all delay-200 duration-500" />
            <div className="absolute top-6 right-6 h-8 w-8 border-t-2 border-r-2 border-foreground/40 transition-all delay-300 duration-500" />
            <div className="absolute bottom-6 left-6 h-8 w-8 border-b-2 border-l-2 border-foreground/40 transition-all delay-400 duration-500" />
            <div className="absolute right-6 bottom-6 h-8 w-8 border-r-2 border-b-2 border-foreground/40 transition-all delay-500 duration-500" />

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl px-8 text-center">
                {/* Overline */}
                <div
                    className={`mb-6 overflow-hidden transition-all duration-700 ${
                        isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <span className="inline-block border border-foreground/30 px-4 py-1.5 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
                        UI Component Library
                    </span>
                </div>

                {/* Main Headline */}
                <h1
                    className={`overflow-hidden transition-all delay-150 duration-700 ${
                        isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-12 opacity-0"
                    }`}
                >
                    <span className="block font-mono text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
                        SHADCN
                    </span>
                    <span className="block font-mono text-5xl font-bold tracking-tighter text-muted-foreground sm:text-7xl md:text-8xl lg:text-9xl">
                        MONO
                    </span>
                </h1>

                {/* Horizontal Rule */}
                <div
                    className={`mx-auto my-8 h-px bg-foreground/30 transition-all delay-300 duration-700 ${
                        isLoaded ? "w-32 opacity-100" : "w-0 opacity-0"
                    }`}
                />

                {/* Subheadline */}
                <p
                    className={`mx-auto max-w-xl font-mono text-sm leading-relaxed tracking-wide text-muted-foreground transition-all delay-400 duration-700 sm:text-base ${
                        isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    54 meticulously crafted components.
                    <br />
                    Monochrome precision. Zero compromises.
                </p>

                {/* CTA Buttons */}
                <div
                    className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all delay-500 duration-700 sm:flex-row ${
                        isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <Link
                        href="/components"
                        className="group relative inline-flex items-center justify-center border-2 border-foreground bg-foreground px-8 py-3 font-mono text-sm tracking-widest text-background uppercase transition-all hover:bg-background hover:text-foreground"
                    >
                        <span className="relative z-10">Explore</span>
                        <span className="absolute inset-0 translate-x-1 translate-y-1 bg-foreground/10 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
                    </Link>
                    <a
                        href="https://github.com/phalla-doll/shadcn-mono"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center border-2 border-foreground/30 px-8 py-3 font-mono text-sm tracking-widest text-foreground uppercase transition-all hover:border-foreground hover:bg-foreground/5"
                    >
                        GitHub
                    </a>
                </div>

                {/* Technical Details */}
                <div
                    className={`mt-16 flex items-center justify-center gap-8 font-mono text-xs tracking-wider text-muted-foreground/60 transition-all delay-700 duration-700 ${
                        isLoaded
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                    }`}
                >
                    <span>01</span>
                    <span className="h-3 w-px bg-muted-foreground/30" />
                    <span>REACT</span>
                    <span className="h-3 w-px bg-muted-foreground/30" />
                    <span>NEXT.JS</span>
                    <span className="h-3 w-px bg-muted-foreground/30" />
                    <span>TAILWIND</span>
                </div>
            </div>
        </div>
    )
}
