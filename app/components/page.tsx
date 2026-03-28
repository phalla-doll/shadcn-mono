"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Empty } from "@/components/ui/empty"
import { Field, FieldLabel } from "@/components/ui/field"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Item } from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"

import { useState } from "react"

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
            className="relative col-span-full mb-0 scroll-mt-20 border-y-2 border-zinc-300 bg-zinc-100 py-4 pr-4 pl-12 dark:border-zinc-700 dark:bg-zinc-800"
        >
            <div className="absolute top-0 left-0 flex h-full w-8 items-center justify-center border-r-2 border-zinc-200/50 bg-zinc-200/30 dark:border-zinc-700/50 dark:bg-zinc-700/30">
                <span className="-rotate-90 font-mono text-[10px] font-bold whitespace-nowrap text-zinc-700 dark:text-zinc-300">
                    SEC {sectionCode}
                </span>
            </div>
            <div className="flex items-center justify-between font-mono">
                <h2 className="flex items-center gap-3 text-sm font-bold tracking-widest text-zinc-600 uppercase dark:text-zinc-300">
                    <span className="text-xs opacity-60">[</span>
                    <span>{title}</span>
                    <span className="text-xs opacity-60">]</span>
                </h2>
                <span className="text-[10px] tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                    {id}
                </span>
            </div>
        </div>
    )
}

function TopRow() {
    return (
        <div className="col-span-full border-y-2 border-zinc-300 bg-background py-4 pr-4 pl-12 dark:border-zinc-700">
            <div className="flex items-center justify-between font-mono">
                <Link href="/">
                    <Button
                        variant="outline"
                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                    >
                        ← Back to Home
                    </Button>
                </Link>
                <span className="text-xs font-bold tracking-widest text-zinc-600 uppercase dark:text-zinc-300">
                    Component Grid
                </span>
            </div>
        </div>
    )
}

function ComponentBox({
    title,
    children,
    variant = "styled",
}: {
    title: string
    children: React.ReactNode
    variant?: "styled" | "default"
}) {
    const isDefault = variant === "default"
    return (
        <div className="relative flex h-full flex-col">
            {/* Title bar */}
            <div className="border-b-2 border-zinc-300 bg-zinc-50 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="flex items-center justify-between">
                    <h4 className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-wider text-zinc-700 uppercase dark:text-zinc-300">
                        {title}
                        {isDefault && (
                            <span className="rounded border border-zinc-300 bg-background px-1 py-0.5 text-[8px] tracking-wider text-zinc-500 dark:border-zinc-600 dark:text-zinc-400">
                                DEFAULT
                            </span>
                        )}
                    </h4>
                    <div className="flex gap-1">
                        <div className="h-2 w-2 border border-zinc-300 bg-background dark:border-zinc-700" />
                        <div className="h-2 w-2 border border-zinc-300 bg-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-700/50" />
                    </div>
                </div>
            </div>

            {/* Content area */}
            <div className="flex flex-1 flex-wrap items-center justify-center gap-3 p-4">
                {children}
            </div>
        </div>
    )
}

