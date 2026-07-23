export const STAGES = [
    { label: 'Request Received', desc: 'Your quote or purchase request has been logged with our team.' },
    { label: 'Quote Prepared', desc: 'An itemized quote covering bidding, freight, and clearance has been issued.' },
    { label: 'Payment Confirmed', desc: 'Payment has cleared and your request has moved into active processing.' },
    { label: 'Vehicle Search in Progress', desc: 'Our sourcing team is matching auction listings to your requirements.' },
    { label: 'Vehicle Won', desc: 'A winning bid has been placed and the vehicle is confirmed as yours.' },
    { label: 'Picked Up', desc: 'The vehicle has been collected from the auction yard or seller.' },
    { label: 'Loaded for Shipping', desc: 'Your vehicle has been loaded into a container or roll-on/roll-off vessel slot.' },
    { label: 'Vessel Departed', desc: 'The vessel carrying your vehicle has departed the origin port.' },
    { label: 'In Transit', desc: 'Your vehicle is currently at sea, on its scheduled sailing to Nigeria.' },
    { label: 'Arrived in Nigeria', desc: 'The vessel has docked and your vehicle is at the destination port.' },
    { label: 'Customs Cleared', desc: 'Duties have been paid and customs clearance has been completed.' },
    { label: 'Delivered', desc: 'Your vehicle has been delivered to your specified address.' },
];

export const DEMO_TRACKING_NUMBER = 'VCT-2026-084517';
export const DEMO_CURRENT_INDEX = 8;

export const DOCUMENTS = [
    { name: 'Bill of Lading', unlockAt: 7 },
    { name: 'Customs Duty Receipt', unlockAt: 10 },
    { name: 'Delivery Note', unlockAt: 11 },
];
