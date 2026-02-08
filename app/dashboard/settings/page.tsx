import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage() {
    return (
        <div className="grid gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Impostazioni</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Preferenze Generali</CardTitle>
                    <CardDescription>Personalizza la tua esperienza nell'applicazione.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <Label>Tema Scuro</Label>
                            <span className="text-xs text-muted-foreground">Abilita la modalità scura per l'interfaccia.</span>
                        </div>
                        <Switch disabled />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <Label>Lingua</Label>
                            <span className="text-xs text-muted-foreground">Seleziona la lingua dell'interfaccia.</span>
                        </div>
                        <Select defaultValue="it" disabled>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Seleziona lingua" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="it">Italiano</SelectItem>
                                <SelectItem value="en">English (Coming Soon)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Notifiche</CardTitle>
                    <CardDescription>Gestisci le preferenze di notifica.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <Label>Notifiche Email</Label>
                            <span className="text-xs text-muted-foreground">Ricevi aggiornamenti via email.</span>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
