"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const paymentSchema = z.object({
    player_id: z.string().min(1, "Seleziona un giocatore"),
    amount_due: z.coerce.number().min(0.01, "Importo deve essere positivo"),
    season_year: z.string().min(1, "Inserisci anno stagione"),
    due_date: z.string().optional(),
});

export async function createPayment(prevState: any, formData: FormData) {
    const supabase = await createClient();

    const validatedFields = paymentSchema.safeParse({
        player_id: formData.get("player_id"),
        amount_due: formData.get("amount_due"),
        season_year: formData.get("season_year"),
        due_date: formData.get("due_date"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { player_id, amount_due, season_year, due_date } = validatedFields.data;

    const { error } = await supabase.from("payments").insert({
        player_id,
        amount_due,
        season_year,
        due_date: due_date || null,
        status: "overdue", // Default status
        amount_paid: 0,
    });

    if (error) {
        return {
            message: "Errore durante la creazione del pagamento.",
        };
    }

    revalidatePath("/dashboard/payments");
    return { message: "Pagamento creato con successo!" };
}
