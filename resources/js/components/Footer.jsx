export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-navy px-[22px] pt-16 pb-8 text-white md:px-14">
            <div className="flex flex-wrap justify-between gap-[60px] border-b border-brand-line pb-11">
                <div className="max-w-[320px]">
                    <div className="mb-3.5 font-heading text-[17px] font-bold tracking-[2px]">
                        AUTO<span className="text-brand-accent">EXPRESS</span>
                    </div>
                    <p className="text-[13px] leading-relaxed text-brand-sky-dim">
                        Manifest-driven vehicle logistics. Bid, truck, ship, clear, and track — all under one number.
                    </p>
                </div>
                <div className="flex flex-wrap gap-[72px]">
                    <div>
                        <div className="mb-[18px] text-[10px] font-semibold tracking-[3px] text-brand-accent">COMPANY</div>
                        <div className="flex flex-col gap-[11px] text-[13px]">
                            <a href="#" className="text-brand-sky">About</a>
                            <a href="#" className="text-brand-sky">FAQ</a>
                            <a href="#contact" className="text-brand-sky">Contact</a>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[18px] text-[10px] font-semibold tracking-[3px] text-brand-accent">LEGAL</div>
                        <div className="flex flex-col gap-[11px] text-[13px]">
                            <a href="#" className="text-brand-sky">Privacy</a>
                            <a href="#" className="text-brand-sky">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-5 pt-6 text-[11px] tracking-[1.5px] text-[#6E82A6]">
                <span>© 2026 AUTOEXPRESS — MANIFEST-DRIVEN VEHICLE LOGISTICS</span>
                <span className="text-brand-accent">BID · TRUCK · SHIP · CLEAR · TRACK</span>
            </div>
        </footer>
    );
}
