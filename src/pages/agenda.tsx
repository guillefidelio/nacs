import { EventCalendar } from '../components/EventAgenda/Calendar';
import { ActivityFilter } from '../components/EventAgenda/ActivityFilter';

export default function AgendaPage() {
  return (
    <div>
      <h1>Agenda del Evento</h1>
      <ActivityFilter onFilterChange={() => {}} />
      <EventCalendar />
    </div>
  );
}