import { IconGavel, IconTruck, IconShip, IconDocument, IconHandshake } from '../services/Icons';
import { IconPin } from '../how-it-works/Icons';

const BENEFITS = [
    {
        Icon: IconGavel,
        title: 'PRIORITY AUCTION ACCESS',
        desc: 'First look and priority bidding windows on incoming auction inventory before general listing.',
    },
    {
        Icon: IconTruck,
        title: 'DISCOUNTED FREIGHT & TRUCKING',
        desc: 'Negotiated freight blocks and inland haulage rates that scale with your monthly volume.',
    },
    {
        Icon: IconHandshake,
        title: 'DEDICATED ACCOUNT MANAGER',
        desc: 'A named agent on your file who coordinates bidding, shipping, and clearance on your behalf.',
    },
    {
        Icon: IconPin,
        title: 'LIVE MANIFEST & FLEET TRACKING',
        desc: 'Real-time visibility across every vehicle in your pipeline, from auction floor to delivery.',
    },
    {
        Icon: IconDocument,
        title: 'FLEXIBLE INVOICING TERMS',
        desc: 'Net-15 or Net-30 invoicing with credit-line options for qualifying premium dealers.',
    },
    {
        Icon: IconShip,
        title: 'PRIORITY CUSTOMS & CLEARANCE',
        desc: 'Your shipments move to the front of the queue with licensed brokers handling every filing.',
    },
];

export default function BenefitsGrid() {
    return (
        <section className="bg-white px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">DEALER BENEFITS</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    BUILT FOR VOLUME PARTNERS
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Every benefit below scales the more you move — from a single trade lot to full container
                    loads.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {BENEFITS.map(({ Icon, title, desc }) => (
                    <div
                        key={title}
                        className="rounded-xl border border-brand-line bg-white p-7 shadow-[0_12px_30px_rgba(14,165,233,0.06)]"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue">
                            <Icon />
                        </div>
                        <h3 className="mb-2.5 font-heading text-[15px] font-bold tracking-[0.2px]">{title}</h3>
                        <p className="text-[13px] leading-relaxed text-brand-muted">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
