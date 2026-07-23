import { STAGES, DEMO_CURRENT_INDEX } from './timelineData';
import VehicleTimeline from './VehicleTimeline';
import DocumentDownloads from './DocumentDownloads';

export default function ResultCard({ trackingId }) {
    const currentStage = STAGES[DEMO_CURRENT_INDEX];

    return (
        <div className="rounded-2xl border border-brand-line bg-white p-7 shadow-[0_20px_50px_rgba(14,165,233,0.08)] md:p-10">
            <div className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b border-brand-line pb-7">
                <div>
                    <div className="mb-1.5 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">TRACKING ID</div>
                    <div className="font-heading text-[22px] font-bold tracking-[0.5px] text-brand-ink">{trackingId}</div>
                </div>
                <div className="text-right">
                    <div className="mb-1.5 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">CURRENT STATUS</div>
                    <div className="font-heading text-[16px] font-bold text-brand-green">{currentStage.label}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
                <VehicleTimeline currentIndex={DEMO_CURRENT_INDEX} />
                <DocumentDownloads currentIndex={DEMO_CURRENT_INDEX} />
            </div>
        </div>
    );
}
