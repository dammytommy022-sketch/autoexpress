const ROWS = [
    'Auction bidding',
    'Inland trucking',
    'Ocean shipping',
    'Customs clearance',
    'Live tracking',
    'Final delivery',
];

export default function ComparisonSection() {
    return (
        <section className="relative overflow-hidden border-t border-brand-line bg-brand-fog px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">WHY BUNDLE IT</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    COMPLETE IMPORT SUPPORT IN ONE PLACE
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Most importers juggle a broker, a trucker, a freight forwarder, and a customs agent — each with
                    their own invoice and no shared visibility. AUTOPROEXPRESS combines bidding, trucking, shipping,
                    clearing, tracking, and delivery under a single manifest number.
                </p>
            </div>

            <div className="mx-auto max-w-[880px] overflow-hidden rounded-2xl border border-brand-line bg-white">
                <div className="grid grid-cols-3 border-b border-brand-line text-[11px] font-semibold tracking-[2px]">
                    <div className="p-5 text-brand-muted">STEP</div>
                    <div className="border-l border-brand-line p-5 text-center text-brand-faint">SEPARATE PROVIDERS</div>
                    <div className="border-l border-brand-line bg-brand-blue-tint p-5 text-center text-brand-blue">AUTOPROEXPRESS</div>
                </div>
                {ROWS.map((row, i) => (
                    <div
                        key={row}
                        className={`grid grid-cols-3 text-[13.5px] ${i < ROWS.length - 1 ? 'border-b border-brand-line' : ''}`}
                    >
                        <div className="p-5 font-medium text-brand-ink">{row}</div>
                        <div className="border-l border-brand-line p-5 text-center text-brand-faint">
                            Separate contract
                        </div>
                        <div className="border-l border-brand-line bg-brand-blue-tint/40 p-5 text-center font-semibold text-brand-blue">
                            ✓ Included
                        </div>
                    </div>
                ))}
                <div className="grid grid-cols-3 border-t border-brand-line text-[13.5px]">
                    <div className="p-5 font-semibold text-brand-ink">Tracking number</div>
                    <div className="border-l border-brand-line p-5 text-center text-brand-faint">One per provider</div>
                    <div className="border-l border-brand-line bg-brand-blue-tint p-5 text-center font-bold text-brand-blue">
                        One manifest number
                    </div>
                </div>
            </div>
        </section>
    );
}
