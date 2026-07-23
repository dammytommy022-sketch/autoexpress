import Nav from '../Nav';
import Footer from '../Footer';
import LegalLayout from './LegalLayout';
import refund from './content/refund';

export default function RefundPolicyApp() {
    return (
        <div className="w-full">
            <Nav />
            <LegalLayout {...refund} />
            <Footer />
        </div>
    );
}
