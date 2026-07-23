import { IconQuote, IconSearch, IconPin } from './Icons';
import { IconGavel, IconTruck, IconShip } from '../services/Icons';

const STEPS = [
    {
        Icon: IconQuote,
        title: 'REQUEST A PAID QUOTE',
        desc: 'Submit the vehicle you want and a small quote fee gets you an itemized landed-cost estimate covering bidding, freight, and clearance. No surprises added later.',
    },
    {
        Icon: IconSearch,
        title: 'VEHICLE SEARCH & APPROVAL',
        desc: 'Our sourcing team searches vetted auctions for vehicles matching your spec. You review photos and condition reports and approve the exact vehicle before we bid.',
    },
    {
        Icon: IconGavel,
        title: 'LIVE AUCTION BIDDING',
        desc: 'A licensed bidder bids in real time up to your approved ceiling. The winning bid is confirmed and paid directly to the auction house on your behalf.',
    },
    {
        Icon: IconTruck,
        title: 'TRUCKING & PORT DELIVERY',
        desc: 'Insured inland trucking moves the vehicle from the auction yard to the departure port, tracked at every mile marker ahead of loading.',
    },
    {
        Icon: IconShip,
        title: 'INTERNATIONAL SHIPPING & CUSTOMS CLEARANCE',
        desc: 'The vehicle ships via a scheduled RoRo or container sailing. On arrival, licensed brokers handle Nigerian customs duties, documentation, and border clearance.',
    },
    {
        Icon: IconPin,
        title: 'FINAL DELIVERY IN NIGERIA',
        desc: 'After clearance, the vehicle is inspected and reconditioned, then delivered insured to your address — the final checkpoint on your manifest.',
    },
];

export default function StepsTimeline() {
    return (
        <section className="bg-white px-[22px] py-24 md:px-14">
            <div className="mb-16 max-w-[680px]">
                <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">STEP BY STEP</div>
                <h2 className="mb-4 font-heading text-[34px] font-bold tracking-[-1px] md:text-[40px]">
                    FROM QUOTE TO YOUR DOORSTEP
                </h2>
                <p className="text-[15px] leading-relaxed text-brand-muted">
                    Every import follows the same six checkpoints, in the same order, every time.
                </p>
            </div>

            <div className="mx-auto max-w-[760px]">
                {STEPS.map(({ Icon, title, desc }, i) => (
                    <div key={title} className="relative flex gap-6 pb-14 last:pb-0 md:gap-8">
                        {i < STEPS.length - 1 && (
                            <div className="absolute top-[68px] bottom-0 left-[27px] border-l border-dashed border-brand-blue-light md:left-[31px]" />
                        )}
                        <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 border-brand-blue bg-white font-heading text-lg font-bold text-brand-blue md:h-16 md:w-16 md:text-xl">
                            {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="pt-1.5">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue">
                                <Icon />
                            </div>
                            <h3 className="mb-2 font-heading text-[17px] font-bold tracking-[0.2px] md:text-[18px]">
                                {title}
                            </h3>
                            <p className="max-w-[560px] text-[14px] leading-relaxed text-brand-muted">{desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
