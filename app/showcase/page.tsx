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
    icon,
    id,
}: {
    title: string
    icon: string
    id: string
}) {
    return (
        <div id={id} className="col-span-full mb-2 scroll-mt-20 border-b pb-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
                <span>{icon}</span>
                <span>{title}</span>
            </h2>
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
        <div className="space-y-3">
            <h4 className="border-b pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {title}
            </h4>
            <div className="flex min-h-[80px] flex-wrap items-center gap-3 rounded-lg p-4">
                {children}
            </div>
        </div>
    )
}

export default function ShowcasePage() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [progress] = useState(60)
    const [sliderValue, setSliderValue] = useState([50])
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background">
            <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto max-w-7xl px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-semibold">
                                Shadcn Component Gallery
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                54 components available
                            </p>
                        </div>
                        <Button asChild variant="outline" size="sm">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <SectionHeader title="Forms" icon="" id="forms" />

                    <ComponentBox title="Input">
                        <Input
                            placeholder="Enter access code..."
                            className="w-full max-w-xs"
                        />
                    </ComponentBox>

                    <ComponentBox title="Textarea">
                        <Textarea
                            placeholder="Mission briefing details..."
                            className="w-full max-w-xs"
                            rows={3}
                        />
                    </ComponentBox>

                    <ComponentBox title="Checkbox">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Checkbox id="check1" defaultChecked />
                                <Label htmlFor="check1">
                                    Level 1 Clearance
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="check2" defaultChecked />
                                <Label htmlFor="check2">
                                    Level 2 Clearance
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="check3" />
                                <Label htmlFor="check3">
                                    Level 3 Clearance
                                </Label>
                            </div>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Switch">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Switch id="switch1" defaultChecked />
                                <Label htmlFor="switch1">
                                    J.A.R.V.I.S. Active
                                </Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Switch id="switch2" />
                                <Label htmlFor="switch2">Stealth Mode</Label>
                            </div>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Radio Group">
                        <RadioGroup defaultValue="light" className="space-y-2">
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="light" id="r1" />
                                <Label htmlFor="r1">Light Theme</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="dark" id="r2" />
                                <Label htmlFor="r2">Dark Theme</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="system" id="r3" />
                                <Label htmlFor="r3">System Default</Label>
                            </div>
                            <div className="flex items-center gap-2">
                                <RadioGroupItem value="auto" id="r4" />
                                <Label htmlFor="r4">Auto (Time-based)</Label>
                            </div>
                        </RadioGroup>
                    </ComponentBox>

                    <ComponentBox title="Select">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select suit..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mark1">Mark I</SelectItem>
                                <SelectItem value="mark7">Mark VII</SelectItem>
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

                    <ComponentBox title="Slider">
                        <div className="w-full max-w-xs space-y-2">
                            <Slider
                                value={sliderValue}
                                onValueChange={setSliderValue}
                                max={100}
                                step={1}
                            />
                            <p className="text-xs text-muted-foreground">
                                Reactor Power: {sliderValue}%
                            </p>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Input OTP">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </ComponentBox>

                    <ComponentBox title="Calendar">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </ComponentBox>

                    <ComponentBox title="Label & Field">
                        <Field>
                            <FieldLabel>Stark ID</FieldLabel>
                            <Input
                                type="text"
                                placeholder="STK-0001"
                                className="max-w-xs"
                            />
                        </Field>
                    </ComponentBox>

                    <SectionHeader title="Layout" icon="" id="layout" />

                    <ComponentBox title="Card">
                        <Card className="w-full max-w-xs">
                            <CardHeader>
                                <CardTitle>Stark Industries</CardTitle>
                                <CardDescription>
                                    Advanced technology solutions since 1940
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm">
                                    Leading innovation in clean energy, AI
                                    systems, and aerospace engineering. Founded
                                    by Howard Stark.
                                </p>
                            </CardContent>
                        </Card>
                    </ComponentBox>

                    <ComponentBox title="Accordion">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full max-w-xs"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    What is the Arc Reactor?
                                </AccordionTrigger>
                                <AccordionContent>
                                    A clean energy source capable of powering
                                    the entire Stark Tower for a year.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    How many Iron Man suits exist?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Over 85 unique suits have been developed,
                                    from Mark I to Mark LXXXV.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    Who is J.A.R.V.I.S.?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Just A Rather Very Intelligent System - an
                                    advanced AI assistant created by Tony Stark.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </ComponentBox>

                    <ComponentBox title="Tabs">
                        <Tabs
                            defaultValue="overview"
                            className="w-full max-w-xs"
                        >
                            <TabsList>
                                <TabsTrigger value="overview">
                                    Overview
                                </TabsTrigger>
                                <TabsTrigger value="specs">Specs</TabsTrigger>
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

                    <ComponentBox title="Separator">
                        <div className="w-full max-w-xs space-y-4">
                            <p>Text above</p>
                            <Separator />
                            <p>Text below</p>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Scroll Area">
                        <ScrollArea className="h-32 w-full max-w-xs rounded border">
                            <div className="space-y-2 p-4">
                                {[
                                    "Item 1",
                                    "Item 2",
                                    "Item 3",
                                    "Item 4",
                                    "Item 5",
                                    "Item 6",
                                    "Item 7",
                                    "Item 8",
                                    "Item 9",
                                    "Item 10",
                                ].map((item) => (
                                    <div key={item} className="text-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </ComponentBox>

                    <ComponentBox title="Resizable">
                        <div className="flex h-24 max-w-xs rounded border">
                            <div className="flex flex-1 items-center justify-center border-r p-2 text-sm">
                                Left
                            </div>
                            <div className="w-px bg-border" />
                            <div className="flex flex-1 items-center justify-center p-2 text-sm">
                                Right
                            </div>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Collapsible">
                        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                            <CollapsibleTrigger asChild>
                                <Button variant="outline" size="sm">
                                    {isOpen ? "Hide" : "Show"} Classified Intel
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 rounded border p-3 text-sm">
                                <p className="font-medium text-destructive">
                                    CLASSIFIED - LEVEL 7 CLEARANCE
                                </p>
                                <p className="mt-1 text-muted-foreground">
                                    Project PEGASUS coordinates: 34.0522° N,
                                    118.2437° W
                                </p>
                            </CollapsibleContent>
                        </Collapsible>
                    </ComponentBox>

                    <ComponentBox title="Aspect Ratio">
                        <div className="w-full max-w-xs">
                            <AspectRatio
                                ratio={16 / 9}
                                className="flex items-center justify-center rounded bg-muted"
                            >
                                <span className="text-sm text-muted-foreground">
                                    16:9 Aspect Ratio
                                </span>
                            </AspectRatio>
                        </div>
                    </ComponentBox>

                    <SectionHeader title="Navigation" icon="" id="navigation" />

                    <ComponentBox title="Breadcrumb">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        Stark Industries
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        R&D Division
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>
                                        Mark VII Schematics
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </ComponentBox>

                    <ComponentBox title="Pagination">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </ComponentBox>

                    <ComponentBox title="Dropdown Menu">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">Stark Account</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Suit Controls
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Mission Logs
                                </DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                    Emergency Shutdown
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </ComponentBox>

                    <ComponentBox title="Menubar">
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger>File</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>New Project</MenubarItem>
                                    <MenubarItem>Open Schematic</MenubarItem>
                                    <MenubarItem>Save Suit Config</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Edit</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        Modify Arc Reactor
                                    </MenubarItem>
                                    <MenubarItem>Adjust Thrusters</MenubarItem>
                                    <MenubarItem>
                                        Calibrate Repulsors
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger>Suits</MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>Mark VII</MenubarItem>
                                    <MenubarItem>Mark XLII</MenubarItem>
                                    <MenubarItem>Hulkbuster</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </ComponentBox>

                    <ComponentBox title="Navigation Menu">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Divisions
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <NavigationMenuLink
                                            href="#"
                                            className="block p-2"
                                        >
                                            R&D Department
                                        </NavigationMenuLink>
                                        <NavigationMenuLink
                                            href="#"
                                            className="block p-2"
                                        >
                                            Clean Energy
                                        </NavigationMenuLink>
                                        <NavigationMenuLink
                                            href="#"
                                            className="block p-2"
                                        >
                                            Aerospace
                                        </NavigationMenuLink>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </ComponentBox>

                    <ComponentBox title="Context Menu">
                        <ContextMenu>
                            <ContextMenuTrigger className="flex h-24 w-full max-w-xs items-center justify-center rounded-md border border-dashed text-sm">
                                Right click for J.A.R.V.I.S. options
                            </ContextMenuTrigger>
                            <ContextMenuContent>
                                <ContextMenuItem>
                                    Run Diagnostics
                                </ContextMenuItem>
                                <ContextMenuItem>Scan Area</ContextMenuItem>
                                <ContextMenuItem>
                                    Activate Defense Mode
                                </ContextMenuItem>
                                <ContextMenuItem>Call Avengers</ContextMenuItem>
                            </ContextMenuContent>
                        </ContextMenu>
                    </ComponentBox>

                    <SectionHeader title="Feedback" icon="" id="feedback" />

                    <ComponentBox title="Alert">
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

                    <ComponentBox title="Alert Dialog">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="outline">Show Dialog</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you sure?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </ComponentBox>

                    <ComponentBox title="Progress">
                        <div className="w-full max-w-xs space-y-2">
                            <Progress value={progress} className="w-full" />
                            <p className="text-xs text-muted-foreground">
                                Suit assembly: {progress}% complete
                            </p>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Skeleton">
                        <div className="w-full max-w-xs space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Spinner">
                        <Spinner />
                    </ComponentBox>

                    <ComponentBox title="Sonner (Toast)">
                        <Button variant="outline" onClick={() => {}}>
                            Alert Avengers
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            F.R.I.D.A.Y. ready for notifications
                        </p>
                    </ComponentBox>

                    <SectionHeader
                        title="Data Display"
                        icon=""
                        id="data-display"
                    />

                    <ComponentBox title="Table">
                        <Table className="w-full max-w-xs">
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
                                <TableRow>
                                    <TableCell>Stephen Strange</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">Away</Badge>
                                    </TableCell>
                                    <TableCell>Illuminati</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>T&apos;Challa</TableCell>
                                    <TableCell>
                                        <Badge>Active</Badge>
                                    </TableCell>
                                    <TableCell>Wakanda</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </ComponentBox>

                    <ComponentBox title="Badge">
                        <div className="flex flex-wrap gap-2">
                            <Badge>Stark Industries</Badge>
                            <Badge variant="secondary">S.H.I.E.L.D.</Badge>
                            <Badge variant="destructive">Hydra Detected</Badge>
                            <Badge variant="outline">Wakanda</Badge>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Avatar">
                        <div className="flex gap-2">
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
                        <p className="mt-2 text-xs text-muted-foreground">
                            Tony, Peter, Bruce, Carol
                        </p>
                    </ComponentBox>

                    <ComponentBox title="Empty">
                        <Empty className="h-24 w-full max-w-xs" />
                    </ComponentBox>

                    <ComponentBox title="Item">
                        <Item className="w-full max-w-xs">
                            Project PEGASUS - Classified Level 7
                        </Item>
                    </ComponentBox>

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
                                        <div className="p-4">
                                            <Card>
                                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                                    <div className="text-center">
                                                        <span className="block text-2xl font-semibold">
                                                            {suit}
                                                        </span>
                                                        <span className="text-xs text-muted-foreground">
                                                            Iron Man Suit
                                                        </span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </ComponentBox>

                    <ComponentBox title="Kbd (Keyboard)">
                        <KbdGroup>
                            <Kbd>⌘</Kbd>
                            <Kbd>K</Kbd>
                        </KbdGroup>
                        <p className="mt-2 text-xs text-muted-foreground">
                            Open J.A.R.V.I.S. command palette
                        </p>
                    </ComponentBox>

                    <SectionHeader title="Overlays" icon="" id="overlays" />

                    <ComponentBox title="Dialog">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Profile</DialogTitle>
                                    <DialogDescription>
                                        Make changes to your profile here. Click
                                        save when done.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label
                                            htmlFor="name"
                                            className="text-right"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            defaultValue="John Doe"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label
                                            htmlFor="email"
                                            className="text-right"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            defaultValue="john@example.com"
                                            className="col-span-3"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label
                                            htmlFor="bio"
                                            className="text-right"
                                        >
                                            Bio
                                        </Label>
                                        <Textarea
                                            id="bio"
                                            placeholder="Tell us about yourself"
                                            className="col-span-3"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Save Changes</Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </ComponentBox>

                    <ComponentBox title="Sheet">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">Open Sheet</Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Navigation Menu</SheetTitle>
                                    <SheetDescription>
                                        Quick access to all sections.
                                    </SheetDescription>
                                </SheetHeader>
                                <nav className="mt-6 flex flex-col gap-4">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted"
                                    >
                                        <span>🏠</span>
                                        <span>Dashboard</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted"
                                    >
                                        <span>👤</span>
                                        <span>Profile</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted"
                                    >
                                        <span>⚙️</span>
                                        <span>Settings</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted"
                                    >
                                        <span>📊</span>
                                        <span>Analytics</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted"
                                    >
                                        <span>📁</span>
                                        <span>Projects</span>
                                    </Link>
                                    <Separator className="my-2" />
                                    <Link
                                        href="#"
                                        className="flex items-center gap-3 rounded-lg p-3 text-muted-foreground hover:bg-muted"
                                    >
                                        <span>🚪</span>
                                        <span>Logout</span>
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </ComponentBox>

                    <ComponentBox title="Drawer">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <Button variant="outline">Open Drawer</Button>
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Quick Actions</DrawerTitle>
                                    <DrawerDescription>
                                        Choose an action to perform.
                                    </DrawerDescription>
                                </DrawerHeader>
                                <div className="p-4 pb-8">
                                    <div className="grid gap-3">
                                        <Button
                                            variant="outline"
                                            className="justify-start gap-3"
                                        >
                                            <span>📷</span> Take Photo
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start gap-3"
                                        >
                                            <span>🖼️</span> Choose from Gallery
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start gap-3"
                                        >
                                            <span>📄</span> Upload Document
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start gap-3"
                                        >
                                            <span>🔗</span> Share Link
                                        </Button>
                                        <Separator className="my-2" />
                                        <Button
                                            variant="outline"
                                            className="justify-start gap-3"
                                        >
                                            <span>📁</span> Browse Files
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="justify-start gap-3"
                                        >
                                            <span>📝</span> Create New
                                        </Button>
                                    </div>
                                </div>
                            </DrawerContent>
                        </Drawer>
                    </ComponentBox>

                    <ComponentBox title="Popover">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">Suit Status</Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="grid gap-3">
                                    <h4 className="font-medium">
                                        Mark VII Status
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Power</span>
                                            <Badge>100%</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Armor</span>
                                            <Badge variant="secondary">
                                                98%
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Systems</span>
                                            <Badge>Online</Badge>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </ComponentBox>

                    <ComponentBox title="Hover Card">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Button variant="link">@tonystark</Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">
                                        Tony Stark
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        CEO, Stark Industries
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        Genius. Billionaire. Playboy.
                                        Philanthropist.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </ComponentBox>

                    <ComponentBox title="Tooltip">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline">Hover me</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Tooltip content</p>
                            </TooltipContent>
                        </Tooltip>
                    </ComponentBox>

                    <ComponentBox title="Command">
                        <Command className="w-full max-w-xs rounded-lg border">
                            <CommandInput placeholder="Search J.A.R.V.I.S. commands..." />
                            <CommandList>
                                <CommandEmpty>No systems found.</CommandEmpty>
                                <CommandGroup heading="Arc Reactor Systems">
                                    <CommandItem>
                                        Initialize Mark VII
                                    </CommandItem>
                                    <CommandItem>
                                        Activate Defense Mode
                                    </CommandItem>
                                    <CommandItem>Run Diagnostics</CommandItem>
                                </CommandGroup>
                                <CommandGroup heading="Facilities">
                                    <CommandItem>Stark Tower</CommandItem>
                                    <CommandItem>Avengers Compound</CommandItem>
                                    <CommandItem>Malibu Mansion</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </ComponentBox>

                    <SectionHeader title="Buttons" icon="" id="buttons" />

                    <ComponentBox title="Button Variants">
                        <div className="flex flex-wrap gap-2">
                            <Button>Deploy</Button>
                            <Button variant="secondary">Standby</Button>
                            <Button variant="outline">Scout Mode</Button>
                            <Button variant="ghost">Stealth</Button>
                            <Button variant="destructive">Emergency</Button>
                            <Button variant="link">Learn More</Button>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Button Sizes">
                        <div className="flex flex-wrap items-center gap-2">
                            <Button size="xs">XS</Button>
                            <Button size="sm">Small</Button>
                            <Button size="default">Default</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Button Group">
                        <ButtonGroup>
                            <Button>Scan</Button>
                            <Button>Analyze</Button>
                            <Button>Report</Button>
                        </ButtonGroup>
                    </ComponentBox>

                    <ComponentBox title="Toggle">
                        <div className="flex gap-2">
                            <Toggle aria-label="Toggle bold">
                                <span className="font-bold">B</span>
                            </Toggle>
                            <Toggle aria-label="Toggle highlight">
                                <span>H</span>
                            </Toggle>
                        </div>
                    </ComponentBox>

                    <ComponentBox title="Toggle Group">
                        <ToggleGroup type="multiple">
                            <ToggleGroupItem value="bold" aria-label="Bold">
                                B
                            </ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic">
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
            </div>
        </div>
    )
}
