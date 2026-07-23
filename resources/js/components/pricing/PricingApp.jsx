import Nav from '../Nav';
import Footer from '../Footer';
import PricingHero from './PricingHero';
import QuoteFeeCards from './QuoteFeeCards';
import DealerMembership from './DealerMembership';
import PaymentNotice from './PaymentNotice';
import StickyCTABar from './StickyCTABar';

export default function PricingApp() {
    return (
        <div className="w-full overflow-hidden pb-[76px]">
            <Nav />
            <PricingHero />
            <QuoteFeeCards />
            <DealerMembership />
            <PaymentNotice />
            <Footer />
            <StickyCTABar />
        </div>
    );
}
