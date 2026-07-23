import { STAGES } from './timelineData';
import { IconCheck } from './Icons';

export default function VehicleTimeline({ currentIndex }) {
    return (
        <div className="flex flex-col">
            {STAGES.map((stage, i) => {
                const isDone = i < currentIndex;
                const isCurrent = i === currentIndex;
                const isLast = i === STAGES.length - 1;

                return (
                    <div key={stage.label} className="relative flex gap-5 pb-9 last:pb-0">
                        {!isLast && (
                            <span
                                className={`absolute top-8 left-[15px] h-full w-[2px] ${
                                    isDone ? 'bg-brand-blue' : 'bg-brand-line'
                                }`}
                            />
                        )}

                        <span
                            className={`relative z-10 flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 text-white ${
                                isCurrent
                                    ? 'border-brand-green bg-brand-green shadow-[0_0_0_5px_rgba(5,150,105,0.15)]'
                                    : isDone
                                      ? 'border-brand-blue bg-brand-blue'
                                      : 'border-brand-line bg-white'
                            }`}
                        >
                            {isDone && <IconCheck />}
                            {isCurrent && <span className="h-2.5 w-2.5 rounded-full bg-white" />}
                        </span>

                        <div className="pt-0.5">
                            <div className="flex flex-wrap items-center gap-2.5">
                                <h4
                                    className={`font-heading text-[15px] font-bold tracking-[0.2px] ${
                                        isCurrent ? 'text-brand-green' : isDone ? 'text-brand-ink' : 'text-brand-faint'
                                    }`}
                                >
                                    {stage.label}
                                </h4>
                                {isCurrent && (
                                    <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-[9px] font-bold tracking-[1.5px] text-white">
                                        CURRENT STAGE
                                    </span>
                                )}
                            </div>
                            <p className={`mt-1 max-w-[460px] text-[13px] leading-relaxed ${isDone || isCurrent ? 'text-brand-muted' : 'text-brand-faint'}`}>
                                {stage.desc}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
