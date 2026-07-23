export default function StickyCTABar() {
    return (
        <div
            className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-line bg-white/95 px-[22px] py-4 backdrop-blur md:px-14"
            style={{ boxShadow: '0 -8px 24px rgba(14,165,233,0.08)' }}
        >
            <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-3">
                <div className="hidden text-[12.5px] font-medium text-brand-ink sm:block">
                    Ready to import — or become a dealer?
                </div>
                <div className="flex flex-1 flex-wrap gap-2.5 sm:flex-none">
                    <a
                        href="/#contact"
                        className="flex-1 rounded-md bg-brand-blue px-5 py-2.5 text-center text-[11px] font-semibold tracking-[1.5px] text-white hover:bg-brand-blue-hover sm:flex-none"
                    >
                        REQUEST QUOTE
                    </a>
                    <a
                        href="/#contact"
                        className="flex-1 rounded-md bg-brand-green px-5 py-2.5 text-center text-[11px] font-semibold tracking-[1.5px] text-white hover:bg-[#047857] sm:flex-none"
                    >
                        BECOME A DEALER
                    </a>
                </div>
            </div>
        </div>
    );
}
