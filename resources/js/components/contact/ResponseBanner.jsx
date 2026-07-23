import { IconClock } from './Icons';

export default function ResponseBanner() {
    return (
        <div className="border-b border-brand-line bg-brand-blue-tint px-[22px] py-4 text-center md:px-14">
            <div className="mx-auto flex max-w-[1040px] items-center justify-center gap-2.5 text-[13px] font-semibold text-brand-blue">
                <span className="text-brand-blue">
                    <IconClock />
                </span>
                Average response time: within 1 business day
            </div>
        </div>
    );
}
