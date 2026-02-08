import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    // Fetch extra profile data if needed from 'profiles' table using user.id

    return (
        <div className="grid gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Profilo Utente</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Dettagli Account</CardTitle>
                    <CardDescription>Gestisci le informazioni del tuo account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label>Email</Label>
                        <Input value={user.email} disabled />
                    </div>
                    <div className="grid gap-2">
                        <Label>ID Utente</Label>
                        <Input value={user.id} disabled className="font-mono text-xs" />
                    </div>
                    <div className="grid gap-2">
                        <Label>Data Registrazione</Label>
                        <Input value={new Date(user.created_at).toLocaleDateString()} disabled />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Sicurezza</CardTitle>
                    <CardDescription>Aggiorna la tua password (funzionalità in arrivo).</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="outline" disabled>Cambia Password</Button>
                </CardContent>
            </Card>
        </div>
    );
}
