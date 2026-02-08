"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Payment } from "@/types";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { it } from "date-fns/locale";

export const columns: ColumnDef<Payment>[] = [
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
        accessorKey: "amount_due",
        header: "Da Pagare",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount_due"));
            const formatted = new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
            }).format(amount);
            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "amount_paid",
        header: "Pagato",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount_paid"));
            const formatted = new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "EUR",
            }).format(amount);
            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "status",
        header: "Stato",
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            let variant: "default" | "destructive" | "outline" | "secondary" = "default";
            let label = status;

            switch (status) {
                case "paid":
                    variant = "default"; // Greenish usually, default is primary (Bordeaux), maybe need custom class
                    label = "Saldato";
                    break;
                case "partial":
                    variant = "secondary";
                    label = "Parziale";
                    break;
                case "overdue":
                    variant = "destructive";
                    label = "Scaduto";
                    break;
            }

            return <Badge variant={variant}>{label}</Badge>;
        },
    },
    {
        accessorKey: "due_date",
        header: "Scadenza",
        cell: ({ row }) => {
            const date = row.getValue("due_date");
            if (!date) return "-";
            return format(new Date(date as string), "dd MMM yyyy", { locale: it });
        },
    },
];
