import { createClient } from "@/utils/supabase/server";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

async function getData() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("medical_records")
        .select(`
      *,
      player:players (
        first_name,
        last_name,
        team:teams (
            name,
            category
        )
      )
    `)
        .order('expiry_date', { ascending: true }); // Show expiring first

    if (error) {
        console.error("Error fetching medical records:", error);
        return [];
    }

    return (data as any) || [];
}

export default async function MedicalPage() {
    const data = await getData();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Infermeria</h1>
                {/* Add Medical Record Button/Dialog would go here similar to Payments */}
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
