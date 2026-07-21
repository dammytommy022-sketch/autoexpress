const TIERS = [
    {
        tier: 'TIER 01',
        name: 'BASIC',
        premium: false,
        feats: ['Auction floor access', 'Standard trucking rates', 'Email status updates', 'Net-15 invoicing'],
    },
    {
        tier: 'TIER 02',
        name: 'PREMIUM',
        premium: true,
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
                            t.premium
                                ? 'rounded-xl border border-brand-blue bg-gradient-to-br from-brand-blue to-brand-blue-hover p-9 text-white'
                                : 'rounded-xl border border-[#DDE5F0] bg-white p-9 text-brand-ink'
                        }
                    >
                        <div className={`mb-2 text-[10px] font-semibold tracking-[3px] ${t.premium ? 'text-brand-blue-tint' : 'text-brand-blue'}`}>
                            {t.tier}
                        </div>
                        <h3 className="mb-[26px] font-heading text-[30px] font-bold tracking-[-0.5px]">{t.name}</h3>
                        <div className="flex flex-col">
                            {t.feats.map((f) => (
                                <div
                                    key={f}
                                    className={`flex items-center justify-between border-b py-3 text-sm ${t.premium ? 'border-white/30' : 'border-[#EAEFF6]'}`}
                                >
                                    <span>{f}</span>
                                    <span className={`font-bold ${t.premium ? 'text-white' : 'text-brand-blue'}`}>✓</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className={
                                t.premium
                                    ? 'mt-7 block rounded-md border border-white bg-white py-3.5 text-center text-[11px] font-semibold tracking-[2px] text-brand-blue'
                                    : 'mt-7 block rounded-md border border-brand-blue-light bg-white py-3.5 text-center text-[11px] font-semibold tracking-[2px] text-brand-ink'
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
