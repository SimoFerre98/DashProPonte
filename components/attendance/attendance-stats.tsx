"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AttendanceStats({ totalPlayers, presentCount }: { totalPlayers: number, presentCount: number }) {
    const percentage = totalPlayers > 0 ? Math.round((presentCount / totalPlayers) * 100) : 0;

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Presenze Oggi</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{presentCount} / {totalPlayers}</div>
                    <p className="text-xs text-muted-foreground">
                        {percentage}% della squadra
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
