import Nav from '../Nav';
import Footer from '../Footer';
import DealerHero from './DealerHero';
import BenefitsGrid from './BenefitsGrid';
import PricingCards from './PricingCards';
import ComparisonTable from './ComparisonTable';
import RegistrationForm from './RegistrationForm';
import TrustSection from './TrustSection';
import CTABanner from './CTABanner';

export default function DealerProgramApp() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <DealerHero />
            <BenefitsGrid />
            <PricingCards />
            <ComparisonTable />
            <RegistrationForm />
            <TrustSection />
            <CTABanner />
            <Footer />
        </div>
    );
}
