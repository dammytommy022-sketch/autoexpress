import Nav from '../Nav';
import Footer from '../Footer';
import ServicesHero from './ServicesHero';
import ServiceCards from './ServiceCards';
import ComparisonSection from './ComparisonSection';
import CTABanner from './CTABanner';

export default function ServicesApp() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <ServicesHero />
            <ServiceCards />
            <ComparisonSection />
            <CTABanner />
            <Footer />
        </div>
    );
}
