export type PaymentStatus = "paid" | "partial" | "overdue";

export interface Payment {
    id: string;
    player_id: string;
    amount_due: number;
    amount_paid: number;
    status: PaymentStatus;
    season_year: string;
    due_date: string | null;
    created_at: string;
    player?: {
        first_name: string;
        last_name: string;
        team?: {
            name: string;
            category: string;
        }
    };
}
