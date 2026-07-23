import { DOCUMENTS } from './timelineData';
import { IconLock, IconDownload } from './Icons';
import { IconDocument } from '../services/Icons';

export default function DocumentDownloads({ currentIndex }) {
    return (
        <div className="rounded-xl border border-brand-line bg-brand-fog p-6">
            <div className="mb-4 text-[10px] font-semibold tracking-[2.5px] text-brand-blue">SHIPMENT DOCUMENTS</div>
            <div className="flex flex-col gap-3">
                {DOCUMENTS.map((doc) => {
                    const unlocked = currentIndex >= doc.unlockAt;
                    return (
                        <div
                            key={doc.name}
                            className={`flex items-center justify-between gap-4 rounded-md border px-4 py-3.5 ${
                                unlocked ? 'border-brand-line bg-white' : 'border-brand-line bg-brand-mist'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${unlocked ? 'bg-brand-blue-tint text-brand-blue' : 'bg-white text-brand-faint'}`}>
                                    <IconDocument />
                                </span>
                                <div>
                                    <div className="text-[13.5px] font-semibold text-brand-ink">{doc.name}</div>
                                    {!unlocked && (
                                        <div className="text-[11.5px] text-brand-faint">Available once this checkpoint is reached</div>
                                    )}
                                </div>
                            </div>
                            {unlocked ? (
                                <a
                                    href="#"
                                    className="flex items-center gap-1.5 rounded-md bg-brand-blue px-3.5 py-2 text-[11px] font-semibold tracking-[1px] text-white hover:bg-brand-blue-hover"
                                >
                                    <IconDownload />
                                    DOWNLOAD
                                </a>
                            ) : (
                                <span className="flex items-center gap-1.5 rounded-md border border-brand-line px-3.5 py-2 text-[11px] font-semibold tracking-[1px] text-brand-faint">
                                    <IconLock />
                                    LOCKED
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
