'use client';

import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';
import { Welcome } from '../components/Home/Welcome';
import VideoHome from '../components/Home/VideoHome';
// import { PromoVideo } from '../components/Home/PromoVideo';
// import { EventHighlights } from '../components/Innovations/EventHighlights';
// import { CoolNewProducts } from '../components/Innovations/CoolNewProducts';
// import { PresentationList } from '../components/Presentations/PresentationList';
// import { ExhibitorList } from '../components/Exhibitors/ExhibitorList';
import Submenu from '../components/Home/Submenu';
import InteractiveMap from '../components/Home/InteractiveMap';
import FAQSection from '../components/Home/FAQ';
import Schedule from '../components/Home/Schedule';
import '../styles/globals.css';
import MapaFuel from '../components/Home/MapaFuel';
import SlidingMap from '../components/Home/SlidingMap';
import MapaTech from '../components/Home/MapaTech';

import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const mapParam = searchParams?.get('map') ?? null;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Welcome />
        <VideoHome />
        <Submenu />
        <div className="container mx-auto px-4 py-8 space-y-12">
          {/* Commented sections removed */}
        </div>
        <InteractiveMap />
        <FAQSection />
        <Schedule />
        <SlidingMap initialMap={mapParam as 'fuel' | 'tech' | null} />
        <MapaTech />
        <MapaFuel />
      </main>
      <Footer />
    </div>
  );
}