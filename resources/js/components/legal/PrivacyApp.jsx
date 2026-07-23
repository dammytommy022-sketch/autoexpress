import Nav from '../Nav';
import Footer from '../Footer';
import LegalLayout from './LegalLayout';
import privacy from './content/privacy';

export default function PrivacyApp() {
    return (
        <div className="w-full">
            <Nav />
            <LegalLayout {...privacy} />
            <Footer />
        </div>
    );
}
