import EventList from '../components/events/event-list.jsx';
import { getFeaturedEvents } from './data/dummy-data.js';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>Home</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
