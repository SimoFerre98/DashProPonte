import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage({
    searchParams,
}: {
    searchParams: { message: string; error: string };
}) {
    // Explicitly unwrap searchParams if it's a Promise in newer Next.js versions, 
    // but here in the file definition it's typed as object. 
    // In Next.js 15+ searchParams is a promise, but let's stick to the providing typing or handle basic access.
    // For safety in 14/15 transition, we treat it as is for now.

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <Tabs defaultValue="login" className="w-full max-w-sm">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Accedi</TabsTrigger>
                    <TabsTrigger value="signup">Registrati</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Accesso</CardTitle>
                            <CardDescription>
                                Accedi con le tue credenziali.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={login} className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="mario@esempio.it"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" required />
                                </div>
                                {searchParams?.error && (
                                    <p className="text-sm font-medium text-destructive text-center">
                                        {searchParams.error}
                                    </p>
                                )}
                                {searchParams?.message && (
                                    <p className="text-sm font-medium text-green-600 text-center">
                                        {searchParams.message}
                                    </p>
                                )}
                                <Button type="submit" className="w-full">
                                    Accedi
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Registrazione</CardTitle>
                            <CardDescription>
                                Crea un nuovo account per gestire il team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action={signup} className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="full_name">Nome Completo</Label>
                                    <Input id="full_name" name="full_name" placeholder="Mario Rossi" required />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="signup-email">Email</Label>
                                    <Input
                                        id="signup-email"
                                        name="email"
                                        type="email"
                                        placeholder="mario@esempio.it"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="signup-password">Password</Label>
                                    <Input id="signup-password" name="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Crea Account
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
