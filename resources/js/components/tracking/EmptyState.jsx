import { IconSearch } from '../how-it-works/Icons';

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-brand-line bg-brand-fog px-8 py-16 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue-tint text-brand-blue">
                <IconSearch />
            </div>
            <h3 className="mb-2 font-heading text-[18px] font-bold text-brand-ink">NO TRACKING ID YET</h3>
            <p className="max-w-[360px] text-[13.5px] leading-relaxed text-brand-muted">
                Enter your tracking ID above to see live checkpoints for your vehicle — from auction win to
                delivery in Nigeria.
            </p>
        </div>
    );
}
