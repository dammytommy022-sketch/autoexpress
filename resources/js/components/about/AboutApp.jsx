import Nav from '../Nav';
import Footer from '../Footer';
import AboutHero from './AboutHero';
import CompanyIntro from './CompanyIntro';
import Mission from './Mission';
import TrustFeatures from './TrustFeatures';
import ProcessTimeline from './ProcessTimeline';
import CTA from './CTA';

export default function AboutApp() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <AboutHero />
            <CompanyIntro />
            <Mission />
            <TrustFeatures />
            <ProcessTimeline />
            <CTA />
            <Footer />
        </div>
    );
}
