import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-muted/40">
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
                    Pro Pontedecimo Manager
                </h1>
                <p className="text-xl text-muted-foreground">
                    Il gestionale ufficiale per la società sportiva.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/login">Accedi al Gestionale</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
