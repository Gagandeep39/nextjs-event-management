import EventList from '../../components/events/event-list.jsx';
import { getAllEvents } from '../data/dummy-data.js';

const AllEvents = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEvents;
