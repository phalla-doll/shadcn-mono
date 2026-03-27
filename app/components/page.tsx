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

// Grid coordinate system - generates labels like A1, A2, B1, B2, etc.
const GRID_COLUMNS = 2

function getGridCoordinate(rowIndex: number): string {
    const col = rowIndex % GRID_COLUMNS
    const colLetter = String.fromCharCode(65 + col) // A, B
    const cellNum = Math.floor(rowIndex / GRID_COLUMNS) + 1
    return `${colLetter}${cellNum}`
}

function SectionHeader({
    title,
    icon,
    id,
    index,
}: {
    title: string
    icon: string
    id: string
    index: number
}) {
    const sectionCode = String(index + 1).padStart(2, "0")
    return (
        <div
            id={id}
            className="relative col-span-full mb-0 scroll-mt-20 border-y-2 border-foreground bg-foreground py-4 pr-4 pl-12"
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

export default function ComponentsPage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [progress] = useState(60)
    const [sliderValue, setSliderValue] = useState([50])
    const [isOpen, setIsOpen] = useState(false)
    const [commandOpen, setCommandOpen] = useState(false)

    const SECTION_COUNT = 8
    const COMPONENT_COUNT = 49
    const GRID_ROWS = SECTION_COUNT + Math.ceil(COMPONENT_COUNT / 2)

    let cellIndex = 0

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
                    <div className="absolute top-0 -left-8 h-full w-6 border-r border-border bg-muted/50">
                        {Array.from({ length: GRID_ROWS }).map((_, i) => (
                            <div
                                key={`row-${i}`}
                                className="flex h-[152px] items-start justify-center pt-1 font-mono text-[9px] text-muted-foreground"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </div>
                        ))}
                    </div>

                    {/* FORMS SECTION */}
                    <SectionHeader title="Forms" icon="" id="forms" index={0} />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Input">
                            <Input
                                placeholder="Enter access code..."
                                className="w-full max-w-xs rounded-none border-2 border-foreground bg-background font-mono text-sm text-foreground"
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Textarea">
                            <Textarea
                                placeholder="Mission briefing details..."
                                className="w-full max-w-xs rounded-none border-2 border-foreground bg-background font-mono text-sm text-foreground"
                                rows={3}
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Checkbox">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check1"
                                        defaultChecked
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                                    />
                                    <Label
                                        htmlFor="check1"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Level 1 Clearance
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check2"
                                        defaultChecked
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                                    />
                                    <Label
                                        htmlFor="check2"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Level 2 Clearance
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="check3"
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground data-[state=checked]:text-background"
                                    />
                                    <Label
                                        htmlFor="check3"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Level 3 Clearance
                                    </Label>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Switch">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Switch
                                        id="switch1"
                                        defaultChecked
                                        className="data-[state=checked]:bg-foreground"
                                    />
                                    <Label
                                        htmlFor="switch1"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        J.A.R.V.I.S. Active
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Switch id="switch2" />
                                    <Label
                                        htmlFor="switch2"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Stealth Mode
                                    </Label>
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Radio Group">
                            <RadioGroup
                                defaultValue="light"
                                className="w-fit space-y-2"
                            >
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="light"
                                        id="r1"
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground"
                                    />
                                    <Label
                                        htmlFor="r1"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Light Theme
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="dark"
                                        id="r2"
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground"
                                    />
                                    <Label
                                        htmlFor="r2"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Dark Theme
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="system"
                                        id="r3"
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground"
                                    />
                                    <Label
                                        htmlFor="r3"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        System Default
                                    </Label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioGroupItem
                                        value="auto"
                                        id="r4"
                                        className="border-2 border-foreground data-[state=checked]:bg-foreground"
                                    />
                                    <Label
                                        htmlFor="r4"
                                        className="text-xs font-bold text-foreground"
                                    >
                                        Auto (Time-based)
                                    </Label>
                                </div>
                            </RadioGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Select">
                            <Select>
                                <SelectTrigger className="w-45 rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                    <SelectValue placeholder="Select suit..." />
                                </SelectTrigger>
                                <SelectContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
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

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Slider">
                            <div className="w-full max-w-xs space-y-2">
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                    className="[&_span[data-role=slider]]:border-2 [&_span[data-role=slider]]:border-foreground [&_span[data-role=slider]]:bg-foreground"
                                />
                                <p className="font-mono text-[10px] text-muted-foreground">
                                    REACTOR_POWER: {sliderValue}%
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Input OTP">
                            <InputOTP maxLength={6}>
                                <InputOTPGroup className="gap-1">
                                    <InputOTPSlot
                                        index={0}
                                        className="border-2 border-foreground bg-background font-mono"
                                    />
                                    <InputOTPSlot
                                        index={1}
                                        className="border-2 border-foreground bg-background font-mono"
                                    />
                                    <InputOTPSlot
                                        index={2}
                                        className="border-2 border-foreground bg-background font-mono"
                                    />
                                    <InputOTPSlot
                                        index={3}
                                        className="border-2 border-foreground bg-background font-mono"
                                    />
                                    <InputOTPSlot
                                        index={4}
                                        className="border-2 border-foreground bg-background font-mono"
                                    />
                                    <InputOTPSlot
                                        index={5}
                                        className="border-2 border-foreground bg-background font-mono"
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Calendar">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground [--cell-size:2.5rem]"
                            />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Label & Field">
                            <Field className="max-w-xs">
                                <FieldLabel className="font-mono text-xs font-bold tracking-wider text-foreground uppercase">
                                    Stark ID
                                </FieldLabel>
                                <Input
                                    type="text"
                                    placeholder="STK-0001"
                                    className="max-w-xs rounded-none border-2 border-foreground bg-background font-mono text-sm text-foreground"
                                />
                            </Field>
                        </ComponentBox>
                    </div>

                    {/* LAYOUT SECTION */}
                    <SectionHeader
                        title="Layout"
                        icon=""
                        id="layout"
                        index={1}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Card">
                            <Card className="w-full max-w-xs rounded-none border-2 border-foreground bg-background">
                                <CardHeader className="border-b-2 border-foreground bg-muted">
                                    <CardTitle className="font-mono text-sm text-foreground">
                                        Stark Industries
                                    </CardTitle>
                                    <CardDescription className="font-mono text-[10px] text-muted-foreground">
                                        Advanced technology solutions since 1940
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-4">
                                    <p className="font-mono text-xs text-foreground">
                                        Leading innovation in clean energy, AI
                                        systems, and aerospace engineering.
                                        Founded by Howard Stark.
                                    </p>
                                </CardContent>
                            </Card>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Accordion">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full max-w-xs"
                            >
                                <AccordionItem
                                    value="item-1"
                                    className="border-b-2 border-foreground"
                                >
                                    <AccordionTrigger className="font-mono text-xs text-foreground hover:no-underline">
                                        What is the Arc Reactor?
                                    </AccordionTrigger>
                                    <AccordionContent className="font-mono text-[11px] text-foreground">
                                        A clean energy source capable of
                                        powering the entire Stark Tower for a
                                        year.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value="item-2"
                                    className="border-b-2 border-foreground"
                                >
                                    <AccordionTrigger className="font-mono text-xs text-foreground hover:no-underline">
                                        How many Iron Man suits exist?
                                    </AccordionTrigger>
                                    <AccordionContent className="font-mono text-[11px] text-foreground">
                                        Over 85 unique suits have been
                                        developed, from Mark I to Mark LXXXV.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="font-mono text-xs text-foreground hover:no-underline">
                                        Who is J.A.R.V.I.S.?
                                    </AccordionTrigger>
                                    <AccordionContent className="font-mono text-[11px] text-foreground">
                                        Just A Rather Very Intelligent System -
                                        an advanced AI assistant created by Tony
                                        Stark.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Tabs">
                            <Tabs
                                defaultValue="overview"
                                className="w-full max-w-xs"
                            >
                                <TabsList className="h-auto rounded-none border-2 border-foreground bg-background p-0">
                                    <TabsTrigger
                                        value="overview"
                                        className="rounded-none border-r-2 border-foreground font-mono text-[10px] data-[state=active]:bg-foreground data-[state=active]:text-background"
                                    >
                                        Overview
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="specs"
                                        className="rounded-none border-r-2 border-foreground font-mono text-[10px] data-[state=active]:bg-foreground data-[state=active]:text-background"
                                    >
                                        Specs
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="history"
                                        className="rounded-none font-mono text-[10px] data-[state=active]:bg-foreground data-[state=active]:text-background"
                                    >
                                        History
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent
                                    value="overview"
                                    className="mt-0 rounded-none border-2 border-t-0 border-foreground bg-background p-3 font-mono text-xs text-foreground"
                                >
                                    Stark Industries R&D Division
                                </TabsContent>
                                <TabsContent
                                    value="specs"
                                    className="mt-0 rounded-none border-2 border-t-0 border-foreground bg-background p-3 font-mono text-xs text-foreground"
                                >
                                    500+ Active Projects
                                </TabsContent>
                                <TabsContent
                                    value="history"
                                    className="mt-0 rounded-none border-2 border-t-0 border-foreground bg-background p-3 font-mono text-xs text-foreground"
                                >
                                    Founded 1940
                                </TabsContent>
                            </Tabs>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Separator">
                            <div className="w-full max-w-xs space-y-4">
                                <p className="font-mono text-xs text-foreground">
                                    Text above
                                </p>
                                <Separator className="h-0.5 bg-foreground" />
                                <p className="font-mono text-xs text-foreground">
                                    Text below
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Scroll Area">
                            <ScrollArea className="h-32 w-full max-w-xs rounded-none border-2 border-foreground bg-background">
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
                                            className="border-b border-border py-1.5 font-mono text-xs text-foreground"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Collapsible">
                            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                                <CollapsibleTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        {isOpen ? "Hide" : "Show"} Classified
                                        Intel
                                    </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="mt-2 rounded-none border-2 border-foreground bg-background p-3 font-mono text-xs text-foreground">
                                    <p className="font-bold text-red-600 dark:text-red-400">
                                        CLASSIFIED - LEVEL 7 CLEARANCE
                                    </p>
                                    <p className="mt-1 text-muted-foreground">
                                        Project PEGASUS coordinates: 34.0522° N,
                                        118.2437° W
                                    </p>
                                </CollapsibleContent>
                            </Collapsible>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Aspect Ratio">
                            <div className="w-full max-w-xs">
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="flex items-center justify-center rounded-none border-2 border-foreground bg-muted font-mono text-xs text-muted-foreground"
                                >
                                    16:9
                                </AspectRatio>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Resizable">
                            <div className="flex h-24 w-full max-w-xs border-2 border-foreground">
                                <div className="flex flex-1 items-center justify-center border-r-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                    LEFT
                                </div>
                                <div className="flex flex-1 items-center justify-center bg-background font-mono text-xs text-foreground">
                                    RIGHT
                                </div>
                            </div>
                        </ComponentBox>
                    </div>

                    {/* NAVIGATION SECTION */}
                    <SectionHeader
                        title="Navigation"
                        icon=""
                        id="navigation"
                        index={2}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Breadcrumb">
                            <Breadcrumb>
                                <BreadcrumbList className="font-mono text-xs text-foreground">
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href="#"
                                            className="hover:text-foreground"
                                        >
                                            Stark Industries
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-foreground/50">
                                        /
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink
                                            href="#"
                                            className="hover:text-foreground"
                                        >
                                            R&D Division
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="text-foreground/50">
                                        /
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="font-bold text-foreground">
                                            Mark VII Schematics
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Pagination">
                            <Pagination>
                                <PaginationContent className="font-mono text-xs text-foreground">
                                    <PaginationItem>
                                        <PaginationPrevious
                                            href="#"
                                            className="rounded-none border border-foreground bg-background text-foreground hover:bg-muted"
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            className="rounded-none border border-foreground bg-background text-foreground"
                                        >
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            isActive
                                            className="rounded-none border-2 border-foreground bg-foreground text-background"
                                        >
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            className="rounded-none border border-foreground bg-background text-foreground"
                                        >
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis className="text-foreground" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext
                                            href="#"
                                            className="rounded-none border border-foreground bg-background text-foreground hover:bg-muted"
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Dropdown Menu">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Stark Account
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                    <DropdownMenuItem className="text-foreground focus:bg-muted">
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-foreground focus:bg-muted">
                                        Suit Controls
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-foreground focus:bg-muted">
                                        Mission Logs
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-foreground focus:bg-muted">
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600 focus:bg-muted dark:text-red-400">
                                        Emergency Shutdown
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Menubar">
                            <Menubar className="rounded-none border-2 border-foreground bg-background">
                                <MenubarMenu>
                                    <MenubarTrigger className="rounded-none font-mono text-xs text-foreground hover:bg-muted data-[state=open]:bg-foreground data-[state=open]:text-background">
                                        File
                                    </MenubarTrigger>
                                    <MenubarContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            New Project
                                        </MenubarItem>
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Open Schematic
                                        </MenubarItem>
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Save Suit Config
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className="rounded-none font-mono text-xs text-foreground hover:bg-muted data-[state=open]:bg-foreground data-[state=open]:text-background">
                                        Edit
                                    </MenubarTrigger>
                                    <MenubarContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Modify Arc Reactor
                                        </MenubarItem>
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Adjust Thrusters
                                        </MenubarItem>
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Calibrate Repulsors
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className="rounded-none font-mono text-xs text-foreground hover:bg-muted data-[state=open]:bg-foreground data-[state=open]:text-background">
                                        Suits
                                    </MenubarTrigger>
                                    <MenubarContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Mark VII
                                        </MenubarItem>
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Mark XLII
                                        </MenubarItem>
                                        <MenubarItem className="text-foreground focus:bg-muted">
                                            Hulkbuster
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Navigation Menu">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground data-[state=open]:bg-foreground data-[state=open]:text-background">
                                            Divisions
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3 text-foreground hover:bg-muted"
                                            >
                                                R&D Department
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3 text-foreground hover:bg-muted"
                                            >
                                                Clean Energy
                                            </NavigationMenuLink>
                                            <NavigationMenuLink
                                                href="#"
                                                className="block p-3 text-foreground hover:bg-muted"
                                            >
                                                Aerospace
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Context Menu">
                            <ContextMenu>
                                <ContextMenuTrigger className="flex h-24 w-full max-w-xs items-center justify-center rounded-none border-2 border-dashed border-foreground bg-background font-mono text-xs text-muted-foreground">
                                    Right click for options
                                </ContextMenuTrigger>
                                <ContextMenuContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                    <ContextMenuItem className="text-foreground focus:bg-muted">
                                        Run Diagnostics
                                    </ContextMenuItem>
                                    <ContextMenuItem className="text-foreground focus:bg-muted">
                                        Scan Area
                                    </ContextMenuItem>
                                    <ContextMenuItem className="text-foreground focus:bg-muted">
                                        Activate Defense Mode
                                    </ContextMenuItem>
                                    <ContextMenuItem className="text-foreground focus:bg-muted">
                                        Call Avengers
                                    </ContextMenuItem>
                                </ContextMenuContent>
                            </ContextMenu>
                        </ComponentBox>
                    </div>

                    {/* FEEDBACK SECTION */}
                    <SectionHeader
                        title="Feedback"
                        icon=""
                        id="feedback"
                        index={3}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Alert">
                            <div className="w-full max-w-xs space-y-3">
                                <Alert className="rounded-none border-2 border-foreground bg-background">
                                    <AlertTitle className="font-mono text-xs font-bold text-foreground">
                                        System Online
                                    </AlertTitle>
                                    <AlertDescription className="font-mono text-[10px] text-muted-foreground">
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

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Alert Dialog">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Show Dialog
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="rounded-none border-2 border-foreground bg-background">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="font-mono text-sm text-foreground">
                                            Are you sure?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="font-mono text-xs text-muted-foreground">
                                            This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted">
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="rounded-none border-2 border-foreground bg-foreground font-mono text-xs text-background hover:opacity-90">
                                            Continue
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Progress">
                            <div className="w-full max-w-xs space-y-2">
                                <Progress
                                    value={progress}
                                    className="h-2 rounded-none border border-foreground [&>div]:bg-foreground"
                                />
                                <p className="font-mono text-[10px] text-muted-foreground">
                                    ASSEMBLY: {progress}% COMPLETE
                                </p>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Skeleton">
                            <div className="w-full max-w-xs space-y-2">
                                <Skeleton className="h-4 w-full rounded-none bg-muted" />
                                <Skeleton className="h-4 w-3/4 rounded-none bg-muted/70" />
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Spinner">
                            <Spinner className="border-2 border-foreground border-t-transparent" />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Sonner">
                            <Button
                                variant="outline"
                                className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                onClick={() => {}}
                            >
                                Alert Avengers
                            </Button>
                            <p className="font-mono text-[10px] text-muted-foreground">
                                F.R.I.D.A.Y. ready
                            </p>
                        </ComponentBox>
                    </div>

                    {/* DATA DISPLAY SECTION */}
                    <SectionHeader
                        title="Data Display"
                        icon=""
                        id="data-display"
                        index={4}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Table">
                            <div className="w-fit">
                                <Table className="max-w-xs">
                                    <TableHeader>
                                        <TableRow className="border-2 border-foreground bg-muted">
                                            <TableHead className="border-r-2 border-foreground font-mono text-[10px] font-bold text-foreground">
                                                HERO
                                            </TableHead>
                                            <TableHead className="border-r-2 border-foreground font-mono text-[10px] font-bold text-foreground">
                                                STATUS
                                            </TableHead>
                                            <TableHead className="font-mono text-[10px] font-bold text-foreground">
                                                AFFILIATION
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow className="border-b-2 border-foreground">
                                            <TableCell className="border-r-2 border-foreground font-mono text-xs text-foreground">
                                                Tony Stark
                                            </TableCell>
                                            <TableCell className="border-r-2 border-foreground">
                                                <Badge className="rounded-none border-2 border-foreground bg-foreground font-mono text-[10px] text-background">
                                                    ACTIVE
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-foreground">
                                                Avengers
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="border-b-2 border-foreground">
                                            <TableCell className="border-r-2 border-foreground font-mono text-xs text-foreground">
                                                Peter Parker
                                            </TableCell>
                                            <TableCell className="border-r-2 border-foreground">
                                                <Badge className="rounded-none border-2 border-foreground bg-foreground font-mono text-[10px] text-background">
                                                    ACTIVE
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-foreground">
                                                Avengers
                                            </TableCell>
                                        </TableRow>
                                        <TableRow className="border-b-2 border-foreground">
                                            <TableCell className="border-r-2 border-foreground font-mono text-xs text-foreground">
                                                Stephen Strange
                                            </TableCell>
                                            <TableCell className="border-r-2 border-foreground">
                                                <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                                    AWAY
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-foreground">
                                                Illuminati
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="border-r-2 border-foreground font-mono text-xs text-foreground">
                                                T&apos;Challa
                                            </TableCell>
                                            <TableCell className="border-r-2 border-foreground">
                                                <Badge className="rounded-none border-2 border-foreground bg-foreground font-mono text-[10px] text-background">
                                                    ACTIVE
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="font-mono text-xs text-foreground">
                                                Wakanda
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Badge">
                            <div className="flex flex-wrap gap-2">
                                <Badge className="rounded-none border-2 border-foreground bg-foreground font-mono text-[10px] text-background">
                                    STARK INDUSTRIES
                                </Badge>
                                <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                    S.H.I.E.L.D.
                                </Badge>
                                <Badge className="rounded-none bg-red-600 font-mono text-[10px] text-white dark:bg-red-500">
                                    HYDRA DETECTED
                                </Badge>
                                <Badge className="rounded-none border-2 border-foreground bg-background font-mono text-[10px] text-foreground">
                                    WAKANDA
                                </Badge>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Avatar">
                            <div className="flex gap-2">
                                <Avatar className="rounded-none border-2 border-foreground">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="rounded-none border-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                        TS
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar className="rounded-none border-2 border-foreground">
                                    <AvatarFallback className="rounded-none border-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                        PP
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar className="rounded-none border-2 border-foreground">
                                    <AvatarFallback className="rounded-none border-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                        BW
                                    </AvatarFallback>
                                </Avatar>
                                <Avatar className="rounded-none border-2 border-foreground">
                                    <AvatarFallback className="rounded-none border-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                        CA
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                                Tony, Peter, Bruce, Carol
                            </p>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Empty">
                            <Empty className="h-24 w-full max-w-xs rounded-none border-2 border-dashed border-foreground bg-background" />
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Item">
                            <Item className="w-full max-w-xs rounded-none border-2 border-foreground bg-background p-3 font-mono text-xs text-foreground">
                                Project PEGASUS - Classified Level 7
                            </Item>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
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
                                                <Card className="rounded-none border-2 border-foreground bg-background">
                                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                                        <div className="text-center font-mono">
                                                            <span className="block text-lg font-bold text-foreground">
                                                                {suit}
                                                            </span>
                                                            <span className="text-[10px] text-muted-foreground">
                                                                IRON MAN SUIT
                                                            </span>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-0 rounded-none border-2 border-foreground bg-background text-foreground hover:bg-muted" />
                                <CarouselNext className="right-0 rounded-none border-2 border-foreground bg-background text-foreground hover:bg-muted" />
                            </Carousel>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Kbd">
                            <KbdGroup className="gap-1">
                                <Kbd className="rounded-none border-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                    ⌘
                                </Kbd>
                                <Kbd className="rounded-none border-2 border-foreground bg-muted font-mono text-xs text-foreground">
                                    K
                                </Kbd>
                            </KbdGroup>
                            <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                                Open command palette
                            </p>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Tooltip">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Hover me
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent className="rounded-none border-2 border-foreground bg-foreground font-mono text-xs text-background">
                                    <p>Tooltip content</p>
                                </TooltipContent>
                            </Tooltip>
                        </ComponentBox>
                    </div>

                    {/* OVERLAYS SECTION */}
                    <SectionHeader
                        title="Overlays"
                        icon=""
                        id="overlays"
                        index={5}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Dialog">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Open Dialog
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="rounded-none border-2 border-foreground bg-background sm:max-w-[425px]">
                                    <DialogHeader className="border-b-2 border-foreground pb-4">
                                        <DialogTitle className="font-mono text-sm text-foreground">
                                            Edit Profile
                                        </DialogTitle>
                                        <DialogDescription className="font-mono text-[10px] text-muted-foreground">
                                            Make changes to your profile here.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="name"
                                                className="text-right font-mono text-xs text-foreground"
                                            >
                                                Name
                                            </Label>
                                            <Input
                                                id="name"
                                                defaultValue="John Doe"
                                                className="col-span-3 rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="email"
                                                className="text-right font-mono text-xs text-foreground"
                                            >
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                defaultValue="john@example.com"
                                                className="col-span-3 rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label
                                                htmlFor="bio"
                                                className="text-right font-mono text-xs text-foreground"
                                            >
                                                Bio
                                            </Label>
                                            <Textarea
                                                id="bio"
                                                placeholder="Tell us about yourself"
                                                className="col-span-3 rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground"
                                                rows={3}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2 border-t-2 border-foreground pt-4">
                                        <Button
                                            variant="outline"
                                            className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                        >
                                            Cancel
                                        </Button>
                                        <Button className="rounded-none border-2 border-foreground bg-foreground font-mono text-xs text-background hover:opacity-90">
                                            Save Changes
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Sheet">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Open Sheet
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="border-l-2 border-foreground bg-background">
                                    <SheetHeader className="border-b-2 border-foreground pb-4">
                                        <SheetTitle className="font-mono text-sm text-foreground">
                                            Navigation
                                        </SheetTitle>
                                        <SheetDescription className="font-mono text-[10px] text-muted-foreground">
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
                                                className="flex items-center gap-3 border-b-2 border-foreground p-3 font-mono text-xs text-foreground hover:bg-muted"
                                            >
                                                <span>{item.icon}</span>
                                                <span className="tracking-wider uppercase">
                                                    {item.label}
                                                </span>
                                            </Link>
                                        ))}
                                        <Link
                                            href="#"
                                            className="flex items-center gap-3 p-3 font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
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

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Drawer">
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Open Drawer
                                    </Button>
                                </DrawerTrigger>
                                <DrawerContent className="border-t-2 border-foreground bg-background">
                                    <DrawerHeader className="border-b-2 border-foreground">
                                        <DrawerTitle className="font-mono text-sm text-foreground">
                                            Quick Actions
                                        </DrawerTitle>
                                        <DrawerDescription className="font-mono text-[10px] text-muted-foreground">
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
                                                    className="justify-start gap-3 rounded-none border-x-0 border-t-0 border-b-2 border-foreground font-mono text-xs text-foreground last:border-b-0 hover:bg-muted"
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

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Popover">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted"
                                    >
                                        Suit Status
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground">
                                    <div className="grid gap-3">
                                        <h4 className="border-b-2 border-foreground pb-2 font-bold">
                                            Mark VII Status
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between border-b border-border pb-1">
                                                <span>Power</span>
                                                <Badge className="rounded-none border border-foreground bg-foreground font-mono text-[10px] text-background">
                                                    100%
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between border-b border-border pb-1">
                                                <span>Armor</span>
                                                <Badge className="rounded-none border border-foreground bg-background font-mono text-[10px] text-foreground">
                                                    98%
                                                </Badge>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Systems</span>
                                                <Badge className="rounded-none border border-foreground bg-foreground font-mono text-[10px] text-background">
                                                    ONLINE
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Hover Card">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0 font-mono text-xs text-foreground underline underline-offset-4"
                                    >
                                        @tonystark
                                    </Button>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-64 border-2 border-foreground bg-background">
                                    <div className="space-y-1">
                                        <h4 className="font-mono text-sm font-bold text-foreground">
                                            Tony Stark
                                        </h4>
                                        <p className="font-mono text-[10px] text-muted-foreground">
                                            CEO, Stark Industries
                                        </p>
                                        <p className="font-mono text-[10px] text-muted-foreground">
                                            Genius. Billionaire. Playboy.
                                            Philanthropist.
                                        </p>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Command">
                            <Command className="w-full max-w-xs rounded-none border-2 border-foreground bg-background">
                                <CommandInput
                                    placeholder="Search J.A.R.V.I.S..."
                                    className="font-mono text-xs text-foreground"
                                />
                                <CommandList className="font-mono text-xs text-foreground">
                                    <CommandEmpty className="text-muted-foreground">
                                        No systems found.
                                    </CommandEmpty>
                                    <CommandGroup
                                        heading="ARC REACTOR"
                                        className="text-foreground"
                                    >
                                        <CommandItem className="text-foreground hover:bg-muted">
                                            Initialize Mark VII
                                        </CommandItem>
                                        <CommandItem className="text-foreground hover:bg-muted">
                                            Activate Defense Mode
                                        </CommandItem>
                                        <CommandItem className="text-foreground hover:bg-muted">
                                            Run Diagnostics
                                        </CommandItem>
                                    </CommandGroup>
                                    <CommandGroup
                                        heading="FACILITIES"
                                        className="text-foreground"
                                    >
                                        <CommandItem className="text-foreground hover:bg-muted">
                                            Stark Tower
                                        </CommandItem>
                                        <CommandItem className="text-foreground hover:bg-muted">
                                            Avengers Compound
                                        </CommandItem>
                                        <CommandItem className="text-foreground hover:bg-muted">
                                            Malibu Mansion
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </ComponentBox>
                    </div>

                    {/* BUTTONS SECTION */}
                    <SectionHeader
                        title="Buttons"
                        icon=""
                        id="buttons"
                        index={6}
                    />

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Button Variants">
                            <div className="flex flex-wrap gap-2">
                                <Button className="rounded-none border-2 border-foreground bg-foreground font-mono text-xs text-background hover:opacity-90">
                                    Deploy
                                </Button>
                                <Button className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted">
                                    Standby
                                </Button>
                                <Button className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted">
                                    Scout Mode
                                </Button>
                                <Button className="rounded-none bg-transparent font-mono text-xs text-muted-foreground hover:bg-muted hover:text-foreground">
                                    Stealth
                                </Button>
                                <Button className="rounded-none border-2 border-red-600 bg-red-600 font-mono text-xs text-white hover:opacity-90 dark:border-red-400 dark:bg-red-500">
                                    Emergency
                                </Button>
                                <Button className="rounded-none bg-transparent p-0 font-mono text-xs text-foreground underline hover:bg-transparent">
                                    Learn More
                                </Button>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Button Sizes">
                            <div className="flex flex-wrap items-center gap-2">
                                <Button className="h-6 rounded-none border-2 border-foreground bg-foreground px-2 font-mono text-[10px] text-background hover:opacity-90">
                                    XS
                                </Button>
                                <Button className="h-7 rounded-none border-2 border-foreground bg-foreground px-3 font-mono text-xs text-background hover:opacity-90">
                                    SM
                                </Button>
                                <Button className="h-8 rounded-none border-2 border-foreground bg-foreground px-4 font-mono text-xs text-background hover:opacity-90">
                                    DEFAULT
                                </Button>
                                <Button className="h-10 rounded-none border-2 border-foreground bg-foreground px-6 font-mono text-sm text-background hover:opacity-90">
                                    LG
                                </Button>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Button Group">
                            <ButtonGroup className="rounded-none">
                                <Button className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground first:border-r-0 hover:bg-muted">
                                    Scan
                                </Button>
                                <Button className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground hover:bg-muted">
                                    Analyze
                                </Button>
                                <Button className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground last:border-l-0 hover:bg-muted">
                                    Report
                                </Button>
                            </ButtonGroup>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground">
                        <ComponentBox title="Toggle">
                            <div className="flex gap-2">
                                <Toggle
                                    aria-label="Toggle bold"
                                    className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
                                >
                                    <span className="font-bold">B</span>
                                </Toggle>
                                <Toggle
                                    aria-label="Toggle highlight"
                                    className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
                                >
                                    <span>H</span>
                                </Toggle>
                            </div>
                        </ComponentBox>
                    </div>

                    <div className="border-b-2 border-foreground md:border-r-2 md:border-foreground">
                        <ComponentBox title="Toggle Group">
                            <ToggleGroup
                                type="multiple"
                                className="rounded-none"
                            >
                                <ToggleGroupItem
                                    value="bold"
                                    aria-label="Bold"
                                    className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
                                >
                                    B
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="italic"
                                    aria-label="Italic"
                                    className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
                                >
                                    I
                                </ToggleGroupItem>
                                <ToggleGroupItem
                                    value="underline"
                                    aria-label="Underline"
                                    className="rounded-none border-2 border-foreground bg-background font-mono text-xs text-foreground data-[state=on]:bg-foreground data-[state=on]:text-background"
                                >
                                    U
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </ComponentBox>
                    </div>

                    {/* Final grid cell marker */}
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
                    <span>TOTAL CELLS: {cellIndex}</span>
                    <span>|</span>
                    <span>GRID: 2x{Math.ceil(cellIndex / 2)}</span>
                    <span>|</span>
                    <span>SWISS DESIGN SYSTEM</span>
                    <span>|</span>
                    <span>NEO-BRUTALIST UI</span>
                </div>
            </div>
        </div>
    )
}
