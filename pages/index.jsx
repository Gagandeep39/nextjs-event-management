import EventList from '../components/events/event-list.jsx';
import { getFeaturedEvents } from './data/dummy-data.js';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
