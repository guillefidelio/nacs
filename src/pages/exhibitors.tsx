import { ExhibitorList } from '../components/Exhibitors/ExhibitorList';
import { StandSearch } from '../components/Exhibitors/StandSearch';

export default function ExhibitorsPage() {
  return (
    <div>
      <h1>Expositores</h1>
      <StandSearch />
      <ExhibitorList />
    </div>
  );
}