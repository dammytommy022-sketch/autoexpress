const SERVICES = [
    { n: '01 / SOURCING', title: 'PRE-ORDER', desc: 'Bid or reserve the exact vehicle you want from vetted auctions and sellers.' },
    { n: '02 / INLAND', title: 'TRUCKING', desc: 'Insured haulage from the yard to port, tracked at every mile marker.' },
    { n: '03 / OCEAN', title: 'SHIPPING', desc: 'Container or RoRo ocean freight on scheduled sailings to your home port.' },
    { n: '04 / BORDER', title: 'CUSTOMS', desc: 'Duties, documentation and border clearance handled on your behalf.' },
    { n: '05 / PREP', title: 'REPAIRS', desc: 'Pre-delivery inspection and reconditioning before the vehicle reaches you.' },
];

export default function Services() {
    return (
        <section id="services" className="bg-brand-fog px-[22px] py-24 md:px-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">WHAT WE HANDLE</div>
            <h2 className="mb-3.5 font-heading text-[40px] font-bold tracking-[-1px]">OUR SERVICES</h2>
            <p className="mb-[52px] max-w-[560px] text-[15px] leading-relaxed text-brand-muted">
                From the auction floor to your driveway — every leg of the journey, managed under one manifest.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {SERVICES.map((sv) => (
                    <div key={sv.n} className="border-t-2 border-brand-blue py-6 pr-[22px]">
                        <div className="mb-[26px] text-[10px] font-semibold tracking-[2px] text-brand-blue">{sv.n}</div>
                        <h3 className="mb-3 font-heading text-[18px] font-bold">{sv.title}</h3>
                        <p className="pr-[18px] text-[13px] leading-relaxed text-brand-muted">{sv.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
