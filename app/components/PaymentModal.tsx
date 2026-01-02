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
    const accentColor = isElectricity ? 'text-yellow-500' : 'text-cyan-400';
    const borderColor = isElectricity ? 'border-yellow-600' : 'border-cyan-500';

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black">
            {/* Header */}
            <header className={`flex items-center gap-4 px-4 py-3 bg-black border-b ${borderColor}/30`}>
                <button
                    onClick={onClose}
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
                </button>

                <div className="h-4 w-px bg-gray-700"></div>

                <h1 className={`text-sm font-bold uppercase tracking-widest ${accentColor}`}>
                    {isElectricity ? 'Electricity' : 'Water'} Bill Payment
                </h1>
            </header>

            {/* Payment Page Iframe */}
            <div className="flex-1 relative">
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
