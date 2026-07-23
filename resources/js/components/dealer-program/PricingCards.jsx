const TIERS = [
    {
        tier: 'TIER 01',
        name: 'BASIC',
        price: '₦150,000',
        premium: false,
        feats: [
            'Standard auction floor access',
            'Standard inland trucking rates',
            'Email status updates',
            'Net-15 invoicing',
            'Shared customs clearance queue',
        ],
    },
    {
        tier: 'TIER 02',
        name: 'PREMIUM',
        price: '₦500,000',
        premium: true,
        feats: [
            'Priority auction floor access',
            'Discounted freight & trucking blocks',
            'Live manifest & fleet tracking',
            'Net-30 invoicing + credit line',
            'Priority customs clearance',
            'Dedicated account manager',
        ],
    },
];

export default function PricingCards() {
    return (
        <section id="pricing" className="bg-brand-mist px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">ANNUAL PACKAGES</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    CHOOSE YOUR DEALER TIER
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Two annual memberships, built around how many units you move each month.
                </p>
            </div>

            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-7 md:grid-cols-2">
                {TIERS.map((t) => (
                    <div
                        key={t.tier}
                        className={
                            t.premium
                                ? 'relative rounded-2xl border border-brand-blue bg-gradient-to-br from-white to-brand-blue-tint p-9 shadow-[0_20px_50px_rgba(14,165,233,0.14)]'
                                : 'relative rounded-2xl border border-brand-line bg-white p-9 shadow-[0_12px_30px_rgba(14,165,233,0.06)]'
                        }
                    >
                        {t.premium && (
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1.5 text-[9px] font-bold tracking-[1.5px] whitespace-nowrap text-white">
                                MOST POPULAR
                            </span>
                        )}
                        <div className="mb-2 text-[10px] font-semibold tracking-[3px] text-brand-blue">
                            {t.tier}
                        </div>
                        <h3 className="mb-1 font-heading text-[28px] font-bold tracking-[-0.5px] text-brand-ink">
                            {t.name}
                        </h3>
                        <div className="mb-7">
                            <span className="font-heading text-[36px] font-bold text-brand-ink">{t.price}</span>
                            <span className="text-[13px] text-brand-faint"> / year</span>
                        </div>
                        <div className="mb-8 flex flex-col gap-3.5">
                            {t.feats.map((f) => (
                                <div key={f} className="flex items-start gap-2.5 text-[13.5px] text-brand-ink">
                                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-blue text-[10px] font-bold text-white">
                                        ✓
                                    </span>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#register"
                            className={
                                t.premium
                                    ? 'block rounded-md bg-brand-blue py-3.5 text-center text-[11px] font-semibold tracking-[2px] text-white hover:bg-brand-blue-hover'
                                    : 'block rounded-md border border-brand-blue-light bg-transparent py-3.5 text-center text-[11px] font-semibold tracking-[2px] text-brand-ink hover:border-brand-blue hover:bg-brand-blue hover:text-white'
                            }
                        >
                            SELECT {t.name}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
