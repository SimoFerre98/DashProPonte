"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MedicalRecord } from "@/types/medical";
import { Badge } from "@/components/ui/badge";
import { format, isBefore, addDays } from "date-fns";
import { it } from "date-fns/locale";

export const columns: ColumnDef<MedicalRecord>[] = [
    {
        accessorKey: "player.last_name",
        header: "Giocatore",
        cell: ({ row }) => {
            const player = row.original.player;
            return (
                <div className="flex flex-col">
                    <span className="font-medium">{player?.last_name} {player?.first_name}</span>
                    <span className="text-xs text-muted-foreground">{player?.team?.name} ({player?.team?.category})</span>
                </div>
            );
        },
    },
    {
        accessorKey: "visit_date",
        header: "Data Visita",
        cell: ({ row }) => {
            const date = row.getValue("visit_date");
            if (!date) return "-";
            return format(new Date(date as string), "dd MMM yyyy", { locale: it });
        },
    },
    {
        accessorKey: "expiry_date",
        header: "Scadenza",
        cell: ({ row }) => {
            const dateStr = row.getValue("expiry_date") as string;
            if (!dateStr) return "-";
            const date = new Date(dateStr);
            const now = new Date();
            const warningDate = addDays(now, 30); // Defines "expiring soon" as within 30 days

            let variant: "default" | "destructive" | "outline" | "secondary" = "outline";
            let status = "Valido";

            if (isBefore(date, now)) {
                variant = "destructive";
                status = "Scaduto";
            } else if (isBefore(date, warningDate)) {
                variant = "secondary"; // Yellowish/Warner
                status = "In scadenza";
            } else {
                variant = "default"; // Green/Valid
            }

            // Custom styling for valid/expiring
            // Since shadcn badge variants are limited, we use what we have or add custom classes
            // Default = primary (Bordeaux), Secondary = gray/muted, Destructive = red.

            return (
                <div className="flex items-center gap-2">
                    <span>{format(date, "dd MMM yyyy", { locale: it })}</span>
                    <Badge variant={variant}>{status}</Badge>
                </div>
            );
        },
    },
];
