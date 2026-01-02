'use client';

interface PaymentModalProps {
    paymentType: 'electricity' | 'water' | null;
    onClose: () => void;
}

const PAYMENT_URLS = {
    electricity: 'https://paystack.shop/pay/ukaf4g0qcl',
    water: 'https://paystack.shop/pay/dfknjdj8l6',
};

const PaymentModal = ({ paymentType, onClose }: PaymentModalProps) => {
    if (!paymentType) return null;

    const isElectricity = paymentType === 'electricity';
    const paymentUrl = PAYMENT_URLS[paymentType];

    // Theme colors based on type
    const themeColor = isElectricity ? 'text-[var(--jap-red)]' : 'text-[var(--jap-blue)]';
    const borderColor = isElectricity ? 'border-[var(--jap-red)]' : 'border-[var(--jap-blue)]';

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

            {/* Payment Page Iframe */}
            <div className="flex-1 relative bg-white">
                <iframe
                    src={paymentUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    title={`${paymentType} bill payment`}
                    allow="payment"
                />
            </div>
        </div>
    );
};

export default PaymentModal;
