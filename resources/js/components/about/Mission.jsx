const PILLARS = [
    { n: '01', title: 'SOURCING', desc: 'Every vehicle is sourced from vetted auctions and sellers, with full transparency on condition and price.' },
    { n: '02', title: 'SHIPPING', desc: 'Insured inland trucking and scheduled ocean freight, tracked at every leg of the journey.' },
    { n: '03', title: 'CUSTOMS CLEARANCE', desc: 'Licensed brokers handle duties, documentation, and border clearance on your behalf.' },
    { n: '04', title: 'DELIVERY', desc: 'Pre-delivery inspection and reconditioning before the vehicle reaches your door.' },
];

export default function Mission() {
    return (
        <section className="bg-brand-fog px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">OUR MISSION</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    TRANSPARENT, START TO FINISH
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    We exist to make vehicle importation predictable — clear pricing on sourcing, honest timelines on
                    shipping, licensed handling of customs clearance, and dependable delivery, with nothing hidden along
                    the way.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {PILLARS.map((p) => (
                    <div key={p.n} className="border-t-2 border-brand-blue pt-6 pr-[18px]">
                        <div className="mb-6 text-[10px] font-semibold tracking-[2px] text-brand-blue">{p.n}</div>
                        <h3 className="mb-3 font-heading text-[17px] font-bold">{p.title}</h3>
                        <p className="text-[13px] leading-relaxed text-brand-muted">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
