"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
    LayoutDashboard,
    Users,
    CreditCard,
    Activity,
    CalendarDays,
    Package,
    NotebookPen
} from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    const items = [
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            // Matches /dashboard/admin, /dashboard/coach etc. via redirect but for now just link to root dashboard
        },
        {
            title: "Squadre & Giocatori",
            href: "/dashboard/teams",
            icon: Users,
        },
        {
            title: "Pagamenti",
            href: "/dashboard/payments",
            icon: CreditCard,
        },
        {
            title: "Infermeria",
            href: "/dashboard/medical",
            icon: Activity,
        },
        {
            title: "Presenze",
            href: "/dashboard/attendance",
            icon: CalendarDays,
        },
        {
            title: "Magazzino",
            href: "/dashboard/inventory",
            icon: Package,
        },
        {
            title: "Note Personali",
            href: "/dashboard/notes",
            icon: NotebookPen,
        },
    ];

    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Pro Pontedecimo
                    </h2>
                    <div className="space-y-1">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost" }),
                                    "w-full justify-start",
                                    pathname === item.href || pathname.startsWith(item.href + "/") // Simple active check
                                        ? "bg-secondary"
                                        : "hover:bg-transparent hover:underline"
                                )}
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
