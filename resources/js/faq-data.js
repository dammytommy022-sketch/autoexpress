let counter = 0;
const item = (q, a) => ({ id: counter++, q, a });

export const faqCategories = [
    {
        name: 'AUCTION & VEHICLE SOURCING',
        items: [
            item(
                'How do I find and bid on a vehicle through AUTOPROEXPRESS?',
                'Tell us the make, model, year, and budget you want, and our sourcing team searches vetted auctions for matching vehicles. You review photos and condition reports and approve the exact vehicle before a licensed bidder places bids on your behalf, up to your approved ceiling.',
            ),
            item(
                'Can I request a specific make, model, trim, or year?',
                'Yes. Auction bidding starts with your specification — we search for that exact vehicle across our network of vetted auctions and sellers, and only bid once you have approved a specific listing and price ceiling.',
            ),
        ],
    },
    {
        name: 'PAYMENTS & DEPOSITS',
        items: [
            item(
                'What payment methods do you accept for quotes and deposits?',
                'We accept bank transfer and major debit/credit cards for quote fees and deposits. Bank details and a reference number are issued with every quote so payments are easy to trace and confirm.',
            ),
            item(
                'Is my deposit refundable if the auction bid is unsuccessful?',
                'Yes. If we are outbid and never win the vehicle, your deposit is refunded in full. Once a bid wins and funds are paid to the auction house on your behalf, the deposit is applied to the purchase and is no longer refundable.',
            ),
        ],
    },
    {
        name: 'SHIPPING & TRANSIT TIME',
        items: [
            item(
                'How long does international shipping take?',
                'Transit time depends on the departure port and shipping method, but most RoRo and container sailings to Nigeria take between 4 and 6 weeks from the port of loading, plus a few additional days for customs clearance on arrival.',
            ),
            item(
                "What's the difference between RoRo and container shipping?",
                'RoRo (Roll-on/Roll-off) drives the vehicle directly onto the vessel and is typically faster and more affordable. Container shipping loads the vehicle into a sealed container, offering extra protection and the option to ship personal effects alongside it, usually at a higher cost.',
            ),
        ],
    },
    {
        name: 'CUSTOMS CLEARANCE',
        items: [
            item(
                'Do I need to be present for customs clearance?',
                'No. Our licensed customs brokers handle duties, documentation, and border clearance entirely on your behalf. You will receive updates as each clearance checkpoint is completed.',
            ),
            item(
                'What documents do I need for clearance in Nigeria?',
                'Typically the bill of lading, commercial invoice, vehicle particulars (including chassis number), and proof of duty payment. Our clearing team prepares and files these documents for you as part of the customs clearing quote.',
            ),
        ],
    },
    {
        name: 'REFUNDS & CANCELLATIONS',
        items: [
            item(
                'Can I cancel an order after the vehicle has been bid on and won?',
                'Once a bid has won and payment has been made to the auction house, the purchase is final and cannot be cancelled, since funds have already left our account on your behalf. Orders can be cancelled freely at any point before a winning bid is placed.',
            ),
            item(
                'How long do refunds take to process?',
                'Approved refunds — such as an unsuccessful bid deposit — are processed within 10 to 14 business days, returned to the original payment method used.',
            ),
        ],
    },
    {
        name: 'VEHICLE TRACKING',
        items: [
            item(
                'How do I track my vehicle after purchase?',
                "Every order is issued a manifest tracking number. Enter it in the Track Your Vehicle section of our site to see the current checkpoint, from auction win through trucking, shipping, clearance, and delivery.",
            ),
            item(
                'What do the tracking checkpoints actually mean?',
                'Checkpoints follow the same seven stages for every vehicle: Request, Pay, Quote, Approve, Import, Track, and Deliver. Each checkpoint updates automatically as your vehicle moves through that stage of the process.',
            ),
        ],
    },
    {
        name: 'DELIVERY IN NIGERIA',
        items: [
            item(
                'Which Nigerian ports do you deliver to?',
                'Vehicles typically arrive through the Lagos ports (Apapa and Tin Can Island). From there, we arrange inland trucking to your delivery address anywhere in Nigeria.',
            ),
            item(
                'Do you offer door-to-door delivery outside Lagos?',
                'Yes. Once a vehicle clears customs, our nationwide trucking partners deliver it directly to your address, whether that is in Lagos or another state, with the delivery insured until it reaches you.',
            ),
        ],
    },
];
