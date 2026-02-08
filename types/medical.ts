export interface MedicalRecord {
    id: string;
    player_id: string;
    visit_date: string | null;
    expiry_date: string;
    certificate_url: string | null;
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
