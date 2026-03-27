import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
    return (
        <div className="flex min-h-svh p-6">
            <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
                <div>
                    <h1 className="font-medium">Shadcn Mono Starter</h1>
                    <p>
                        A starter project with all shadcn/ui components
                        pre-installed.
                    </p>
                    <p className="text-muted-foreground">
                        54 components ready to use.
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button asChild>
                        <Link href="/showcase">View Components</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <a
                            href="https://ui.shadcn.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Documentation
                        </a>
                    </Button>
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                    (Press <kbd>d</kbd> to toggle dark mode)
                </div>
            </div>
        </div>
    )
}
