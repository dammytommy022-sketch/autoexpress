import { useState } from 'react';
import { IconSearch } from '../how-it-works/Icons';
import { DEMO_TRACKING_NUMBER } from './timelineData';
import EmptyState from './EmptyState';
import ResultCard from './ResultCard';

export default function TrackingSearch() {
    const [trackingId, setTrackingId] = useState('');
    const [submittedId, setSubmittedId] = useState(null);
    const [status, setStatus] = useState('idle'); // idle | loading | done
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const value = trackingId.trim();
        if (!value) {
            setError('Enter a tracking ID to continue.');
            setStatus('idle');
            setSubmittedId(null);
            return;
        }
        setError('');
        setStatus('loading');
        setTimeout(() => {
            setSubmittedId(value);
            setStatus('done');
        }, 900);
    };

    return (
        <section className="bg-white px-[22px] py-24 md:px-14">
            <div className="mx-auto max-w-[1040px]">
                <form
                    onSubmit={onSubmit}
                    className="mx-auto mb-12 flex max-w-[640px] flex-col gap-3 sm:flex-row"
                >
                    <div className="relative flex-1">
                        <span className="pointer-events-none absolute top-1/2 left-5 -translate-y-1/2 text-brand-faint">
                            <IconSearch />
                        </span>
                        <input
                            type="text"
                            value={trackingId}
                            onChange={(e) => setTrackingId(e.target.value)}
                            placeholder={`e.g. ${DEMO_TRACKING_NUMBER}`}
                            aria-label="Tracking ID"
                            className="w-full rounded-md border border-brand-line bg-brand-fog py-4.5 pr-4 pl-14 text-[15px] text-brand-ink outline-none focus:border-brand-blue"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="inline-flex items-center justify-center gap-2.5 rounded-md bg-brand-blue px-8 py-4.5 text-[12px] font-semibold tracking-[2px] whitespace-nowrap text-white hover:bg-brand-blue-hover disabled:cursor-wait disabled:opacity-80"
                    >
                        {status === 'loading' && (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        )}
                        {status === 'loading' ? 'SEARCHING...' : 'TRACK VEHICLE'}
                    </button>
                </form>

                {error && (
                    <p className="mx-auto mb-8 max-w-[640px] text-center text-[13px] font-semibold text-red-500">
                        {error}
                    </p>
                )}

                {status === 'loading' ? (
                    <div className="flex flex-col items-center rounded-2xl border border-brand-line bg-brand-fog px-8 py-16 text-center">
                        <span className="mb-5 h-10 w-10 animate-spin rounded-full border-[3px] border-brand-blue-light border-t-brand-blue" />
                        <p className="text-[13.5px] font-semibold text-brand-muted">Looking up your manifest...</p>
                    </div>
                ) : status === 'done' && submittedId ? (
                    <ResultCard trackingId={submittedId} />
                ) : (
                    <EmptyState />
                )}
            </div>
        </section>
    );
}
