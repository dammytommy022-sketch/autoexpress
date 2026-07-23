import Nav from '../Nav';
import Footer from '../Footer';
import LegalLayout from './LegalLayout';
import terms from './content/terms';

export default function TermsApp() {
    return (
        <div className="w-full">
            <Nav />
            <LegalLayout {...terms} />
            <Footer />
        </div>
    );
}
