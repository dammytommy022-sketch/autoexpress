import Nav from '../Nav';
import Footer from '../Footer';
import ContactHero from './ContactHero';
import ResponseBanner from './ResponseBanner';
import ContactSection from './ContactSection';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function ContactApp() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <ContactHero />
            <ResponseBanner />
            <ContactSection />
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
