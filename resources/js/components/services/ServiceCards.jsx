import { IconGavel, IconTruck, IconShip, IconDocument, IconWrench, IconHandshake } from './Icons';

const SERVICES = [
    {
        Icon: IconGavel,
        title: 'AUCTION VEHICLE BIDDING',
        desc: 'Bid or reserve the exact vehicle you want from vetted auctions and private sellers.',
        benefits: ['Access to vetted auction inventory', 'Transparent bid pricing, no markups', 'Condition reports before you commit'],
    },
    {
        Icon: IconTruck,
        title: 'INLAND TRUCKING & PICKUP',
        desc: 'Insured haulage from the auction yard or seller to port, tracked at every mile marker.',
        benefits: ['Fully insured haulage', 'Real-time pickup scheduling', 'Nationwide yard network'],
    },
    {
        Icon: IconShip,
        title: 'INTERNATIONAL SHIPPING (RoRo & CONTAINER)',
        desc: 'Container or RoRo ocean freight on scheduled sailings to your home port.',
        benefits: ['RoRo and container options', 'Scheduled, reliable sailings', 'Live ocean-freight tracking'],
    },
    {
        Icon: IconDocument,
        title: 'CUSTOMS CLEARANCE',
        desc: 'Duties, documentation, and border clearance handled by licensed brokers on your behalf.',
        benefits: ['Licensed customs brokers', 'Duties and paperwork handled', 'No surprise clearance fees'],
    },
    {
        Icon: IconWrench,
        title: 'VEHICLE REPAIR & PARTS SUPPORT',
        desc: 'Pre-delivery inspection, reconditioning, and parts sourcing before the vehicle reaches you.',
        benefits: ['Pre-delivery inspection', 'Reconditioning on request', 'OEM & aftermarket parts sourcing'],
    },
    {
        Icon: IconHandshake,
        title: 'DEALER & RESELLER SUPPORT',
        desc: 'Volume-friendly terms and priority access built for dealers and repeat importers.',
        benefits: ['Priority auction access', 'Volume-based freight rates', 'Dedicated account support'],
    },
];

export default function ServiceCards() {
    return (
        <section id="services" className="bg-white px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">WHAT WE HANDLE</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    SIX SERVICES, ONE MANIFEST
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Every service below can stand alone, or run together as a single, tracked import from start to
                    finish.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map(({ Icon, title, desc, benefits }) => (
                    <div key={title} className="flex flex-col rounded-xl border border-brand-line bg-white p-7">
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue">
                            <Icon />
                        </div>
                        <h3 className="mb-2.5 font-heading text-[16px] font-bold tracking-[0.2px]">{title}</h3>
                        <p className="mb-4 text-[13px] leading-relaxed text-brand-muted">{desc}</p>
                        <ul className="mb-6 flex flex-1 flex-col gap-2">
                            {benefits.map((b) => (
                                <li key={b} className="flex items-start gap-2 text-[12.5px] leading-snug text-brand-ink">
                                    <span className="mt-0.5 font-bold text-brand-blue">✓</span>
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-md border border-brand-blue-light bg-transparent px-5 py-3 text-[11px] font-semibold tracking-[1.5px] text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                        >
                            REQUEST THIS QUOTE
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
