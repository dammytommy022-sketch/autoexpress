import { useState } from 'react';

const CHECKPOINTS = ['REQUEST', 'PAY', 'QUOTE', 'APPROVE', 'IMPORT', 'TRACK', 'DELIVER'];
const CURRENT_STEP = 4; // 0-based -> "IMPORT"

export default function Track() {
    const [tracking, setTracking] = useState('VCT-2026-084517');
    const [result, setResult] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        setResult({
            num: tracking.trim() || 'VCT-2026-084517',
            checkpoint: String(CURRENT_STEP + 1).padStart(2, '0'),
            label: CHECKPOINTS[CURRENT_STEP],
        });
    };

    return (
        <section id="track" className="bg-white px-[22px] py-[72px] md:px-14">
            <div
                className="relative mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-11 overflow-hidden rounded-2xl border border-[#CBEBFC] bg-white p-9 text-brand-ink md:grid-cols-2 md:p-12"
                style={{ boxShadow: '0 20px 50px rgba(14,165,233,0.08)' }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(14,165,233,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,.05) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <div className="relative">
                    <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-blue">LIVE STATUS</div>
                    <h2 className="mb-3.5 font-heading text-[32px] font-bold tracking-[-0.5px]">TRACK YOUR VEHICLE</h2>
                    <p className="text-sm leading-relaxed text-brand-muted">
                        Enter the manifest number from your confirmation email to see the current checkpoint.
                    </p>
                </div>
                <div className="relative rounded-[10px] border border-brand-line bg-[#F1FAFE] p-6.5">
                    <div className="mb-3 text-[10px] font-semibold tracking-[3px] text-brand-muted">TRACKING NUMBER</div>
                    <form onSubmit={onSubmit} className="flex flex-col gap-2.5 md:flex-row">
                        <input
                            value={tracking}
                            onChange={(e) => setTracking(e.target.value)}
                            placeholder="VCT-2026-084517"
                            className="min-w-0 flex-1 rounded-md border border-[#BAE6FD] bg-white px-3.5 py-3.5 font-heading text-[13px] tracking-[1px] text-brand-ink outline-none"
                        />
                        <button
                            type="submit"
                            className="rounded-md bg-brand-blue px-5 py-3.5 text-[11px] font-semibold tracking-[1px] whitespace-nowrap text-white hover:bg-brand-blue-hover"
                        >
                            TRACK VEHICLE
                        </button>
                    </form>
                    {result && (
                        <div className="mt-4 text-[13px] leading-relaxed text-brand-muted">
                            <b className="text-brand-blue">{result.num}</b> — currently at checkpoint {result.checkpoint} (
                            <b className="text-brand-blue">{result.label}</b>). Cleared inland trucking, now aboard a
                            scheduled sailing. Estimated arrival in 12 days.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
