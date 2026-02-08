"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getTeamPlayers(teamId?: string) {
    const supabase = await createClient();

    // logic to get players based on coach's team or passed teamId
    // for now fetch all players
    const { data } = await supabase.from("players").select("*").order("last_name");
    return data || [];
}

export async function saveAttendance(playerId: string, date: Date, status: "present" | "absent" | "excused") {
    const supabase = await createClient();
    const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD

    const { error } = await supabase.from("attendance").upsert({
        player_id: playerId,
        date: formattedDate,
        status: status,
    }, { onConflict: "player_id, date" });

    if (error) {
        console.error("Error saving attendance:", error);
        return { success: false };
    }

    revalidatePath("/dashboard/attendance");
    return { success: true };
}
