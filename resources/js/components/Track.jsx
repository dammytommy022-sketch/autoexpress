import { useState } from 'react';

export default function Track() {
    const [tracking, setTracking] = useState('VCT-2026-084517');

    const onTrack = () => {};

    return (
        <section id="track" className="bg-white px-[22px] py-[72px] md:px-14">
            <div className="relative mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-11 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-deep p-9 text-white md:grid-cols-2 md:p-12">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <div className="relative">
                    <div className="mb-3 text-[11px] font-semibold tracking-[4px] text-brand-accent">LIVE STATUS</div>
                    <h2 className="mb-3.5 font-heading text-[32px] font-bold tracking-[-0.5px]">TRACK YOUR VEHICLE</h2>
                    <p className="text-sm leading-relaxed text-brand-sky-dim">
                        Enter the manifest number from your confirmation email to see the current checkpoint.
                    </p>
                </div>
                <div className="relative rounded-[10px] bg-brand-fog p-6.5">
                    <div className="mb-3 text-[10px] font-semibold tracking-[3px] text-brand-muted">TRACKING NUMBER</div>
                    <div className="flex flex-col gap-2.5 md:flex-row">
                        <input
                            value={tracking}
                            onChange={(e) => setTracking(e.target.value)}
                            placeholder="VCT-2026-084517"
                            className="min-w-0 flex-1 rounded-md border border-[#D3DEEC] bg-white px-3.5 py-3.5 font-heading text-[13px] tracking-[1px] text-brand-ink outline-none"
                        />
                        <button
                            onClick={onTrack}
                            className="rounded-md bg-brand-blue px-5 py-3.5 text-[11px] font-semibold tracking-[1px] whitespace-nowrap text-white hover:bg-brand-blue-hover"
                        >
                            TRACK VEHICLE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
