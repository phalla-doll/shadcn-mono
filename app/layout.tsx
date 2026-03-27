import type { Metadata } from "next"
import { Geist, Space_Mono } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
    title: "Mono | Monochrome Design System",
    description:
        "A sleek monochrome UI component library built with ShadCN. Grid-based layouts, thin strokes, technical typography, and system-like micro-interactions.",
    keywords: [
        "monochrome",
        "design system",
        "shadcn",
        "react",
        "next.js",
        "ui components",
        "radix ui",
    ],
    authors: [{ name: "phalla-doll" }],
    openGraph: {
        title: "Mono | Monochrome Design System",
        description:
            "A sleek monochrome UI component library built with ShadCN",
        type: "website",
    },
}
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const fontSans = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
})

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-mono",
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased",
                fontSans.variable,
                "font-mono",
                spaceMono.variable
            )}
        >
            <body>
                <ThemeProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
