import Nav from './Nav';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import WhyUs from './WhyUs';
import Dealers from './Dealers';
import Track from './Track';
import Reviews from './Reviews';
import Footer from './Footer';

export default function App() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <Hero />
            <Services />
            <Process />
            <WhyUs />
            <Dealers />
            <Track />
            <Reviews />
            <Footer />
        </div>
    );
}
