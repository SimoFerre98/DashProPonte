import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                {/* Desktop Sidebar (Fixed or part of grid? using grid for now) */}
                <div className="hidden border-r bg-muted/40 md:block md:w-[220px] lg:w-[280px] fixed inset-y-0 left-0 z-10">
                    <Sidebar />
                </div>

                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 md:pl-[220px] lg:pl-[280px]">
                    <Header />
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