export default function ComponentsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [progress] = useState(60)
    const [sliderValue, setSliderValue] = useState([50])
    const [isOpen, setIsOpen] = useState(false)

    const SECTION_COUNT = 8
    const COMPONENT_COUNT = 49
    const GRID_ROWS = SECTION_COUNT + Math.ceil(COMPONENT_COUNT / 2) + 1

    const cellIndex = 0

    return (
        <div className="min-h-screen bg-background font-mono text-zinc-600 dark:text-zinc-300">
            {/* Top grid bar */}
            <div className="sticky top-0 z-50 border-b-2 border-zinc-300 bg-background dark:border-zinc-700">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold tracking-widest text-zinc-700 uppercase dark:text-zinc-300">
                            {"// COMPONENT GRID"}
                        </span>
                        <span className="text-[10px] text-zinc-600 dark:text-zinc-400">
                            v2.0.0
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] text-zinc-600 dark:text-zinc-400">
                        <span>COLUMNS: 3</span>
                        <span>|</span>
                        <span>GAP: 0</span>
                        <span>|</span>
                        <span>BORDER: 2px</span>
                    </div>
                </div>
            </div>

            {/* Column headers */}
            <div className="mx-auto max-w-7xl">
                <div className="flex border-b-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
                    <div className="w-8 border-r-2 border-zinc-300 dark:border-zinc-700" />
                    <div className="flex-1 border-r-2 border-zinc-300 py-2 text-center font-mono text-[10px] font-bold tracking-widest text-zinc-700 uppercase dark:border-zinc-700 dark:text-zinc-300">
                        COL A
                    </div>
                    <div className="flex-1 border-r-2 border-zinc-300 py-2 text-center font-mono text-[10px] font-bold tracking-widest text-zinc-700 uppercase dark:border-zinc-700 dark:text-zinc-300">
                        COL B
                    </div>
                    <div className="flex-1 py-2 text-center font-mono text-[10px] font-bold tracking-widest text-zinc-700 uppercase dark:text-zinc-300">
                        COL C
                    </div>
                </div>
            </div>

            {/* Main grid container */}
            <div className="mx-auto max-w-7xl pb-16">
                <div className="relative grid grid-cols-1 border-x-2 border-zinc-300 md:grid-cols-3 dark:border-zinc-700">
                    {/* Row numbers - left side */}
                    <div className="absolute top-0 -left-8 h-full w-6 border-r border-border bg-zinc-50 dark:bg-zinc-900/50">
                        {Array.from({ length: GRID_ROWS }).map((_, i) => (
                            <div
                                key={`row-${i}`}
                                className="flex h-38 items-start justify-center pt-1 font-mono text-[9px] text-zinc-600 dark:text-zinc-400"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </div>
                        ))}
                    </div>

                    <TopRow />

                    {/* FORMS SECTION */}
                    <SectionHeader title="Forms" id="forms" index={0} />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Input">
                            <Input
                                placeholder="Enter access code..."
                                className="w-full max-w-xs rounded-none border-2 border-zinc-300 bg-background font-mono text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Command">
                            <Command className="w-full max-w-xs rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                <CommandInput
                                    placeholder="Search J.A.R.V.I.S..."
                                    className="font-mono text-xs text-zinc-600 dark:text-zinc-300"
                                />
                                <CommandList className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                    <CommandEmpty className="text-zinc-600 dark:text-zinc-400">
                                        No systems found.
                                    </CommandEmpty>
                                    <CommandGroup
                                        heading="ARC REACTOR"
                                        className="text-zinc-600 dark:text-zinc-300"
                                    >
                                        <CommandItem className="text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Initialize Mark VII
                                        </CommandItem>
                                        <CommandItem className="text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Activate Defense Mode
                                        </CommandItem>
                                        <CommandItem className="text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Run Diagnostics
                                        </CommandItem>
                                    </CommandGroup>
                                    <CommandGroup
                                        heading="FACILITIES"
                                        className="text-zinc-600 dark:text-zinc-300"
                                    >
                                        <CommandItem className="text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Stark Tower
                                        </CommandItem>
                                        <CommandItem className="text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Avengers Compound
                                        </CommandItem>
                                        <CommandItem className="text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Malibu Mansion
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Input" variant="default">
                            <Input
                                placeholder="Enter access code..."
                                className="w-full max-w-xs"
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Checkbox">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check1"
                                        defaultChecked
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900"
                                    />
                                    <Label
                                        htmlFor="check1"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Level 1 Clearance
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check2"
                                        defaultChecked
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900"
                                    />
                                    <Label
                                        htmlFor="check2"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Level 2 Clearance
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check3"
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900"
                                    />
                                    <Label
                                        htmlFor="check3"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Level 3 Clearance
                                    </Label>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Switch">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Switch
                                        id="switch1"
                                        defaultChecked
                                        className="data-[state=checked]:bg-zinc-50 dark:bg-zinc-400"
                                    />
                                    <Label
                                        htmlFor="switch1"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        J.A.R.V.I.S. Active
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Switch id="switch2" />
                                    <Label
                                        htmlFor="switch2"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Stealth Mode
                                    </Label>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Checkbox" variant="default">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check1-default"
                                        defaultChecked
                                    />
                                    <Label htmlFor="check1-default">
                                        Level 1 Clearance
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check2-default"
                                        defaultChecked
                                    />
                                    <Label htmlFor="check2-default">
                                        Level 2 Clearance
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="check3-default" />
                                    <Label htmlFor="check3-default">
                                        Level 3 Clearance
                                    </Label>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Radio Group">
                            <RadioGroup
                                defaultValue="light"
                                className="w-fit space-y-2"
                            >
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="light"
                                        id="r1"
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-400"
                                    />
                                    <Label
                                        htmlFor="r1"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Light Theme
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="dark"
                                        id="r2"
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-400"
                                    />
                                    <Label
                                        htmlFor="r2"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Dark Theme
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="system"
                                        id="r3"
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-400"
                                    />
                                    <Label
                                        htmlFor="r3"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        System Default
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="auto"
                                        id="r4"
                                        className="border-2 border-zinc-300 data-[state=checked]:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-400"
                                    />
                                    <Label
                                        htmlFor="r4"
                                        className="text-xs font-bold text-zinc-600 dark:text-zinc-300"
                                    >
                                        Auto (Time-based)
                                    </Label>
                                </div>
                            </RadioGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Select">
                            <Select>
                                <SelectTrigger className="w-45 rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    <SelectValue placeholder="Select suit..." />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    <SelectItem value="mark1">
                                        Mark I
                                    </SelectItem>
                                    <SelectItem value="mark7">
                                        Mark VII
                                    </SelectItem>
                                    <SelectItem value="mark42">
                                        Mark XLII
                                    </SelectItem>
                                    <SelectItem value="mark85">
                                        Mark LXXXV
                                    </SelectItem>
                                    <SelectItem value="hulkbuster">
                                        Hulkbuster
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Radio Group" variant="default">
                            <RadioGroup
                                defaultValue="light"
                                className="w-fit space-y-2"
                            >
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="light"
                                        id="r1-default"
                                    />
                                    <Label htmlFor="r1-default">
                                        Light Theme
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="dark"
                                        id="r2-default"
                                    />
                                    <Label htmlFor="r2-default">
                                        Dark Theme
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="system"
                                        id="r3-default"
                                    />
                                    <Label htmlFor="r3-default">
                                        System Default
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="auto"
                                        id="r4-default"
                                    />
                                    <Label htmlFor="r4-default">
                                        Auto (Time-based)
                                    </Label>
                                </div>
                            </RadioGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Slider">
                            <div className="w-full max-w-xs space-y-2">
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                    className="dark:border-zinc-700 dark:bg-zinc-400 [&_span[data-role=slider]]:border-2 [&_span[data-role=slider]]:border-zinc-300 [&_span[data-role=slider]]:bg-zinc-50"
                                />
                                <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                    REACTOR_POWER: {sliderValue}%
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Input OTP">
                            <InputOTP maxLength={6}>
                                <InputOTPGroup className="gap-1">
                                    <InputOTPSlot
                                        index={0}
                                        className="border-2 border-zinc-300 bg-background font-mono dark:border-zinc-700"
                                    />
                                    <InputOTPSlot
                                        index={1}
                                        className="border-2 border-zinc-300 bg-background font-mono dark:border-zinc-700"
                                    />
                                    <InputOTPSlot
                                        index={2}
                                        className="border-2 border-zinc-300 bg-background font-mono dark:border-zinc-700"
                                    />
                                    <InputOTPSlot
                                        index={3}
                                        className="border-2 border-zinc-300 bg-background font-mono dark:border-zinc-700"
                                    />
                                    <InputOTPSlot
                                        index={4}
                                        className="border-2 border-zinc-300 bg-background font-mono dark:border-zinc-700"
                                    />
                                    <InputOTPSlot
                                        index={5}
                                        className="border-2 border-zinc-300 bg-background font-mono dark:border-zinc-700"
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Slider" variant="default">
                            <div className="w-full max-w-xs space-y-2">
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                />
                                <p className="text-sm text-muted-foreground">
                                    Power: {sliderValue}%
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Calendar">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 [--cell-size:2.5rem] dark:border-zinc-700 dark:text-zinc-300"
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Label & Field">
                            <Field className="max-w-xs">
                                <FieldLabel className="font-mono text-xs font-bold tracking-wider text-zinc-600 uppercase dark:text-zinc-300">
                                    Stark ID
                                </FieldLabel>
                                <Input
                                    type="text"
                                    placeholder="STK-0001"
                                    className="max-w-xs rounded-none border-2 border-zinc-300 bg-background font-mono text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                />
                            </Field>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Calendar" variant="default">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md"
                            />
                        </ComponentBox>
                    </div>

                    {/* LAYOUT SECTION */}
                    <SectionHeader title="Layout" id="layout" index={1} />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Card">
                            <Card className="w-full max-w-xs rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                <CardHeader className="border-b-2 border-zinc-300 bg-muted dark:border-zinc-700">
                                    <CardTitle className="font-mono text-sm text-zinc-600 dark:text-zinc-300">
                                        Stark Industries
                                    </CardTitle>
                                    <CardDescription className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                        Advanced technology solutions since 1940
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                        Leading innovation in clean energy, AI
                                        systems, and aerospace engineering.
                                        Founded by Howard Stark.
                                    </p>
                                </CardContent>
                            </Card>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Accordion">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full max-w-xs"
                            >
                                <AccordionItem
                                    value="item-1"
                                    className="border-b-2 border-zinc-300 dark:border-zinc-700"
                                >
                                    <AccordionTrigger className="font-mono text-xs text-zinc-600 hover:no-underline dark:text-zinc-300">
                                        What is the Arc Reactor?
                                    </AccordionTrigger>
                                    <AccordionContent className="font-mono text-[11px] text-zinc-600 dark:text-zinc-300">
                                        A clean energy source capable of
                                        powering the entire Stark Tower for a
                                        year.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value="item-2"
                                    className="border-b-2 border-zinc-300 dark:border-zinc-700"
                                >
                                    <AccordionTrigger className="font-mono text-xs text-zinc-600 hover:no-underline dark:text-zinc-300">
                                        How many Iron Man suits exist?
                                    </AccordionTrigger>
                                    <AccordionContent className="font-mono text-[11px] text-zinc-600 dark:text-zinc-300">
                                        Over 85 unique suits have been
                                        developed, from Mark I to Mark LXXXV.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="font-mono text-xs text-zinc-600 hover:no-underline dark:text-zinc-300">
                                        Who is J.A.R.V.I.S.?
                                    </AccordionTrigger>
                                    <AccordionContent className="font-mono text-[11px] text-zinc-600 dark:text-zinc-300">
                                        Just A Rather Very Intelligent System -
                                        an advanced AI assistant created by Tony
                                        Stark.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Card" variant="default">
                            <Card className="w-full max-w-xs">
                                <CardHeader>
                                    <CardTitle>Stark Industries</CardTitle>
                                    <CardDescription>
                                        Advanced technology solutions since 1940
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Leading innovation in clean energy, AI
                                        systems, and aerospace engineering.
                                        Founded by Howard Stark.
                                    </p>
                                </CardContent>
                            </Card>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Tabs">
                            <Tabs
                                defaultValue="overview"
                                className="w-full max-w-xs"
                            >
                                <TabsList className="h-auto rounded-none border-2 border-zinc-300 bg-background p-0 dark:border-zinc-700">
                                    <TabsTrigger
                                        value="overview"
                                        className="rounded-none border-r-2 border-zinc-300 font-mono text-[10px] data-[state=active]:bg-zinc-50 data-[state=active]:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900"
                                    >
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="specs"
                                        className="rounded-none border-r-2 border-zinc-300 font-mono text-[10px] data-[state=active]:bg-zinc-50 data-[state=active]:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900"
                                    >
                                        Specs
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="history"
                                        className="rounded-none font-mono text-[10px] data-[state=active]:bg-zinc-50 data-[state=active]:text-zinc-900 dark:bg-zinc-400 dark:text-zinc-900"
                                    >
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent
                                    value="overview"
                                    className="mt-0 rounded-none border-2 border-t-0 border-zinc-300 bg-background p-3 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                >
                                    Stark Industries R&D Division
                                </TabsContent>
                                <TabsContent
                                    value="specs"
                                    className="mt-0 rounded-none border-2 border-t-0 border-zinc-300 bg-background p-3 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                >
                                    500+ Active Projects
                                </TabsContent>
                                <TabsContent
                                    value="history"
                                    className="mt-0 rounded-none border-2 border-t-0 border-zinc-300 bg-background p-3 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                >
                                    Founded 1940
                                </TabsContent>
                            </Tabs>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Separator">
                            <div className="w-full max-w-xs space-y-4">
                                <p className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                    Text above
                                </p>
                                <Separator className="h-0.5 bg-zinc-50 dark:bg-zinc-400" />
                                <p className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                    Text below
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Tabs" variant="default">
                            <Tabs
                                defaultValue="overview"
                                className="w-full max-w-xs"
                            >
                                <TabsList>
                                    <TabsTrigger value="overview">
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger value="specs">
                                        Specs
                                    </TabsTrigger>
                                    <TabsTrigger value="history">
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview">
                                    Stark Industries R&D Division
                                </TabsContent>
                                <TabsContent value="specs">
                                    500+ Active Projects
                                </TabsContent>
                                <TabsContent value="history">
                                    Founded 1940
                                </TabsContent>
                            </Tabs>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Scroll Area">
                            <ScrollArea className="h-32 w-full max-w-xs rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                <div className="space-y-1 p-3">
                                    {[
                                        "Item 01",
                                        "Item 02",
                                        "Item 03",
                                        "Item 04",
                                        "Item 05",
                                        "Item 06",
                                        "Item 07",
                                        "Item 08",
                                        "Item 09",
                                        "Item 10",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="border-b border-border py-1.5 font-mono text-xs text-zinc-600 dark:text-zinc-300"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Collapsible">
                            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                                <CollapsibleTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        {isOpen ? "Hide" : "Show"} Classified
                                        Intel
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="mt-2 rounded-none border-2 border-zinc-300 bg-background p-3 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    <p className="font-bold text-red-600 dark:text-red-400">
                                        CLASSIFIED - LEVEL 7 CLEARANCE
                                    </p>
                                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                        Project PEGASUS coordinates: 34.0522° N,
                                        118.2437° W
                                    </p>
                                </CollapsibleContent>
                            </Collapsible>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Scroll Area" variant="default">
                            <ScrollArea className="h-32 w-full max-w-xs rounded-md border">
                                <div className="space-y-1 p-3">
                                    {[
                                        "Item 01",
                                        "Item 02",
                                        "Item 03",
                                        "Item 04",
                                        "Item 05",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="py-1.5 text-sm"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Aspect Ratio">
                            <div className="w-full max-w-xs">
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="flex items-center justify-center rounded-none border-2 border-zinc-300 bg-muted font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                                >
                                    16:9
                                </AspectRatio>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Resizable">
                            <div className="flex h-24 w-full max-w-xs border-2 border-zinc-300 dark:border-zinc-700">
                                <div className="flex flex-1 items-center justify-center border-r-2 border-zinc-300 bg-muted font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    LEFT
                                </div>
                                <div className="flex flex-1 items-center justify-center bg-background font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                    RIGHT
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Aspect Ratio" variant="default">
                            <div className="w-full max-w-xs">
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="flex items-center justify-center rounded-md bg-muted text-sm text-muted-foreground"
                                >
                                    16:9
                                </AspectRatio>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* NAVIGATION SECTION */}
                    <SectionHeader
                        title="Navigation"
                        id="navigation"
                        index={2}
                    />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Breadcrumb">
                            <Breadcrumb>
                                <BreadcrumbList className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href="#"
                                            className="hover:text-zinc-600 dark:text-zinc-300"
                                        >
                                            Stark Industries
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-zinc-600 dark:text-zinc-300/50">
                                        /
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href="#"
                                            className="hover:text-zinc-600 dark:text-zinc-300"
                                        >
                                            R&D Division
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-zinc-600 dark:text-zinc-300/50">
                                        /
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="font-bold text-zinc-600 dark:text-zinc-300">
                                            Mark VII Schematics
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Pagination">
                            <Pagination>
                                <PaginationContent className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            className="rounded-none border border-zinc-300 bg-background text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            className="rounded-none border border-zinc-300 bg-background text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                        >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            isActive
                                            className="rounded-none border-2 border-zinc-300 bg-zinc-50 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900"
                                        >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            className="rounded-none border border-zinc-300 bg-background text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                        >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis className="text-zinc-600 dark:text-zinc-300" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            className="rounded-none border border-zinc-300 bg-background text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Breadcrumb" variant="default">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="#">
                                            Stark Industries
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="#">
                                            R&D Division
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>/</BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Mark VII Schematics
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Dropdown Menu">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Stark Account
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    <DropdownMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Suit Controls
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Mission Logs
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600 focus:bg-zinc-100 dark:text-red-400 dark:focus:bg-zinc-700">
                                        Emergency Shutdown
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Menubar">
                            <Menubar className="rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                <MenubarMenu>
                                    <MenubarTrigger className="rounded-none font-mono text-xs text-zinc-600 hover:bg-zinc-100 data-[state=open]:bg-zinc-50 data-[state=open]:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 data-[state=open]:dark:bg-zinc-400 data-[state=open]:dark:text-zinc-900">
                                        File
                                    </MenubarTrigger>
                                    <MenubarContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            New Project
                                        </MenubarItem>
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Open Schematic
                                        </MenubarItem>
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Save Suit Config
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className="rounded-none font-mono text-xs text-zinc-600 hover:bg-zinc-100 data-[state=open]:bg-zinc-50 data-[state=open]:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 data-[state=open]:dark:bg-zinc-400 data-[state=open]:dark:text-zinc-900">
                                        Edit
                                    </MenubarTrigger>
                                    <MenubarContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Modify Arc Reactor
                                        </MenubarItem>
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Adjust Thrusters
                                        </MenubarItem>
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Calibrate Repulsors
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className="rounded-none font-mono text-xs text-zinc-600 hover:bg-zinc-100 data-[state=open]:bg-zinc-50 data-[state=open]:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700 data-[state=open]:dark:bg-zinc-400 data-[state=open]:dark:text-zinc-900">
                                        Suits
                                    </MenubarTrigger>
                                    <MenubarContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Mark VII
                                        </MenubarItem>
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Mark XLII
                                        </MenubarItem>
                                        <MenubarItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                            Hulkbuster
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Dropdown Menu" variant="default">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        Stark Account
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Suit Controls
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Mission Logs
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600">
                                        Emergency Shutdown
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Navigation Menu">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 data-[state=open]:bg-zinc-50 data-[state=open]:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 data-[state=open]:dark:bg-zinc-400 data-[state=open]:dark:text-zinc-900">
                                            Divisions
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3 text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                            >
                                                R&D Department
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3 text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                            >
                                                Clean Energy
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3 text-zinc-600 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                            >
                                                Aerospace
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Context Menu">
                            <ContextMenu>
                                <ContextMenuTrigger className="flex h-24 w-full max-w-xs items-center justify-center rounded-none border-2 border-dashed border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                                    Right click for options
                                </ContextMenuTrigger>
                                <ContextMenuContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    <ContextMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Run Diagnostics
                                    </ContextMenuItem>
                                    <ContextMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Scan Area
                                    </ContextMenuItem>
                                    <ContextMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Activate Defense Mode
                                    </ContextMenuItem>
                                    <ContextMenuItem className="text-zinc-600 focus:bg-zinc-100 dark:text-zinc-300 dark:focus:bg-zinc-700">
                                        Call Avengers
                                    </ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Navigation Menu" variant="default">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            Divisions
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3"
                                            >
                                                R&D Department
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3"
                                            >
                                                Clean Energy
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3"
                                            >
                                                Aerospace
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </ComponentBox>
                    </div>

                    {/* FEEDBACK SECTION */}
                    <SectionHeader title="Feedback" id="feedback" index={3} />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Alert">
                            <div className="w-full max-w-xs space-y-3">
                                <Alert className="rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                    <AlertTitle className="font-mono text-xs font-bold text-zinc-600 dark:text-zinc-300">
                                        System Online
                                    </AlertTitle>
                                    <AlertDescription className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                        All arc reactor systems are functioning
                                        normally.
                                    </AlertDescription>
                                </Alert>
                                <Alert
                                    variant="destructive"
                                    className="rounded-none border-2 border-red-600 dark:border-red-400"
                                >
                                    <AlertTitle className="font-mono text-xs font-bold">
                                        Security Breach
                                    </AlertTitle>
                                    <AlertDescription className="font-mono text-[10px]">
                                        Unauthorized access attempt detected in
                                        Sector 7.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Alert Dialog">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Show Dialog
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="font-mono text-sm text-zinc-600 dark:text-zinc-300">
                                            Are you sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                                            This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-xs text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Alert" variant="default">
                            <div className="w-full max-w-xs space-y-3">
                                <Alert>
                                    <AlertTitle>System Online</AlertTitle>
                                    <AlertDescription>
                                        All arc reactor systems are functioning
                                        normally.
                                    </AlertDescription>
                                </Alert>
                                <Alert variant="destructive">
                                    <AlertTitle>Security Breach</AlertTitle>
                                    <AlertDescription>
                                        Unauthorized access attempt detected in
                                        Sector 7.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Progress">
                            <div className="w-full max-w-xs space-y-2">
                                <Progress
                                    value={progress}
                                    className="h-2 rounded-none border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-400 [&>div]:bg-zinc-50"
                                />
                                <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                    ASSEMBLY: {progress}% COMPLETE
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Skeleton">
                            <div className="w-full max-w-xs space-y-2">
                                <Skeleton className="h-4 w-full rounded-none bg-muted" />
                                <Skeleton className="h-4 w-3/4 rounded-none bg-muted/70" />
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Progress" variant="default">
                            <div className="w-full max-w-xs space-y-2">
                                <Progress value={progress} />
                                <p className="text-sm text-muted-foreground">
                                    Assembly: {progress}% complete
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Spinner">
                            <div className="flex flex-col items-center gap-3">
                                <Spinner className="h-8 w-8 animate-spin text-zinc-600 dark:text-zinc-300" />
                                <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                    LOADING...
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Sonner">
                            <Button
                                variant="outline"
                                className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                onClick={() => {}}
                            >
                                Alert Avengers
                            </Button>
                            <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                F.R.I.D.A.Y. ready
                            </p>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Spinner" variant="default">
                            <div className="flex flex-col items-center gap-3">
                                <Spinner className="h-8 w-8 animate-spin" />
                                <p className="text-sm text-muted-foreground">
                                    Loading...
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* DATA DISPLAY SECTION */}
                    <SectionHeader
                        title="Data Display"
                        id="data-display"
                        index={4}
                    />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Table">
                            <div className="w-fit">
                                <Table className="max-w-xs">
                                    <TableHeader>
                                        <TableRow className="border-2 border-zinc-300 bg-muted dark:border-zinc-700">
                                            <TableHead className="border-r-2 border-zinc-300 font-mono text-[10px] font-bold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                HERO
                                            </TableHead>
                                            <TableHead className="border-r-2 border-zinc-300 font-mono text-[10px] font-bold text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                STATUS
                                            </TableHead>
                                            <TableHead className="font-mono text-[10px] font-bold text-zinc-600 dark:text-zinc-300">
                                                AFFILIATION
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow className="border-b-2 border-zinc-300 dark:border-zinc-700">
                                            <TableCell className="border-r-2 border-zinc-300 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                Tony Stark
                                            </TableCell>
                                            <TableCell className="border-r-2 border-zinc-300 dark:border-zinc-700">
                                                <Badge className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-[10px] text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                                    ACTIVE
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                                Avengers
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="border-b-2 border-zinc-300 dark:border-zinc-700">
                                            <TableCell className="border-r-2 border-zinc-300 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                Peter Parker
                                            </TableCell>
                                            <TableCell className="border-r-2 border-zinc-300 dark:border-zinc-700">
                                                <Badge className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-[10px] text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                                    ACTIVE
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                                Avengers
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="border-b-2 border-zinc-300 dark:border-zinc-700">
                                            <TableCell className="border-r-2 border-zinc-300 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                Stephen Strange
                                            </TableCell>
                                            <TableCell className="border-r-2 border-zinc-300 dark:border-zinc-700">
                                                <Badge className="rounded-none border-2 border-zinc-300 bg-background font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                    AWAY
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                                Illuminati
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="border-r-2 border-zinc-300 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                T&apos;Challa
                                            </TableCell>
                                            <TableCell className="border-r-2 border-zinc-300 dark:border-zinc-700">
                                                <Badge className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-[10px] text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                                    ACTIVE
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                                Wakanda
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Badge">
                            <div className="flex flex-wrap gap-2">
                                <Badge className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-[10px] text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    STARK INDUSTRIES
                                </Badge>
                                <Badge className="rounded-none border-2 border-zinc-300 bg-background font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    S.H.I.E.L.D.
                                </Badge>
                                <Badge className="rounded-none bg-red-600 font-mono text-[10px] text-white dark:bg-red-500">
                                    HYDRA DETECTED
                                </Badge>
                                <Badge className="rounded-none border-2 border-zinc-300 bg-background font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    WAKANDA
                                </Badge>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Table" variant="default">
                            <div className="w-fit">
                                <Table className="max-w-xs">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Hero</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Affiliation</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Tony Stark</TableCell>
                                            <TableCell>
                                                <Badge>Active</Badge>
                                            </TableCell>
                                            <TableCell>Avengers</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>Peter Parker</TableCell>
                                            <TableCell>
                                                <Badge>Active</Badge>
                                            </TableCell>
                                            <TableCell>Avengers</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Avatar">
                            <div className="flex -space-x-2">
                                <Avatar className="rounded-full ring-2 ring-background">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="rounded-full bg-zinc-50 font-mono text-xs text-zinc-900 dark:bg-zinc-400 dark:text-zinc-900">
                                        TS
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar className="rounded-full ring-2 ring-background">
                                    <AvatarFallback className="rounded-full bg-muted font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                        PP
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar className="rounded-full ring-2 ring-background">
                                    <AvatarFallback className="rounded-full bg-muted font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                        BW
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar className="rounded-full ring-2 ring-background">
                                    <AvatarFallback className="rounded-full bg-muted font-mono text-xs text-zinc-600 dark:text-zinc-300">
                                        CA
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="mt-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                Tony, Peter, Bruce, Carol
                            </p>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Empty">
                            <Empty className="h-24 w-full max-w-xs rounded-none border-2 border-dashed border-zinc-300 bg-background dark:border-zinc-700" />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Avatar" variant="default">
                            <div className="flex -space-x-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>TS</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>PP</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>BW</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>CA</AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Tony, Peter, Bruce, Carol
                            </p>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Item">
                            <Item className="w-full max-w-xs rounded-none border-2 border-zinc-300 bg-background p-3 font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                Project PEGASUS - Classified Level 7
                            </Item>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Carousel">
                            <Carousel className="w-full max-w-xs">
                                <CarouselContent>
                                    {[
                                        "Mark VII",
                                        "Mark XLII",
                                        "Hulkbuster",
                                        "Mark LXXXV",
                                    ].map((suit) => (
                                        <CarouselItem key={suit}>
                                            <div className="p-2">
                                                <Card className="rounded-none border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <div className="text-center font-mono">
                                                            <span className="block text-lg font-bold text-zinc-600 dark:text-zinc-300">
                                                                {suit}
                                                            </span>
                                                            <span className="text-[10px] text-zinc-600 dark:text-zinc-400">
                                                                IRON MAN SUIT
                                                            </span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-0 rounded-none border-2 border-zinc-300 bg-background text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700" />
                                <CarouselNext className="right-0 rounded-none border-2 border-zinc-300 bg-background text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700" />
                            </Carousel>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Item" variant="default">
                            <Item className="w-full max-w-xs p-3">
                                Project PEGASUS - Classified Level 7
                            </Item>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Kbd">
                            <KbdGroup className="gap-1">
                                <Kbd className="rounded-none border-2 border-zinc-300 bg-muted font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    ⌘
                                </Kbd>
                                <Kbd className="rounded-none border-2 border-zinc-300 bg-muted font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    K
                                </Kbd>
                            </KbdGroup>
                            <p className="mt-2 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                Open command palette
                            </p>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Tooltip">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Hover me
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-xs text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    <p>Tooltip content</p>
                                </TooltipContent>
                            </Tooltip>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Kbd" variant="default">
                            <KbdGroup className="gap-1">
                                <Kbd>⌘</Kbd>
                                <Kbd>K</Kbd>
                            </KbdGroup>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Open command palette
                            </p>
                        </ComponentBox>
                    </div>

                    {/* OVERLAYS SECTION */}
                    <SectionHeader title="Overlays" id="overlays" index={5} />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Dialog">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Open Dialog
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="rounded-none border-2 border-zinc-300 bg-background sm:max-w-106.25 dark:border-zinc-700">
                                    <DialogHeader className="border-b-2 border-zinc-300 pb-4 dark:border-zinc-700">
                                        <DialogTitle className="font-mono text-sm text-zinc-600 dark:text-zinc-300">
                                            Edit Profile
                                        </DialogTitle>
                                        <DialogDescription className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                            Make changes to your profile here.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="name"
                                                className="text-right font-mono text-xs text-zinc-600 dark:text-zinc-300"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                defaultValue="John Doe"
                                                className="col-span-3 rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="email"
                                                className="text-right font-mono text-xs text-zinc-600 dark:text-zinc-300"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                defaultValue="john@example.com"
                                                className="col-span-3 rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="bio"
                                                className="text-right font-mono text-xs text-zinc-600 dark:text-zinc-300"
                                            >
                                                Bio
                                            </Label>
                                            <Textarea
                                                id="bio"
                                                placeholder="Tell us about yourself"
                                                className="col-span-3 rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                                rows={3}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2 border-t-2 border-zinc-300 pt-4 dark:border-zinc-700">
                                        <Button
                                            variant="outline"
                                            className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                        >
                                            Cancel
                                        </Button>
                                        <Button className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-xs text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                            Save Changes
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Sheet">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Open Sheet
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="border-l-2 border-zinc-300 bg-background dark:border-zinc-700">
                                    <SheetHeader className="border-b-2 border-zinc-300 pb-4 dark:border-zinc-700">
                                        <SheetTitle className="font-mono text-sm text-zinc-600 dark:text-zinc-300">
                                            Navigation
                                        </SheetTitle>
                                        <SheetDescription className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                            Quick access to all sections.
                                        </SheetDescription>
                                    </SheetHeader>
                                    <nav className="mt-6 flex flex-col gap-0">
                                        {[
                                            {
                                                icon: "🏠",
                                                label: "Dashboard",
                                            },
                                            {
                                                icon: "👤",
                                                label: "Profile",
                                            },
                                            {
                                                icon: "⚙️",
                                                label: "Settings",
                                            },
                                            {
                                                icon: "📊",
                                                label: "Analytics",
                                            },
                                            {
                                                icon: "📁",
                                                label: "Projects",
                                            },
                                        ].map((item) => (
                                            <Link
                                                key={item.label}
                                                href="#"
                                                className="flex items-center gap-3 border-b-2 border-zinc-300 p-3 font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                            >
                                                <span>{item.icon}</span>
                                                <span className="tracking-wider uppercase">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        ))}
                                        <Link
                                            href="#"
                                            className="flex items-center gap-3 p-3 font-mono text-xs text-zinc-600 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                                        >
                                            <span>🚪</span>
                                            <span className="tracking-wider uppercase">
                                                Logout
                                            </span>
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Dialog" variant="default">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        Open Dialog
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit Profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="name-default"
                                                className="text-right"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="name-default"
                                                defaultValue="John Doe"
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button variant="outline">
                                            Cancel
                                        </Button>
                                        <Button>Save Changes</Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Drawer">
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Open Drawer
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent className="border-t-2 border-zinc-300 bg-background dark:border-zinc-700">
                                    <DrawerHeader className="border-b-2 border-zinc-300 dark:border-zinc-700">
                                        <DrawerTitle className="font-mono text-sm text-zinc-600 dark:text-zinc-300">
                                            Quick Actions
                                        </DrawerTitle>
                                        <DrawerDescription className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                            Choose an action to perform.
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="p-4 pb-8">
                                        <div className="grid gap-0">
                                            {[
                                                {
                                                    icon: "📷",
                                                    label: "Take Photo",
                                                },
                                                {
                                                    icon: "🖼️",
                                                    label: "Gallery",
                                                },
                                                {
                                                    icon: "📄",
                                                    label: "Upload",
                                                },
                                                {
                                                    icon: "🔗",
                                                    label: "Share",
                                                },
                                                {
                                                    icon: "📁",
                                                    label: "Browse",
                                                },
                                                {
                                                    icon: "📝",
                                                    label: "Create New",
                                                },
                                            ].map((item) => (
                                                <Button
                                                    key={item.label}
                                                    variant="outline"
                                                    className="justify-start gap-3 rounded-none border-x-0 border-t-0 border-b-2 border-zinc-300 font-mono text-xs text-zinc-600 last:border-b-0 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                                >
                                                    <span>{item.icon}</span>
                                                    {item.label}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Popover">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                                    >
                                        Suit Status
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                    <div className="grid gap-3">
                                        <h4 className="border-b-2 border-zinc-300 pb-2 font-bold dark:border-zinc-700">
                                            Mark VII Status
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between border-b border-border pb-1">
                                                <span>Power</span>
                                                <Badge className="rounded-none border border-zinc-300 bg-zinc-50 font-mono text-[10px] text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                                    100%
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between border-b border-border pb-1">
                                                <span>Armor</span>
                                                <Badge className="rounded-none border border-zinc-300 bg-background font-mono text-[10px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                                                    98%
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Systems</span>
                                                <Badge className="rounded-none border border-zinc-300 bg-zinc-50 font-mono text-[10px] text-zinc-900 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                                    ONLINE
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Drawer" variant="default">
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button variant="outline">
                                        Open Drawer
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerHeader>
                                        <DrawerTitle>Quick Actions</DrawerTitle>
                                        <DrawerDescription>
                                            Choose an action to perform.
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="p-4 pb-8">
                                        <div className="grid gap-2">
                                            {[
                                                "Take Photo",
                                                "Gallery",
                                                "Upload",
                                                "Share",
                                            ].map((item) => (
                                                <Button
                                                    key={item}
                                                    variant="outline"
                                                    className="justify-start"
                                                >
                                                    {item}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Hover Card">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0 font-mono text-xs text-zinc-600 underline underline-offset-4 dark:text-zinc-300"
                                    >
                                        @tonystark
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64 border-2 border-zinc-300 bg-background dark:border-zinc-700">
                                    <div className="space-y-1">
                                        <h4 className="font-mono text-sm font-bold text-zinc-600 dark:text-zinc-300">
                                            Tony Stark
                                        </h4>
                                        <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                            CEO, Stark Industries
                                        </p>
                                        <p className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                                            Genius. Billionaire. Playboy.
                                            Philanthropist.
                                        </p>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Textarea">
                            <Textarea
                                placeholder="Mission briefing details..."
                                className="w-full max-w-xs rounded-none border-2 border-zinc-300 bg-background font-mono text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                                rows={3}
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Hover Card" variant="default">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0"
                                    >
                                        @tonystark
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64">
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold">
                                            Tony Stark
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            CEO, Stark Industries
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Genius. Billionaire. Playboy.
                                            Philanthropist.
                                        </p>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </ComponentBox>
                    </div>

                    {/* BUTTONS SECTION */}
                    <SectionHeader title="Buttons" id="buttons" index={6} />

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Button Variants">
                            <div className="flex flex-wrap gap-2">
                                <Button className="rounded-none border-2 border-zinc-300 bg-zinc-50 font-mono text-xs text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    Deploy
                                </Button>
                                <Button className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                    Standby
                                </Button>
                                <Button className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                    Scout Mode
                                </Button>
                                <Button className="rounded-none bg-transparent font-mono text-xs text-zinc-600 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
                                    Stealth
                                </Button>
                                <Button className="rounded-none border-2 border-red-600 bg-red-600 font-mono text-xs text-white hover:opacity-90 dark:border-red-400 dark:bg-red-500">
                                    Emergency
                                </Button>
                                <Button className="rounded-none bg-transparent p-0 font-mono text-xs text-zinc-600 underline hover:bg-transparent dark:text-zinc-300">
                                    Learn More
                                </Button>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Button Sizes">
                            <div className="flex flex-wrap items-center gap-2">
                                <Button className="h-6 rounded-none border-2 border-zinc-300 bg-zinc-50 px-2 font-mono text-[10px] text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    XS
                                </Button>
                                <Button className="h-7 rounded-none border-2 border-zinc-300 bg-zinc-50 px-3 font-mono text-xs text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    SM
                                </Button>
                                <Button className="h-8 rounded-none border-2 border-zinc-300 bg-zinc-50 px-4 font-mono text-xs text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    DEFAULT
                                </Button>
                                <Button className="h-10 rounded-none border-2 border-zinc-300 bg-zinc-50 px-6 font-mono text-sm text-zinc-900 hover:opacity-90 dark:border-zinc-700 dark:bg-zinc-400 dark:text-zinc-900">
                                    LG
                                </Button>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Button Variants" variant="default">
                            <div className="flex flex-wrap gap-2">
                                <Button>Deploy</Button>
                                <Button variant="secondary">Standby</Button>
                                <Button variant="outline">Scout Mode</Button>
                                <Button variant="ghost">Stealth</Button>
                                <Button variant="destructive">Emergency</Button>
                                <Button variant="link">Learn More</Button>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Button Group">
                            <ButtonGroup className="rounded-none">
                                <Button className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 first:border-r-0 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                    Scan
                                </Button>
                                <Button className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                    Analyze
                                </Button>
                                <Button className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 last:border-l-0 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                                    Report
                                </Button>
                            </ButtonGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Toggle">
                            <div className="flex gap-2">
                                <Toggle
                                    aria-label="Toggle bold"
                                    className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 data-[state=on]:bg-zinc-50 data-[state=on]:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 data-[state=on]:dark:bg-zinc-400 data-[state=on]:dark:text-zinc-900"
                                >
                                    <span className="font-bold">B</span>
                                </Toggle>
                                <Toggle
                                    aria-label="Toggle highlight"
                                    className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 data-[state=on]:bg-zinc-50 data-[state=on]:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 data-[state=on]:dark:bg-zinc-400 data-[state=on]:dark:text-zinc-900"
                                >
                                    <span>H</span>
                                </Toggle>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Button Group" variant="default">
                            <ButtonGroup>
                                <Button variant="outline">Scan</Button>
                                <Button variant="outline">Analyze</Button>
                                <Button variant="outline">Report</Button>
                            </ButtonGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Toggle Group">
                            <ToggleGroup
                                type="multiple"
                                className="rounded-none"
                            >
                                <ToggleGroupItem
                                    value="bold"
                                    aria-label="Bold"
                                    className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 data-[state=on]:bg-zinc-50 data-[state=on]:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 data-[state=on]:dark:bg-zinc-400 data-[state=on]:dark:text-zinc-900"
                                >
                                    B
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="italic"
                                    aria-label="Italic"
                                    className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 data-[state=on]:bg-zinc-50 data-[state=on]:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 data-[state=on]:dark:bg-zinc-400 data-[state=on]:dark:text-zinc-900"
                                >
                                    I
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="underline"
                                    aria-label="Underline"
                                    className="rounded-none border-2 border-zinc-300 bg-background font-mono text-xs text-zinc-600 data-[state=on]:bg-zinc-50 data-[state=on]:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 data-[state=on]:dark:bg-zinc-400 data-[state=on]:dark:text-zinc-900"
                                >
                                    U
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Toggle" variant="default">
                            <div className="flex gap-2">
                                <Toggle aria-label="Toggle bold">
                                    <span className="font-bold">B</span>
                                </Toggle>
                                <Toggle aria-label="Toggle highlight">
                                    <span>H</span>
                                </Toggle>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-zinc-300 dark:border-zinc-700">
                        <ComponentBox title="Toggle Group" variant="default">
                            <ToggleGroup type="multiple">
                                <ToggleGroupItem value="bold" aria-label="Bold">
                                    B
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="italic"
                                    aria-label="Italic"
                                >
                                    I
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="underline"
                                    aria-label="Underline"
                                >
                                    U
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </ComponentBox>
                    </div>

                    {/* Final grid cell markers for 3 columns */}
                    <div className="relative flex items-center justify-center border-b-2 border-zinc-300 p-8 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <div className="text-center font-mono">
                            <div className="text-2xl font-bold text-border">
                                ▪
                            </div>
                            <p className="mt-2 text-[10px] tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                                End of Grid
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center border-b-2 border-zinc-300 p-8 md:border-r-2 md:border-zinc-300 dark:border-zinc-700">
                        <div className="text-center font-mono">
                            <div className="text-2xl font-bold text-border">
                                ▪
                            </div>
                            <p className="mt-2 text-[10px] tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                                End of Grid
                            </p>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center border-b-2 border-zinc-300 p-8 dark:border-zinc-700">
                        <div className="text-center font-mono">
                            <div className="text-2xl font-bold text-border">
                                ▪
                            </div>
                            <p className="mt-2 text-[10px] tracking-wider text-zinc-600 uppercase dark:text-zinc-400">
                                End of Grid
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom grid info bar */}
            <div className="border-t-2 border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 font-mono text-[10px] text-zinc-600 dark:text-zinc-400">
                    <span>TOTAL CELLS: {cellIndex}</span>
                    <span>|</span>
                    <span>GRID: 3x{Math.ceil(cellIndex / 3)}</span>
                    <span>|</span>
                    <span>COLUMNS: 3</span>
                    <span>|</span>
                    <span>SWISS DESIGN SYSTEM</span>
                    <span>|</span>
                    <span>NEO-BRUTALIST UI</span>
                </div>
            </div>
        </div>
    )
}
