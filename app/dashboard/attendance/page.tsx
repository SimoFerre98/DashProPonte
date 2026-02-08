import { getTeamPlayers } from "@/actions/attendance-actions";
import { AttendanceList } from "@/components/attendance/attendance-list";

export default async function AttendancePage() {
    const players = await getTeamPlayers(); // Assuming retrieves all for now

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold tracking-tight">Registro Presenze</h1>
            <AttendanceList players={players} />
        </div>
    );
}
