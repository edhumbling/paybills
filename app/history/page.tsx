'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PaymentHistoryTable from '../components/PaymentHistoryTable';
import CurrentYear from '../components/CurrentYear';

export default function HistoryPage() {
    const router = useRouter();

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();
        router.back();
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[var(--jap-red)] selection:text-white">
            {/* Background */}
            <div className="fixed inset-0 z-0 bg-japanese-grid pointer-events-none opacity-20"></div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-white/10 backdrop-blur-md">
                <div className="container-main px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            onClick={handleBack}
                            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group"
                        >
                            <div className="w-8 h-8 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 transition-colors clip-sharp">
                                <svg
                                    className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </div>
                            <span className="text-xs font-mono uppercase tracking-widest hidden md:block">Back to Dashboard</span>
                        </Link>
                    </div>

                    <div className="text-right">
                        <h1 className="text-sm font-black uppercase tracking-widest text-white">
                            PAYMENT HISTORY
                        </h1>
                        <p className="text-[9px] text-[var(--jap-red)] font-mono">SECURE ARCHIVE</p>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="pt-32 pb-16 px-6 relative z-10">
                <div className="container-main">
                    <PaymentHistoryTable />
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 border-t border-white/5 bg-black/80 text-center relative z-10">
                <div className="container-main">
                    <p className="text-zinc-600 text-[10px] font-mono">
                        © <CurrentYear /> HANNAH&apos;S LEGACY // ARCHIVE_MODE
                    </p>
                </div>
            </footer>
        </div>
    );
}
