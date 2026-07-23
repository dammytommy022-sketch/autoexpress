import Nav from '../Nav';
import Footer from '../Footer';
import HowItWorksHero from './HowItWorksHero';
import StepsTimeline from './StepsTimeline';
import JourneyTimeline from './JourneyTimeline';
import CTASection from './CTASection';

export default function HowItWorksApp() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <HowItWorksHero />
            <StepsTimeline />
            <JourneyTimeline />
            <CTASection />
            <Footer />
        </div>
    );
}
