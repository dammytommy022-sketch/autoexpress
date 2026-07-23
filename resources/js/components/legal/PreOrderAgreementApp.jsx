import Nav from '../Nav';
import Footer from '../Footer';
import LegalLayout from './LegalLayout';
import preorder from './content/preorder';

export default function PreOrderAgreementApp() {
    return (
        <div className="w-full">
            <Nav />
            <LegalLayout {...preorder} />
            <Footer />
        </div>
    );
}
