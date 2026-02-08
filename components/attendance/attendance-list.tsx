"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { saveAttendance } from "@/actions/attendance-actions";

interface Player {
    id: string;
    first_name: string;
    last_name: string;
}

interface AttendanceListProps {
    players: Player[];
    date?: Date;
}

export function AttendanceList({ players, date = new Date() }: AttendanceListProps) {
    const [attendance, setAttendance] = useState<Record<string, boolean>>({});

    const handleToggle = async (playerId: string, checked: boolean) => {
        setAttendance(prev => ({ ...prev, [playerId]: checked }));
        const status = checked ? "present" : "absent";

        await saveAttendance(playerId, date, status);
        // Optimistic update done via local state
    };

    return (
        <div className="space-y-4">
            <div className="text-sm text-muted-foreground">
                Data: {format(date, "PPP", { locale: it })}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {players.map(player => (
                    <Card key={player.id}>
                        <CardContent className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarFallback>{player.first_name[0]}{player.last_name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium leading-none">{player.last_name} {player.first_name}</p>
                                    <p className="text-xs text-muted-foreground">Giocatore</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id={`attendance-${player.id}`}
                                    checked={attendance[player.id] || false}
                                    onCheckedChange={(checked) => handleToggle(player.id, checked)}
                                />
                                <Label htmlFor={`attendance-${player.id}`}>
                                    {attendance[player.id] ? "Presente" : "Assente"}
                                </Label>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
