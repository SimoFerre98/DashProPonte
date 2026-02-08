import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full bg-muted/40 p-4 gap-4">
            {/* Floating Sidebar */}
            <div className="hidden md:flex flex-col w-[280px] shrink-0 gap-2">
                <div className="flex h-full flex-col rounded-xl border bg-background/60 backdrop-blur-xl shadow-sm">
                    <Sidebar />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col rounded-xl border bg-background/60 backdrop-blur-xl shadow-sm overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
