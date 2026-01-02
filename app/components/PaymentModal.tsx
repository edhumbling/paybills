'use client';

import { useState, useEffect } from 'react';

interface PaymentModalProps {
    paymentType: 'electricity' | 'water' | null;
    onClose: () => void;
}

const PAYMENT_URLS = {
    electricity_recurring: 'https://paystack.shop/pay/ukaf4g0qcl',
    electricity_onetime: 'https://paystack.shop/pay/lightbill1',
    water_recurring: 'https://paystack.shop/pay/dfknjdj8l6',
    water_onetime: 'https://paystack.shop/pay/waterbill1',
};

const PaymentModal = ({ paymentType, onClose }: PaymentModalProps) => {
    const [activeUrl, setActiveUrl] = useState<string | null>(null);

    // Reset state when paymentType changes
    useEffect(() => {
        setActiveUrl(null);
    }, [paymentType]);

    if (!paymentType) return null;

    const isElectricity = paymentType === 'electricity';
    
    // Theme colors based on type
    const themeColor = isElectricity ? 'text-[var(--jap-red)]' : 'text-[var(--jap-blue)]';
    const borderColor = isElectricity ? 'border-[var(--jap-red)]' : 'border-[var(--jap-blue)]';
    
    // Dynamic styles for selection buttons
    const recurringHoverColor = isElectricity ? 'group-hover:text-[var(--jap-red)]' : 'group-hover:text-[var(--jap-blue)]';
    const recurringBorderHover = isElectricity ? 'hover:border-[var(--jap-red)]' : 'hover:border-[var(--jap-blue)]';
    const recurringBgHover = isElectricity ? 'group-hover:bg-[var(--jap-red)]' : 'group-hover:bg-[var(--jap-blue)]';
    const recurringIconHover = isElectricity ? 'group-hover:border-[var(--jap-red)]' : 'group-hover:border-[var(--jap-blue)]';

    const onetimeHoverColor = isElectricity ? 'group-hover:text-[var(--jap-yellow)]' : 'group-hover:text-cyan-400';
    const onetimeBorderHover = isElectricity ? 'hover:border-[var(--jap-yellow)]' : 'hover:border-cyan-400';
    const onetimeBgHover = isElectricity ? 'group-hover:bg-[var(--jap-yellow)]' : 'group-hover:bg-cyan-400';
    const onetimeIconHover = isElectricity ? 'group-hover:border-[var(--jap-yellow)]' : 'group-hover:border-cyan-400';

    const handleRecurringClick = () => {
        setActiveUrl(isElectricity ? PAYMENT_URLS.electricity_recurring : PAYMENT_URLS.water_recurring);
    };

    const handleOneTimeClick = () => {
        setActiveUrl(isElectricity ? PAYMENT_URLS.electricity_onetime : PAYMENT_URLS.water_onetime);
    };

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[var(--jap-black)] animate-in slide-in-from-bottom-10 duration-300">
            {/* Header */}
            <header className={`flex items-center justify-between px-6 py-4 bg-black/90 border-b border-white/10 relative overflow-hidden`}>
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-${isElectricity ? '[var(--jap-red)]' : '[var(--jap-blue)]'} to-transparent opacity-80`}></div>

                <button
                    onClick={onClose}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group z-10"
                >
                    <div className={`w-8 h-8 flex items-center justify-center border border-white/20 group-hover:${borderColor} bg-white/5 transition-all`}>
                        <svg
                            className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Return / 戻る</span>
                </button>

                <div className="flex flex-col items-end z-10">
                    <h1 className={`text-xl font-black italic uppercase tracking-tighter ${themeColor}`}>
                        {isElectricity ? 'ELECTRICITY' : 'WATER'} BILL
                    </h1>
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest">SECURE PAYMENT // {isElectricity ? '電気' : '水道'}</span>
                </div>
            </header>

            {/* Content Area */}
            <div className="flex-1 relative bg-[var(--jap-black)] flex flex-col">
                {activeUrl ? (
                    /* Payment Page Iframe */
                    <iframe
                        src={activeUrl}
                        className="absolute inset-0 w-full h-full border-0 bg-white"
                        title={`${paymentType} bill payment`}
                        allow="payment"
                    />
                ) : (
                    /* Selection Screen */
                    <div className="flex-1 flex items-center justify-center p-6 animate-in fade-in duration-500">
                        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8">
                            
                            {/* Recurring Option */}
                            <button 
                                onClick={handleRecurringClick}
                                className={`group relative h-64 md:h-80 border border-white/10 ${recurringBorderHover} bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 ${recurringIconHover} transition-all bg-black/30`}>
                                        <svg className={`w-8 h-8 text-gray-400 ${recurringHoverColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                    </div>
                                    <h3 className={`text-2xl font-black text-white italic tracking-tighter mb-2 ${recurringHoverColor} transition-colors`}>RECURRING</h3>
                                    <p className="text-gray-400 text-xs font-mono mb-6">AUTOMATED MONTHLY BILLING</p>
                                    <div className={`inline-block px-4 py-2 border border-white/20 text-[10px] tracking-widest text-gray-300 ${recurringBgHover} group-hover:text-white ${recurringIconHover} transition-all`}>SELECT / 選択</div>
                                </div>
                            </button>

                            {/* One-Time Option */}
                            <button 
                                onClick={handleOneTimeClick}
                                className={`group relative h-64 md:h-80 border border-white/10 ${onetimeBorderHover} bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 ${onetimeIconHover} transition-all bg-black/30`}>
                                        <svg className={`w-8 h-8 text-gray-400 ${onetimeHoverColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    </div>
                                    <h3 className={`text-2xl font-black text-white italic tracking-tighter mb-2 ${onetimeHoverColor} transition-colors`}>ONE-TIME</h3>
                                    <p className="text-gray-400 text-xs font-mono mb-6">SINGLE PAYMENT TRANSACTION</p>
                                    <div className={`inline-block px-4 py-2 border border-white/20 text-[10px] tracking-widest text-gray-300 ${onetimeBgHover} group-hover:text-black ${onetimeIconHover} transition-all`}>SELECT / 選択</div>
                                </div>
                            </button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PaymentModal;
