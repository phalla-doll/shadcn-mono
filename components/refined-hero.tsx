"use client"

import Link from "next/link"

const LayersIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M12.5 2c0 0 1.5 2 1.5 4a2.5 2.5 0 0 1-5 0c0-2-1-4-1.5-4h5z" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 2a2.5 2.5 0 0 1 0 5c0 2-1 4-1.5 4H5a1 1 0 0 1-1-1" />
        <path d="M12 11v7" />
    </svg>
)

const ZapIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
)

const PaletteIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
)

const features = [
    {
        icon: LayersIcon,
        title: "49 Components",
        description:
            "Meticulously crafted UI components built for production use",
    },
    {
        icon: ZapIcon,
        title: "Lightning Fast",
        description: "Optimized performance with minimal bundle size",
    },
    {
        icon: PaletteIcon,
        title: "Fully Customizable",
        description: "Complete control over styling with Tailwind CSS",
    },
]

export function RefinedHero() {
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight"
                    >
                        shadcn
                        <span className="text-muted-foreground">/mono</span>
                    </Link>
                    <div className="flex items-center gap-6 text-sm">
                        <Link
                            href="/components"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Components
                        </Link>
                        <a
                            href="https://github.com/phalla-doll/shadcn-mono"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <GithubIcon className="size-5" />
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="px-6 pt-32 pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Badge */}
                        <div
                            className="mb-8 inline-flex animate-[fadeIn_0.6s_ease-out_forwards] items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground opacity-0"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            v2.0.0 now available
                        </div>

                        {/* Main Headline */}
                        <h1
                            className="mb-6 animate-[fadeIn_0.6s_ease-out_forwards] text-5xl font-bold tracking-tight opacity-0 sm:text-6xl lg:text-7xl"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Beautiful components for modern web apps
                        </h1>

                        {/* Subtitle */}
                        <p
                            className="mx-auto mb-10 max-w-xl animate-[fadeIn_0.6s_ease-out_forwards] text-lg text-muted-foreground opacity-0 sm:text-xl"
                            style={{ animationDelay: "0.3s" }}
                        >
                            A minimalist component library built with React,
                            Next.js, and Tailwind CSS. Crafted with precision
                            for developers who care about details.
                        </p>

                        {/* CTAs */}
                        <div
                            className="flex animate-[fadeIn_0.6s_ease-out_forwards] flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <Link
                                href="/components"
                                className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:gap-3 hover:bg-foreground/90"
                            >
                                Explore Components
                                <ArrowRightIcon className="size-4" />
                            </Link>
                            <a
                                href="https://github.com/phalla-doll/shadcn-mono"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium transition-all hover:bg-muted"
                            >
                                <GithubIcon className="size-4" />
                                View Source
                            </a>
                        </div>
                    </div>

                    {/* Preview Image */}
                    <div
                        className="mt-20 animate-[fadeIn_0.8s_ease-out_forwards] rounded-lg border border-border bg-muted/30 p-2 opacity-0"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <div className="flex aspect-[16/9] items-center justify-center rounded bg-gradient-to-br from-muted via-background to-muted">
                            <div className="flex gap-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="h-32 w-24 animate-pulse rounded-md border border-border bg-background"
                                        style={{
                                            animationDelay: `${0.6 + i * 0.1}s`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="border-t border-border/50 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group rounded-lg border border-transparent p-6 transition-all duration-300 hover:border-border hover:bg-muted/30"
                                style={{
                                    animationDelay: `${0.6 + index * 0.1}s`,
                                }}
                            >
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-muted transition-colors group-hover:bg-foreground group-hover:text-background">
                                    <feature.icon className="size-5" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="border-t border-border/50 px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                            Built with
                        </span>
                        {[
                            "React 18+",
                            "Next.js 14",
                            "TypeScript",
                            "Tailwind CSS",
                            "Radix UI",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 px-6 py-8">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                    <p>© 2024 shadcn/mono. MIT License.</p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/components"
                            className="transition-colors hover:text-foreground"
                        >
                            Components
                        </Link>
                        <a
                            href="https://github.com/phalla-doll/shadcn-mono"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-foreground"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
