import Nav from '../Nav';
import Footer from '../Footer';
import TrackingHero from './TrackingHero';
import TrackingSearch from './TrackingSearch';

export default function TrackingApp() {
    return (
        <div className="w-full overflow-hidden">
            <Nav />
            <TrackingHero />
            <TrackingSearch />
            <Footer />
        </div>
    );
}
