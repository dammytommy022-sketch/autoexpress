import { IconQuote } from '../how-it-works/Icons';
import { IconTruck, IconShip, IconDocument, IconWrench } from '../services/Icons';

const FEES = [
    {
        Icon: IconQuote,
        title: 'FULL IMPORT QUOTE',
        price: '₦10,350',
        desc: 'Full landed-cost estimate covering bidding, freight, and clearance for one vehicle.',
    },
    {
        Icon: IconTruck,
        title: 'TRUCKING QUOTE',
        price: '₦20,350',
        desc: 'Inland haulage estimate from the auction yard or seller to port.',
    },
    {
        Icon: IconWrench,
        title: 'REPAIR / PARTS QUOTE',
        price: '₦10,350',
        desc: 'Reconditioning and parts-sourcing estimate before delivery.',
    },
    {
        Icon: IconShip,
        title: 'SHIPPING QUOTE',
        price: 'Company Assessment',
        desc: 'Ocean freight rate assessed per vehicle size, route, and sailing schedule.',
    },
    {
        Icon: IconDocument,
        title: 'CUSTOMS CLEARING QUOTE',
        price: 'Company Assessment',
        desc: 'Duties and clearance cost assessed per vehicle value and destination port.',
    },
];

export default function QuoteFeeCards() {
    return (
        <section className="bg-white px-[22px] py-24 md:px-14">
            <div className="mb-14 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">QUOTE FEES</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    PICK THE QUOTE YOU NEED
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Each quote fee covers our team's time sourcing real, itemized numbers — not an estimate pulled
                    from thin air.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {FEES.map(({ Icon, title, price, desc }) => {
                    const isAssessment = price === 'Company Assessment';
                    return (
                        <div
                            key={title}
                            className="flex flex-col rounded-xl border border-brand-line bg-white p-7 shadow-[0_12px_30px_rgba(14,165,233,0.06)]"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue">
                                <Icon />
                            </div>
                            <h3 className="mb-2 font-heading text-[15px] font-bold tracking-[0.2px]">{title}</h3>
                            <div
                                className={
                                    isAssessment
                                        ? 'mb-3 font-heading text-[19px] font-bold text-brand-muted'
                                        : 'mb-3 font-heading text-[28px] font-bold text-brand-blue'
                                }
                            >
                                {price}
                            </div>
                            <p className="mb-6 flex-1 text-[13px] leading-relaxed text-brand-muted">{desc}</p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center rounded-md border border-brand-blue-light bg-transparent px-5 py-3 text-[11px] font-semibold tracking-[1.5px] text-brand-blue hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                            >
                                REQUEST QUOTE
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
