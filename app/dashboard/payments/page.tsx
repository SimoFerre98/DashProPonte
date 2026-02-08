import { createClient } from "@/utils/supabase/server";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { PaymentDialog } from "@/components/payments/payment-dialog";
import { createPayment } from "@/actions/payment-actions";
import { Payment } from "@/types";

async function getData() {
    const supabase = await createClient();

    const paymentsQuery = supabase
        .from("payments")
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
        .order('due_date', { ascending: true });

    const playersQuery = supabase
        .from("players")
        .select("id, first_name, last_name")
        .order("last_name");

    const [paymentsRes, playersRes] = await Promise.all([paymentsQuery, playersQuery]);

    return {
        payments: (paymentsRes.data as any) || [],
        players: (playersRes.data as any) || [],
    };
}

export default async function PaymentsPage() {
    const { payments, players } = await getData();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Pagamenti</h1>
                <PaymentDialog players={players} createPaymentAction={createPayment} />
            </div>
            <DataTable columns={columns} data={payments} />
        </div>
    );
}
