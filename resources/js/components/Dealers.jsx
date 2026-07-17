const TIERS = [
    {
        tier: 'TIER 01',
        name: 'BASIC',
        dark: false,
        feats: ['Auction floor access', 'Standard trucking rates', 'Email status updates', 'Net-15 invoicing'],
    },
    {
        tier: 'TIER 02',
        name: 'PREMIUM',
        dark: true,
        feats: ['Priority auction access', 'Discounted freight blocks', 'Live manifest tracking', 'Net-30 invoicing + credit line'],
    },
];

export default function Dealers() {
    return (
        <section id="dealers" className="bg-brand-mist px-[22px] py-24 md:px-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">FOR TRADE PARTNERS</div>
            <h2 className="mb-3.5 font-heading text-[40px] font-bold tracking-[-1px]">DEALER PROGRAMME</h2>
            <p className="mb-11 max-w-[560px] text-[15px] leading-relaxed text-brand-muted">
                Two tiers, built around how many units you move.
            </p>
            <div className="grid max-w-[1040px] grid-cols-1 gap-6 md:grid-cols-2">
                {TIERS.map((t) => (
                    <div
                        key={t.tier}
                        className={
                            t.dark
                                ? 'rounded-xl border border-brand-navy-deep bg-gradient-to-br from-brand-navy to-brand-navy-deep p-9 text-white'
                                : 'rounded-xl border border-[#DDE5F0] bg-white p-9 text-brand-ink'
                        }
                    >
                        <div className={`mb-2 text-[10px] font-semibold tracking-[3px] ${t.dark ? 'text-brand-accent' : 'text-brand-blue'}`}>
                            {t.tier}
                        </div>
                        <h3 className="mb-[26px] font-heading text-[30px] font-bold tracking-[-0.5px]">{t.name}</h3>
                        <div className="flex flex-col">
                            {t.feats.map((f) => (
                                <div
                                    key={f}
                                    className={`flex items-center justify-between border-b py-3 text-sm ${t.dark ? 'border-brand-line' : 'border-[#EAEFF6]'}`}
                                >
                                    <span>{f}</span>
                                    <span className={`font-bold ${t.dark ? 'text-brand-accent' : 'text-brand-blue'}`}>✓</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className={
                                t.dark
                                    ? 'mt-7 block rounded-md border border-brand-blue bg-brand-blue py-3.5 text-center text-[11px] font-semibold tracking-[2px] text-white'
                                    : 'mt-7 block rounded-md border border-[#C7D8F5] bg-white py-3.5 text-center text-[11px] font-semibold tracking-[2px] text-brand-ink'
                            }
                        >
                            REGISTER NOW
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
