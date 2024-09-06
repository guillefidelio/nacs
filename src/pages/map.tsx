import { InteractiveMap } from '../components/EventMap/InteractiveMap';
import { RecommendedRoutes } from '../components/EventMap/RecommendedRoutes';

export default function MapPage() {
  return (
    <div>
      <h1>Mapa del Evento</h1>
      <InteractiveMap />
      <RecommendedRoutes />
    </div>
  );
}