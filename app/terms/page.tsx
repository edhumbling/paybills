'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
    const router = useRouter();

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();
        router.back();
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-yellow-600/30 backdrop-blur-md">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
                    <Link
                        href="/"
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <svg
                            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                        <span className="text-sm font-mono uppercase tracking-wider">Back</span>
                    </Link>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <h1 className="text-sm font-bold uppercase tracking-widest text-yellow-500">
                        Terms & Conditions
                    </h1>
                </div>
            </header>

            {/* Content */}
            <main className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="border border-yellow-600/30 p-8 md:p-12 bg-black/40">
                        <h1 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight">
                            Terms & <span className="text-yellow-500">Conditions</span>
                        </h1>
                        <p className="text-gray-500 font-mono text-xs mb-8">LAST UPDATED: JANUARY 2026</p>

                        <div className="space-y-8 text-gray-300 text-sm leading-relaxed normal-case">
                            {/* Section 1 */}
                            <section>
                                <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span className="text-yellow-500">01.</span> Payment Obligations
                                </h2>
                                <p className="mb-3">
                                    All members of Hannah&apos;s Legacy Home are required to settle their utility bills (Electricity and Water)
                                    within the designated payment window of the <strong className="text-white">30th and 31st of each month</strong>.
                                </p>
                                <p>
                                    Failure to complete payment within this period will result in immediate interruption of utility services
                                    until full resolution is confirmed.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span className="text-yellow-500">02.</span> Automatic Billing
                                </h2>
                                <p className="mb-3">
                                    Upon completion of your initial payment, your profile will be enrolled in our automated monthly billing system.
                                    This ensures consistent service without manual intervention.
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                                    <li>You will receive a confirmation email before each scheduled payment</li>
                                    <li>You may cancel your subscription at any time through Paystack</li>
                                    <li>Refunds are processed according to Paystack&apos;s refund policy</li>
                                </ul>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span className="text-yellow-500">03.</span> Service Interruption Policy
                                </h2>
                                <p className="mb-3">
                                    In the event of non-payment:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                                    <li>Electricity and water services will be temporarily suspended</li>
                                    <li>Access will be restored within 24-48 hours of payment confirmation</li>
                                    <li>Repeated late payments may result in additional administrative fees</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span className="text-yellow-500">04.</span> Debt-Free Initiative
                                </h2>
                                <p>
                                    Hannah&apos;s Legacy Home operates on a strict debt-free policy. We do not extend credit or allow
                                    outstanding balances. All utility usage must be prepaid through our secure payment portal.
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span className="text-yellow-500">05.</span> Payment Security
                                </h2>
                                <p className="mb-3">
                                    All payments are processed securely through Paystack, a PCI-DSS compliant payment processor.
                                    We do not store your card details on our servers.
                                </p>
                                <p className="text-yellow-500/80 font-mono text-xs">
                                    For payment-related inquiries, contact Paystack support directly.
                                </p>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h2 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <span className="text-yellow-500">06.</span> Contact Information
                                </h2>
                                <p>
                                    For questions regarding these terms or your account, please contact the Hannah&apos;s Legacy Home
                                    management office during business hours.
                                </p>
                            </section>
                        </div>

                        {/* Agreement Notice */}
                        <div className="mt-12 pt-8 border-t border-gray-800">
                            <p className="text-gray-500 text-xs font-mono text-center">
                                BY USING THIS PAYMENT PORTAL, YOU AGREE TO THESE TERMS AND CONDITIONS.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
