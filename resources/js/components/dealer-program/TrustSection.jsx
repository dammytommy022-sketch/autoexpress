const POINTS = [
    { icon: '◈', title: 'VERIFIED TRADE PARTNERS', desc: 'Every dealer is vetted through CAC registration before onboarding onto the network.' },
    { icon: '⚑', title: 'LICENSED CUSTOMS BROKERS', desc: 'Your clearance is handled by brokers we work with daily, not a third party you have to chase.' },
    { icon: '⛟', title: 'NATIONWIDE DELIVERY NETWORK', desc: 'Trucking partners covering every major port and destination city across Nigeria.' },
    { icon: '$', title: 'TRANSPARENT SETTLEMENTS', desc: 'Dealer invoicing and freight discounts are itemized — no bundled or hidden charges.' },
];

export default function TrustSection() {
    return (
        <section className="bg-brand-blue-tint px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">PARTNERSHIP YOU CAN TRUST</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    A DEALERSHIP PARTNERSHIP, NOT JUST A LOGIN
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Dealer members work with a named team, not a support queue — here's what backs every
                    membership.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {POINTS.map((p) => (
                    <div key={p.title} className="rounded-xl border border-brand-line bg-white p-7">
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-tint text-[18px] font-bold text-brand-blue">
                            {p.icon}
                        </div>
                        <h3 className="mb-2.5 font-heading text-[15px] font-bold tracking-[0.3px]">{p.title}</h3>
                        <p className="text-[13px] leading-relaxed text-brand-muted">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
