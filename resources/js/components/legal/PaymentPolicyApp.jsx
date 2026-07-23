import Nav from '../Nav';
import Footer from '../Footer';
import LegalLayout from './LegalLayout';
import payment from './content/payment';

export default function PaymentPolicyApp() {
    return (
        <div className="w-full">
            <Nav />
            <LegalLayout {...payment} />
            <Footer />
        </div>
    );
}
