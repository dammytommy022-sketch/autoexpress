const ROWS = [
    { label: 'Auction floor access', basic: 'Standard access', premium: 'Priority access' },
    { label: 'Inland trucking rates', basic: 'Standard rates', premium: 'Discounted freight blocks' },
    { label: 'Status updates', basic: 'Email updates', premium: 'Live manifest tracking' },
    { label: 'Invoicing terms', basic: 'Net-15 invoicing', premium: 'Net-30 + credit line' },
    { label: 'Dedicated account manager', basic: false, premium: true },
    { label: 'Priority customs handling', basic: false, premium: true },
];

export default function DealerMembership() {
    return (
        <section id="dealers" className="border-t border-brand-line bg-brand-fog px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">FOR TRADE PARTNERS</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    DEALER MEMBERSHIP
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Two annual tiers, built around how many units you move.
                </p>
            </div>

            <div className="mx-auto max-w-[880px] overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_12px_30px_rgba(14,165,233,0.06)]">
                <div className="grid grid-cols-3 border-b border-brand-line text-center">
                    <div className="p-6 text-left text-[11px] font-semibold tracking-[2px] text-brand-muted">
                        MEMBERSHIP
                    </div>
                    <div className="border-l border-brand-line p-6">
                        <div className="text-[11px] font-semibold tracking-[2px] text-brand-blue">BASIC</div>
                        <div className="mt-1 font-heading text-[22px] font-bold text-brand-ink">₦150,000</div>
                        <div className="text-[11px] text-brand-faint">per year</div>
                    </div>
                    <div className="relative border-l border-brand-line bg-brand-green-tint p-6">
                        <span className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-green px-3 py-1 text-[9px] font-bold tracking-[1.5px] text-white">
                            MOST POPULAR
                        </span>
                        <div className="mt-5 text-[11px] font-semibold tracking-[2px] text-brand-green">PREMIUM</div>
                        <div className="mt-1 font-heading text-[22px] font-bold text-brand-ink">₦500,000</div>
                        <div className="text-[11px] text-brand-faint">per year</div>
                    </div>
                </div>

                {ROWS.map((row, i) => (
                    <div
                        key={row.label}
                        className={`grid grid-cols-3 text-[13.5px] ${i < ROWS.length - 1 ? 'border-b border-brand-line' : ''}`}
                    >
                        <div className="p-5 font-medium text-brand-ink">{row.label}</div>
                        <div className="border-l border-brand-line p-5 text-center text-brand-muted">
                            {typeof row.basic === 'string' ? row.basic : row.basic ? '✓' : <span className="text-brand-faint">—</span>}
                        </div>
                        <div className="border-l border-brand-line bg-brand-green-tint/40 p-5 text-center font-semibold text-brand-green">
                            {typeof row.premium === 'string' ? row.premium : row.premium ? '✓' : <span className="text-brand-faint">—</span>}
                        </div>
                    </div>
                ))}

                <div className="grid grid-cols-3 border-t border-brand-line">
                    <div className="p-6" />
                    <div className="border-l border-brand-line p-6 text-center">
                        <a
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-md border border-brand-blue-light bg-transparent px-6 py-3 text-[11px] font-semibold tracking-[1.5px] text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                        >
                            BECOME A DEALER
                        </a>
                    </div>
                    <div className="border-l border-brand-line bg-brand-green-tint p-6 text-center">
                        <a
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-md bg-brand-green px-6 py-3 text-[11px] font-semibold tracking-[1.5px] text-white hover:bg-[#047857]"
                        >
                            BECOME A DEALER
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
